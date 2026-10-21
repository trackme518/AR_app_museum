# Docker deployment

The deployment consists of one Compose stack:

- **App stack** (`docker/compose.yaml`): Apache with PHP 8.3 and MariaDB 11.8
  LTS. MariaDB stores both application data and native RAG vectors; no
  additional vector server is required.
- **TLS/routing**: not managed by this repository. On a VPS, an existing
  label-driven Traefik terminates TLS and routes to the app container. For
  local phone testing, a Caddy overlay provides HTTPS with a local CA.

```text
VPS:    internet ──> existing Traefik :443 ──> app :80
Local:  phone/LAN ──> Caddy :443 (internal CA) ──> app :80
```

## One-time network setup

The app joins the external `proxy` network so a reverse proxy can reach it:

```bash
docker network create proxy
```

## Generating strong passwords

The `MARIADB_PASSWORD` (the app account the PHP application connects with) and
`MARIADB_ROOT_PASSWORD` (the database superuser) values in `.env` must be
strong. Generate them with:

```bash
openssl rand -hex 24
```

(`openssl rand -base64 24` also works; use `-hex` if you want to avoid `/` and
`+` characters in the value.)

## Production VPS: existing label-driven Traefik

The app service in `docker/compose.yaml` carries Traefik labels:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.ar-museum.rule=Host(`${APP_HOSTNAME}`)"
  - "traefik.http.routers.ar-museum.entrypoints=websecure"
  - "traefik.http.routers.ar-museum.tls.certresolver=letsencrypt"
  - "traefik.http.services.ar-museum.loadbalancer.server.port=80"
```

The host's Traefik must already have `providers.docker=true`,
`providers.docker.exposedbydefault=false`, the `web`/`websecure` entrypoints,
and a certificate resolver named `letsencrypt`. Certificate issuance and
renewal are managed entirely by that Traefik instance.

Set only `APP_HOSTNAME` in `.env`; the application does not read ACME or
DNS-provider credentials. Point the hostname's A record at the server.

The app image is published to **`ghcr.io/trackme518/ar_museum-app`** (tags:
`latest` and `sha-<commit>`, architectures `amd64` and `arm64`) by the
`Build and publish app image` GitHub Action. A server can therefore deploy
without building anything:

```bash
# on the server, with docker/compose.yaml and .env present
docker compose --env-file .env -f docker/compose.yaml pull app
docker compose --env-file .env -f docker/compose.yaml up -d
```

To build from source instead, run `./build.sh` from the repository root. Pin a
server to a known-good build by setting the app service's `image:` tag to the
corresponding `sha-<commit>` tag.

Hosting-panel deployments can use `docker/hostinger/compose.hostinger.yaml`
instead; it is the same app stack with variables supplied by the panel. Copy
`docker/hostinger/environment.hostinger.example.txt` to the panel's
environment/secrets field.

## Local Docker with HTTPS (Caddy)

WebXR requires a trusted secure context.

The LAN setup adds a Caddy container under the gitignored
`uploads/knowledge/.local-https/` directory. The full file contents, startup
command, and Android CA-certificate steps are in the main README section
"Local Docker with HTTPS (Caddy)".

Short version:

```bash
docker compose --env-file .env \
  -f docker/compose.yaml \
  -f uploads/knowledge/.local-https/compose.yaml \
  up --build -d
```

The app is served at `https://$LOCAL_HTTPS_HOST/` (default `10.0.0.30`).
Caddy's root CA is written to
`uploads/knowledge/.local-https/data/caddy/pki/authorities/local/root.crt`;
install it on the phone before testing WebXR.

Stop without deleting data:

```bash
docker compose --env-file .env \
  -f docker/compose.yaml \
  -f uploads/knowledge/.local-https/compose.yaml \
  down
```

## Volumes

- `ar_museum_mariadb_data` — database and RAG vectors
- `ar_museum_uploads_data` — media, markers, knowledge documents

`docker compose down -v` erases both. Use `down` without `-v` for normal
redeploys.

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
Docker. On Android, WebXR image tracking must be enabled: open
`chrome://flags/#webxr-incubations`, set it to **Enabled**, and relaunch Chrome.
A Canary APK with the native-keyboard flicker fix is linked from the main README.

For iOS you need a third-party WebXR compatibility layer such as
[Launchar](https://launchar.app), which is **not part of this codebase** —
register at launchar.app and set `LAUNCHAR_APP_KEY` in `.env`. Without a key,
iOS devices fall back to the QR launcher screen. Speech recognition and speech
synthesis run in the browser through the Web Speech API; no separate speech API
key or server audio endpoint is needed.
