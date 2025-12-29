# DC20 Character Card Writing Guidelines

## Card Design Principles

### 1. Cards are REFERENCE Materials, Not Rulebooks
- **Quick lookup during play**: Players need to scan info in <2 seconds during combat
- **Brevity over completeness**: Remove explanatory text - players can look up full rules if needed
- **Essential mechanics only**: Cost, check type, outcome - nothing more unless critical
- **No flavor text**: Save space for mechanics. These are tools, not story cards.

### 2. Scanability First
- **At-a-glance clarity**: Players should immediately understand what the card does
- **Action-focused language**: Use verbs that describe what the character can do
- **Front-load benefits**: Put the most important information first

### 3. Information Hierarchy
- **Bold section headers**: Use `<strong>` tags for key sections (Effect:, Success:, Failure:, etc.)
- **Bullet points**: Use • for lists of abilities or effects
- **Logical flow**: Organize content from most to least important
- **Cost badges first**: Always place cost badges at the START of action/enhancement lines

### 4. Size Constraints (CRITICAL)
- **Fixed dimensions**: Cards MUST fit within 2.5" × 3.5" (MTG proxy size)
- **Content limits**: If text doesn't fit, edit content - never change card size
- **Test at print size**: Ensure readability when physically printed

## Content Structure

### Card Header
```html
<h3 class="card-title">Card Name</h3>
<p class="card-subtitle">Card Type/Source</p>
```

### Cost Information
- **Cost placement**: Place cost badges on the LEFT side of card header
- **Title alignment**: Right-align card titles to make room for costs
- **Rationale**: When fanning cards left, top-left corner is most visible and costs are critical for quick decision-making
- Use standard badge classes: `action-point-cost`, `stamina-point-cost`, `magic-point-cost`
- **Cost badge order in header**: AP / SP / MP (when multiple present)
- **In-line costs**: Always place cost badges FIRST on enhancement/action lines
</context>

### Brevity Guidelines
1. **Remove redundant costs**: Don't repeat costs that are already in the card header
2. **Cut explanatory phrases**: "You understand how to" → just state what you can do
3. **Use abbreviations**: "versus" → "vs", "Attack Defense" → "AD", "Precision Defense" → "PD"
4. **Compress sentences**: "The target takes the damage of your Weapon" → "Weapon damage"
5. **Remove obvious context**: If it's on an action card with 1AP cost, don't say "You can spend 1 AP to..."
6. **Eliminate transitional phrases**: Get straight to the mechanics

### Content Sections

#### Passive Features
```html
<span class="passive-feature">FEATURE</span>
<p><strong>Abilities:</strong></p>
<p>• Clear, action-focused bullet points</p>
```

#### Maneuvers and Actions
```html
<p><strong>Effect:</strong> What happens when you use this</p>
<p><strong>Success:</strong> Additional benefits on successful use</p>
<p><strong>Failure:</strong> Consequences of failure (if any)</p>
<hr>
<p><span class="action-point-cost">1AP</span> <strong>Enhancement Name:</strong> Brief description</p>
<p><span class="stamina-point-cost">2SP</span> <strong>Another Enhancement</strong> (Repeatable): Brief description</p>
```

**Key Pattern**: Cost badges go FIRST on each enhancement line, not after the name.

#### Skills
```html
<span class="skill-check">SKILL CHECK</span>
<p><strong>Effect:</strong> What the skill enables</p>
```

#### Conditions
```html
<span class="condition-status">CONDITION</span>
<p><strong>Effect:</strong> What this condition does</p>
```

#### Reactions
```html
<span class="reaction-trigger">TRIGGER</span>
<p><strong>Effect:</strong> Your response to the trigger</p>
```

#### Spells
```html
<p><strong>Range:</strong> 5 Spaces | <strong>Duration:</strong> Instantaneous</p>
<p><strong>Tags:</strong> Healing, Damage, etc.</p>
<hr>
<p>Brief description of spell effect.</p>
<p><strong>Check:</strong> Spell Check DC</p>
<p><strong>Success:</strong> Effect on success</p>
<h3>Spell Enhancements</h3>
<p><span class="magic-point-cost">1MP</span> <strong>Enhancement Name</strong> (Repeatable): Description</p>
```

