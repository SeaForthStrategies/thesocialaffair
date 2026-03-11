# The Social Affair

A modern marketing website for **The Social Affair**, an event venue in East Troy, Wisconsin, and its in-house catering partner **Toothpicks Catering**.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animations)
- Mobile-first, SEO-friendly

## Project structure

```
/app
  layout.tsx          # Root layout, fonts, metadata, Navbar/Footer
  page.tsx            # Home page
  globals.css         # Global styles and Tailwind
  /venue/page.tsx     # Venue details, capacity, amenities
  /events/page.tsx    # Event types (weddings, corporate, etc.)
  /gallery/page.tsx   # Image gallery by category
  /catering/page.tsx  # Toothpicks Catering (in-house partner)
  /about/page.tsx     # Venue story and mission
  /contact/page.tsx   # Inquiry form and contact info

/components
  Navbar.tsx          # Sticky nav, mobile menu
  Footer.tsx          # Links and location
  Hero.tsx            # Full-width hero with CTAs
  Section.tsx         # Reusable section wrapper with title/subtitle
  EventCard.tsx       # Event type cards
  GalleryGrid.tsx     # Masonry-style grid + lightbox
  CTASection.tsx      # Call-to-action strip
  ContactForm.tsx     # Event inquiry form
  TestimonialCard.tsx # Quote cards
  AnimatedDivider.tsx # Decorative divider
```

## Run locally

1. **Install dependencies** (use [pnpm](https://pnpm.io)):

   ```bash
   pnpm install
   ```

2. **Start the dev server**:

   ```bash
   pnpm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
 pnpm run build
 pnpm start
```

## Where to edit content

- **Copy and headlines**: Edit the relevant `page.tsx` in `/app` and component files in `/components`. Home page content is in `app/page.tsx` (sections, event types, testimonials).
- **Metadata (SEO)**: Each page exports `metadata` in its `page.tsx`. The default title and description are in `app/layout.tsx`.
- **Styles**: Global styles in `app/globals.css`. Theme colors and fonts are in `tailwind.config.ts` and used via Tailwind classes (e.g. `bg-burgundy`, `font-playfair`).
- **Images**: The site uses Unsplash URLs for placeholders. Replace with your own assets (e.g. in `/public/images/`) and update the `src` or `backgroundImage` values in the components and pages that reference them.

## Deploy

- **Vercel**: Connect the repo to [Vercel](https://vercel.com); use the default Next.js preset and `pnpm` as the package manager. No extra config needed for static/SSR.
- **Other hosts**: Run `pnpm run build` and `pnpm start`, or use a static export if you switch to `output: 'export'` in `next.config.js` (some features like server components may need adjustment).

## Brand summary

- **The Social Affair** = the venue (primary brand).
- **Toothpicks Catering** = in-house catering partner (subpage/service under the venue).

SEO targets: East Troy wedding venue, Wisconsin event venue, East Troy reception venue.
