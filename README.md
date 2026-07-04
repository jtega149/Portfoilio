# Portfolio

[Link to John Ortega Portfoilio](https://john-ortega.com/)

A minimalist, high-tech personal portfolio — black with phosphor-green accents,
HUD framing, and a terminal-flavored type system. Built with **React + TypeScript +
Vite** and **react-router-dom**.

All your content lives in plain TypeScript files under `src/data/` — you never
touch the UI to add a project, a job, or a link.

---

## Run it

You'll need [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev      # start the dev server (prints a localhost URL)
npm run build    # type-check + production build into /dist
npm run preview  # preview the production build
```

---

## Where to put your stuff

Everything you'll edit is in **`src/data/`**:

| File              | What it holds                                                        |
| ----------------- | -------------------------------------------------------------------- |
| `profile.ts`      | Name, role, tagline, About paragraphs, skills, social links, email   |
| `projects.ts`     | Your projects **and** your Open Source Contributions (two arrays)    |
| `experience.ts`   | Work / program timeline                                              |
| `resume.ts`       | Points at your resume PDF + the download filename                    |
| `types.ts`        | Type definitions (gives you autocomplete; rarely needs editing)      |

Each file has comments and example entries showing the exact shape. Add/remove
objects in the arrays and the pages update automatically.

### Projects & Open Source Contributions

Both live in `src/data/projects.ts`:

- `projects` — set `featured: true` on the standout ones; featured projects sort
  first and render full-width.
- `openSourceContributions` — these render in the dedicated **"Open Source
  Contributions"** section at the bottom of the Projects page.

### Resume

1. Drop your PDF into `public/` (e.g. `public/resume.pdf`).
2. Make sure `file` in `src/data/resume.ts` matches the name.

The Resume page embeds the PDF inline and provides **Download** and **Open in new
tab** buttons. If the file is missing, a helpful fallback message shows instead.

### Contact

The contact form has no backend — it composes a `mailto:` link and opens the
visitor's mail app. If you'd rather receive submissions directly, swap the
`send()` handler in `src/pages/Contact.tsx` for a form service (Formspree, your
own API, etc.).

---

## Changing the theme

Every color, font, and spacing token lives at the top of **`src/index.css`** in
the `:root` block. Change `--green` to retheme the accent across the whole site;
change `--bg` / `--panel` for the base surfaces. The signature HUD touches (grid,
scanlines, corner brackets, blinking cursor) are all defined there too.

---

## Structure

```
src/
├── data/          ← edit these to add content
├── pages/         ← one component per route (Home, About, Projects, ...)
├── components/    ← Navbar, Footer, SectionHeading, ScrollToTop
├── hooks/         ← useTypingRotator (hero animation)
├── index.css      ← design tokens + global/HUD styles
├── App.tsx        ← routes
└── main.tsx       ← entry point
```

## Deploying

The build output in `/dist` is static — host it on Vercel, Netlify, GitHub Pages,
Cloudflare Pages, etc. On hosts that need it, add a catch-all rewrite to
`index.html` so client-side routes (like `/projects`) resolve on refresh.
```
```
