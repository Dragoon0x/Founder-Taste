---
name: iterating-with-ai
description: "Get from a generic first draft to something with actual taste through structured iteration with AI tools. Use when AI output is close but not there, when the founder isn't sure what to change, or when improvements feel like going in circles."
---

# Iterating with AI

The first generation is never the answer. The third or fourth one might be.

## How to use

- `/iterating-with-ai` Apply structured iteration techniques to AI design work in this conversation.

## Constraints

### The Iteration Loop
- **Round 1 — Structure:** Get the layout and information architecture right. Ignore visual polish. "Show me a pricing page with 3 tiers, feature comparison table, and FAQ section."
- **Round 2 — Hierarchy:** Fix what's most important. "Make the middle tier visually dominant. Larger, different background color. The CTA on the middle tier should be the only solid button."
- **Round 3 — Specifics:** Dial in the details. "Use Inter font. Heading 32px semibold #111. Body 16px regular #444. Section spacing 64px. Card border-radius 12px."
- **Round 4 — Polish:** Fine-tune. "Add subtle shadow to the featured tier. Reduce feature list to 6 items per plan. Make annual/monthly toggle the default."
- MUST follow this order. Polishing before structure is set wastes iterations.

### How to Give Feedback to AI
- MUST be specific about what's wrong. "The CTA doesn't stand out" → "Make the CTA button 20% larger, change to solid blue (#2563eb) background with white text, add 24px space above and below it."
- MUST give one change at a time for complex fixes. AI tools handle one specific instruction better than five simultaneous changes.
- MUST point to the element. "The heading" is vague if there are four headings. "The main page heading at the top of the hero section" is clear.
- NEVER say "make it better" or "improve the design." Name the specific problem and the specific fix.

### When to Start Over
- If 3+ rounds of iteration aren't converging on something good, the prompt is wrong. Rewrite the initial prompt with different references and structure.
- If the layout keeps fighting you, scrap it and try a fundamentally different layout approach.
- MUST recognize the sunk cost trap: 5 rounds of iteration on a bad foundation is worse than starting fresh.

### Compounding Quality
- Save your best outputs. Use them as references for future prompts. "Build this in the style of the pricing page we created last week."
- Build a prompt library: your best-performing prompts for common components (hero, pricing, dashboard, settings).
- SHOULD version your prompts. When something works, document why it worked.

### Anti-Patterns
- Making vague requests and expecting specific improvements
- Changing multiple things per iteration (hard to tell what helped)
- Polishing before the structure is right
- Iterating endlessly instead of recognizing when to start over
- Not saving successful prompts for reuse
