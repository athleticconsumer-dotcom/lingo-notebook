# Lingo Notebook

A fill-in-the-blanks vocabulary notebook for any language, inspired by the Ultimate Language Notebook.

1. Choose the language you **know** (English, German, French or Russian). Every word is printed in this language.
2. Choose the language you **learn** (any language, including your own custom one). You write it in the blanks.
3. Work through 76 topics (2,500 words and sentences), add your own words and notes on the free grid page, and review your answers as flashcards.

## Features
- Two-page notebook spread per topic: word list with blanks on the left, grid paper for own words, dialogues and notes on the right
- Right-to-left support for Arabic, Persian, Urdu (automatic)
- Several notebooks side by side (e.g. English → Najdi Arabic, German → Russian)
- Progress per topic and per notebook
- Flashcard review built from your own answers, with reverse mode
- Print a topic as a filled page or as an empty worksheet
- Backup and restore as a JSON file
- Installable as an app (PWA) with its own icon, works offline
- Google sign-in with Firestore sync (Firebase project lingo-notebook)

All data is stored in the browser (localStorage). No build step: open `index.html` or publish with GitHub Pages.

## Adding words
The words are in `words.js` to `words-6.js`, and `TOPIC_ORDER` in `words-6.js` sets the order of the topics. Every line is `English|Deutsch|Français|Русский`. Add lines to a topic or copy a whole topic block with a new `id`.
