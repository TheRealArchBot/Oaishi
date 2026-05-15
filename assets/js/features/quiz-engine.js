// quiz-engine.js — Core engine for pop quizzes in note pages
// Requires: quiz-loader.js, vocab-loader.js, love-messages.js
document.addEventListener('DOMContentLoaded', () => {
  if (!window.quizBank) return;

  const scoreKey = 'oaishi_score';
  const answeredKey = 'oaishi_answered';
  const wrongKey = 'oaishi_wrong_quizzes';
  const streakKey = 'oaishi_streak';

  if (!localStorage.getItem(scoreKey)) localStorage.setItem(scoreKey, 0);
  let currentScore = parseInt(localStorage.getItem(scoreKey));
  let currentStreak = parseInt(localStorage.getItem(streakKey) || '0');

  if (document.querySelector('.q-section')) {
    let wrongStreak = 0;
    const allAnswered = JSON.parse(localStorage.getItem(answeredKey) || '[]');
    const wrongVault = JSON.parse(localStorage.getItem(wrongKey) || '[]');

    let pool = window.quizBank.map((q, i) => ({ ...q, id: i }));

    // ── DYNAMIC VOCAB GENERATOR ──────────────────
    if (window.vocabDatabase && window.vocabDatabase.length > 0) {
      const dynamicCount = 50;
      for (let i = 0; i < dynamicCount; i++) {
        const word = window.vocabDatabase[Math.floor(Math.random() * window.vocabDatabase.length)];
        let distractors = window.vocabDatabase
          .filter(w => w.cat === word.cat && w.adv !== word.adv)
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);

        if (distractors.length < 2) {
          distractors = window.vocabDatabase
            .filter(w => w.adv !== word.adv)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2);
        }

        const options = [word.adv, ...distractors.map(d => d.adv)].sort(() => 0.5 - Math.random());
        pool.push({
          id: `v_${i}`,
          section: 'any',
          q: `Which academic word is a stronger replacement for <strong>"${word.simple}"</strong>?`,
          options: options,
          correct: options.indexOf(word.adv)
        });
      }
    }

    let toReview = pool.filter(q => wrongVault.includes(q.id));
    let unanswered = pool.filter(q => !allAnswered.includes(q.id) && !wrongVault.includes(q.id));

    if (toReview.length === 0 && unanswered.length === 0) {
      unanswered = [...pool];
    }

    const pageSections = Array.from(document.querySelectorAll('.q-section'));
    let validSections = pageSections
      .filter(sec => toReview.some(q => q.section === sec.id || q.section === 'any') || unanswered.some(q => q.section === sec.id || q.section === 'any'))
      .sort(() => 0.5 - Math.random());

    if (Math.random() < 0.7) {
      validSections.slice(0, Math.floor(Math.random() * 2) + 1).forEach(section => {
        let sectionPool = toReview.filter(q => q.section === section.id || q.section === 'any');
        if (sectionPool.length === 0) {
          sectionPool = unanswered.filter(q => q.section === section.id || q.section === 'any');
        }
        const quiz = sectionPool[Math.floor(Math.random() * sectionPool.length)];
        if (!quiz) return;

        const quizDiv = document.createElement('div');
        quizDiv.className = 'quiz-box';
        quizDiv.style.cssText = 'margin:30px 0;padding:20px;background:rgba(255,143,171,0.1);border-left:4px solid var(--pink);border-radius:8px;opacity:0;transform:translateY(20px);transition:all 0.5s ease-out;';

        const optionsHtml = quiz.options.map((opt, idx) =>
          `<button class="q-btn" data-idx="${idx}" style="padding:8px 15px;margin-right:10px;margin-bottom:10px;background:#333;border:1px solid #444;border-radius:6px;color:white;cursor:pointer;transition:all 0.2s;">${opt}</button>`
        ).join('');

        quizDiv.innerHTML = `
          <h4 style="margin:0 0 10px 0;color:var(--pink);">🧠 Pop Quiz!</h4>
          <p style="margin:0 0 15px 0;">${quiz.q}</p>
          <div class="quiz-options" style="display:flex;flex-wrap:wrap;">${optionsHtml}</div>
          <div class="quiz-result" style="margin-top:10px;font-weight:bold;font-size:14px;display:none;"></div>
        `;

        section.appendChild(quizDiv);

        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        observer.observe(quizDiv);

        const btns = quizDiv.querySelectorAll('.q-btn');
        const resultDiv = quizDiv.querySelector('.quiz-result');

        btns.forEach(btn => {
          btn.addEventListener('click', e => {
            btns.forEach(b => { b.disabled = true; b.style.opacity = '0.5'; b.style.cursor = 'default'; });
            if (!allAnswered.includes(quiz.id)) allAnswered.push(quiz.id);
            localStorage.setItem(answeredKey, JSON.stringify(allAnswered));

            const picked = parseInt(e.target.getAttribute('data-idx'));
            resultDiv.style.display = 'block';

            if (picked === quiz.correct) {
              wrongStreak = 0;
              currentStreak++;
              localStorage.setItem(streakKey, currentStreak);

              if (wrongVault.includes(quiz.id)) {
                wrongVault.splice(wrongVault.indexOf(quiz.id), 1);
                localStorage.setItem(wrongKey, JSON.stringify(wrongVault));
              }

              e.target.style.background = 'var(--mint)';
              e.target.style.color = '#000';
              e.target.style.opacity = '1';
              resultDiv.style.color = 'var(--mint)';

              const correctPraise = [
                'Correct! Brain is working overtime today! 🧠✨',
                'Yes! Nailed it! Was there ever any doubt? 💅',
                'That\'s right! Knowledge unlocked! 🔓',
                'Correct! Keep this energy for the exam! 🔥',
                'Boom! Got it in one! 🎯'
              ];
              resultDiv.textContent = correctPraise[Math.floor(Math.random() * correctPraise.length)];
              currentScore++;
              localStorage.setItem(scoreKey, currentScore);

              if (window.showLoveMessage) {
                const ex = e.target.getBoundingClientRect();
                window.showLoveMessage(ex.left + ex.width / 2, ex.top, "Correct! You're so smart! 🥰");
              }
            } else {
              wrongStreak++;
              currentStreak = 0;
              localStorage.setItem(streakKey, 0);

              if (!wrongVault.includes(quiz.id)) {
                wrongVault.push(quiz.id);
                localStorage.setItem(wrongKey, JSON.stringify(wrongVault));
              }

              e.target.style.background = 'var(--coral)';
              e.target.style.color = '#fff';
              e.target.style.opacity = '1';
              btns[quiz.correct].style.background = 'var(--mint)';
              btns[quiz.correct].style.color = '#000';
              btns[quiz.correct].style.opacity = '1';
              resultDiv.style.color = 'var(--coral)';

              const wrongResponses = [
                'Not quite — but the correct answer is highlighted! 💛',
                'Oops! Study that one again, it\'ll come up! 📚',
                'Almost! This one\'s going back into the review vault. 🔄'
              ];
              const roastResponses = [
                'Three wrong in a row... Is your brain buffering? 🐢💻',
                'Okay we might need to read that section one more time! 😂'
              ];
              resultDiv.textContent = wrongStreak >= 3
                ? (wrongStreak = 0, roastResponses[Math.floor(Math.random() * roastResponses.length)])
                : wrongResponses[Math.floor(Math.random() * wrongResponses.length)];
            }
          });
        });
      });
    }
  }
});
