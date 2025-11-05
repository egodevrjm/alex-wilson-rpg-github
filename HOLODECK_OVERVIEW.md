# ALEX WILSON HOLODECK ENGINE

**A comprehensive text-based roleplaying engine powered by Claude AI**

---

## What Is This?

The **Alex Wilson Holodeck Engine** transforms the Alex Wilson RPG into an interactive, AI-powered storytelling experience. Think of it as your personal holodeck from Star Trek, but for text-based roleplay.

**You** act as **Director** - setting scenes, driving narrative, making high-level choices.

**Claude** acts as **World Engine** - bringing scenes to life with rich detail, playing all characters, tracking stats, maintaining consistency, and responding dynamically to your direction.

Together, you create emergent stories about Alex Wilson's journey through Nashville's music industry.

---

## Quick Start

**Want to jump right in?**

1. Read → `holodeck/QUICKSTART.md` (5 minutes)
2. Configure Claude → `holodeck/GETTING_STARTED_WITH_CLAUDE.md` (10 minutes)
3. Start playing → Pick a scene and go

**Want to understand the system first?**

Start with `holodeck/HOLODECK_README.md` for the complete overview.

---

## What Makes This Special?

### 1. Director-Driven Narrative

You're not "playing as" Alex Wilson. You're **directing his story**.

- Set scenes and situations
- Jump through time
- Modify conditions
- Control focus and tone
- Explore alternate paths

### 2. Claude-Powered World Engine

Claude doesn't just respond - it **builds the world**:

- Dynamically loads relevant context from 50+ lore files
- Tracks every dollar, every stat, every consequence
- Plays Alex and all NPCs with consistent voices
- Generates rich, specific, grounded narrative
- Remembers and compounds consequences
- Maintains canon compliance

### 3. Grounded Realism

This isn't fantasy wish fulfillment. It's **prestige TV realism**:

- Money problems are real (tracked to the dollar)
- Time moves at human pace (no convenient warps)
- Choices have cascading consequences
- Success is rare and costly
- Logistics and friction matter
- No sitcom beats or perfect timing

### 4. Deep Integration with Lore

Built on top of the extensive Alex Wilson RPG repository:

- 50+ world-building files
- Detailed character bible
- Complete song catalog
- Prepared scenarios
- Rich NPC ecosystem
- Established canon

### 5. Flexible and Powerful

Use it however you want:

- Sandbox exploration
- Scenario-based campaigns
- Character studies
- Alternate timelines
- Multi-session campaigns
- One-shot sessions

---

## The Experience

### You Say:
```
SCENE: Alex is broke, it's rent day, and he's $850 short.
He's sitting in his Nashville apartment trying to figure out options.
```

### Claude Creates:
- Full scene with precise stat tracking
- Rich sensory details and specific places
- Alex's internal state and external situation
- NPCs with personalities and agendas
- Multiple viable (and complicated) choices
- Consequences from previous sessions

### You Respond:
```
Alex calls Tommy for help
```

### The Story Emerges:
Claude plays out the conversation, tracking time, energy, stress. Tommy has ideas but they all have tradeoffs. Alex makes a choice. Consequences ripple forward.

Three scenes later, that choice comes back in unexpected ways.

---

## Core Features

### Director Commands

**Scene Control**: SCENE, JUMP, REWIND, PAUSE
**State Management**: SET, CHECK, INVENTORY
**World Interaction**: INTRODUCE, ENVIRONMENT, CONSEQUENCE
**Narrative Control**: FOCUS, TONE, TEMPO

Plus natural language direction - no rigid syntax required.

### World Engine Capabilities

**Precise Stat Tracking**:
- Money (to the dollar)
- Energy and hunger (0-10 scales)
- Time (exact date/time)
- Social media (follower counts)
- Equipment status
- All consequences

**Dynamic Context Loading**:
- Identifies scene type
- Loads 2-4 relevant files automatically
- References Master Index
- Maintains canon compliance

**Character Performance**:
- Alex Wilson (voice from Bible)
- Tommy Crawford (when present)
- All NPCs (drawn from lore files)
- Consistent personalities
- Realistic reactions

**Consequence System**:
- Immediate effects
- Short-term manifestations (1-3 scenes)
- Long-term payoff (5+ scenes)
- Running ledger maintained
- Cascading complexity

---

## File Structure

```
holodeck/
├── HOLODECK_README.md              # Complete system overview
├── QUICKSTART.md                   # Get playing in 5 minutes
├── GETTING_STARTED_WITH_CLAUDE.md  # Claude configuration guide
├── director_guide.md               # Complete command reference
├── engine_prompts.md               # World Engine specifications
├── state_template.json             # State tracking template
│
├── scene_templates/                # Pre-built scene frameworks
│   ├── broadway_gig.md
│   ├── label_meeting.md
│   └── ...
│
├── examples/                       # Full example sessions
│   ├── session_01_broke_and_desperate.md
│   └── ...
│
└── scripts/                        # Utility tools
    ├── state_manager.py            # Session state management
    └── context_loader.py           # Context file identification
```

---

## Integration with Repository

The Holodeck Engine sits on top of the existing Alex Wilson RPG structure:

```
alex-wilson-rpg-github/
│
├── holodeck/                    # ← THE ENGINE (new)
│   └── [all engine files]
│
├── FINAL/                       # Core character files (used by engine)
│   ├── ALEX WILSON — CORE BIBLE (use).md
│   └── Alex Wilson - The Cheat Sheet (use).md
│
├── core/                        # Game rules (used by engine)
│   ├── 00_MASTER_INDEX.md
│   └── Game_Master_Reference.md
│
├── world/                       # Modular world files (loaded as needed)
│   ├── venues/
│   ├── nashville-industry/
│   ├── pike-county/
│   └── ...
│
├── scenarios/                   # Pre-built scenarios (engine can run these)
├── songs/                       # Complete catalog (engine uses for performances)
└── rosie-walker/               # Storyline files (loaded when relevant)
```

