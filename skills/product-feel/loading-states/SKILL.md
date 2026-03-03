---
name: loading-states
description: "Show users something is happening. Silence feels broken. Use when the product feels sluggish, when users click buttons and nothing visually happens, or when page loads feel slow."
---

# Loading States

If the user clicks something and nothing happens for 300ms, they think it's broken.

## How to use

- `/loading-states` Design or fix loading states in any product in this conversation.

## Constraints

### The Timing Rules
- **Under 100ms:** No loading state needed. The response feels instant.
- **100ms - 1 second:** Show a subtle indicator. Button changes to "Loading..." or shows a spinner inside the button. Don't show a full-screen loader for something that takes 500ms.
- **1-5 seconds:** Show a skeleton screen or progress indicator. The user is waiting and needs to know something is happening.
- **Over 5 seconds:** Show progress with context. "Processing your data... this usually takes 10-15 seconds." Give them a reason to wait.

### Skeleton Screens Over Spinners
- MUST prefer skeleton screens (gray placeholder boxes that match the layout) over spinners when loading page content.
- Skeletons show the user what's coming. Spinners just say "wait." Skeletons feel faster even when they're not.
- SHOULD match the skeleton shape to the actual content. A skeleton for a card grid should show card-shaped rectangles. A skeleton for a list should show row-shaped rectangles.

### Button Loading States
- MUST show inline feedback when a button triggers an action. The button itself should change: show a spinner inside the button, change text to "Saving...", or disable with a loading indicator.
- MUST prevent double-clicks. Disable the button while the action is processing.
- MUST show completion. Button changes to "Saved ✓" briefly before returning to default.
- NEVER redirect to a loading page for a button action. Keep the user in context.

### Anti-Patterns
- Full-screen loading spinners for actions that take 1-2 seconds
- No loading feedback at all (button click → nothing → suddenly content appears)
- Loading animations that last longer than the actual load time
- Spinners that give no indication of progress or expected duration
- Blocking the entire UI while one component loads
