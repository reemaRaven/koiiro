# KOI IRO 暗い色

A worldbook site for *Koi Iro* (暗い色) — an original 7-volume manga series.

In a post-apocalyptic Earth where humanity has forgotten the fourteen cosmic realms that hold reality together, a girl named for a paradox must traverse every Loka of Vedic cosmology to witness the turn of an age.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS custom properties** — no Tailwind, no component library
- **Google Fonts** — Cinzel, Cormorant Garamond, Noto Serif JP, JetBrains Mono
- Scroll-reveal via `IntersectionObserver`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          # Metadata, fonts, favicon
  page.tsx            # Main page (server component)
  globals.css         # All styles via CSS custom properties
  components/
    RevealObserver.tsx # Client-side scroll reveal
public/
  favicon.svg         # 暗 kanji on maroon background
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
