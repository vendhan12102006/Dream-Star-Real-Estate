# Dream Star Real Estate & Developers

A full-stack, enterprise-grade real estate web platform with persistent database storage, dual-tier authentication (segregated Client Portal and Owner Content Management System), interactive property browsing, EMI loan calculation, and direct customer inquiry tracking.

Developed for **Dream Star Real Estate & Developers**, operating from Anuppambattu, Minjur, and Tiruvallur district (Tamil Nadu).

---

## Key Technologies Used

- **Runtime & Backend**: Node.js 24+, Express, Netlify Server (`netlify/server/index.mjs`)
- **Database & ORM**: Netlify Database (Managed PostgreSQL), Drizzle ORM (`@netlify/database`, `drizzle-orm@beta`, `drizzle-kit@beta`)
- **Authentication**: JWT (JSON Web Tokens), `bcryptjs` password hashing with role-based access control (`owner` vs `user`)
- **Frontend**: Responsive modern HTML5, CSS3 with luxury navy/gold design system, modular Vanilla JavaScript, Cinzel & Plus Jakarta Sans typography
- **Integration**: Direct WhatsApp Business click-to-chat with dynamic prefilled property enquiries, Google Maps office directions, and telephone dialers

---

## Authentication & Credentials

### 1. Owner / Management Portal (Admin CMS)
The Owner login is strictly segregated and hidden from regular visitors to maintain professional privacy:
- **Email**: `owner@dreamstar.com`
- **Password**: `DreamStarOwner2026!`
- **Access Points**:
  - Discreet link in footer: `Staff Portal`
  - URL routing: `/owner-portal`, `/admin`, or `#owner-portal`
  - Keyboard shortcut: `Ctrl + Shift + O`
  - Secret interaction: Triple-click on the brand emblem in the header

**Owner Capabilities**:
- **Listings Manager**: Add new properties with photos, price, BHK, bathrooms, sqft, facing, DTCP/RERA approvals, and featured badges. Edit any listing in real-time or delete listings.
- **Website Content Editor**: Modify the entire website's hero headline, subtitle, statistics, contact numbers (+91 90437 43426, 99942 70551), office address, consultation hours, and company information. Changes persist in the Postgres database and update the live website immediately.
- **Inquiries & Site Tour Leads**: View all incoming buyer leads submitted via the web inspection form, with status tracking (`New`, `Contacted`, `Scheduled`, `Closed`) and direct one-click Call and WhatsApp buttons.
- **Reviews Moderation**: Approve or delete customer testimonials.

### 2. Client Portal (Regular Visitors & Home Buyers)
Visible on the main header for property buyers and investors:
- **Demo Client Email**: `client@dreamstar.com`
- **Demo Client Password**: `ClientUser2026!`
- Self-registration is open for any client.
- **Capabilities**: Save favorite properties, track scheduled site visits, submit property inquiries. Regular users cannot access or view owner controls.

---

## Database Architecture (`db/schema.ts`)

- `users`: ID, name, email (unique), password_hash, phone, role (`owner` | `user`), created_at
- `properties`: ID, title, category (`Villa`, `Land`, `House`, `Commercial`, `Apartment`), status (`For Sale`, `For Rent`, `Sold`), price, price_num, location, area_sqft, bedrooms, bathrooms, facing, approval, description, image_url, features, is_featured, created_at, updated_at
- `site_content`: ID, section_key (unique: `hero`, `contact`, `about`), content_json, updated_at
- `inquiries`: ID, name, phone, email, property_id, property_title, looking_for, budget, preferred_date, message, status, created_at
- `reviews`: ID, name, rating, location, comment, is_approved, created_at

Migrations are generated in `netlify/database/migrations/` and applied automatically on deploy.

---

## Local Development

```bash
# Install dependencies
npm install

# Generate database migrations
npm run generate

# Run Netlify dev server with Netlify Database emulation
/opt/buildhome/node-deps/node_modules/.bin/netlify dev --port 8889
```
