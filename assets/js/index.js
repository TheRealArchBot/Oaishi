// Update stats
function updateStats() {
  const active = document.querySelectorAll('.course-card:not(.locked)').length;
  const total = document.querySelectorAll('.course-card').length;
  document.getElementById('course-count').textContent = total;
  document.getElementById('note-count').textContent = active;
}

// Last updated
const lu = document.getElementById('last-updated');
if (lu) {
  lu.textContent = 'Last updated: ' + new Date().toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });
}

// Search
function filterCards() {
  const q = document.getElementById('search').value.toLowerCase();
  let any = false;
  document.querySelectorAll('.course-card').forEach(c => {
    const name = c.dataset.name || '';
    const code = c.querySelector('.card-code')?.textContent.toLowerCase() || '';
    const matches = name.includes(q) || code.includes(q);
    c.classList.toggle('hidden', !matches);
    if (matches) any = true;
  });
  let empty = document.getElementById('empty');
  if (!any) {
    if (!empty) {
      empty = document.createElement('div');
      empty.id = 'empty'; empty.className = 'empty-state';
      empty.innerHTML = '<div style="font-size:2rem">🔍</div><p>No courses match "<strong>' + q + '</strong>"</p>';
      document.getElementById('card-grid').appendChild(empty);
    }
  } else if (empty) empty.remove();
  const addCardBtn = document.getElementById('add-card');
  if (addCardBtn) addCardBtn.classList.toggle('hidden', !!q);
}

// Semester filter
let activeSem = 'all';
function filterSem(btn, sem) {
  activeSem = sem;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.course-card').forEach(c => {
    const match = sem === 'all' || c.dataset.sem === sem;
    c.classList.toggle('hidden', !match);
  });
  const addCardBtn = document.getElementById('add-card');
  if (addCardBtn) addCardBtn.classList.toggle('hidden', sem !== 'all');
}

updateStats();
