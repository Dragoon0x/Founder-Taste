---
name: color-roles
description: "Every color in your product should have one job. When colors serve multiple purposes, users get confused. Use when a founder's UI feels chaotic, when colors seem random, or when the same color means different things in different places."
---

# Color Roles

One color, one job. If red means "error" and "featured," your users will hesitate at both.

## How to use

- `/color-roles` Audit and fix color role assignments in any UI in this conversation.

## Constraints

### The Role System
- MUST assign every color exactly one role:
  - **Primary action:** your brand color. Buttons, links, active tabs, selected states. One color.
  - **Success:** green. Confirmations, completed states, positive metrics. Only green.
  - **Error/destructive:** red. Errors, delete actions, failed states, warnings. Only red.
  - **Warning:** yellow/amber. Caution states, pending actions. Optional but useful.
  - **Neutral/structural:** grays. Backgrounds, borders, dividers, disabled states.
- NEVER use the same color for two different meanings.

### How to Audit
- List every color in your product. For each one, write its role in one word. If you can't, or if two colors share the same role, you have a problem.
- Check: does your primary brand color ever appear in an error context? Does red ever mean anything positive? Does green ever mean anything besides success?
- MUST ensure color is not the only signal. Always pair color with text, icons, or position. 8% of men are color-blind.

### Founder Mistakes
- Using red for the primary CTA because "it stands out." Red means danger. Your signup button shouldn't feel dangerous.
- Using green for the brand and for success. Now users can't tell if a green element is branded or confirming something.
- Random accent colors on different pages with no system.
- Using color to decorate instead of communicate.

### Anti-Patterns
- More than 3 non-neutral colors on any single screen
- Color as the only way to distinguish states (add icons or text labels)
- Decorative color that serves no functional purpose
- Different shades of the same hue serving different roles (dark blue for links, light blue for info, medium blue for selection creates confusion)
