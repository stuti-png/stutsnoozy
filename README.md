# Stuti’s Portfolio

A React, TypeScript and Vite portfolio with a bioscope introduction, Portfolio Bhandar and Frequently Sought Answers.

## Develop

Use Node.js 22, then run `npm ci` and `npm run dev`.

## Build and host

Run `npm run build`. The output is `dist/`. Netlify configuration is included. Vercel can use its Vite preset with the same build command and output folder. Hash-based routes support direct links and refreshes without server rewrite rules.

## Update content

- Portfolio copy and verified video links: `src/content/portfolio.ts`
- Frequently Sought Answers: `src/content/fsas.ts`
- Homepage media and source-relative alignment: `src/config.ts`

The introduction is a local MP4 loaded on demand; other videos load YouTube embeds when selected. Background music and animation are intentionally disabled.

Only production website source and runtime assets are included. Private evidence documents, original downloads and unused references are excluded.
