# Neon Cipher Reveal

A progressive alphanumeric reveal layered over the existing Vice Atlas typography.

- The original accessible text stays in place. Only the decorative overlay changes, preserving the original layout and final content.
- Letters retain case, digits remain digits, and spaces, punctuation and non-ASCII characters remain unchanged.
- The effect plays once per mounted component when visible. Filtered counts and other subsequently updated values appear immediately.
- Desktop titles finish within 1,050 ms; card names and counters finish sooner. Mobile titles and counters finish within 620 ms, with card scrambling disabled.
- Reduced-motion preferences, keyboard focus, hidden tabs, forced colors and printing retain readable original text.
- The animation uses bounded frame updates, no permanent intervals and explicit cleanup.

Run `node frontend/scripts/verify-neon-cipher.mjs` from the repository root. The test logic passed 13,828 assertions in a lightweight harness. Production compilation and visual browser verification remain separate.
