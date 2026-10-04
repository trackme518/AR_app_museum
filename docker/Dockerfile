FROM composer:2 AS dependencies

WORKDIR /build/app
COPY composer.json composer.lock ./
RUN composer install --no-dev --prefer-dist --no-interaction --no-progress --optimize-autoloader

WORKDIR /build/rag-parser
COPY rag-parser/composer.json rag-parser/composer.lock ./
RUN composer install --no-dev --prefer-dist --no-interaction --no-progress --optimize-autoloader \
    --ignore-platform-req=ext-gd

FROM node:24-alpine AS browser-dependencies

WORKDIR /build/app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM php:8.3-apache

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
        libcurl4-openssl-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libonig-dev \
        libpng-dev \
        libwebp-dev \
        libxml2-dev \
        libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install -j"$(nproc)" curl gd mbstring pdo_mysql zip opcache \
    && a2enmod headers rewrite \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY docker/apache-vhost.conf /etc/apache2/sites-available/000-default.conf
COPY docker/servername.conf /etc/apache2/conf-enabled/servername.conf
COPY docker/php.ini /usr/local/etc/php/conf.d/ar-museum.ini
COPY docker/entrypoint.sh /usr/local/bin/ar-museum-entrypoint
COPY . /var/www/html
COPY --from=dependencies /build/app/vendor /var/www/html/vendor
COPY --from=dependencies /build/rag-parser/vendor /var/www/html/rag-parser/vendor
COPY --from=browser-dependencies /build/app/node_modules/i18next/i18next.min.js /var/www/html/third_party/i18next/i18next.min.js
COPY --from=browser-dependencies /build/app/node_modules/i18next/LICENSE /var/www/html/third_party/i18next/LICENSE
COPY --from=browser-dependencies /build/app/node_modules/simple-keyboard/build/index.js /var/www/html/third_party/simple-keyboard/index.js
COPY --from=browser-dependencies /build/app/node_modules/simple-keyboard/build/css/index.css /var/www/html/third_party/simple-keyboard/index.css
COPY --from=browser-dependencies /build/app/node_modules/simple-keyboard/LICENSE /var/www/html/third_party/simple-keyboard/LICENSE

RUN mkdir -p /var/www/html/uploads/knowledge \
        /var/www/html/uploads/media \
        /var/www/html/uploads/markers \
    && chown -R www-data:www-data /var/www/html/uploads \
    && chmod +x /usr/local/bin/ar-museum-entrypoint

HEALTHCHECK --interval=10s --timeout=3s --start-period=20s --retries=5 \
    CMD curl --fail --silent http://127.0.0.1/health.php || exit 1

CMD ["ar-museum-entrypoint"]
