---
name: dark-mode-decisions
description: "Whether to build dark mode, and how to not screw it up. Use when a founder is deciding whether to add dark mode, or when their dark mode looks muddy, washed out, or inconsistent."
---

# Dark Mode Decisions

Dark mode is not "invert the colors." It's a separate design problem. Decide if it's worth solving.

## How to use

- `/dark-mode-decisions` Evaluate whether dark mode makes sense and how to implement it.

## Constraints

### Should You Build It?
- Build dark mode if: your product is used for long sessions (code editors, reading apps, dashboards), your users explicitly ask for it, or your product is developer-facing (developers expect it).
- Skip dark mode if: you're pre-product-market-fit, you don't have a designer, your product is used in short bursts, or you're a B2B tool where nobody's asked for it.
- MUST ship a solid light mode first. A good light mode beats a mediocre dark mode every time.
- Dark mode done badly looks worse than no dark mode at all.

### If You Build It
- MUST NOT use pure black (#000) for backgrounds. Use #111, #171717, or #1a1a1a. Pure black creates too much contrast with text and feels like staring into a void.
- MUST NOT use pure white (#fff) for text on dark backgrounds. Use #e5e5e5 or #f5f5f5. Slightly off-white reduces eye strain.
- MUST reduce the saturation of your brand colors for dark mode. A vibrant blue on white becomes harsh on dark gray. Desaturate it 10-20%.
- MUST adjust elevation with lighter backgrounds, not shadows. In light mode, cards float with shadows. In dark mode, cards are slightly lighter than the background (#222 card on #111 background).
- MUST ensure all color roles still work. Green for success, red for error need to be visible against dark backgrounds.

### Common Dark Mode Mistakes
- Inverting colors programmatically without checking the result
- Using the same shadows from light mode (they're invisible on dark backgrounds)
- Keeping the same vibrant brand colors (they burn on dark backgrounds)
- Forgetting to update illustrations, screenshots, and embedded content
- Not testing with actual content (dark mode with lots of user images looks different than dark mode with text)

### Anti-Patterns
- Building dark mode before you have 100 paying users
- Using pure black anywhere
- Treating dark mode as a toggle without testing every screen
- Building dark mode because "every modern product has it" (not a reason)
