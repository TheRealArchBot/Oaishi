import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('<div class="stat-num" id="course-count">1</div>', '<div class="stat-num" id="course-count">2</div>')
content = content.replace('<div class="stat-num" id="note-count">1</div>', '<div class="stat-num" id="note-count">2</div>')

new_card = """  <a href="vocab-builder.html" class="course-card c-pink" data-sem="all" data-name="vocabulary builder">
    <div class="card-top">
      <div class="card-icon">🧠</div>
      <div class="card-meta">
        <div class="card-code">Vocabulary Builder</div>
        <div class="card-name">Essential Words</div>
        <div class="card-semester">All Semesters</div>
      </div>
    </div>
    <div class="card-body">
      <div class="card-desc">A growing collection of high-scoring academic words to elevate your essays.</div>
    </div>
    <div class="card-footer">
      <div class="card-tags">
        <span class="tag" style="background:rgba(255,143,171,0.15);color:var(--pink);">Vocab Boost</span>
      </div>
      <span class="card-arrow">→</span>
    </div>
  </a>
"""

content = content.replace('  <!-- ADD CARD (always last) -->', new_card + '\n  <!-- ADD CARD (always last) -->')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated index.html')
