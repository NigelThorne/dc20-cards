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
      <hr/>
      <p>Ranged Spell Attack vs PD while target makes Intelligence Save.</p>
      <p>On Hit: <strong>2 damage (role D12 for damage type)</strong></p>
      <p>If they fail save: <strong>Rolled effect (see Chaos Bolt Table)</strong></p>
      <hr/>
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
  {
    id: "solar-beam",
    title: "Solar Beam",
    subtitle: "Divine • Primal • Invocation",
    category: "spell",
    cost: [{ ap: 2 }],
    tags: ["Blinded", "Burning", "Light", "Radiant"],
    content: `
      <p style="margin: 2px 0;"><strong>Range:</strong> Self | <strong>Duration:</strong> 1 Minute (Sustained)</p>
      <hr>
      <p style="margin: 2px 0;">1 Charge on cast +1/Sustain (max 4). <strong>Sunlight:</strong> <span class="action-point-cost">1AP</span> → +1 Charge (1/turn).</p>
      <p style="margin: 2px 0;"><strong>Attack:</strong> <span class="action-point-cost">1AP</span> Release all. Area vs AD, 4 Space Line. 4 Charges = ADV. <strong>Hit:</strong> 1 Radiant/Charge.</p>
      <p style="margin: 2px 0;"><strong>Passive:</strong> Spaces you occupy +1 Light.</p>
      <hr>
      <p style="margin: 0 0;"><span class="magic-point-cost">1MP ↻</span> <strong>Damage:</strong> +1</p>
      <p style="margin: 0 0;"><span class="magic-point-cost">1MP ↻</span> <strong>Area:</strong> +6 Spaces</p>
      <p style="margin: 0 0;"><span class="magic-point-cost">1MP ↻</span> <strong>Burning Radiance:</strong> <span class="stat-reference">PHY</span> Save. <span class="condition-status">Burning</span> 1 min (Radiant).</p>
      <!--<p style="margin: 0px 0;"><span class="magic-point-cost">4MP</span> <strong>Blinding:</strong> <span class="stat-reference">PHY</span> Save. Fail: <span class="condition-status">Blinded</span> 1 Round.</p> -->
    `,
  },
  {
    id: "chaos-torrent",
    title: "Chaos Torrent",
    subtitle: "Arcane • Transmutation",
    category: "spell",
    cost: [{ ap: 2, mp: 1 }],
    tags: ["Chaos", "Enfeeble"],
    content: `
      <p style="margin: 2px 0;"><strong>Range:</strong> Self | <strong>Duration:</strong> Instantaneous</p>
      <hr>
      <p style="margin: 2px 0;">Spiraling surge of warped energy erupts in 4 Space Line. Spell Check vs <span class="stat-reference">INT</span> Save of each target. <strong>Check Success:</strong> Target rolls d6 on table below.</p>
      <hr>
      <p style="margin: 2px 0;"><span class="magic-point-cost">1MP</span> <strong>Remote:</strong> Range 5 Spaces, Line starts @ chosen space.</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">1MP ↻</span> <strong>Length:</strong> +6 Spaces</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">1MP</span> <strong>Width:</strong> +1 Space</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">2MP</span> <strong>Chaos Surge:</strong> Each target rolls twice, suffers both. Same number: reroll until 2 different.</p>
    `,
  },
  {
    id: "chaos-torrent-table",
    title: "Chaos Torrent Table",
    subtitle: "D6 Reference",
    category: "utility",
    content: `
      <p><strong>D6 Effect:</strong></p>
      <div class="character-stats-box" style="font-size: 0.85em;">
        <div><strong>1:</strong> Can't take Reactions until end of next turn.</div>
        <div><strong>2:</strong> <span class="condition-status">Slowed 2</span> for 1 Round.</div>
        <div><strong>3:</strong> Must immediately make Melee Martial Attack as Reaction vs random creature in Melee range.</div>
        <div><strong>4:</strong> Teleported d4 Spaces in random direction.</div>
        <div><strong>5:</strong> <span class="condition-status">Weakened</span> for 1 Round.</div>
        <div><strong>6:</strong> <span class="condition-status">Disoriented</span> for 1 Round.</div>
      </div>
    `,
  },
  {
    id: "sanctuary",
    title: "Sanctuary",
    subtitle: "Divine • Nullification",
    category: "spell",
    cost: [{ ap: 1, mp: 1 }],
    tags: ["Embolden", "Spirit", "Ward"],
    content: `
      <p style="margin: 0 0; line-height: 0.8"><strong>Range:</strong> 5 Spaces | <strong>Duration:</strong> 1 Minute</p>
      <hr>
      <p style="margin: 0 0; line-height: 1.1">Choose creature in range. Attacks vs target have DisADV. Target gains no benefit for 1 Round if it Attacks, targets creature with Check, or casts spell forcing a Save.</p>
      <hr>
      <p style="margin: 0 0; line-height: 0.8"><span class="action-point-cost">1AP ↻(max 2)</span> <strong>Range:</strong> +5 Spaces</p>
      <p style="margin: 0 0; line-height: 0.8"><span class="magic-point-cost">1MP</span> <strong>Save Resistance:</strong> Creature gains ADV on Saves.</p>
      <p style="margin: 0 0; line-height: 1.1"><span class="magic-point-cost">1MP</span> <strong>Possession Protection:</strong> Target can't be possessed. Already possessed: repeat Save at start of each turn.</p>
      <p style="margin: 0 0; line-height: 1"><span class="magic-point-cost">1MP</span> <strong>Enforced Peace:</strong> Creature attacking target makes <span class="stat-reference">INT</span> Save vs Spell DC. <strong>Fail:</strong> Can't perform Attack (still spends resources). Doesn't prevent target from being targeted by this Spell for 1 Round.</p>
    `,
  },
];
