import type { CharacterCard } from '../../types';

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
      <p>• Auto-fail Physical Saves (except Poisons/Diseases)</p>
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
      <p>• Auto-fail Physical Saves (except Poisons/Diseases)</p>
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
];
