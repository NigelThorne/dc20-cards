import type { CharacterCard } from "../../types";

export const utilityCards: CharacterCard[] = [
  {
    id: "character-summary",
    title: "Runefeather",
    subtitle: "Level 1 Rogue • Beastborn",
    category: "utility",
    content: `
      <div class="character-stats-box">
        <div>
          <span class="stat-label">Speed:</span> 5 |
          <span class="stat-label">Jump:</span> 1
        </div>
      </div>
      <div class="character-stats-box defense-stats">
        <div style="text-align: center; margin-bottom: 8px;"><strong>Defenses</strong></div>
        <div style="display: flex; gap: 6px;">
          <div style="flex: 1; text-align: center;">
            <div class="ability-section-header" style="margin-bottom: 4px;">Precision</div>
            <div style="font-size: 1.8em; font-weight: bold; margin: 4px 0;">14</div>
            <div style="font-size: 0.85em;">H: 19</div>
            <div style="font-size: 0.85em;">B: 24</div>
          </div>
          <div style="flex: 1; text-align: center;">
            <div class="ability-section-header" style="margin-bottom: 4px;">Area</div>
            <div style="font-size: 1.8em; font-weight: bold; margin: 4px 0;">10</div>
            <div style="font-size: 0.85em;">H: 15</div>
            <div style="font-size: 0.85em;">B: 20</div>
          </div>
        </div>
      </div>
      <div class="character-stats-box">
        <div>
          <span class="stat-label">Attack/Check:</span> +4 |
          <span class="stat-label">Save DC:</span> 14
        </div>
        <div>
          <span class="stat-label">Initiative:</span> +4 |
          <span class="stat-label">Death Threshold:</span> 4
        </div>
      </div>
    `,
  },
  {
    id: "ability-scores",
    title: "Ability Scores",
    subtitle: "Stats & Skills",
    category: "utility",
    content: `
      <div class="character-stats-box">
        <strong>Prime:</strong> 3 | <strong>Awareness:</strong> 5
      </div>

      <div style="display: flex; gap: 6px;">
        <div style="flex: 1;">
          <div class="ability-section-header" style="margin-bottom: 8px; text-align: center;">Physical</div>

          <div class="character-stats-box" style="margin-bottom: 8px; min-height: 100px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ddd; padding: 4px 0;">
              <span style="font-size: 1.2em; font-weight: bold;">Might</span>
              <span style="font-size: 1.2em; font-weight: bold;">-2</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 0; font-size: 0.8em; color: #666;">
              <span>save</span>
              <span>0</span>
            </div>
            <div style="font-size: 0.9em; margin: 6px 0;">
              <div>• Athletics: -2</div>
              <div>• Intimidation: -2</div>
            </div>
          </div>

          <div class="character-stats-box" style="min-height: 100px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ddd; padding: 4px 0;">
              <span style="font-size: 1.2em; font-weight: bold;">Agility</span>
              <span style="font-size: 1.2em; font-weight: bold;">+3</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 0; font-size: 0.8em; color: #666;">
              <span>save</span>
              <span>5</span>
            </div>
            <div style="font-size: 0.9em; margin: 6px 0;">
              <div>• Acrobatics: +3</div>
              <div>• Trickery: +7</div>
              <div>• Stealth: +5</div>
            </div>
          </div>
        </div>

        <div style="flex: 1;">
          <div class="ability-section-header" style="margin-bottom: 8px; text-align: center;">Mental</div>

          <div class="character-stats-box" style="margin-bottom: 8px; min-height: 100px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ddd; padding: 4px 0;">
              <span style="font-size: 1.2em; font-weight: bold;">Charisma</span>
              <span style="font-size: 1.2em; font-weight: bold;">+2</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 0; font-size: 0.8em; color: #666;">
              <span>save</span>
              <span>4</span>
            </div>
            <div style="font-size: 0.9em; margin: 6px 0;">
              <div>• Animal: +4</div>
              <div>• Influence: +4</div>
              <div>• Insight: +2</div>
            </div>
          </div>

          <div class="character-stats-box" style="min-height: 100px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #ddd; padding: 4px 0;">
              <span style="font-size: 1.2em; font-weight: bold;">Intelligence</span>
              <span style="font-size: 1.2em; font-weight: bold;">+1</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 2px 0; font-size: 0.8em; color: #666;">
              <span>save</span>
              <span>3</span>
            </div>
            <div style="font-size: 0.9em; margin: 6px 0;">
              <div>• Investigation: +1</div>
              <div>• Medicine: +1</div>
              <div>• Survival: +3</div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "basic-combat-actions",
    title: "Basic Combat Actions",
    subtitle: "Attack Options",
    category: "utility",
    content: `
      <p>
        <strong>Attack:</strong>
        <span class="action-point-cost">1AP</span> - Standard attack
      </p>
      <p>
        <strong>Disarm:</strong>
        <span class="action-point-cost">1AP</span> - Attack check vs
        martial/trickery, object falls to ground
      </p>
      <p>
        <strong>Grapple:</strong>
        <span class="action-point-cost">1AP</span> - Athletic vs martial
      </p>
      <p>
        <strong>Shove:</strong>
        <span class="action-point-cost">1AP</span> - Athletic vs martial,
        can knock prone, push target around/knock prone
      </p>
      <p>
        <strong>Tackle:</strong>
        <span class="action-point-cost">1AP</span> - Move 2+ squares, then
        athletic vs martial. Success: grapple and push
      </p>
    `,
  },
  {
    id: "movement-defense",
    title: "Movement & Defense",
    subtitle: "Defensive Options",
    category: "utility",
    content: `
      <p>
        <strong>Disengage:</strong>
        <span class="action-point-cost">1AP</span> - DisADV on opp.
        attacks until next turn
        <em>(+3 move +<span class="stamina-point-cost">SP</span>)</em>
      </p>
      <p>
        <strong>Full Disengage:</strong>
        <span class="action-point-cost">2AP</span> - Immune to opp.
        attacks until next turn
      </p>
      <p>
        <strong>Dodge:</strong>
        <span class="action-point-cost">1AP</span> - DisADV on next
        attack/grapple until next turn
      </p>
      <p>
        <strong>Full Dodge:</strong>
        <span class="action-point-cost">2AP</span> - DisADV on all
        attacks/grapples until next turn
      </p>
      <p>
        <strong>Hide:</strong>
        <span class="action-point-cost">1AP</span> - Stealth vs awareness
        to hide from 1+ creatures
        <em>(+3 move +<span class="stamina-point-cost">SP</span>)</em>
      </p>
    `,
  },
  {
    id: "utility-actions",
    title: "Utility Actions",
    subtitle: "General Actions",
    category: "utility",
    content: `
      <p>
        <strong>Move:</strong> <span class="action-point-cost">1AP</span>
      </p>
      <p>
        <strong>Help:</strong>
        <span class="action-point-cost">1AP</span> - Grant creature help
        die until your next turn. Must declare type of check and
        meet conditions.
        <em>First help: d8, second: d6, third: d4</em>
      </p>
      <p>
        <strong>Interact with Object:</strong>
        <span class="action-point-cost">1AP</span>
      </p>
      <p>
        <strong>Spell:</strong>
        <span class="action-point-cost">1AP</span> or more
      </p>
      <p>
        <strong>Held Actions:</strong> Delay a specific action
        until something happens before start of next turn
      </p>
    `,
  },
  {
    id: "weapons-attacks",
    title: "Weapons & Attacks",
    subtitle: "Combat Stats",
    category: "utility",
    content: `
      <div class="character-stats-box">
        <div><strong>Long Bow</strong></div>
        <div>2 handed, Ammo, Unwieldy, Impact, 30/90</div>
        <div>
          <span class="stat-label">Damage:</span> 1 Piercing
        </div>
      </div>
      <div class="character-stats-box">
        <div><strong>Chain Whip</strong></div>
        <div>Reach, Impact</div>
        <div>
          <span class="stat-label">Damage:</span> 1 Slashing
        </div>
      </div>
      <div class="character-stats-box">
        <div><strong>Throwing Dagger</strong></div>
        <div>Concealed, Toss (5/10)</div>
        <div>
          <span class="stat-label">Damage:</span> 1 Slashing
        </div>
      </div>
      <div class="character-stats-box">
        <div>
          <span class="stat-label">Attack Bonus:</span> +4
        </div>
        <div><span class="stat-label">Save DC:</span> 14</div>
      </div>
    `,
  },
  {
    id: "trades-languages",
    title: "Trades & Languages",
    subtitle: "Non-Combat Skills",
    category: "utility",
    content: `
      <div class="character-stats-box">
        <div><strong>Trades</strong></div>
        <div>Tinkering: +5</div>
        <div>Carpentry: +5</div>
        <div>Arcana: +1, History: +1, Nature: +1</div>
        <div>Occultism: +1, Religion: +1</div>
        <div>Gaming: +1</div>
      </div>
      <div class="character-stats-box">
        <div><strong>Languages</strong></div>
        <div>
          <span class="stat-label">Fluent:</span> Bird,
          Beastman, Orc
        </div>
        <div><span class="stat-label">Limited:</span> Dwarf</div>
      </div>
    `,
  },
  {
    id: "stamina-points",
    title: "Stamina Points",
    subtitle: "Rogue Resource",
    category: "utility",
    content: `
      <div class="character-stats-box">
        <div><strong>Uses</strong></div>
        <div>• Spend on Techniques, Class Features</div>
        <div>• Spend in place of AP for Martial Maneuvers</div>
        <div>• Debilitating Strike</div>
      </div>
      <div class="character-stats-box">
        <div>
          <strong
            >Regain <span class="stamina-point-cost">SP</span></strong
          >
        </div>
        <div>
          • Spend <span class="action-point-cost">2AP</span> → gain
          <span class="stamina-point-cost">1SP</span>
        </div>
        <div>• Regain all when combat ends</div>
        <div>
          <strong
            >Regain 1/2 Max
            <span class="stamina-point-cost">SP</span> when:</strong
          >
        </div>
        <div>• Hit a Flanked or Prone target.</div>
        <div>• Hit a target affected by any Conditions.</div>
        <div>• Hit a target you're Hidden from.</div>
        <div>• Use Cunning action.</div>
      </div>
    `,
  },
  {
    id: "tracking-sheet",
    title: "Tracking Sheet",
    subtitle: "Use Dry Erase Marker",
    category: "utility",
    isTracking: true,
    content: `
      <div class="resource-tracking-header">Health (9)</div>
      <div class="resource-tracking-icons">❤️❤️❤️❤️❤️❤️❤️❤️❤️</div>
      <div class="resource-tracking-header">Temp HP</div>
      <div class="resource-tracking-icons">🤍🤍🤍🤍🤍🤍🤍🤍🤍</div>
      <div class="resource-tracking-header">Stamina (1)<span class="inline-stamina-icon">🏃</span></div>
      <div class="resource-tracking-header">Grit (4)</div>
      <div class="resource-tracking-icons">💫💫💫💫</div>
      <div class="resource-tracking-header">Rest (9)</div>
      <div class="resource-tracking-icons">😴😴😴😴😴😴😴😴😴</div>
      <div class="resource-tracking-header">Exhaustion <em>(Death at 6)</em></div>
      <div class="resource-tracking-icons">💀💀💀💀💀☠️</div>
      <div class="rules-reminder">Exhaustion: -X to checks, saves, speed, save DC</div>
    `,
  },
];
