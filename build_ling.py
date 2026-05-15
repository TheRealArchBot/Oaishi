import re
import html

def escape_html(text):
    return html.escape(text)

with open('linguistics_notes.md', 'r', encoding='utf-8') as f:
    lines = f.read().split('\n')

html_out = ["""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Complete exam notes for Linguistics — Phonetics, Syntax, Semantics, and more. Gamified with easter eggs.">
  <title>Linguistics — Complete Notes | Oaishi's Notes</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Nunito:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/shared.css">
  <link rel="stylesheet" href="assets/css/notes.css">
</head>
<body>

  <nav>
    <span class="nav-logo"><a href="index.html" style="color:var(--yellow);text-decoration:none;">← Oaishi's Notes</a></span>
    <a href="#ling1">Saussure</a>
    <a href="#ling2">Chomsky</a>
    <a href="#ling3">Phonetics</a>
    <a href="#ling4">Phonology</a>
    <a href="#ling5">Morphology</a>
    <a href="#ling6">Syntax</a>
    <a href="#ling7">Semantics</a>
    <a href="#ling8">Pragmatics</a>
    <a href="#ling9">Sociolinguistics</a>
    <a href="#ling10">Psycholing.</a>
    <a href="#ling11">Pidgin/Creole</a>
    <a href="#ling12">Cheatsheet</a>
    <a href="test-center.html" style="color:var(--purple);font-weight:800;margin-left:auto;">🎯 Test Center</a>
  </nav>

  <div class="hero">
    <h1>🧠 Complete Linguistics Notes 🚀</h1>
    <div class="hero-pills">
      <span class="hero-pill">12 Full Sections 📚</span>
      <span class="hero-pill">ASCII Trees 🌳</span>
      <span class="hero-pill">Fun Pop Quizzes 🎯</span>
      <span class="hero-pill">Exam Ready ⚡</span>
    </div>
    <p class="hero-tagline">Everything you need to master language science, beautifully organized! 🧠✨</p>
  </div>

  <div class="wrap">
"""]

in_code = False
in_table = False
table_headers = []
table_rows = []

section_counter = 0

def flush_table():
    global in_table, table_headers, table_rows
    if not in_table: return ""
    res = "<table>\n"
    res += "  <tr>" + "".join(f"<th>{h}</th>" for h in table_headers) + "</tr>\n"
    for row in table_rows:
        res += "  <tr>" + "".join(f"<td>{c}</td>" for c in row) + "</tr>\n"
    res += "</table>\n"
    in_table = False
    table_headers = []
    table_rows = []
    return res

def parse_inline(text):
    text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'\*(.*?)\*', r'<em>\1</em>', text)
    text = re.sub(r'`(.*?)`', r'<code>\1</code>', text)
    return text

for line in lines:
    if line.startswith('```'):
        if in_code:
            html_out.append("</div>\n")
            in_code = False
        else:
            html_out.append('<div class="diagram" style="font-family: monospace; white-space: pre-wrap; font-size: 13px; line-height: 1.2;">\n')
            in_code = True
        continue
    
    if in_code:
        html_out.append(escape_html(line) + '\n')
        continue

    if line.startswith('|') and '|' in line[1:]:
        parts = [p.strip() for p in line.split('|') if p.strip() or p == '']
        if not parts: continue
        if all(re.match(r'^-+$', p) for p in parts):
            continue
        if not in_table:
            in_table = True
            table_headers = [parse_inline(p) for p in parts]
            continue
        table_rows.append([parse_inline(p) for p in parts])
        continue
    else:
        if in_table:
            html_out.append(flush_table())

    if line.startswith('# '):
        match = re.match(r'# (\d+)\.\s+(.*)', line)
        if match:
            if section_counter > 0:
                html_out.append("    </div>\n\n")
            section_counter = int(match.group(1))
            html_out.append(f'    <!-- ===================== LING {section_counter} ===================== -->\n')
            html_out.append(f'    <div class="q-section q{section_counter}" id="ling{section_counter}">\n')
            html_out.append(f'      <div class="q-header">\n')
            html_out.append(f'        <div class="q-num">{section_counter}</div>\n')
            html_out.append(f'        <div>\n')
            html_out.append(f'          <div class="q-title">{parse_inline(match.group(2))}</div>\n')
            html_out.append(f'        </div>\n')
            html_out.append(f'      </div>\n')
        continue
    
    if line.startswith('## '):
        html_out.append(f'      <h3>{parse_inline(line[3:])}</h3>\n')
        continue

    if line.startswith('### '):
        html_out.append(f'      <h4 style="color:var(--sky);margin-top:20px;font-size:18px;">{parse_inline(line[4:])}</h4>\n')
        continue

    if line.startswith('> 🎓') or line.startswith('> 💡') or line.startswith('> 🔥') or line.startswith('> 🧠') or line.startswith('> 🚨') or line.startswith('> 🔑'):
        if line.startswith('> 🚨'):
            html_out.append(f'      <div class="warn">{parse_inline(line[1:].strip())}</div>\n')
        else:
            html_out.append(f'      <div class="brain">{parse_inline(line[1:].strip())}</div>\n')
        continue

    if line.startswith('>'):
        html_out.append(f'      <div class="analogy">{parse_inline(line[1:].strip())}</div>\n')
        continue
    
    if line.startswith('- '):
        html_out.append(f'      <li style="margin-left:20px;">{parse_inline(line[2:])}</li>\n')
        continue
    
    if line.strip() == '':
        continue
        
    if not line.startswith('#'):
        html_out.append(f'      <p>{parse_inline(line)}</p>\n')

if in_table:
    html_out.append(flush_table())
    
if section_counter > 0:
    html_out.append("    </div>\n")

html_out.append("""
  </div>
  <script src="assets/js/notes.js"></script>
</body>
</html>
""")

with open('linguistics-notes.html', 'w', encoding='utf-8') as f:
    f.write("".join(html_out))

print("Done generating linguistics-notes.html!")
