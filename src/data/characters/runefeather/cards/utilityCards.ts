import type { CharacterCard } from '../../../../types';

export const utilityCards: CharacterCard[] = [
  {
    id: "character-summary",
    title: "Runefeather",
    subtitle: "Level 1 Rogue • Beastborn",
    category: "utility",
    tags: ["cover-card"],
    content: `
      <div style="text-align: center;" class="ability-section-header">Movement</div>
      <div class="character-stats-box character-movement-box">
        <div>
          <span class="stat-label">Speed:</span> 5 |
          <span class="stat-label">Jump:</span> 3
        </div>
        <div>
          <span class="stat-label">Fly:</span> full speed |
          <span class="stat-label">Fly up:</span> 1/2 speed
        </div>
      </div>
      <div style="text-align: center; margin-top: 8px;" class="ability-section-header">Defenses</div>
      <div style="display: flex; gap: 6px;">
        <div style="flex: 1;">
          <div class="character-stats-box defense-stats area-defense-box" style="text-align: center;">
            <div class="ability-section-header" style="margin-bottom: 4px;">Precision</div>
            <div style="font-size: 1.8em; font-weight: bold; margin: 4px 0;">14</div>
            <div style="font-size: 0.85em;">H: 19</div>
            <div style="font-size: 0.85em;">B: 24</div>
          </div>
        </div>
        <div style="flex: 1;">
          <div class="character-stats-box defense-stats precision-defense-box" style="text-align: center;">
            <div class="ability-section-header" style="margin-bottom: 4px;">Area</div>
            <div style="font-size: 1.8em; font-weight: bold; margin: 4px 0;">10</div>
            <div style="font-size: 0.85em;">H: 15</div>
            <div style="font-size: 0.85em;">B: 20</div>
          </div>
        </div>
      </div>
      <div class="character-stats-box character-combat-stats-box" style="margin-top: 6px;">
        <div>
          <span class="stat-label">Attack/Check:</span> +4 |
          <span class="stat-label">Save DC:</span> 14
        </div>
        <div>
          <span class="stat-label">Initiative:</span> +4 |
          <span class="stat-label">Death Threshold:</span> 4
        </div>
      </div>
      <div class="character-stats-box character-traits-box" style="margin-top:11px;">
        <div><strong>🌙 Prowler:</strong> ADV on Stealth Checks while in Darkness</div>
        <div><strong>👁️ Darkvision:</strong> 10 Spaces</div>
      </div>
    `,
  },
  {
    id: "ability-scores",
    title: "Ability Scores",
    subtitle: "Stats & Skills",
    category: "utility",
    content: `


      <div style="display: flex; gap: 6px;">
        <div style="flex: 1;">
          <div class="ability-section-header" style="text-align: center;">Physical</div>

          <div class="character-stats-box might-ability-box" style="margin-bottom: 8px; min-height: 100px;">
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

          <div class="character-stats-box agility-ability-box" style="min-height: 100px;">
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
          <div class="ability-section-header" style="text-align: center;">Mental</div>

          <div class="character-stats-box charisma-ability-box" style="margin-bottom: 8px; min-height: 100px;">
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

          <div class="character-stats-box intelligence-ability-box" style="min-height: 100px;">
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

      <div class="character-stats-box prime-awareness-box" style="margin-top: 8px">
        <strong>Prime:</strong> 3 | <strong>Awareness:</strong> 5
      </div>
    `,
  },
  {
    id: "beastborn-bird",
    title: "Beastborn: Bird",
    subtitle: "Racial Features",
    category: "utility",
    content: `
      <p>(1) <strong>Darkvision:</strong> 10 Spaces</p>
      <p>(1) <strong>Prowler:</strong> ADV Stealth in Darkness</p>
      <p>(2) <strong>Glide Speed:</strong> Wings glide and slow descent</p>
      <p>• No Controlled Fall damage</p>
      <p>• Glide horizontally</p>
      <p>• <s>End turn midair: Fall 4 Spaces</s></p>
      <p>(2) <strong>Limited Flight:</strong> (requires Glide Speed)</p>
      <p>• Ascend: 2 movement → 1 Space up</p>
      <p>• Hover: Maintain altitude (replaces fall)</p>
    `,
  },

  {
    id: "trades-languages",
    title: "Trades & Languages",
    subtitle: "Non-Combat Skills",
    category: "utility",
    content: `
      <div class="ability-section-header" style="text-align: center; margin-bottom: 8px;">Trades</div>
      <div class="character-stats-box" style="margin-bottom: 12px;">
        <div>Arcana: +1</div>
        <div>Carpentry: +5</div>
        <div>Gaming: +1</div>
        <div>History: +1</div>
        <div>Nature: +1</div>
        <div>Occultism: +1</div>
        <div>Religion: +1</div>
        <div>Tinkering: +5</div>
      </div>
      <div class="ability-section-header" style="text-align: center; margin-bottom: 8px;">Languages</div>
      <div class="character-stats-box">
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
        <div>• Hit a target with any Conditions.</div>
        <div>• Hit a target you're Hidden from.</div>
        <div>• Use Cunning action. <span class="action-reference">Disengage</span> <span class="action-reference">Feint</span> <span class="action-reference">Hide</span></div>
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
      <div class="resource-tracking-header">Stamina (2)<span class="inline-stamina-icon">🏃</span></div>
      <div class="resource-tracking-header">Grit (4)</div>
      <div class="resource-tracking-icons">💫💫💫💫</div>
      <div class="resource-tracking-header">Temp HP</div>
      <div class="resource-tracking-icons">🤍🤍🤍🤍🤍🤍🤍🤍🤍</div>
      <div class="resource-tracking-header">Health (6)</div>
      <div class="resource-tracking-icons">❤️❤️❤️❤️❤️❤️</div>
      <div class="resource-tracking-header">Rest (6)</div>
      <div class="resource-tracking-icons">😴😴😴😴😴😴</div>
      <div class="resource-tracking-header">Exhaustion <em>(Death at 6)</em></div>
      <div class="resource-tracking-icons">💀💀💀💀💀☠️</div>
      <div class="rules-reminder">Exhaustion: -X to checks, saves, speed, save DC</div>
    `,
  },

  {
    id: "basic-combat-actions",
    title: "Basic Combat Actions",
    subtitle: "Attack Options",
    category: "utility",
    content: `
      <p>
        <span class="action-point-cost">1AP</span> <strong>Attack:</strong> Standard attack
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Disarm:</strong> Attack check vs
        martial/trickery, object falls to ground
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Grapple:</strong> Athletic vs martial
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Shove:</strong> Athletic vs martial,
        can knock prone, push target around/knock prone
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Tackle:</strong> Move 2+ squares, then
        athletic vs martial. Success: grapple and push
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Taunt:</strong> Influence vs Charisma. Target has DisADV when targeting anyone but you
      </p>
    `,
  },
  {
    id: "martial-enhancements",
    title: "Martial Enhancements",
    subtitle: "Combat Options",
    category: "utility",
    content: `
      <p>When you make a Martial Attack you can add enhancements before the Attack Check.</p>
      <hr>
      <p><span class="action-point-cost">1AP ↻</span>/<span class="stamina-point-cost">1SP ↻</span> <strong>Damage:</strong> Attack deals +1 damage against 1 target</p>
      <p><span class="action-point-cost">1AP ↻</span>/<span class="stamina-point-cost">1SP ↻</span> <strong>Range:</strong> +1 Space (Melee) or +5 Spaces (Ranged). Once per attack only</p>
      <p><span class="action-point-cost">1AP ↻</span>/<span class="stamina-point-cost">1SP ↻</span> <strong>Daze:</strong> Target makes <span class="stat-reference">Might</span> Save or <span class="condition-status">Dazed</span> until end of their next turn</p>
    `,
  },
  {
    id: "movement-defense",
    title: "Movement & Defense",
    subtitle: "Defensive Options",
    category: "utility",
    content: `
      <p>
        <span class="action-point-cost">1AP</span> <strong>Disengage:</strong> DisADV on opp.
        attacks until next turn
        <em>(+3 move +<span class="stamina-point-cost">SP</span>)</em>
      </p>
      <p>
        <span class="action-point-cost">2AP</span> <strong>Full Disengage:</strong> Immune to opp.
        attacks until next turn
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Dodge:</strong> DisADV on next
        attack/grapple until next turn
      </p>
      <p>
        <span class="action-point-cost">2AP</span> <strong>Full Dodge:</strong> DisADV on all
        attacks/grapples until next turn
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Hide:</strong> Stealth vs awareness
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
        <span class="action-point-cost">1AP</span> <strong>Move:</strong>
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Help:</strong> Grant creature help
        die until your next turn. Must declare type of check and
        meet conditions.
        <em>First help: d8, second: d6, third: d4</em>
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Interact with Object:</strong>
      </p>
      <p>
        <span class="action-point-cost">1AP</span> <strong>Spell:</strong> or more
      </p>
      <p>
        <strong>Held Actions:</strong> Delay a specific action
        until something happens before start of next turn
      </p>
    `,
  },
];