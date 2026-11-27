# VICE ATLAS — GTA VI fan companion

## Original request (verbatim)
"Acede ao site https://gtatown.com/ e https://www.rockstargames.com/VI e copia o design de ambos e transforma num design só, o meu projeto vai ser um site fã companion de gta 6. Cria com QI e lógica máxima infinita, dedica te 100% apenas a design. Quero algo lindo magnifico e funcional, algo nunca antes visto e que não pareça IA mas sim criado por uma equipa de designers profissionais, copia os dois designs e transforma num só, gosto dos dois designs então quero misturar e transformar num só"

User chose full fan portal + exploration companion + cinematic experience, requested English site, agent-created name, "SSS tier infinito". Requested Framer Motion, Lenis, cinematic reveal, meaningful motion, original logo and favicon, editorial marquee.

## Latest approved revision (takes precedence)
"Melhora ainda mais o design para o SSS tier, acede ao gtatown e copia mais ainda, quero que o site seja mesmo uma cópia"

Revisited GTA Town with actual browser screenshots at 1920×800, crawled homepage, inspected public styles, downloaded its reference images. Replaced previous skyline marketing hero with close-reference GTA Town pause-menu design. Brand retained as VICE ATLAS; site English; user communication Portuguese. Exact visual reference takes priority over previous invented neon-brutalist design.

## Architecture
- React 19 CRA frontend. Existing FastAPI/MongoDB starter unchanged because scope is explicitly design-first, with no accounts or private server data.
- Local editable content catalog in frontend/src/data/catalog.js. No simulated APIs or fake live stats.
- Browser localStorage: vice-atlas-saved (item IDs), vice-atlas-spoilers (boolean). No auth.
- Framer Motion reveals and rollover transitions, Lenis smooth scroll, prefers-reduced-motion support.
- Shadcn/Radix dialogs with persistent close control, focus management, modal body scrolling; Sonner feedback.
- Local static reference artwork in public/images, credited to Rockstar Games / GTA Town. No upload feature.
- YouTube official Trailer 2 iframe is third-party controlled with explicit external-watch fallback.

## Design implementation
- GTA Town palette: midnight navy #111222, panel #252644, cream #fff9cb, pink #ffb2c6.
- Barlow Condensed 700/800 display; Plus Jakarta Sans UI.
- Top navigation Map / Story / Progress / Garage / Guides, spoiler toggle, search, saved/user icon, full navigation menu.
- "YOUR GTA 6 PAUSE MENU" title with masked entrance. Six thumbnail menu rows, white active selection, large night-map art and crossfading image previews on rollover/focus. Up/down keyboard selection and Enter activation. Eastern-time clock honestly labeled (no fake game-day/weather).
- Rounded map-featured Jump in grid, saved-collection ring, field notes, trailer/garage/characters/gallery/regions links.
- Compact latest stories, fresh links, six-region filtered image grid, character cinematic section, gallery, slow marquee, footer.
- Original stacked VICE SVG logo and matching favicon.

## Functional flows implemented
- Map overview modal: six region selectors, zoom controls, selected-region preview opening dossier. Clearly labeled visual overview rather than navigable gameplay map.
- Full navigation menu with image rollover.
- Regions: All / City life / Coast / The wilds filters and details.
- Characters: Jason and Lucia dossiers, spoiler-protected biographies and persistent preference.
- Three editorial stories, three vehicle visual spotlights without made-up performance stats.
- Search all catalog content with Cmd/Ctrl+K; empty states; all stories/guides/garage list views.
- Save/remove regions, characters, stories, images and vehicle spotlights. Persist across reload. Collection count updates in header and dashboard.
- Image gallery filters; lightbox, arrow-key navigation, zoom, save, copy share link. Deep links via ?item=.
- Official Trailer 2 poster, click-to-load YouTube iframe, direct YouTube fallback.
- English UI with clearly disclosed unofficial status and image/source credits.

## Verification
- Optimized frontend build passes.
- Browser screenshots reviewed: close-reference hero, Garage hover image, map selection, Jump in bento.
- Initial modal grid overlap and close-button issues fixed using dedicated scroll wrapper.
- Comprehensive testing agent run pending.

## Backlog
- P0: Complete comprehensive interaction/mobile test, resolve all findings.
- P1: Any further fidelity refinements based on user feedback.
- P2: If requested separately, real navigable gameplay map + verified catalog data, more editorial entries, account sync. Do not imply these are present.

## Next tasks
Run testing agent frontend-only; inspect its report and changes; fix findings; update verification section; finish in Portuguese with concise design summary.

## Further approved revision: Rockstar fidelity
User: "Continua a copiar, copia também o site do gta 6 da rockstar".
Revisited Rockstar /VI with browser screenshots and public HTML. Kept GTA Town pause-menu navigation, adding the Rockstar presentation in the same page:
- Rockstar pastel palm announcement ribbon; Experience navigation link and menu entry.
- Official panoramic poster (rs-poster-2.webp, aspect 2560/1080), proportional and uncropped, with scroll-driven scale.
- Cinematic sunset Jason/Lucia artwork with parallax and functional Trailer 2 play control. Artwork is credited, not presented as a playing video.
- Official Only in Leonida and Screenshots wide editorial cards linked to actual map/gallery flows.
- Original Rockstar Deco/Condensed/Heavy fonts loaded locally by public/rockstar-assets.css. No claims of affiliation.
- Official artwork downloaded from the reference, optimized to WebP. Mobile artwork variants used where available.
- Shared character typography and footer updated to Rockstar Deco and pastel palms.
- New files: RockstarExperience.js, Rockstar.css, public/rockstar-assets.css. Current stylesheet cascade: App.css → Town.css → Rockstar.css.
- Build passes after moving public font/background URL declarations to the public stylesheet (CRA CSS loader cannot resolve /fonts URLs from src CSS).
- Desktop screenshots confirm ribbon, official visual style, map and trailer opening. Pending full test including mobile and anchor destinations (possible native smooth-scroll/Lenis interaction should be checked).

## Current polish request
User: "Continua a melhorar o design para o SSS tier infinito" followed by "Sem testes". Keep focus on visual refinement; do not add automated test suites or backend scope. No new requirements/questions needed.

Implemented additional craft pass:
- Animated shared white pause-menu selection surface, restrained arrow reveals, richer image hover treatment.
- Header with thin scroll-progress accent, contextual navigation highlight, subtle brand reveal, refined glass background.
- New real-image WorldPanorama replacing the generic region heading: official twilight skyline, Deco headline, image parallax, editorial metadata.
- Harmonized cards, captions, source labels, shadows, focus outlines, search pane, saved empty state, and character poster treatment.
- Improved mobile access to the saved atlas, touch targets, typography and narrow-screen spacing.
- Wire heading is now semantically "Latest stories", matching the visible design.
- Latest styles live in Polish.css after Rockstar.css. Navbar rewritten cleanly; other established content flows retained.

Validation scope for this pass: user requested no tests. Do not create functional test scripts or run backend/API suites. Only minimal visual/static quality review if required. Do not claim a comprehensive functional test pass.
