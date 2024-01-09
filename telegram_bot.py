import os
import logging

from email_validator import validate_email, EmailNotValidError
from redis import Redis

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
from settings import tg_token, database_host, database_port
from strapi_api import(
    get_all_products_cart,
    delete_item_positions,
    update_cart,
    create_item_positions,
    create_cart,
    create_client,
    get_client,
    update_client,
    get_cart,
    get_products,
    get_product,
    get_avatar_product
    )

logger = logging.getLogger(__name__)

_database = None


def check_email(email):
    value = validate_email(email)
    email = value["email"]


def start(update, context):
    keyboard = [[InlineKeyboardButton('Войти', callback_data='handle_menu')]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text('Телеграм-магазин по продаже рыбы',
                              reply_markup=reply_markup)
    return 'HANDLE_MENU'


def handle_menu(update, context):
    chat_id = update.effective_chat.id
    query = update.callback_query
    if query:
        message_id = query.message.message_id
    else:
        message_id = update.message.message_id
    cart = get_cart(chat_id)
    keyboard = []
    username = update.effective_chat.username
    client = get_client(chat_id)
    if not client:
        client = create_client(username, chat_id)
    for product in get_products():
        product_title = product['attributes']['title']
        product_description = product['attributes']['description']
        product_id = product['id']
        keyboard.append([InlineKeyboardButton(product_title,
                         callback_data=f'description {product_id}')])
    keyboard.append([InlineKeyboardButton('Корзина',
                     callback_data='cart 0')])

    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.send_message(chat_id, text='Выберите продукт:',
                             reply_markup=reply_markup)
    context.bot.delete_message(chat_id=chat_id, message_id=message_id)
    return 'HANDLE_DESCRIPTION'


def handle_decription(update, context):
    chat_id = update.effective_chat.id
    query = update.callback_query
    _, product_id = query.data.split()
    message_id = query.message.message_id
    product_description = get_product(product_id)['attributes']['description']
    keyboard = [[
        InlineKeyboardButton('Вернуться  в меню', callback_data='handle_menu'),
        InlineKeyboardButton('Добавить в корзину', callback_data=f'add_product {product_id}')
        ]]
    text = product_description
    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.send_photo(chat_id, get_avatar_product(product_id),
                           caption=text, reply_markup=reply_markup)
    context.bot.delete_message(chat_id=chat_id, message_id=message_id)
    return 'HANDLE_MENU'


def handle_cart(update, context):
    chat_id = update.effective_chat.id
    query = update.callback_query
    action, value_id = query.data.split()
    cart = get_cart(chat_id)
    if action == 'delete_product':
        delete_item_positions(value_id)
    elif action == 'add_product':
        item_positions_id = create_item_positions(value_id)['id']
        if not cart:
            client = get_client(chat_id)[0]
            client_id = client['id']
            cart = [create_cart(chat_id, item_positions_id, client_id)]
        else:
            cart_id = cart[0]['id']
            update_cart(cart_id, chat_id, item_positions_id)
    message_id = query.message.message_id
    keyboard = []
    in_cart = ''
    if cart:
        cart_id = cart[0]['id']
        products_cart = get_all_products_cart(cart_id)
        if products_cart:
            for product in products_cart:
                product_quantity = product['attributes']['quantity']
                product_title = product['attributes']['product']['data']['attributes']['title']
                product_price = product['attributes']['product']['data']['attributes']['price']
                product_id = product['id']
                in_cart = f'{in_cart} \n{product_title}. Цена за единицу товара: {product_price}. Количество товара: {product_quantity}'
                keyboard.append([InlineKeyboardButton(f'Удалить {product_title}',
                                 callback_data=f'delete_product {product_id}')])
            text = in_cart
            keyboard.append([
                InlineKeyboardButton('Вернуться в меню', callback_data='handle_menu'),
                InlineKeyboardButton('Оплатить', callback_data='handle_user_email'),
                ])
        else:
            text = 'Корзина пуста'
            keyboard = [[InlineKeyboardButton('Вернуться в меню',
                                              callback_data='handle_menu')]]
    else:
        text = 'Корзина пуста'
        keyboard = [[InlineKeyboardButton('Вернуться в меню',
                                          callback_data='handle_menu')]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    context.bot.send_message(chat_id, text=text, reply_markup=reply_markup)
    context.bot.delete_message(chat_id=chat_id, message_id=message_id)
    return 'HANDLE_MENU'


def handle_user_email(update, context):
    chat_id = update.effective_chat.id
    query = update.callback_query
    if query:
        message_id = query.message.message_id
        keyboard = [[InlineKeyboardButton('Вернуться в корзину', callback_data='cart 0')]]
        reply_markup = InlineKeyboardMarkup(keyboard)
        context.bot.send_message(chat_id,
                                 text='В ответном сообщении введите ваш e-mail:',
                                 reply_markup=reply_markup)
        context.bot.delete_message(chat_id=chat_id, message_id=message_id)
    else:
        email = update.message.text
        try:
            check_email(email)
            keyboard = [[InlineKeyboardButton('Подтвердить',
                         callback_data='handle_menu')]]
            reply_markup = InlineKeyboardMarkup(keyboard)
            context.bot.send_message(chat_id,
                                     text=f'Ваш e-mail: {email}',
                                     reply_markup=reply_markup)
        except EmailNotValidError:
            message_id = update.message.message_id
            keyboard = [[InlineKeyboardButton('Вернуться в корзину',
                                              callback_data='cart 0')]]
            reply_markup = InlineKeyboardMarkup(keyboard)
            context.bot.send_message(
                chat_id,
                text='Ошибка e-mail.\n В ответном сообщении введите ваш e-mail:',
                reply_markup=reply_markup
                )
            context.bot.delete_message(chat_id=chat_id, message_id=message_id)
        client = get_client(chat_id)[0]
        client_id = client['id']
        update_client(client_id, email)

    return 'HANDLE_USER_EMAIL'


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
        user_reply = update.callback_query.data.split()[0]
        chat_id = update.callback_query.message.chat_id
    else:
        return
    if user_reply == '/start':
        user_state = 'START'
    elif user_reply in ['cart', 'add_product', 'delete_product']:
        user_state = 'HANDLE_CART'
    elif user_reply == 'handle_menu':
        user_state = 'HANDLE_MENU'
    elif user_reply == 'handle_user_email':
        user_state = 'HANDLE_USER_EMAIL'
    else:
        user_state = db.get(chat_id)
    states_functions = {
        'START': start,
        'HANDLE_MENU': handle_menu,
        'HANDLE_DESCRIPTION': handle_decription,
        'HANDLE_CART': handle_cart,
        'HANDLE_USER_EMAIL': handle_user_email,
    }
    state_handler = states_functions[user_state]

    try:
        next_state = state_handler(update, context)
        logger.info(f'user_state: {next_state}')
        db.set(chat_id, next_state)
    except Exception as err:
        print(err)


def get_database_connection():
    global _database
    if _database is None:
        _database = Redis(host=database_host,
                         port=database_port,
                         decode_responses=True)
    return _database


def main():
    loglevel = 'INFO'
    logger = logging.getLogger(__name__)
    logger.setLevel(loglevel)
    console_handler = logging.StreamHandler()
    console_handler.setLevel(loglevel)
    formatter = logging.Formatter('%(asctime)s - %(funcName)s - %(message)s')
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)

    updater = Updater(tg_token)
    dispatcher = updater.dispatcher
    dispatcher.add_handler(CallbackQueryHandler(handle_users_reply))
    dispatcher.add_handler(MessageHandler(Filters.text, handle_users_reply))
    dispatcher.add_handler(CommandHandler('start', handle_users_reply))
    updater.start_polling()
    updater.idle()


if __name__ == '__main__':
    main()
