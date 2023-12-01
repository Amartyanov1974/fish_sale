import argparse
import configparser
from environs import Env


def read_args():
    parser = argparse.ArgumentParser(description='Телеграм-магазин по продаже рыбы')
    parser.add_argument('-config', type=str, default='settings.ini', help='Имя файла настроек')
    args = parser.parse_args()
    return args



config = configparser.ConfigParser()
args = read_args()
configfile = args.config
config.read(configfile)

base_url = config['Base']['url']

env = Env()
env.read_env()
tg_token = env.str('TELEGRAM_TOKEN')

strapi_token = env.str('API_TOKEN_FISH')
database_host = env.str('DATABASE_HOST')
database_port = env.int('DATABASE_PORT')
