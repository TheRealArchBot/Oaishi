# Oaishi's Notes 📚

A beautifully designed, centralized hub for all university courses and exam notes. Built to make studying less stressful and more effective.

## 🚀 Features

- **Centralized Dashboard**: Search, filter, and track all available notes across different semesters.
- **Rich Formatting**: Notes are formatted beautifully with diagrams, callouts, alerts, color-coded sections, and interactive elements.
- **Vocabulary Builder**: A built-in section featuring academic vocabulary words to instantly elevate essay tone and grades.
- **Persistent Notepad**: A built-in sticky note widget on every notes page that automatically saves your thoughts to the browser using `localStorage`.

## 📁 File Structure

The project has been refactored for maintainability by separating concerns:

```
/
├── index.html                   ← Main hub (start here)
├── english-writing-exam.html    ← Developing Writing Skill — exam notes
├── assets/
│   ├── css/
│   │   ├── shared.css           ← Fonts, colors, and global variables
│   │   ├── index.css            ← Home page styles (grid, cards, toolbar)
│   │   └── notes.css            ← Exam notes styles (diagrams, tables, notepad)
│   └── js/
│       ├── index.js             ← Home page logic (search, filter, stats)
│       └── notes.js             ← Notes page logic (notepad widget, sticky nav)
```

## 🛠️ How to Add a New Course

1. **Create the HTML File:** Create a new `.html` file (e.g., `biology-exam.html`).
2. **Link the Assets:** Include the CSS and JS at the top and bottom of your file.
   ```html
   <link rel="stylesheet" href="assets/css/shared.css">
   <link rel="stylesheet" href="assets/css/notes.css">
   <!-- Content goes here -->
   <script src="assets/js/notes.js"></script>
   ```
3. **Update the Hub:** Open `index.html` and copy-paste a course card block to the `#card-grid`. Update the `href`, name, description, semester tag (`data-sem`), and color class.
4. **Deploy:** Upload all files together to Netlify Drop, ensuring the `assets/` folder is intact.

### Course Card Template

```html
<a href="YOUR-FILE-NAME.html" class="course-card c-mint" data-sem="sem2" data-name="course name here">
  <div class="card-top">
    <div class="card-icon">📖</div>
    <div class="card-meta">
      <div class="card-code">Course Name</div>
      <div class="card-name">Exam Notes</div>
      <div class="card-semester">Semester 2</div>
    </div>
  </div>
  <div class="card-body">
    <div class="card-desc">Short description of what's covered.</div>
  </div>
  <div class="card-footer">
    <div class="card-tags">
      <span class="tag t-mint">Exam Ready</span>
    </div>
    <span class="card-arrow">→</span>
  </div>
</a>
```

**Color themes:** `c-yellow`, `c-mint`, `c-sky`, `c-coral`, `c-purple`, `c-orange`, `c-pink`
**Semester filters:** `sem1`, `sem2`, `sem3`, `sem4`

## 📝 Notepad Feature

Every notes page now has a built-in notepad widget floating in the bottom right corner.
- Click the header to open/close it.
- Type any quick thoughts, reminders, or questions.
- Your notes are saved locally in the browser — they stay even after you close the tab. Each course page maintains its own separate notepad.

## 🌐 Hosting

1. Put all files in one folder (keep the `assets/` subfolder inside).
2. Go to [netlify.com/drop](https://netlify.com/drop).
3. Drag the entire folder onto the page.
4. Share the link!

Happy studying! 🎓
