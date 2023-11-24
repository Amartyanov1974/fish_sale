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
    # print (response.json()['data'])
    return response.json()['data']


def get_all_products_cart(cart_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/carts/{cart_id}?populate[item_positions][populate]=product'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    products = response.json()['data']['attributes']['item_positions']['data']
    # in_cart = ''
    cart =[]
    for product in products:
        # pprint(json.dumps(product['attributes'], ensure_ascii=False, indent=2))
        cart.append(product)
        # product_quantity = product['attributes']['quantity']
        # product_title = product['attributes']['product']['data']['attributes']['title']
        # product_price = product['attributes']['product']['data']['attributes']['price']
        # in_cart = f'{in_cart} \n{product_title}. Цена за единицу товара: {product_price}. Количество товара: {product_quantity}'
    pprint(cart)
    return cart


def delete_item_positions(item_positions_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/item-positions/{item_positions_id}'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.delete(url, headers=payload)
    response.raise_for_status()
    print ('delete_item_positions', response.json()['data'])
    print()
    return response.json()['data']


def update_entry(cart_id, chat_id, item_positions_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/carts/{cart_id}'
    payload = {'Authorization': f'bearer {strapi_token}'}
    data =  {"data": {"telegram_user_id": str(chat_id), "item_positions": {"connect": [item_positions_id]}}}
    response = requests.put(url, json=data, headers=payload)
    response.raise_for_status()
    print ('update_entry', response.json()['data'])
    print()
    return response.json()['data']


def create_item_positions(fish_id, quantity=1):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/item-positions'
    payload = {'Authorization': f'bearer {strapi_token}'}
    data =  {"data": {"product": fish_id, "quantity": quantity,}}
    response = requests.post(url, json=data, headers=payload)
    response.raise_for_status()
    print ('create_item_positions', response.json()['data'])
    print()
    return response.json()['data']


def create_entry(chat_id, item_positions_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/carts'
    payload = {'Authorization': f'bearer {strapi_token}'}
    data =  {"data": {"telegram_user_id": str(chat_id), "item_positions": item_positions_id}}
    response = requests.post(url, json=data, headers=payload)
    response.raise_for_status()
    print ('create_entry', response.json()['data'])
    print()
    return response.json()['data']


def get_entry(chat_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/carts?filters[telegram_user_id][$eq]={chat_id}'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    print ('get_entry', response.json()['data'])
    print()
    return response.json()['data']


def get_products():
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = 'http://localhost:1337/api/products'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    print ('get_products', response.json()['data'])
    print()
    return response.json()['data']


def get_product(product_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = f'http://localhost:1337/api/products/{product_id}'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    print ('get_product', response.json()['data'])
    print()
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

    """
    keyboard = []

    for product in get_products():
        product_title = product['attributes']['title']
        product_description = product['attributes']['description']
        product_id = product['id']
        keyboard.append([InlineKeyboardButton(product_title, callback_data=product_id)])

    reply_markup = InlineKeyboardMarkup(keyboard)

    update.message.reply_text('Выберите продукт:', reply_markup=reply_markup)
    return 'HANDLE_MENU'


def handle_cart(update, context):
    pass
    # """
    # Хэндлер для состояния HANDLE_CART.

    # """
    # keyboard = []
    # cart = get_entry(chat_id)
    # in_cart = ''
    # if cart:
        # cart_id = cart[0]['id']
        # products_cart = get_all_products_cart(cart_id)
        # for product in products_cart:
            # product_quantity = product['attributes']['quantity']
            # product_title = product['attributes']['product']['data']['attributes']['title']
            # product_price = product['attributes']['product']['data']['attributes']['price']
            # product_id = product['id']
            # in_cart = f'{in_cart} \n{product_title}. Цена за единицу товара: {product_price}. Количество товара: {product_quantity}'
            # keyboard.append([InlineKeyboardButton(f'Удалить {product_title}', callback_data=f'delete_product {product_id}')])
        # text = in_cart
        # keyboard.append([InlineKeyboardButton('Вернуться', callback_data='return_menu'),])
    # else:
        # text = 'Корзина пуста'
        # keyboard = [[InlineKeyboardButton('Вернуться', callback_data='return_menu')],]
    # reply_markup = InlineKeyboardMarkup(keyboard)
    # context.bot.send_message(chat_id, text=text, reply_markup=reply_markup)
    # return 'HANDLE_MENU'

def handle_menu(update, context):
    """
    Хэндлер для состояния handle_menu.

    """
    chat_id = update.effective_chat.id
    query = update.callback_query
    print(query.data)

    answer = query.data
    context.bot.delete_message(chat_id=chat_id, message_id=query.message.message_id)
    if answer == 'basket':
        keyboard = []
        cart = get_entry(chat_id)
        in_cart = ''
        if cart:
            cart_id = cart[0]['id']
            products_cart = get_all_products_cart(cart_id)
            for product in products_cart:
                product_quantity = product['attributes']['quantity']
                product_title = product['attributes']['product']['data']['attributes']['title']
                product_price = product['attributes']['product']['data']['attributes']['price']
                product_id = product['id']
                in_cart = f'{in_cart} \n{product_title}. Цена за единицу товара: {product_price}. Количество товара: {product_quantity}'
                keyboard.append([InlineKeyboardButton(f'Удалить {product_title}', callback_data=f'delete_product {product_id}')])
            text = in_cart
            keyboard.append([InlineKeyboardButton('Вернуться', callback_data='return_menu'),])
        else:
            text = 'Корзина пуста'
            keyboard = [[InlineKeyboardButton('Вернуться', callback_data='return_menu')],]
        reply_markup = InlineKeyboardMarkup(keyboard)
        context.bot.send_message(chat_id, text=text, reply_markup=reply_markup)
        # return 'HANDLE_CART'


    else:
        product_description = get_product(query.data)['attributes']['description']
        keyboard = [[InlineKeyboardButton('Вернуться', callback_data='return_menu'),
                     InlineKeyboardButton('Добавить в корзину', callback_data=f'create_basket {query.data}')],]
        text = product_description

        reply_markup = InlineKeyboardMarkup(keyboard)

        context.bot.send_photo(chat_id, get_avatar_product(query.data), caption=text, reply_markup=reply_markup)
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
    cart = get_entry(chat_id)

    if answer[0] == 'create_basket':
        product_id = answer[1]
        item_positions_id = create_item_positions(product_id)['id']
        print('item_positions_id=', item_positions_id)
        if not cart:
            cart = [create_entry(chat_id, item_positions_id),]
        else:
            cart_id = cart[0]['id']
            cart = update_entry(cart_id, chat_id, item_positions_id)
    # elif answer[0] == 'return_menu':
        # get_all_products_cart()
    if answer[0] == 'delete_product':
        item_positions_id = answer[1]
        delete_item_positions(item_positions_id)

    keyboard = []

    for product in get_products():
        product_title = product['attributes']['title']
        product_description = product['attributes']['description']
        product_id = product['id']
        keyboard.append([InlineKeyboardButton(product_title, callback_data=product_id)])
    keyboard.append([InlineKeyboardButton('Корзина', callback_data='basket')])

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
        'HANDLE_DESCRIPTION': handle_decription,
        'HANDLE_CART': handle_cart
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


def main():
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


if __name__ == '__main__':
    main()
