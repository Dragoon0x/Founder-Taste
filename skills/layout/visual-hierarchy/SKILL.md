---
name: visual-hierarchy
description: "Make the important things look important. The most common design problem founders have. Use when users can't find the main action, when everything looks equally important, or when the page feels confusing."
---

# Visual Hierarchy

If users can't tell what's most important in 3 seconds, you have a hierarchy problem.

## How to use

- `/visual-hierarchy` Fix hierarchy issues in any UI in this conversation.

## Constraints

### The Core Rule
- MUST have exactly one primary element per screen. The thing you most want the user to see or do. Everything else is secondary or tertiary.
- MUST create the primary element through at least two of: larger size, bolder weight, higher contrast, brighter color, more surrounding space.
- MUST test: cover everything except the primary element. Is it obvious what the user should do? Now uncover. Does the primary element still win attention?
- NEVER let two elements compete at the same visual level. Two big bold things next to each other cancel each other out.

### The Three Levels
- **Primary:** the one thing. Your CTA, your headline, your key metric. Biggest, boldest, most contrast.
- **Secondary:** the supporting content. Descriptions, feature lists, secondary actions. Medium size, medium weight.
- **Tertiary:** metadata, navigation, fine print, timestamps. Small, light gray, minimal.
- Every element on screen should clearly belong to one of these levels.

### How to Create Hierarchy Without Design Skills
- Size: make the important thing 2-3x bigger than surrounding text. Not 1.2x. 2x minimum.
- Weight: primary = bold/semibold. Secondary = regular. Tertiary = regular + lighter color.
- Space: important things get more whitespace around them. A CTA with 48px of space around it looks more important than one crammed between paragraphs.
- Color: your primary brand color should only appear on the primary element. Everything else gets grays.

### Anti-Patterns
- Every button the same size and color (which one should I click?)
- Headlines that are barely bigger than body text
- Multiple competing CTAs: "Sign Up," "Learn More," "Watch Demo," "Book a Call" all at the same visual weight
- Navigation that's louder than the content it serves
