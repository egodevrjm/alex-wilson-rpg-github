# DIRECTOR'S GUIDE - ALEX WILSON HOLODECK

**Complete reference for directing Alex Wilson RPG sessions**

## Your Role as Director

You are not "playing as" Alex Wilson—you are **directing his story**. Think of yourself as:

- **Film Director**: Setting scenes, calling action, adjusting tone
- **Solo Reader**: The only audience, so scenes are crafted for you
- **Story Navigator**: Choosing which threads to follow
- **Reality Curator**: Deciding what matters in this telling

Alex is played by the World Engine (Claude), but you guide where he goes and what situations he faces.

## Command Reference

### SCENE - Create New Scenes

**Format**: `SCENE: [Description of setup]`

**Purpose**: Start a new scene with specific context

**Examples**:

```
SCENE: Alex is playing a 10pm Friday set at Tootsie's, the crowd is rowdy
```

```
SCENE: Morning after a bad gig, Alex is in his apartment writing angry songs
```

```
SCENE: Alex meets with Sarah Chen from Big Loud Records at Barista Parlor
```

**Best Practices**:
- Include time of day (affects energy, crowds, mood)
- Specify the location type (dive bar vs fancy venue matters)
- Set emotional context (frustrated, hopeful, exhausted)
- Mention relevant recent events if applicable

**What Gets Loaded**:
The engine will automatically load relevant context files based on your scene setup.

---

### JUMP - Time Manipulation

**Format**: `JUMP: [Time description]`

**Purpose**: Skip forward or backward in time

**Forward Jumps**:
```
JUMP: 3 days later
JUMP: The morning of the showcase
JUMP: Two weeks pass
JUMP: 6 months into the future
```

**Backward Jumps**:
```
JUMP: Back to the night before
JUMP: Flashback to when Alex first arrived in Nashville
JUMP: Earlier that same day
```

**Best Practices**:
- Use forward jumps to skip boring logistics
- Use backward jumps for flashbacks or context
- Let consequences accumulate during jumps
- Ask "What happened during the jump?" if unclear

**What Changes**:
- Stats update based on time passed
- Money situation evolves
- Energy/hunger resets or degrades
- Consequences from previous scenes manifest
- Social media numbers change

---

### SET - Modify State

**Format**: `SET: [State change]`

**Purpose**: Directly modify Alex's stats, situation, or context

**Examples**:

```
SET: Alex's bank account to $47
```

```
SET: Alex's energy to 3/10, he's been up for 30 hours
```

```
SET: Tommy is in Pike County visiting family
```

```
SET: Alex just went viral on TikTok with a video
```

```
SET: It's raining heavily
```

**Best Practices**:
- Use for hard resets or corrections
- Use to establish starting conditions
- Use to introduce complications
- Don't overuse—let things emerge naturally

---

### CHECK - Query State

**Format**: `CHECK: [Question about state]`

**Purpose**: Get specific information about current situation

**Examples**:

```
CHECK: How much money does Alex have?
```

```
CHECK: What songs has Alex written this week?
```

```
CHECK: Who remembers Alex from previous interactions?
```

```
CHECK: What's the current temperature between Alex and Tommy?
```

**Use When**:
- You've lost track of a stat
- You want to know consequences of past actions
- You're planning next move and need info
- You want to verify something before proceeding

---

### INVENTORY - Full State Report

**Format**: `INVENTORY`

**Purpose**: Get complete readout of Alex's current state

**Returns**:
- Full financial breakdown
- All equipment status
- Energy/hunger/physical state
- Current location and time
- Social media stats
- Active storylines
- Recent consequences
- Relationships status

**Use When**:
- Starting a new session
- Lost track of overall situation
- Planning major decisions
- Checking in after time jumps

---

### PAUSE - Meta Discussion

**Format**: `PAUSE: [Out of character question or discussion]`

**Purpose**: Step out of the story to discuss with the World Engine

**Examples**:

```
PAUSE: What are Alex's realistic options in this situation?
```

```
PAUSE: Can you suggest three different ways this scene could play out?
```

```
PAUSE: I want to explore the Rosie Walker storyline. What should I know?
```

```
PAUSE: Is this action in character for Alex?
```

**Best Practices**:
- Use freely to collaborate with Claude
- Ask about lore and canon
- Request alternatives before deciding
- Discuss tone and pacing
- Clarify confusing elements

---

### REWIND - Undo and Replay

**Format**: `REWIND: [What changes]`

**Purpose**: Go back and try a different choice

**Examples**:

```
REWIND: Actually, Alex tells the truth about his hometown
```

```
REWIND: Let's see what happens if Alex doesn't take the gig
```

```
REWIND: Go back to before the text was sent
```

**Best Practices**:
- Use to explore alternate paths
- Compare outcomes of different choices
- Fix mistakes or out-of-character moments
- Don't overuse—let some consequences stick

