# Ayman Osama — Digital Verification Portfolio (Website)

A static one-page portfolio site: `index.html`, `styles.css`, `script.js`, and `assets/photo.jpg`. No build step, no dependencies to install — it just needs to be hosted as static files.

## Deploy it (pick one, all free)

**Netlify (easiest)**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. You get a live URL in seconds. Add a custom domain later if you want, from Site settings.

**Vercel**
1. Go to https://vercel.com/new
2. Import this folder (or push it to a GitHub repo first and import the repo).
3. Deploy — no build command needed, output directory is `/`.

**GitHub Pages**
1. Create a new GitHub repo and push these files to it.
2. In the repo, go to Settings → Pages → set Source to the `main` branch, root folder.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Editing content

- Text and structure: `index.html`
- Colors, spacing, fonts: `styles.css` (see the `:root` variables at the top for the color palette)
- Mobile menu behavior: `script.js`
- Your photo: replace `assets/photo.jpg` with a new image of the same name (or update the `src` paths in `index.html`)

## Notes

- Update the email, phone, and LinkedIn link in the Contact section of `index.html` if any of these change.
- Fonts (Fraunces + Inter) load from Google Fonts via a `<link>` tag in `index.html` — an internet connection is needed for them to render with their intended look. Without it, the browser falls back to a serif/sans-serif system font.
