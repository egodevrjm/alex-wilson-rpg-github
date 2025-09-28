# Alex Wilson RPG - GitHub Repository

## Quick Start for Game Masters

### Files to Keep in Claude (core/)
- `Alex_Wilson_Bible_v2.md` - Character truth
- `00_MASTER_INDEX.md` - Navigation guide  
- `Game_Master_Reference.md` - Rules and style
- Song index for quick reference

### Files to Fetch as Needed
Use web_fetch with raw GitHub URLs:
```
https://raw.githubusercontent.com/[username]/alex-wilson-rpg/main/world/venues/Nashville_Broadway_Honky_Tonks.md
```

### Usage Pattern
1. Player describes scene
2. GM checks Master Index for relevant files
3. Fetch 2-4 files for scene context
4. Play scene with full world detail
5. Fetch songs when Alex performs

## Repository Structure
- `core/` - Always loaded in Claude
- `world/` - Modular world building (fetch as needed)
- `rosie-walker/` - Family secret storylines  
- `songs/` - Individual song files
- `scenarios/` - Campaign arcs
- `tools/` - GM utilities

## Context Window Benefits
- **Before:** 200KB+ always loaded = ~30 messages
- **After:** 15KB core + 5KB per scene = 80+ messages per session!

## File Organization by Scene Type

### Bar Gig on Broadway
```
world/venues/Nashville_Broadway_Honky_Tonks.md
world/survival/Nashville_Day_Jobs.md  
songs/by-genre/honky-tonk/[specific-song].md
```

### Record Label Meeting
```
world/nashville-industry/Nashville_Record_Labels.md
world/nashville-industry/Nashville_AR_Managers.md
world/survival/Financial_Banking_Debt.md
```

### Family Drama/Hometown Visit
```
world/pike-county/Pike_County_Family_Friends.md
world/pike-county/Pike_County_Businesses.md
rosie-walker/Rosie_Walker_Fact_Sheet.md
```

### Rosie Walker Documentary Fallout
```
rosie-walker/Finding_Rosie_Documentary.md
world/nashville-industry/Nashville_Radio_Media.md
tools/Social_Media_Templates.md
```