#### Weapons
```html
<p><strong>Damage:</strong> 2 B/P | <strong>Range:</strong> 15/45</p>
<p><strong>Properties:</strong> Ammo, Reload, Deft</p>
<p>• <strong>Property Name:</strong> Brief explanation of non-obvious properties only</p>
<p><span class="action-point-cost">1AP</span> <strong>Weapon Style - Enhancement:</strong> Effect</p>
```

## Writing Style Guidelines

### Language Rules
1. **Use active voice**: "You gain" not "Is gained"
2. **Be specific**: "1 of the following" not "some of the following" 
3. **Use consistent terminology**: Stick to game terms
4. **Eliminate fluff**: Every word should serve a purpose
5. **Be ruthlessly brief**: If you can cut a word without losing meaning, cut it
6. **Use abbreviations**: vs, PD, AD, DC, HP, etc. - players know these
7. **Remove articles where possible**: "The target" → "Target" (when clear)
8. **No flavor text on action cards**: Save that for lore documents

### Content Organization
1. **Most important first**: Key mechanical benefits at the top
2. **Group related info**: Keep similar effects together
3. **Clear sections**: Use bold headers to separate different aspects
4. **Examples when helpful**: Include specific examples in parentheses

### Bad Examples (DON'T DO)
```html
<!-- Too wordy, buries the benefit -->
<p>You understand how to speak in code with slum dwellers. Your coded messages can be concealed in normal conversation and written communications. This allows you to leave simple messages...</p>

<!-- Vague section headers -->
<p><strong>Description:</strong> This ability lets you do various things</p>

<!-- Passive voice -->
<p>Damage is dealt to the target</p>

<!-- Cost badge at the end -->
<p><strong>Damage:</strong> The damage increases by 1 (2 SP, Repeatable)</p>

<!-- Redundant costs -->
<p><strong>Cost:</strong> Extend Jump Action (1 AP)</p>
<!-- ^^ Cost is already in card header! -->

<!-- Too verbose -->
<p><strong>Effect:</strong> Make an Area Martial Attack against the AD of every target within a 2 Space Diameter Sphere. The Sphere's Point of Origin must be within Range.</p>
```

### Good Examples (DO THIS)
```html
<!-- Clear, scannable abilities -->
<p><strong>Abilities:</strong></p>
<p>• Speak in code with slum dwellers</p>
<p>• Hide messages in normal conversation</p>

<!-- Specific section headers -->
<p><strong>Effect:</strong> Deal 2d6 damage to target</p>

<!-- Active voice -->
<p>You deal 2d6 damage to the target</p>

<!-- Cost badge at the FRONT -->
<p><span class="stamina-point-cost">2SP</span> <strong>Damage</strong> (Repeatable): Damage +1</p>

<!-- No redundant cost info -->
<p><strong>Base Action:</strong> Acrobatics Check (DC 10)</p>
<!-- Cost is already in card header -->

<!-- Compressed and clear -->
<p><strong>Effect:</strong> Area Martial Attack vs AD of all targets in 2 Space Diameter Sphere (origin within Range).</p>

<!-- Use abbreviations -->
<p><strong>Check:</strong> Trickery vs Insight</p>
<p><strong>Success:</strong> ADV and +1 to hit against target before next turn</p>

<!-- Separators for clarity -->
<hr>
<p><span class="action-point-cost">1AP</span> <strong>Style Name:</strong> Brief effect</p>
```

## Badge System

### Standard Badges
- `passive-feature`: Green badge for passive abilities
- `skill-check`: Purple badge for skill-related content
- `reaction-trigger`: Pink badge for reaction triggers
- `condition-status`: Orange badge for conditions
- `action-reference`: Blue badge for action references

### Cost Badges
- `action-point-cost`: Red badge (e.g., "1AP", "2AP")
- `stamina-point-cost`: Blue badge (e.g., "1SP", "3SP")
- `magic-point-cost`: Purple badge (e.g., "1MP", "2MP")
- `cost-separator`: "/" between multiple cost types

**CRITICAL**: Cost badges must appear at the FRONT of enhancement/action lines:
```html
<!-- CORRECT -->
<p><span class="stamina-point-cost">1SP</span> <strong>Enhancement:</strong> Effect</p>

<!-- WRONG -->
<p><strong>Enhancement:</strong> Effect (1 SP)</p>
```

