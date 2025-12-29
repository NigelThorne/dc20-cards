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
        <strong>Success:</strong> Animal is calmed for 1min
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
    subtitle: "Awareness",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p>Locate 1+ Hidden creatures and concealed objects within Line of Sight.</p>
      <p><strong>Hidden Creatures:</strong> Awareness vs Stealth. Success: Know location until end of turn</p>
      <p><strong>Hidden Objects:</strong> Awareness vs discovery DC. Success: Discover location</p>
    `,
  },
  {
    id: "investigate",
    title: "Investigate",
    subtitle: "Investigation",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p>Uncover concealed object, secret compartment, or mechanism function within 1 Space.</p>
      <p><strong>Concealed Objects:</strong> Investigation vs Trickery. Success: Know location of concealed objects on creature</p>
      <p><strong>Secret Compartments:</strong> Investigation vs discovery DC. Success: Discover compartments</p>
      <p><strong>Discern Mechanism:</strong> Investigation check. Success: Learn how mechanism works and methods to activate/disable</p>
    `,
  },
  {
    id: "extend-jump",
    title: "Extend Jump",
    subtitle: "Acrobatics",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p><strong>Check:</strong> Acrobatics DC 10</p>
      <p><strong>Failure:</strong> Jump Distance +1</p>
      <p><strong>Success:</strong> Jump Distance +2</p>
      <p><strong>Success (each 5):</strong> +1 Jump Distance</p>
    `,
  },
  {
    id: "mounted-defense",
    title: "Mounted Defense",
    subtitle: "Animal Handling",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p>Maneuver a mount you're riding to avoid danger.</p>
      <p><strong>Check:</strong> Animal DC 10</p>
      <p><strong>Success:</strong> Mount's PD +2 until start of your next turn</p>
      <p><strong>Success (5):</strong> +2 PD</p>
      <p><strong>Success (10):</strong> +4 PD</p>
    `,
  },
  {
    id: "pass-through",
    title: "Pass Through",
    subtitle: "Martial",
    category: "skill",
    cost: { ap: 1 },
    content: `
      <span class="skill-check">SKILL</span>
      <p>Move through Space occupied by hostile creature within 1 size of you.</p>
      <p><strong>Check:</strong> Martial vs Martial (contested)</p>
      <p><strong>Success:</strong> Move through creature's Space as Difficult Terrain (Slowed while moving through)</p>
      <p><strong>Success (5):</strong> Move through without Difficult Terrain</p>
    `,
  },
];
