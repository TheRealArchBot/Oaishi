import re

with open('english-writing-exam.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace styles
content = re.sub(r'<style>.*?</style>', '<link rel=\"stylesheet\" href=\"assets/css/shared.css\">\n  <link rel=\"stylesheet\" href=\"assets/css/notes.css\">', content, flags=re.DOTALL)

# Add #q10 to nav
content = content.replace('<a href=\"#q9\">Q9 Assertion</a>\n</nav>', '<a href=\"#q9\">Q9 Assertion</a>\n  <a href=\"#q10\">Q10 Vocab Builder</a>\n</nav>')

# Update Hero
content = content.replace('<span class=\"hero-pill\">9 Question Types</span>', '<span class=\"hero-pill\">10 Sections</span>')

# Replace Q8 diagram
q8_orig = '''<div class=\"cluster\">
<span class=\"leaf\">  [Low self-esteem] ← comparing own life to curated highlights</span>
           |
  <span class=\"node\">[Comparison Culture]</span>
           |
  <span class=\"node\">[Cyberbullying]</span> ── harassment, threats, public shaming
           |
           └──────── <span class=\"center\">SOCIAL MEDIA → Depression & Anxiety</span> ──────┐
                                                                       |
           <span class=\"node\">[FOMO]</span> ── fear of missing out → constant checking               |
           |                                                           |
  <span class=\"leaf\">Anxiety about being left out</span>                                    |
                                                              <span class=\"node\">[Sleep Disruption]</span>
                                                                       |
                                                     <span class=\"leaf\">Late night scrolling → mood disorders</span>
                                                                       |
                                                          <span class=\"node\">[Dopamine Addiction]</span>
                                                                       |
                                                   <span class=\"leaf\">Withdrawal anxiety when offline</span>
  </div>'''

q8_new = '''<div class=\"flex-cluster\">
    <div class=\"fc-row\">
      <div class=\"fc-box center\">SOCIAL MEDIA<br>Depression & Anxiety</div>
    </div>
    <div class=\"fc-arrow\">↓</div>
    <div class=\"fc-row\">
      <div class=\"flex-cluster\" style=\"background:transparent; border:none; padding:0;\">
        <div class=\"fc-box node\">Comparison Culture</div>
        <div class=\"fc-arrow\">↓</div>
        <div class=\"fc-box leaf\">Low self-esteem ← comparing own life</div>
      </div>
      <div class=\"flex-cluster\" style=\"background:transparent; border:none; padding:0;\">
        <div class=\"fc-box node\">Cyberbullying</div>
        <div class=\"fc-arrow\">↓</div>
        <div class=\"fc-box leaf\">Harassment & public shaming</div>
      </div>
      <div class=\"flex-cluster\" style=\"background:transparent; border:none; padding:0;\">
        <div class=\"fc-box node\">FOMO</div>
        <div class=\"fc-arrow\">↓</div>
        <div class=\"fc-box leaf\">Anxiety about being left out</div>
      </div>
      <div class=\"flex-cluster\" style=\"background:transparent; border:none; padding:0;\">
        <div class=\"fc-box node\">Sleep Disruption</div>
        <div class=\"fc-arrow\">↓</div>
        <div class=\"fc-box leaf\">Late night scrolling → mood disorders</div>
      </div>
    </div>
  </div>'''
content = content.replace(q8_orig, q8_new)

# Add Q10 Vocab Builder
q10_content = '''</div>

<!-- ===================== Q10 ===================== -->
<div class=\"q-section q10\" id=\"q10\">
  <div class=\"q-header\">
    <div class=\"q-num\">Q10</div>
    <div>
      <div class=\"q-title\">Vocabulary Builder 📚</div>
      <div class=\"q-sub\">Better words for better grades! Ditch the basic words.</div>
    </div>
  </div>

  <div class=\"brain\">Replacing simple words with precise academic vocabulary is the easiest way to instantly elevate your essay's tone.</div>

  <table>
    <tr><th>Instead of saying...</th><th>Try using...</th><th>Example in a sentence</th></tr>
    <tr><td><strong>Bad / Terrible</strong></td><td><span class=\"badge b-coral\">Detrimental</span></td><td>Corruption has a <em>detrimental</em> effect on society.</td></tr>
    <tr><td><strong>Good / Important</strong></td><td><span class=\"badge b-mint\">Crucial</span> / <span class=\"badge b-mint\">Vital</span></td><td>Education is <em>crucial</em> for national development.</td></tr>
    <tr><td><strong>Big / Huge</strong></td><td><span class=\"badge b-sky\">Substantial</span> / <span class=\"badge b-sky\">Profound</span></td><td>AI has caused a <em>profound</em> shift in the industry.</td></tr>
    <tr><td><strong>Show / Prove</strong></td><td><span class=\"badge b-purple\">Demonstrate</span></td><td>Studies <em>demonstrate</em> that exercise reduces stress.</td></tr>
    <tr><td><strong>Make / Create</strong></td><td><span class=\"badge b-orange\">Generate</span> / <span class=\"badge b-orange\">Produce</span></td><td>This policy will <em>generate</em> new opportunities.</td></tr>
    <tr><td><strong>Fix / Solve</strong></td><td><span class=\"badge b-yellow\">Resolve</span> / <span class=\"badge b-yellow\">Remedy</span></td><td>We must <em>resolve</em> the systemic issues immediately.</td></tr>
  </table>

  <div class=\"tip\">Don't overcomplicate. Use these words naturally when they fit. If you use a big word incorrectly, it hurts your grade more than using a simple word correctly.</div>
</div>

<div style=\"text-align:center;color:var(--muted);font-size:13px;padding:30px 0 0;border-top:1px solid var(--border);margin-top:20px;\">'''

content = content.replace('</div>\n\n<div style=\"text-align:center;color:var(--muted);font-size:13px;padding:30px 0 0;border-top:1px solid var(--border);margin-top:20px;\">', q10_content)

# Replace Script and Add Notepad
script_orig = r'''<script>
const sections = document.querySelectorAll('.q-section');
const links = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) current = s.id; });
  links.forEach(l => { l.style.color = l.getAttribute('href') === '#' + current ? 'var(--yellow)' : ''; l.style.borderColor = l.getAttribute('href') === '#' + current ? 'var(--yellow)' : ''; });
}, { passive: true });
</script>'''

script_new = '''<!-- NOTEPAD WIDGET -->
<div class=\"notepad-widget\" id=\"notepad-widget\">
  <div class=\"notepad-header\" id=\"notepad-header\">
    <span>📝 Quick Notes</span>
    <span class=\"notepad-toggle-icon\">▲</span>
  </div>
  <div class=\"notepad-body\">
    <textarea id=\"notepad-textarea\" placeholder=\"Jot down important points here...\"></textarea>
  </div>
</div>

<script src=\"assets/js/notes.js\"></script>'''

content = content.replace(script_orig, script_new)

with open('english-writing-exam.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
