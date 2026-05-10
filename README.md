# 📚 Oaishi's Study Hub

A beautifully designed, highly interactive, and deeply personalized study platform created to make exam preparation engaging, fun, and emotionally supportive.

## ✨ Key Features

### 1. 📖 Interactive Modular Notes
* **Clean Architecture**: Built with a modular structure (`index.html` hub linking to specific subject pages like `english-writing-exam.html`).
* **Visual Learning**: Uses color-coded sections, interactive flowcharts, cohesive device tables, and clear typographic hierarchies.
* **Responsive Design**: Fluid typography (`clamp()`), CSS Grid, and Flexbox ensure the notes look stunning on any device.

### 2. 🧠 Dynamic Pop Quiz System
* **Context-Aware Injections**: A massive bank of **72 questions** mapped to specific note sections. Quizzes appear as you finish reading a section.
* **One-Time Answerable**: Powered by `localStorage`, the system remembers your progress across sessions.
* **Spaced Repetition**: Questions you get wrong are prioritized and will reappear later to ensure mastery.

### 3. ⏰ Advanced Vocab Builder
* **Fisher-Yates Shuffle**: A robust shuffling engine for the 300+ word database.
* **Flashcard Mode**: Hide advanced words and reveal them with a click for active recall.
* **Favorites Vault**: Save difficult words to your personal vault for targeted study.

### 4. 📝 Persistent "Quick Notes" Widget
* **Sticky Notepad**: A collapsible floating text area pinned to the bottom right.
* **Subject Isolation**: Notes are saved per-page, so your English notes won't mix with your Math notes.

### 5. 📴 Progressive Web App (PWA)
* **Instant Offline**: Works completely without internet once loaded.
* **Auto-Update**: The Service Worker automatically fetches new content when online and activates instantly.

### 6. 🤫 50+ Hidden Easter Eggs & Playful Roasts
The platform is alive with personalized interactions:
* **💌 Love & Motivation**: Triple-click the logo for heart popups, study milestone rewards (15-90 min), and "Konami Code" secrets.
* **🔥 Playful Roasts**: Calls you out for speed-skimming, rage-clicking, copy-pasting, or getting too many quiz questions wrong in a row.
* **📝 Notepad Triggers**: Typing keywords like "stress", "tired", or "help" triggers supportive (or sassy) responses.

---

## 🗂️ File Structure

```text
/
├── index.html                  # Main Hub & Course Dashboard
├── english-writing-exam.html   # Core Subject Notes
├── vocab-builder.html          # Searchable Vocabulary Dictionary
├── sw.js                       # Service Worker (PWA Logic)
├── README.md                   # You are here
└── assets/
    ├── css/
    │   ├── shared.css          # Global variables & common styles
    │   ├── index.css           # Dashboard specific styles
    │   └── notes.css           # Note pages & widget styles
    └── js/
        ├── index.js            # Dashboard logic
        ├── notes.js            # Core engine (Quizzes, Eggs, Notepad)
        ├── quiz-bank.js        # 72+ Quiz questions
        └── vocab-data.js       # 300+ Word dictionary
```

## 🚀 Deployment
1. Drop the folder into **Netlify**, **Vercel**, or **GitHub Pages**.
2. **Zero backend needed**: Runs purely in the browser.
3. **PWA Ready**: Add it to your home screen for an app-like experience.

## 💡 Future Expansion
To add a new subject:
1. Use `english-writing-exam.html` as a template.
2. Add sections with unique IDs (e.g., `id="math-1"`).
3. Add corresponding questions to `assets/js/quiz-bank.js` with the same `section` ID.
4. The system will automatically handle the rest.

---
*Created with ❤️ for Oaishi.*
