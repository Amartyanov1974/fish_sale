"""
Работает с этими модулями:

python-telegram-bot==13.15
redis==3.2.1
"""
import os
import logging
import requests
from redis import Redis
from environs import Env
from functools import partial

from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Filters, Updater
from telegram.ext import CallbackQueryHandler, CommandHandler, MessageHandler


logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(funcName)s - %(message)s',
    level=logging.INFO,
)

logger = logging.getLogger(__name__)


def get_products():
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = 'http://localhost:1337/api/products'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def get_product(product_id):
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = 'http://localhost:1337/api/products/{product_id}'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def start(update, context):
    """
    Хэндлер для состояния START.

    Бот отвечает пользователю фразой "Привет!" и переводит его в состояние ECHO.
    Теперь в ответ на его команды будет запускаеться хэндлер echo.
    """
    query = update.callback_query
    text = query.data
    query.edit_message_text(text=text)
    keyboard = []

    for position in get_products():
        fish_attributes = position['attributes']
        fish_title = fish_attributes['title']
        fish_description = fish_attributes['description']
        print(fish_title, fish_description)

        keyboard.append([InlineKeyboardButton(fish_title, callback_data=position['id'])])



    reply_markup = InlineKeyboardMarkup(keyboard)

    update.message.reply_text('Please choose:', reply_markup=reply_markup)
    return 'ECHO'


def echo(update, context):
    """
    Хэндлер для состояния ECHO.

    Бот отвечает пользователю тем же, что пользователь ему написал.
    Оставляет пользователя в состоянии ECHO.
    """
    #users_reply = update.message.text
    #update.message.reply_text(users_reply)
    query = update.callback_query
    text = query.data
    query.edit_message_text(text=text)
    return 'ECHO'


def handle_menu(update, context):
    """
    Хэндлер для состояния ECHO.

    Бот отвечает пользователю тем же, что пользователь ему написал.
    Оставляет пользователя в состоянии ECHO.
    """
    query = update.callback_query
    text = query.data
    query.edit_message_text(text=text)
    keyboard = []

    for position in get_products():
        fish_attributes = position['attributes']
        fish_title = fish_attributes['title']
        fish_description = fish_attributes['description']
        print(fish_title, fish_description)

        keyboard.append([InlineKeyboardButton(fish_title, callback_data=position['id'])])

        fish_attributes = get_products(query.data)['attributes']
        fish_description = fish_attributes['description']

    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text(fish_description, reply_markup=reply_markup)
    return 'ECHO'


def handle_users_reply(update, context, db):
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
        'ECHO': echo,
        'HANDLE_MENU': handle_menu
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


def main():
    env = Env()
    env.read_env()
    tg_token = env.str('TELEGRAM_TOKEN')
    database_host = env.str('DATABASE_HOST')
    database_port = env.str('DATABASE_PORT')
    updater = Updater(tg_token)
    dispatcher = updater.dispatcher
    dbase = Redis(host=database_host, port=database_port, decode_responses=True)
    handle_users_reply_with_db = partial(handle_users_reply, db=dbase)
    dispatcher.add_handler(CallbackQueryHandler(handle_users_reply_with_db))
    dispatcher.add_handler(MessageHandler(Filters.text, handle_users_reply_with_db))
    dispatcher.add_handler(CommandHandler('start', handle_users_reply_with_db))
    updater.start_polling()
    updater.idle()


if __name__ == '__main__':
    main()
