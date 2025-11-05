# GETTING STARTED WITH CLAUDE - HOLODECK SETUP

**How to configure Claude to run Alex Wilson Holodeck sessions**

## Prerequisites

- Access to Claude (via Claude.ai, API, or Claude Code)
- This repository cloned or accessible
- Basic familiarity with the Alex Wilson RPG concept

## Setup Methods

### Method 1: Quick Start (Claude.ai Web Interface)

**Step 1**: Start a new conversation

**Step 2**: Copy and paste this system prompt:

```
You are the World Engine for the Alex Wilson RPG Holodeck system.

Load and follow these files:
1. /holodeck/engine_prompts.md - Your operating instructions
2. /FINAL/ALEX WILSON — CORE BIBLE (use).md - Character truth
3. /FINAL/Alex Wilson - The Cheat Sheet (use).md - Voice and behavior
4. /core/00_MASTER_INDEX.md - Context file navigation

ROLE:
- I am the Director, setting scenes and making high-level choices
- You are the World Engine, bringing scenes to life with rich detail
- You play Alex Wilson and all NPCs based on canon
- You track all stats, consequences, and state precisely
- You load relevant context files for each scene automatically

PROTOCOL:
- Respond to my scene setups with full headers and rich narrative
- Track money, energy, hunger, time, social media precisely
- Load 2-4 context files per scene based on Master Index
- Maintain all consequences in a running ledger
- Stay grounded in prestige realism, no sitcom beats
- Character voices must match the Bible exactly

I will direct scenes using natural language and commands like SCENE, JUMP, PAUSE, etc.

Ready to begin when I provide first scene setup.
```

**Step 3**: Wait for Claude to confirm ready state

**Step 4**: Provide your first scene setup (see QUICKSTART.md for examples)

---

### Method 2: Claude Code / API

**Step 1**: Create a system prompt file

Save this as `holodeck_system.txt`:

```
You are the World Engine for Alex Wilson RPG Holodeck.

Core Files (always loaded):
- holodeck/engine_prompts.md
- FINAL/ALEX WILSON — CORE BIBLE (use).md
- FINAL/Alex Wilson - The Cheat Sheet (use).md

You are the Game Master and world builder. The user is the Director.
Follow all protocols in engine_prompts.md precisely.
Track all stats to the exact specifications.
Load context files dynamically based on scene type.
Maintain grounded prestige realism at all times.

Awaiting scene setup from Director.
```

**Step 2**: Initialize with the system prompt

```python
import anthropic

client = anthropic.Anthropic(api_key="your_key")

# Load system prompt
with open('holodeck_system.txt', 'r') as f:
    system_prompt = f.read()

# Start conversation
message = client.messages.create(
    model="claude-sonnet-4-5-20250929",
    max_tokens=4096,
    system=system_prompt,
    messages=[
        {"role": "user", "content": "SCENE: Alex is broke in Nashville..."}
    ]
)
```

**Step 3**: Continue conversation with scene directions

---

### Method 3: Projects Setup (Claude.ai)

**Step 1**: Create a new Project called "Alex Wilson Holodeck"

**Step 2**: Add these files to Project knowledge:
- `holodeck/engine_prompts.md`
- `FINAL/ALEX WILSON — CORE BIBLE (use).md`
- `FINAL/Alex Wilson - The Cheat Sheet (use).md`
- `core/00_MASTER_INDEX.md`

**Step 3**: Set Project Instructions:

```
You are the World Engine for Alex Wilson RPG Holodeck.

Role: I am the Director. You are the Game Master and world.

Protocol:
- Load relevant context files per scene from Master Index
- Track all stats precisely (money, energy, hunger, time, social media)
- Use mandatory header format every scene
- Maintain consequence ledger
- Play Alex Wilson and all NPCs from canon
- Prestige realism, no sitcom beats
- Character voices must match Bible exactly

Commands I may use:
SCENE, JUMP, SET, CHECK, INVENTORY, PAUSE, REWIND, INTRODUCE,
ENVIRONMENT, FOCUS, TONE, TEMPO, CONSEQUENCE

Respond to natural language direction or formal commands.
Ready to begin when I provide scene setup.
```

**Step 4**: Start conversation in the Project with scene setup

---

## Testing Your Setup

Once configured, test with this sequence:

**You:**
```
SCENE: Alex is at a coffee shop in Nashville, working on a song.
He's got $15 in his pocket. It's Tuesday afternoon.
Age 22, solo mode.
```

**Claude should respond with:**
- Brief 2-3 sentence narrative integration
- Full stat header with all required fields
- Rich scene description with specific details
- Alex's behavior and situation
- A choice point for you to respond to

**Expected header format:**
```
—------—------—------
📍 Location: [Specific coffee shop] | 📅 Tuesday, [Date], [Time] | Age: 22
💰 Cash: $15 | Bank: $[amount]
🎸 Betty: [status] | 🚗 F-150: [status] | ⚡ Energy: [X/10] | 🍔 Hunger: [X/10]
📣 Followers (X/IG/TikTok/YT): [#,#,#,#] | Δ Since Last: [changes]
CURRENT DYNAMICS:
- [2-3 relevant dynamics]
—------—------—------
```

