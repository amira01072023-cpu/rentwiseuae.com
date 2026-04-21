# Database Schema

## Tables / collections

## emirates
- id
- name
- slug
- notes
- created_at
- updated_at

## areas
- id
- emirate_id
- name
- slug
- metro_access_level
- car_dependence_level
- parking_difficulty
- family_friendliness_score
- utility_cost_band
- furnished_prevalence
- school_proximity_score
- lifestyle_tags
- notes
- created_at
- updated_at

## area_rent_ranges
- id
- area_id
- property_type
- min_annual_rent
- median_annual_rent
- max_annual_rent
- source_note
- effective_date
- updated_at

## area_cost_assumptions
- id
- area_id
- security_deposit_rate
- agent_fee_rate
- registration_fee
- utility_deposit_estimate
- municipality_monthly_estimate
- internet_setup_estimate
- internet_monthly_estimate
- moving_cost_estimate
- parking_monthly_estimate
- notes
- updated_at

## commute_profiles
- id
- area_id
- work_hub
- commute_mode
- estimated_monthly_cost
- avg_minutes_one_way
- notes
- updated_at

## tools_calculation_logs (optional, if saving user calculations later)
- id
- session_key
- tool_name
- inputs_json
- outputs_json
- created_at

## content_pages
- id
- page_type
- title
- slug
- status
- related_area_id (nullable)
- summary
- last_reviewed_at
- created_at
- updated_at

## Method notes
### property_type enum
- studio
- 1br
- 2br
- 3br
- villa
- room

### metro_access_level enum
- none
- partial
- strong

### car_dependence_level enum
- low
- medium
- high

### page_type enum
- tool
- guide
- area
- comparison
- update

## MVP recommendation
For launch, this can start as structured JSON or Markdown frontmatter rather than a full database.
