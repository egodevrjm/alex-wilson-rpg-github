#!/usr/bin/env python3
"""
Alex Wilson Holodeck - State Manager

Utility script for managing session state, tracking stats,
and maintaining consistency across holodeck sessions.
"""

import json
import os
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional, Any


class StateManager:
    """Manages holodeck session state and statistics."""

    def __init__(self, session_file: Optional[str] = None):
        """
        Initialize state manager.

        Args:
            session_file: Path to session state JSON file
        """
        self.session_file = session_file or "current_session.json"
        self.state = self.load_state()

    def load_state(self) -> Dict:
        """Load state from file or create new state."""
        if os.path.exists(self.session_file):
            with open(self.session_file, 'r') as f:
                return json.load(f)
        return self.create_new_state()

    def save_state(self):
        """Save current state to file."""
        self.state['session_info']['last_updated'] = datetime.now().isoformat()
        with open(self.session_file, 'w') as f:
            json.dump(self.state, f, indent=2)
        print(f"✓ State saved to {self.session_file}")

    def create_new_state(self) -> Dict:
        """Create a new session state with default values."""
        return {
            "session_info": {
                "session_id": f"session_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
                "session_name": "New Session",
                "created": datetime.now().isoformat(),
                "last_updated": datetime.now().isoformat(),
                "scene_count": 0
            },
            "character": {
                "name": "Alex Wilson",
                "middle_name": "Boone",
                "age": 22,
                "mode": "solo"
            },
            "current_state": {
                "location": {
                    "specific": "Unknown",
                    "neighborhood": "",
                    "city": "Nashville",
                    "state": "Tennessee"
                },
                "datetime": {
                    "day_of_week": datetime.now().strftime("%A"),
                    "date": datetime.now().strftime("%Y-%m-%d"),
                    "time": "12:00",
                    "timezone": "CST"
                },
                "financial": {
                    "cash": 0,
                    "bank": 0,
                    "last_updated": datetime.now().isoformat(),
                    "notes": ""
                },
                "vitals": {
                    "energy": 7,
                    "energy_max": 10,
                    "hunger": 5,
                    "hunger_max": 10,
                    "notes": ""
                },
                "equipment": {
                    "guitar": {
                        "name": "Betty",
                        "status": "Good condition",
                        "condition": 8
                    },
                    "vehicle": {
                        "model": "F-150",
                        "status": "Running",
                        "condition": 7,
                        "notes": ""
                    },
                    "phone": {
                        "battery": 100,
                        "status": "working"
                    }
                },
                "social_media": {
                    "x": {"followers": 8000, "delta_this_scene": 0, "delta_this_session": 0},
                    "instagram": {"followers": 12000, "delta_this_scene": 0, "delta_this_session": 0},
                    "tiktok": {"followers": 30000, "delta_this_scene": 0, "delta_this_session": 0},
                    "youtube": {"followers": 2000, "delta_this_scene": 0, "delta_this_session": 0}
                }
            },
            "dynamics": {"current": [], "available": []},
            "consequences": {"active": [], "resolved": [], "pending": []},
            "relationships": {"npcs": []},
            "storylines": {"active": [], "background": []},
            "world_state": {},
            "scene_history": [],
            "metadata": {},
            "technical": {}
        }

    def update_money(self, cash: Optional[int] = None, bank: Optional[int] = None,
                    note: Optional[str] = None):
        """Update financial state."""
        if cash is not None:
            self.state['current_state']['financial']['cash'] = cash
        if bank is not None:
            self.state['current_state']['financial']['bank'] = bank
        if note:
            self.state['current_state']['financial']['notes'] = note
        self.state['current_state']['financial']['last_updated'] = datetime.now().isoformat()

    def update_vitals(self, energy: Optional[int] = None, hunger: Optional[int] = None,
                     note: Optional[str] = None):
        """Update energy and hunger."""
        if energy is not None:
            self.state['current_state']['vitals']['energy'] = max(0, min(10, energy))
        if hunger is not None:
            self.state['current_state']['vitals']['hunger'] = max(0, min(10, hunger))
        if note:
            self.state['current_state']['vitals']['notes'] = note

    def update_location(self, specific: str, neighborhood: str = "",
                       city: str = "Nashville", state: str = "Tennessee"):
        """Update current location."""
        self.state['current_state']['location'] = {
            "specific": specific,
            "neighborhood": neighborhood,
            "city": city,
            "state": state
        }

    def update_datetime(self, date: Optional[str] = None, time: Optional[str] = None):
        """Update game datetime."""
        if date:
            dt = datetime.fromisoformat(date)
            self.state['current_state']['datetime']['day_of_week'] = dt.strftime("%A")
            self.state['current_state']['datetime']['date'] = date
        if time:
            self.state['current_state']['datetime']['time'] = time

    def jump_time(self, days: int = 0, hours: int = 0):
        """Jump forward in time and update consequences."""
        current = datetime.fromisoformat(
            f"{self.state['current_state']['datetime']['date']}T"
            f"{self.state['current_state']['datetime']['time']}:00"
        )
        new_time = current + timedelta(days=days, hours=hours)

        self.update_datetime(
            date=new_time.strftime("%Y-%m-%d"),
            time=new_time.strftime("%H:%M")
        )

        # Update vitals based on time passed
        hours_passed = days * 24 + hours

        # Energy degrades over time, restores with sleep
        if hours_passed >= 8:  # Assume sleep
            self.update_vitals(energy=10)
        else:
            energy_loss = hours_passed // 4
            current_energy = self.state['current_state']['vitals']['energy']
            self.update_vitals(energy=current_energy - energy_loss)

        # Hunger increases over time
        hunger_gain = hours_passed // 3
        current_hunger = self.state['current_state']['vitals']['hunger']
        self.update_vitals(hunger=current_hunger + hunger_gain)

    def add_consequence(self, description: str, severity: int,
                       cons_type: str = "general", status: str = "active") -> str:
        """Add a new consequence."""
        cons_id = f"cons_{len(self.state['consequences']['active']) + 1:03d}"
        consequence = {
            "id": cons_id,
            "description": description,
            "created": datetime.now().strftime("%Y-%m-%d"),
            "severity": severity,
            "type": cons_type,
            "status": status,
            "manifestations": [],
            "resolution": None
        }
        self.state['consequences']['active'].append(consequence)
        return cons_id

    def resolve_consequence(self, cons_id: str, resolution: str):
        """Mark a consequence as resolved."""
        for cons in self.state['consequences']['active']:
            if cons['id'] == cons_id:
                cons['status'] = 'resolved'
                cons['resolution'] = resolution
                self.state['consequences']['resolved'].append(cons)
                self.state['consequences']['active'].remove(cons)
                break

    def add_npc(self, name: str, relationship: str, status: str = "Active",
               notes: str = "", trust_level: int = 5, importance: str = "minor"):
        """Add or update an NPC."""
        npc = {
            "name": name,
            "relationship": relationship,
            "status": status,
            "last_interaction": datetime.now().isoformat(),
            "notes": notes,
            "trust_level": trust_level,
            "importance": importance
        }

        # Update if exists, add if new
        existing = [n for n in self.state['relationships']['npcs'] if n['name'] == name]
        if existing:
            existing[0].update(npc)
        else:
            self.state['relationships']['npcs'].append(npc)

    def add_scene(self, title: str, location: str, summary: str,
                 choices_made: List[str], consequences_created: List[str],
                 stats_changed: Dict[str, str]):
        """Record a completed scene."""
        scene = {
            "scene_number": len(self.state['scene_history']) + 1,
            "title": title,
            "location": location,
            "datetime": f"{self.state['current_state']['datetime']['date']}T"
                       f"{self.state['current_state']['datetime']['time']}:00",
            "summary": summary,
            "choices_made": choices_made,
            "consequences_created": consequences_created,
            "stats_changed": stats_changed
        }
        self.state['scene_history'].append(scene)
        self.state['session_info']['scene_count'] = len(self.state['scene_history'])

    def get_header_string(self) -> str:
        """Generate the standard holodeck header string."""
        loc = self.state['current_state']['location']['specific']
        dt = self.state['current_state']['datetime']
        fin = self.state['current_state']['financial']
        vit = self.state['current_state']['vitals']
        eq = self.state['current_state']['equipment']
        sm = self.state['current_state']['social_media']
        age = self.state['character']['age']

        header = f"""—------—------—------
📍 Location: {loc} | 📅 {dt['day_of_week']}, {dt['date']}, {dt['time']} | Age: {age}

💰 Cash: ${fin['cash']} | Bank: ${fin['bank']}

🎸 {eq['guitar']['name']}: {eq['guitar']['status']} | 🚗 {eq['vehicle']['model']}: {eq['vehicle']['status']} | ⚡ Energy: {vit['energy']}/10 | 🍔 Hunger: {vit['hunger']}/10

📣 Followers (X/IG/TikTok/YT): {sm['x']['followers']:,}/{sm['instagram']['followers']:,}/{sm['tiktok']['followers']:,}/{sm['youtube']['followers']:,} | Δ Since Last: {sm['x']['delta_this_scene']:+d}/{sm['instagram']['delta_this_scene']:+d}/{sm['tiktok']['delta_this_scene']:+d}/{sm['youtube']['delta_this_scene']:+d}

CURRENT DYNAMICS:
"""
        for dynamic in self.state['dynamics']['current'][:3]:
            header += f"- {dynamic.get('type', 'Unknown')}: {dynamic.get('description', '')}\n"

        header += "—------—------—------"
        return header

    def print_summary(self):
        """Print a summary of current state."""
        print("\n" + "="*60)
        print(f"SESSION: {self.state['session_info']['session_name']}")
        print(f"Scene Count: {self.state['session_info']['scene_count']}")
        print("="*60)
        print(self.get_header_string())
        print("\n" + "="*60)

        print("\nACTIVE CONSEQUENCES:")
        for cons in self.state['consequences']['active']:
            print(f"  [{cons['id']}] {cons['description']} (Severity: {cons['severity']})")

        print("\nKEY NPCs:")
        for npc in self.state['relationships']['npcs'][:5]:
            print(f"  - {npc['name']}: {npc['relationship']}")

        print("\n" + "="*60 + "\n")