**Multi-Path Exploration**:
```
PAUSE: What if Alex had lied to the A&R rep?
REWIND: Let's try that version
[Scene plays out differently]
PAUSE: Okay, which version do we keep?
```

---

### INTRODUCE - Add Elements

**Format**: `INTRODUCE: [Character, opportunity, or complication]`

**Purpose**: Bring new elements into the story

**Examples**:

```
INTRODUCE: Sarah Chen texts Alex about a meeting
```

```
INTRODUCE: A tornado warning cuts power to the venue
```

```
INTRODUCE: An opportunity to open for a major act
```

```
INTRODUCE: A character from Alex's past shows up
```

**Best Practices**:
- Use to create opportunities
- Use to add complications
- Use to bring in NPCs
- Let the World Engine develop the details

---

### ENVIRONMENT - Set Atmosphere

**Format**: `ENVIRONMENT: [Atmospheric direction]`

**Purpose**: Guide the mood and sensory details of a scene

**Examples**:

```
ENVIRONMENT: Make this feel grimy and desperate, real dive bar energy
```

```
ENVIRONMENT: Emphasize the class difference between Alex and the executives
```

```
ENVIRONMENT: Focus on small, specific details - not generic descriptions
```

```
ENVIRONMENT: Late night, quiet, intimate conversation vibes
```

---

### FOCUS - Direct Attention

**Format**: `FOCUS: [What to emphasize]`

**Purpose**: Tell the World Engine what matters in this scene

**Examples**:

```
FOCUS: on Alex's internal conflict about selling out
```

```
FOCUS: on how people react to Alex's appearance
```

```
FOCUS: on the financial pressure and stakes
```

```
FOCUS: on the chemistry between Alex and this character
```

**Use To**:
- Explore character psychology
- Highlight specific dynamics
- Dig into themes
- Control what details matter

---

### TONE - Set Emotional Register

**Format**: `TONE: [Desired tone]`

**Purpose**: Guide the emotional and stylistic approach

**Examples**:

```
TONE: Prestige TV realism, nothing sitcom-y
```

```
TONE: Late night vulnerability, guards are down
```

```
TONE: Chaos comedy but grounded in real behavior
```

```
TONE: Tense and high-stakes
```

```
TONE: Quiet character study moment
```

---

### TEMPO - Control Pacing

**Format**: `TEMPO: [Pacing direction]`

**Purpose**: Speed up or slow down the narrative

**Examples**:

```
TEMPO: Slow down, give me all the details
```

```
TEMPO: Speed through the drive to Pike County
```

```
TEMPO: Real-time, moment by moment
```

```
TEMPO: Montage of the week passing
```

---

### CONSEQUENCE - Invoke Specific Fallout

**Format**: `CONSEQUENCE: [Which past action comes back]`

**Purpose**: Bring forward results of previous actions

**Examples**:

```
CONSEQUENCE: The venue owner remembers Alex broke the stage
```

```
CONSEQUENCE: That viral TikTok video from last week gets noticed by media
```

```
CONSEQUENCE: The girl from the party sees Alex with someone else
```

**Use To**:
- Make choices matter
- Show delayed effects
- Build running threads
- Create organic complications

---

## Natural Language Direction

You don't always need formal commands. Natural language works great:

**Instead of**:
```
SCENE: Alex at coffee shop
SET: Alex is tired
FOCUS: on the writing process
```

**Just say**:
```
Alex is exhausted at a coffee shop, trying to finish a song that's not coming together
```

The World Engine understands intent. Mix formal commands with conversational direction as feels natural.

## Scene Setup Strategies

### The Cold Open
```
SCENE: Alex is already on stage at the Bluebird, about to play for industry people, and he just noticed his ex in the front row
```

Start in the middle of something interesting.

### The Pressure Cooker
```
SCENE: Alex has $14, rent is due tomorrow, and his phone just died. He's at a gas station in East Nashville.
```

Establish immediate problems that demand action.

### The Quiet Moment
```
SCENE: 3am, Alex is alone in his apartment with Betty, writing a song about his dad
```

Let character breathe without external pressure.

### The Collision
```
SCENE: Alex runs into a record executive at Trader Joe's while buying ramen with a pocket full of quarters
```

Create organic awkwardness.

### The Opportunity
```
SCENE: Tommy just got a call about a last-minute opening slot. There's a catch.
```

Present choices with trade-offs.

## Directing Conversations

### Let NPCs Surprise You

**Don't script them**:
```
SCENE: Sarah Chen from Big Loud meets Alex at a coffee shop. She offers him a deal.
```

**Instead, set up and discover**:
```
SCENE: Sarah Chen from Big Loud meets Alex at a coffee shop. She has something on her mind.
```

### Create Tension

```
FOCUS: Sarah Chen likes Alex's music but has concerns about his image
```

Give NPCs conflicting motivations.

### Use PAUSE for Dialogue Options

```
[Scene is playing out]

PAUSE: What would Alex say here? Can you give me three options with different tones?

[World Engine provides options]

Alex says [your choice]
```