## Technical Requirements

### HTML Structure
- Use semantic HTML tags
- Wrap badges in appropriate span classes
- Use `<strong>` for emphasis, not `<b>`
- Use `<p>` tags for paragraphs, not `<br>`

### Layout Requirements
- Cost badges must appear on the LEFT side of the card header
- Card titles must be RIGHT-ALIGNED for optimal fanning visibility
- This layout prioritizes cost visibility when cards are fanned left-to-right

### CSS Classes
- Follow existing class naming conventions
- Don't create new CSS classes without updating the stylesheet
- Test that new content works with existing styles

### Visual Separators
- Use `<hr>` to separate introductory text from enhancement lists
- Use `<h3>` for major section headers like "Maneuver Enhancements" or "Spell Enhancements"
- Keep consistent spacing between related items

### Print Compatibility
- All content must be visible in print preview
- Colors must print clearly (high contrast)
- Text must be readable at 300 DPI

## Quality Checklist

Before finalizing a card, verify:

### Content
- [ ] Purpose is clear within 2 seconds of reading
- [ ] Most important information is first
- [ ] No unnecessary words or fluff
- [ ] Examples are specific and helpful
- [ ] Terminology is consistent with other cards

### Structure
- [ ] Appropriate badges are used
- [ ] Section headers are bold and descriptive
- [ ] Related information is grouped together
- [ ] Logical flow from top to bottom

### Technical
- [ ] Content fits completely within card boundaries
- [ ] HTML is valid and semantic
- [ ] CSS classes are correct
- [ ] Prints clearly and legibly
- [ ] Maintains visual consistency with other cards

### Accessibility
- [ ] High contrast between text and background
- [ ] Font sizes are readable at print size
- [ ] Information hierarchy is clear
- [ ] Quick reference during gameplay

## Common Mistakes to Avoid

1. **Verbose descriptions**: Players need quick reference, not lore
2. **Burying the lead**: Don't hide key benefits in the middle of paragraphs
3. **Inconsistent formatting**: Follow established patterns
4. **Overflowing content**: Content must fit - edit ruthlessly if needed
5. **Vague language**: Be specific about what the card enables
6. **Missing section headers**: Always use bold headers for major sections
7. **Inconsistent terminology**: Use the same terms as existing cards

## Success Metrics

A well-written card should:
- **Enable quick decisions**: Players can determine usefulness in <5 seconds
- **Prevent confusion**: No ambiguity about what it does
- **Fit perfectly**: No content clipping or overflow
- **Match the set**: Consistent with existing card style and tone
- **Support gameplay**: Optimized for reference during play

## Examples of Excellence

Refer to these cards as models for different types:
- **Cheap Shot**: Concise passive with clear bullet conditions
- **Volley**: Good use of abbreviations and compressed language
- **Heroic Extend Jump**: Effective use of horizontal rule separator
- **Hand Stonebow**: Cost badges at front of weapon style lines
- **Heal Spell**: Clean spell format with enhancements
- **Martial Enhancements**: Clear explanation followed by hr separator and enhancement list

## Card Categories and Their Colors

### Button and Border Colors
- **Utility**: Blue (#007acc)
- **Weapons**: Brown (#8B4513)
- **Passives**: Green (#27ae60)
- **Maneuvers**: Red (#dc3545)
- **Skills**: Purple (#8e44ad)
- **Spells**: Purple (#9b59b6)
- **Reactions**: Pink (#ff60ff)
- **Conditions**: Orange (#f39c12)

### Cost Badge Colors
- **Action Points (AP)**: Red (#b21e2f)
- **Stamina Points (SP)**: Blue (#003d7a)
- **Magic Points (MP)**: Purple (#7b2d9e)

## Final Reminder

**These cards are REFERENCE CARDS for active play, not rulebooks.**

During gameplay, players need to:
1. See the cost instantly (badges at top-left when fanned)
2. Understand what it does in 2 seconds
3. Know what check to roll
4. See the outcome clearly

Everything else is secondary. If you're choosing between "complete explanation" and "fits on card clearly," choose clarity and brevity every time. Players can reference the rulebook for edge cases - the card just needs the core mechanic.

Remember: These cards are tools for gameplay, not literature. Clarity and usability trump eloquent descriptions every time.