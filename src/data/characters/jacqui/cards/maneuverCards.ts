import type { CharacterCard } from '../../../../types';

export const maneuverCards: CharacterCard[] = [
  {
    id: "pathcarver",
    title: "Pathcarver",
    subtitle: "Maneuver",
    category: "maneuver",
    cost: [{ ap: 2, sp: 1 }],
    content: `
      <p style="margin: 2px 0;;line-height: 1.1"><strong>Range:</strong> 4 Space Line (Self)</p>
      <hr>
      <p style="margin: 2px 0;;line-height: 1.1">Area Martial Attack with Melee Weapon or Unarmed Strike vs AD of every target in 4 Space Line. <strong>Hit:</strong> Weapon or Unarmed Strike damage.</p>
      <p style="margin: 2px 0;;line-height: 1.1">After Attacking, move to any Space within 1 Space of area without provoking Opportunity Attacks from targets and without spending movement.</p>
      <p style="margin: 2px 0;;line-height: 1.1"><strong>Reach Weapon:</strong> Extend Point of Origin 1 Space away. Line must extend away from you.</p>
      <hr>
      <p style="margin: 2px 0;;line-height: 1.1"><span class="stamina-point-cost">2SP ↻</span> <strong>Damage:</strong> +1</p>
      <p style="margin: 2px 0;;line-height: 1.1"><span class="stamina-point-cost">1SP ↻</span> <strong>Increase Length:</strong> Line length +2 Spaces</p>
      <p style="margin: 2px 0;;line-height: 1.1"><span class="stamina-point-cost">2SP ↻</span> <strong>Carved Path:</strong> ...</p>
    `,
  },
];
