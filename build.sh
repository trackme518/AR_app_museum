#!/bin/sh

set -eu

cd "$(dirname "$0")"

php scripts/generate_ui_translations.php
docker compose --env-file .env -f docker/compose.yaml up --build -d
