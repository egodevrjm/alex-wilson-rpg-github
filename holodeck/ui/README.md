# ALEX WILSON HOLODECK - WEB UI

**Immersive web interface for the Alex Wilson Holodeck roleplay engine**

---

## What Is This?

The Holodeck UI is a full-featured web interface that transforms the text-based holodeck experience into a rich, visual, interactive environment. It provides:

- **Real-time state visualization** - See Alex's stats, money, energy, social media
- **Song input system** - Submit songs with title, lyrics, and performance notes
- **Command helpers** - Quick actions and autocomplete for commands
- **Session management** - Save and load sessions
- **Immersive design** - Holodeck aesthetic with dark theme

---

## Quick Start

### 1. Open the Interface

Simply open `index.html` in a modern web browser:

```bash
cd holodeck/ui
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

Or use a local server:

```bash
python3 -m http.server 8000
# Then open http://localhost:8000
```

### 2. Start Your Session

Click one of the example scenes or enter your own scene setup in the Director Input area at the bottom.

### 3. Send to Claude

Click "Send to World Engine" (or press `Ctrl+Enter`). The input will be copied to your clipboard.

### 4. Paste into Claude

Paste into Claude (Claude.ai, API, or Claude Code) and get the response.

### 5. View Response

The scene will be displayed in the center panel. Copy Claude's response and paste it into the scene display (or manually update state).

### 6. Continue

Respond naturally or use commands. The interface tracks state and logs everything.

---

## Interface Layout

### Header Bar
- **Title** - Shows you're in the holodeck
- **Status Indicator** - Connection/readiness status
- **Session Controls** - New Session, Save State, Load State

### Left Sidebar - Current State
- **Character Info** - Name, age, mode
- **Location & Time** - Where and when
- **Financial** - Cash, bank, total (color-coded)
- **Vitals** - Energy and hunger with progress bars
- **Equipment** - Guitar (Betty), vehicle (F-150), phone
- **Social Media** - Followers on X, Instagram, TikTok, YouTube with deltas
- **Quick Stats** - Scene count, active consequences

### Center - Scene Display
- **Main Story** - All scenes and responses displayed here
- **Formatted Content** - Director inputs and World Engine responses
- **Auto-scroll** - Automatically scrolls to latest content
- **Clear Reading** - Optimized typography and spacing

### Right Sidebar - Tools
- **Quick Actions** - One-click command buttons
  - Pause/Discuss
  - Check State
  - Full Inventory
  - Jump Time
  - Rewind
  - **Add Song** (special button)
- **Command Reference** - Quick guide to all commands
- **Active Consequences** - Current consequences with severity
- **Session Log** - Timestamped events

### Footer - Director Input
- **Large Text Area** - Type your commands and natural language
- **Auto-resize** - Grows as you type (up to 300px)
- **Controls** - Clear input, help
- **Send Button** - Copies to clipboard and displays in scene
- **Keyboard Shortcut** - `Ctrl+Enter` to send

---

## Song Input System

### How It Works

1. **Click the 🎵 Song button** in Quick Actions
2. **Fill out the form**:
   - **Title** - Song name (required)
   - **Lyrics** - Full lyrics (required)
   - **Performance/Production Notes** - How it should be heard (required)
   - **Context** - When/where written (optional)
3. **Submit** - Song is formatted and added to Director Input
4. **Send to Claude** - The formatted song goes to World Engine

### Song Format

The interface automatically formats your song like this:

```
SONG PERFORMANCE:

Title: [Your Title]

Performance/Production Notes:
[Your notes about how this should be heard/reacted to]

Lyrics:
[Your full lyrics]

Context: [Optional context]

[This song is copyright-free and available for reuse in game]

