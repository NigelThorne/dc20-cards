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
    id: "savage-strike",
    title: "Savage Strike",
    subtitle: "Attack Maneuver",
    category: "maneuver",
    cost: [{ ap: 1 }, { sp: 1 }],
    content: `
      <p style="margin: 2px 0;"><strong>Range:</strong> Weapon or Unarmed Strike</p>
      <hr>
      <p style="margin: 2px 0;">Martial Attack vs PD + target makes Physical Save vs your Save DC.</p>
      <p style="margin: 2px 0;"><strong>Hit:</strong> Weapon damage.</p>
      <p style="margin: 2px 0;"><strong>Save Fail:</strong> Physical Vulnerability (1) for 1 Round.</p>
      <hr>
      <p style="margin: 2px 0;"><span class="stamina-point-cost">2SP ↻</span> <strong>Improved Vulnerability:</strong> Vulnerability +1</p>
      <p style="margin: 2px 0;"><span class="stamina-point-cost">2SP</span> <strong>Break Resistance:</strong> Target loses Physical Resistance for duration</p>
    `,
  },
];
