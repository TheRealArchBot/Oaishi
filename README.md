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

### 5. 🤫 45 Hidden Easter Eggs & Playful Roasts

The platform is heavily gamified with **45 hidden interactions**, specifically customized for Oaishi:

#### 💌 Love & Motivation
* **Console messages**: Love notes printed in the browser DevTools on every page load.
* **Tab title**: Changes to *"Come back Oaishi! 🥺❤️"* whenever she switches away.
* **Triple-click logo**: Clicking the logo 3 times triggers a floating love message at the cursor.
* **Study milestones**: Motivational pop-ups at 15, 30, 45, 60, and 90 minutes of continuous study.
* **Scroll to bottom**: A reward message appears when she finishes reading to the very end.
* **Time-based greetings**: Special messages for late night (11PM–4AM) or early morning (5–8AM).
* **Konami code**: Press ↑↑↓↓←→←→BA anywhere on the page for a secret cheat-code message. 🎉
* **Offline detection**: A sweet message appears if the internet drops.
* **Secret code**: Typing `ahsan` anywhere on the page triggers a surprise message.
* **Deep reading tracker**: 2 minutes of no mouse/scroll/keypress triggers a gentle reminder to blink.
* **Text highlighting**: Selecting more than 20 characters triggers a study encouragement message.

#### 🔥 Behavioral Roasts
* **Speed-skimmer**: Roasts her for scrolling down >1500px in under 200ms.
* **Scroll-up skimmer**: Roasts her for fast-scrolling back UP (forgot what she just read).
* **Copy-paster**: Warns her on the 1st copy; escalates the roast on the 3rd.
* **Rage-clicker**: Roasts her for clicking 7+ times in 2 seconds.
* **DevTools opener**: Triggered by F12 or Ctrl+Shift+I.
* **Tab-switcher**: Calls out YouTube/Netflix after 4+ tab switches.
* **Window resizer**: Tells her to stop dragging the window after 40+ resize events.
* **Right-click**: Reminds her right-clicking won't put notes in her brain.
* **Ctrl+P (print)**: Blocks the print dialog and roasts the idea of printing instead of reading.
* **Ctrl+A (select-all)**: Points out that selecting everything still means reading it.
* **Escape key**: Reminds her there's no escaping the exam; escalates on the 3rd press.
* **5 min on same section**: Asks if she's asleep with her eyes open.

#### 📝 Notepad Keyword Triggers
Typing any of these words into the Quick Notes widget triggers a personalized response:

| Keyword | Response type |
|---|---|
| `stress` | Calming encouragement |
| `tired` | Sweet motivational message |
| `love` | Love you more |
| `ahsan` | He loves you very much |
| `help` | Roast — she's already being helped |
| `bored` | Alarmed roast — exam is coming! |
| `hate` | Tough-love pep talk |
| 50+ words written | Achievement pop-up |
| 15 backspaces in a row | Roasts the deleted content |

#### 🧠 Quiz Roasts
* Correct answer → love message + score increase.
* Wrong answer → gentle encouragement.
* 3 wrong answers in a row → Internet Explorer roast.

---

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
        ├── notes.js            # Core engine: Quizzes, Notepad, and 45 Easter Eggs
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
