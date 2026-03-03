---
name: simplify-first
description: "When something looks wrong, the fix is usually removing things, not adding them. Use when a founder's UI feels busy, cluttered, or overwhelming and the instinct is to add more visual treatment."
---

# Simplify First

Before adding anything to fix a design, try removing something.

## How to use

- `/simplify-first` Apply simplification constraints to any UI in this conversation.

## Constraints

### The Rule
- MUST try removing elements before adding new ones. The fix for a busy screen is rarely "add a divider." It's "remove three things."
- MUST question every element: does this need to exist on this screen right now? If the answer isn't an immediate yes, remove it.
- MUST reduce to the single action you want the user to take per screen. Everything else is either supporting that action or competing with it.
- NEVER add visual decoration (borders, shadows, gradients, icons) to fix a layout problem. Fix the layout.

### What to Remove First
- Borders between elements that could be separated by space alone
- Icons that repeat what the text already says
- Duplicate navigation (top nav + sidebar + breadcrumbs + footer nav)
- "Nice to have" features on the primary screen (move them to settings or a secondary view)
- Explanatory text that exists because the UI isn't self-evident (fix the UI instead)

### The Founder Instinct Problem
- Founders add features because they're afraid users won't see value. The result: everything screams for attention and nothing gets it.
- MUST fight the instinct to "show everything." The homepage doesn't need every feature. The dashboard doesn't need every metric. The pricing page doesn't need every plan detail.
- A product that does one thing clearly feels more valuable than a product that does ten things confusingly.

### The Simplification Test
1. Cover half the screen. Can users still complete the primary task?
2. Remove all borders. Does the layout still make sense with space alone?
3. Remove all icons. Does the meaning survive?
4. Remove every other section. Is the core message clearer?
5. If yes to any of these: you had too much.

### Anti-Patterns
- Adding a tooltip to explain a confusing element instead of simplifying the element
- Adding a sidebar to organize clutter instead of reducing the clutter
- Adding an onboarding tour because the product is too complex to figure out
- Treating "feature-rich" as a design goal (it's an engineering goal, not a UX goal)
