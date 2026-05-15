// quiz-loader.js — merges all quiz files into window.quizBank
// Requires: quiz-writing.js, quiz-linguistics.js, quiz-fun.js
(function () {
  const all = [
    ...(window.quizWriting    || []),
    ...(window.quizLinguistics || []),
    ...(window.quizFun        || []),
  ];
  window.quizBank = all;
  console.log('[QuizLoader] Loaded', window.quizBank.length, 'questions');
})();