Alex performs this song.
```

### Performance Notes Guide

The notes steer how the song is heard and how NPCs/crowds react. Examples:

**For Emotional Impact:**
```
Raw acoustic delivery, vulnerable and honest. Makes people lean in.
Quiet room vibes. Some people tear up. This hits different.
```

**For Energy:**
```
High-energy honky-tonk banger. Driving beat, gets people dancing.
Crowd-pleaser, hands-in-the-air moment. Pure fun.
```

**For Storytelling:**
```
Intimate confessional. Alex's vocal cracks slightly on the chorus.
People see the real person. Industry people notice the craft.
```

**For Crowd Response:**
```
Starts slow, builds to anthemic chorus. By the end, even the
bartender is singing along. This is the song that books repeat gigs.
```

### Song Storage

- **Auto-saved** - Songs are stored in browser localStorage
- **Reusable** - All saved songs can be reused in future scenes
- **Copyright-free** - All songs marked as copyright-free for game use
- **Persistent** - Survives browser refresh

---

## State Tracking

### Automatic Updates

The interface tracks:
- Scene count (increments with each input/response)
- Session time (shown in log)
- Basic state changes from SET commands

### Manual Updates

For full state updates from Claude's responses:

1. **Copy Claude's header** (the stats block)
2. **Manually update** the sidebar values
3. Or **use SET commands** to update specific values

### SET Command Parsing

The interface automatically parses SET commands:

```
SET: cash to $150
SET: bank to $-47
SET: energy to 3
SET: hunger to 8
```

These will auto-update the displayed state.

---

## Quick Actions

### Pause / Discuss
Inserts `PAUSE: ` - Step out for meta discussion

### Check State
Inserts `CHECK: ` - Query specific state information

### Full Inventory
Inserts `INVENTORY` - Get complete state report

### Jump Time
Inserts `JUMP: ` - Skip forward or backward in time

### Rewind
Inserts `REWIND: ` - Try a different choice

### Add Song
Opens the song input modal

---

## Commands Reference

The right sidebar shows all available commands:

- `SCENE:` - Create new scene
- `JUMP:` - Skip time forward/back
- `SET:` - Modify state
- `CHECK:` - Query state
- `PAUSE:` - Meta discussion
- `REWIND:` - Try different choice
- `INVENTORY` - Full state report
- `INTRODUCE:` - Add element
- `FOCUS:` - Direct attention
- `TONE:` - Set emotional tone
- `TEMPO:` - Control pacing

Click any command to insert it into the input area.

---

## Keyboard Shortcuts

- **`Ctrl + Enter`** - Send input to World Engine
- **`Ctrl + K`** - Clear input
- **`Ctrl + /`** - Show help modal

---

## Session Management

### New Session
1. Click "New Session" in header
2. Current session is automatically saved
3. Fresh state is created
4. Scene display is reset

### Save State
1. Click "Save State"
2. Downloads JSON file with complete session state
3. Filename: `holodeck_session_[timestamp].json`

### Load State
1. Click "Load State"
2. Select a previously saved JSON file
3. State is restored
4. UI updates to match

### Auto-save
- State is continuously saved to browser localStorage
- Survives page refresh
- Can be manually exported to file

---

## State JSON Format

The state file includes:

```json
{
  "session_info": {
    "session_id": "...",
    "scene_count": 0
  },
  "character": {
    "name": "Alex Wilson",
    "age": 22,
    "mode": "solo"
  },
  "current_state": {
    "location": {...},
    "datetime": {...},
    "financial": {...},
    "vitals": {...},
    "equipment": {...},
    "social_media": {...}
  },
  "consequences": {
    "active": [...],
    "resolved": [...]
  }
}
```

---

## Integration with Claude

### Copy/Paste Mode (Default)

1. **Director Input** - Type your command
2. **Send** - Copies to clipboard
3. **Paste to Claude** - In Claude.ai or API
4. **Get Response** - Claude generates scene
5. **Display** - Scene appears in center panel
6. **Update State** - Use SET commands or manual update

### API Mode (Advanced)

The interface is designed to support direct API integration:

1. Add your Claude API key in settings (future feature)
2. Responses automatically appear in scene display
3. State auto-parsed from responses
4. Seamless back-and-forth

Currently copy/paste mode works perfectly and is recommended.

---

## Song Management

### Viewing Saved Songs

Songs are stored in localStorage. To view all songs:

```javascript
// In browser console:
window.holodeckApp.getAllSongs()
```

### Reusing Songs

1. Click "Add Song"
2. Fill in the form (or modify an existing song)
3. Submit to add to current input

### Sharing Songs

Songs are saved in the session state file. When you save state, songs are included. Load state on another machine to transfer songs.

---

## Visual Indicators

### Money Color Coding
- **Green** - Positive balance
- **Red** - Negative balance / overdraft

### Vitals Bars
- **Blue gradient** - Energy
- **Orange/Red gradient** - Hunger
- **Width** - Shows current level

### Social Media Deltas
- **Green** - Gained followers
- **Red** - Lost followers
- **Number** - Change since last scene

### Consequences
- **Orange border** - Active consequence
- **Severity number** - Impact level (1-10)

---

## Tips for Best Experience

### 1. Use Quick Start Examples

The welcome screen has four starter scenes. Click one to begin immediately.

### 2. Keep State Updated

Use SET commands in your director inputs to keep the sidebar in sync:

```
Alex gets paid $300

