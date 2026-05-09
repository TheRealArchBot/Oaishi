const quizBank = [
  // ==========================================
  // Q1: ESSAY BASICS (15 questions)
  // ==========================================
  { section: "q1", q: "What is the very first sentence of an intro paragraph called?", options: ["The Thesis", "The Hook", "The Transition"], correct: 1 },
  { section: "q1", q: "Which of the following makes a good hook?", options: ["A boring dictionary definition", "An interesting fact, quote, or question", "Your main argument"], correct: 1 },
  { section: "q1", q: "What comes directly after the hook in an introduction?", options: ["The Thesis", "Background Information", "Body Paragraph 1"], correct: 1 },
  { section: "q1", q: "What is the 'Boss' of the entire essay?", options: ["The Thesis Statement", "The Hook", "The Conclusion"], correct: 0 },
  { section: "q1", q: "Where does the Thesis Statement usually go?", options: ["The very first sentence of the essay", "The very last sentence of the intro paragraph", "In the middle of Body Paragraph 2"], correct: 1 },
  { section: "q1", q: "A standard thesis statement should clearly list how many main points?", options: ["One", "Three", "As many as possible"], correct: 1 },
  { section: "q1", q: "What is the first sentence of a Body Paragraph called?", options: ["The Hook", "The Topic Sentence", "The Summary"], correct: 1 },
  { section: "q1", q: "What is the job of the Topic Sentence?", options: ["To summarize the whole essay", "To introduce the main idea of that specific paragraph", "To provide a fun fact"], correct: 1 },
  { section: "q1", q: "What follows the Topic Sentence in a body paragraph?", options: ["Supporting Details/Evidence", "The Thesis Statement", "The Restatement"], correct: 0 },
  { section: "q1", q: "What should the concluding sentence of a body paragraph do?", options: ["Wrap up the paragraph's idea and smoothly transition", "Introduce a completely new topic", "Repeat the hook"], correct: 0 },
  { section: "q1", q: "What is the first thing you must do in a Conclusion paragraph?", options: ["Restate the Thesis (in new words!)", "Write a new Hook", "Introduce your 4th main point"], correct: 0 },
  { section: "q1", q: "True or False: You should never copy-paste your original thesis into the conclusion.", options: ["True. Always rephrase it.", "False. Copy-pasting is preferred."], correct: 0 },
  { section: "q1", q: "What comes after the thesis restatement in the conclusion?", options: ["A brief summary of your 3 main points", "A detailed new piece of evidence", "A citation"], correct: 0 },
  { section: "q1", q: "How should an essay officially end?", options: ["With 'The End.'", "With a final thought, prediction, or call to action", "By repeating the introduction"], correct: 1 },
  { section: "q1", q: "True or False: A standard academic essay has 5 paragraphs.", options: ["True (Intro, 3 Body, Conclusion)", "False (It should have 10)"], correct: 0 },

  // ==========================================
  // Q2: PARAGRAPH TYPES (12 questions)
  // ==========================================
  { section: "q2", q: "Which paragraph type relies heavily on the 5 senses (sight, sound, smell, touch, taste)?", options: ["Descriptive", "Argumentative", "Process"], correct: 0 },
  { section: "q2", q: "If you are telling a story from beginning to end, what type of paragraph is it?", options: ["Narrative", "Compare/Contrast", "Expository"], correct: 0 },
  { section: "q2", q: "Which paragraph type explains 'how to do something' step-by-step?", options: ["Cause/Effect", "Process", "Descriptive"], correct: 1 },
  { section: "q2", q: "Words like 'first', 'next', 'then', and 'finally' are heavily used in which type?", options: ["Argumentative", "Process / Narrative", "Descriptive"], correct: 1 },
  { section: "q2", q: "Which paragraph type focuses on similarities and differences?", options: ["Compare/Contrast", "Narrative", "Cause/Effect"], correct: 0 },
  { section: "q2", q: "Words like 'similarly', 'on the other hand', and 'whereas' belong to which type?", options: ["Process", "Compare/Contrast", "Descriptive"], correct: 1 },
  { section: "q2", q: "Which paragraph explains *why* something happened and the *results*?", options: ["Narrative", "Cause/Effect", "Process"], correct: 1 },
  { section: "q2", q: "Transitions like 'because', 'consequently', and 'as a result' belong to:", options: ["Compare/Contrast", "Cause/Effect", "Descriptive"], correct: 1 },
  { section: "q2", q: "Which paragraph type tries to convince the reader to agree with a specific viewpoint?", options: ["Expository", "Argumentative", "Narrative"], correct: 1 },
  { section: "q2", q: "What is an 'Expository' paragraph?", options: ["A paragraph that tells a fictional story", "A paragraph that explains, defines, or informs with facts", "A paragraph that argues a controversial point"], correct: 1 },
  { section: "q2", q: "True or False: All paragraph types use the exact same structural skeleton (Topic Sentence → Details → Concluding Sentence).", options: ["True", "False"], correct: 0 },
  { section: "q2", q: "If a paragraph details the impacts of global warming, it is most likely:", options: ["Cause/Effect", "Process", "Narrative"], correct: 0 },

  // ==========================================
  // Q3: WRITING PROCESS (11 questions)
  // ==========================================
  { section: "q3", q: "What are the core steps of the Writing Process?", options: ["Drafting, Typing, Printing", "Prewriting, Drafting, Revising, Editing", "Thinking, Reading, Writing"], correct: 1 },
  { section: "q3", q: "Brainstorming, making mind maps, and outlining happen during which stage?", options: ["Prewriting", "Revising", "Editing"], correct: 0 },
  { section: "q3", q: "What is the main goal of the 'Drafting' stage?", options: ["To make sure spelling is perfect", "To get all your ideas down on paper without stopping", "To format the margins correctly"], correct: 1 },
  { section: "q3", q: "True or False: Your first draft is supposed to be messy.", options: ["True", "False"], correct: 0 },
  { section: "q3", q: "What is the main difference between Revising and Editing?", options: ["Revising is fixing grammar; Editing is changing ideas", "Revising is changing the structure/ideas; Editing is fixing the grammar/spelling"], correct: 1 },
  { section: "q3", q: "The ARMS acronym (Add, Remove, Move, Substitute) is used during which stage?", options: ["Editing", "Revising", "Prewriting"], correct: 1 },
  { section: "q3", q: "The CUPS acronym (Capitalization, Usage, Punctuation, Spelling) is used during which stage?", options: ["Revising", "Editing", "Drafting"], correct: 1 },
  { section: "q3", q: "If you realize your body paragraph 3 should actually be body paragraph 1, what are you doing?", options: ["Editing", "Revising", "Prewriting"], correct: 1 },
  { section: "q3", q: "If you are fixing a comma splice, what are you doing?", options: ["Editing", "Revising", "Publishing"], correct: 0 },
  { section: "q3", q: "Why shouldn't you edit while you draft?", options: ["It interrupts the creative flow of getting ideas out", "It wastes too much ink", "Drafting doesn't allow backspace"], correct: 0 },
  { section: "q3", q: "What is the final stage of the process?", options: ["Publishing/Finalizing", "Revising", "Drafting"], correct: 0 },

  // ==========================================
  // Q7 & Q9: GRAMMAR, TRANSITIONS, & ASSERTIONS (15 questions)
  // ==========================================
  { section: "q7", q: "What is a transition word?", options: ["A word that links ideas and sentences together smoothly", "A word used only at the end of an essay", "A type of noun"], correct: 0 },
  { section: "q7", q: "Which transition is best for adding MORE information (Addition)?", options: ["However", "Furthermore", "Therefore"], correct: 1 },
  { section: "q7", q: "Which transition is best for showing a CONTRAST or opposite idea?", options: ["Moreover", "Consequently", "Nevertheless"], correct: 2 },
  { section: "q7", q: "Which transition is best for showing a RESULT (Cause/Effect)?", options: ["Similarly", "Consequently", "For instance"], correct: 1 },
  { section: "q7", q: "What is a 'Run-on Sentence'?", options: ["A sentence that is just very long", "Two independent clauses smashed together without proper punctuation", "A sentence without a subject"], correct: 1 },
  { section: "q7", q: "How can you fix a comma splice? (e.g., 'I like dogs, they are cute.')", options: ["Remove the comma", "Change the comma to a semicolon (;)", "Add more commas"], correct: 1 },
  { section: "q7", q: "What does 'Parallel Structure' mean in writing?", options: ["Keeping the grammatical form of items in a list consistent", "Writing sentences that are the same length", "Making sure paragraphs are symmetrical"], correct: 0 },
  { section: "q7", q: "Which is parallel: A) 'She likes to run, jumping, and swim' OR B) 'She likes running, jumping, and swimming'?", options: ["A", "B"], correct: 1 },
  { section: "q7", q: "What is a 'Cohesive Device'?", options: ["A staple gun", "Techniques like using pronouns (it, they) to refer to previously mentioned nouns", "A transition word"], correct: 1 },
  { section: "q9", q: "What makes an 'Opinion' different from an 'Assertion'?", options: ["Opinion uses weak phrases like 'I think'. Assertion states it as a provable fact.", "Opinion is factual. Assertion is an emotional feeling."], correct: 0 },
  { section: "q9", q: "Is this an Opinion or Assertion: 'I feel that climate change is bad.'", options: ["Opinion", "Assertion"], correct: 0 },
  { section: "q9", q: "Is this an Opinion or Assertion: 'Climate change causes severe economic damage.'", options: ["Opinion", "Assertion"], correct: 1 },
  { section: "q9", q: "Why should you avoid 'In my opinion' in academic writing?", options: ["It makes the sentence too long", "It undermines your authority and makes the argument sound weak", "It is grammatically incorrect"], correct: 1 },
  { section: "q9", q: "How do you turn 'I think early morning classes are bad' into an Assertion?", options: ["'I really feel early morning classes are bad.'", "'Early morning classes negatively impact student performance.'", "'To me, morning classes are bad.'"], correct: 1 },
  { section: "q9", q: "True or False: An assertion leaves no room for debate.", options: ["True. It is an absolute fact.", "False. It is stated strongly, but you still have to prove it with evidence."], correct: 1 },

  // ==========================================
  // Q8: PREWRITING & DIAGRAMS (6 questions)
  // ==========================================
  { section: "q8", q: "Which prewriting tool is best for a Compare/Contrast essay?", options: ["A Flowchart", "A Venn Diagram", "A Timeline"], correct: 1 },
  { section: "q8", q: "If you are writing a Narrative or Process essay, which diagram is most helpful?", options: ["A Flowchart / Timeline", "A Venn Diagram", "A Mind Map"], correct: 0 },
  { section: "q8", q: "What is the purpose of an Outline?", options: ["To organize your brainstormed ideas into a structured, logical order", "To check your spelling", "To write the final conclusion"], correct: 0 },
  { section: "q8", q: "In a Mind Map, what goes in the very center circle?", options: ["The Conclusion", "The Main Topic", "A specific detail"], correct: 1 },
  { section: "q8", q: "What does the middle overlapping section of a Venn Diagram represent?", options: ["Differences", "Similarities", "The Conclusion"], correct: 1 },
  { section: "q8", q: "True or False: You should spend at least 10-15 minutes prewriting before an exam essay.", options: ["True. It saves time during drafting.", "False. Just start writing immediately."], correct: 0 },

  // ==========================================
  // Q10: VOCABULARY (11 questions)
  // ==========================================
  { section: "q10", q: "Which word is a stronger academic replacement for 'Bad / Terrible'?", options: ["Detrimental", "Crucial", "Abundant"], correct: 0 },
  { section: "q10", q: "If something is 'Crucial' or 'Vital', it means it is...", options: ["Very small", "Very important / Good", "Very complex"], correct: 1 },
  { section: "q10", q: "Instead of saying 'Big' or 'Huge' impact, you should say:", options: ["A Substantial / Profound impact", "A Marginal impact", "An Evident impact"], correct: 0 },
  { section: "q10", q: "What does it mean to 'Demonstrate' or 'Illustrate'?", options: ["To hide something", "To show or prove something", "To stop something"], correct: 1 },
  { section: "q10", q: "Instead of 'Make' or 'Create', try using:", options: ["Hinder / Inhibit", "Generate / Produce", "Resolve / Remedy"], correct: 1 },
  { section: "q10", q: "If you want to 'Fix' or 'Solve' an issue, you want to:", options: ["Resolve / Remedy it", "Facilitate it", "Analyze it"], correct: 0 },
  { section: "q10", q: "What does 'Hinder' mean?", options: ["To help or support", "To stop or prevent", "To discover"], correct: 1 },
  { section: "q10", q: "Instead of 'Small' or 'Tiny', use:", options: ["Profound", "Marginal / Negligible", "Intricate"], correct: 1 },
  { section: "q10", q: "If an issue is 'Complex' or 'Hard', you can call it:", options: ["Evident", "Intricate / Challenging", "Uniform"], correct: 1 },
  { section: "q10", q: "Instead of saying 'Rich', what is a better academic word?", options: ["Impoverished", "Affluent / Wealthy", "Vacant"], correct: 1 },
  { section: "q10", q: "Instead of 'Smart', what flirty word did Ahsan add for you? 😉", options: ["Brilliant / Ingenious", "Radiant", "Blessed"], correct: 0 },

  // ==========================================
  // EASTER EGGS (2 questions)
  // ==========================================
  { section: "q1", q: "Who believes you are going to absolutely crush this exam?", options: ["The professor", "Ahsan ❤️", "The textbook"], correct: 1 },
  { section: "q4", q: "Important question: Who is the smartest, most beautiful student?", options: ["Oaishi 🥰", "Albert Einstein", "Marie Curie"], correct: 0 }
];

// Export to window so notes.js can access it
window.quizBank = quizBank;
