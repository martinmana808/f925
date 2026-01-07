# F925 | The Vault

<a name="log-20260107-initial-run"></a>
## [2026-01-07] Initial Run & Setup

### User Prompt
please run this

### Implementation Plan
# Run the Project Plan

The user wants to run the project. Based on the file structure, it's a Vite/React/TypeScript project. `node_modules` is missing, so I need to install dependencies before starting the dev server.

## Proposed Changes

### Environment Setup
- Install dependencies using `npm install`.
- Start the development server using `npm run dev`.

## Verification Plan

### Manual Verification
- Check the output of `npm run dev` for the local URL.
- Use `browser_subagent` to open the URL and verify the app loads.

### Walkthrough
# Walkthrough - Run the Project

## Summary of Changes
- Installed project dependencies using `npm install`.
- Successfully started the Vite development server.
- Verified the server is responding and serving the application.

## Verification Results

### Development Server
The server was successfully started at `http://localhost:3000/`.

### Automated Verification (curl)
I verified the server is serving content by running `curl -v http://localhost:3000/`. The command returned the expected HTML structure for the React application.

### Browser Verification
> [!WARNING]
> The `browser_subagent` tool failed to launch the browser due to an environment issue. Manual verification via `curl` was used as a fallback.

```bash
curl -v http://localhost:3000/
# Returns valid HTML with <div id="root"></div> and script imports.
```

<a name="log-20260107-web-dev-view"></a>
## [2026-01-07] Add Web Development View & View Toggle

### User Prompt
I would like to add a MAIN TAB for web development. At the very top, after the header navbar, we could have like a RADIO (Ai solutions / Web development) that switches all the site contents. Use the same design system and style, and have the website kind of follow this websites structure (our competition) https://www.whattheheck.co.nz/

### Implementation Plan
# Rollback Dark Theme

Revert all dark theme related styles and classes across the codebase, while maintaining URL query persistence and the recently aligned typography.

## Proposed Changes

### [Core] Theme & App State
- [MODIFY] `App.tsx`: Remove `dark` class and ensure the background is white for all views. Keep the URL persistence logic.

### [Component] Web Development View
- [MODIFY] `WebHero.tsx`: Revert to light theme colors (white background, neutral-900 text) while keeping aligned typography (bold weight, correct leading).
- [MODIFY] `WebServices.tsx`: Revert to light theme colors (white background, neutral-50/100 cards).

### [Style] Global Rollback
- [MODIFY] `Navbar.tsx`: Remove `dark:` Tailwind classes.
- [MODIFY] `Team.tsx`: Remove `dark:` Tailwind classes.
- [MODIFY] `FAQ.tsx`: Remove `dark:` Tailwind classes.
- [MODIFY] `ViewToggle.tsx`: Remove dark-mode specific colors and `dark:` classes.

## Verification Plan

### Manual Verification
- Verify the site is fully light-themed in both AI and Web views.
- Verify the URL toggle still works and persists state (`?view=web`).
- Verify typography alignment is still present (bold h1/h2 instead of black).

### Walkthrough
# Walkthrough - Web Development View

## Summary of Changes
- Implemented a binary **View Toggle** (AI Solutions / Web Development) with a premium sliding animation.
- Created three new major components for the Web Development view:
    - `WebHero`: A conversion-focused hero section inspired by "whattheheck.co.nz".
    - `WebServices`: A grid of digital services (Shopify, SEO, Web Design, etc.).
    - `WebProcess`: A dark-themed, straightforward project process layout.
- Integrated conditional rendering in `App.tsx` using `Framer Motion` for smooth transitions between views.
- Aligned design consistency across both views (typography, font weights, spacing, and leading).
- Implemented URL query persistence (`?view=web`) to maintain state on page reload.
- Successfully rolled back the global dark theme for the Web view, returning to a cohesive light-themed brand experience while keeping shared component compatibility.

## Verification Results

### Build Consistency
Passed `npm run build` without any TypeScript or styling errors.

### Visual and Functional Integration
- The toggle correctly switches the entire layout between the AI-focused content and the new Web Development content.
- Aligned all typography (H1, H2, body text) and section padding to ensure the site feels like a single, cohesive brand.
- Transitions are smooth and maintain the premium aesthetic of the F925 brand.
- Existing components like `CaseStudy`, `Team`, `FAQ`, and `Footer` are shared across both views to maintain consistency.

### Component Structure
The new components are organized alongside existing ones, following the established design tokens.
