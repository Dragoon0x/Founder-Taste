---
name: evaluating-ai-output
description: "Judge whether AI-generated design is actually good or just looks good at first glance. AI output has a specific failure pattern: it looks polished but makes poor decisions. Use when reviewing v0/Cursor/Lovable output before shipping, or when something looks fine but feels off."
---

# Evaluating AI Output

AI gives you polished mediocrity by default. Your job is to catch what it gets wrong.

## How to use

- `/evaluating-ai-output` Apply evaluation criteria to AI-generated design in this conversation.

## Constraints

### The AI Design Failure Pattern
- AI output typically looks "designed" but fails at:
  - **Hierarchy:** everything has similar visual weight. Nothing clearly dominates.
  - **Density:** too much whitespace because the AI errs toward "clean." Or too many elements because you asked for features.
  - **Copy:** placeholder-quality text that sounds professional but says nothing. "Streamline your workflow with our innovative platform."
  - **Consistency:** subtle inconsistencies in spacing, border radius, and color that feel "off" without being obvious.
  - **States:** only the happy path is designed. No loading, error, empty, or edge cases.

### The Evaluation Checklist
- MUST check after every AI generation:
  - [ ] Is there one clear primary element per screen?
  - [ ] Can I tell what to click within 3 seconds?
  - [ ] Is the copy specific to my product or generic?
  - [ ] Are spacing values consistent (check card padding, section gaps)?
  - [ ] Are border radii the same across similar elements?
  - [ ] Does the color palette stick to defined roles?
  - [ ] Is there real content or is it all Lorem Ipsum-quality placeholder?
  - [ ] Are loading, empty, and error states designed?
  - [ ] Does it work on mobile?
  - [ ] Would I actually use this product based on what I see?

### What AI Gets Right
- Component structure and layout patterns
- Reasonable starting points for spacing and typography
- Modern visual style and polish
- Responsive breakpoint handling
- Consistent component libraries (buttons, inputs, cards)

### What AI Gets Wrong
- Taste-level decisions (what to emphasize, what to remove)
- Product-specific judgment (what matters for YOUR users)
- Information hierarchy beyond visual decoration
- Copy that actually communicates your specific value
- Edge cases, error states, and empty states

### Anti-Patterns
- Shipping AI output without evaluating it (the "it looks good enough" trap)
- Only checking how it looks, not how it works (click through every interaction)
- Assuming AI-generated copy is final (it almost never is)
- Not testing on mobile (AI tools default to desktop-width previews)
