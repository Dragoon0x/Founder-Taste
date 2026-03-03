# founder-taste

Design taste skills for founders building without a designer.

## Why

You're shipping with Cursor, v0, Lovable, Bolt. The code works. The product functions. But something looks *off* and you can't figure out what.

You don't need a design degree. You need a checklist that catches the 20 mistakes that make 80% of founder-built products look amateur.

That's what this is. 35 structured skills that teach AI agents (and you) how to make better design decisions — typography, color, layout, landing pages, product polish, and how to get better output from AI tools.

## Install

Add all skills:

```bash
npx github:Dragoon0x/founder-taste add --all
```

Add a specific skill:

```bash
npx github:Dragoon0x/founder-taste add hero-section
```

Add a category:

```bash
npx github:Dragoon0x/founder-taste add --category landing-pages
```

List everything:

```bash
npx github:Dragoon0x/founder-taste list
```

## Compatibility

Works with any AI coding agent that supports skill files:

- **Claude Code** — add to `.claude/skills/`
- **Cursor** — add to `.cursor/skills/`
- **Windsurf** — add to `.windsurf/skills/`
- **OpenCode** — add to `.opencode/skills/`
- **Cline** — add to `.cline/skills/`
- **Codex** — add to project context
- **Aider** — add to `.aider/skills/`
- **Continue** — add to `.continue/skills/`

Or read them yourself. Every skill is a standalone markdown file with specific, actionable constraints.

## Skills

### Quick Wins (4)

| Skill | Description |
|---|---|
| `spacing-fix` | The #1 reason founder-built UIs look amateur. More space between things. |
| `alignment-cleanup` | Align elements to shared edges. Almost-aligned looks worse than offset. |
| `contrast-check` | Make sure people can actually read your text. |
| `simplify-first` | Before adding anything to fix a design, try removing something. |

### Typography (3)

| Skill | Description |
|---|---|
| `font-picking` | Choose the right typeface without being a designer. Safe picks included. |
| `type-scale` | Set up a type scale that creates clear hierarchy in 5 minutes. |
| `text-formatting` | Line length, alignment, and spacing that makes text readable. |

### Color (3)

| Skill | Description |
|---|---|
| `palette-basics` | Build a working 5-color palette without a designer. |
| `color-roles` | Every color gets one job. No exceptions. |
| `dark-mode-decisions` | Whether to build dark mode, and how to not screw it up. |

### Layout (4)

| Skill | Description |
|---|---|
| `visual-hierarchy` | Make the important things look important. The most common founder problem. |
| `spacing-system` | Pick 6 numbers. Use only those for every margin and padding. |
| `responsive-basics` | Make your product work on every screen size. |
| `density-control` | How much information belongs on one screen. |

### Landing Pages (4)

| Skill | Description |
|---|---|
| `hero-section` | 5 seconds to make someone care. Headline, subhead, CTA, product shot. |
| `social-proof` | Show visitors that real people use and trust your product. |
| `cta-design` | Design calls to action that people actually click. |
| `above-the-fold` | Everything visible before scrolling must earn its place. |

### Product Feel (4)

| Skill | Description |
|---|---|
| `onboarding-flow` | Get users to their first value moment in under 2 minutes. |
| `empty-states` | What users see when there's no data. Conversion moments disguised as blank screens. |
| `loading-states` | Show users something is happening. Silence feels broken. |
| `error-handling` | Turn errors from dead ends into recoverable moments. |

### Copy as Design (3)

| Skill | Description |
|---|---|
| `microcopy` | The small text that does more conversion work than your feature section. |
| `headline-writing` | Write headlines that communicate value in under 10 words. |
| `button-labels` | Every button is a promise. The label tells the user what they'll get. |

### AI Tools (4)

| Skill | Description |
|---|---|
| `prompting-for-design` | Get better design output from v0, Cursor, Lovable, and Bolt. |
| `evaluating-ai-output` | Judge whether AI-generated design is actually good or just looks good. |
| `iterating-with-ai` | Get from generic first draft to something with taste through structured iteration. |
| `design-system-from-ai` | Build consistency so every AI-generated page looks like the same product. |

### Evaluation (3)

| Skill | Description |
|---|---|
| `ship-or-hold` | The framework for deciding when it's good enough vs. needs more work. |
| `screenshot-test` | Quick visual quality checks any founder can run. |
| `founder-critique` | A structured self-review when you don't have a designer to check your work. |

### Working with Designers (3)

| Skill | Description |
|---|---|
| `hiring-taste` | Evaluate design talent when you're not a designer yourself. |
| `giving-feedback` | Give design feedback that's useful, not vague or prescriptive. |
| `design-briefs` | Write briefs that get good results from designers and freelancers. |

## How skills work

Each skill installs as a directory with a `SKILL.md` file:

```
.founder-taste/
├── quick-wins/
│   ├── spacing-fix/
│   │   └── SKILL.md
│   ├── alignment-cleanup/
│   │   └── SKILL.md
├── typography/
│   ├── font-picking/
│   │   └── SKILL.md
├── ai-tools/
│   ├── prompting-for-design/
│   │   └── SKILL.md
...
```

Every skill file contains:

- **Slash command** for quick activation
- **MUST / SHOULD / NEVER** constraints the agent follows
- **Specific, actionable rules** (not vague principles)
- **Anti-patterns** to avoid

## Important Notices

**Experimental software.** These are opinionated design frameworks, not universal rules. What works for one product may not work for another.

**Do your own research (DYOR).** All recommendations require independent evaluation for your specific context, audience, and goals.

**Not professional design advice.** For complex design challenges, consult a qualified designer. These skills help with common decisions, not every decision.

**AI output requires human review.** When AI agents use these skills, a human must review the output before shipping. AI can misapply constraints or miss context.

**No guarantees.** No guarantee of conversion rates, user satisfaction, or business outcomes.

**Assumption of risk.** By using founder-taste, you accept responsibility for all design decisions made using these skills.

See [DISCLAIMER.md](DISCLAIMER.md) and [TERMS.md](TERMS.md) for full details.

## License

MIT — see [LICENSE](LICENSE)
