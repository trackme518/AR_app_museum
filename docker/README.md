# Docker deployment

The deployment consists of two Compose stacks that share one external Docker
network:

- **App stack** (`docker/compose.yaml`): Apache with PHP 8.3 and MariaDB 11.8
  LTS. MariaDB stores both application data and native RAG vectors; no
  additional vector server is required.
- **Edge stack** (`docker/edge/compose.yaml`): Traefik, which terminates TLS
  and routes traffic to the app container.

```text
internet / LAN ──> traefik :80/:443 ──https──> app :80 (internal network)
                                   └─ acme DNS-01 ──> your DNS provider
```

## One-time network setup

```bash
docker network create proxy
```

## Generating strong passwords

The `MARIADB_PASSWORD` (the app account the PHP application connects with) and `MARIADB_ROOT_PASSWORD` (the database
superuser) values in `.env` must be strong. Generate them with:

```bash
openssl rand -hex 24
```

(`openssl rand -base64 24` also works; use `-hex` if you want to avoid `/` and
`+` characters in the value.)

## HTTPS via Let's Encrypt DNS-01

Certificates are issued for `APP_HOSTNAME` using the **DNS-01 ACME challenge**:
the server creates a temporary `_acme-challenge` TXT record through your DNS
provider's API, so **the server never needs to be reachable from the internet**
to obtain or renew a certificate. The same setup therefore serves both:

- **Public VPS**: point the A record of `APP_HOSTNAME` at the server's public IP.
- **Private/museum LAN**: point the same A record at the server's LAN address
  (e.g. `10.0.0.30`). Visitors on that network resolve the name locally; the
  certificate remains browser-trusted. Switching deployment targets is just an
  A-record edit (keep the TTL short, e.g. 60 s).

Configure `.env`:

```dotenv
APP_HOSTNAME=arapp.example.com
ACME_EMAIL=admin@example.com
ACME_STAGING=false
LEGODNS_PROVIDER=wedos
WEDOS_USERNAME=...
WEDOS_WAPI_PASSWORD=...
```

`LEGODNS_PROVIDER` accepts any [lego DNS provider](https://go-acme.github.io/lego/dns/)
name (cloudflare, hetzner, powerdns, ...) together with that provider's own
credential variables. `manual` waits for you to create the TXT record yourself.
For WEDOS, generate the WAPI password in the WEDOS administration and add the
server's **public IP** to the WAPI allow-list there.

Set `ACME_STAGING=true` while testing: Let's Encrypt's staging CA issues
throwaway certificates without strict rate limits. Never leave it on in
production.

## Starting the stacks

The app image is published to **`ghcr.io/trackme518/ar_museum-app`** (tags:
`latest` and `sha-<commit>`, architectures `amd64` and `arm64`) by the
`Build and publish app image` GitHub Action. A server can therefore deploy
without building anything:

```bash
# on the server, with docker/compose.yaml and .env present
docker compose --env-file .env -f docker/compose.yaml pull app
docker compose --env-file .env -f docker/compose.yaml up -d
```

For local development, `build.sh` builds the image from source instead
(`--build`). Pin a server to a known-good build by setting the app service's
`image:` tag to the corresponding `sha-<commit>` tag.

```bash
# app (also runs ./build.sh for you)
./build.sh

# edge (TLS)
docker compose --env-file .env -f docker/edge/compose.yaml up -d
docker compose --env-file .env -f docker/edge/compose.yaml logs traefik
```

On the first request Traefik requests the certificate and shows its own
self-signed fallback until issuance completes (usually under a minute). Only
Traefik publishes host ports; the app and MariaDB stay on internal networks.
HTTP is permanently redirected to HTTPS.

## Renewals, rate limits, and volumes

Traefik renews certificates automatically about 30 days before expiry;
renewal only needs outbound HTTPS to your DNS provider and Let's Encrypt.
Let's Encrypt enforces **5 certificates per week per hostname**, so the ACME
state must survive redeploys:

- App stack volumes: `ar_museum_mariadb_data` (database + RAG vectors) and
  `ar_museum_uploads_data` (media, markers, knowledge documents).
- Edge stack volume: `ar_museum_edge_letsencrypt_data` (ACME account and
  certificates).

`docker compose down -v` on the **app stack** never touches the edge volume.
Only reset the edge volume deliberately (or while `ACME_STAGING=true`),
otherwise every reset triggers a fresh certificate request.

When the application first connects to an empty database it creates the schema
itself (`docker/schema.sql`, applied by `src/Database.php`); the default
exhibition, characters, and RAG documents are then loaded by the startup
provisioning script.

## LM Studio

`.env` currently targets `http://10.0.0.30:1234` and model
`gemma-4-e4b-it-mlx@4bit`. LM Studio must have its local server running, the model
loaded, and network serving enabled. Test from the container with:

```bash
docker compose --env-file .env -f docker/compose.yaml exec app curl -sS http://10.0.0.30:1234/v1/models
```

If LM Studio API authentication is enabled, copy its token into `AI_API_TOKEN` in
`.env`, then recreate the app container. The same setting is used when switching to
another OpenAI-compatible provider.

If LM Studio runs on the same computer but the LAN address changes, set
`AI_BASE_URL` and `EMBEDDING_BASE_URL` to `http://host.docker.internal:1234`.

The selected model must actually support `/v1/embeddings` and return 768 dimensions.
Many instruction/chat models do not expose embeddings; if this model does not, load a
dedicated embedding model in LM Studio and update `EMBEDDING_MODEL` accordingly.

## AR Runtime (WebXR)

The application uses standard WebXR only; no AR engine is bundled or installed in
Docker. Android Chrome works natively. For iOS you need a third-party WebXR
compatibility layer such as [Launchar](https://launchar.app), which is **not part
of this codebase** — register at launchar.app and set `LAUNCHAR_APP_KEY` in
`APP/.env` (see the main README). Without a key, iOS devices fall back to the QR
launcher screen. Speech recognition and speech synthesis run in the browser
through the Web Speech API; no separate speech API key or server audio endpoint
is needed.
