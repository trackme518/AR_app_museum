# Third-party notices

## Three.js

This product includes the Three.js distribution (revision 153) and its
`ARButton`, `GLTFLoader`, `RGBELoader`, and `OrbitControls` examples, copyright
© 2010-2023 Three.js Contributors. They are bundled (unmodified sources,
minified) inside `js/AR_simulation/three-bundle.js` and distributed under the
MIT License.

## qrcode

The `QRCode` generator bundled in `js/AR_simulation/three-bundle.js` is the
`soldair/node-qrcode` project, copyright © 2012 soldair (Ryan Graham),
distributed under the MIT License.

## i18next

i18next 26.4.1 is installed from npm during the Docker build and copied to
`third_party/i18next/` in the resulting image. It is distributed under the MIT
License. See `third_party/i18next/LICENSE` in the built image.

## Launchar (iOS WebXR compatibility layer)

Launchar (<https://launchar.app>) is a third-party WebXR runtime for iOS. It is
**not part of this codebase and not redistributed by this project**. When
`LAUNCHAR_APP_KEY` is set, the application embeds Launchar's SDK script directly
from `https://launchar.app/sdk/`. Launchar is governed by its own terms and
privacy policy; you must register with launchar.app and comply with them.
