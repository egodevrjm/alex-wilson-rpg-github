# ALEX WILSON HOLODECK ENGINE

**A text-based holodeck powered by Claude for the Alex Wilson RPG**

## What Is This?

The Holodeck Engine transforms the Alex Wilson RPG into an interactive, Claude-powered storytelling experience where you act as director and sole reader. Claude serves as the world engine and Game Master, bringing scenes to life with rich detail, dynamic NPCs, and consequences that ripple through the story.

Think of it as your personal holodeck: you set the scene, Claude builds the world around you, and together you tell Alex Wilson's story.

## Core Concept

**You are the Director. Claude is the World Engine.**

- **Director (You)**: Issue commands to create scenes, jump time, set conditions, and drive the narrative
- **World Engine (Claude)**: Loads relevant context, narrates scenes, plays NPCs, maintains consistency, and responds to your actions
- **The Story**: Emerges from the interaction between your direction and Claude's world-building

## Quick Start

### 1. Start a Session

Open a conversation with Claude and provide:

```
I want to start a holodeck session for Alex Wilson RPG.

SESSION SETUP:
- Character: Alex Wilson
- Age: 22
- Starting Location: [Your choice]
- Starting Scenario: [Your choice or "surprise me"]
- Tone: [Solo/With Tommy/Specific mood]
```

### 2. Give Direction

Use natural language to direct scenes:

```
SCENE: Alex is playing a dive bar on Broadway, it's a slow Tuesday night
```

```
Alex walks into the Bluebird Cafe for his first writers' round
```

```
Jump forward three days. Alex is broke and needs to find work.
```

### 3. Take Action

Respond to scenes by telling Claude what Alex does:

```
Alex plays "Dirt Road Destiny" and watches the crowd reaction
```

```
I want Alex to be honest with the A&R rep about his hometown
```

```
Alex texts Tommy for help with the label contract
```

## Director Commands

### Scene Control

**SCENE**: Create a new scene
```
SCENE: Alex at his apartment, 2am, writing songs after a breakup
```

**JUMP**: Skip forward or backward in time
```
JUMP: 3 days later
JUMP: Back to the morning of the showcase
```

**REWIND**: Go back and change a decision
```
REWIND: Actually, Alex tells the truth instead
```

**PAUSE**: Get out-of-character information or discuss options
```
PAUSE: What are Alex's options here? What would each choice lead to?
```

### State Management

**SET**: Modify Alex's state or situation
```
SET: Alex's bank account to $47
SET: Alex's energy to 3/10, he's exhausted
SET: Tommy is dealing with a hangover
```

**CHECK**: Query current state
```
CHECK: How much money does Alex have?
CHECK: What songs has Alex written recently?
CHECK: Who remembers Alex from the last gig?
```

**INVENTORY**: See Alex's current possessions and stats
```
INVENTORY
```

### World Interaction

**INTRODUCE**: Bring in a character or element
```
INTRODUCE: Sarah Chen, the A&R rep from Big Loud
INTRODUCE: A touring opportunity that conflicts with family obligations
```

**ENVIRONMENT**: Set the mood and details
```
ENVIRONMENT: Make this feel like a real Broadway honky-tonk on a Friday night
ENVIRONMENT: Small venue, intimate, industry people watching
```

**CONSEQUENCE**: Invoke a specific consequence from previous actions
```
CONSEQUENCE: The bar owner remembers Alex broke the stage
CONSEQUENCE: That girl from the party recognizes Alex
```

### Narrative Control

**FOCUS**: Direct Claude's attention
```
FOCUS: on Alex's internal conflict about selling out
FOCUS: on the power dynamics in this meeting
FOCUS: on the small, realistic details
```

**TONE**: Set the emotional or stylistic tone
```
TONE: Prestige TV realism, nothing sitcom-y
TONE: Late night vulnerability
TONE: Chaos comedy but grounded
```

**TEMPO**: Control pacing
```
TEMPO: Slow down, give me details
TEMPO: Speed through the travel montage
TEMPO: Real-time, moment by moment
```

## How the Engine Works

### 1. Context Loading

When you set a scene, Claude automatically identifies and loads relevant context files:

**Broadway Gig Scene** →
- `Nashville_Broadway_Honky_Tonks.md`
- `Nashville_Day_Jobs.md`
- Relevant songs from catalog

**Record Label Meeting** →
- `Nashville_Record_Labels.md`
- `Nashville_AR_Managers.md`
- `Financial_Banking_Debt.md`

**Hometown Visit** →
- `Pike_County_Family_Friends.md`
- `Pike_County_Businesses.md`
- Rosie Walker context if relevant

### 2. Scene Generation

Claude constructs scenes using:

