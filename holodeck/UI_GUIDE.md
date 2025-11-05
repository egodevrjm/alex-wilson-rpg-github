# HOLODECK UI QUICK REFERENCE

**Fast guide to the web interface**

---

## Opening the UI

```bash
cd holodeck/ui
open index.html
```

Or use a local server for best results.

---

## Interface Overview

```
┌─────────────────────────────────────────────────────────┐
│  ALEX WILSON HOLODECK          [New] [Save] [Load]     │
├──────────┬──────────────────────────────┬───────────────┤
│  CURRENT │                              │  QUICK        │
│  STATE   │      SCENE DISPLAY           │  ACTIONS      │
│          │                              │               │
│  Stats   │   (Your story unfolds here)  │  Buttons      │
│  Money   │                              │               │
│  Vitals  │                              │  COMMANDS     │
│  Social  │                              │               │
│          │                              │  CONSEQUENCES │
│          │                              │               │
│          │                              │  SESSION LOG  │
├──────────┴──────────────────────────────┴───────────────┤
│  DIRECTOR INPUT                                         │
│  [Type your commands here...]              [Send]       │
└─────────────────────────────────────────────────────────┘
```

---

## Quick Workflow

### 1. Start a Scene
Click an example or type:
```
SCENE: Alex is broke in Nashville...
```

### 2. Send to Claude
Click **"Send to World Engine"** or press `Ctrl+Enter`

Content is copied to clipboard automatically.

### 3. Paste to Claude
Open Claude (Claude.ai, API, or Claude Code) and paste.

### 4. Get Response
Claude generates the scene with full details.

### 5. Continue
Respond naturally or use commands. Repeat!

---

## Adding Songs

### Step-by-Step

1. **Click 🎵 Add Song** button (right sidebar)

2. **Fill in the form:**
   - **Title**: e.g., "Dirt Road Destiny"
   - **Lyrics**: Full song lyrics
   - **Performance Notes**: How it should be heard
   - **Context** (optional): Background info

3. **Submit** - Song is formatted and added to input

4. **Send to Claude** - The formatted song goes to World Engine

### Performance Notes Examples

**Emotional/Intimate:**
```
Raw acoustic, vulnerable delivery. Makes people lean in and really listen.
Occasional vocal crack on the chorus adds authenticity. Industry people
notice the craft, regular folks feel the emotion.
```

**High Energy:**
```
Upbeat honky-tonk energy. Driving beat, infectious melody. Gets the crowd
moving. By the second chorus, people are singing along. This is the song
that books repeat gigs.
```

**Anthemic:**
```
Starts intimate, builds to powerful chorus. Fists-in-the-air moment.
Even the cynical bartender stops to listen. This is the song that goes
viral when someone posts it.
```

**Storytelling:**
```
Stripped down acoustic storytelling. Every word matters. People stop
talking to listen. You can hear glasses being set down gently to not
interrupt. This is the song that makes A&R reps take out their phones.
```

### What Performance Notes Do

They guide the World Engine on:
- How Alex delivers the song
- How the crowd reacts
- What emotional impact it has
- Who pays attention and why
- Whether it's a moment or just background

**Be specific!** The more detail, the better Claude can bring the performance to life.

---

## Quick Actions Explained

### ⏸️ Pause / Discuss
Inserts `PAUSE: `
Use to step out of the story and discuss with Claude.

**Example:**
```
PAUSE: What are Alex's realistic options here? What would each lead to?
```

### 🔍 Check State
Inserts `CHECK: `
Query specific information.

**Example:**
```
CHECK: How much money does Alex have?
CHECK: What consequences are active from previous scenes?
```

### 📋 Full Inventory
Inserts `INVENTORY`
Get complete state report from Claude.

### ⏭️ Jump Time
Inserts `JUMP: `
Skip forward or backward in time.

**Examples:**
```
JUMP: 3 days later
JUMP: The next morning
JUMP: Back to the night before
```

### ⏮️ Rewind
Inserts `REWIND: `
Try a different choice.

**Example:**
```
REWIND: Actually, Alex tells the truth instead of lying
```

### 🎵 Add Song
Opens the song input modal.

---

## Command Quick Reference

| Command | Purpose | Example |
|---------|---------|---------|
| `SCENE:` | Create new scene | `SCENE: Alex at Broadway honky-tonk...` |
| `JUMP:` | Skip time | `JUMP: 3 days later` |
| `SET:` | Modify state | `SET: cash to $150` |
| `CHECK:` | Query info | `CHECK: How much money?` |
| `PAUSE:` | Meta discussion | `PAUSE: What are options?` |
| `REWIND:` | Try different choice | `REWIND: Alex says no` |
| `INVENTORY` | Full state report | `INVENTORY` |
| `INTRODUCE:` | Add element | `INTRODUCE: Tommy shows up` |
| `FOCUS:` | Direct attention | `FOCUS: on financial pressure` |
| `TONE:` | Set mood | `TONE: Prestige realism` |
| `TEMPO:` | Control pacing | `TEMPO: Slow down, more details` |

