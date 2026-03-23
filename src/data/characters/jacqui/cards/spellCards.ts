import type { CharacterCard } from '../../../../types';

export const spellCards: CharacterCard[] = [
  {
    id: "death-bolt",
    title: "Death Bolt",
    subtitle: "Arcane • Divine • Nullification",
    category: "spell",
    cost: [{ ap: 1 }],
    tags: ["Curse", "Doomed", "Umbral"],
    content: `
      <p style="margin: 2px 0;"><strong>Range:</strong> 10 Spaces | <strong>Duration:</strong> Instantaneous</p>
      <hr>
      <p style="margin: 2px 0;">Ranged vs PD. <strong>Hit:</strong> 1 Umbral. Space Light -1 until end of turn.</p>
      <hr>
      <p style="margin: 2px 0;"><span class="action-point-cost">1AP ↻(max 2)</span> <strong>Range:</strong> +5 Spaces</p>
      <p style="margin: 2px 0;"><span class="action-point-cost">1AP ↻</span> <strong>Damage:</strong> +1</p>
      <p style="margin: 2px 0;"><span class="action-point-cost">XAP</span> <strong>Doom:</strong> <span class="stat-reference">CHA</span> Save. <strong>Fail:</strong> <span class="condition-status">Doomed</span> X.</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">1MP</span> <strong>Call of Grave:</strong> +d12 if Bloodied.</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">XMP</span> <strong>Wither:</strong> <span class="stat-reference">CHA</span> Save. <strong>Fail:</strong> <span class="condition-status">Cursed</span>, X Umbral/turn. Basic Curse removal ends.</p>
    `,
  },
  {
    id: "umbral-imbued",
    title: "Umbral Imbued",
    subtitle: "Arcane • Divine • Transmutation",
    category: "spell",
    cost: [{ ap: 1, mp: 1 }],
    tags: ["Blood", "Doomed", "Healing", "Strike", "Umbral", "Weapon"],
    content: `
      <p style="margin: 2px 0;"><strong>Range:</strong> Self | <strong>Duration:</strong> 1 Minute (Sustained)</p>
      <hr>
      <p style="margin: 2px 0;">+1 Umbral on Martial Attacks.</p>
      <hr>
      <p style="margin: 2px 0;"><span class="magic-point-cost">2MP ↻</span> <strong>Damage:</strong> +1 Umbral.</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">1MP</span> <strong>Effortless:</strong> No Sustain needed.</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">XMP</span> <strong>Dooming Strikes:</strong> 1/round, <span class="stat-reference">CHA</span> Save. <strong>Fail:</strong> <span class="condition-status">Doomed</span> X, 1 round.</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">XMP</span> <strong>Draining Strikes:</strong> 1/attack, spend X Rest Points, regain X HP.</p>
    `,
  },
  {
    id: "quicksand",
    title: "Quicksand",
    subtitle: "Primal • Transmutation",
    category: "spell",
    cost: [{ ap: 2, mp: 1 }],
    tags: ["Earth", "Hindered", "Illusion", "Motion", "Slowed", "Tethered"],
    content: `
      <p style="margin: 2px 0;;line-height: 1"><strong>Range:</strong> 5 Spaces | <strong>Duration:</strong> 1 Minute</p>
      <hr>
      <p style="margin: 2px 0;;line-height: 1">3 Space Sphere: quicksand. Creatures <span class="condition-status">Slowed</span> 2. Enter/start turn: <span class="stat-reference">Might</span> Save or <span class="condition-status">Hindered</span>. <strong>Cast:</strong> Check vs <span class="stat-reference">Might</span> Save = <span class="condition-status">Hindered</span>.</p>
      <hr>
      <p style="margin: 2px 0;;line-height: 1"><span class="action-point-cost">1AP ↻(max 2)</span> <strong>Range:</strong> +5 Spaces</p>
      <p style="margin: 2px 0;;line-height: 1"><span class="magic-point-cost">1MP ↻</span> <strong>Area:</strong> +1 Space</p>
      <p style="margin: 2px 0;;line-height: 1"><span class="magic-point-cost">1MP</span> <strong>Grasping Sand:</strong> Hindered also <span class="condition-status">Tethered</span>. <span class="action-point-cost">1AP</span>: <span class="stat-reference">Might</span> Save ends.</p>
      <p style="margin: 2px 0;;line-height: 1"><span class="magic-point-cost">1MP</span> <strong>False Appearance:</strong> 1 hour, looks normal. Nature Check vs DC discerns.</p>
    `,
  },
  {
    id: "vampiric-touch",
    title: "Vampiric Touch",
    subtitle: "Arcane • Divine • Nullification",
    category: "spell",
    cost: [{ ap: 1 }],
    tags: ["Blood", "Doomed", "Healing", "Slowed", "Umbral"],
    content: `
      <p style="margin: 2px 0;"><strong>Range:</strong> 1 Space | <strong>Duration:</strong> Instantaneous</p>
      <hr>
      <p style="margin: 2px 0;">Melee vs PD. <strong>Hit:</strong> 1 Umbral. Spend 1 Rest Point → 1 HP.</p>
      <hr>
      <p style="margin: 2px 0;"><span class="action-point-cost">1AP ↻(max 2)</span> <strong>Range:</strong> +1 Space</p>
      <p style="margin: 2px 0;"><span class="action-point-cost">1AP</span> <strong>Leeching Grab:</strong> <span class="stat-reference">Might</span> Save. <strong>Fail:</strong> <span class="condition-status">Slowed</span> 1 round.</p>
      <p style="margin: 2px 0;"><span class="action-point-cost">1AP ↻</span> <strong>Doomed:</strong> <span class="stat-reference">CHA</span> Save. <strong>Fail:</strong> <span class="condition-status">Doomed</span> 1 minute.</p>
      <p style="margin: 2px 0;"><span class="magic-point-cost">1MP ↻</span> <strong>Life Drain:</strong> +1 damage, regain 1 HP (no Rest Points).</p>
    `,
  },
];
