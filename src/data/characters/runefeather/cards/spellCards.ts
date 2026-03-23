import type { CharacterCard } from '../../../../types';

export const spellCards: CharacterCard[] = [
  {
    id: "poison-bolt",
    title: "Poison Bolt",
    subtitle: "Arcane • Primal • Elemental",
    category: "spell",
    cost: [{ ap: 1 }],
    tags: ["Ailment", "Hindered", "Impaired", "Poison"],
    content: `
      <p style="margin: 2px 0;"><strong>Range:</strong> 10 Spaces | <strong>Duration:</strong> Instantaneous</p>
      <hr>
      <p style="margin: 2px 0;">Ranged Spell Attack vs PD. <strong>Hit:</strong> 1 Poison damage.</p>
      <p style="margin: 2px 0; font-style: italic; opacity: 0.7;">Passive: Plant life in target's Space wilts or dies where the Spell touches.</p>
      <hr>
      <p style="margin: 2px 0;"><span class="action-point-cost">1AP ↻</span> <strong>Damage:</strong> +1 damage</p>
      <p style="margin: 2px 0;"><span class="action-point-cost">1AP ↻(max 2)</span> <strong>Range:</strong> +5 Spaces</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">1MP</span> <strong>Debilitating Poison:</strong> Repeated Might Save. Fail: Basic Poison 1 min. Poisoned → Hindered or Impaired (your choice).</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">XMP</span> <strong>Deadly Poison:</strong> Repeated Might Save. Fail: Poisoned 1 min. Takes X Poison dmg at start of each turn.</p>
    `,
  },
];
