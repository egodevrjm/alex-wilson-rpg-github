# Data Schemas (Automation)

## Venue
```yaml
Venue:
  name: string
  city: string
  tier: int
  capacity: int
  net_range: string
  lead_weeks: int
  friction: [string]
```

## NPC
```yaml
NPC:
  name: string
  archetype: string
  stats: { body: int, mind: int, social: int, grit: int }
  trust_state: string
  leverage_tags: [string]
  favours_owed: int
  notes: string
```

## Gear
```yaml
Gear:
  id: string
  type: string
  wear: int
  wear_threshold: int
  failure_effect: string
  maintenance_cost: int
```

## Financial Event
```yaml
FinancialEvent:
  date: date
  category: string
  amount: float
  currency: string
  notes: string
```

## Complication Table
```yaml
CompTable:
  id: string
  context: string
  die: string
  entries:
    - roll: int
      result: string
      effect: string
```

## Relationship Event
```yaml
RelationshipEvent:
  npc: string
  delta: int
  reason: string
  date: date
```

## Session Log
```yaml
SessionLog:
  id: string
  date: date
  scenes:
    - description: string
      complications_triggered: [string]
      resources_spent: { cash: int, fatigue: int, burnout: int }
      trust_changes:
        - npc: string
          delta: int
```

## Creative State
```yaml
CreativeState:
  fatigue_tokens: int
  burnout_tokens: int
  inspiration_tokens: int
  modifiers:
    creative_penalty: int
    negotiation_modifier: int
```

## City Economy
```yaml
CityEconomy:
  city: string
  housing: { low: int, mid: int, high: int }
  transit_monthly: int
  rehearsal_monthly: int
  food_frugal: int
  currency: string
  notes: string
```

File: world/World_Building_Guide_Addendum.md
# World Building Guide Addendum (Cross-Links)

Links the original core guide to modular Phase 2 files.

## Navigation
- Nashville: nashville-industry/Nashville_Ecosystem.md
- Other Cities: la-industry/LA_Ecosystem.md | nyc-industry/NYC_Ecosystem.md | london-industry/London_Ecosystem.md
- Genres & Sensory: genres/Genre_Reference.md | genres/Sensory_Bank.md
- Randomization: genres/Randomization_Tables.md | mechanics/Random_Tables_Expanded.md
- Economy & Survival: survival/Survival_and_Economy.md
- Contracts & Revenue: business/Contracts_and_Revenue.md
- Relationships & Burnout: mechanics/Relationship_and_Burnout.md
- Artist Archetypes: artists/Artist_Archetypes.md
- Master Venues: venues/Master_Venues_Index.md
- Hometown: pike-county/Pike_County_Hometown.md
- Data Schemas: schemas/Data_Schemas.md
- Integration: Integration_Guidance.md
- Index: README.md

## Loading Order (Suggested)
1 Core Guide  
2 Active City Ecosystem  
3 Survival & Economy (if resource pressure arc)  
4 Relationships & Burnout (social-heavy sessions)  
5 Contracts & Revenue (business negotiations)  
6 Random Tables (friction injection)  
7 Pike County (homecoming/rest arcs)

## Version Note
Phase 2 introduces modular architecture for scalability (future: festivals, accessibility & inclusion module, localization).