---

## State Display Cheat Sheet

### Financial
- **Green numbers** = Positive
- **Red numbers** = Negative/overdraft

### Vitals
- **Energy bar** (blue) = How tired Alex is
- **Hunger bar** (orange/red) = How hungry Alex is

### Social Media
- **Green +number** = Gained followers
- **Red -number** = Lost followers
- **Updates per scene** = Shows growth/decline

### Consequences
- **Orange border** = Active
- **Severity 1-10** = Impact level
- **Description** = What's happening

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + Enter` | Send input to World Engine |
| `Ctrl + K` | Clear input field |
| `Ctrl + /` | Show help modal |

---

## Song Storage & Reuse

### Automatic Storage
- Songs saved to browser localStorage
- Persist across sessions
- Available for reuse anytime

### Reusing Songs
1. Click "Add Song"
2. Enter same title (or modify)
3. Lyrics and notes preserved

### Exporting Songs
Songs are included in session state files. Click "Save State" to export everything including all songs.

### Sharing Songs
1. Save State to JSON file
2. Share file
3. Recipient loads file
4. All songs available

---

## Updating State

### Automatic (SET commands)
```
SET: cash to $300
SET: bank to $-47
SET: energy to 3
SET: hunger to 8
```

These auto-update the sidebar display.

### Manual
Click on values in sidebar and update (future feature).

Currently use SET commands for automatic updates.

---

## Session Management

### New Session
1. Click "New Session"
2. Confirm (current session auto-saves)
3. Fresh state created
4. Ready to start new story

### Save Session
1. Click "Save State"
2. Downloads JSON file
3. Includes all state and songs
4. Filename: `holodeck_session_[timestamp].json`

### Load Session
1. Click "Load State"
2. Select previously saved JSON
3. State fully restored
4. Continue where you left off

### Auto-save
State continuously saved to browser localStorage. Survives refresh.

---

## Tips

### 1. Rich Performance Notes
The more specific your song performance notes, the better the scene.

### 2. Use Quick Actions
Buttons save time for common commands.

### 3. Keep State Synced
Use SET commands in your inputs to keep sidebar accurate.

### 4. Save Regularly
Export session state before closing browser.

### 5. Explore Examples
Click the example scenes to see how to set up different situations.

### 6. Natural Language Works
You don't always need commands. "Alex calls Tommy" works fine.

### 7. Check the Log
Session log shows timestamped events. Useful for tracking flow.

### 8. Consequences Matter
Watch the consequences panel. They compound and come back.

---

## Common Workflows

### Starting a Broadway Gig
```
SCENE: Alex is playing Friday night at Robert's Western World.
The crowd is rowdy and packed. Age 22, solo mode.

[Send to Claude]
[Get response]

Alex plays [song name]
[Click Add Song to add a new song, or reference existing]

[Send to Claude]
[Continue]
```

### Financial Crisis
```
SCENE: Alex is broke, rent due today, $850 short.
He's in his apartment figuring out options.

SET: cash to $23
SET: bank to $-47

[Send to Claude]
[Get response]
[Make choices]
```

### Industry Meeting
```
SCENE: Alex meets Sarah Chen from Big Loud Records at Barista Parlor.
She saw him play last week and wants to talk. Age 22, solo mode.

[Send to Claude]
[Navigate conversation]

PAUSE: What are Alex's realistic options here?
[Get Claude's analysis]

Alex tells her the truth about Pike County
[Continue scene]
```

---

## Troubleshooting

**Q: Clipboard not copying?**
A: Click the button directly. Some browsers block keyboard shortcuts for clipboard.

**Q: State not updating?**
A: Use explicit SET commands. Auto-parsing is limited currently.

**Q: Songs disappearing?**
A: Check localStorage isn't disabled. Export session state to save permanently.

**Q: Layout broken?**
A: Use modern browser (Chrome/Firefox/Safari/Edge). Minimum width 1024px recommended.

---

## Browser Requirements

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- JavaScript enabled
- LocalStorage enabled
- Clipboard API access

---

## File Location

```
holodeck/ui/
├── index.html    # Open this file
├── styles.css    # Styling
├── app.js        # Logic
└── README.md     # Full documentation
```

---

## Getting Help

1. **In-app**: Click ❓ button for help modal
2. **Full docs**: Read `holodeck/ui/README.md`
3. **Main docs**: See `holodeck/HOLODECK_README.md`
4. **Quick start**: See `holodeck/QUICKSTART.md`

---

## Remember

- All songs are **copyright-free** and available for reuse
- **Performance notes** steer how songs are heard
- State is **auto-saved** but export for safety
- **Natural language** works alongside commands
- The UI is a **tool**, not a requirement - text-only holodeck still works!

---

**Now go create some music and tell some stories.**

Your visual command center awaits.
