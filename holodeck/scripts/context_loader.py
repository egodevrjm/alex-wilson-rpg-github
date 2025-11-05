#!/usr/bin/env python3
"""
Alex Wilson Holodeck - Context Loader

Utility to identify and list relevant context files for different scene types.
Helps Claude know which files to load for each scene.
"""

from typing import List, Dict, Set
from pathlib import Path


class ContextLoader:
    """Identifies relevant context files based on scene type."""

    # Scene type to file mappings based on Master Index
    SCENE_CONTEXTS = {
        "broadway_gig": [
            "world/venues/Nashville_Broadway_Honky_Tonks.md",
            "world/lifestyle/Nashville_Day_Jobs.md",
            "songs/by-genre/"  # + specific genre
        ],
        "record_label_meeting": [
            "world/nashville-industry/Nashville_Record_Labels.md",
            "world/nashville-industry/Nashville_AR_Managers.md",
            "world/lifestyle/Financial_Banking_Debt.md"
        ],
        "hometown_visit": [
            "world/pike-county/Pike_County_Family_Friends.md",
            "world/pike-county/Pike_County_Businesses.md",
            "world/pike-county/Pike_County_Churches.md",
            "rosie-walker/Rosie_Walker_Fact_Sheet.md"
        ],
        "recording_session": [
            "world/venues/Nashville_Recording_Studios.md",
            "world/nashville-industry/Nashville_Producers_Engineers.md",
            "world/nashville-industry/Nashville_Session_Musicians.md"
        ],
        "writers_round": [
            "world/venues/Nashville_Open_Mics_Writers.md",
            "world/artists/Artists_Songwriters.md",
            "songs/"  # specific songs
        ],
        "housing_survival": [
            "world/lifestyle/Nashville_Neighborhoods_Housing.md",
            "world/lifestyle/Financial_Banking_Debt.md",
            "world/lifestyle/Nashville_Day_Jobs.md"
        ],
        "health_crisis": [
            "world/lifestyle/Health_Medical_Resources.md",
            "world/lifestyle/Financial_Banking_Debt.md"
        ],
        "legal_trouble": [
            "world/pike-county/Pike_County_Officials.md",
            "world/lifestyle/Financial_Banking_Debt.md"
        ],
        "industry_showcase": [
            "world/venues/Nashville_Mid_Tier_Clubs.md",
            "world/nashville-industry/Nashville_AR_Managers.md",
            "world/artists/Artists_Rising_Peers.md"
        ],
        "money_crisis": [
            "world/lifestyle/Financial_Banking_Debt.md",
            "world/lifestyle/Nashville_Day_Jobs.md",
            "world/lifestyle/Consumer_Reality_Services.md"
        ],
        "writing_session": [
            "world/artists/Artists_Songwriters.md",
            "world/nashville-industry/Nashville_Publishers_Legal.md"
        ],
        "social_media_viral": [
            "world/lifestyle/Digital_Tech_Platforms.md",
            "world/nashville-industry/Nashville_Radio_Media.md",
            "tools/Social_Media_Templates.md"
        ],
        "rosie_walker_storyline": [
            "rosie-walker/Finding_Rosie_Documentary.md",
            "rosie-walker/Rosie_Walker_Fact_Sheet.md",
            "rosie-walker/Full_Rosie_Walker.md",
            "world/nashville-industry/Nashville_Radio_Media.md"
        ]
    }

    # Core files always needed
    CORE_FILES = [
        "FINAL/ALEX WILSON — CORE BIBLE (use).md",
        "FINAL/Alex Wilson - The Cheat Sheet (use).md",
        "core/00_MASTER_INDEX.md"
    ]

    # Keywords to scene type mappings
    KEYWORD_MAP = {
        "broadway": "broadway_gig",
        "honky tonk": "broadway_gig",
        "tootsie": "broadway_gig",
        "robert's": "broadway_gig",
        "bar gig": "broadway_gig",

        "label": "record_label_meeting",
        "a&r": "record_label_meeting",
        "contract": "record_label_meeting",
        "deal": "record_label_meeting",

        "pike county": "hometown_visit",
        "hometown": "hometown_visit",
        "family": "hometown_visit",
        "mawmaw": "hometown_visit",

        "studio": "recording_session",
        "recording": "recording_session",
        "producer": "recording_session",

        "writers": "writers_round",
        "bluebird": "writers_round",
        "open mic": "writers_round",

        "apartment": "housing_survival",
        "rent": "housing_survival",
        "eviction": "housing_survival",

        "hospital": "health_crisis",
        "doctor": "health_crisis",
        "injury": "health_crisis",

        "police": "legal_trouble",
        "arrest": "legal_trouble",
        "court": "legal_trouble",

        "showcase": "industry_showcase",
        "industry": "industry_showcase",

        "broke": "money_crisis",
        "debt": "money_crisis",
        "overdraft": "money_crisis",

        "co-write": "writing_session",
        "songwriting": "writing_session",

        "viral": "social_media_viral",
        "tiktok": "social_media_viral",
        "followers": "social_media_viral",

        "rosie walker": "rosie_walker_storyline",
        "documentary": "rosie_walker_storyline",
        "grandmother": "rosie_walker_storyline"
    }

    @classmethod
    def identify_scene_type(cls, scene_description: str) -> List[str]:
        """
        Identify scene types from description.

        Args:
            scene_description: Natural language scene description

        Returns:
            List of matching scene types
        """
        description_lower = scene_description.lower()
        matched_types: Set[str] = set()

        for keyword, scene_type in cls.KEYWORD_MAP.items():
            if keyword in description_lower:
                matched_types.add(scene_type)

        return list(matched_types)

    @classmethod
    def get_context_files(cls, scene_types: List[str]) -> List[str]:
        """
        Get context files for given scene types.

        Args:
            scene_types: List of scene type identifiers

        Returns:
            List of file paths to load
        """
        files: Set[str] = set(cls.CORE_FILES)

        for scene_type in scene_types:
            if scene_type in cls.SCENE_CONTEXTS:
                files.update(cls.SCENE_CONTEXTS[scene_type])

        return sorted(list(files))

    @classmethod
    def suggest_files_for_scene(cls, scene_description: str) -> Dict[str, any]:
        """
        Analyze scene description and suggest context files.

        Args:
            scene_description: Natural language scene description

        Returns:
            Dictionary with scene types and file suggestions
        """
        scene_types = cls.identify_scene_type(scene_description)
        files = cls.get_context_files(scene_types)

        return {
            "scene_description": scene_description,
            "identified_types": scene_types,
            "core_files": cls.CORE_FILES,
            "context_files": [f for f in files if f not in cls.CORE_FILES],
            "total_files": files
        }

    @classmethod
    def print_scene_analysis(cls, scene_description: str):
        """Print formatted analysis of scene context needs."""
        result = cls.suggest_files_for_scene(scene_description)

        print("\n" + "="*60)
        print("SCENE CONTEXT ANALYSIS")
        print("="*60)
        print(f"\nScene: {result['scene_description']}")
        print(f"\nIdentified Types: {', '.join(result['identified_types']) or 'Generic'}")

        print("\n--- CORE FILES (Always Load) ---")
        for f in result['core_files']:
            print(f"  • {f}")

        print("\n--- CONTEXT FILES (Scene-Specific) ---")
        for f in result['context_files']:
            print(f"  • {f}")

        print(f"\nTotal Files to Load: {len(result['total_files'])}")
        print("="*60 + "\n")


def main():
    """Command-line interface for context loader."""
    import argparse

    parser = argparse.ArgumentParser(
        description="Alex Wilson Holodeck Context Loader"
    )
    parser.add_argument(
        'scene',
        nargs='+',
        help='Scene description (natural language)'
    )
    parser.add_argument(
        '--list-types',
        action='store_true',
        help='List all available scene types'
    )

    args = parser.parse_args()

    if args.list_types:
        print("\nAvailable Scene Types:")
        print("="*60)
        for scene_type in sorted(ContextLoader.SCENE_CONTEXTS.keys()):
            print(f"\n{scene_type}:")
            for file in ContextLoader.SCENE_CONTEXTS[scene_type]:
                print(f"  • {file}")
        print("="*60 + "\n")
        return

    scene_description = ' '.join(args.scene)
    ContextLoader.print_scene_analysis(scene_description)


if __name__ == '__main__':
    main()
