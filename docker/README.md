# Docker deployment

The stack contains Apache with PHP 8.3 and MariaDB 11.8 LTS. MariaDB stores both
application data and native RAG vectors; no additional vector server is required.

## Local HTTPS start

Configure local mode in `APP/.env`:

```dotenv
LOCAL_NETWORK=true
APP_HOSTNAME=10.0.0.30
ACME_EMAIL=example@example.com
```

From `APP`, generate the local CA and IP certificate once, then deploy:

```bash
./docker/generate_certificate.sh
docker compose --env-file .env -f docker/compose.yaml up --build -d
docker compose --env-file .env -f docker/compose.yaml ps
```

Open `http://10.0.0.30` to download the certificate appropriate for iOS,
Android, or desktop. After installing and trusting the local CA, open
`https://10.0.0.30`.

The generated CA is preserved under the ignored `docker/certificates` directory.
Running the generator again preserves that CA and regenerates only a missing,
expiring, invalid, or wrong-IP server certificate.

## Online HTTPS start

Configure a public domain that resolves to the deployment server:

```dotenv
LOCAL_NETWORK=false
APP_HOSTNAME=museum.example.org
ACME_EMAIL=admin@example.org
```

Do not run the local certificate generator. Start Docker Compose normally.
Traefik obtains and renews a Let's Encrypt certificate using HTTP-01, so public
ports 80 and 443 must reach this server. HTTP is redirected to HTTPS in online
mode. Only Traefik publishes host ports; Apache/PHP and MariaDB remain internal.

Persistent data is split into two named volumes:

- `ar_museum_mariadb_data` stores MariaDB data and RAG vectors.
- `ar_museum_uploads_data` stores character media, video states, GLB models, markers,
  and original RAG documents.
- `ar_museum_letsencrypt_data` stores Traefik ACME state for online deployments.

Rebuilding or recreating containers preserves both volumes. The database schema is
imported automatically only when the MariaDB volume is new. To intentionally reset
all local data, use `docker compose down -v`; never include `-v` during a routine
restart or deployment.

## LM Studio

`.env` currently targets `http://10.0.0.30:1234` and model
`gemma-4-e4b-it-mlx@4bit`. LM Studio must have its local server running, the model
loaded, and network serving enabled. Test from the container with:

```bash
docker compose exec app curl -sS http://10.0.0.30:1234/v1/models
```

If LM Studio API authentication is enabled, copy its token into `AI_API_TOKEN` in
`.env`, then recreate the app container. The same setting is used when switching to
another OpenAI-compatible provider.

If LM Studio runs on the same computer but the LAN address changes, set
`AI_BASE_URL` and `EMBEDDING_BASE_URL` to `http://host.docker.internal:1234`.

The selected model must actually support `/v1/embeddings` and return 768 dimensions.
Many instruction/chat models do not expose embeddings; if this model does not, load a
dedicated embedding model in LM Studio and update `EMBEDDING_MODEL` accordingly.

Speech recognition and speech synthesis run in the browser through the Web Speech

## AR Runtime (WebXR)

The application uses standard WebXR only; no AR engine is bundled or installed in
Docker. Android Chrome works natively. For iOS you need a third-party WebXR
compatibility layer such as [Launchar](https://launchar.app), which is **not part
of this codebase** — register at launchar.app and set `LAUNCHAR_APP_KEY` in
`APP/.env` (see the main README). Without a key, iOS devices fall back to the QR
launcher screen.

API; no separate speech API key or server audio endpoint is needed.
