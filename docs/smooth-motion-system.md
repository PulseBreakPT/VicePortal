# SSS Smooth Motion

An additive motion layer for the original Vice Atlas interface. Existing Nightfall, Cinematic and Neon Cipher styles remain in place.

| Effect | Implementation |
| --- | --- |
| Shared Element Transition | Cancelable 420ms image flight from a catalogue card to the same loaded dossier image; normal link navigation remains unchanged |
| Fluid Morphing | Spring layout projection on the existing dossier media expansion |
| Motion Blur | A finite 2px blur on incoming photographic hero previews |
| Liquid Navigation | One measured underline with damped spring movement between existing active navigation links |
| Kinetic Typography | Staggered individual letters on the separate Experience heading |
| Blur Reveal | A 3px-to-zero blur on existing editorial section description reveals |
| Elastic Hover | Small independent scale response, leaving existing perspective transforms intact |
| Aurora Gradients | Finite ambient gradient sweep in the existing hero |
| Light Sweep | A brief pointer-triggered card image reflection |
| Scroll Velocity | A ±5px offset applied to the panorama copy using the existing cinematic scroll listener |
| Odometer Numbers | Vertical rolling transitions on actual personal progress and saved-count changes |
| Crossfade Images | Existing pause-menu art crossfades tuned to shorter, eased transitions |
| Cinematic Vignette | Static, subtle radial shading on catalogue and dossier media |
| Progressive Focus | Existing selected menu item and keyboard-focused cards receive stronger visual emphasis |
| Spatial Depth | Caption offset moves independently of the already bounded image parallax |
| Fluid Accordion | Native details semantics with two-way size interpolation where supported; opening-only fade fallback elsewhere |

## Performance and compatibility

No additional dependencies. The shared-element animation is skipped on mobile, reduced motion, unavailable or mismatched images, offscreen destinations, modified clicks, and unsupported browsers. It cancels on scrolling, resize, visibility changes or route cleanup. The same-image requirement avoids misleading transitions to unrelated artwork. Mobile retains native navigation, shorter kinetic delays and simpler motion. Odometer and Neon Cipher apply to different counters. There is no permanent new animation loop.

Run `node frontend/scripts/verify-smooth.mjs` from the repository root. The same logic passed 4,777 geometry, bounds and static integration assertions in a lightweight harness. Full React compilation, real browser motion behavior and live Pages deployment are separate verification steps, not established by these checks.
