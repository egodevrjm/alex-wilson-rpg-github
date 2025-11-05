# ALEX WILSON HOLODECK - FULLY INTEGRATED WEB APP

**Complete guide to running the fully integrated Claude-powered holodeck**

---

## 🔌 What Is This?

This is a **fully integrated web application** that connects directly to Claude's API. No copy/paste needed - you type, Claude responds in real-time, and your entire conversation is maintained in one seamless session.

**Key Features:**
- Direct Claude API integration
- Real-time streaming responses
- Automatic state parsing
- Conversation history maintenance
- Song input system
- Session management
- All in a beautiful holodeck interface

---

## 🚀 Quick Start (5 Minutes)

### 1. Get a Claude API Key

1. Go to [https://console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Navigate to API Keys
4. Create a new API key
5. Copy it (starts with `sk-ant-...`)

### 2. Open the App

```bash
cd holodeck/ui
open index.html
```

Or use a local server:
```bash
python3 -m http.server 8000
# Then open http://localhost:8000
```

### 3. Configure

1. Click **⚙️ Settings** in the header
2. Paste your API key
3. Select model (Sonnet 4.0 recommended)
4. Enable "Auto-parse state" (recommended)
5. Enable "Streaming responses" (recommended)
6. Click **Save Settings**

### 4. Start Playing!

1. Click a quick-start example OR type your own scene
2. Click **Send to Claude** (or press `Ctrl+Enter`)
3. Watch Claude's response stream in real-time
4. The stats sidebar updates automatically
5. Continue naturally - full conversation history is maintained

That's it! You're now running a fully integrated holodeck.

---

## 🎮 How It Works

### Architecture

```
Your Browser (UI)
     ↓
JavaScript App (app.js)
     ↓
Direct HTTPS Connection
     ↓
Claude API (api.anthropic.com)
     ↓
World Engine Response
     ↓
Your Screen (real-time)
```

### What Happens When You Send

1. **You type** your director input
2. **Click Send** - Input goes to Claude API
3. **Claude processes** using the World Engine system prompt
4. **Response streams back** - You see it being generated
5. **State auto-updates** - Stats parsed from Claude's header
6. **History maintained** - Full conversation context preserved

### Conversation History

The app maintains your full conversation with Claude:
- Every input you send
- Every response from Claude
- Context preserved across messages
- Claude remembers everything in the session

This means you can have natural back-and-forth without repeating context.

---

## 🎵 Song Input System

### How to Add a Song

1. **Click 🎵 Add Song** in Quick Actions
2. Fill out the form:
   - **Title**: Song name
   - **Lyrics**: Full lyrics
   - **Performance Notes**: **THIS IS KEY** - How the song should be heard
   - **Context** (optional): When/where it was written

3. **Click "Add to Scene"**
4. Song is formatted and placed in your input
5. **Click "Send to Claude"**
6. Watch Claude bring the performance to life

### Performance Notes - The Secret Sauce

Performance notes tell Claude:
- How Alex delivers the song
- How the crowd reacts
- What emotional impact it has
- Whether it's a viral moment or background

**Examples:**

**High Energy:**
```
Upbeat honky-tonk banger with driving beat. Gets people on their feet.
By the second chorus, even the tourists are singing along. This is the
song that books repeat gigs.
```

**Emotional:**
```
Raw acoustic delivery, vulnerable and honest. Makes people lean in and
really listen. Some people tear up. Industry folks notice the craft.
This is the song that gets Alex taken seriously.
```

**Anthemic:**
```
Starts intimate, builds to powerful chorus. Fists-in-the-air moment.
Even the cynical bartender stops to watch. This is the song that goes
viral when someone films it on their phone.
```

The more specific you are, the better Claude can bring it to life.

---

## 📊 State Tracking

### Automatic Updates

When "Auto-parse state" is enabled, the app automatically extracts and updates:
- Money (cash + bank)
- Energy and hunger
- Location and time
- Social media followers and deltas
- Equipment status

From Claude's response headers - no manual entry needed!

### Manual Updates

Use SET commands to manually update state:

```
SET: cash to $300
SET: bank to $-47
SET: energy to 3
SET: hunger to 8
```

These immediately update the sidebar display.

### State Display

The left sidebar shows:
- **Financial**: Color-coded (green = positive, red = negative)
- **Vitals**: Progress bars for energy and hunger
- **Social Media**: Follower counts + changes
- **Equipment**: Guitar, vehicle, phone status
- **Quick Stats**: Scene count, active consequences

Everything updates in real-time as the story progresses.

---

## ⚙️ Settings Explained

### API Key
- **Required** for integrated mode
- Stored locally in your browser (localStorage)
- Never sent anywhere except directly to Claude's API
- Can be changed anytime in settings

### Model Selection

**Claude 4.0 Sonnet** (Recommended)
- Latest and most capable
- Best understanding of complex scenarios
- Excellent at maintaining character voices
- Fastest response times

**Claude 3.5 Sonnet**
- Previous generation
- Still excellent performance
- Good fallback option

**Claude 3 Opus**
- Most powerful older model
- Slower and more expensive
- Use if you need maximum capability

### Auto-Parse State
- **Recommended: ON**
- Automatically extracts stats from Claude's headers
- Updates sidebar in real-time
- Saves manual stat tracking

### Streaming Responses
- **Recommended: ON**
- See Claude's response as it's generated
- More engaging experience
- Shows "typing" indicator while generating
- Can stop generation mid-stream (press `Esc`)

---

## 🎯 Commands

### Scene Control
- `SCENE: [description]` - Create new scene
- `JUMP: [time]` - Skip forward/backward
- `REWIND: [change]` - Try different choice

### State Management
- `SET: [change]` - Update state manually
- `CHECK: [query]` - Ask about specific state
- `INVENTORY` - Full state report

### Meta Commands
- `PAUSE: [question]` - Discuss out of character
- `FOCUS: [element]` - Direct attention
- `TONE: [mood]` - Set emotional tone
- `TEMPO: [pacing]` - Control speed

### Natural Language
You can also just respond naturally:
```
Alex calls Tommy for help
Alex plays the song and watches the crowd
I want to explore the financial pressure more
```

Both work perfectly!

---

## ⌨️ Keyboard Shortcuts

- **`Ctrl + Enter`** - Send input to Claude
- **`Esc`** - Stop generation (while Claude is responding)
- **`Ctrl + K`** - Clear input field
- **`Ctrl + /`** - Show help modal

---

## 💾 Session Management

### Auto-Save
- State continuously saved to browser localStorage
- Survives page refresh
- Lost only if you clear browser data

### Save Session
- Click "Save State" to download JSON file
- Includes full state, conversation history, songs
- Portable across machines

### Load Session
- Click "Load State" and select JSON file
- Restores complete session
- Continue exactly where you left off

### New Session
- Click "New Session" to start fresh
- Current session auto-saved first
- Conversation history cleared
- State reset to defaults

---

## 🔧 Technical Details

### Security
- API key stored in browser localStorage only
- Direct HTTPS connection to Claude API
- No intermediate servers
- No data collected or stored externally

### Performance
- Streaming responses for real-time feedback
- Efficient state management
- Minimal memory footprint
- Works offline (after first load)

### Browser Support
- **Chrome/Edge 90+** ✅
- **Firefox 88+** ✅
- **Safari 14+** ✅

**Required Features:**
- Fetch API
- localStorage
- ES6+ JavaScript
- CSS Grid

### API Usage
- Charged per token by Anthropic
- Typical scene: 1,000-2,000 tokens
- Session with 10 scenes: ~15,000-20,000 tokens
- Cost: $0.03-$0.60 per session (Sonnet 4.0)

Check [Anthropic pricing](https://www.anthropic.com/pricing) for current rates.

---

## 🎨 Customization

### Color Theme

Edit `styles.css` variables:
```css
:root {
    --accent-blue: #00d4ff;  /* Main accent */
    --accent-cyan: #00ffcc;  /* Secondary accent */
    --bg-primary: #0a0e14;   /* Main background */
    /* etc. */
}
```

### System Prompt

The system prompt is built in `buildSystemPrompt()` in `app.js`. You can customize how Claude interprets the holodeck role by editing that function.

---

## 🐛 Troubleshooting

### "API Key Required" Error

**Problem**: No API key configured
**Solution**: Click ⚙️ Settings and enter your API key

### Connection Errors

**Problem**: Can't reach Claude API
**Solution**:
- Check internet connection
- Verify API key is valid
- Check Anthropic status page
- Try different model

### Stats Not Updating

**Problem**: Sidebar doesn't reflect scene changes
**Solution**:
- Enable "Auto-parse state" in settings
- Use explicit SET commands
- Check Claude is using correct header format

### Streaming Not Working

**Problem**: Responses appear all at once
**Solution**:
- Enable "Streaming responses" in settings
- Clear browser cache
- Try different browser

### Slow Responses

**Problem**: Claude takes too long
**Solution**:
- Try Claude 4.0 Sonnet (fastest)
- Check internet speed
- Peak times may be slower
- Consider shorter prompts

### Browser Crashes

**Problem**: Long sessions cause issues
**Solution**:
- Save state periodically
- Start new session after 50+ scenes
- Clear browser cache
- Use latest browser version

---

## 💡 Tips for Best Experience

### 1. Use Streaming
Enable streaming responses to see Claude "think" in real-time. More engaging and lets you stop if it goes off track.

### 2. Let Auto-Parse Work
Enable auto-parse and trust it. Claude's headers are consistent and parsing is accurate.

### 3. Rich Song Notes
Spend time on performance notes. They're the difference between "Alex plays a song" and a memorable scene.

### 4. Save Frequently
Export session state before experimenting with risky choices. You can always reload.

### 5. Natural Responses
You don't need formal commands for everything. "Alex decides to be honest" works great.

### 6. Use PAUSE
When stuck, use PAUSE to discuss options with Claude out of character.

### 7. Monitor Token Usage
Long sessions cost more. Start fresh periodically or use "JUMP" to skip time.

### 8. Explore Consequences
Let choices matter. Don't REWIND too often - consequences create story.

---

## 📖 Example Workflow

### Starting a Session

1. **Open app** → Opens to welcome screen
2. **No API key?** → Settings modal opens automatically
3. **Enter API key** → Click Save
4. **Click example scene** → "💸 Broke and Desperate"
5. **Scene loads** in input → Auto-filled scene setup
6. **Click Send** → Goes to Claude API
7. **Watch stream** → Response appears word-by-word
8. **Stats update** → Sidebar shows Alex's state
9. **Respond naturally** → "Alex calls Tommy"
10. **Continue** → Full conversation flows

### Adding a Song

1. **Mid-scene** → Alex is at a gig
2. **Click 🎵 Add Song** → Modal opens
3. **Enter details**:
   - Title: "Dirt Road Destiny"
   - Lyrics: [your song]
   - Performance Notes: "High-energy crowd-pleaser..."
4. **Submit** → Formatted and ready
5. **Send to Claude** → Performance plays out
6. **Claude responds** → Crowd reactions, impacts, consequences
7. **Stats update** → Social media followers spike

### Managing a Session

1. **Play for 10 scenes** → Story develops
2. **Save State** → Export JSON backup
3. **Continue** → Play 10 more scenes
4. **Try alternate path** → Use REWIND
5. **Explore both** → Compare outcomes
6. **Save final** → Export completed session
7. **Share** → Send JSON to friend

---

## 🌟 Advanced Features

### Conversation History Management

The app maintains full conversation history with Claude. You can:
- Reference earlier scenes naturally
- Ask Claude to recall previous events
- Build complex ongoing storylines
- Trust that context is preserved

### Multi-Session Campaigns

For long-form stories:
1. Play a session (20-30 scenes)
2. Save state with descriptive name
3. Start new session next time
4. Load previous state to continue
5. Build epic campaigns over multiple sessions

### Song Library

All songs you create are saved:
- Persistent across sessions
- Reusable in future scenes
- Exported with session state
- Sharable with others

Build a complete discography for Alex!

### Parallel Timelines

Explore "what if" scenarios:
1. Play a scene with Choice A
2. Save state as "Timeline A"
3. Reload to earlier point
4. Make Choice B instead
5. Save as "Timeline B"
6. Compare outcomes

---

## 🆘 Getting Help

### In-App Help
- Click **❓** button for quick help
- Press **`Ctrl + /`** for help modal
- Check status indicator for connection status

### Documentation
- This file (comprehensive guide)
- `holodeck/HOLODECK_README.md` (system overview)
- `holodeck/UI_GUIDE.md` (UI quick reference)
- `holodeck/QUICKSTART.md` (text-mode guide)

### Anthropic Resources
- [API Documentation](https://docs.anthropic.com)
- [Console](https://console.anthropic.com)
- [Pricing](https://www.anthropic.com/pricing)
- [Status Page](https://status.anthropic.com)

---

## 🎉 You're Ready!

You now have a fully integrated Alex Wilson Holodeck running directly with Claude API.

**No copy/paste. No manual tracking. Just pure storytelling.**

Open the app, set your API key, and start creating.

The holodeck awaits. 🎸

---

**Version**: 2.0 (Fully Integrated)
**Last Updated**: 2025
**Powered by**: Claude AI (Anthropic)
