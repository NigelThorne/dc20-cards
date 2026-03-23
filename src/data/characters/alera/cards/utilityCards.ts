import type { CharacterCard } from '../../../../types';

export const utilityCards: CharacterCard[] = [
  {
    id: "draconic-breath",
    title: "Draconic Breath",
    subtitle: "Dragonborn Action",
    category: "utility",
    cost: [{ ap: 2 }],
    content: `
      <p>Exhale destructive power. <strong>Twice</strong> per Long Rest, regain on next Initiative roll.</p>
      <p><strong>Area:</strong> Spell Attack vs AD in 3 Space Cone or 6 Space Line. Hit: 2 Draconic damage</p>
      <p><strong>Focused:</strong> Spell Attack vs PD of 1 target within 6 Spaces. Hit: 4 Draconic damage</p>
      <p><strong>Enhance:</strong> Before Spell Check, spend <span class="stamina-point-cost">SP</span>/<span class="magic-point-cost">MP</span> to increase damage:</p>
      <p>• Area: +1 damage per <span class="stamina-point-cost">2SP</span> or <span class="magic-point-cost">1MP</span></p>
      <p>• Focused: +1 damage per <span class="stamina-point-cost">1SP</span> or +2 damage per <span class="magic-point-cost">1MP</span></p>
    `,
  },
];
