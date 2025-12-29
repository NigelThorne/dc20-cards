import type { CharacterCard } from '../../../../types';

export const reactionCards: CharacterCard[] = [

  {
    id: "opportunity-attack",
    title: "Opportunity Attack",
    subtitle: "Martial Reaction",
    category: "reaction",
    cost: [{ ap: 1 }],
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
