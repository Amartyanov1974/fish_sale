"""
Работает с этими модулями:

python-telegram-bot==13.15
redis==3.2.1
"""
import os
import json
import logging
import requests
from redis import Redis
from environs import Env
from urllib.parse import urljoin
from io import BytesIO
from pprint import pprint


from telegram import (
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    )
from telegram.ext import (
    Filters, Updater,
    CallbackQueryHandler,
    CommandHandler,
    MessageHandler,
    )


logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(funcName)s - %(message)s',
    level=logging.INFO,
)

logger = logging.getLogger(__name__)

_database = None


def get_item_positions():
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/item-positions/18?populate=*'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    print (response.json()['data'])
    return response.json()['data']


def get_carts():
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/carts/9?populate=*'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    print (response.json()['data'])
    return response.json()['data']


def delete_entry():
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/item-positions/1'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.delete(url, headers=payload)
    response.raise_for_status()
    print (response.json()['data'])


def update_entry(cart_id, chat_id, item_positions_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/carts/{cart_id}'
    payload = {'Authorization': f'bearer {strapi_token}'}
    data =  {"data": {"telegram_user_id": str(chat_id), "item_positions": {"connect": [item_positions_id]}}}
    response = requests.put(url, json=data, headers=payload)
    response.raise_for_status()
    print (response.json()['data'])
    return response.json()['data']


def create_item_positions(fish_id, quantity=1):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/item-positions'
    payload = {'Authorization': f'bearer {strapi_token}'}
    data =  {"data": {"product": fish_id, "quantity": quantity,}}
    response = requests.post(url, json=data, headers=payload)
    response.raise_for_status()
    print (response.json()['data'])
    return response.json()['data']


def create_entry(chat_id, item_positions_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/carts'
    payload = {'Authorization': f'bearer {strapi_token}'}
    data =  {"data": {"telegram_user_id": str(chat_id), "item_positions": item_positions_id}}
    response = requests.post(url, json=data, headers=payload)
    response.raise_for_status()
    print (response.json()['data'])
    return response.json()['data']


def get_entry(chat_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/carts?filters[telegram_user_id][$eq]={chat_id}'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    print (response.json()['data'])
    return response.json()['data']


def get_products():
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = 'http://localhost:1337/api/products'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def get_product(product_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/products/{product_id}'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def get_avatar_product(product_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/products/{product_id}?populate=picture'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    url = response.json()['data']['attributes']['picture']['data'][0]['attributes']['url']
    url = urljoin('http://localhost:1337/', url)
    response = requests.get(url)
    return BytesIO(response.content)


def start(update, context):
    """
    Хэндлер для состояния START.

    Бот отвечает пользователю фразой "Привет!" и переводит его в состояние HANDLE_MENU.
    Теперь в ответ на его команды будет запускаеться хэндлер handle_menu.
    """
    keyboard = []

    for position in get_products():
        fish_attributes = position['attributes']
        fish_title = fish_attributes['title']
        fish_description = fish_attributes['description']
        keyboard.append([InlineKeyboardButton(fish_title, callback_data=position['id'])])

    reply_markup = InlineKeyboardMarkup(keyboard)

    update.message.reply_text('Выберите продукт:', reply_markup=reply_markup)
    return 'HANDLE_MENU'


def handle_menu(update, context):
    """
    Хэндлер для состояния handle_menu.

    Бот отвечает пользователю тем же, что пользователь ему написал.
    Оставляет пользователя в состоянии handle_decription.
    """

    query = update.callback_query
    print(query.data)
    fish_attributes = get_product(query.data)['attributes']
    fish_description = fish_attributes['description']
    keyboard = [[InlineKeyboardButton('Вернуться', callback_data='handle_decription'),
                 InlineKeyboardButton('Добавить в корзину', callback_data=f'create_basket {query.data}')],]
    chat_id=update.effective_chat.id
    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.delete_message(chat_id=chat_id, message_id=query.message.message_id)
    context.bot.send_photo(chat_id, get_avatar_product(query.data), caption=fish_description, reply_markup=reply_markup)
    return 'HANDLE_DESCRIPTION'


def handle_decription(update, context):
    """
    Хэндлер для состояния handle_decription.

    Оставляет пользователя в состоянии handle_menu.
    """
    chat_id = update.effective_chat.id
    query = update.callback_query
    answer = query.data.split()
    print(answer)


    if answer[0] == 'create_basket':


        fish_id = answer[1]
        item_positions_id = create_item_positions(fish_id)['id']
        print(item_positions_id)
        cart = get_entry(chat_id)
        if not cart:
            cart = [create_entry(chat_id, item_positions_id),]
        else:
            cart_id = cart[0]['id']
            cart = update_entry(cart_id, chat_id, item_positions_id)
        print()
        get_carts()
        """{'id': 9, 'attributes': {'createdAt': '2023-11-07T18:25:38.057Z', 'updatedAt': '2023-11-07T19:34:23.237Z', 'publishedAt': '2023-11-07T18:25:38.054Z', 'telegram_user_id': '411157618', 'item_positions': {'data': [{'id': 18, 'attributes': {'quantity': 1, 'createdAt': '2023-11-07T18:50:16.226Z', 'updatedAt': '2023-11-07T18:50:16.226Z', 'publishedAt': '2023-11-07T18:50:16.223Z'}}, {'id': 19, 'attributes': {'quantity': 1, 'createdAt': '2023-11-07T19:02:41.660Z', 'updatedAt': '2023-11-07T19:02:41.660Z', 'publishedAt': '2023-11-07T19:02:41.653Z'}}, {'id': 20, 'attributes': {'quantity': 1, 'createdAt': '2023-11-07T19:03:46.003Z', 'updatedAt': '2023-11-07T19:03:46.003Z', 'publishedAt': '2023-11-07T19:03:45.997Z'}}, {'id': 21, 'attributes': {'quantity': 1, 'createdAt': '2023-11-07T19:09:37.640Z', 'updatedAt': '2023-11-07T19:09:37.640Z', 'publishedAt': '2023-11-07T19:09:37.635Z'}}, {'id': 22, 'attributes': {'quantity': 1, 'createdAt': '2023-11-07T19:30:52.778Z', 'updatedAt': '2023-11-07T19:30:52.778Z', 'publishedAt': '2023-11-07T19:30:52.771Z'}}, {'id': 23, 'attributes': {'quantity': 1, 'createdAt': '2023-11-07T19:34:22.989Z', 'updatedAt': '2023-11-07T19:34:22.989Z', 'publishedAt': '2023-11-07T19:34:22.984Z'}}]}, 'users_permissions_user': {'data': None}}}"""

        print()
        get_item_positions()
        """{'id': 18, 'attributes': {'quantity': 1, 'createdAt': '2023-11-07T18:50:16.226Z', 'updatedAt': '2023-11-07T18:50:16.226Z', 'publishedAt': '2023-11-07T18:50:16.223Z', 'cart': {'data': {'id': 9, 'attributes': {'createdAt': '2023-11-07T18:25:38.057Z', 'updatedAt': '2023-11-07T19:34:23.237Z', 'publishedAt': '2023-11-07T18:25:38.054Z', 'telegram_user_id': '411157618'}}}, 'product': {'data': {'id': 5, 'attributes': {'title': 'Дикий лосось', 'description': 'Дикий лосось "Стейк рыбацкий" с/м 600г', 'price': 420, 'createdAt': '2023-10-14T12:26:09.175Z', 'updatedAt': '2023-10-14T20:02:12.907Z', 'publishedAt': '2023-10-14T12:26:39.622Z'}}}}}"""




    keyboard = []

    for position in get_products():
        fish_attributes = position['attributes']
        fish_title = fish_attributes['title']
        fish_description = fish_attributes['description']
        keyboard.append([InlineKeyboardButton(fish_title, callback_data=position['id'])])

    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.delete_message(chat_id=chat_id, message_id=query.message.message_id)
    context.bot.send_message(chat_id, text='Выберите продукт:', reply_markup=reply_markup)
    return 'HANDLE_MENU'




def handle_users_reply(update, context):
    """
    Функция, которая запускается при любом сообщении от пользователя и решает как его обработать.
    Эта функция запускается в ответ на эти действия пользователя:
        * Нажатие на inline-кнопку в боте
        * Отправка сообщения боту
        * Отправка команды боту
    Она получает стейт пользователя из базы данных и запускает соответствующую функцию-обработчик (хэндлер).
    Функция-обработчик возвращает следующее состояние, которое записывается в базу данных.
    Если пользователь только начал пользоваться ботом, Telegram форсит его написать "/start",
    поэтому по этой фразе выставляется стартовое состояние.
    Если пользователь захочет начать общение с ботом заново, он также может воспользоваться этой командой.
    """
    db = get_database_connection()
    if update.message:
        user_reply = update.message.text
        chat_id = update.message.chat_id
    elif update.callback_query:
        user_reply = update.callback_query.data
        chat_id = update.callback_query.message.chat_id
    else:
        return
    if user_reply == '/start':
        user_state = 'START'
    else:
        user_state = db.get(chat_id)

    states_functions = {
        'START': start,
        'HANDLE_MENU': handle_menu,
        'HANDLE_DESCRIPTION': handle_decription
    }
    state_handler = states_functions[user_state]

    # Если вы вдруг не заметите, что python-telegram-bot перехватывает ошибки.
    # Оставляю этот try...except, чтобы код не падал молча.
    # Этот фрагмент можно переписать.
    try:
        next_state = state_handler(update, context)
        db.set(chat_id, next_state)
    except Exception as err:
        print(err)

def get_database_connection():
    """
    Возвращает конекшн с базой данных Redis, либо создаёт новый, если он ещё не создан.
    """
    global _database
    if _database is None:
        database_host = os.getenv('DATABASE_HOST')
        database_port = os.getenv('DATABASE_PORT')
        _database = Redis(host=database_host, port=database_port, decode_responses=True)
    return _database


if __name__ == '__main__':
    env = Env()
    env.read_env()
    tg_token = env.str('TELEGRAM_TOKEN')
    updater = Updater(tg_token)
    dispatcher = updater.dispatcher
    dispatcher.add_handler(CallbackQueryHandler(handle_users_reply))
    dispatcher.add_handler(MessageHandler(Filters.text, handle_users_reply))
    dispatcher.add_handler(CommandHandler('start', handle_users_reply))
    updater.start_polling()
    updater.idle()
