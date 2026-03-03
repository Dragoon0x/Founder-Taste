---
name: spacing-system
description: "Use consistent spacing values throughout your product. Random spacing is the fastest way to make a product feel unpolished. Use when margins and padding feel inconsistent, or when something looks 'off' but you can't explain it."
---

# Spacing System

Pick 6 numbers. Use only those numbers for every margin, padding, and gap in your product.

## How to use

- `/spacing-system` Set up or fix the spacing system in any product in this conversation.

## Constraints

### The System
- MUST use a base-8 spacing scale: 4, 8, 16, 24, 32, 48, 64px
- MUST use only values from this scale for all margins, paddings, and gaps. No 10px. No 15px. No 20px. No 13px.
- 4px: tight gaps (icon to label, badge padding)
- 8px: small gaps (list items, between form label and input)
- 16px: standard gaps (between form fields, card padding on mobile, between paragraphs)
- 24px: comfortable gaps (card padding on desktop, section sub-spacing)
- 32px: section gaps (between content blocks within a section)
- 48-64px: large section breaks (between major page sections)

### Why This Matters
- Consistent spacing creates visual rhythm. Even non-designers feel it. They can't name it, but they feel the difference between a product with consistent spacing and one with random values.
- Inconsistent spacing (16px here, 18px there, 14px somewhere else) creates subtle visual noise that makes users unconsciously distrust the product.

### Implementation
- Set up Tailwind or CSS variables with these values and use nothing else
- When something looks "off," check the spacing before changing anything else. 9 times out of 10, inconsistent spacing is the problem.
- Group related items with small spacing (8-16px). Separate unrelated items with large spacing (32-64px). This alone creates visual structure.

### Anti-Patterns
- Eyeballing spacing instead of using values from the scale
- Using margin values that aren't on the scale (12px, 15px, 20px, 28px)
- Same spacing between everything regardless of relationship
- Tight spacing between sections and generous spacing between items within sections (should be the opposite)
