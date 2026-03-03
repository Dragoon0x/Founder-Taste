---
name: type-scale
description: "Set up a type scale that creates clear hierarchy without design expertise. Use when a founder's text all looks the same size, when headings don't stand out, or when the page feels flat."
---

# Type Scale

If everything is the same size, nothing is important. A type scale fixes that in 5 minutes.

## How to use

- `/type-scale` Set up a type scale for a product in this conversation.

## Constraints

### The Starter Scale
- MUST use this scale or something close to it. It works for 90% of products:
  - **Small/caption:** 12px
  - **Body:** 14-16px (16px for content-heavy, 14px for data-heavy)
  - **Subhead:** 18-20px
  - **Section heading:** 24px
  - **Page heading:** 32-36px
  - **Hero headline:** 48-64px
- MUST have clear jumps between sizes. 14px and 16px look almost identical. 14px and 20px look clearly different. The difference needs to be visible.

### Weight Rules
- MUST use weight to reinforce the scale, not replace it. A 14px bold heading next to 14px regular body creates confusion, not hierarchy.
- Regular (400): body text, descriptions, supporting content
- Medium (500): labels, navigation, subtle emphasis
- Semibold (600): subheadings, card titles, important UI elements
- Bold (700): page headings, hero headlines, CTAs
- NEVER use bold for body text. NEVER use regular weight for headings.

### Line Height
- Body text: 1.5-1.6 (a 16px font needs 24-26px line height)
- Headings: 1.2-1.3 (a 32px heading needs 38-42px line height)
- UI labels and buttons: 1.2-1.4
- MUST make headings tighter and body text looser. Same line height everywhere looks wrong.

### The Quick Test
- Squint at your page. Can you tell headings from body text instantly? If not, increase the size difference.
- Can you identify 3 clear levels of importance from text size alone? If not, your scale is too flat.

### Anti-Patterns
- More than 5-6 text sizes on a single screen (simplify)
- Using bold as the only way to create hierarchy (use size + weight together)
- Giant body text (18px+ for body text in a product UI is almost always too big)
- Tiny headings (if your heading is under 20px, it's not doing its job)
