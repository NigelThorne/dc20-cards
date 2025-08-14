import type { CharacterCard } from '../../types';

export const skillCards: CharacterCard[] = [
  {
    id: "analyze-creature",
    title: "Analyze Creature",
    subtitle: "Knowledge Check",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p>
        <strong>Check:</strong> Knowledge check (type depends on
        creature)
      </p>
      <p>
        <strong>Success:</strong> Learn lore/creature statistics
        depending on success level
      </p>
    `,
  },
  {
    id: "calm-animal",
    title: "Calm Animal",
    subtitle: "Animal Handling",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p><strong>Check:</strong> Animal check vs Charisma save</p>
      <p>
        <strong>Success:</strong> Animal is taunted for 1min
        (repeated save) or until you harm it
      </p>
      <p><strong>Success +5:</strong> Impaired</p>
      <p><strong>Success +10:</strong> Charmed</p>
    `,
  },
  {
    id: "combat-insight",
    title: "Combat Insight",
    subtitle: "Trickery/Influence",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p>
        <strong>Check:</strong> Insight vs Trickery/Influence
        check
      </p>
      <p>
        <strong>Success:</strong> Learn emotional state and if
        it plans to attack/cast/flee next turn
      </p>
      <p>
        <strong>Success +5:</strong> Which creature likely to
        harm
      </p>
      <p>
        <strong>Success +10:</strong> Know which ability
        creature plans to use
      </p>
    `,
  },
  {
    id: "conceal",
    title: "Conceal",
    subtitle: "Trickery",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p><strong>Check:</strong> Trickery vs Passive Awareness</p>
      <p><strong>Effect:</strong> Attempt to hide an object</p>
    `,
  },
  {
    id: "feint",
    title: "Feint",
    subtitle: "Trickery",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p><strong>Check:</strong> Trickery vs target's Insight</p>
      <p>
        <strong>Success:</strong> ADV and +1 to hit against
        target before next turn
      </p>
      <p>
        <em
          >+3 move from Cunning Action +<span class="stamina-point-cost"
            >SP</span
          ></em
        >
      </p>
    `,
  },
  {
    id: "intimidate",
    title: "Intimidate",
    subtitle: "Intimidation",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p><strong>Check:</strong> Intimidate vs Charisma</p>
      <p><strong>Success:</strong> Target is Intimidated</p>
    `,
  },
  {
    id: "medicine",
    title: "Medicine",
    subtitle: "Medicine Check",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p>
        <strong>Effect:</strong> Medicine check to stop bleeding
        or stabilize target
      </p>
      <p><strong>Success +5:</strong> 1 temp HP</p>
    `,
  },
  {
    id: "search",
    title: "Search",
    subtitle: "Investigation",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p>
        <strong>Effect:</strong> Locate 1+ hidden
        creature/object
      </p>
    `,
  },
];
