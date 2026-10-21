# AR Museum

[![Watch Demo](https://img.youtube.com/vi/0d5yA-w4cuQ/maxresdefault.jpg)](https://youtube.com/shorts/0d5yA-w4cuQ?feature=share)

PHP/MariaDB application for marker- and surface-placed historical AR characters.

The original code associated with Ondřej Sýkora's bachelor thesis is preserved
in the [`original_bachelor_thesis`](https://github.com/trackme518/AR_app_museum/tree/original_bachelor_thesis)
branch. This branch contains the subsequent development work.

## AR runtime

The application uses standard **WebXR only** (`navigator.xr`): immersive AR sessions, **WebXR image tracking (required)**, and hit testing for markerless placement. Image tracking is requested as a required session feature, so AR cannot start on a runtime that does not expose it. Three.js and its AR button are bundled in `js/AR_simulation/three-bundle.js`; nothing is downloaded at runtime.

- **Android**: Chrome on an ARCore/WebXR-capable device. Image tracking must be available in Chrome; enable `chrome://flags/#webxr-incubations` (set to **Enabled**) and fully relaunch Chrome before opening the app. Without this flag, `requestSession()` fails with `The session request contains invalid requiredFeatures`.
- **iOS**: Safari does not implement WebXR. You must set up [Launchar](https://launchar.app) — or another WebXR compatibility layer for iOS — for yourself. Launchar is a **third-party product and not part of this codebase**; we provide no warranty or support for it. Register your app at launchar.app, put the issued key in `LAUNCHAR_APP_KEY` in `.env`, and the app will embed the Launchar SDK. On iOS the Start AR button then hands the user over to the Launchar Launch Card, which opens the page inside the Launchar viewer where WebXR is available and the normal AR flow starts. Leave `LAUNCHAR_APP_KEY` empty to disable the SDK entirely; unsupported browsers then fall back to the QR launcher screen.
- Desktop remains a QR launcher rather than opening a camera session.

### Android: Chrome Canary for the keyboard flicker fix

Native software-keyboard flickering in the WebXR dialogue is fixed in Chrome **158.0.8115.0 and newer**. This fix is currently available in Chrome Canary; a Canary APK is attached to the project's [GitHub Releases](https://github.com/trackme518/AR_app_museum/releases). Install it, enable `chrome://flags/#webxr-incubations`, and relaunch Chrome. The fix is expected to reach the stable Chrome release eventually.

### Image markers

Markers are plain uploaded images (JPG/PNG/WebP). They are passed directly to the WebXR runtime as tracked images at session start; no target preprocessing is required. Character settings store the printed marker width and height in metres, defaulting to `0.210 × 0.210` for a square marker fitted to portrait A4. WebXR currently accepts the physical width and derives height from the uploaded image's aspect ratio, so the configured dimensions should match that ratio. When supported, marker and markerless placements use WebXR spatial anchors; unsupported runtimes fall back to reference-space placement.

## Running locally and in production

```sh
./build.sh
```

`build.sh` generates any missing UI translations, then builds and starts the app stack (app + MariaDB). HTTPS is not managed by the app stack.

### VPS: existing label-driven Traefik

The app service in `docker/compose.yaml` carries Traefik labels and joins the external `proxy` network. The server's existing label-driven Traefik must already expose the `web`/`websecure` entrypoints and a certificate resolver named `letsencrypt`; this repository does not manage certificates for the VPS.

- Set `APP_HOSTNAME` in `.env` to the public hostname.
- No ACME or DNS-provider credentials are read by the application. Certificate issuance and renewal belong to the host's Traefik configuration.
- Deploy the published image:

```sh
docker network create proxy   # once
docker compose --env-file .env -f docker/compose.yaml pull app
docker compose --env-file .env -f docker/compose.yaml up -d
```

Hosting-panel deployments can use `docker/hostinger/compose.hostinger.yaml` instead; it is the same app stack with variables supplied by the panel. Copy `docker/hostinger/environment.hostinger.example.txt` to the panel's environment/secrets field.

### Local Docker with HTTPS (Caddy)

WebXR requires a secure context, so an HTTP-only URL is not enough for a phone. The current LAN setup adds a local Caddy container that terminates HTTPS with its own internal CA and proxies to the app container.

These files live under `uploads/knowledge/.local-https/`, which is gitignored and not part of the published image. Create them if they do not exist.

`uploads/knowledge/.local-https/Caddyfile`:

```caddyfile
{
	auto_https disable_redirects
	default_sni {$LOCAL_HTTPS_HOST:10.0.0.30}
}

https://{$LOCAL_HTTPS_HOST:10.0.0.30} {
	tls internal
	reverse_proxy app:80
}
```

`uploads/knowledge/.local-https/compose.yaml`:

```yaml
services:
  caddy-local:
    image: caddy:2.11.4-alpine
    restart: unless-stopped
    depends_on:
      app:
        condition: service_healthy
    environment:
      LOCAL_HTTPS_HOST: "${LOCAL_HTTPS_HOST:-10.0.0.30}"
    ports:
      - "0.0.0.0:443:443"
      - "0.0.0.0:443:443/udp"
    volumes:
      - ../uploads/knowledge/.local-https/Caddyfile:/etc/caddy/Caddyfile:ro
      - ../uploads/knowledge/.local-https/data:/data
      - ../uploads/knowledge/.local-https/config:/config
    networks:
      - backend
      - proxy

networks:
  proxy:
    external: true
```

Set `LOCAL_HTTPS_HOST` in `.env` if the LAN address is not `10.0.0.30`, then start the stack from the repository root:

```sh
docker network create proxy   # once
docker compose --env-file .env \
  -f docker/compose.yaml \
  -f uploads/knowledge/.local-https/compose.yaml \
  up --build -d
```

The app is then available at `https://10.0.0.30/`.

After the first start, Caddy writes its root certificate to:

```text
uploads/knowledge/.local-https/data/caddy/pki/authorities/local/root.crt
```

Install that file on the Android phone as a CA certificate (Settings → Security → Encryption and credentials → Install a certificate → CA certificate; vendor menus differ), then restart Chrome. Bypassing the browser warning is not enough: WebXR still requires a trusted secure context.

Stop the stack without deleting the database or uploads:

```sh
docker compose --env-file .env \
  -f docker/compose.yaml \
  -f uploads/knowledge/.local-https/compose.yaml \
  down
```

Do not use `down -v` unless the database and uploads should be erased.

## Default data provisioning

The files in `default_data/` are the source assets and definitions used to populate
a new installation. `default_data/default_data.json` defines the initial exhibition,
version, characters, prompts, media states, markers, and knowledge documents. The
referenced GLB, MP4, marker, and document files live in the adjacent character and
document directories.

Every time the app container starts, `docker/entrypoint.sh` runs
`default_data/provisioning.php` before Apache. Provisioning works as follows:

1. If the `characters` table already contains any rows, provisioning stops without
   modifying existing application data.
2. On an empty installation, the referenced assets are copied into the persistent
   `uploads` volume under `uploads/media`, `uploads/markers`, and
   `uploads/knowledge`.
3. The configured exhibition and version are created in MariaDB, followed by their
   characters and relationships. Character settings such as animation names,
   marker orientation, video states, and `greenscreen` are copied from
   `default_data.json`.
4. Default knowledge documents are extracted, split into chunks, embedded, and
   stored in MariaDB. All database inserts run in one transaction; a provisioning
   failure rolls them back.

Consequently, editing `default_data/default_data.json` changes newly provisioned
installations only. It does not update rows in an existing persistent MariaDB
volume. To apply changed defaults, either update the existing records explicitly or
start with an empty database and uploads volume. Removing Docker volumes permanently
deletes the current database and user uploads, so back them up before performing a
clean reprovision.

## Licensing

AR Museum's own code is licensed under the **MIT License** (see [`LICENSE`](LICENSE)). This grant does not cover third-party code, which remains under its respective licenses and is excluded from the MIT grant.

AR on iOS relies on [Launchar](https://launchar.app), a **third-party WebXR compatibility layer that is not part of this codebase and not redistributed by this project**. It has its own terms and licensing at <https://launchar.app>; you are responsible for registering and complying with them.

The browser UI uses i18next `26.4.1`, installed from npm during the Docker build
and served locally from `third_party/i18next/`. i18next is licensed under the MIT
License. Three.js and QRCode are bundled inside `js/AR_simulation/three-bundle.js`
(MIT License). See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Localization

Set `DEFAULT_LOCALE` and `SUPPORTED_LOCALES` in `.env`. `SUPPORTED_LOCALES` is a
JSON object whose keys are BCP 47 locale codes and whose values are the names shown
in the language selector, for example:

```dotenv
DEFAULT_LOCALE=en-US
SUPPORTED_LOCALES={"en-US":"English","de-DE":"Deutsch","cs-CZ":"Čeština"}
```

The locale selection controls four connected features:

1. i18next translates the editor, navigation, validation, chat,
   and AR controls at runtime.
2. The virtual chat keyboard uses a layout appropriate for the selected locale.
3. Chat requests include the selected locale so the configured LLM answers in that
   language; speech recognition and speech synthesis receive the same locale.
4. Saving a character in the editor translates its greeting into every supported
   locale. Visitors receive the matching greeting for their selected locale.

`UI_strings.json` is the canonical English catalog. It contains one semantic key
per distinct UI concept, such as `auth.username` or `chat.send`. Punctuation and
required-field asterisks are kept in markup, so variants such as `Username:`,
`Username: *`, and `Username` do not create duplicate translations.

Run `php scripts/generate_ui_translations.php` directly to update translations
without rebuilding the application. The generator writes the unified i18next
resource file `UI_translations.json`. It retains existing translations, removes
obsolete keys and locales, and asks the configured AI only for missing keys, in
batches of 20. It checkpoints after every completed batch, so a later run resumes
instead of retranslating completed work. Set `FORCE_TRANSLATION=true` in `.env` to
ignore all existing translations and retranslate every string.

## CD/CI
The pipeline is configured to build new docker image and push to ghcr.io on each commit. It also iterates the version string automatically.

To check the state of the build pipeline with this command:
```
gh run list --repo trackme518/AR_app_museum --workflow=docker-image.yml --limit 3
```

