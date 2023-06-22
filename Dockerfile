# Use a Debian-based image
FROM debian:buster

# Install Nginx and PHP 8.1 dependencies
RUN apt-get update && \
    apt-get install -y curl gnupg2 lsb-release ca-certificates apt-transport-https && \
    echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list && \
    curl -fsSL https://packages.sury.org/php/apt.gpg | apt-key add -

# Install Nginx and PHP 8.1
RUN apt-get update && \
    apt-get install -y nginx php8.1 php8.1-cli php8.1-fpm php8.1-common \
    php8.1-mysql php8.1-xml php8.1-mbstring php8.1-zip php8.1-gd && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy your project files to the web root directory
COPY ./src /usr/share/nginx/html

# Configure Nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
RUN sed -i 's|^listen = /run/php/php8\.1-fpm\.sock|listen = 127.0.0.1:9000|' /etc/php/8.1/fpm/pool.d/www.conf

# Expose port 80
EXPOSE 80

# Start Nginx and PHP-FPM
CMD service php8.1-fpm start && nginx -g 'daemon off;'
