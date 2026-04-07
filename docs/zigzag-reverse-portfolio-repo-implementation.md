# Portfolio repo implementation guide (final integration)

Use the files under `app/portfolio/zigzag-reverse/*` as the final native route implementation.

## 1) Route that must exist

- `app/portfolio/zigzag-reverse/page.tsx`
- `app/portfolio/zigzag-reverse/ZigzagReverseExperience.tsx`
- `app/portfolio/zigzag-reverse/components/*`
- `app/portfolio/zigzag-reverse/zigzag-reverse.module.css`
- `app/portfolio/zigzag-reverse/zigzag-reverse.tokens.css`
- `app/portfolio/zigzag-reverse/lib/asset.ts`

## 2) Portfolio card/data update (example)

Update your portfolio data source to ensure the slug routes natively.

```ts
// app/portfolio/data/projects.ts (example)
export const projects = [
  {
    slug: 'zigzag-reverse',
    title: 'ZIGZAG Reverse Planning',
    href: '/portfolio/zigzag-reverse',
    type: 'case-study',
  },
  // ...other cards
];
```

And make sure the card uses Next Link rather than external button logic.

```tsx
<Link href={project.href}>
  <ProjectCard project={project} />
</Link>
```

## 3) Asset migration

Copy all legacy assets to:

- `public/portfolio/zigzag-reverse/assets/image/**`

This route currently expects at least:

- `/portfolio/zigzag-reverse/assets/image/Vector 22.svg`

## 4) Responsive handling status

### Desktop (>= 1200px)
- Full GSAP horizontal pinned section enabled.
- Native route rendering with no iframe.

### Tablet (768px ~ 1199px)
- Scaled canvas mode enabled to preserve 1920px layout fidelity.
- GSAP pinning disabled for stability; horizontal section switches to native x-scroll + snap.

### Mobile (< 768px)
- Same scaled canvas mode with a lower bound scale for readability.
- Horizontal section remains native x-scroll to avoid pinned-scroll lockups.

### Known limitations from original design
- Many legacy section modules still use fixed absolute sizes and 1920-based spacing.
- The scaler preserves visual composition but does not semantically redesign each section for mobile-first typography.
- Production-perfect mobile UX still requires per-section responsive rewrites in each legacy module CSS.
