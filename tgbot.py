import requests
import os
from environs import Env
from urllib.parse import urlparse
from pprint import pprint


def get_strapi_api(link, strapi_token):
    payload = {'Authorization': f'bearer {strapi_token}'}
    #url = urlparse(link)
    response = requests.get(link, headers=payload)
    response.raise_for_status()
    print(response.text)
    message = response.json
    print(message)



def main():
    env = Env()
    env.read_env()
    strapi_token = env.str('API_TOKEN_FISH')
    url = 'http://localhost:1337/api/products'
    #url = 'https://google.com'
    get_strapi_api(url, strapi_token)


if __name__ == '__main__':
    main()
