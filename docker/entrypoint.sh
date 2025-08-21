#!/usr/bin/env sh
set -e

cd /var/www/html

# .env handle (first boot)
if [ ! -f .env ]; then
  cp .env.example .env || true
fi

# If APP_KEY not set in env/.env, generate one
if ! grep -q "^APP_KEY=" .env || [ -z "$APP_KEY" ]; then
  php artisan key:generate --force || true
fi

# Cache (safe even without DB)
php artisan config:cache || true
php artisan route:cache || true
php artisan view:cache || true

# Permissions
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache || true

# Start services
exec /usr/bin/supervisord -c /etc/supervisord.conf
