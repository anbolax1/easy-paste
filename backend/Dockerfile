FROM php:8.3-fpm

RUN docker-php-ext-install pdo pdo_mysql

RUN apt-get update && apt-get install -y net-tools

WORKDIR /var/www

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

RUN composer install

RUN chown -R www-data:www-data /var/www

CMD ["php-fpm"]
