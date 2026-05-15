// vocab-loader.js — merges all vocab category files into window.vocabDatabase
// Requires: vocab-action.js, vocab-descriptive.js, vocab-connecting.js, vocab-bonus.js
(function () {
  const cats = [
    window.vocabCat_Action      || [],
    window.vocabCat_Descriptive || [],
    window.vocabCat_Connecting  || [],
    window.vocabCat_Bonus       || [],
  ];
  window.vocabDatabase = [].concat(...cats);
  console.log('[VocabLoader] Loaded', window.vocabDatabase.length, 'words');
})();
