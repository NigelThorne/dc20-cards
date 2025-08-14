# DC20 Character Card Writing Guidelines

## Card Design Principles

### 1. Scanability First
- **At-a-glance clarity**: Players should immediately understand what the card does
- **Action-focused language**: Use verbs that describe what the character can do
- **Front-load benefits**: Put the most important information first

### 2. Information Hierarchy
- **Bold section headers**: Use `<strong>` tags for key sections (Effect:, Success:, Failure:, etc.)
- **Bullet points**: Use • for lists of abilities or effects
- **Logical flow**: Organize content from most to least important

### 3. Size Constraints (CRITICAL)
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
- Use standard badge classes: `action-point-cost`, `stamina-point-cost`

### Content Sections

#### Passive Features
```html
<span class="passive-feature">FEATURE</span>
<p><strong>Abilities:</strong></p>
<p>• Clear, action-focused bullet points</p>
```

#### Maneuvers
```html
<span class="action-point-cost">1AP</span>
<p><strong>Effect:</strong> What happens when you use this</p>
<p><strong>Success:</strong> Additional benefits on successful use</p>
<p><strong>Failure:</strong> Consequences of failure (if any)</p>
```

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

## Writing Style Guidelines

### Language Rules
1. **Use active voice**: "You gain" not "Is gained"
2. **Be specific**: "1 of the following" not "some of the following" 
3. **Use consistent terminology**: Stick to game terms
4. **Eliminate fluff**: Every word should serve a purpose

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
- `cost-separator`: "/" between AP and SP costs

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
- **Cypher Speech**: Good bullet-point ability listing
- **Taunt**: Clear effect/success structure
- **Debilitating Strike**: Proper condition reference formatting

Remember: These cards are tools for gameplay, not literature. Clarity and usability trump eloquent descriptions every time.