# Karta Web

Curated furniture & home-living marketplace (Hamd Tech Ltd). Vite · React 18 · TypeScript · Tailwind 3 · React Router 6 · Zustand.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build
```

## Routes
| Path | Access | Status |
|---|---|---|
| `/`, `/shop`, `/product/:id`, `/cart` | Public | Built |
| `/login`, `/register` | Public | Built (mock auth) |
| `/checkout`, `/account/*` | Signed in | Guarded stub |
| `/vendor/*`, `/admin/*`, `/logistics/*` | Role-guarded | Guarded stub |

Browsing is open. Sign-in is requested at checkout and account pages, then returns the user to where they were.

## Structure
```
public/            static assets. Put images here (see below)
src/app/           App + routes
src/layouts/       PublicLayout, AuthLayout   (add AccountLayout, PortalLayout next)
src/pages/         thin route screens
src/modules/       one folder per BRD module: catalog, vendors, marketing (add cart, checkout, orders, logistics, returns, reviews, support, admin, analytics)
src/components/    ui/, layout/, brand/
src/store/         auth + cart (Zustand, persisted)
src/data/          SAMPLE data. Replace with API calls
src/types/         Role, Product, TrustCategory (BRD §8, §11)
```

## Adding images (all optional; gradients show until they exist)
- `public/images/hero/hero-1.jpg`: landing hero (portrait, about 1400×1800)
- `public/images/rooms/<id>.jpg`: living, dining, bedroom, office, outdoor, lighting, rugs, decor (4:5)
- `public/images/products/…`: then set `image: '/images/products/p1.jpg'` on each product in `src/data/products.ts`
- `public/brand/`: logo variants (transparent dark + light) and the original file. Replace with SVGs when available.

## Config
`.env`: copy `.env.example`. Set `VITE_WHATSAPP_NUMBER` (digits, with country code) to show the WhatsApp button and per-product inquiry link.

## Brand tokens (`tailwind.config.ts`)
`ink #101E21` · `paper #FAF9F3` · `brass #BC8E63` (use `brass-700` for text). Display: Cormorant Garamond. Body: Inter.

## Notes
- Auth is a **mock**. Real auth, RBAC and payment verification must be enforced server-side (BRD §20.3).
- The BRD specifies Next.js for web. This scaffold stays on Vite; the module layout maps cleanly if you migrate.
