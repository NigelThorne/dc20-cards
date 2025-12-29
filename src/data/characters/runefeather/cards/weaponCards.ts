import type { CharacterCard } from '../../../../types';

export const weaponCards: CharacterCard[] = [
  {
    id: "hand-stonebow",
    title: "Hand Stonebow",
    subtitle: "Crossbow/Sling",
    category: "weapon",
    content: `
      <p><strong>Damage:</strong> 2 B/P | <strong>Range:</strong> 15/45</p>
      <p><strong>Properties:</strong> Ammo, Reload, Deft, Multi-Faceted</p>
      <p>• <strong>Reload:</strong> <span class="action-point-cost">1AP</span> or <span class="stamina-point-cost">1SP</span></p>
      <p>• <strong>Deft:</strong> No DisADV when Prone</p>
      <p>• <strong>Multi-Faceted:</strong> Use both style enhancements, choose damage type</p>
      <p><span class="action-point-cost">1AP</span> <strong>Crossbow Style - Accuracy:</strong> Add d4 to Attack Check</p>
      <p><span class="action-point-cost">1AP</span> <strong>Sling Style - Hinder:</strong> Agility Save or Hindered until end of target's next turn</p>
    `,
  },
  {
    id: "crossbow-blowgun",
    title: "Blowgun (Needle)",
    subtitle: "Crossbow",
    category: "weapon",
    content: `
      <p><strong>Damage:</strong> 1 P | <strong>Range:</strong> 15/45</p>
      <p><strong>Properties:</strong> Two-Handed, Ammo, Deft, Silent</p>
      <p>• <strong>Deft:</strong> No DisADV when Prone</p>
      <p>• <strong>Silent:</strong> Remain Unheard while Hidden when making Ranged Attacks</p>
      <p><span class="action-point-cost">1AP</span> <strong>Crossbow Style - Accuracy:</strong> Add d4 to Attack Check</p>
    `,
  },
  {
    id: "sword-throwing-dagger",
    title: "Throwing Dagger",
    subtitle: "Sword",
    category: "weapon",
    content: `
      <p><strong>Damage:</strong> 1 S | <strong>Range:</strong> 5/10 (Toss)</p>
      <p><strong>Properties:</strong> Concealable, Toss</p>
      <p>• <strong>Concealable:</strong> Drawing doesn't provoke Opportunity Attacks. ADV on Attack if drawn as part of Attack (once per creature per Combat)</p>
      <p><span class="action-point-cost">1AP</span> <strong>Sword Style - Accuracy:</strong> Add d4 to Attack Check</p>
    `,
  },
];
