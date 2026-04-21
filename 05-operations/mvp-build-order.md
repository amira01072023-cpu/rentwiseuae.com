# MVP Build Order

## Goal
Launch a useful first version of the UAE rent site as quickly as possible without pretending to know everything on day one.

## Product principle
Start with the smallest version that is:
- genuinely useful
- transparent about assumptions
- easy to update
- strong enough to expand later

---

## Phase 0 — Foundation
### Objective
Make the project runnable and structured before feature work starts.

### Tasks
1. Choose technical stack
2. Set up repository / app structure
3. Create area data in machine-friendly format
4. Create a central assumptions config
5. Define result card components and shared calculation utilities
6. Add simple content support for guides and area pages

### Must exist before moving on
- base project initialized
- sample data available
- shared calculation layer exists

---

## Phase 1 — Core calculators
### Objective
Deliver the main reason people will use the site.

### Build first
#### 1. True Move-In Cost Calculator
Why first:
- strongest immediate value
- easiest to explain
- most memorable output

Inputs:
- emirate
- area
- property type
- annual rent
- cheque count
- furnished / unfurnished
- agent involved or not

Outputs:
- first payment
- deposit
- agent fee
- registration estimate
- utility setup estimate
- internet setup estimate
- moving estimate
- total up-front cash

#### 2. True Monthly Cost Calculator
Why second:
- complements move-in cost
- creates the core product number: **True Monthly Cost**

Inputs:
- annual rent
- area assumption set
- commute choice (optional at first)

Outputs:
- monthly rent equivalent
- utilities estimate
- cooling estimate
- municipality estimate
- internet estimate
- parking estimate
- total monthly cost

### Must exist before moving on
- calculator pages work on mobile
- assumptions are shown clearly
- at least 10 areas are supported

---

## Phase 2 — Affordability and decision support
### Objective
Help users decide, not just calculate.

### Build next
#### 3. Salary-to-Rent Safety Calculator
Why now:
- high search value
- easy to use after monthly cost calculator exists
- helpful for “can I afford this?” intent

Outputs:
- safe / stretch / risky status
- recommended rent band
- remaining income after housing estimate

#### 4. Area comparison module
Why now:
- makes the site more than a calculator
- supports SEO and user decision-making

Compare:
- rent band
- move-in cost band
- monthly cost band
- metro access
- car dependence
- family fit

### Must exist before moving on
- at least 5 compare pages ready
- salary safety logic clearly documented

---

## Phase 3 — Content that supports the tools
### Objective
Capture search traffic with pages that naturally support the product.

### Publish first content set
#### Guides
1. Hidden costs of renting in Dubai
2. Hidden costs of renting in Abu Dhabi
3. Ejari explained simply
4. DEWA setup and deposit explained
5. How much cash do you need before moving in?

#### Area pages
1. Jumeirah Village Circle true cost guide
2. Dubai Marina true cost guide
3. Jumeirah Lake Towers true cost guide
4. Arjan true cost guide
5. Khalifa City true cost guide

#### Comparison pages
1. Jumeirah Village Circle vs Arjan
2. Dubai Marina vs Jumeirah Lake Towers
3. Sharjah vs Dubai for commuters

### Why this phase matters
- gives calculators surrounding context
- builds SEO surface area
- helps users who are still researching

---

## Phase 4 — Stronger product differentiation
### Objective
Add features competitors are less likely to execute well.

### Build next
#### 5. Commute + Rent Tradeoff Tool
Use case:
- cheaper home but longer commute
- pricier home but easier commute

#### 6. Hidden Cost Checklist Generator
Use case:
- first-time renter checklist
- family move checklist
- expat move checklist

#### 7. Rent Increase / Fairness Checker
Use case:
- renewal anxiety
- negotiation support

### Why later
These features are strong, but the site does not need them to prove value initially.

---

## Phase 5 — Quality, trust, and growth
### Objective
Improve credibility and retention.

### Add
- methodology page
- assumptions page
- update log
- save / share results
- email capture for saved checklists or comparisons
- better area coverage
- source review workflow

---

## What should wait
Do not build these too early:
- accounts
- complex personalization
- fancy dashboards
- listings ingestion
- AI chat layer
- advanced map UI
- full CMS complexity

These can come after product usefulness is proven.

---

## Suggested 30-day execution order
### Week 1
- set up app
- convert area data into JSON
- build calculation helpers
- build result card UI

### Week 2
- launch move-in cost calculator
- launch monthly cost calculator
- add assumptions display

### Week 3
- launch salary-to-rent calculator
- build first area pages
- create first compare page template

### Week 4
- publish first 5 guides
- publish first 5 area pages
- refine UX and mobile layout

---

## Success criteria for MVP
The MVP is successful if a renter can:
1. choose an area
2. enter annual rent and basic details
3. see likely move-in cash
4. see likely monthly all-in cost
5. understand whether it fits their salary
6. compare at least one better alternative

If those 6 things work well, the site is already useful.
