# Cinematic effects — Vice Atlas

This additive layer keeps the original GTA Town / Rockstar-inspired layout, typography, palette, catalogue and navigation. It does not replace existing CSS.

| Effect | Implementation |
| --- | --- |
| Cinematic parallax | Existing hero imagery, bounded to ±16px |
| Dynamic border glow | Local card spotlight follows a fine mouse pointer |
| Film grain | Low-opacity static texture in selected hero areas |
| Glass | Existing sticky header, with a solid mobile fallback |
| Gradient typography | Finite highlight sweep on page and dossier headings |
| 3D perspective cards | Catalogue cards only, ±2.5° per axis |
| Scroll and text reveal | Existing Framer Motion reveal and hero title mask, with shorter timing and capped delays |
| Magnetic buttons | Existing action buttons, ±3px horizontal and ±2px vertical |
| Image mask reveal | On actual successful catalogue/dossier image load |
| Stagger | Visible catalogue grid entries, at most 352ms delay |
| Page transition | A short entrance fade on existing portal route container |
| Ambient light | Local hero background and pointer lighting |
| Animated underline | Existing navigation plus dossier section links |
| Skeleton shimmer | Pending media only; maximum three cycles, then static |
| Image zoom | Bounded hover enlargement in desktop catalogue |

The fine-pointer effects use one delegated pointer listener and at most one scheduled animation frame. Scroll resets active pointer effects; listeners, inline variables and observers are cleaned up on route changes. Touch and reduced-motion preferences disable the heavier effects. Original image dimensions, cards, links and focus targets are retained.

Run `node frontend/scripts/verify-cinematic.mjs` from the repository root. The script tests 6,461 bounded pointer geometry samples and 22 explicit integration/geometry assertions. The same test logic passed in an assertion harness during implementation; a real browser, compiled frontend and deployed visual result still require verification. The Pages workflow now runs this verifier before compilation and deployment.
