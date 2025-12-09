# Fareham Kitchens (Next.js)

This is the Next.js port of the original Vite project in `BACKUP/`, matching the same UI, components, and styling for improved SEO (SSR, per-page metadata, and optimized routing).

## Getting Started

1. Install dependencies  
   ```bash
   npm install
   ```
2. Run the dev server  
   ```bash
   npm run dev
   ```
3. Lint  
   ```bash
   npm run lint
   ```
4. Production build  
   ```bash
   npm run build && npm start
   ```

## Notes
- Global styles live in `src/styles/globals.css`.
- Navigation/Footer now use Next.js routing and the logo is served from `/public/logo.webp`.
- Remote images from Unsplash are allowed via `next.config.mjs`.
- Per-page `<Head>` metadata is included for better SEO coverage.

