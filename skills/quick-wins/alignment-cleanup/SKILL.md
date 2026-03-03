---
name: alignment-cleanup
description: "Align elements to a shared edge or grid. Misalignment is the most visible amateur signal. Use when a founder's layout feels messy or unpolished but they can't pinpoint why."
---

# Alignment Cleanup

If two things are almost aligned, they look broken. If they're clearly offset, it looks intentional. Almost-alignment is the enemy.

## How to use

- `/alignment-cleanup` Find and fix alignment issues in any UI in this conversation.

## Constraints

### The Rule
- MUST ensure every element shares an edge with at least one other element. Left edges, right edges, or centers should line up.
- MUST pick one alignment per section and commit. Left-aligned text with a centered heading looks accidental.
- MUST ensure labels and inputs share a consistent alignment pattern across all forms.
- NEVER mix alignment without a clear reason. Centered hero + left-aligned body is fine. Centered heading + left-aligned subhead + centered button is chaos.

### Common Founder Mistakes
- Centering everything. Centering works for hero sections and short headings. It does not work for paragraphs, forms, feature lists, or navigation.
- Almost-aligned elements. Two cards that are 1-2px off look worse than cards that are deliberately different sizes.
- Inconsistent form alignment. Labels above inputs in one form, beside inputs in another.
- Logo/nav that doesn't share the same left edge as the content below.

### The Fix
1. Pick a left edge. Align your heading, body text, and CTA to it.
2. Check every container: do the contents share the same internal padding and alignment?
3. Check every row: are items at the same vertical position?
4. Check every pair of cards or sections: are they the same width?
5. Zoom to 200%. Misalignment becomes obvious at scale.

### Anti-Patterns
- Using "auto" margins everywhere and hoping things line up
- Centering text blocks longer than 2 lines (left-align them)
- Eyeballing alignment instead of using a grid or consistent values
