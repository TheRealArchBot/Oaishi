// hub-logic.js — Core logic for the main dashboard (Course Hub)
document.addEventListener('DOMContentLoaded', () => {
  // 1. Update Stats
  function updateStats() {
    const total = document.querySelectorAll('.course-card').length;
    const courseCountEl = document.getElementById('course-count');
    const noteCountEl = document.getElementById('note-count');
    if (courseCountEl) courseCountEl.textContent = total;
    if (noteCountEl) noteCountEl.textContent = total;
    
    const testsDone = localStorage.getItem('oaishi_tests_done') || '0';
    const totalMarks = localStorage.getItem('oaishi_total_marks') || '0';
    
    const testsEl = document.getElementById('tests-taken-count');
    const marksEl = document.getElementById('total-marks-count');
    
    if(testsEl) testsEl.textContent = testsDone;
    if(marksEl) marksEl.textContent = totalMarks;

    // Calculate Analytics
    const tCount = parseInt(testsDone);
    const mCount = parseInt(totalMarks);
    
    if (tCount > 0) {
      const maxPossible = tCount * 150; // 15 questions * 10 points
      const accuracy = Math.round((mCount / maxPossible) * 100);
      const level = Math.floor(mCount / 500) + 1;
      
      let rank = "Beginner Scholar 📚";
      if (accuracy >= 95) rank = "Writing Goddess 🔥";
      else if (accuracy >= 85) rank = "Elite Academic 🎓";
      else if (accuracy >= 70) rank = "Advanced Writer ✍️";
      else if (accuracy >= 50) rank = "Steady Learner 🌱";

      if (document.getElementById('avg-accuracy')) document.getElementById('avg-accuracy').textContent = accuracy + '%';
      if (document.getElementById('knowledge-level')) document.getElementById('knowledge-level').textContent = 'Level ' + level;
      if (document.getElementById('performance-rank')) document.getElementById('performance-rank').textContent = rank;
    }
  }

  // 2. Last updated date
  const lu = document.getElementById('last-updated');
  if (lu) {
    lu.textContent = 'Last updated: ' + new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  // 3. Search Filter
  window.filterCards = function() {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;
    const q = searchInput.value.toLowerCase();
    let any = false;
    
    const allCards = document.querySelectorAll('.course-card, .essential-card');
    
    allCards.forEach(c => {
      const name = c.dataset.name || '';
      const code = c.querySelector('.card-code')?.textContent.toLowerCase() || '';
      const desc = c.querySelector('.card-desc')?.textContent.toLowerCase() || '';
      const semester = c.querySelector('.card-semester')?.textContent.toLowerCase() || '';
      
      const matches = name.includes(q) || code.includes(q) || desc.includes(q) || semester.includes(q);
      c.classList.toggle('hidden', !matches);
      if (matches) any = true;
    });

    let empty = document.getElementById('empty');
    if (!any) {
      if (!empty) {
        empty = document.createElement('div');
        empty.id = 'empty'; empty.className = 'empty-state';
        empty.innerHTML = '<div style="font-size:2rem">🔍</div><p>No matches for "<strong>' + q + '</strong>"</p>';
        const grid = document.getElementById('card-grid');
        if (grid) grid.appendChild(empty);
      }
    } else if (empty) empty.remove();
  };

  // 4. Semester Filter
  let activeSem = 'all';
  window.filterSem = function(btn, sem) {
    activeSem = sem;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.course-card').forEach(c => {
      const match = sem === 'all' || c.dataset.sem === sem;
      c.classList.toggle('hidden', !match);
    });
    const addCardBtn = document.getElementById('add-card');
    if (addCardBtn) addCardBtn.classList.toggle('hidden', sem !== 'all');
  };

  // 5. Mobile Nav Scroll Logic
  let lastScroll = 0;
  const mNav = document.querySelector('.mobile-nav');
  if (mNav) {
    window.addEventListener('scroll', () => {
      if (window.innerWidth > 950) return;
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        mNav.style.transform = 'translateY(0)';
        return;
      }
      if (currentScroll > lastScroll) {
        mNav.style.transform = 'translateY(100%)';
      } else {
        mNav.style.transform = 'translateY(0)';
      }
      lastScroll = currentScroll;
    });
  }

  updateStats();
});
