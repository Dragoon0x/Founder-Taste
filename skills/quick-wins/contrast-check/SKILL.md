---
name: contrast-check
description: "Make sure people can actually read your text. Low contrast is the silent conversion killer. Use when text feels hard to read, when accessibility matters, or when a founder uses light gray on white."
---

# Contrast Check

If people squint, they leave. Contrast is not optional.

## How to use

- `/contrast-check` Evaluate and fix contrast issues in any UI in this conversation.

## Constraints

### The Rules
- MUST ensure body text has a contrast ratio of at least 4.5:1 against its background. This is WCAG AA. It's the minimum, not the goal.
- MUST ensure large text (18px+ bold or 24px+ regular) has a contrast ratio of at least 3:1.
- MUST ensure interactive elements (buttons, links, form fields) are clearly distinguishable from non-interactive elements.
- NEVER use light gray text on white backgrounds for anything users need to read. #999 on #fff fails. #666 on #fff passes.

### The Founder Gray Problem
- Founders love gray text because it looks "subtle" and "modern." Subtle is fine for labels and metadata. It's not fine for body text, prices, CTAs, or anything the user needs to read and act on.
- MUST keep primary content (headings, body, prices, CTAs) at high contrast. #1a1a1a or #111 on white.
- SHOULD use lighter grays only for secondary info: timestamps, helper text, disabled states.

### Quick Fixes
- Headings: use #111 or #1a1a1a on white. Always.
- Body text: use #333 or darker on white. Never lighter.
- Secondary text: #666 is the lightest acceptable gray on white.
- Buttons: white text on colored backgrounds must meet 4.5:1. Test it.
- Placeholder text in inputs: #999 is fine (it's placeholder). Actual input text must be #333 or darker.

### Tools
- Use any contrast checker. Plug in your text color and background color. If it fails AA, darken the text or lighten the background. No exceptions.

### Anti-Patterns
- Using brand color for body text without checking contrast
- Light gray text because "Apple does it" (Apple's designers test every combination)
- Colored text on colored backgrounds without checking
- Ignoring contrast on mobile (screens in sunlight need even more contrast)
