import os
import json
from urllib.parse import urljoin
import requests
from io import BytesIO

from settings import base_url, strapi_token


def get_all_products_cart(cart_id):
    params = {'populate[item_positions][populate]': 'product'}
    url = urljoin(base_url, f'/api/carts/{cart_id}')
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, params=params, headers=payload)
    response.raise_for_status()
    products = response.json()['data']['attributes']['item_positions']['data']
    cart = []
    for product in products:
        cart.append(product)
    return cart


def delete_item_positions(item_positions_id):
    url = urljoin(base_url, f'/api/item-positions/{item_positions_id}')
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.delete(url, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def update_cart(cart_id, chat_id, item_positions_id):
    url = urljoin(base_url, f'/api/carts/{cart_id}')
    payload = {'Authorization': f'bearer {strapi_token}'}
    data = {"data": {"telegram_user_id": str(chat_id),
                     "item_positions": {"connect": [item_positions_id]}}}
    response = requests.put(url, json=data, headers=payload)
    response.raise_for_status()


def create_item_positions(product_id, quantity=1):
    url = urljoin(base_url, '/api/item-positions')
    payload = {'Authorization': f'bearer {strapi_token}'}
    data = {"data": {"product": product_id, "quantity": quantity}}
    response = requests.post(url, json=data, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def create_cart(chat_id, item_positions_id, client_id):
    url = urljoin(base_url, '/api/carts')
    payload = {'Authorization': f'bearer {strapi_token}'}
    data = {"data": {"telegram_user_id": str(chat_id),
                     "item_positions": item_positions_id,
                     "client": {"connect": [client_id]}}}
    response = requests.post(url, json=data, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def create_client(username, chat_id):
    url = urljoin(base_url, 'api/clients')
    payload = {'Authorization': f'bearer {strapi_token}'}
    data = {"data": {"telegram_id": str(chat_id), "username": username}}
    response = requests.post(url, json=data, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def get_client(chat_id):
    params = {'filters[telegram_id][$eq]': f'{chat_id}'}
    url = urljoin(base_url, '/api/clients')
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, params=params, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def update_client(client_id, email):
    url = urljoin(base_url, f'/api/clients/{client_id}')
    payload = {'Authorization': f'bearer {strapi_token}'}
    data = {"data": {"email": str(email)}}
    response = requests.put(url, json=data, headers=payload)
    response.raise_for_status()


def get_cart(chat_id):
    params = {'filters[telegram_user_id][$eq]': f'{chat_id}'}
    url = urljoin(base_url, '/api/carts')
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, params=params, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def get_products():
    url = urljoin(base_url, '/api/products')
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def get_product(product_id):
    url = urljoin(base_url, f'/api/products/{product_id}')
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    return response.json()['data']


def get_avatar_product(product_id):
    params = {'populate': 'picture'}
    url = urljoin(base_url, f'/api/products/{product_id}')
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, params=params, headers=payload)
    response.raise_for_status()
    url = response.json()['data']['attributes']['picture']['data'][0]['attributes']['url']
    url = urljoin('http://localhost:1337/', url)
    response = requests.get(url)
    return BytesIO(response.content)
