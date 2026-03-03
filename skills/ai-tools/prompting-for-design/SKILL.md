---
name: prompting-for-design
description: "Get better design output from AI tools like v0, Cursor, Lovable, and Bolt. The quality of your prompt determines the quality of your UI. Use when AI-generated interfaces look generic, when the output doesn't match the vision, or when a founder wants to get more from AI design tools."
---

# Prompting for Design

AI tools don't have taste. You have to supply it through the prompt.

## How to use

- `/prompting-for-design` Improve design prompts for AI tools in this conversation.

## Constraints

### The Prompt Structure
- MUST include these four elements in every design prompt:
  1. **What it is:** the specific component or page. "A pricing page with three tiers."
  2. **Who it's for:** the audience. "For indie SaaS founders."
  3. **How it should feel:** the emotional quality. "Professional but not corporate. Clean, dense enough to compare plans quickly."
  4. **Reference:** a specific product to use as quality benchmark. "The information density of Linear's UI with the typography of Stripe's marketing site."
- Without all four, AI will give you something generic.

### Specific Beats Vague
- Bad: "Make a nice dashboard"
- Good: "A SaaS dashboard showing MRR, active users, and churn rate. Three metric cards at top, a line chart below showing MRR over 12 months. Use Inter font, minimal color (grays + one blue accent). Inspired by the simplicity of Plausible Analytics."
- MUST name specific fonts, colors, spacing preferences, and reference products. AI tools can follow specific instructions. They can't interpret "make it look good."

### What to Specify
- Font: name the exact font ("Use Inter") not the vibe ("use a modern font")
- Color: name the exact palette ("primary #2563eb, text #111, background #fafafa") not the mood ("use professional colors")
- Spacing: name the density ("generous whitespace, 48px between sections") not the feel ("make it breathe")
- Layout: name the structure ("single column, centered, max-width 800px") not the concept ("keep it simple")
- Reference: name the product ("like the Stripe pricing page") not the category ("like a good SaaS landing page")

### Iterating the Prompt
- First prompt: get the structure right. Don't worry about polish.
- Second prompt: fix the specific things that are wrong. "Make the heading 48px bold, increase section spacing to 64px, change the CTA color to #2563eb."
- Third prompt: refine details. "Add a subtle gray border to the cards, reduce the number of features listed to 5 per plan, make the popular plan slightly elevated with a shadow."
- MUST iterate in specific, small changes. "Make it better" gets you nowhere.

### Anti-Patterns
- One-word prompts ("dashboard," "landing page")
- Vague aesthetic instructions ("make it modern and clean")
- Not providing reference products for quality benchmarks
- Accepting the first output without iterating
- Prompting for features before prompting for structure and feel
