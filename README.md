# Stuti's portfolio

A React + Vite + TypeScript portfolio using the supplied Bombay living room artwork and introduction video. Original supplied files are preserved at the project root.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

```sh
npm run build
npm run preview
```

## Edit

- `src/config.ts`: background path, introduction video source, Achievements and Links placeholder content.
- `src/components/Television.tsx`: native HTML video and play button.
- `src/App.tsx`: navigation and accessible modal sections (Escape closes, focus returns to the invoking link).
- `src/styles.css`: typography, shared scene sizing, mobile crop, and CRT mask.
- `public/assets/`: self-hosted artwork and original video copy. Anek Latin is bundled locally through @fontsource.

## Screen measurements

Original image: **1672 × 941 px**. Inner glass bounds: **x 465, y 239, width 717, height 458 px**. Normalized bounds: **left 0.27811, top 0.25399, width 0.42883, height 0.48672**. These fractions are defined in `scene.screen`. The image and screen share one aspect-ratio container and transform, including on mobile. The CRT mask curves the glass edges; `object-fit: contain` preserves the video's original aspect ratio with black letterboxing.

Playback starts only after a click, with sound. Native controls provide pause, seek, volume, and fullscreen; exact controls depend on the browser/device. Modal sections leave the video mounted and do not reset playback. Replace placeholder content only with your actual information.

The original video is approximately 189 MB. If your Git host limits individual file sizes, use Git LFS or a video hosting URL before pushing; this project does not alter or compress your supplied video.

## Homepage composition

Desktop fits the complete 1672 × 941 room inside the viewport. Mobile uses a modest 145vw scene, capped by available height; the complete TV casing remains visible. The image and player share the same scene transform. The glass uses a smooth SVG clip path in normalized coordinates, without stretching the video.

The poster is the supplied thumbnail, `public/assets/introduction-thumbnail-v2.png`. `introductionThumbnail` in `src/config.ts` selects it. The centered play control is 48px on desktop and 44px on mobile; native controls remain available after starting playback. No added grain, reflection, or filter is applied to the video.

## Achievements and reading pages

The wall uses `public/assets/achievements-wall-v2.png` unchanged. Reading pages use `public/assets/reading-wall.png` with a charcoal fallback. Home retains its existing artwork, thumbnail and player geometry.

Content, source evidence, screen titles, normalized glass measurements and mobile crops live in `src/content/achievements.ts`. Uncertain work stays in `content/source-inventory.md`; only verified examples and clearly marked missing personal films are rendered.

Stable URLs (hash routing works on any static host, including direct loads and refreshes):

- `/#achievements`
- `/#achievements/campaigns-events`
- `/#achievements/conversations-community`
- `/#achievements/websites-creative-work`
- `/#achievements/personal-stories`
- `/#achievements/films/coming-of-age-at-25`
- `/#achievements/films/the-burnout-generation`

Screen links use native browser history. Back to Achievements and browser Back restore the previous wall scroll position and focused television. Reading pages use normal document scrolling, a 680px column, 19px body text, and 24px mobile margins. No autoplay: collection embeds mount only after requesting a recording; only one player is mounted at once. Film pages use the same reading layout and will render their player once a verified YouTube source is added. Both films are also linked inside Personal Stories.

Source inventory: `content/source-inventory.md` / `.json`. Readable copy draft: `content/collection-copy.md`. Measurements: `content/screen-geometry.md`. Current verification: `content/validation.md`.
