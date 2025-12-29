import type { CharacterCard } from '../../../../types';

export const utilityCards: CharacterCard[] = [
  {
    id: "draconic-breath",
    title: "Draconic Breath",
    subtitle: "Dragonborn Action",
    category: "utility",
    cost: [{ ap: 2 }],
    content: `
      <p>Exhale destructive power. Once per Long Rest, regain on Initiative roll.</p>
      <p><strong>Area:</strong> Spell Attack vs AD in 3 Space Cone or 6 Space Line. Hit: 2 Draconic damage</p>
      <p><strong>Focused:</strong> Spell Attack vs PD of 1 target within 6 Spaces. Hit: 4 Draconic damage</p>
      <p><strong>Enhance:</strong> Before Spell Check, spend <span class="stamina-point-cost">SP</span>/<span class="magic-point-cost">MP</span> to increase damage:</p>
      <p>• Area: +1 damage per <span class="stamina-point-cost">2SP</span> or <span class="magic-point-cost">1MP</span></p>
      <p>• Focused: +1 damage per <span class="stamina-point-cost">1SP</span> or +2 damage per <span class="magic-point-cost">1MP</span></p>
    `,
  },
  {
    id: "familiar-stats",
    title: "[Familiar Name]",
    subtitle: "Familiar Companion",
    category: "utility",
    content: `
      <p><strong>Type:</strong> [Chosen Creature Type] | <strong>Size:</strong> Tiny</p>
      <div class="character-stats-box">
        <div><strong>HP:</strong> Shared | <strong>PD:</strong> 8 + CM | <strong>AD:</strong> 8 + CM</div>
        <div><strong>Speed:</strong> 5 | <strong>PM:</strong> Shared | <strong>Save DC:</strong> Shared</div>
        <div><strong>CM:</strong> Shared | <strong>MIG:</strong> 0 | <strong>AGI:</strong> 0</div>
        <div><strong>CHA:</strong> 0 | <strong>INT:</strong> 0</div>
      </div>
      <p><strong>Familiar Bond:</strong> Shares your HP. Both take damage from same source: only take 1 instance. Can't be targeted by Attacks while in same Space as you.</p>
      <p><strong>Shared Telepathy:</strong> Speak telepathically within 20 Spaces</p>
      <p><strong>Spell Delivery:</strong> Cast 1 Space range spells as if standing in familiar's Space (within 10 Spaces)</p>
      <hr>
      <p><strong>Familiar Traits (Chosen):</strong></p>
      <p>• [TRAIT 1 NAME]: [Brief description]</p>
      <p>• [TRAIT 2 NAME]: [Brief description]</p>
      <p><strong>Beast Traits (Chosen):</strong></p>
      <p>• [TRAIT 1 NAME]: [Brief description]</p>
      <p>• [TRAIT 2 NAME]: [Brief description]</p>
    `,
  },
  {
    id: "familiar-actions",
    title: "Familiar Actions",
    subtitle: "Companion Commands",
    category: "utility",
    content: `
      <p><strong>Minor - Pocket Dimension:</strong> Dismiss/summon from pocket dimension or anywhere on plane. Items left behind. Appears in nearest unoccupied Space.</p>
      <p><span class="action-point-cost">1AP</span> <strong>Shared Senses:</strong> Connect senses until end of turn. You become Deafened & Blinded. Ends if >20 Spaces apart.</p>
      <p><span class="action-point-cost">1AP</span> <strong>Command:</strong> Uses an Action. Can't Attack/Spell unless trait allows</p>
      <p style="margin-top: 8pt; margin-bottom: 2pt;"><strong>Combat:</strong> Acts on your turn</p>
      <p style="margin-top: 2pt; margin-bottom: 2pt;"><strong>Move (Free):</strong> When you Move</p>
      <p style="margin-top: 2pt; margin-bottom: 2pt;"><strong>Dodge (Auto):</strong> If not commanded, Dodges at turn end</p>
      <p style="margin-top: 2pt; margin-bottom: 2pt;"><strong>Shared MCP:</strong> Shares your MCP</p>
    `,
  },
];