**Mandatory Header** (tracks all stats):
- Location, Date/Time, Age
- Money (Cash + Bank)
- Energy, Hunger, Equipment status
- Social media followers and changes
- Current dynamics (Beauty Impact, Tommy's Status, etc.)

**Rich Description**:
- Specific, concrete details
- Real brands, places, names
- Sensory information
- NPC reactions to Alex

**Dynamic Elements**:
- NPCs with personalities and agendas
- Consequences from previous scenes
- Opportunities and complications
- Multiple viable choices

### 3. State Tracking

The engine maintains:

**Character Stats**:
- Financial state (tracked to the dollar)
- Energy and physical needs
- Social capital (followers, reputation)
- Equipment status (Betty the guitar, F-150 truck)

**World State**:
- Time and location
- Relationships and reputation
- Ongoing storylines
- Consequences ledger

**Story Threads**:
- Active goals and conflicts
- Seeds planted for future payoff
- Character arcs in progress

### 4. Consistency Enforcement

Claude ensures:
- Canon compliance with established lore
- Character voice stays true to Bible
- Consequences compound naturally
- Time moves at human pace
- No contradictions with previous scenes

## Playing Styles

### 1. Sandbox Exploration

Wander through Alex's world freely:

```
SCENE: Alex wakes up in his apartment, no plans, just another day

[See what happens, follow opportunities organically]
```

### 2. Scenario-Based

Play through prepared scenarios:

```
I want to play "The Nashville Negotiation" scenario

[Claude loads scenario context and runs it]
```

### 3. Character Study

Focus on specific aspects of Alex:

```
FOCUS: I want to explore how Alex navigates class differences

SCENE: Alex at a fancy industry party in Green Hills
```

### 4. Collaborative Storytelling

Work with Claude to build narratives:

```
PAUSE: I'm thinking of a storyline where Alex discovers something about Rosie Walker. Can you suggest options?

[Discuss, then play through chosen thread]
```

### 5. Campaign Mode

Run connected sessions over time:

```
SESSION 1: Alex is broke and needs a gig
SESSION 2: [Continue from where Session 1 ended]
SESSION 3: [Consequences from Sessions 1-2 come home]
```

## Advanced Features

### Multi-Path Scenarios

Explore different choices:

```
PAUSE: What if Alex had told the truth at the meeting?

REWIND: Let's try that version

[See alternate timeline]
```

### Consequence Tracking

The engine maintains a consequence ledger:

```
Alex got drunk and insulted the venue owner
    → Owner remembers next time Alex needs a gig
        → Word spreads among other Broadway venues
            → Harder to book next week
```

### Dynamic NPCs

Characters remember interactions:

```
Sarah Chen met Alex at the showcase
    → She was impressed by his honesty
        → Calls him for a follow-up meeting
            → Becomes recurring character in Alex's story
```

### Social Media Integration

Your choices affect Alex's online presence:

```
Alex posts a controversial take on TikTok
    → Gains 2,000 followers (chaos-loving crowd)
    → Loses 500 followers (alienated some fans)
    → Nashville media picks it up
        → Becomes talking point at next meeting
```

### Real-Time Consequences

Actions have immediate and delayed effects:

```
Alex skips sound check for a date
    → Immediate: Equipment issues during show
    → 3 days later: Venue owner less likely to rebook
    → 1 week later: Reputation hit affects future bookings
```

## Best Practices

### For Directors

**Be Specific**:
- "Alex plays at a bar" → Vague
- "Alex plays a 9pm set at Robert's Western World on a Saturday" → Specific

**Set Context**:
- Include Alex's emotional state
- Mention relevant recent events
- Specify time of day/week (affects energy and crowds)

**Let Consequences Play Out**:
- Don't reset things artificially
- Let wins feel earned
- Let losses create story complications

**Use Natural Language**:
- You don't need rigid commands
- "Let's see what happens when..." works fine
- Mix commands with conversational direction

**Trust the Engine**:
- Claude knows the lore
- Let NPCs surprise you
- Don't micromanage every detail

### For Claude (World Engine)

**Always Load Context**:
- Reference the Master Index
- Pull relevant world files
- Maintain canon compliance

**Track Everything**:
- Money down to the dollar
- Time accurately
- Follower changes
- Energy and hunger
- All consequences

**Make Choices Matter**:
- Show immediate effects
- Plant seeds for future payoff
- No takebacks without REWIND command

**Stay Grounded**:
- Real brands and places
- Human pace and logistics
- Prestige realism, not sitcom beats
- Concrete details over generic description

**Dynamic Status Headers**:
- Include all required elements
- Update stats accurately
- Show what's relevant to this scene
- Track follower changes from last scene

## File Structure

```
holodeck/
├── HOLODECK_README.md          # This file
├── director_guide.md           # Detailed director instructions
├── engine_prompts.md           # Claude system prompts
├── state_template.json         # State tracking template
├── scene_templates/            # Pre-built scene starters
│   ├── broadway_gig.md
│   ├── label_meeting.md
│   ├── hometown_visit.md
│   └── ...
├── examples/                   # Example sessions
│   ├── session_01_broke_and_desperate.md
│   ├── session_02_first_viral_moment.md
│   └── ...
└── scripts/                    # Utility scripts
    ├── state_manager.py
    ├── context_loader.py
    └── session_logger.py
```

## Integration with Existing RPG Files

The Holodeck Engine is built on top of the existing Alex Wilson RPG structure:

**Core Files** (Always Loaded):
- `ALEX WILSON — CORE BIBLE (use).md`
- `Alex Wilson - The Cheat Sheet (use).md`
- `00_MASTER_INDEX.md`

**World Files** (Loaded as Needed):
- `core/` - Character and GM rules
- `world/` - Locations and NPCs (when split is complete)
- `scenarios/` - Pre-built scenarios
- `songs/` - Complete song catalog
- `rosie-walker/` - Family storyline

**The Engine**:
- Uses Master Index to find relevant files
- Loads 2-4 context files per scene
- References song catalog when Alex performs
- Maintains consistency with all canon

## Example Session

```
DIRECTOR: Let's start a session. Alex is 22, broke, needs a gig desperately.
          It's a Tuesday afternoon in Nashville.

CLAUDE: [Loads context: Nashville_Day_Jobs, Financial_Banking_Debt,
         Nashville_Broadway_Honky_Tonks]

—------—------—------
📍 Location: Alex's Apartment, East Nashville | 📅 Tuesday, March 14, 2:47 PM | Age: 22

💰 Cash: $23 | Bank: $-47 (overdraft)

🎸 Betty: Needs new strings | 🚗 F-150: Quarter tank, check engine light on |
⚡ Energy: 6/10 | 🍔 Hunger: 7/10

📣 Followers: 8,247/12,340/31,892/2,156 | Δ Scene: +0,+0,+0,+0

CURRENT DYNAMICS:
- Financial Pressure: Rent due in 5 days ($850)
- Equipment Status: Guitar playable but not optimal
- Hunger: Skip breakfast, lunch was crackers
- Recent Loss: Gig cancelled last minute (venue closed)
—------—------—------

Alex sits on his apartment floor, back against the bed frame, phone in hand.
Betty leans against the wall, fifth string buzzing a little. The check engine
light's been on for two weeks—Tommy says it's probably just a sensor.

His banking app shows $23 in checking. Red text below: -$47 overdraft.
The math is simple: five days until rent, $850 due, $870 short.

His phone shows three unread texts from Tommy, probably asking if he wants
to hit up Robert's for free wings during happy hour. His stomach answers
before his brain.

Three notifications: Instagram DM from a girl he met at a party two weeks
ago, a spam email about credit cards, and a text from an unknown number.

What does Alex do?

DIRECTOR: Alex checks the unknown number text first, then calls Tommy.

CLAUDE: [Scene continues with immediate response to action...]

Unknown number: "Hey, this is Marcus from Paradise Park Trailer Court.
Your friend Tommy said you might be looking for some work? We need someone
for event sound this weekend. $300 for 2 days. Text back if interested."

Alex stares at the text for a beat. Paradise Park—that's Pike County.
That's home. Which means three hours driving on a quarter tank, which
means gas money he doesn't have, which means...

He calls Tommy.

[Scene continues...]
```

## Tips for Great Sessions

### Create Momentum

Start scenes in medias res:
- "Alex is already on stage when..."
- "The meeting is going badly..."
- "Alex wakes up to seventeen missed calls..."

### Embrace Complications

Don't smooth over difficulties:
- Let money problems create real pressure
- Make logistics matter
- Force hard choices between bad options

### Use the World

Reference established lore:
- Named NPCs from the files
- Real Nashville venues
- Canonical events and history
- Social media dynamics

### Let Characters Breathe

Not every scene needs high drama:
- Morning coffee and songwriting
- Soundcheck at a venue
- Driving and thinking
- Small moments matter

### Follow the Energy

Pay attention to what's interesting:
- If a minor NPC sparks, develop them
- If a conflict emerges, explore it
- If Alex makes an unexpected choice, follow it
- Trust the story that wants to be told

## Next Steps

1. **Read**: `director_guide.md` for detailed command reference
2. **Review**: `engine_prompts.md` to understand how Claude operates
3. **Explore**: `examples/` folder for session inspiration
4. **Start**: Launch your first session!

## Philosophy

The Holodeck Engine is built on a simple premise: **Great storytelling emerges from the intersection of player agency and world consistency.**

You direct, Claude builds the world, and together you discover Alex Wilson's story—not the story you planned, but the one that wants to be told.

Welcome to the holodeck.
