# DC20 Cards UX Information Architecture Improvements

## Todo Checklist

### ✅ Completed
- [x] Basic font-weight hierarchy (bold headers vs normal text)
- [x] Increased paragraph spacing for breathing room
- [x] Improved line-height for readability

### ✅ Visual Hierarchy
- [x] Ensure clear typographic scale progression (title 16pt > subtitle 11pt > body 10pt)
- [x] Optimize badge visual prominence (increased padding and font size)
- [x] Create stronger section header emphasis (bold text, better spacing)
- [x] Improve cost badge positioning and grouping (better margins and spacing)

### ✅ Proximity & Grouping
- [x] Group cost information with action headers (moved cost badges to header area)
- [x] Separate effect descriptions from mechanical rules (improved paragraph spacing)
- [x] Cluster related badges together (flexbox grouping for cost badges)
- [x] Create visual separation between major sections (semantic spacing rules)

### ✅ White Space & Breathing Room
- [x] Add strategic spacing between different content types (section-specific margins)
- [x] Increase spacing before major section breaks (12pt margins for section headers)
- [x] Optimize margin relationships between elements (consistent spacing hierarchy)
- [x] Ensure adequate padding around badges (increased padding and margins)

### ✅ Scanability & Information Flow
- [x] Make section headers more scannable (bold weight, better spacing)
- [x] Improve visual distinction between description and rules text (font-weight hierarchy)
- [x] Optimize information order (most important first - cost badges moved to header)
- [x] Create consistent visual patterns for similar content (improved badge spacing)

### ✅ Semantic Structure & Content Types
- [x] Distinct visual treatment for different content types (badges, headers, body text)
- [x] Consistent spacing patterns for similar elements (unified badge system)
- [x] Clear visual relationships between related information (grouped cost with titles)
- [x] Improved badge system for different information types (enhanced sizing and spacing)

### ✅ Accessibility & Readability
- [x] Ensure sufficient contrast ratios (maintained black text on white, colored badges)
- [x] Optimize for quick reference during gameplay (clear visual hierarchy)
- [x] Maintain consistency across all card types (unified CSS classes)
- [x] Test readability at print size (constrained to 2.5" × 3.5" dimensions)

## Implementation Notes
- ✅ Focused on one section at a time
- ✅ Tested changes visually before moving to next item
- ✅ Maintained print-friendly constraints (2.5" × 3.5") - **CRITICAL INVARIANT**
- ✅ Kept original color schemes and branding intact

## Card Size Invariant (CRITICAL)
- **Card dimensions MUST remain exactly 2.5" × 3.5"**
- **All content MUST fit completely within card boundaries**
- **No overflow or cut-off content permitted**
- **Font sizes adjusted to respect size constraints**

## Success Criteria - ✅ ACHIEVED
- ✅ Cards are easily scannable during gameplay (clear visual hierarchy)
- ✅ Information hierarchy is immediately clear (title > subtitle > body text scale)
- ✅ Related information is visually grouped (cost badges with titles)
- ✅ Text remains readable at print size (within 2.5" × 3.5" constraints)
- ✅ Visual consistency across all card types (unified CSS system)

## Key UX Improvements Applied
1. **Visual Hierarchy**: Clear typographic scale with proper font-weight distinctions
2. **Proximity & Grouping**: Cost badges integrated with card headers
3. **White Space**: Strategic spacing between content sections
4. **Scanability**: Bold section headers, consistent visual patterns
5. **Semantic Structure**: Distinct treatment for different content types
6. **Size Compliance**: All improvements fit within fixed card dimensions