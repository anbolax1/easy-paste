1. Копируем себе проект: git clone https://github.com/anbolax1/easy-paste.git
2. Заходим в корневую папку: cd easy_paste
3. Собираем и запускаем контейнеры: docker compose up -d
4. Заходим в контейнер бэка и накатываем миграции: docker exec -it back bash -> php artisan migrate
5. Готово.
   WEB - http://localhost;
   5/API - http://localhost/api;
   PMA - http://localhost:8080;
