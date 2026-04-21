# Commute Assumptions

> Planning assumptions for the first version of the commute-aware rent product.
> These are model inputs, not final published facts.

## Work hubs to support first
### Dubai
- Business Bay / Downtown
- Dubai Internet City / Media City
- Jebel Ali / Expo corridor
- Deira / Bur Dubai

### Abu Dhabi
- Abu Dhabi Island core
- Airport / Yas corridor

## Commuter modes
- car
- metro
- mixed

## Monthly cost model (starter)
### Car commuter
Monthly commute cost can be modeled as:
- fuel
- tolls / Salik if relevant
- parking if relevant
- wear-and-tear buffer (optional later)

Starter formula:
`commute_monthly = fuel_monthly + tolls_monthly + parking_monthly`

### Metro commuter
Monthly commute cost can be modeled as:
- expected transport spend band based on route intensity

### Mixed commuter
Use blended estimate.

## Starter planning bands
### Low commute cost
- AED 150 to 350 / month

### Medium commute cost
- AED 350 to 700 / month

### High commute cost
- AED 700 to 1500+ / month

## Time bands
### Light commute
- 15 to 30 minutes one way

### Moderate commute
- 30 to 50 minutes one way

### Heavy commute
- 50 to 90+ minutes one way

## Product rule
The tool should not pretend to know exact commute cost unless the route details are specific. Early versions should clearly label results as estimates based on area, work hub, and transport mode.
