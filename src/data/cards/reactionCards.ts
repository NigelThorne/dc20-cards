import type { CharacterCard } from '../../types';

export const reactionCards: CharacterCard[] = [
  {
    id: "sidestep",
    title: "Sidestep",
    subtitle: "Reaction",
    category: "reaction",
    cost: { ap: 1 },
    content: `
      <span class="reaction-trigger">REACTION</span>
      <p>
        <strong>Trigger:</strong> You're targeted by an Attack
        against your Precision Defense
      </p>
      <p>
        <strong>Effect:</strong> You move 1 Space to a Space
        that's still within the Attack's range. When you do, the
        Attack has DisADV against you.
      </p>
      <p>
        <em
          >If you move behind Cover, you don't gain the
          benefit of that Cover against the Attack.</em
        >
      </p>
    `,
  },
  {
    id: "opportunity-attack",
    title: "Opportunity Attack",
    subtitle: "Martial Reaction",
    category: "reaction",
    cost: { ap: 1 },
    content: `
      <span class="reaction-trigger">REACTION</span>
      <p>
        <strong>Trigger:</strong> Monster in melee range leaves
        range, stands up, picks up an item, or takes interact
        with object action
      </p>
      <p>
        <strong>Effect:</strong> Can spend
        <span class="action-point-cost">1AP</span> to attack against that
        creature, spend additional AP for ADV and/or perform
        maneuvers
      </p>
    `,
  },
];
