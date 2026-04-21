# Manual Testing Checklist

## Goal
Validate that the current MVP works as a coherent renter decision product, not just as a collection of pages.

## Before testing
- Start the app locally
- Confirm homepage loads
- Confirm styles load properly
- Confirm navigation links are visible in the header

## Run command
```bash
cd /home/pgc/.openclaw/workspace/projects/rent-site
npm run dev
```

---

## Test 1 — Homepage clarity
### Check
- Is it immediately obvious what the product does?
- Are the 2 main paths clear?
  - unified decision tool
  - compare two areas
- Do preview cards feel useful instead of decorative?
- Do area guide links feel relevant?

### Note problems if
- too many things compete for attention
- the homepage feels like a menu instead of a product
- the wording feels vague

---

## Test 2 — Unified decision flow
### Steps
1. Open `/rent-decision`
2. Leave defaults as-is
3. Change area
4. Change property type
5. Change rent
6. Change salary
7. Toggle furnished / agent involved

### Check
- Do outputs update sensibly?
- Is the page easy to understand?
- Does the affordability label feel believable?
- Are next-step suggestions useful?

### Note problems if
- values feel disconnected
- too much scrolling is needed
- results are hard to scan

---

## Test 3 — Move-in calculator
### Steps
1. Open `/move-in-calculator`
2. Test with Jumeirah Village Circle
3. Test with Dubai Marina
4. Toggle furnished
5. Toggle agent involved
6. Change cheque count

### Check
- Does move-in cash react in an expected way?
- Is the assumptions panel clear?
- Is the workflow strip helpful or noisy?

---

## Test 4 — Monthly cost calculator
### Steps
1. Open `/monthly-cost-calculator`
2. Change area
3. Change commute cost
4. Change cooling
5. Add renter insurance

### Check
- Does the breakdown make sense?
- Is the core monthly number prominent enough?
- Is it obvious which inputs are user-controlled vs estimated?

---

## Test 5 — Salary safety calculator
### Steps
1. Open `/salary-safety-calculator`
2. Try a safe case
3. Try a stretch case
4. Try a risky case
5. Add school costs and debt

### Check
- Do safe / stretch / risky transitions feel reasonable?
- Is the ratio easy to understand?
- Does the page feel helpful instead of judgmental?

---

## Test 6 — Generic comparison page
### Steps
1. Open `/area-comparison`
2. Compare Jumeirah Village Circle vs Arjan
3. Compare Dubai Marina vs Jumeirah Lake Towers
4. Compare Khalifa City vs Al Reem Island
5. Change property type

### Check
- Is the comparison easy to scan?
- Are summary bullets useful?
- Do the chosen defaults feel sensible?

---

## Test 7 — Dedicated compare pages
### Pages
- `/compare/jvc-vs-arjan`
- `/compare/dubai-marina-vs-jlt`
- `/compare/khalifa-city-vs-al-reem-island`

### Check
- Does each page feel like a real landing page?
- Is the verdict useful?
- Are the structured verdict bullets helpful?
- Do next-step links carry the right context?

---

## Test 8 — Area guide pages
### Pages
- `/areas/jvc`
- `/areas/arjan`
- `/areas/dubai-marina`
- `/areas/jlt`
- `/areas/khalifa-city`
- `/areas/al-reem-island`

### Check
- Does the page give a fast sense of the area?
- Is “This area is best if…” useful?
- Are move-in and monthly estimates clear enough?
- Do next-step actions feel natural?

---

## Test 9 — Prefilled navigation
### Check these paths
- area guide → unified decision tool
- area guide → move-in calculator
- area guide → monthly cost calculator
- dedicated compare page → generic compare tool
- dedicated compare page → unified decision tool

### Check
- Is the destination prefilled correctly?
- Does property type carry through when expected?
- Does area carry through when expected?

---

## Test 10 — Mobile feel
### Check
- narrow browser width or phone
- hero readability
- card stacking
- form usability
- CTA visibility
- summary readability

### Note problems if
- cards feel too tall
- results require too much scrolling
- buttons become awkward to tap

---

## Priority issues to watch for
- homepage confusion
- weak primary CTA emphasis
- results too hard to scan
- assumptions too wordy
- prefilled links failing
- pages feeling too similar / repetitive
- not enough distinction between guide / compare / calculator modes

---

## Suggested output format after testing
Use this structure:

### Working well
- ...
- ...

### Confusing
- ...
- ...

### Broken / wrong
- ...
- ...

### Next improvements
1. ...
2. ...
3. ...
