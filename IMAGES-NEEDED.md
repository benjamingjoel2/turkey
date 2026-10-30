# Images needed

The site names no real hotel, lodge, restaurant or café yet: every stay on
`/stays/` is a labelled placeholder ("Placeholder: …", `src/data/stays.mjs`) and
is shown as a text card with no photo. Nothing is shown with a wrong or generic
image.

When the real stays are chosen, request permitted photos for each one before
adding images:

| Venue | Page | What to request | Where |
| --- | --- | --- | --- |
| Each real stay replacing a placeholder in `src/data/stays.mjs` | `/stays/` (and the region page it belongs to) | 2–3 high-resolution exterior/room photos with written permission for use by travel partners | The property's press/media-kit page, or ask the property directly |

Landmarks shown on the site (Hagia Sophia, Sumela Monastery, Ephesus, Pergamon,
Pamukkale, Kaş, Kekova, Göbekli Tepe, Mardin, Akdamar, Lake Van, Cappadocia)
use location-checked Unsplash photos; see `src/data/photos.mjs`.
