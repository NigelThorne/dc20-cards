import type { CharacterCard } from "../../../../types";

export const passiveCards: CharacterCard[] = [

  {
    id: "debilitating-strike",
    title: "Debilitating Strike",
    subtitle: "Rogue Feature",
    category: "passive",
    cost: [{ sp: 1 }],
    content: `
      <span class="passive-feature">FEATURE</span>
      <p>
        <strong>Trigger:</strong> Hit target with weapon attack
      </p>
      <p>
        <strong>Effect:</strong> Force target to make a <span class="stat-reference">Physical</span> Save (DC 14).
      </p>
      <p>
        <strong>Success:</strong> Target suffers 1 of the following
        effects of your choice until start of your next turn:
      </p>
      <p>
        • <span class="condition-status">Deafened</span>,
        <span class="condition-status">Exposed</span>,
        <span class="condition-status">Hindered</span>, or
        <span class="condition-status">Slowed 2</span>
      </p>
      <p>
        <strong>Failure:</strong> You waste the SP but deal normal
        attack damage.
      </p>
      <p>
        <em
          >A target can't be affected by the same option more
          than once at a time.</em
        >
      </p>
    `,
  },
  {
    id: "cheap-shot",
    title: "Cheap Shot",
    subtitle: "Rogue Feature",
    category: "passive",
    content: `
      <span class="passive-feature">FEATURE</span>
      <p>You deal +1 damage on Martial Attacks against a creature that fulfills at least one of the following:</p>
      <p>• It's Flanked or Prone</p>
      <p>• It has any Condition other than Invisible</p>
      <p>• You're Hidden from it</p>
    `,
  },
  {
    id: "roguish-finesse",
    title: "Roguish Finesse",
    subtitle: "Rogue Feature",
    category: "passive",
    content: `
      <span class="passive-feature">FEATURE</span>
      <p>
        <strong>Cunning Action:</strong> You gain movement equal
        to half your Speed when you take the
        <span class="action-reference">Disengage</span>,
        <span class="action-reference">Feint</span>, or
        <span class="action-reference">Hide</span> Actions. You can use
        this movement immediately before or after you take the
        Action.
      </p>
      <p>
        <strong>Skill Expertise:</strong> Your Skill Mastery
        Limit increases by 1, up to Grandmaster (+10). A Skill
        can only benefit from one increase to its Mastery limit.
      </p>
      <p>
        <strong>Multi-Skilled:</strong> You gain 1 Skill Point.
      </p>
    `,
  },
  {
    id: "cypher-speech",
    title: "Cypher Speech",
    subtitle: "Flavor Feature",
    category: "passive",
    content: `
      <span class="passive-feature">FEATURE</span>
      <p>You become Fluent in a Mortal Language of your choice.</p>
      <p>You understand how to speak in code with a specific demographic of your choice (such as upper society, lower society, a faction, etc.). Your coded messages can be concealed in normal conversation and written communications.</p>
      <p><strong>Coded Messages:</strong></p>
      <p>• Leave simple messages: "Safety", "Threat", or "Wealth"</p>
      <p>• Mark locations: cache, secret passageway, safehouse, or area of danger</p>
    `,
  },
];
