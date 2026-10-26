# Complete Sylvaline Ventures — Website

React + Vite site for Complete Sylvaline Ventures, a foodstuff and hire services business in Ijeshatedo, Lagos.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in /dist
```

## Edit content

Everything the business might change (phone numbers, address, products, rice sizes, hire items, photos) is in `src/data.js`.

- Product photos are free Unsplash images loaded by URL. To use real shop photos, put them in `public/images/` and change the `img:` value to `/images/your-photo.jpg`.
- Every "Order" and "Ask today's price" button opens WhatsApp to 09060763325 with a pre-filled message.

## Deploy

`npm run build`, then upload `dist/` to Netlify, Vercel or any static host.
