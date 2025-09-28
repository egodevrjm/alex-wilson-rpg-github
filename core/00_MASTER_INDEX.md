# Alex Wilson RPG - Split Files Master Index
**Purpose:** Quick reference guide for loading appropriate context files based on scene/situation
**Total Files:** 27 modular files (2-3KB each) from original 89KB master list

## PIKE COUNTY CONTEXT (6 files)

1. **Pike_County_Officials.md**
   - When: Law enforcement, government, court scenes
   - Contains: County officials, mayors, police, courts

2. **Pike_County_Churches.md** 
   - When: Religious scenes, Sunday services, spiritual crisis
   - Contains: 26 churches with pastors, religious culture

3. **Pike_County_Family_Friends.md**
   - When: Family memories, childhood, hometown relationships
   - Contains: Family members, friends, school connections

4. **Pike_County_Businesses.md**
   - When: Local shopping, dining, errands in Pike County
   - Contains: Restaurants, shops, banks, services

5. **Pike_County_Mining.md**
   - When: Mining work, union issues, blue-collar context
   - Contains: Coal companies, mining culture, terminology

## NASHVILLE MUSIC INDUSTRY (7 files)

6. **Nashville_Record_Labels.md**
   - When: Label meetings, contracts, A&R interactions
   - Contains: Major labels, indies, imprints

7. **Nashville_AR_Managers.md**
   - When: Industry meetings, management, booking
   - Contains: A&R reps, managers, agents, booking

8. **Nashville_Producers_Engineers.md**
   - When: Recording sessions, studio work, production
   - Contains: Producers, engineers, studio culture

9. **Nashville_Publishers_Legal.md**
   - When: Publishing deals, contracts, copyright
   - Contains: Publishers, lawyers, PROs

10. **Nashville_Session_Musicians.md**
    - When: Recording sessions, session work
    - Contains: A-list players, session culture

11. **Nashville_Radio_Media.md**
    - When: Radio promotion, interviews, press
    - Contains: DJs, journalists, media personalities

## NASHVILLE VENUES (5 files)

12. **Nashville_Broadway_Honky_Tonks.md**
    - When: Lower Broadway, tourist bars, honky-tonk gigs
    - Contains: 40+ Broadway bars and culture

13. **Nashville_Open_Mics_Writers.md**
    - When: Writers' rounds, open mics, songwriter community
    - Contains: Bluebird, writers' venues, open mic culture

14. **Nashville_Mid_Tier_Clubs.md**
    - When: Club gigs, showcases, mid-level venues
    - Contains: Exit/In, Mercy Lounge, etc.

15. **Nashville_Iconic_Venues.md**
    - When: Major concerts, Opry, arena shows
    - Contains: Ryman, Grand Ole Opry, Bridgestone

16. **Nashville_Recording_Studios.md**
    - When: Recording sessions, studio scenes
    - Contains: Historic and modern studios

## ARTIST ECOSYSTEM (3 files)

17. **Artists_Established_Stars.md**
    - When: Major concerts, celebrity encounters
    - Contains: Legends, headliners, Opry members

18. **Artists_Rising_Peers.md**
    - When: Peer competition, shared bills, showcases
    - Contains: Emerging artists, viral stars

19. **Artists_Songwriters.md**
    - When: Co-writing sessions, publishing
    - Contains: Hit writers, writing culture

## LIFESTYLE & SURVIVAL (8 files)

20. **Nashville_Day_Jobs.md**
    - When: Service industry, employment, money struggles
    - Contains: Restaurant/retail jobs, gig economy

21. **Nashville_Neighborhoods_Housing.md**
    - When: Housing scenes, neighborhoods, roommates
    - Contains: Areas, rent prices, housing reality

22. **Financial_Banking_Debt.md**
    - When: Money problems, debt, financial decisions
    - Contains: Banks, loans, debt, budget reality

23. **Health_Medical_Resources.md**
    - When: Injuries, health issues, medical care
    - Contains: Hospitals, clinics, health problems

24. **Transportation_Logistics.md**
    - When: Vehicles, touring, getting around
    - Contains: Cars, transit, highways, touring

25. **Digital_Tech_Platforms.md**
    - When: Social media, streaming, online presence
    - Contains: Platforms, apps, tech tools

26. **Social_Dynamics_Culture.md**
    - When: Class conflicts, cultural navigation
    - Contains: Class, prejudice, code-switching

27. **Consumer_Reality_Services.md**
    - When: Shopping, daily needs, consumer choices
    - Contains: Groceries, thrift stores, services

## USAGE STRATEGY

### Scene-Based Loading Examples:

**Bar Gig on Broadway:**
- Load: Nashville_Broadway_Honky_Tonks + Nashville_Day_Jobs

**Recording Session:**
- Load: Nashville_Recording_Studios + Nashville_Producers_Engineers + Nashville_Session_Musicians

**Hometown Visit:**
- Load: Pike_County_Family_Friends + Pike_County_Businesses + Pike_County_Churches

**Legal Trouble:**
- Load: Pike_County_Officials + Financial_Banking_Debt

**Industry Showcase:**
- Load: Nashville_Mid_Tier_Clubs + Nashville_AR_Managers + Artists_Rising_Peers

**Money Crisis:**
- Load: Financial_Banking_Debt + Nashville_Day_Jobs + Consumer_Reality_Services

**Writing Session:**
- Load: Artists_Songwriters + Nashville_Publishers_Legal

**Health Emergency:**
- Load: Health_Medical_Resources + Financial_Banking_Debt

## BENEFITS

✅ Load only what's needed per scene
✅ Each file stands alone
✅ Context limit extended 4-5x
✅ Faster Claude responses
✅ Easier to update sections
✅ More focused interactions

## NOTES

- Original file: 89KB / ~17,800 words
- Split into: 27 files / 2-3KB each
- Coverage: 100% of original content preserved
- Organization: Logical grouping by context/situation
- Flexibility: Mix and match as needed