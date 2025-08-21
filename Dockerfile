# ---- Base PHP + FPM ----
FROM php:8.2-fpm-alpine

# System deps
RUN apk add --no-cache \
    nginx supervisor curl git unzip \
    libpng-dev libjpeg-turbo-dev libzip-dev oniguruma-dev

# PHP extensions
RUN docker-php-ext-configure gd --with-jpeg \
 && docker-php-ext-install pdo pdo_mysql mbstring gd zip opcache

# Composer
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

# Railway usually exposes 8080
ENV PORT=8080
EXPOSE 8080

# ✅ Run nginx + php-fpm via supervisord
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
