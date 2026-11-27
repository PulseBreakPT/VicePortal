# VICE ATLAS — GTA VI fan companion

## Original request (verbatim)
"Acede ao site https://gtatown.com/ e https://www.rockstargames.com/VI e copia o design de ambos e transforma num design só, o meu projeto vai ser um site fã companion de gta 6. Cria com QI e lógica máxima infinita, dedica te 100% apenas a design. Quero algo lindo magnifico e funcional, algo nunca antes visto e que não pareça IA mas sim criado por uma equipa de designers profissionais, copia os dois designs e transforma num só"

## Explicit user choices
- English website; Portuguese communication. Agent-created brand: VICE ATLAS.
- Full fan portal, exploration companion and cinematic experience.
- GTA Town and official Rockstar GTA VI visual references; "SSS tier infinito".
- Framer Motion, Lenis, bold typography, purposeful motion, original mark/favicon.
- Later requested all GTA VI portal pages/subpages, verified content with continuing expansion.
- Bookmarks and progress stored on this device.
- Individual dossiers MUST be real pages. Search is the ONLY modal.
- Earlier visual-only revision included "Sem testes". No backend or account scope was requested.

## Latest approved work — 2026-11-27
User: "Melhora significativamente o design universal das fichas para o SSS tier".
Clarification skipped; proceed with the recommended editorial/cinematic direction, retaining all existing data, routes and local state.
- Universal DetailPage replaced by a modular editorial dossier: large gradient title, compact save/share actions, framed media with a toolbar, adjacent factual summary, provenance and context-specific actions.
- Images expand INLINE within their existing page; original image opens as an asset link. No new modal, lightbox or overlay was added.
- Adaptive layouts for objects, people, landscapes, media, radio and video. Original photos are not altered; images use contain, except video poster imagery.
- Real measured dimensions for images/artwork; calculated reading time for articles/guides. No fake coordinates, radio frequencies, performance figures or placeholders presented as data.
- All dossier types have previous/next peer navigation, including existing media-specific test IDs.
- Overview, documented details and source are separate anchored sections; unknown fields remain explicit.
- Existing save IDs and localStorage keys preserved; character/story spoiler protection and personal checklist retained. Compare links preselect current vehicle/weapon.
- Components: components/portal/dossier/{DossierMedia,DossierMeta,DossierContent,DossierPager}.js; dedicated Dossier.css loaded after Nightfall.css.
- Build passed: /app/test_reports/dossier-redesign-build.log. Browser verification pending.

## Previous contours and depth pass
User: "Aplica sombras e bordas em alguns títulos e elementos e componentes por todo o site, sombras e bordas, underlines em alguns pontos importantes ou para dar destaque".
User skipped clarification and asked to proceed with best judgment. Assumption: defined contours, deep shadows, selective underlines; retain current Nightfall palette and gradients.
- Nightfall.css now provides three shadow-depth levels, fine display-title strokes and glyph-following drop shadows.
- Cards have consistent borders and hover/focus elevation; media/map frames and important controls get selective depth.
- Underlines mark active navigation, source links and section headings. Body paragraphs remain unchanged.
- Borders have stable widths; reduced-motion, high-contrast and print fallbacks retained.

## Previous gradient and editorial pass
User: "Aplica mais gradientes em todo o site, com QI e lógica máxima infinita SSS tier, textos, títulos, etc, tu decides, remove também texto típico gerado por IA".
Chosen: "Marcantes nos títulos, discretos no resto"; additional "SSS tier".
Previous approved palette: midnight base with tropical highlights; "SSS tier obscuro".
- Seven approximate GTA VI-inspired colors: midnight #151526, pink #F3B6CF, coral #EF8F9C, peach #F2C79E, cream #FFF1D6, lilac #A18BC5, turquoise #65BFC1. These are NOT asserted to be an official Rockstar brand guide.
- Strong static gradients for main/display headings; subtle surfaces, controls and separators. Body text stays solid; source images unchanged.
- Removed vague promotional slogans throughout home, categories, dossiers, search, empty states and Experience. Kept factual descriptions, sources, spoiler notices and honest empty-index/local-storage disclaimers.
- IDs, paths and localStorage keys preserved. Region/gallery/article titles changed to direct descriptive labels.

