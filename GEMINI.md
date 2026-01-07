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

### [2026-01-07] Add Web Development View & View Toggle | [log-20260107-web-dev-view](./GEMINI--logs.md#log-20260107-web-dev-view)
- Implemented a binary view toggle (AI Solutions / Web Development) with sliding animation.
- Created new premium components for the Web Development view: `WebHero`, `WebServices`, and `WebProcess`.
- Integrated conditional rendering in `App.tsx` with `Framer Motion` for smooth transitions.
- Aligned design consistency across both views (typography, spacing, and weights).
- Implemented URL query persistence (`?view=web`) and maintained a premium light theme across all views after rolling back the dark theme.
- Verified build and design consistency.

### [2026-01-07] Initial Run & Setup | [log-20260107-initial-run](./GEMINI--logs.md#log-20260107-initial-run)
- Installed project dependencies.
- Started development server at http://localhost:3000/.
- Verified server response via `curl`.
- Initialized GEMINI logging protocol.
