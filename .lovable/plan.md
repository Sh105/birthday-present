# Romantic Birthday Story Game

## Goal
Build a complete, mobile-first, single-page birthday journey that plays like a handmade romantic visual novel: mysterious opening, interactive celebration, intimate story chapters, wish and letter interactions, then a quiet cinematic ending.

## Experience flow
1. **Start screen** — near-black star field, subtle purple/blue particles, `PLAYER 2 DETECTED ♡`, `LEVEL 24`, understated Gengar silhouette, and a glowing `PRESS START` control.
2. **Birthday encounter** — a detailed layered cake with sequentially lighting candles, `BLOW OUT CANDLES` plus Space-key support, then extinguish/whoosh, heart and star confetti, magical ghost/spider lily blooms, `BOSS DEFEATED ✓`, birthday reveal, and `CONTINUE STORY →`.
3. **Story chapters** — cinematic transitions through the supplied chapter copy, with short editable relationship-writing placeholders that are clearly identified in the content data.
4. **Voice gift** — a custom audio-event panel using the provided placeholder path; background music automatically ducks while the message plays, then restores.
5. **Playlist moment** — one primary control opening the exact supplied Spotify playlist in a new tab, with no invented songs.
6. **Personal discoveries** — restrained Gengar, magic, gaming, flower, and car references woven between moments rather than isolated hobby sections.
7. **24 Wishes** — an interactive glowing glass jar with 24 folded notes; each exact supplied wish appears once per run in a shuffled sequence, with extraction/unfold animation, numbering, and `ANOTHER WISH`.
8. **Open When archive** — 12-envelope game inventory; each opens into a soft paper-style paginated reader with `NEXT PAGE`, `READ AGAIN`, `BACK TO LETTER MENU`, and `NEXT LETTER`. Unsupplied letter bodies remain intentionally labeled editable placeholders rather than invented prose.
9. **Final chapter** — interface quiets into a slow night sky with quest-complete copy, an editable final-message placeholder, and `♡ END OF CHAPTER ONE ♡`.

## Interaction and presentation
- Add a minimal fixed story HUD with chapter progress and accessible mute/unmute control after the story begins.
- Create atmospheric particles, scanlines, star fields, flower blooms, candle flicker, confetti, note extraction, envelope opening, and page transitions with CSS and lightweight React state; respect reduced-motion preferences.
- Use an elegant dark neon palette with purple as the thread, electric blue and magenta accents, controlled glow, translucent surfaces, and a softer letter-reading mode.
- Keep controls touch-friendly, dialogs scrollable, the cake/jar stable at narrow widths, and prevent horizontal overflow.
- Use locally referenced placeholder audio URLs. Missing optional audio will fail gracefully without breaking the experience.

## Maintainable content structure
- Keep recipient name, age, audio paths, Spotify URL, exact wishes, letter titles/pages, story placeholders, and final message together in a plainly labeled content module.
- Split the experience into focused components for the opening, cake encounter, chapters, audio event, wish jar, letter archive/reader, final scene, ambient effects, and HUD.
- Use the project’s existing React/TanStack foundation because it is the fixed runtime here; the result remains frontend-only and requires no database or login.
- Add route-specific title, description, Open Graph text, and social-card metadata.

## Validation
- Test the complete journey in sequence, including Space-key candle interaction, celebration effects, chapter progression, mute behavior, voice-message music ducking, exact Spotify destination, all 24 unique wishes, every envelope and reader control, and final-scene arrival.
- Verify desktop and phone layouts, keyboard focus, reduced motion, missing-audio handling, no horizontal scrolling, no console errors, and a clean preview build.
