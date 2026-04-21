# UAE Rent Site Dashboard

## Project summary
Build a UAE-focused rent utility site that helps people understand the **true cost of renting** before they sign. The site should be practical, calculator-first, trustworthy, and useful for residents and expats.

## Core positioning
**The easiest way to calculate the true cost of renting in the UAE.**

## Primary audience
- New expats
- Existing residents moving homes
- Families comparing area + school + commute tradeoffs
- Budget-conscious singles and couples

## Main product idea
A utility website that sits on top of property listings and tells users the **real all-in cost**:
- annual rent
- upfront move-in cash
- deposits and agent fees
- Ejari / registration
- utilities and municipality fees
- internet setup
- commute cost
- affordability relative to salary

## MVP features
1. True Move-In Cost Calculator
2. True Monthly Cost Calculator
3. Salary-to-Rent Safety Calculator
4. Area comparison pages
5. Hidden cost checklist generator

## Strong future features
- Commute + rent tradeoff tool
- Rent increase / fairness checker
- Area suitability quiz
- Saved comparisons
- Personalized area recommendations

## Main content buckets
- Tools pages
- Area pages
- Comparison pages
- Renting guides
- Updates / changes in fees or rules

## First execution focus
- Build useful calculators first
- Publish practical area pages
- Avoid generic listicle content
- Use simple English and transparent assumptions

## Key docs
- [[projects/rent-site/01-product/homepage-wireframe|Homepage wireframe]]
- [[projects/rent-site/01-product/calculator-formulas|Calculator formulas]]
- [[projects/rent-site/01-product/database-schema|Database schema]]
- [[projects/rent-site/03-content/content-roadmap|Content roadmap]]
- [[projects/rent-site/04-data/working/initial-area-dataset|Initial area dataset]]
- [[projects/rent-site/04-data/working/commute-assumptions|Commute assumptions]]
- [[projects/rent-site/04-data/working/assumptions-register|Assumptions register]]
- [[projects/rent-site/05-operations/mvp-build-order|MVP build order]]
- [[projects/rent-site/05-operations/tech-stack-recommendation|Tech stack recommendation]]

## Machine-friendly data files
- `projects/rent-site/04-data/working/emirates.json`
- `projects/rent-site/04-data/working/areas.json`
- `projects/rent-site/04-data/working/cost-assumptions.json`
- `projects/rent-site/04-data/working/commute-profiles.json`

## Starter implementation
- `projects/rent-site/lib/types.ts`
- `projects/rent-site/lib/calculators/utils.ts`
- `projects/rent-site/lib/calculators/moveInCost.ts`
- `projects/rent-site/lib/calculators/monthlyCost.ts`
- `projects/rent-site/lib/calculators/salarySafety.ts`
- `projects/rent-site/lib/calculators/compareAreas.ts`
- [[projects/rent-site/05-operations/implementation-notes|Implementation notes]]
- [[projects/rent-site/05-operations/ux-audit-2026-03-23|UX audit 2026-03-23]]
- [[projects/rent-site/05-operations/manual-testing-checklist|Manual testing checklist]]
- [[projects/rent-site/05-operations/live-bug-triage|Live bug triage]]
- [[projects/rent-site/05-operations/developed-vs-remaining|Developed vs remaining]]
- [[projects/rent-site/05-operations/project-board|Project board]]

## Notes
- Obsidian is set up inside `tools/obsidian/`
- Vault is the OpenClaw workspace
- Keep project knowledge in this folder so OpenClaw and Obsidian share the same source of truth
