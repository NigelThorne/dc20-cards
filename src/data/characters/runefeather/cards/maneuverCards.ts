import type { CharacterCard } from '../../../../types';

export const maneuverCards: CharacterCard[] = [
  {
    id: "volley",
    title: "Volley",
    subtitle: "Maneuver",
    category: "maneuver",
    cost: [{ ap: 2 }],
    content: `
      <p><strong>Range:</strong> Ranged Weapon</p>
      <p><strong>Effect:</strong> Area Martial Attack vs AD of all targets in 2 Space Diameter Sphere (origin within Range).</p>
      <p><strong>Hit:</strong> Weapon damage</p>
      <p><span class="stamina-point-cost">2SP ↻</span> <strong>Damage:</strong> Damage +1</p>
      <p><span class="stamina-point-cost">2SP ↻</span> <strong>Area:</strong> Sphere diameter +1 Space</p>
      <p><span class="stamina-point-cost">1SP</span> <strong>Rain of Fire:</strong> Targets don't gain 1/2 Cover benefits</p>
      <p><span class="stamina-point-cost">2SP</span> <strong>Suppressive Fire:</strong> <span class="stat-reference">Charisma</span> Save or <span class="condition-status">Hindered</span> until end of their next turn</p>
    `,
  },
  {
    id: "heroic-extend-jump",
    title: "Heroic Extend Jump",
    subtitle: "Maneuver",
    category: "maneuver",
    cost: [{ ap: 1, sp: 1 }],
    content: `
      <p><strong>Base Action:</strong> Acrobatics Check (DC 10)</p>
      <p>• Success: Jump Distance +2 (+1 per 5 over DC)</p>
      <p>• Failure: Jump Distance +1</p>
      <p><span class="stamina-point-cost">1SP</span> <strong>Instant Jump:</strong> Standing Jump not halved</p>
      <p><span class="stamina-point-cost">1SP ↻</span> <strong>Increased Jump:</strong> Jump Distance +2</p>
      <p><span class="stamina-point-cost">1SP ↻</span> <strong>Heroic Landing:</strong> Reduce fall damage by 2</p>
    `,
  },
];
