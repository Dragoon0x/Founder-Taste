---
name: ship-or-hold
description: "The hardest founder decision: is this ready to ship? A framework for deciding when something is good enough vs. when it needs more work. Use when stuck between shipping something imperfect and polishing forever."
---

# Ship or Hold

Perfectionism kills products. But shipping garbage kills trust. Here's how to tell the difference.

## How to use

- `/ship-or-hold` Evaluate whether a product or feature is ready to ship.

## Constraints

### The Decision Framework
- Ask these questions in order. Stop at the first "no":
  1. **Does the core action work?** Can the user do the one thing this feature exists for? If no: hold.
  2. **Is it clear?** Can a new user figure out what to do without explanation? If no: hold.
  3. **Does it handle failure?** What happens when something goes wrong? If the answer is "nothing" or "it breaks": hold.
  4. **Does it look intentional?** Not perfect. Intentional. Does it look like someone made decisions, or like nobody thought about it? If it looks accidental: hold.
  5. **Would you be embarrassed if a competitor screenshotted it?** If yes: hold. If no: ship.

### What's Shippable Imperfect
- Missing animations and transitions (add later)
- Only one theme (light mode is fine for launch)
- Basic error messages that are correct but not polished
- Limited empty states (functional but not delightful)
- Desktop-only initially if your audience is desktop-first
- Missing settings and preferences (reasonable defaults are fine)

### What's NOT Shippable
- Broken core functionality
- Confusing navigation where users can't find the main action
- No error handling (silent failures)
- Unreadable text (contrast, size, or line length issues)
- Inconsistent visual language (looks like 3 different products)
- Missing states that users will definitely hit (form errors, empty lists)

### The Founder Traps
- **The perfectionism trap:** holding because "the animation isn't right" when nobody would notice. Ship it.
- **The shame trap:** shipping because you're tired of working on it, even though the core flow is confusing. Hold it.
- **The scope trap:** adding one more feature before launch, then one more, then one more. Set a date. Ship what's ready.

### Anti-Patterns
- Shipping without testing the core flow end-to-end once
- Holding for cosmetic polish when the product works and communicates clearly
- Asking friends "does this look good?" instead of "can you figure out how to [core action]?"
- Comparing your v1 to a competitor's v5
