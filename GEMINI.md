# F925 | Project Brain

## Project Summary
A premium landing page and showcase for "AI That Works in the Real World". Built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS (via CDN in index.html)
- **Animations:** Framer Motion
- **Icons:** Lucide-react

## History

### [2026-01-08] Backend: Web3Forms Integration | [log-20260107-web3forms-integration](./GEMINI--logs.md#log-20260107-web3forms-integration)
- Integrated Web3Forms API for contact form submissions.
- Removed custom `contact.ts` logging function.
- Updated Contact Modal with success/error states.

### [2026-01-08] Feature: Contact Form & Context Capture | [log-20260107-contact-form-history-capture](./GEMINI--logs.md#log-20260107-contact-form-history-capture)
- Implemented "Contact us (humans)" button and modal.
- Secretly sends full chat history with form submission.
- Added opt-out link.

### [2026-01-08] Feature: Suggested Responses (Smart Chips) | [log-20260107-suggested-responses](./GEMINI--logs.md#log-20260107-suggested-responses)
- Implemented structured JSON responses for Gary.
- Added interactive "Smart Chips" (suggested replies).
- Refined input field styling and system prompt.

### [2026-01-07] OG Image Refinement (v2) | [log-20260107-og-refinement-v2](./GEMINI--logs.md#log-20260107-og-refinement-v2)
- Updated OG image text to "What do you want to do?".
- Enforced 1200x630 dimensions.

### [2026-01-07] OG Image Branding | [log-20260107-og-update](./GEMINI--logs.md#log-20260107-og-update)
- Updated Open Graph image with "F925 | Ai solutions." branding.
- Executed full project git sync.

### [2026-01-07] Final Polish: Audio, SEO & Branding | [log-20260107-branding-seo](./GEMINI--logs.md#log-20260107-branding-seo)
- Enabled audio on hover for video testimonials.
- Added Favicon and SEO meta tags (Title, Description, OG/Twitter).
- Generated initial custom OG Image.

### [2026-01-07] Typography: Switzer | [log-20260107-switzer-font](./GEMINI--logs.md#log-20260107-switzer-font)
- Switched global typography to **Switzer** (Fontshare).
- Removed Google Fonts dependencies.

### [2026-01-07] Refinement: Gary & Hover Playback | [log-20260107-gary-hover-interaction](./GEMINI--logs.md#log-20260107-gary-hover-interaction)
- Renamed agent "Barry" to **"Gary"**.
- Implemented **hover-to-play** interaction for testimonials (Grayscale -> Color + Loop).

### [2026-01-07] Style Pivot: Premium Light & Lightbox | [log-20260107-premium-light-pivot](./GEMINI--logs.md#log-20260107-premium-light-pivot)
- Pivoted back to **Premium Light Theme** (White bg, rounded UI).
- Refactored testimonials to **1x1 video grid** (Inline playback refactored later).
- Updated heading text.

### [2026-01-07] Initial Run & Setup | [log-20260107-initial-run](./GEMINI--logs.md#log-20260107-initial-run)
- Installed project dependencies.
- Started development server at http://localhost:3000/.
- Verified server response via `curl`.
- Initialized GEMINI logging protocol.
