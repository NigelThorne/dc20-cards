import type { CharacterCard } from '../../../../types';

export const spellCards: CharacterCard[] = [
  {
    id: "heal",
    title: "Heal",
    subtitle: "Divine • Invocation",
    category: "spell",
    cost: [{ ap: 1, mp: 1 }],
    content: `
      <p><strong>Range:</strong> 5 Spaces | <strong>Duration:</strong> Instant</p>
      <hr>
      <p><strong>DC 15 Spell Check:</strong></p>
      <table style="width: 100%; font-size: 0.9em; border-collapse: collapse;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">&lt;15</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">15</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">Every 5>15</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">Crit</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">2</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">3</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">+1</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">+2</td>
        </tr>
      </table>
      <p><span class="action-point-cost">1AP ↻(max 2)</span> <strong>Range:</strong> +5 Spaces</p>
      <p><span class="magic-point-cost">1MP ↻</span> <strong>Increased Healing:</strong> 1 target +2 HP</p>
      <p><span class="magic-point-cost">1MP ↻</span> <strong>Chain Heal:</strong> +1 target within 3 Spaces of original. Additional targets +2 HP. Multiple uses: choose within 3 Spaces of previous target</p>
    `,
  },
  {
    id: "summon-familiar",
    title: "Summon Familiar",
    subtitle: "Arcane/Divine/Primal • Conjuration",
    category: "spell",
    cost: [{ ap: 1, mp: 1 }],
    content: `
      <p><strong>Range:</strong> 1 Space | <strong>Duration:</strong> Until 0 HP or dismissed</p>
      <hr>
      <p>Summon Tiny familiar (chosen creature type, not Giant/Humanoid). Max 1 at a time. Recasting replaces current. <strong>While summoned: Max MP -1</strong></p>
      <hr>
      <p><span class="magic-point-cost">1MP  ↻</span> <strong>Additional Traits</strong>: Grant familiar 2 points of Familiar/Beast Traits (no Negative Traits)</p>
    `,
  },
  {
    id: "death-ward",
    title: "Death Ward",
    subtitle: "Divine • Invocation",
    category: "spell",
    cost: [{ ap: 1, mp: 1 }],
    content: `
      <p><strong>Range:</strong> 1 Space | <strong>Duration:</strong> 10 Minutes</p>
      <hr>
      <p>DC 15 Spell Check. When reduced to 0 HP: +Temp HP before damage ends.</p>
      <table style="width: 100%; font-size: 0.9em; border-collapse: collapse;">
        <tr>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">&lt;15</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">15</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">Every 5>15</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">3</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">4</td>
          <td style="border: 1px solid #ddd; padding: 2px; text-align: center;">+1</td>
        </tr>
      </table>
      <p><span class="action-point-cost">1AP ↻(max 2)</span> <strong>Range:</strong> +5 Spaces</p>
      <p><span class="magic-point-cost">1MP ↻</span> <strong>Duration</strong> (Sustained): 10 min → 1 hr → 8 hr → Long Rest</p>
      <p><span class="magic-point-cost">1MP ↻</span> <strong>Additional Temp HP:</strong> +3 HP</p>
      <p><span class="magic-point-cost">1MP ↻</span> <strong>Doomed Protection:</strong> Remove up to 2 Doomed stacks</p>
    `,
  },
  {
    id: "psi-bolt",
    title: "Psi Bolt",
    subtitle: "Arcane/Divine • Enchantment",
    category: "spell",
    cost: [{ ap: 1 }],
    content: `
      <p><strong>Range:</strong> 10 Spaces | <strong>Duration:</strong> Instant</p>
      <hr>
      <p style="margin-top: 2pt;">Ranged Spell Attack vs PD. <strong>Hit:</strong> 1 Psychic damage. <strong>Untraceable:</strong> Leaves no trace</p>
      <hr>
      <p style="margin-top: 2pt; margin-bottom: 2pt;"><span class="action-point-cost">1AP ↻(max 2)</span> <strong>Range:</strong> +5 Spaces</p>
      <p style="margin-top: 2pt; margin-bottom: 2pt;"><span class="action-point-cost">1AP ↻</span> <strong>Damage:</strong> +1</p>
      <p style="margin-top: 2pt; margin-bottom: 2pt;"><span class="action-point-cost">1AP</span> <span class="condition-status">Dazed</span> for 1 round <span class="stat-reference">INT</span> Save</p>
      <p style="margin-top: 2pt; margin-bottom: 2pt;"><span class="action-point-cost">1AP</span> <span class="condition-status">Intimidated</span>for 1 round <span class="stat-reference">Mental</span> Save</p>
      <p style="margin-top: 2pt; margin-bottom: 2pt;"><span class="action-point-cost">1AP</span> <strong>Crushing Silence</strong> for 1 round <span class="stat-reference">INT</span> Save (can't speak/telepathy)</p>
    `,
  },
  {
    id: "chaos-bolt",
    title: "Chaos Bolt",
    subtitle: "Arcane • Transmutation",
    category: "spell",
    cost: [{ ap: 1, mp: 1 }],
    content: `
      <p><strong>Range:</strong> 10 Spaces | <strong>Duration:</strong> Instant</p>
      <hr>
      <p>Roll d12 for damage type. Ranged Spell Attack vs PD while target makes Intelligence Save.</p>
      <p><strong>Hit:</strong> 2 damage (rolled type) | <strong>Save Failure:</strong> Rolled effect (see Chaos Bolt Table)</p>
      <hr>
      <p><span class="action-point-cost">1AP ↻(max 2)</span> <strong>Range:</strong> +5 Spaces</p>
      <p><span class="action-point-cost">1AP ↻</span> <strong>Damage:</strong> +1</p>
      <p><span class="magic-point-cost">2MP ↻</span> <strong>Unstable Surge:</strong> +1 target within 5 Spaces of original. Same attack. Re-roll type each. Multiple uses: within 5 Spaces of previous</p>
    `,
  },
  {
    id: "chaos-bolt-table",
    title: "Chaos Bolt Table",
    subtitle: "D12 Reference",
    category: "utility",
    content: `
      <p><strong>Roll d12 for Damage Type & Save Failure Effect:</strong></p>
      <div class="character-stats-box" style="font-size: 0.85em;">
        <div><strong>1 - Bludgeoning:</strong> Pushed 1 Space (+1 Space per 5 failed by)</div>
        <div><strong>2 - Piercing:</strong> Can't take Reactions for 1 round</div>
        <div><strong>3 - Slashing:</strong> Bleeding for 1 minute</div>
        <div><strong>4 - Cold:</strong> Slowed for 1 round</div>
        <div><strong>5 - Corrosive:</strong> Hindered for 1 round</div>
        <div><strong>6 - Fire:</strong> Burning for 1 minute</div>
        <div><strong>7 - Lightning:</strong> Stunned until start of their turn</div>
        <div><strong>8 - Poison:</strong> Impaired for 1 round</div>
        <div><strong>9 - Psychic:</strong> Dazed for 1 round</div>
        <div><strong>10 - Radiant:</strong> Attacks vs target add d4 to check for 1 round</div>
        <div><strong>11 - Umbral:</strong> Doomed for 1 round</div>
        <div><strong>12 - True:</strong> Exposed for 1 round</div>
      </div>
    `,
  },
];
