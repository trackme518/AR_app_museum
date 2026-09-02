#!/bin/sh
set -eu

su -s /bin/sh -c 'php /var/www/html/default_data/provisioning.php' www-data
exec apache2-foreground
