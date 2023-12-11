# Телеграм бот для продажи рыбы
## Описание проекта
Для работы необходимо установить [CMS Strapi](https://strapi.io/)



## Примеры работы программы

![Снимок экрана_2023-11-10_16-00-21](https://github.com/Amartyanov1974/fish_sale/assets/74543172/ef07bc09-deab-4ff1-9ac5-3bda81cde8f2)<br>

![Снимок экрана_2023-11-10_16-00-44](https://github.com/Amartyanov1974/fish_sale/assets/74543172/79927d1a-f562-464b-93f1-a8b50c2903d4)<br>

![Снимок экрана_2023-11-10_16-01-11](https://github.com/Amartyanov1974/fish_sale/assets/74543172/07e64091-ca5a-42db-99f8-bda149766d54)<br>

![Снимок экрана_2023-11-10_16-01-54](https://github.com/Amartyanov1974/fish_sale/assets/74543172/ac55797b-e5f4-4a13-9966-97861989dfc3)<br>

![Снимок экрана_2023-11-10_16-02-34](https://github.com/Amartyanov1974/fish_sale/assets/74543172/303db0fd-bd62-420c-8493-79e83316e1b3)<br>


## Переменные окружения
Для работы бота необходимы следующие переменные окружения:

`STRAPI_API_TOKEN` - токен, для работы с API STRAPI.<br>
`TELEGRAM_TOKEN` - токен для телеграм бота, получить здесь: https://t.me/BotFather.

## Файл конфигурации
По умолчанию используется файл конфигурации `settings.ini`<br>

`[Base]`<br>
`url: http://localhost:1337/` - адрес размещения CMS STRAPI.<br>
`[REDIS]`<br>
`DATABASE_HOST: localhost` - адрес размещения базы REDIS<br>
`DATABASE_PORT: 6379` - порт для подключения к REDIS<br>

## Запуск бота
```
usage: telegram_bot.py [-h] [-config CONFIG]

Телеграм-магазин по продаже рыбы

options:
  -h, --help      show this help message and exit
  -c, --config CONFIG  Имя файла настроек (default=settings.ini)
```

## Как установить
Python3 должен быть установлен. Затем используйте `pip` для установки зависимостей:
```
pip install -r requirements.txt
```

## Цель проекта
Код написан в образовательных целях на онлайн-курсе для веб-разработчиков [dvmn.org](https://dvmn.org/).

