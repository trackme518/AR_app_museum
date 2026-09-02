# AR Museum

PHP/MariaDB application for marker- and surface-placed historical AR characters.

The original code associated with Ondřej Sýkora's bachelor thesis is preserved
in the [`original_bachelor_thesis`](https://github.com/trackme518/AR_app_museum/tree/original_bachelor_thesis)
branch. This branch contains the subsequent development work.

## License

This project's own code is licensed under the MIT License (see [`LICENSE`](LICENSE)).
Third-party code — including Three.js, node-qrcode, i18next, and the optional
Launchar runtime — remains under its respective licenses and is excluded from
the MIT grant. See [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).

## AR runtime

The application uses standard **WebXR only** (`navigator.xr`): immersive AR sessions, image tracking when the runtime exposes it (it stays an optional feature, so AR still starts without it), and hit testing for markerless placement. Three.js and its AR button are bundled in `js/AR_simulation/three-bundle.js`; nothing is downloaded at runtime.

- **Android**: Chrome on a WebXR-capable device works out of the box.
- **iOS**: Safari does not implement WebXR. You must set up [Launchar](https://launchar.app) — or another WebXR compatibility layer for iOS — for yourself. Launchar is a **third-party product and not part of this codebase**; we provide no warranty or support for it. Register your app at launchar.app, put the issued key in `LAUNCHAR_APP_KEY` in `.env`, and the app will embed the Launchar SDK, which launches the AR session in the Launchar runtime. Leave `LAUNCHAR_APP_KEY` empty to disable the SDK entirely; unsupported browsers then fall back to the QR launcher screen.
- Desktop remains a QR launcher rather than opening a camera session.

Start the application:

```sh
./build.sh
```

`build.sh` first generates any missing UI translations and then builds and starts Docker. The translation step requires the configured AI endpoint to be reachable.

Markers are plain uploaded images (JPG/PNG/WebP). They are passed directly to the WebXR runtime as tracked images at session start; no target preprocessing is required.

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

No license has currently been declared for AR Museum; repository access alone does not grant rights beyond applicable law.

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

1. i18next translates the editor, navigation, certificate setup, validation, chat,
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
