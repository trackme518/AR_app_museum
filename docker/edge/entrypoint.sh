#!/bin/sh

set -eu

# Single TLS mode: Let's Encrypt DNS-01 (ACME). The public/private decision
# lives entirely in the A record for APP_HOSTNAME: point it at this server's
# public IP (VPS) or its LAN address (museum network). The certificate is
# browser-trusted in both cases because DNS-01 validation does not require
# this server to be reachable from the internet.

if [ -z "${APP_HOSTNAME:-}" ] || [ "${APP_HOSTNAME}" = 'localhost' ]; then
    echo 'APP_HOSTNAME must be the public domain of this deployment (e.g. arapp.example.com).' >&2
    exit 1
fi
case "$APP_HOSTNAME" in
    *[!0-9.]* ) ;;
    *)
        echo "APP_HOSTNAME must be a domain name, not an IP address: ${APP_HOSTNAME}" >&2
        exit 1
        ;;
esac
case "$APP_HOSTNAME" in
    *.* ) ;;
    *)
        echo 'APP_HOSTNAME must be a fully qualified domain name.' >&2
        exit 1
        ;;
esac
if [ -z "${ACME_EMAIL:-}" ] || [ "$ACME_EMAIL" = 'example@example.com' ]; then
    echo 'Set a real ACME_EMAIL before starting the edge.' >&2
    exit 1
fi

provider="${LEGODNS_PROVIDER:-manual}"
ca_server=''
if [ "${ACME_STAGING:-false}" = 'true' ]; then
    # Staging CA issues untrusted certificates but has no strict rate limits.
    ca_server="--certificatesResolvers.letsencrypt.acme.caServer=https://acme-staging-v02.api.letsencrypt.org/directory"
fi

dynamic_config=/tmp/ar-museum-dynamic.yml
cat > "$dynamic_config" <<EOF
http:
  routers:
    ar-museum-http:
      rule: "Host(\`${APP_HOSTNAME}\`)"
      entryPoints: [web]
      middlewares: [force-https]
      service: ar-museum
    ar-museum-secure:
      rule: "Host(\`${APP_HOSTNAME}\`)"
      entryPoints: [websecure]
      service: ar-museum
      tls:
        certResolver: letsencrypt
  middlewares:
    force-https:
      redirectScheme:
        scheme: https
        permanent: true
  services:
    ar-museum:
      loadBalancer:
        servers:
          - url: "http://app:80"
EOF

mkdir -p /letsencrypt
touch /letsencrypt/acme.json
chmod 600 /letsencrypt/acme.json

# Provider credentials (e.g. WEDOS_USERNAME/WEDOS_WAPI_PASSWORD,
# CF_DNS_API_TOKEN, ...) come from the env_file mounted above.
# shellcheck disable=SC2086
exec traefik \
    --entrypoints.web.address=:80 \
    --entrypoints.websecure.address=:443 \
    --providers.file.filename="$dynamic_config" \
    --providers.file.watch=true \
    --certificatesResolvers.letsencrypt.acme.email="$ACME_EMAIL" \
    --certificatesResolvers.letsencrypt.acme.storage=/letsencrypt/acme.json \
    --certificatesResolvers.letsencrypt.acme.dnsChallenge.provider="$provider" \
    $ca_server \
    --api.dashboard=false \
    --log.level=INFO
