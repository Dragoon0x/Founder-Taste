---
name: palette-basics
description: "Build a working color palette without a designer. The minimum viable palette for any product. Use when a founder needs to pick colors for their product and doesn't know where to start."
---

# Palette Basics

You need 5 colors. Not 15. Five.

## How to use

- `/palette-basics` Build a minimum viable color palette for a product in this conversation.

## Constraints

### The Minimum Viable Palette
- MUST have exactly these 5 color categories:
  1. **Background:** white or very light gray (#fff, #fafafa, #f5f5f5)
  2. **Text:** near-black (#111, #1a1a1a, #222)
  3. **Primary/brand:** one color. Blue is safe. Use it for buttons, links, active states.
  4. **Success/error:** green (#16a34a) for success, red (#dc2626) for errors. These are functional, not decorative.
  5. **Border/divider:** light gray (#e5e5e5, #d4d4d4)
- That's it. This palette works for any product at any stage. Everything else is extra.

### Choosing Your Primary Color
- Blue (#2563eb) is safe. It's professional, trustworthy, and accessible.
- Purple (#7c3aed) works for creative and consumer products.
- Green (#16a34a) works for finance, health, sustainability.
- Orange (#ea580c) is energetic but be careful with accessibility.
- MUST check that your primary color has enough contrast against white for button text. White text on your primary color must meet 4.5:1.
- NEVER use your primary color for more than 10-15% of the screen. It's an accent, not a foundation.

### Gray Scale
- MUST pick 3-4 grays from a single scale: light (#f5f5f5), medium (#a3a3a3), dark (#525252), near-black (#171717)
- Use light gray for backgrounds and subtle containers
- Use medium gray for secondary text and placeholders
- Use dark gray for less important body text
- NEVER mix warm and cool grays. Pick one temperature and stay with it.

### Anti-Patterns
- More than one brand color before you have product-market fit
- Using saturated colors for large background areas (burns the eyes)
- Picking colors from a palette generator without testing them in your actual UI
- Different blue for links, buttons, and active states (use the same blue)
