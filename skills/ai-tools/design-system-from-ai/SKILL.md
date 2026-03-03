---
name: design-system-from-ai
description: "Build a consistent design system using AI tools so every page looks like it belongs to the same product. Use when AI-generated pages look inconsistent with each other, when the product feels like it was designed by different people, or when adding new pages breaks the visual language."
---

# Design System from AI

The biggest problem with AI-built products: every page looks like it was designed by a different person. A design system fixes that.

## How to use

- `/design-system-from-ai` Build or enforce a design system using AI tools in this conversation.

## Constraints

### The Minimum System
- MUST define and enforce these tokens before building any pages:
  - **Font:** one typeface, 4-5 sizes (12, 14, 16, 24, 32px), 3 weights (regular, medium, bold)
  - **Colors:** background, text, primary, success, error, 3-4 grays
  - **Spacing:** 4, 8, 16, 24, 32, 48, 64px scale
  - **Border radius:** one value for small elements (4-6px), one for cards (8-12px), one for pills/badges (full)
  - **Shadows:** one subtle shadow for elevation (cards, dropdowns)
- Write these down. Include them in every AI prompt. This is your design system.

### Building Components
- MUST build reusable components before building pages:
  1. Button (primary, secondary, destructive, disabled states)
  2. Input (default, focused, error, disabled states)
  3. Card (with consistent padding, radius, shadow)
  4. Navigation (top bar with your logo, links, CTA)
  5. Table row (for data display)
- Build each component once with AI, then reference it in every page prompt.

### Enforcing Consistency
- MUST include your design tokens in every prompt: "Use Inter font. Primary color #2563eb. Spacing scale: 8/16/24/32/48px. Border radius 8px on cards."
- MUST review every new page against existing pages. Open them side by side. Check: same fonts? Same colors? Same spacing feel? Same button styles?
- When AI generates something inconsistent, fix the specific deviation. "The buttons on this page use 6px radius but our system uses 8px. Fix to 8px."

### The Reference Page Method
- Build one page that looks exactly right. Screenshot it.
- For every subsequent page, include that screenshot in your prompt: "Build a settings page that matches the visual style of this screenshot."
- This is the most effective way to maintain consistency across AI-generated pages.

### Anti-Patterns
- Building pages without defining tokens first (guaranteed inconsistency)
- Different prompts for different pages without shared constraints
- Not checking new pages against existing ones before shipping
- Letting AI choose fonts and colors per page instead of specifying your system
- Building 10 pages and then trying to make them consistent (do it upfront)
