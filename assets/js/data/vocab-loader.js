// vocab-loader.js — merges all vocab category files into window.vocabDatabase
// Requires: vocab-action.js, vocab-descriptive.js, vocab-connecting.js, vocab-bonus.js
(function () {
  const cats = [
    window.vocabCat_Action      || [],
    window.vocabCat_Descriptive || [],
    window.vocabCat_Connecting  || [],
    window.vocabCat_Bonus       || [],
  ];
  const merged = [].concat(...cats);
  const seen = new Set();
  window.vocabDatabase = merged.filter(entry => {
    const simple = (entry.simple || '').trim().toLowerCase();
    const adv = (entry.adv || '').trim().toLowerCase();
    const key = `${simple}::${adv}`;
    if (!simple || !adv || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  console.log('[VocabLoader] Loaded', window.vocabDatabase.length, 'words');
})();
