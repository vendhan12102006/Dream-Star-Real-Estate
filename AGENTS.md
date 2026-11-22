# AGENTS.md

## Project Architecture & Directory Layout

This project is a high-performance, full-stack real estate web platform with persistent database backing and Netlify Server integration.

```
/opt/build/repo/
├── db/
│   ├── index.ts              # Drizzle ORM client initialization using drizzle-orm/netlify-db
│   └── schema.ts             # Postgres database schema (users, properties, siteContent, inquiries, reviews)
├── drizzle.config.ts         # Drizzle Kit configuration targeting netlify/database/migrations
├── netlify/
│   ├── database/
│   │   └── migrations/       # SQL migration directory automatically applied during deploys
│   └── server/
│       └── index.mjs         # Netlify Server entrypoint (Express API handling /api/*)
├── public/
│   ├── app.js                # Frontend client state, API consumers, calculator, CMS & modal logic
│   ├── index.html            # Semantic HTML5 layout with dual auth portals and rich property grids
│   ├── styles.css            # Custom CSS design system (Navy & Royal Gold theme, responsive)
│   ├── img/
│   │   └── hero-estate.jpg   # Brand hero property visual asset
│   └── assets/               # Preserved source uploads
├── netlify.toml              # Build & server configuration, route rewrites for /owner-portal and /admin
├── package.json              # ESM package config with Drizzle beta line and dependencies
├── README.md                 # User guide and setup instructions
└── AGENTS.md                 # Technical guide for AI agents
```

---

## Architectural Conventions & Invariants

1. **Backend Routing via Netlify Server**:
   - The Netlify Server runs from `netlify/server/index.mjs` and handles all requests matching `/api/*` as configured in `export const config = { path: "/api/*" }` and `netlify.toml`.
   - Static files are served directly from `public/`.
   - Direct navigation to `/owner-portal` and `/admin` rewrites to `/index.html` (200 OK) so the frontend single-page logic can mount the admin view.

2. **Database ORM**:
   - MUST use `drizzle-orm@beta` and `drizzle-kit@beta` because the Netlify Database adapter only exists on the beta release line (`drizzle-orm/netlify-db`).
   - All migrations MUST output to `netlify/database/migrations/`.
   - Never run manual migration commands during builds; Netlify applies them automatically on deploy.
   - Database queries include resilient fallbacks with in-memory caching to guarantee zero downtime during cold starts or provisioning phases.

3. **Role-Based Segregation**:
   - The Owner / Staff login is intentionally obscured from public visitors.
   - Public header displays only "Client Portal" for ordinary users.
   - Owner access requires accessing `/owner-portal`, clicking the discreet footer link "Staff Portal", pressing `Ctrl + Shift + O`, or triple-clicking the brand emblem.
   - Server endpoints for modifying content (`PUT /api/content/:section`), creating/editing/deleting properties (`POST/PUT/DELETE /api/properties`), and viewing inquiries (`GET /api/inquiries`) strictly enforce `requireOwner` middleware by validating JWT claims (`role === 'owner'`).

4. **Default Credentials**:
   - Owner: `owner@dreamstar.com` / `DreamStarOwner2026!`
   - Client: `client@dreamstar.com` / `ClientUser2026!`
