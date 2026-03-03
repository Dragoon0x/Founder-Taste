---
name: font-picking
description: "Choose the right typeface without being a designer. Practical font decisions for founders. Use when picking fonts for a product, landing page, or brand, and you don't have a designer to ask."
---

# Font Picking

You don't need to know typography theory. You need to pick one good font and use it well.

## How to use

- `/font-picking` Get font recommendations for a product in this conversation.
- `/font-picking <product type>` Get specific font recommendations based on product context.

## Constraints

### The Safe Picks
- MUST default to one of these if you're unsure. They all work. They're all free. They're all battle-tested:
  - **Inter:** The default for a reason. Works for everything. If you pick Inter and use it well, nobody will ever say "the font is wrong."
  - **DM Sans:** Slightly more personality than Inter. Warmer, rounder. Good for consumer products.
  - **IBM Plex Sans:** Professional, structured. Good for B2B, dashboards, data products.
  - **Geist:** Modern, clean. Built by Vercel. Good for developer tools and tech products.
  - **Source Sans 3:** Adobe's workhorse. Excellent readability. Works for everything.

### Matching Font to Product
- Developer tools / technical: Inter, Geist, JetBrains Mono (for code)
- Consumer / friendly: DM Sans, Nunito, Outfit
- B2B / enterprise: IBM Plex Sans, Source Sans 3, Inter
- Editorial / content: Merriweather, Lora, Libre Baskerville (serif for reading)
- Premium / luxury: one distinctive display font for headlines + Inter or similar for body

### The Rules
- MUST use one font. Not two. Not three. One font with different weights (regular, medium, semibold, bold) gives you all the variety you need.
- MUST check that the font has at least 4 weights available. You need regular (400), medium (500), semibold (600), and bold (700) at minimum.
- MUST test the font at small sizes (14px body text). Many fonts look great in headlines and fall apart at body size.
- NEVER pick a font because it looks cool in a specimen. Pick it because it works at every size in your actual product.

### When to Use Two Fonts
- Only if: one is for headlines and one is for body, they contrast clearly (serif + sans-serif or display + neutral), and you can explain why one font wasn't enough.
- If you can't articulate the reason for two fonts, use one.

### Anti-Patterns
- Picking a display/decorative font for your entire product
- Using a different font on every page or section
- Choosing fonts by browsing Google Fonts randomly (start with the safe picks above)
- Using a thin weight (300) for body text (hard to read on most screens)
