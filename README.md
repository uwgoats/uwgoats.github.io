# Capstone Design Log

A design log website built with [Astro](https://astro.build) and Tailwind CSS. Documents project decisions and iterations as markdown entries, with light/dark mode and a responsive layout.

## Adding a log entry

Create a new markdown file in `src/content/logs/`, named like `YYYY-MM-DD-short-title.md`:

```markdown
---
title: "Entry Title"
date: 2026-09-15
summary: "One-sentence summary shown on the card and in previews."
tags: ["tag-one", "tag-two"]
phase: "Optional phase label, e.g. Discovery, Iteration 2"
---

Your markdown content goes here.
```

- `title`, `date`, and `summary` are required.
- `tags` and `phase` are optional but recommended — tags power the filter on the `/logs` page.
- `coverImage` (path to an image relative to the markdown file) and `coverAlt` are optional, for a hero image on the entry.
- Set `draft: true` to hide an entry from the site without deleting it.

The entry is automatically picked up — no other file needs to change.

## Adding a reference

Create a new markdown file in `src/content/references/`, named after the source (e.g. `author-title.md`):

```markdown
---
title: "Reference Title"
type: "paper"
url: "https://example.com"
author: "Author or Channel Name"
date: 2026-01-01
---

A short note on how this source was used or what it inspired.
```

- `title` and `type` are required. `type` must be one of `paper`, `video`, `project`, `article`, or `other` — this determines which section on the `/references` page it appears in.
- `url`, `author`, and `date` are optional.
- The markdown body is the credit/insight note shown under the citation.

## Local development

Requires [Node.js](https://nodejs.org) (LTS).

```sh
npm install
npm run dev       # start local dev server at localhost:4321
npm run build     # build production site to ./dist/
npm run preview   # preview the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. In the repo settings, under **Pages**, set the source to **GitHub Actions**.

The site is configured (in `astro.config.mjs`) to deploy at `https://csabahi.github.io/capstone_website_log/`. If you rename the repo, update `site` and `base` in that file to match.
