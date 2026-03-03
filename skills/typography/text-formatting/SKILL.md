---
name: text-formatting
description: "Line length, alignment, and spacing that makes text actually readable. Use when a founder's text is hard to read, when paragraphs feel like walls, or when the page feels uncomfortable to scan."
---

# Text Formatting

Good text is invisible. Bad text makes people leave without knowing why.

## How to use

- `/text-formatting` Fix text formatting issues in any UI in this conversation.

## Constraints

### Line Length
- MUST keep body text between 50-75 characters per line. This is the readability sweet spot.
- On desktop: constrain your text column to ~600-700px max width. Full-width text on a 1440px screen is unreadable.
- On mobile: the screen width handles this naturally. Don't add extra padding that makes lines too short.
- NEVER let a line of body text stretch across the full width of a desktop screen.

### Paragraph Spacing
- MUST add space between paragraphs. 16-24px between paragraphs. No indent, just space.
- MUST keep paragraphs short. 2-4 sentences max. Walls of text don't get read.
- SHOULD use subheadings every 2-3 paragraphs in long-form content to create scannable structure.

### Alignment
- MUST left-align body text. Always. No exceptions for body paragraphs.
- Center alignment is only for: hero headlines, short taglines (under 10 words), single-line captions, and CTAs.
- NEVER center-align a paragraph of text. It destroys readability.
- NEVER justify text on the web. It creates uneven word spacing that looks broken.

### Whitespace Around Text
- Headings need more space above them than below. 32px above, 8-16px below. This visually connects the heading to its content.
- Lists need 8-12px between items. Default browser spacing is usually too tight.
- Captions and labels need clear proximity to the thing they describe. 4-8px gap.

### Anti-Patterns
- Center-aligned paragraphs (the #1 amateur text mistake)
- Body text wider than 75 characters on desktop
- No space between paragraphs (use margin, not double line breaks)
- All-caps body text (all-caps is for short labels and buttons only)
- Mixing text alignment within the same section
