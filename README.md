# Agency Boilerplate

Production-ready Next.js starter for agency client websites. Clone, configure one file, deploy.

## Stack

| Tool                                           | Purpose                                  |
| ---------------------------------------------- | ---------------------------------------- |
| [Next.js 16](https://nextjs.org)               | Framework — App Router                   |
| [TypeScript](https://typescriptlang.org)       | Type safety                              |
| [Tailwind CSS](https://tailwindcss.com)        | Styling                                  |
| [next-intl](https://next-intl-docs.vercel.app) | Internationalisation                     |
| [Framer Motion](https://framer.com/motion)     | Animations                               |
| [Resend](https://resend.com)                   | Contact form email                       |
| [Sanity](https://sanity.io)                    | CMS                                      |
| [Zod](https://zod.dev)                         | Validation — forms, API routes, env vars |
| [Vercel](https://vercel.com)                   | Hosting & analytics                      |
| [Cloudflare](https://cloudflare.com)           | DNS, SSL, DDoS protection                |
| [BetterStack](https://betterstack.com)         | Uptime monitoring                        |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in all values in `.env.local` — the app will throw at startup if any are missing.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## New Client Setup

### New Client Setup Checklist

- [ ] Edit `src/config/site.ts` for client name, description, URLs, nav, and social links
- [ ] Upload the client font to `public/fonts` and add `@font-face` in `src/app/globals.css`
- [ ] Update theme colors and font in `globals.css`
- [ ] Add or update translation files in `src/messages/` (e.g., `en.json`, `nl.json`, `fr.json`)
- [ ] Add logo and Open Graph images to `public/`
- [ ] Set up environment variables in `.env.local` (see `.env.example`)
- [ ] Review navigation and content for client-specific needs
- [ ] Test contact form and health endpoint

---

---

## Project Structure

```

src/
├── app/
│ ├── [locale]/ # All pages — i18n ready
│ │ └── page.tsx # Homepage
│ │
│ ├── api/
│ │ ├── health/route.ts # Uptime monitoring endpoint
│ │ └── contact/route.ts # Contact form handler
│ ├── layout.tsx # Root layout — metadata, fonts, analytics
│ ├── SEOJsonLD.tsx
│ ├── sitemap.ts # Auto-generated /sitemap.xml
│ ├── globals.css
│ └── robots.ts # Auto-generated /robots.txt
├── components/ # Gloabal components
├── config/
│ └── site.ts # ⭐ Edit this per client
├── lib/
│ ├── schemas.ts # All Zod schemas — forms, env, site config
│ ├── validate.ts # Reusable API route validation helper
│ ├── env.ts # Validated env vars — import instead of process.env
│ ├── resend.ts # Email helper
│ ├── sanity.ts # Sanity CMS client
│ └── utils.ts # cn(), sanitizeHtml(), sanitizeFields()
├── messages/
│ ├── en.json # English strings
│ └── fr.json # French strings
└── types/
└── index.ts # Shared TypeScript types

middleware.ts # next-intl locale routing

```

---

## Validation

All validation is handled by [Zod](https://zod.dev) for both API routes and forms. Schemas are defined in `src/lib/schemas.ts` and reused everywhere (no duplication).

**API Route Validation Example:**

```ts
import { validate } from "@/lib/validate";
import { contactSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  const body = await req.json();
  const result = validate(contactSchema, body);
  if (!result.success) return result.response; // automatic 400 with error message
  const { name, email, message } = result.data;
}
```

**Client-side Validation Example:**

```ts
import { contactSchema } from "@/lib/schemas";

const result = contactSchema.safeParse(formData);
if (!result.success) {
  const errors = result.error.flatten().fieldErrors;
  // { name: ["Required"], email: ["Invalid email address"] }
}
```

**To add a new form:**

1. Add a schema to `src/lib/schemas.ts`
2. Use `validate()` in the API route
3. Import the schema in the form component

---

## Internationalisation

Pages live under `src/app/[locale]/`. Translation strings live in `src/messages/`.

**Adding a new language:**

```bash
cp src/messages/en.json src/messages/de.json
# Translate the values in de.json
```

Then add the locale to `siteConfig.locales` in `src/config/site.ts`:

```ts
locales: ["en", "fr", "de"],
```

That's it. The middleware and locale switcher pick it up automatically.

**Using translations in a component:**

```ts
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  return <h1>{t("title")}</h1>;
}
```

---

## Security

Security headers are applied to every route via `next.config.js`:

| Header                    | Value                                        |
| ------------------------- | -------------------------------------------- |
| `X-Frame-Options`         | `DENY`                                       |
| `X-Content-Type-Options`  | `nosniff`                                    |
| `Referrer-Policy`         | `strict-origin-when-cross-origin`            |
| `Permissions-Policy`      | Disables camera, mic, geolocation            |
| `Content-Security-Policy` | Restricts script, style, font, image sources |

User input is sanitized before being injected into HTML email templates via `sanitizeHtml()` in `src/lib/utils.ts`.

---

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add all environment variables from `.env.example`
4. Deploy

Every push to `main` auto-deploys. Every pull request gets a preview URL.

### DNS — Cloudflare

1. Add the client domain to your Cloudflare account
2. Cloudflare auto-imports existing DNS records on setup
3. Add Vercel's DNS records (provided after deploy)
4. SSL provisions automatically within ~1 minute

> If the client has an existing DNS setup, Cloudflare scans and imports all records automatically. Review that mail records (MX, SPF, DKIM) are set to DNS-only (grey cloud).

### Uptime monitoring — BetterStack

1. Create a new monitor at [betterstack.com](https://betterstack.com)
2. URL: `https://clientdomain.com/api/health`
3. Interval: 3 minutes
4. Alert: Email + Slack

The health endpoint returns:

```json
{ "status": "ok", "timestamp": "2025-01-01T00:00:00.000Z" }
```

---

## Automated Maintenance

### Dependency updates — Dependabot

Dependabot opens pull requests every Monday for outdated packages. Vercel builds and tests each PR automatically. Review and merge — takes ~5 minutes per week across all client projects.

Config lives at `.github/dependabot.yml`. Non-major updates are grouped into a single PR.

### CI — GitHub Actions

Every pull request runs:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Merging to `main` is blocked if any step fails.

---

## Scripts

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
npm run format    # Prettier — format all files
```

---

## Adding a New Page

1. Create `src/app/[locale]/page-name/page.tsx`
2. Add the route to `siteConfig.nav` in `src/config/site.ts`
3. Add the URL to `src/app/sitemap.ts`
4. Add translation keys to `src/messages/en.json` (and other locales)

---

