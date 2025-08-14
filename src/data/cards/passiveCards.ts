import type { CharacterCard } from "../../types";

export const passiveCards: CharacterCard[] = [
  {
    id: "weapon-masteries",
    title: "Weapon Masteries",
    subtitle: "Passive",
    category: "passive",
    content: `
      <span class="passive-feature">PASSIVE</span>
      <p>
        <strong>Bow:</strong> +1 damage against creatures that
        are Slowed (any amount).
      </p>
      <p>
        <strong>Whip:</strong> +1 damage with Melee Attacks
        against creatures farther than 1 Space from you.
      </p>
      <p>
        <strong>Sword:</strong> +1 damage against creatures that
        are Exposed.
      </p>
    `,
  },
  {
    id: "wings",
    title: "Wings",
    subtitle: "Beastborn Feature",
    category: "passive",
    content: `
      <span class="passive-feature">PASSIVE</span>
      <p><strong>While not Incapacitated:</strong></p>
      <p><span class="ability-score-icon">🪶</span> No fall damage</p>
      <p>
        <span class="ability-score-icon">🪁</span> Glide horizontally
        at full speed
      </p>
      <p>
        <span class="ability-score-icon">⬆️</span> Ascend: 2 Spaces →
        1 Space up
      </p>
      <p>
        <span class="ability-score-icon">🚁</span> Hover between turns
        if in air
      </p>
      <p>
        <span class="ability-score-icon">🦎</span> Camouflage: ADV
        Stealth while motionless
      </p>
    `,
  },
  {
    id: "debilitating-strike",
    title: "Debilitating Strike",
    subtitle: "Rogue Feature",
    category: "passive",
    cost: { sp: 1 },
    content: `
      <span class="passive-feature">FEATURE</span>
      <p>
        <strong>Effect:</strong> When you make an Attack with a
        Weapon, you can spend
        <span class="stamina-point-cost">1SP</span> to force the target to
        make a Physical Save against your Save DC (14).
      </p>
      <p>
        <strong>Failure:</strong> Until the start of your next
        turn, the target suffers 1 of the following effects of
        your choice:
        <span class="condition-status">Deafened</span>,
        <span class="condition-status">Exposed</span>,
        <span class="condition-status">Hindered</span>, or
        <span class="condition-status">Slowed 2</span>.
      </p>
      <p>
        <em
          >A target can't be affected by the same option more
          than once at a time.</em
        >
      </p>
    `,
  },
  {
    id: "roguish-finesse",
    title: "Roguish Finesse",
    subtitle: "Rogue Feature",
    category: "passive",
    content: `
      <span class="passive-feature">FEATURE</span>
      <p>
        <strong>Cunning Action:</strong> You gain movement equal
        to half your Speed when you take the
        <span class="action-reference">Disengage</span>,
        <span class="action-reference">Feint</span>, or
        <span class="action-reference">Hide</span> Actions. You can use
        this movement immediately before or after you take the
        Action.
      </p>
      <p>
        <strong>Skill Expertise:</strong> Your Skill Mastery
        Limit increases by 1, up to Grandmaster (+10). A Skill
        can only reach Expert (+5) up to its Mastery limit.
      </p>
      <p>
        <strong>Multi-Skilled:</strong> You gain 1 Skill Point.
      </p>
    `,
  },
  {
    id: "cypher-speech",
    title: "Cypher Speech",
    subtitle: "Rogue Feature",
    category: "passive",
    content: `
      <span class="passive-feature">FEATURE</span>
      <p><strong>Abilities:</strong></p>
      <p>• Speak in code with slum dwellers</p>
      <p>• Hide messages in normal conversation</p>
      <p>• Leave coded written messages ("Safety", "Threat", "Wealth")</p>
      <p>• Mark secret locations (caches, passages, safehouses, dangers)</p>
      <p>• Gain fluency in one additional Mortal Language</p>
    `,
  },
];
