---
name: density-control
description: "How much information belongs on one screen. Too much feels overwhelming. Too little feels empty. Use when a founder's product feels either cluttered or sparse, or when they can't decide how much to show."
---

# Density Control

The right amount of information depends on who's using it and what they're doing.

## How to use

- `/density-control` Evaluate and adjust information density in any UI in this conversation.

## Constraints

### Matching Density to Context
- **High density is right when:** users are experienced, comparing data, making quick decisions, or using the product for hours daily. Think: trading platforms, analytics dashboards, admin panels.
- **Low density is right when:** users are new, reading content, making one decision, or visiting infrequently. Think: landing pages, onboarding, settings, consumer apps.
- MUST choose density based on the user's task, not the amount of data you have.
- NEVER make a marketing page as dense as a dashboard. NEVER make a dashboard as sparse as a marketing page.

### The Founder Density Trap
- Founders want to show everything because they built everything. The dashboard shows 12 metrics. The settings page has 40 options. The pricing page shows every feature in every plan.
- MUST ask: of everything on this screen, what does the user actually need for the decision they're making right now? Show that. Hide the rest behind a click.

### Density Guidelines
- Landing page: one idea per viewport. Generous space. Big text. Single CTA.
- Product dashboard: 3-5 key metrics visible. Everything else one click away. Not zero clicks away.
- Forms: 5-7 fields visible at once. Longer forms need steps or sections.
- Tables: 4-6 columns visible. More than that needs horizontal scroll or progressive disclosure.
- Settings: grouped into sections of 3-5 options. Not a wall of toggles.

### How to Reduce Density
1. Move secondary information to a detail view or expandable section
2. Use progressive disclosure: show summary first, details on click
3. Break long pages into tabs or steps
4. Remove anything that less than 20% of users need from the default view

### Anti-Patterns
- Showing everything because "users might need it" (they don't, most of the time)
- Making users click through 5 screens to find basic information (too sparse)
- Same density on every page regardless of purpose
- Adding density because the page "looks empty" (empty can be correct)
