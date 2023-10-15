import requests
import os
from environs import Env
from urllib.parse import urlparse
from pprint import pprint


def get_products(strapi_token):
    url = 'http://localhost:1337/api/products'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    message = response.json()
    pprint(message)


def get_product(strapi_token, product_id):
    url = f'http://localhost:1337/api/products/{product_id}'
    payload = {'Authorization': f'bearer {strapi_token}'}
    response = requests.get(url, headers=payload)
    response.raise_for_status()
    message = response.json()
    pprint(message)


def main():
    env = Env()
    env.read_env()
    strapi_token = os.getenv('API_TOKEN_FISH')
    url = 'http://localhost:1337/api/products'
    # get_products(strapi_token)
    get_product(strapi_token, 1)


if __name__ == '__main__':
    main()
