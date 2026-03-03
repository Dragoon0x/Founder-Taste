---
name: error-handling
description: "Turn errors from dead ends into recoverable moments. Errors are inevitable. Making them helpful is a design choice. Use when users encounter confusing errors, when error messages are generic, or when failures have no recovery path."
---

# Error Handling

"Something went wrong" is not an error message. It's an admission that you didn't design this state.

## How to use

- `/error-handling` Design or fix error handling in any product in this conversation.

## Constraints

### Every Error Needs Three Things
1. **What happened:** in plain language. "Your payment didn't go through" not "Error 402."
2. **Why it happened:** if you know. "Your card was declined" or "The file was too large (max 10MB)."
3. **What to do next:** always. "Try a different card" or "Compress the file and upload again" or "Contact support."
- MUST include all three. An error without a recovery path is a dead end. Dead ends lose users.

### Inline vs. Page-Level Errors
- Form validation errors: MUST show inline, next to the specific field that has the problem. Red border on the field + message below it. Not a banner at the top listing all errors.
- Network/server errors: show a page-level message with retry option. "We couldn't load your data. Try again."
- Permission errors: explain what's needed. "You need admin access to change billing. Contact [admin name]."
- 404 pages: acknowledge the broken link, provide navigation. Search bar + link to homepage + popular pages.

### Error Prevention
- MUST prevent errors where possible rather than just handling them:
  - Disable buttons when the form is incomplete instead of showing errors after submission
  - Show character counts before hitting the limit, not after
  - Validate email format in real-time, not on submit
  - Show file size limits before upload, not after a failed upload
- Prevention feels better than recovery. Recovery feels better than dead ends. Dead ends feel like bugs.

### Tone
- MUST be helpful, not robotic. "We couldn't save your changes. Check your connection and try again." not "Error: Save failed. Code: NETWORK_TIMEOUT."
- MUST avoid blaming the user. "That email isn't in our system" not "You entered an invalid email."
- SHOULD be brief. 1-2 sentences. The user is already frustrated. Don't make them read a paragraph.

### Anti-Patterns
- "Something went wrong. Please try again later." (what went wrong? when is later?)
- Error codes without human-readable messages
- Errors that appear and disappear before the user can read them
- Form errors that clear the user's input (now they have to retype everything)
- No error state at all (silent failures where the user doesn't know something went wrong)