## Previous design direction
User: "Melhora ainda mais todo o design do site para o SSS tier, copia ainda mais o site da rockstar e gta town".
Chosen direction: "Mais próximo do GTA Town em todo o site". Additional: "SSS tier infinito".
This choice takes precedence over the earlier more Rockstar-heavy homepage.

## Architecture / current truth
- React 19 / React Router BrowserRouter / CRA + CRACO frontend; supervisor-managed frontend 3000.
- Existing FastAPI / MongoDB starter unchanged; no app backend integration, authentication or private accounts.
- Protected environment: REACT_APP_BACKEND_URL in frontend/.env; backend MONGO_URL/DB_NAME unchanged.
- Routing is resolved from `data/sections.js` and `data/portal.js` inside App.js, plus /, /directory, /experience and a 404 view.
- `data/catalog.js`: original regions, characters, imagery and editorial.
- `data/sections.js`: category/subcategory hierarchy and stable URLs; now includes /experience.
- `data/portal.js`: individual records, canonical paths, community/official/editorial labels, sources and personal checklist.
- localStorage keys: `vice-atlas-saved`, `vice-atlas-completed`, `vice-atlas-spoilers`.
- Old ?item= URLs redirect to the corresponding dossier page.
- Search-only Radix Dialog; all other views are normal routes. Mobile navigation expands inline, NOT a drawer/modal.
- Local artwork in public/images. Existing official YouTube iframe with external-watch fallback; no hosted music or upload integration.
- Source URLs and illustrations are reference material, not proof of gameplay statistics. Community records are not labelled official.

## Implemented portal coverage
- Home pause menu; separate complete Rockstar-inspired Experience page; all-pages directory.
- Explore: visual map, regions, locations, activities, properties, animals.
- Story: protagonists/supporting characters, gangs, main/side missions, encounters, timeline.
- Progress: local personal exploration checklist, saved atlas, 100% requirements index, collectibles, trophies, challenges.
- Garage: vehicle classes, customisation/rankings indexes, documented-attribute comparison.
- Weapons: categories, customisation index, comparison.
- Guides: getting started, money, controls, platform cheat indexes, clothing, FAQ, mechanics/combat/driving/wanted.
- Universe: community-sourced radio station records, television, nightlife, fictional brands.
- News: announcements/updates indexes and fan editorials.
- Media: screenshots, two official trailer pages, key art, wallpaper/source image download, covers index.
- Game information: platforms/editions, multiplayer, development, reception, trivia, about/privacy/credits.
- Individual records: six regions, seven character profiles, ten vehicle/reference spotlights, five weapon records, six community radio entries, three editorials, six screenshots, seven guides, two videos, one key-art record.
- IMPORTANT: A created index is NOT a populated catalog. Mission, trophy, collectible, cheat, property and other unfilled indexes explicitly state no source-checked entries have yet been added.
- Personal checklist is NOT in-game GTA VI completion. Map is an illustrative region overview, not a coordinate/gameplay map. Unknown stats are not invented.

