# ZigZag Reverse-Planning -> Next.js migration plan

## Feasibility

A near-full migration is feasible with low-to-moderate risk because the project is component-driven and does **not** depend on `react-router`.

## Risks found in current repository

1. **Global CSS collision risk**
   - `src/index.css` defines global `:root` tokens and base `body` styles.
   - In Next.js App Router, importing this globally can leak into the rest of the portfolio site.

2. **Browser-only runtime APIs**
   - `window` and DOM measurements are used in `src/Frame.js` and `src/component/JourneyMap.js`.
   - Must run as client components (`'use client'`) and avoid SSR execution.

3. **GSAP + ScrollTrigger lifecycle**
   - Horizontal scroll logic in `Frame` uses dynamic imports already (good), but should be isolated to route-level wrapper and cleanup on unmount.

4. **Asset path mismatch risk**
   - Most assets are imported from modules (good for bundlers).
   - One hardcoded path exists in `src/component/Deskresearch.js` (`"Vector 22.svg"`), which may break after migration.

5. **TypeScript interoperability risk**
   - Current source is JavaScript while destination Next app route is typically TypeScript.
   - Transitional wrappers avoid immediate full TS conversion.

## Recommended architecture (best UX + minimal break)

### Preferred: Near-full native migration in route

- Keep route: `/portfolio/zigzag-reverse`.
- Build a route-local shell in `app/portfolio/zigzag-reverse/page.tsx`.
- Keep sections as reusable client components.
- Use wrappers during transition so legacy components can move without rewriting all code at once.

### Fallback (if timeline is tight)

- Keep native route shell + hero/summary in Next.
- Lazy-load only heavy interaction sections (e.g., desk research horizontal sequence) as dynamic client modules.
- Avoid iframe except temporary review builds.

## Exact folder structure to create

```txt
app/
  portfolio/
    zigzag-reverse/
      page.tsx
      ZigzagReverseExperience.tsx
      zigzag-reverse.module.css
      zigzag-reverse.tokens.css
      lib/
        asset.ts
      components/
        Main.tsx
        Spacer.tsx
        Overview.tsx
        Spacer2.tsx
        Deskresearch.tsx
        Spacer3.tsx
        Swot.tsx
        Persona.tsx
        JourneyMap.tsx
        Problem.tsx
        UserFlowChart.tsx
        DesignGuide.tsx
        Spacer4.tsx
        OnboardingPage.tsx
        Home.tsx
        Store.tsx
        Discover.tsx
        Closet.tsx
public/
  portfolio/
    zigzag-reverse/
      assets/
        ...copied image/svg/png files...
```

## Move / rewrite / wrap mapping

- **Move as-is first**
  - `src/component/*.js` (all visual sections).
  - `src/component/css/*.module.css`.
  - `src/assets/**` to `public/portfolio/zigzag-reverse/assets/**` (or keep module-import assets if preferred).

- **Rewrite / adapt**
  - `src/Frame.js` -> `app/portfolio/zigzag-reverse/ZigzagReverseExperience.tsx` (route wrapper + GSAP pinning + dynamic section loading).
  - Hardcoded asset reference in `Deskresearch` to configurable prop or helper.

- **Wrap for transitional migration**
  - `app/portfolio/zigzag-reverse/components/*.tsx` wrappers that re-export legacy JS components, then gradually replace each with native TSX implementation.

## Integration checklist (conflict prevention)

1. Keep `'use client'` at the top of interactive route files.
2. Do not import legacy `index.css` globally into Next root layout.
3. Prefer CSS modules; scope any remaining design tokens via `[data-project='zigzag-reverse']`.
4. Standardize asset URLs via `withBasePath()` helper.
5. If using `next/image` later, migrate image by image after route is stable.

## Generated starter files in this branch

- `app/portfolio/zigzag-reverse/page.tsx`
- `app/portfolio/zigzag-reverse/ZigzagReverseExperience.tsx`
- `app/portfolio/zigzag-reverse/zigzag-reverse.module.css`
- `app/portfolio/zigzag-reverse/zigzag-reverse.tokens.css`
- `app/portfolio/zigzag-reverse/lib/asset.ts`
- `app/portfolio/zigzag-reverse/components/*.tsx` wrappers
- `src/component/Deskresearch.js` updated for injected asset path (`vector22` prop)

