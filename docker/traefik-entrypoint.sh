#!/bin/sh

set -eu

dynamic_config=/tmp/ar-museum-dynamic.yml

case "${LOCAL_NETWORK:-}" in
    true)
        case "${APP_HOSTNAME:-}" in
            ''|*[!0-9.]* )
                echo 'APP_HOSTNAME must be an IPv4 address when LOCAL_NETWORK=true.' >&2
                exit 1
                ;;
        esac
        if [ ! -s /certs/server.crt ] || [ ! -s /certs/server.key ]; then
            echo 'Local HTTPS certificates are missing. Run ./docker/generate_certificate.sh first.' >&2
            exit 1
        fi
        cat > "$dynamic_config" <<EOF
http:
  routers:
    certificate-downloads:
      rule: "Host(\`${APP_HOSTNAME}\`) && (Path(\`/certificate-setup.php\`) || PathPrefix(\`/certificates/\`) || Path(\`/css/certificate-setup.css\`))"
      entryPoints: [web]
      priority: 100
      service: ar-museum
    certificate-bootstrap:
      rule: "Host(\`${APP_HOSTNAME}\`)"
      entryPoints: [web]
      middlewares: [certificate-page]
      service: ar-museum
    ar-museum-secure:
      rule: "Host(\`${APP_HOSTNAME}\`)"
      entryPoints: [websecure]
      service: ar-museum
      tls: {}
  middlewares:
    certificate-page:
      redirectRegex:
        regex: "^http://[^/]+/.*"
        replacement: "http://${APP_HOSTNAME}/certificate-setup.php"
        permanent: false
  services:
    ar-museum:
      loadBalancer:
        servers:
          - url: "http://app:80"
tls:
  certificates:
    - certFile: /certs/server.crt
      keyFile: /certs/server.key
  stores:
    default:
      defaultCertificate:
        certFile: /certs/server.crt
        keyFile: /certs/server.key
EOF
        set -- traefik \
            --entrypoints.web.address=:80 \
            --entrypoints.websecure.address=:443 \
            --providers.file.filename="$dynamic_config" \
            --providers.file.watch=true \
            --api.dashboard=false \
            --log.level=INFO
        ;;
    false)
        if [ -z "${APP_HOSTNAME:-}" ] || [ "${APP_HOSTNAME}" = "localhost" ]; then
            echo 'APP_HOSTNAME must be a public domain when LOCAL_NETWORK=false.' >&2
            exit 1
        fi
        case "$APP_HOSTNAME" in
            *[!0-9.]* ) ;;
            *)
                echo 'APP_HOSTNAME cannot be an IP address when LOCAL_NETWORK=false.' >&2
                exit 1
                ;;
        esac
        if [ -z "${ACME_EMAIL:-}" ] || [ "$ACME_EMAIL" = 'example@example.com' ]; then
            echo 'Set a real ACME_EMAIL before using online mode.' >&2
            exit 1
        fi
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
        set -- traefik \
            --entrypoints.web.address=:80 \
            --entrypoints.websecure.address=:443 \
            --providers.file.filename="$dynamic_config" \
            --providers.file.watch=true \
            --certificatesresolvers.letsencrypt.acme.email="$ACME_EMAIL" \
            --certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json \
            --certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web \
            --api.dashboard=false \
            --log.level=INFO
        ;;
    *)
        echo 'LOCAL_NETWORK must be true or false.' >&2
        exit 1
        ;;
esac

exec "$@"
