# Ode

> An ode to those who love the craft, an ode to the old internet, an ode to a time before numbers and figures dominated writing, an ode to a time where readers remembered their favourite writers, and an ode to the hope that all of it is still present, somewhere.

Ode is an opinionated, minimal and easy to use application set up for writers who do not care about the bells and whistles of the modern internet, who want to publish in an aesthetically pleasing website, and create a better experience for their readers.

## Inspiration

The theme/idea comes directly from `journal.coffee` which is my Wordpress-based website where I've written prose for years now. I improved it a bit further. Wordpress is great but it became quite bloated over the years and I wanted a lightweight, faster place. Plus, the reading mode and ease of markdown publishing has been on my mind for ages.

Rest assured, I will be using `ode` too!

## Live Demo

You can find a live demo of the app [here](https://ode-demo.vercel.app/).

## Screenshots

<table>
  <tr>
    <td width="50%">
      <img src=".github/media/homepage_light.png" alt="Homepage - Light Mode">
    </td>
    <td width="50%">
      <img src=".github/media/homepage_dark.png" alt="Homepage - Dark Mode">
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src=".github/media/reader_light.png" alt="Reader Mode - Light">
    </td>
    <td width="50%">
      <img src=".github/media/reader_dark.png" alt="Reader Mode - Dark">
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src=".github/media/caps_light.png" alt="Default case - Light">
    </td>
    <td width="50%">
      <img src=".github/media/caps_dark.png" alt="Default case - Dark">
    </td>
  </tr>
</table>

### Lamp Demo with Sound

This is my favourite feature, personally.

https://github.com/user-attachments/assets/222af674-11f0-4b5a-8232-a31aca8a61b1

## Features

- **Markdown-based content**: Write your pieces and pages in simple markdown files with front matter; push to publish
- **Reader mode**: Beautiful paginated reading experience with keyboard navigation (arrow keys)
  - **Checkpointing:** URLs for the reader mode track piece and position so even if you publish more and the collection gets updated, a bookmarked link will always send the reader to the right place in the "book".
  - **Gestures:** The Reader supports both swipe and trackpad gestures as of `v1.0.2`.
- **Collections/Volumes**: Automatically organize your pieces into themed collections for curated reading
- **Dark/Light mode**: Automatic theme switching with user preference persistence with a nice lamp reminiscent of olden times
- **RSS feed**: Auto-generated RSS feed with full content for your readers to use
- **Body of Work**: Chronological archive of all your pieces, organized by month/year; order is up to you
- **Random piece**: Let readers discover content serendipitously and the continue reading
- **Build-time generation**: Static pages and indexes generated during build for optimal performance
- **Fully customizable**: All UI labels, site metadata, and page order configurable via `config.yaml`
- **No tracking, no analytics, no boxes, no search, no media**: Just writing and reading

## Tech Stack

- **React 19** with React Router for client-side navigation
- **Vite** for blazing fast development and optimized builds
- **SCSS** for styling with a clean, minimal design
- **TypeScript** build scripts for content indexing and generation
- **ReactMarkdown** for rendering markdown content
- **Front Matter** for parsing markdown metadata

## Getting Started

### Deployment Gotchas!

Once you have your Fork or branch ready, you can deploy the app but the reader position Permalinks as well as the Body of Work links will fail. This is due to SPA handling of paths and (from my understanding) how React works. But this can be fixed.

#### Easy Mode: Deploy to Vercel

You can directly to Vercel below. `vercel.json` already has the fixes Vercel will need.

https://github.com/DeepanshKhurana/ode/blob/46873b31df3d4b02bbb375d4389173a1b6ac3f6b/vercel.json#L1-L12

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDeepanshKhurana%2Fode)

#### Pro Mode: nginx Configuration

If you are like me, you probably have your own server where you will need to handle SPA routing. If you are using nginx, a template is already provided.

https://github.com/DeepanshKhurana/ode/blob/81c9c2916c5fade480a017b277be7eb1dc799cb4/nginx-template#L1-L32

### From WordPress

If you are coming from WordPress, you can use the awesome [lonekorean/wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown) to get your content in markdown format. It will mostly be plug and play with this version of Ode.

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode at `http://localhost:5173`

### Building

```bash
npm run build
```

This will:
1. Index all pieces from `public/content/pieces/`
2. Index all pages from `public/content/pages/`
3. Paginate pieces for reader mode
4. Calculate word/piece statistics
5. Generate RSS feed
6. Generate body of work archive
7. Build the production bundle

### Preview Production Build

```bash
npm run preview
```

## Configuration

Edit `public/config.yaml` to customize your site. You can handle quite a few things here:

- Change your site’s name, author, and vibe at the top.
- Tweak button text and messages to sound how you want.
- Pick which pages show up first in the menu.
- Hide any pages or pieces you don’t want public.
- Set how collections are sorted—oldest first or newest first.
- Rename the light/dark mode switches.
- Edit the “words wasted” summary to your liking.

https://github.com/DeepanshKhurana/ode/blob/2e61bbe7eadcc36ff9b05c13e4e4d71ab4c885b1/public/config.yaml#L1-L41

## Writing Content

### Pieces

Create markdown files in `public/content/pieces/` with front matter:

```markdown
---
title: "Your Piece Title"
slug: "your-piece-slug"
date: 2025-11-23
categories:
  - essays
  - fiction
---

Write to your heart's desire.
```

### Pages

Create markdown files in `public/content/pages/` with front matter:

```markdown
---
title: "About"
slug: "about"
date: 2021-06-14
---

Tell everyone everything!
```

## Build Scripts

Run individual build scripts:

- `npm run build:pieces` - Index pieces
- `npm run build:pages` - Index pages
- `npm run build:paginate` - Paginate pieces
- `npm run build:stats` - Calculate statistics
- `npm run build:rss` - Generate RSS feed
- `npm run build:sitemap` - Generate Sitemap

## License

MIT

## Contributing

You are free to use this, break it, customise it. If you have any idea the community will benefit from, raise a PR or an Issue.