**If the response is missing:**
- The stat header → Remind Claude about mandatory header format
- Specific details → Ask for "more specific, concrete details"
- Character voice seems off → Reference the Cheat Sheet
- Sitcom tone → Say "TONE: More prestige realism, less comedy"

---

## Troubleshooting

### Problem: Claude isn't tracking stats precisely

**Solution:**
```
PAUSE: Please track all stats precisely to the dollar/point.
Reference the state_template.json for exact format.
```

### Problem: Scenes feel generic

**Solution:**
```
ENVIRONMENT: Use specific brands, places, and names.
No generic descriptions. Reference the world files.
```

### Problem: Alex's voice seems wrong

**Solution:**
```
PAUSE: Alex's dialogue doesn't match the Cheat Sheet.
He should be more [specific trait]. Can you adjust?
```

### Problem: No consequences from previous scenes

**Solution:**
```
PAUSE: What consequences from previous scenes should be active?
Please maintain a running consequence ledger.
```

### Problem: Too sitcom-y

**Solution:**
```
TONE: Prestige TV realism. No sitcom beats, laugh tracks,
or convenient timing. Real logistics and consequences.
```

### Problem: Context files not being referenced

**Solution:**
```
PAUSE: For this scene type, you should load:
[list specific files from Master Index]
Please reference those for accurate details.
```

---

## Session Management

### Starting a New Session

```
New holodeck session:

Character: Alex Wilson, age 22
Mode: Solo (or "with Tommy")
Starting situation: [describe context]
Tone: Prestige realism
Theme: [optional - survival, industry pressure, etc.]

Ready for first scene.
```

### Continuing a Session

```
Continue holodeck session from [date of last session].

Last scene was: [brief description]
Alex was: [location and situation]
Active storylines: [list key threads]

Continue from there.
```

### Saving Session State

At end of session:
```
PAUSE: Please provide:
1. Complete current state (all stats)
2. Active consequences and storylines
3. Key NPCs and relationships
4. Good pickup points for next session

Format as JSON matching state_template.json
```

Copy this output and save it. Use it to restore state next time.

---

## Advanced Configuration

### Custom Context Loading

If you want to ensure specific files are loaded:

```
SCENE: [your scene]

Context files to load:
- Nashville_Broadway_Honky_Tonks.md
- Nashville_Day_Jobs.md
- [specific song file]
```

### Multi-Session Campaigns

Create a session document tracking:
- Session number and date
- Key events each session
- Running consequence list
- Active NPCs
- Money/stats progression
- Story arcs in progress

Reference this doc when starting new sessions.

### Alternative Modes

**Tommy Mode:**
```
Character: Alex Wilson (age 22) AND Tommy Crawford
Mode: Dynamic duo
Focus: Their partnership and chaos management
```

**Scenario Mode:**
```
Scenario: "The Nashville Negotiation"
Load: /scenarios/Scenario Prompt Sheet The Nashville Negotiation.md
Run the prepared scenario
```

**Consequence Stress Test:**
```
Mode: Consequence cascade
Activate: All unpaid consequences at once
Let's see Alex handle everything coming due
```

---

## Tips for Best Results

1. **Be specific in scene setup**: Time, place, Alex's state, context
2. **Use PAUSE freely**: Collaborate with Claude on direction
3. **Reference canon**: Point Claude to specific files when needed
4. **Track consequences**: Ask Claude to maintain and reference ledger
5. **Correct early**: If something's off, address it immediately
6. **Trust the engine**: Let Claude surprise you with details
7. **Mix natural language and commands**: Use what feels right
8. **End sessions cleanly**: Save state before closing

---

## Example Full Setup Conversation

**You:**
```
You are the World Engine for Alex Wilson RPG Holodeck.

Load and follow:
- holodeck/engine_prompts.md
- FINAL/ALEX WILSON — CORE BIBLE (use).md
- FINAL/Alex Wilson - The Cheat Sheet (use).md
- core/00_MASTER_INDEX.md

I am the Director. You are Game Master and world.
Ready to begin?
```

**Claude:**
```
[Confirms understanding, ready state]
```

**You:**
```
New session:
Alex is 22, been in Nashville 3 years, currently broke.
It's rent day and he's $850 short.
Tuesday afternoon, he's in his apartment figuring out options.
Solo mode.
```

**Claude:**
```
[Creates opening scene with full header and situation]
```

**You:**
```
[Respond to scene naturally]
```

**[Session continues...]**

---

## Resources

- **QUICKSTART.md** - Fast 5-minute start guide
- **director_guide.md** - Complete command reference
- **engine_prompts.md** - Full World Engine specifications
- **scene_templates/** - Pre-built scene frameworks
- **examples/** - Full example sessions

---

## Ready to Play

You're now configured to run Alex Wilson Holodeck sessions.

Start with a simple scene and let the story emerge.

The holodeck awaits.
