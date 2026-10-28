# NOVA Mobile Store

A responsive English mobile storefront built with React, Vite, Express, and Node.js.

## Languages

Use the **دری / English** button in the header to switch between English and Dari (`fa-AF`). The selection is saved in the browser. Dari uses a right-to-left layout, Vazirmatn font, translated product content and checkout messages, and local digits. Prices remain in USD; language switching does not convert currency. Cart contents and filters are preserved. Search supports both languages and normalizes Arabic/Dari letter and digit variants.

Translations and locale formatting live in `src/i18n.js`. Add translation entries when introducing new interface text or products. Localized form validation is handled by the React checkout; API data and stored orders retain their stable English identifiers.

## Run locally

Requires Node.js 20.19+ (Node 22 recommended).

```sh
npm install
npm run dev
```

Open http://localhost:5173. The API runs on port 3001, with Vite proxying `/api` requests.

## Production

```sh
npm run build
npm start
```

Open http://localhost:3001. Express serves both the built React app and the API. Set `PORT` to change the server port.

## Features

- Responsive storefront, brand filters, text search, price/rating sorting, and product details
- Session favorites and persistent shopping bag using browser localStorage
- Quantity controls, server-validated order pricing, and demo checkout
- Orders persisted to `server/data/orders.jsonl` (excluded from version control)
- Accessible labels, keyboard controls, loading/error/empty states

## API

- `GET /api/health`
- `GET /api/products`
- `POST /api/orders`: `{ name, email, address, items: [{ id, quantity }] }`

Run `npm test` for order validation tests.

## Demo scope

This is a working demonstration, not a payment-enabled production shop. Prices, ratings, reviews, discounts, color options, shipping and warranty text are sample content; product images are representative Unsplash photos and require internet access. Use fictional customer details at checkout. No payment is collected. Before real commerce, integrate a payment provider, database, authentication, inventory, taxes, transactional email, security controls, and actual store policies. Fonts and avatars also load from external services.