SET: cash to $323
```

### 3. Add Songs with Rich Notes

The performance notes are crucial. Be specific about:
- How it should sound
- How people should react
- What emotional impact it has
- Any specific audience responses

### 4. Use Quick Actions

The button shortcuts save time for common commands.

### 5. Save Sessions Regularly

Use "Save State" to export your session before closing the browser.

### 6. Check the Log

The session log shows timestamped events to track your session flow.

---

## Troubleshooting

### State Not Updating

**Problem**: Sidebar stats don't match game state

**Solution**: Use SET commands explicitly or manually update. The interface only auto-parses SET commands currently.

### Songs Not Saving

**Problem**: Songs disappear after browser refresh

**Solution**: Check localStorage isn't disabled. Export session state to save songs permanently.

### Clipboard Not Working

**Problem**: "Send" button doesn't copy to clipboard

**Solution**: Some browsers require user interaction. Click the button (don't use keyboard shortcut) or manually copy the text.

### Display Issues

**Problem**: Layout looks broken

**Solution**: Use a modern browser (Chrome, Firefox, Safari, Edge). Minimum recommended width: 1024px.

---

## Browser Compatibility

**Fully Supported:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Required Features:**
- CSS Grid
- CSS Custom Properties
- LocalStorage
- Clipboard API
- Modern JavaScript (ES6+)

---

## Customization

### Changing Colors

Edit `styles.css` and modify the CSS custom properties:

```css
:root {
    --accent-blue: #00d4ff;
    --accent-cyan: #00ffcc;
    /* etc. */
}
```

### Adjusting Layout

Grid layout is defined in `.main-content`:

```css
.main-content {
    grid-template-columns: 300px 1fr 320px;
}
```

Change column widths to adjust sidebar sizes.

---

## Advanced Usage

### State Manipulation

Access the app instance in browser console:

```javascript
// Get current state
window.holodeckApp.state

// Manually update state
window.holodeckApp.state.current_state.financial.cash = 500
window.holodeckApp.updateUI()
window.holodeckApp.saveState()

// Add consequence
window.holodeckApp.state.consequences.active.push({
    id: 'cons_001',
    description: 'Owes Tommy $200',
    severity: 6
})
window.holodeckApp.updateUI()
```

### Custom Logging

```javascript
window.holodeckApp.logEvent('Custom event happened')
```

### Programmatic Song Addition

```javascript
const song = {
    title: "Custom Song",
    lyrics: "Verse 1...",
    performance_notes: "High energy...",
    context: "",
    timestamp: new Date().toISOString(),
    copyright_free: true
}

window.holodeckApp.songs.push(song)
window.holodeckApp.saveSongs()
```

---

## File Structure

```
holodeck/ui/
├── index.html          # Main interface
├── styles.css          # All styling
├── app.js              # Application logic
└── README.md           # This file
```

---

## Future Enhancements

Planned features:
- Direct Claude API integration
- Auto-parsing of Claude responses to update state
- Song library browser
- Consequence timeline visualization
- Export session as narrative document
- Multi-session campaign management
- Mobile-responsive layout
- Dark/light theme toggle
- Rich text formatting in scene display

---

## Support

For issues or questions:
- Check the in-app help (❓ button)
- Review command reference (right sidebar)
- Consult main holodeck documentation

---

## License

Part of the Alex Wilson Holodeck system. All songs input are copyright-free and available for reuse in game.

---

**Welcome to the immersive holodeck experience.**

Your visual command center for Alex Wilson's story awaits.
