import re

with open('english-writing-exam.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove Q10 Vocab section from english-writing-exam.html
q10_pattern = re.compile(r'<!-- ===================== Q10 ===================== -->.*?(?=<div style="text-align:center)', re.DOTALL)
content = re.sub(q10_pattern, '', content)

# Remove Q10 from Navigation
content = content.replace('  <a href="#q10">Q10 Vocab Builder</a>\n', '')

# Change '10 fun sections' back to '9 fun sections' since we moved Vocab out
content = content.replace('<span class="hero-pill">10 fun sections 🎉</span>', '<span class="hero-pill">9 fun sections 🎉</span>')
content = content.replace('<span class="tag" style="background:rgba(78,204,163,0.15);color:var(--mint);">9 Q-Types</span>', '<span class="tag" style="background:rgba(78,204,163,0.15);color:var(--mint);">9 Sections</span>') # fixing the tag on index.html, wait I'll do this in python script for index.html

# Fun-ify Q2
q2_old = '''<div class="q-section q2" id="q2">
  <div class="q-header">
    <div class="q-num">Q2</div>
    <div>
      <div class="q-title">Paragraph Types 📦</div>
      <div class="q-sub">Answer any 4 of 6 · Each paragraph = Topic Sentence + Supporting Details + Concluding Sentence</div>
    </div>
  </div>

  <div class="brain">All 6 paragraph types use the SAME skeleton — what changes is just the TYPE of support you use. Cause-Effect uses causes & results. Process uses steps. Narrative uses story. Same skeleton, different filling.</div>'''
q2_new = '''<div class="q-section q2" id="q2">
  <div class="q-header">
    <div class="q-num">Q2</div>
    <div>
      <div class="q-title">📦 Paragraph Types (Pick your flavor!)</div>
      <div class="q-sub">Answer any 4 of 6 • Every paragraph = Topic Sentence + Supporting Details + Concluding Sentence</div>
    </div>
  </div>

  <div class="brain">🧠 All 6 paragraph types use the EXACT same skeleton! What changes is just the TYPE of support you use. Same skeleton, different filling. Think of it like different toppings on the same pizza! 🍕</div>'''
content = content.replace(q2_old, q2_new)

# Fun-ify Q3
q3_old = '''<div class="q-section q3" id="q3">
  <div class="q-header">
    <div class="q-num">Q3</div>
    <div>
      <div class="q-title">Product vs Process Writing ⚙️</div>
      <div class="q-sub">Differences · Steps of Process Writing · Multiple Submission</div>
    </div>
  </div>

  <div class="analogy">Product writing is like ordering a cake from a bakery — you only see the final result. Process writing is like BAKING the cake yourself — mixing, tasting, adjusting, baking again. The journey is the point.</div>'''
q3_new = '''<div class="q-section q3" id="q3">
  <div class="q-header">
    <div class="q-num">Q3</div>
    <div>
      <div class="q-title">⚙️ Product vs Process Writing</div>
      <div class="q-sub">What's the difference? • Steps of Process Writing • Multiple Submissions</div>
    </div>
  </div>

  <div class="analogy">🎂 <strong>Product writing</strong> is like ordering a cake from a bakery — you only see the final, perfect result.<br>👩‍🍳 <strong>Process writing</strong> is like BAKING the cake yourself — mixing, tasting, adjusting, and baking again until it's just right. The journey is the point!</div>'''
content = content.replace(q3_old, q3_new)

# Fun-ify Q4
q4_old = '''<div class="q-section q4" id="q4">
  <div class="q-header">
    <div class="q-num">Q4</div>
    <div>
      <div class="q-title">What is an Essay? 🗂️</div>
      <div class="q-sub">Definition · Components · Diagram</div>
    </div>
  </div>'''
q4_new = '''<div class="q-section q4" id="q4">
  <div class="q-header">
    <div class="q-num">Q4</div>
    <div>
      <div class="q-title">🗂️ What Even Is an Essay?</div>
      <div class="q-sub">Definition • The Missing Pieces • Diagram</div>
    </div>
  </div>'''
content = content.replace(q4_old, q4_new)

# Fun-ify Q5
q5_old = '''<div class="q-section q5" id="q5">
  <div class="q-header">
    <div class="q-num">Q5</div>
    <div>
      <div class="q-title">Short Notes 📒</div>
      <div class="q-sub">Answer any 3 of 5 — all 5 covered here</div>
    </div>
  </div>'''
q5_new = '''<div class="q-section q5" id="q5">
  <div class="q-header">
    <div class="q-num">Q5</div>
    <div>
      <div class="q-title">📒 Cheat Sheet for Short Notes</div>
      <div class="q-sub">Answer any 3 of 5 — we've got all 5 covered for you right here! ✨</div>
    </div>
  </div>'''
content = content.replace(q5_old, q5_new)

# Fun-ify Q6
q6_old = '''<div class="q-section q6" id="q6">
  <div class="q-header">
    <div class="q-num">Q6</div>
    <div>
      <div class="q-title">Essay Analysis 🔍</div>
      <div class="q-sub">They give you an essay — you identify parts, name devices, write more sections</div>
    </div>
  </div>
 
  <div class="brain">Q6 is just a scavenger hunt. They give you the essay — you find specific things in it. Know what each thing LOOKS LIKE and WHERE to find it.</div>'''
q6_new = '''<div class="q-section q6" id="q6">
  <div class="q-header">
    <div class="q-num">Q6</div>
    <div>
      <div class="q-title">🔍 Essay Analysis (The Scavenger Hunt)</div>
      <div class="q-sub">They give you an essay — you identify parts, name devices, and write extra sections. Easy points! 🎯</div>
    </div>
  </div>
 
  <div class="brain">🕵️‍♀️ Q6 is literally just a scavenger hunt. They give you the essay — you just have to find specific things in it. Know what each thing LOOKS LIKE and WHERE to find it!</div>'''
content = content.replace(q6_old, q6_new)

# Fun-ify Q7
q7_old = '''<div class="q-section q7" id="q7">
  <div class="q-header">
    <div class="q-num">Q7</div>
    <div>
      <div class="q-title">Grammar Corrections 🔧</div>
      <div class="q-sub">Fragments · Run-ons · Agreement · Modifiers · Punctuation</div>
    </div>
  </div>'''
q7_new = '''<div class="q-section q7" id="q7">
  <div class="q-header">
    <div class="q-num">Q7</div>
    <div>
      <div class="q-title">🔧 Grammar Fixes (Be the Editor!)</div>
      <div class="q-sub">Fragments • Run-ons • Agreement • Modifiers • Punctuation</div>
    </div>
  </div>'''
content = content.replace(q7_old, q7_new)

# Fun-ify Q8
q8_old = '''<div class="q-section q8" id="q8">
  <div class="q-header">
    <div class="q-num">Q8</div>
    <div>
      <div class="q-title">Prewriting Techniques 💡</div>
      <div class="q-sub">5 techniques + applied examples for both topics</div>
    </div>
  </div>

  <div class="analogy">Prewriting is like warming up before a race. You don't go from the couch to sprinting. You stretch first — get the ideas loose — THEN you write the essay.</div>'''
q8_new = '''<div class="q-section q8" id="q8">
  <div class="q-header">
    <div class="q-num">Q8</div>
    <div>
      <div class="q-title">💡 Prewriting Techniques (Warm up!)</div>
      <div class="q-sub">5 awesome techniques + applied examples so you never get stuck.</div>
    </div>
  </div>

  <div class="analogy">🏃‍♀️ Prewriting is like warming up before a race. You don't go straight from the couch to sprinting! You stretch first — get the ideas loose — THEN you write the essay.</div>'''
content = content.replace(q8_old, q8_new)

# Fun-ify Q9
q9_old = '''<div class="q-section q9" id="q9">
  <div class="q-header">
    <div class="q-num">Q9</div>
    <div>
      <div class="q-title">Assertion vs Opinion 🎯</div>
      <div class="q-sub">What's the difference? How do you tell them apart?</div>
    </div>
  </div>

  <div class="analogy">Opinion = "I think chocolate is the best ice cream." Nobody can argue with you — it's just your feeling. Assertion = "Chocolate ice cream outsells all other flavors in Bangladesh." Now THAT can be proven, debated, supported. That's what academic writing needs.</div>'''
q9_new = '''<div class="q-section q9" id="q9">
  <div class="q-header">
    <div class="q-num">Q9</div>
    <div>
      <div class="q-title">🎯 Assertion vs Opinion</div>
      <div class="q-sub">What's the difference? How do you spot them? 👀</div>
    </div>
  </div>

  <div class="analogy">🍦 <strong>Opinion</strong> = "I think chocolate is the best ice cream." Nobody can argue with you — it's just your feeling.<br>📊 <strong>Assertion</strong> = "Chocolate ice cream outsells all other flavors in Bangladesh." Now THAT can be proven, debated, and supported. That's what your academic essays need!</div>'''
content = content.replace(q9_old, q9_new)

with open('english-writing-exam.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Updated english-writing-exam.html')