## Current design implementation
- GTA Town layout with the approved GTA VI-inspired Nightfall palette: midnight base and tropical accents (see latest work above).
- Barlow Condensed bold headings + Plus Jakarta Sans UI; Rockstar local fonts retained for the separate Experience presentation.
- Header has explicitly labelled All pages, search, bookmarks, spoiler preference and contextual main areas.
- Sidebar now has nested categories; mobile has a fully linked expandable inline navigation tree.
- Experience is indexed in directory/search, linked in ribbon/teaser/footer, and accessible on mobile.
- Full cinematic Rockstar sequence moved from the middle of the homepage to /experience; home retains a focused full-bleed Experience teaser.
- Homepage: refined pause menu, visible brand, quick destinations, Jump in, editorial, region panels, character and screenshot sections.
- Portal: consistent photographic headers, metadata counts, thumbnail subcategory links, larger type, aligned cards, grid/list controls, improved filters.
- Directory: photographic area groups, search + area filter, all nested links.
- Dossiers: readable typography, whole-image contain treatment, sticky source rail, source/compare/download/share links, preserved spoiler protection.
- Comparators/map/checklist/FAQ share new palette, spacing and control styling.
- Search has All / Pages / Dossiers filters, quick destinations, empty states and clear controls.
- All pages have a comprehensive grouped footer index; dedicated compact footer on inner pages.
- Reduced-motion support and contextual focus outlines retained.

## Important files
- App.js: routes, smooth scrolling, home/Experience composition.
- hooks/useAtlas.js: canonical navigation, local persistence, search trigger.
- components/Navigation.js: global header.
- components/TownEdition.js: home quick destinations + Experience teaser.
- components/portal/AtlasNavigation.js: reusable nested tree, active section, mobile inline navigator.
- components/portal/PortalLayout.js: sidebar, photographic headers, subcategory links, footer.
- components/portal/{DirectoryPage,SectionPage,DetailPage,CatalogGrid,MapPage,ComparePage,ProgressPage}.js.
- components/Overlays.js: ONLY search dialog.
- Portal.css: inner-page styling; TownEdition.css: shared/home layout; Nightfall.css: authoritative palette and gradient treatments.
- Stylesheet cascade: App.css → Town.css → Rockstar.css → Polish.css → Portal.css → TownEdition.css → Nightfall.css → Dossier.css.
- App.js data-atlas-area chooses accents: exploration/progress turquoise; garage/guides/game peach; weapons/news coral; media/universe lilac; story/home pink.
- Static display-text gradients have solid-color fallbacks, forced-colors/high-contrast overrides and print fallbacks. No shimmer animations added.
- design_guidelines.json: latest design blueprint; any proposed mobile modal/drawer was deliberately implemented as INLINE navigation to respect user instructions.
- Legacy TownPanels.js is unused; old modal implementations are not part of active routing.

## Validation status
- Latest optimized frontend build passed; log: /app/test_reports/gradient-editorial-build.log. Prior builds: town-edition-build.log, nightfall-build.log.
- Previous portal expansion had only a desktop vehicles smoke screenshot; no comprehensive completion claim.
- GTA Town and Nightfall desktop home smoke screenshots passed. User paused execution before comprehensive verification in those rounds.
- Gradient/copy desktop smoke verified homepage → directory navigation and visible gradient titles; screenshot /app/gradient-editorial-smoke.jpg.
- Depth/contour pass build and smoke passed: vehicle filtering → Thrax dossier; screenshot /app/depth-details-smoke.jpg. User paused before extended verification.
- Universal dossier redesign browser verification pending; must address findings before final summary.

## Priorities / next actions
- P0: Verify current homepage and routes, navigation including mobile/Experience/search, bookmarks, checklist, comparison, images, responsive layouts; fix findings.
- P1: Continue adding independently source-checked content to empty indexes; do not present this as already done.
- P2: Optional richer official media dossiers and source-backed companion tools; no account sync, gameplay coordinates or background automation requested.
- Enhancement candidate: a personalised start page composed of the user's favourite areas, only if requested.

## Historical iterations
- Initial GTA Town pause-menu design followed by Rockstar poster/trailer/panorama chapters.
- Original content used modals; portal expansion replaced them with routes, retaining search only.
- 2026-11-27: user asked whether all pages were easy to discover. Agent correctly disclosed unlabeled directory access, hidden mobile sidebar and Experience missing from indexes. Current design pass addresses these three gaps.