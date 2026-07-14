# Prompt Studio

Prompt Studio is a local-first creative workspace for writing, collecting, and refining high-end image-generation prompts. It combines a structured prompt builder with a visual archive, so your best directions, reference images, notes, and iterations stay organized in one place.

![Prompt Studio](https://img.shields.io/badge/Prompt-Studio-c8f53a?style=flat-square&labelColor=111110)

## Highlights

- **Structured prompt generation** — Build art-directed prompts using subject, style, palette, composition, material, texture, and up to six typography fields.
- **Editorial design language** — A monochrome, industrial interface with a single lime accent, built for premium poster and visual-direction work.
- **Prompt Library** — Save prompts as reusable archive entries with titles, collections, tags, notes, timestamps, and favorites.
- **Reference images** — Drag and drop up to eight images onto every prompt to keep visual references and generated results together.
- **Version history** — Each save preserves a version of the prompt, making it easy to revisit previous directions.
- **Search and collections** — Find work quickly by title, subject, tags, collection, or favorite status.
- **Portable archive** — Export the library to JSON for backup or transfer, and import it again whenever you need it.
- **Responsive** — Designed for focused desktop work and usable on smaller screens.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide icons
- Browser-based local persistence

## Run locally

### Prerequisites

- Node.js 20 or newer

### Install and start

```bash
npm install
npm run dev
```

Open the local URL displayed in the terminal, normally `http://127.0.0.1:5173`.

## Production build

```bash
npm run build
```

This creates an optimized static build in `dist/`.

To preview that build locally:

```bash
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In [Vercel](https://vercel.com/new), choose **Import Git Repository**.
3. Select the repository.
4. Confirm these build settings:

   | Setting | Value |
   | --- | --- |
   | Framework | Vite |
   | Install command | `npm install` |
   | Build command | `npm run build` |
   | Output directory | `dist` |

5. Select **Deploy**.

No environment variables are required.

## Your data

Prompt Studio is designed to keep your working archive private. Prompts, notes, saved entries, and attached images are stored in your browser. Use **Export Library** regularly if you want a portable backup of your work.

## Project structure

```text
src/
  main.tsx       Application logic and prompt-library behavior
  styles.css     Editorial visual system and responsive styling
public/          Optional public assets
dist/            Generated production build (created by npm run build)
```

## License

Private project — all rights reserved.
