# Calculator Formulas

## 1. True Move-In Cost Calculator
### Inputs
- annual_rent
- cheque_count
- security_deposit_rate
- agent_fee_rate
- registration_fee
- utility_deposit
- municipality_setup_fee (if applicable)
- internet_setup_fee
- moving_cost
- miscellaneous_buffer

### Formulas
#### First payment
`first_payment = annual_rent / cheque_count`

#### Security deposit
`security_deposit = annual_rent * security_deposit_rate`

#### Agent fee
`agent_fee = annual_rent * agent_fee_rate`

#### Total move-in cash
`total_move_in_cash = first_payment + security_deposit + agent_fee + registration_fee + utility_deposit + municipality_setup_fee + internet_setup_fee + moving_cost + miscellaneous_buffer`

## 2. True Monthly Cost Calculator
### Inputs
- annual_rent
- utilities_monthly
- cooling_monthly
- municipality_monthly
- internet_monthly
- parking_monthly
- commute_monthly
- renter_insurance_monthly (optional)

### Formula
#### Rent equivalent
`monthly_rent_equivalent = annual_rent / 12`

#### True monthly cost
`true_monthly_cost = monthly_rent_equivalent + utilities_monthly + cooling_monthly + municipality_monthly + internet_monthly + parking_monthly + commute_monthly + renter_insurance_monthly`

## 3. Salary-to-Rent Safety Calculator
### Inputs
- monthly_salary
- true_monthly_cost
- school_cost_monthly (optional)
- debt_monthly (optional)

### Supporting formula
`housing_ratio = true_monthly_cost / monthly_salary`

### Suggested bands
- Safe: <= 0.30
- Stretch: > 0.30 and <= 0.40
- Risky: > 0.40

### Disposable income estimate
`remaining_after_housing = monthly_salary - true_monthly_cost - school_cost_monthly - debt_monthly`

## 4. Commute vs Rent Tradeoff Tool
### Inputs for each option
- annual_rent
- commute_monthly
- parking_monthly
- time_minutes_per_workday
- working_days_per_month

### Cost formula
`monthly_total_option = (annual_rent / 12) + commute_monthly + parking_monthly`

### Time formula
`monthly_commute_hours = (time_minutes_per_workday * working_days_per_month) / 60`

### Difference
`monthly_difference = monthly_total_option_b - monthly_total_option_a`
`annual_difference = monthly_difference * 12`

## 5. Rent Increase Checker
### Inputs
- current_rent
- proposed_rent

### Formula
`increase_amount = proposed_rent - current_rent`
`increase_percent = increase_amount / current_rent`

## Product rule
All outputs must show assumptions and include a note that figures are planning estimates, not official quotes.
