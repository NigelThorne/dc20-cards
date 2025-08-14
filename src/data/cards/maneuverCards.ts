import type { CharacterCard } from '../../types';

export const maneuverCards: CharacterCard[] = [
  {
    id: "extend-attack",
    title: "Extend Attack",
    subtitle: "Maneuver",
    category: "maneuver",
    cost: { ap: 1, sp: 1 },
    content: `
      <p>
        <strong>Effect:</strong> Your Melee Attack Range is
        increased by 1 Space (or your Ranged Attack Range is
        increased by 5 Spaces) for the Attack.
      </p>
    `,
  },
  {
    id: "power-attack",
    title: "Power Attack",
    subtitle: "Maneuver",
    category: "maneuver",
    cost: { ap: 1, sp: 1 },
    content: `
      <p>
        <strong>Effect:</strong> You deal +1 damage with the
        Attack. You can use this Maneuver multiple times.
      </p>
    `,
  },
  {
    id: "sweep-attack",
    title: "Sweep Attack",
    subtitle: "Maneuver",
    category: "maneuver",
    cost: { ap: 1, sp: 1 },
    content: `
      <p>
        <strong>Effect:</strong> Choose 1 additional target
        within 1 Space of the original target that's within your
        Attack Range. Make 1 Attack Check against all targets.
      </p>
      <p>
        <strong>Hit:</strong> Original target takes your
        Attack's damage, each additional target takes 1 damage
        of the same type. Can use multiple times.
      </p>
    `,
  },
  {
    id: "hamstring",
    title: "Hamstring",
    subtitle: "Maneuver",
    category: "maneuver",
    cost: { ap: 1, sp: 1 },
    content: `
      <p>
        <strong>Effect:</strong> The target becomes Slowed 1
        (every 1 Space you move costs an extra 1 Space of
        movement) until the end of your next turn.
      </p>
      <p><em>Physical save against DC.</em></p>
    `,
  },
  {
    id: "knockback",
    title: "Knockback",
    subtitle: "Maneuver",
    category: "maneuver",
    cost: { ap: 1, sp: 1 },
    content: `
      <p>
        <strong>Effect:</strong> The target is pushed 1 Space
        away + up to 1 additional Space for every 5 it fails its
        Save by.
      </p>
    `,
  },
  {
    id: "taunt",
    title: "Taunt",
    subtitle: "Maneuver",
    category: "maneuver",
    cost: { ap: 1, sp: 1 },
    content: `
      <p>
        <strong>Effect:</strong> Choose an enemy creature that
        can see or hear you within 5 Spaces. Make an Attack
        Check, Influence Check, or Intimidation Check (your
        choice) contested by the target's Mental Save.
      </p>
      <p>
        <strong>Success:</strong> Target is Taunted (DisADV on
        Attacks against creatures other than you) until your
        next Attack.
      </p>
      <p>
        <strong>Full Taunt:</strong> Spend additional
        <span class="action-point-cost">1AP</span> to have the Taunted
        Condition last until the end of your next turn.
      </p>
    `,
  },
];
