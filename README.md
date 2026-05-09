# 📚 Oaishi's Study Hub

A beautifully designed, highly interactive, and deeply personalized study platform created to make exam preparation engaging, fun, and emotionally supportive. 

## ✨ Key Features

### 1. 📖 Interactive Modular Notes
* **Clean Architecture**: Built with a modular structure (`index.html` hub linking to specific subject pages like `english-writing-exam.html`).
* **Visual Learning**: Uses color-coded sections, interactive flowcharts, cohesive device tables, and clear typographic hierarchies to make dense academic concepts easy to digest.
* **Responsive Design**: Fluid typography (`clamp()`), CSS Grid, and Flexbox ensure the notes look stunning on massive PC monitors and tiny mobile screens alike.

### 2. 🧠 Dynamic Pop Quiz System
* **Context-Aware Injections**: A massive bank of **72 questions** is hard-mapped to specific note sections (e.g., `q1`, `q2`). Quizzes only physically appear at the bottom of the exact section they test, ensuring the student is never tested on material they haven't read yet.
* **Smart Fade-In**: Uses `IntersectionObserver` to keep quizzes completely invisible until the user actually scrolls down and finishes reading the section.
* **One-Time Answerable**: Powered by `localStorage`, questions lock after answering. The system remembers what has been answered across sessions, meaning no duplicate questions.
* **Persistent Scoring**: A `⭐️ Score` tracker sits in the navigation bar, updating dynamically and persisting via browser storage.

### 3. 📝 Persistent "Quick Notes" Widget
* **Sticky Notepad**: A collapsible floating text area pinned to the bottom right of the screen.
* **Subject Isolation**: Uses URL pathing as `localStorage` keys, ensuring notes taken on the English exam page don't overwrite notes taken on the Vocabulary Builder page.
* **Word Count Tracking**: Tracks word count to trigger hidden motivational achievements.

### 4. 📴 Progressive Web App (PWA) Offline Support
* **Service Worker (`sw.js`)**: Automatically intercepts and caches all HTML, CSS, JS, and Font assets on the very first load.
* **Zero Connectivity Required**: Once opened, the entire application—including the dynamic quizzes, notepad, and easter eggs—functions flawlessly on a train, plane, or during an internet outage.

### 5. 🤫 30 Hidden Easter Eggs & Playful Roasts
The platform is heavily gamified with exactly **30 hidden interactions**, specifically customized for Oaishi, to keep her motivated:
* **Time & Schedule**: Rewards for studying 15, 30, 60, and 90 minutes. Special messages for studying late at night (11PM-4AM) or early morning (5AM-8AM).
* **Behavioral Roasts**:
  * *Speed Reader*: Roasts the user for scrolling >1500px in under 200ms.
  * *Rage Clicker*: Roasts the user for clicking 7 times in 2 seconds.
  * *Distracted*: Tracks tab-switching (`blur` events) to call out YouTube/Netflix distractions.
  * *Copy-Paster*: Warns the user about academic integrity if they hit Ctrl+C multiple times.
  * *Window Resizer*: Tells the user to stop dragging the browser window and focus.
* **Notepad Triggers**: Reacts to typing specific emotional or personal keywords (`stress`, `tired`, `ahsan`, `love`).
* **Deep Focus**: Detects 2 minutes of zero mouse movement and gently reminds the user to blink.
* **Secret Codes**: Typing the Konami code "ahsan" anywhere on the page triggers a shower of love.

## 🗂️ File Structure

```text
/
├── index.html                  # Main Hub & Course Dashboard
├── english-writing-exam.html   # Core Subject Notes
├── vocab-builder.html          # Searchable Vocabulary Dictionary
├── sw.js                       # Service Worker for Offline Caching
├── README.md                   # Project Documentation
└── assets/
    ├── css/
    │   ├── shared.css          # Global variables, typography, and utility classes
    │   ├── index.css           # Dashboard specific styles
    │   └── notes.css           # Note pages, tables, essays, and widget styles
    └── js/
        ├── index.js            # Dashboard filtering and SW registration
        ├── notes.js            # Core engine: Quizzes, Notepad, and 30 Easter Eggs
        └── quiz-bank.js        # Global array containing all 72 quiz questions
```

## 🚀 Deployment

This project requires **zero backend dependencies**. It is a purely static site powered by vanilla HTML, CSS, and JS.
1. Drop the root folder into **Netlify**, **Vercel**, or **GitHub Pages**.
2. Alternatively, simply double-click `index.html` to run it locally (Note: Service Worker offline caching requires a basic HTTP server or a deployed environment).

## 💡 Future Expansion
To add a new subject:
1. Copy `english-writing-exam.html` as a template.
2. Add the new `.q-section` IDs to your HTML.
3. Add new corresponding questions to `assets/js/quiz-bank.js`.
4. Link the new page in `index.html`. 
The `notes.js` engine will automatically handle everything else (Notepad isolation, Quiz injection, Easter eggs).
