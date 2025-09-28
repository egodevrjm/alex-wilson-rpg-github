# Song File Usage Guide

## Quick Load Process

1. **Claude mentions a song:** "Alex plays Jump the Gorge"
2. **You find the file:** `Jump_the_Gorge.md`
3. **Load it into the conversation**
4. **Scene continues with full lyrics and performance notes**

## File Organization

```
Songs/
├── 00_SONGS_INDEX.md      (Keep this in Project - 3-5KB)
├── SONG_USAGE_GUIDE.md     (This file)
├── Backroads_Stupid.md     (Individual songs)
├── Jump_the_Gorge.md       
├── Turn_Left_at_the_Goat.md
└── [100+ more songs...]
```

## Benefits of This System

- **Before:** 200KB+ of songs always loaded
- **After:** Only 5KB index + 2-3KB per song when needed
- **Result:** 40-50 extra messages per session!

## Each Song File Contains

- Full metadata (BPM, key, genre, duration)
- Complete lyrics
- Performance notes and instrumentation
- Description of the song's vibe

## Pro Tips

1. Keep Songs folder open in Finder
2. Use search to quickly find songs by title
3. Only load songs when Alex actually performs
4. The index file shows genre groupings for scene-appropriate choices

## For Claude

When running scenes, Claude should:
1. Check the index for appropriate songs
2. Request specific song files by name
3. Use the performance notes for scene details
4. Reference BPM/key for technical discussions
