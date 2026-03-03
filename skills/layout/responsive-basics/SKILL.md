---
name: responsive-basics
description: "Make your product work on every screen size without design expertise. Use when a founder's product looks fine on desktop but breaks on mobile, or when they're unsure how to handle different screen sizes."
---

# Responsive Basics

50%+ of your users are on mobile. If your product doesn't work there, you're losing half your audience.

## How to use

- `/responsive-basics` Fix responsive design issues in any product in this conversation.

## Constraints

### The Priority
- MUST design for mobile first, then scale up to desktop. Mobile forces you to prioritize. Desktop lets you be lazy.
- MUST test on a real phone, not just browser resize. Tap targets, scrolling behavior, and keyboard interactions feel different on actual devices.
- MUST check three breakpoints minimum: mobile (375px), tablet (768px), desktop (1280px).

### Mobile Rules
- Tap targets: minimum 44x44px. Buttons, links, and interactive elements must be easily tappable with a thumb.
- Single column layout. Don't try to fit two columns on a phone screen.
- Full-width buttons on mobile. Don't make users aim for a small button.
- Stack horizontal layouts vertically. Side-by-side cards become stacked cards. Side-by-side text+image becomes image-then-text stacked.
- Hide secondary navigation behind a hamburger or bottom tab bar. Don't show 8 nav items on a 375px screen.

### Desktop Rules
- Constrain content width. Body text shouldn't stretch beyond 700px. The full page layout can be wider, but text columns must be constrained.
- Use the extra space for breathing room, not more content. A centered 800px content area with generous margins looks better than content stretching to 1440px.
- Side-by-side layouts make sense on desktop. Feature sections with image + text, pricing comparison tables, multi-column footers.

### Common Founder Mistakes
- Building desktop-only and hoping mobile "works out"
- Text that's readable on desktop becoming too small on mobile
- Buttons that work with a mouse but are too small for a thumb
- Horizontal scrolling on mobile (almost always a bug)
- Modals and popups that don't fit mobile screens

### Anti-Patterns
- Hiding critical content on mobile (if it matters, show it)
- Pinch-to-zoom requirement to read text (your font is too small)
- Fixed position elements that eat up mobile screen real estate
- Desktop-designed forms with tiny inputs on mobile