def main():
    """Command-line interface for state manager."""
    import argparse

    parser = argparse.ArgumentParser(description="Alex Wilson Holodeck State Manager")
    parser.add_argument('action', choices=['new', 'load', 'summary', 'update', 'jump'],
                       help='Action to perform')
    parser.add_argument('--file', default='current_session.json',
                       help='Session file to use')
    parser.add_argument('--cash', type=int, help='Update cash amount')
    parser.add_argument('--bank', type=int, help='Update bank amount')
    parser.add_argument('--energy', type=int, help='Update energy (0-10)')
    parser.add_argument('--hunger', type=int, help='Update hunger (0-10)')
    parser.add_argument('--days', type=int, default=0, help='Days to jump')
    parser.add_argument('--hours', type=int, default=0, help='Hours to jump')

    args = parser.parse_args()

    manager = StateManager(args.file)

    if args.action == 'new':
        manager.state = manager.create_new_state()
        print("Created new session state")
        manager.save_state()

    elif args.action == 'load':
        print(f"Loaded session from {args.file}")
        manager.print_summary()

    elif args.action == 'summary':
        manager.print_summary()

    elif args.action == 'update':
        if args.cash is not None or args.bank is not None:
            manager.update_money(cash=args.cash, bank=args.bank)
            print(f"Updated finances: Cash=${args.cash}, Bank=${args.bank}")
        if args.energy is not None or args.hunger is not None:
            manager.update_vitals(energy=args.energy, hunger=args.hunger)
            print(f"Updated vitals: Energy={args.energy}, Hunger={args.hunger}")
        manager.save_state()

    elif args.action == 'jump':
        manager.jump_time(days=args.days, hours=args.hours)
        print(f"Jumped {args.days} days, {args.hours} hours")
        manager.print_summary()
        manager.save_state()


if __name__ == '__main__':
    main()