## Managing Consequences

### The Ledger Approach

Ask the World Engine to track:

```
PAUSE: What consequences are currently active from previous sessions?
```

Review before major decisions.

### Delayed Payoff

Plant seeds:
```
Alex makes an offhand comment about Rosie Walker to a journalist
```

Later invoke:
```
CONSEQUENCE: That comment to the journalist made it into an article
```

### Cascading Effects

Let one consequence create another:
```
Broke stage → Venue blacklists Alex → Other Broadway venues hear about it → Harder to book shows → Financial pressure increases → Forced to take worse gigs
```

## Playing with Tommy

### When Tommy's Present

Tommy handles:
- Logistics and planning
- Deception and social engineering
- External brain functions
- Translation between Alex and "normal" people

Alex handles:
- Music and creativity
- Raw honesty
- Physical tasks
- Impulse decisions

### When Tommy's Absent

```
SET: Tommy is back in Pike County for a family emergency
```

See how Alex navigates alone—he's more vulnerable but also more authentic.

### Their Dynamic

```
FOCUS: on the tension between what Tommy wants Alex to do (smart move) and what Alex wants to do (interesting choice)
```

## Session Management

### Starting a Session

**New Story**:
```
I want to start a fresh holodeck session.

Alex is 22, just arrived in Nashville last week, sleeping in his truck. He has $400 and a guitar. He knows no one.
```

**Continuing Story**:
```
Continue from last session. Alex just got the callback from Sarah Chen.
```

**Scenario Mode**:
```
I want to play the "Creator House Crucible" scenario from the repo.
```

### During a Session

- Let scenes play out fully before jumping
- Use PAUSE freely to collaborate
- Let some things surprise you
- Trust the World Engine with details
- React naturally to what emerges

### Ending a Session

```
PAUSE: Good place to stop. Can you summarize current state and open threads for next time?
```

Gets a clean handoff for the next session.

## Advanced Techniques

### Parallel Timelines

```
REWIND: Let's see the version where Alex didn't leave Pike County

[Play that timeline for a while]

PAUSE: Now show me what happened in the original timeline during the same period
```

### Character Studies

```
FOCUS: I want to spend several scenes exploring how Alex processes grief

TONE: Quiet and introspective, less external plot
```

### Ensemble Scenes

```
SCENE: Writers' round at the Bluebird. Alex, three other songwriters, industry people watching. Everyone plays one song.

TEMPO: Give each writer their moment
```

### Consequences Stress Test

```
CONSEQUENCE: Activate ALL unpaid consequences at once

[Everything Alex has been avoiding comes due]
```

### World-Building Sessions

```
PAUSE: Tell me about the Nashville singer-songwriter community Alex would know. Who are his peers?

[World Engine develops the ecosystem]

SCENE: Alex is at a house party with these people
```

## Common Pitfalls

### Over-Directing

**Don't**:
```
SCENE: Alex plays at Robert's. He plays "Dirt Road Destiny". The crowd loves it. He meets a girl named Jessica. They talk about Pike County. He gets her number.
```

**Do**:
```
SCENE: Alex plays a Friday night set at Robert's
```

Let the World Engine build it.

### Under-Specifying Context

**Don't**:
```
SCENE: Alex at a bar
```

**Do**:
```
SCENE: Alex at a Broadway honky-tonk on a slow Tuesday afternoon, drinking alone after a cancelled gig
```

Give the World Engine something to work with.

### Ignoring Consequences

Let choices matter. Don't:
```
REWIND: Actually Alex has money now
```

Instead:
```
Alex needs to figure out how to get money
```

### Sitcom Thinking

Avoid:
- Perfect timing
- Convenient solutions
- Running gags
- Everything wrapping up neatly

Embrace:
- Logistical friction
- Messy outcomes
- Partial solutions that create new problems
- Real human awkwardness

## Example Director Flow

```
ME: Let's start fresh. Alex is 22, been in Nashville 3 years, currently broke and between gigs. It's a Wednesday morning.

CLAUDE: [Creates scene with full header and situation]

ME: Alex decides to text some venue owners looking for work

CLAUDE: [Shows Alex texting, describes responses]

ME: PAUSE - which of these venues would be most interesting to explore?

CLAUDE: [Provides analysis of each option]

ME: Let's go with Paradise Park, even though it's in Pike County. That's complicated for Alex.

CLAUDE: [Continues scene with that choice]

ME: JUMP: Alex is driving to Pike County. What's going through his head?

CLAUDE: [Interior monologue scene during drive]

ME: SCENE: Alex arrives at Paradise Park

CLAUDE: [New scene at the venue]

ME: [React to situation]

[Session continues...]
```

## Remember

- You're the director, not a player
- Trust the World Engine to build the world
- Let consequences compound
- Use PAUSE freely
- Mix commands with natural language
- Let Alex surprise you
- Make choices matter
- Embrace complications
- Keep it grounded
- Find the story that wants to be told

Now go direct something interesting.