**The engine doesn't replace anything - it orchestrates everything.**

---

## Use Cases

### 1. Solo Exploration

Wander through Alex's world, follow opportunities organically:

```
SCENE: Alex wakes up, no plans, just another Tuesday
```

See where it goes.

### 2. Scenario Campaigns

Run through prepared scenarios:

```
Load: scenarios/Scenario_02_Nashville_Negotiation.md
Run the scenario
```

### 3. Character Studies

Explore specific aspects of Alex:

```
FOCUS: How Alex navigates class differences
SCENE: Alex at a fancy industry party
```

### 4. Alternate Timelines

What if Alex had made different choices?

```
REWIND: What if Alex never left Pike County?
```

### 5. Multi-Session Campaigns

Build long-form stories across multiple sessions:

```
SESSION 1: Broke and desperate
SESSION 2: Pike County homecoming
SESSION 3: Viral moment consequences
...
```

### 6. Consequence Stress Tests

See how Alex handles everything at once:

```
CONSEQUENCE: Activate all unpaid consequences simultaneously
```

---

## Philosophy

The Holodeck Engine is built on a core belief:

**Great storytelling emerges from the intersection of player agency and world consistency.**

You provide **direction** - what scenes to explore, what choices to make.

Claude provides **world** - consequence, detail, character, reality.

Neither dictates the story. The story emerges from the **interaction**.

Alex Wilson isn't a character you control or a character you read about. He's a character whose story you **co-author with an AI that knows his world better than any human GM could.**

---

## Getting Started

### Complete Novice Path

1. Read `holodeck/QUICKSTART.md`
2. Configure Claude per `holodeck/GETTING_STARTED_WITH_CLAUDE.md`
3. Start with one of the example scenes
4. Play through 3-5 scenes
5. Reference `director_guide.md` as needed

### Experienced RPG Player Path

1. Skim `holodeck/HOLODECK_README.md`
2. Read `director_guide.md` for commands
3. Configure Claude
4. Jump in with custom scene

### Game Designer Path

1. Read `holodeck/engine_prompts.md` (World Engine specifications)
2. Examine `state_template.json`
3. Review `scene_templates/` for structure
4. Read `examples/session_01_broke_and_desperate.md`
5. Understand the architecture, then play

---

## Requirements

- **Claude Access**: Via Claude.ai, API, or Claude Code
- **This Repository**: Cloned or accessible to Claude
- **Time**: 15 minutes for setup, then play as long as you want
- **Mindset**: Collaborative storytelling, not winning/losing

---

## Technical Details

**Model**: Optimized for Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)
**Context**: Dynamic loading keeps token usage manageable
**State**: JSON-based for persistence across sessions
**Format**: Markdown for all documentation
**Scripts**: Python utilities for power users (optional)

---

## Examples of Holodeck in Action

**Example 1: Financial Crisis**
```
Director: Alex is $850 short on rent, due today
Engine: Creates scene with exact finances, options, pressure
Director: Alex takes gig in Pike County
Engine: Three-hour drive, gas money problem, homecoming complexity
Director: JUMP 2 days - Alex arrives in Pike County
Engine: Updates stats, shows consequences, new scene with complications
```

**Example 2: Industry Meeting**
```
Director: Alex meets A&R rep from Big Loud Records
Engine: Coffee shop, power dynamics, specific NPC (Sarah Chen from files)
Director: Alex tells her the truth about his background
Engine: Sarah's reaction (interested but concerned), opens door but with conditions
Director: PAUSE - what are Alex's realistic options here?
Engine: Breaks down three options with tradeoffs
Director: Alex chooses [X]
Engine: Consequences ripple forward
```

**Example 3: Viral Moment**
```
Director: Alex's TikTok video about Broadway life goes viral
Engine: Tracks follower spike (+50,000), shows mix of responses
Director: JUMP 3 days - what happened?
Engine: Media attention, more opportunities, new pressures, complications
Director: Someone from the video tracks Alex down
Engine: New NPC, new storyline branch, Alex has to navigate
```

---

## FAQ

**Q: Is this just chatting with AI?**
A: No. This is a structured system with stat tracking, consequence management, and canon compliance. Claude is constrained by the rules and lore.

**Q: Can I break the system?**
A: You can push boundaries, but the World Engine is trained to maintain consistency, track consequences, and stay grounded.

**Q: Do I need to know the lore?**
A: No. Claude knows it. You can explore and learn as you play.

**Q: How long are sessions?**
A: Your choice. 3-5 scenes (30 minutes) to 20+ scenes (3+ hours).

**Q: Can I use this for other characters/worlds?**
A: The engine is built for Alex Wilson, but the architecture could be adapted.

**Q: Is this solo only or can multiple people play?**
A: Currently optimized for one Director, but could be adapted for multiple Directors taking turns.

---

## What's Next?

1. **Read** `holodeck/QUICKSTART.md`
2. **Configure** Claude
3. **Play** your first session
4. **Discover** stories you didn't know were there

The holodeck is ready.

Alex Wilson's story awaits your direction.

---

## Credits

**Built by**: Claude (Anthropic)
**Directed by**: [Your direction]
**Based on**: Alex Wilson RPG by [original creator]
**Powered by**: Claude AI (claude-sonnet-4-5-20250929)

---

## Support

Issues, questions, or suggestions:
- Check documentation in `holodeck/` folder
- Reference example sessions in `holodeck/examples/`
- Consult scene templates in `holodeck/scene_templates/`

---

**Welcome to the holodeck.**
