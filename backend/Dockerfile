FROM php:8.3-fpm

RUN docker-php-ext-install pdo pdo_mysql

RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    git \
    net-tools \
    procps \
    netcat-traditional \
    && docker-php-ext-install zip

WORKDIR /var/www

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .

RUN cp .env.example .env

RUN composer update --no-dev
RUN composer install

RUN chown -R www-data:www-data /var/www

EXPOSE 9000

CMD ["php-fpm"]
