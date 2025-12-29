import type { CharacterCard } from "../../../../types";

export const conditionCards: CharacterCard[] = [
  {
    id: "poisoned",
    title: "Poisoned",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• You're Impaired (DisADV on Physical Checks)</p>
      <p>
        • You take 1 Poison damage at the start of each of your
        turns
      </p>
      <p>
        <strong>Medicine Action:</strong> Spend
        <span class="action-point-cost">1AP</span> to touch a creature and
        tend to its wounds. Make a Medicine Check against the DC
        of the Poison. Success: You end the Poison on the
        target.
      </p>
    `,
  },
  {
    id: "exhaustion",
    title: "Exhaustion",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects per stack:</strong></p>
      <p>• Penalty equal to X on all Checks and Saves</p>
      <p>• Speed and Save DC reduced by X</p>
      <p><strong>Death at 6 stacks</strong></p>
      <p>
        You immediately die if you reach 6 stacks of Exhaustion.
      </p>
    `,
  },
  {
    id: "unconscious",
    title: "Unconscious",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• You're Incapacitated</p>
      <p>• Not aware of surroundings</p>
      <p>• Auto-fail <span class="stat-reference">Physical</span> Saves (except Poisons/Diseases)</p>
      <p>• Attacks against you have ADV</p>
      <p>• Attacks within 1 Space are Critical Hits</p>
      <p>
        You immediately drop whatever you are holding and fall
        Prone.
      </p>
    `,
  },
  {
    id: "slowed",
    title: "Slowed",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> Every 1 Space you move costs an
        extra X Spaces of movement.
      </p>
    `,
  },
  {
    id: "taunted",
    title: "Taunted",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You have DisADV on attacks
        against targets other than the source.
      </p>
    `,
  },
  {
    id: "frightened",
    title: "Frightened",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• You can't willingly move closer to the source</p>
      <p>
        • You have DisADV on all Checks made against the source
      </p>
    `,
  },
  {
    id: "exposed",
    title: "Exposed",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> Attacks against you have ADV X.
      </p>
    `,
  },
  {
    id: "stunned",
    title: "Stunned",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> Your current and maximum AP is
        reduced by X.
      </p>
      <p><strong>While Stunned 4+:</strong></p>
      <p>• You're Incapacitated</p>
      <p>• Attacks against you have ADV</p>
      <p>• Auto-fail <span class="stat-reference">Physical</span> Saves (except Poisons/Diseases)</p>
    `,
  },
  {
    id: "bleeding",
    title: "Bleeding",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You take X True damage at the
        start of each of your turns.
      </p>
      <p>
        <strong>Ending:</strong> All stacks end when you're
        subjected to an effect that restores HP, or a creature
        can attempt to remove stacks with Medicine Action (DC 10
        Medicine Check, success removes 1 stack per 5).
      </p>
    `,
  },
  {
    id: "deafened",
    title: "Deafened",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>
        • You can't hear (see the Unheard section for more
        information)
      </p>
      <p>• You have Resistance (Half) to Sonic damage</p>
    `,
  },
  {
    id: "hindered",
    title: "Hindered",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You have DisADV X on Attacks.
      </p>
    `,
  },
  {
    id: "dazed",
    title: "Dazed",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You have DisADV X on Mental Checks.
      </p>
    `,
  },
  {
    id: "disoriented",
    title: "Disoriented",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You have DisADV X on Mental Saves.
      </p>
    `,
  },
  {
    id: "doomed",
    title: "Doomed",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• Your current and maximum HP is reduced by the value of X</p>
      <p>• When an effect restores your HP, you regain X less HP than normal</p>
      <p>
        <strong>Ending Doomed:</strong> All stacks of the Condition end when
        you complete a Long Rest.
      </p>
    `,
  },
  {
    id: "burning",
    title: "Burning",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You take X Fire damage at the start of
        each of your turns.
      </p>
      <p>
        <strong>Ending Burning:</strong> All stacks of the Condition end when
        you're doused by at least 1 gallon (4 liters) of water or fully
        immersed in water. Alternatively, a creature within 1 Space can spend
        <span class="action-point-cost">1AP</span> to remove 1 stack of the Condition.
      </p>
    `,
  },
  {
    id: "charmed",
    title: "Charmed",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• Your Charmer has ADV on Charisma Checks made against you</p>
      <p>• You can't target your Charmer with harmful Attacks or effects</p>
    `,
  },
  {
    id: "blinded",
    title: "Blinded",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• You can't see (see the Unseen section for more information)</p>
      <p>• All terrain is considered Difficult Terrain for you unless you're guided by another creature</p>
    `,
  },
  {
    id: "immobilized",
    title: "Immobilized",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You can't move and you have DisADV on
        <span class="stat-reference">Agility</span> Saves.
      </p>
    `,
  },
  {
    id: "impaired",
    title: "Impaired",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You have DisADV X on Physical Checks.
      </p>
    `,
  },
  {
    id: "incapacitated",
    title: "Incapacitated",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• You can't move or speak</p>
      <p>• You can't spend Actions Points or use Minor Actions</p>
    `,
  },
  {
    id: "intimidated",
    title: "Intimidated",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You have DisADV on all Checks made
        against the source.
      </p>
    `,
  },
  {
    id: "invisible",
    title: "Invisible",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        Creatures can't see you unless they have the ability to see
        the Invisible (see the Unseen section for more information).
      </p>
    `,
  },
  {
    id: "paralyzed",
    title: "Paralyzed",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• You're Incapacitated</p>
      <p>• You automatically fail <span class="stat-reference">Physical</span> Saves (except against Poisons and Diseases)</p>
      <p>• Attacks against you have ADV</p>
      <p>• Attacks made within 1 Space are considered Critical Hits</p>
    `,
  },
  {
    id: "restrained",
    title: "Restrained",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• You're Immobilized</p>
      <p>• Your Attacks have DisADV</p>
      <p>• Attacks against you have ADV</p>
    `,
  },
  {
    id: "surprised",
    title: "Surprised",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> Your current and maximum AP is reduced by 2.
      </p>
    `,
  },
  {
    id: "petrified",
    title: "Petrified",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>You turn to stone. Count as object and creature.</p>
      <p><strong>Effects:</strong></p>
      <p>• Not aware of surroundings • 10x heavier</p>
      <p>• Incapacitated • Auto-fail <span class="stat-reference">Physical</span> Saves</p>
      <p>• Attacks against you have ADV</p>
      <p>• Bludgeoning Vulnerability (Double)</p>
      <p>• Resistance (Half) to all other damage</p>
      <p>• Existing conditions suspended</p>
      <p>• Immune to gaining new conditions</p>
    `,
  },
  {
    id: "terrified",
    title: "Terrified",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p><strong>Effects:</strong></p>
      <p>• You must spend your turns trying to move as far away as you can from the source as possible</p>
      <p>• The only Action you can take is the Move Action to try to run away, or the Dodge Action if you are prevented from moving or there's nowhere farther to move</p>
    `,
  },
  {
    id: "tethered",
    title: "Tethered",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        You are Tethered to a creature or Space. While Tethered,
        you can't move farther than the specified Spaces from the
        location of your Tether.
      </p>
    `,
  },
  {
    id: "weakened",
    title: "Weakened",
    subtitle: "Condition",
    category: "condition",
    content: `
      <span class="condition-status">CONDITION</span>
      <p>
        <strong>Effect:</strong> You have DisADV X on <span class="stat-reference">Physical</span> Saves.
      </p>
    `,
  },
];
