# Vehicle catalogue audit — 2026-11-27

The checked-in snapshot records the 559 visible entries of the 560-entry [GTA Town vehicle index](https://gtatown.com/garage/vehicles), including 281 Standout variants. One story vehicle was hidden by the source; it is not guessed. The [public creator-kit data](https://gtatown.com/creators/data) is attributed to GTA Town under CC BY 4.0, adapted into the atlas schema. This is coverage of that source, not a guarantee of every vehicle in the game. GTABase lists a different total and was consulted for cross-reference only, not bulk imported.

- 559 unique dossier IDs, including all seven original IDs.
- 441 records with source-reported speed ratings; 118 without them. Ratings are not measured speeds.
- 552 neutral image placeholders and seven inherited illustrations whose GTA VI likeness is unverified.
- 21 possessive-name records conservatively spoiler-flagged pending source-export flags; these flags are not independently confirmed story spoilers.
- Manufacturer, class, source-reported ratings, browsing filters and comparison integration; unknown specifications are left unverified.

The build attempts to import the no-key public JSON export. The checked-in reviewed snapshot is retained if the request, schema, completeness or ID-preservation checks fail. No licensed/keyed endpoint is used. Importing the complete export has not yet been verified. A lightweight JavaScript execution of the vehicle validator passed 5,614 checks; a production browser/build test is separate and not yet confirmed.

## Image reference follow-up — 2026-11-27

Eight explicit remote image references were checked against their exact GTA Town detail pages and opened individually, including all seven legacy illustrations and the distinct Honeycomb Emerus variant. The other 551 checked-in records retain the neutral placeholder, not a guessed image. The public index explicitly reports missing photos for some cars. The image references point to original public URLs; no image files are copied or claimed to be covered by the public data licence. Game imagery belongs to Rockstar Games. External availability and reuse permissions are not guaranteed. The build attempts one public index fetch and accepts only exact title/card and matching detail/image slug evidence; unmatched or ambiguous cards remain placeholders. This automatic import is not yet verified against live raw HTML. The reviewed snapshot survives network failures. Coverage is reported by the validator; the eight references are source-matched, not independently authenticated in-game screenshots.

## Second image pass — 2026-11-27

The previous production workflow reported 268 source-matched image references for 559 records (291 missing). Two additional manually opened gameplay screenshots show the exact in-game names Black Widow Emerus and Seaspray Emerus; their source pages and original publisher credit are recorded in the manifest. The screenshot host is GTA6.house, credited to GamesRadar+. The GTA Town importer now also accepts a manufacturer-prefixed dossier slug when the exact title and image slug agree, without allowing base-model substitution. New coverage must be measured after CI; not all absent pictures are available in the public index. External references are subject to availability and rights-holder permissions.

## Third image pass — 2026-11-27

PR #19 passed CI with 270 references and 289 missing. This pass adds the directly inspected Dante's Vitello image from GTA6GPS and attempts two supplemental public catalogues: GTA6GPS and AlcastHQ (Standout icons, identified as icons rather than gameplay screenshots). Sources must match exact names, class where supplied, and image filenames; ambiguous or duplicate references remain unassigned. The import emits a complete missing-ID report. No claim of live coverage until CI completes. Remote images remain subject to availability and rights-holder permissions.

## Fourth pass: persistent image pipeline

PR #20 validated 349/559 references (210 missing). Adds GTA VI Base's MetaForge-attributed Standout tracker as an exact-name and exact-filename source; the Sandblasted Cliffhanger and Tactical Caddy reference images were inspected directly. No generic fallback or different variant is accepted. A bounded-concurrency audit records actual image HTTP status, file signature, byte size and SHA-256, with missing IDs and duplicate-byte groups. These checks do not prove visual identity. A downloadable CI snapshot and main-only post-deployment persistence job preserve associations across builds; stale builds cannot overwrite newer commits. Local WebP is supported only with an explicit permission reference, an ID-specific path and a verified hash. No third-party image is copied locally without permission. A strict audit mode is available via REQUIRE_COMPLETE_VEHICLE_IMAGES=1; regular deployment reports outstanding issues rather than blocking all site updates.
