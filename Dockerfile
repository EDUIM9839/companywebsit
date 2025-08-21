# ---- Base PHP + FPM ----
FROM php:8.2-fpm-alpine

# System deps
RUN apk add --no-cache \
    nginx supervisor curl git unzip bash \
    libpng-dev libjpeg-turbo-dev libzip-dev oniguruma-dev python3 py3-pip

# Fix Supervisor Python warning (pin setuptools <81)
RUN pip install --no-cache-dir --upgrade "setuptools<81"

# PHP extensions
RUN docker-php-ext-configure gd --with-jpeg \
 && docker-php-ext-install pdo pdo_mysql mbstring gd zip opcache

# Composer (copy from official image)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy app source
COPY . /var/www/html

# Install PHP deps (prod)
RUN composer install --no-dev --optimize-autoloader \
 && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Nginx & Supervisor configs
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisord.conf
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Railway exposes 8080
ENV PORT=8080
EXPOSE 8080

# Start via Supervisor (manages nginx + php-fpm)
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]

