# Tech Stack Recommendation

## Recommendation
Build the MVP with **Next.js + TypeScript + Tailwind CSS + JSON content/data files**.

## Why this stack fits
### Next.js
Good fit because the product needs both:
- interactive calculators
- SEO-friendly area and guide pages

It supports:
- server-rendered or static pages
- easy routing for area pages and comparison pages
- a clean path to future APIs if needed

### TypeScript
Good for:
- calculation safety
- typed area data
- avoiding silent logic mistakes in rent formulas

### Tailwind CSS
Good for:
- fast UI iteration
- mobile-first layouts
- clean calculator cards and result blocks

### JSON files for MVP data
Use JSON first for:
- emirates
- areas
- cost assumptions
- commute assumptions

Why:
- simple to version-control
- easy to inspect in Obsidian
- no database complexity too early
- enough for the first 10 to 30 areas

---

## Suggested MVP architecture
### Frontend / app
- Next.js app router
- TypeScript
- Tailwind CSS

### Content and data
- Markdown for guides and notes
- JSON for structured area and calculator data

### Shared logic
Create a `/lib/calculators/` area for:
- move-in cost calculations
- monthly cost calculations
- salary safety calculations
- comparison helpers

### Suggested folders
- `app/`
- `components/`
- `lib/calculators/`
- `lib/data/`
- `content/`
- `public/`

---

## Why not overcomplicate it yet
Avoid early use of:
- full database
- headless CMS
- auth system
- map-heavy UI
- third-party listings ingestion

The MVP should prove usefulness first.

---

## Future upgrade path
If the product works, later add:
- PostgreSQL / Supabase
- admin update tools
- saved comparisons
- user sessions
- source-tracking tables

## Short version
If starting now, I would build it as:
**Next.js + TypeScript + Tailwind + JSON data + Markdown content**
