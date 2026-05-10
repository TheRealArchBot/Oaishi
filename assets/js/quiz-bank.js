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
  { section: "q10", q: "Instead of 'Smart', what word accurately describes you? 😉", options: ["Brilliant / Ingenious", "Radiant", "Blessed"], correct: 0 },

  // ==========================================
  // EASTER EGGS (2 questions)
  // ==========================================
  { section: "q1", q: "Who believes you are going to absolutely crush this exam?", options: ["The professor", "The person making these notes ❤️", "The textbook"], correct: 1 },
  { section: "q4", q: "Important question: Who is the smartest, most beautiful student?", options: ["Oaishi 🥰", "Albert Einstein", "Marie Curie"], correct: 0 },
  { section: "q1", q: "What is the main purpose of an essay?", options: ["To present a clear, unified argument", "To summarize a book", "To entertain the reader"], correct: 0 },
  { section: "q1", q: "Which of the following is NOT part of a standard introduction?", options: ["Hook", "Background", "Topic Sentence"], correct: 2 },
  { section: "q1", q: "Why do we use counterarguments?", options: ["To agree with the opponent", "To show we understand other views before refuting them", "To confuse the reader"], correct: 1 },
  { section: "q1", q: "What does a transition sentence do at the end of a body paragraph?", options: ["Links the current point to the next paragraph", "Summarizes the whole essay", "Introduces a totally new idea"], correct: 0 },
  { section: "q2", q: "Which transition works best for a Contrast paragraph?", options: ["Similarly", "On the other hand", "For instance"], correct: 1 },
  { section: "q2", q: "What paragraph type uses chronological order (time order)?", options: ["Narrative", "Descriptive", "Classification"], correct: 0 },
  { section: "q2", q: "Which paragraph type organizes ideas by categories?", options: ["Division/Classification", "Process", "Narrative"], correct: 0 },
  { section: "q3", q: "What is freewriting?", options: ["Writing without rules or stopping for a set time", "Writing for free", "Typing on a keyboard"], correct: 0 },
  { section: "q3", q: "Why is revising considered recursive?", options: ["Because you only do it once", "Because you go back and forth between drafting and revising", "Because it uses cursive writing"], correct: 1 },
  { section: "q7", q: "What is a dangling modifier?", options: ["A word hanging from the ceiling", "A descriptive phrase that doesn't logically attach to any word in the sentence", "A missing comma"], correct: 1 },
  { section: "q7", q: "How do you fix: 'Walking to the park, the sun was shining.'?", options: ["The sun was shining walking to the park.", "As I was walking to the park, the sun was shining.", "Walking to the park the sun was shining."], correct: 1 },
  { section: "q9", q: "Why is 'I believe' weak in an assertion?", options: ["It is misspelled", "It makes the statement a personal opinion rather than a debatable claim", "It is too short"], correct: 1 },
  { section: "q10", q: "Which word is a better synonym for 'Change' in an academic essay?", options: ["Transform", "Switch", "Swap"], correct: 0 },
  { section: "q10", q: "What does 'Ameliorate' mean?", options: ["To make worse", "To improve or make better", "To forget"], correct: 1 },
  { section: "q10", q: "Which is a strong replacement for 'Important'?", options: ["Nice", "Paramount", "Cool"], correct: 1 },
  { section: "q10", q: "What does 'Irate' mean?", options: ["Happy", "Angry", "Tired"], correct: 1 },
  { section: "q10", q: "What does 'Examine' mean?", options: ["To look at closely", "To ignore", "To throw away"], correct: 0 },
  { section: "q1", q: "How long should a standard conclusion be?", options: ["1-2 sentences", "4-6 sentences", "3 pages"], correct: 1 },
  { section: "q2", q: "Which paragraph type describes how things look, smell, and sound?", options: ["Descriptive", "Narrative", "Expository"], correct: 0 },
  { section: "q3", q: "Which step involves checking for typos?", options: ["Drafting", "Proofreading", "Prewriting"], correct: 1 },
  
  // ==========================================
  // MORE FLIRTY & FUN QUIZZES (Knowledge + Romance)
  // ==========================================
  { section: "q2", q: "Which of these is the BEST example of a 'Descriptive' paragraph?", options: ["Explaining how photosynthesis works", "Describing how absolutely gorgeous my girlfriend looks today 😍", "Listing the steps to bake a cake"], correct: 1 },
  { section: "q1", q: "What is the perfect 'Hook' for an essay (or a date)?", options: ["A boring dictionary definition", "A long, unrelated story", "Something captivating, just like your smile ✨"], correct: 2 },
  { section: "q7", q: "Identify the correct sentence structure:", options: ["Because I love you.", "I love you because you are brilliant and amazing.", "Loving you, the sun was shining."], correct: 1 },
  { section: "q9", q: "When making a strong assertion, what should you avoid?", options: ["Using evidence", "Saying 'I believe' instead of stating it as a fact (though I DO believe you're perfect)", "Being clear and concise"], correct: 1 },
  { section: "q10", q: "Which connecting word works best here: 'You are studying hard; ________, I am distracting you with cute quizzes.'", options: ["Furthermore", "However", "Consequently"], correct: 1 },
  { section: "q3", q: "What is the most important part of the 'Prewriting' phase?", options: ["Brainstorming brilliant ideas (which you do naturally)", "Worrying about spelling", "Writing the final draft immediately"], correct: 0 },
  { section: "q2", q: "If we wrote a 'Narrative' paragraph about us, what order would it be in?", options: ["Alphabetical order", "Chronological (time) order, starting from our very first date ❤️", "Order of importance"], correct: 1 },
  { section: "q1", q: "A strong conclusion should:", options: ["Introduce completely new information", "Just stop abruptly", "Leave a lasting impression, kind of like you do on me 😉"], correct: 2 },
  { section: "q4", q: "What does 'Unity' mean in a paragraph?", options: ["Every sentence supports the main idea (just like I support your shopping habits 🛍️💖)", "Writing a lot of words", "Using big vocabulary"], correct: 0 },
  { section: "q4", q: "What does 'Coherence' mean?", options: ["The logical flow of ideas (like how perfectly we flow together 😍)", "Correct spelling", "Using a thesis"], correct: 0 },
  { section: "q5", q: "What is an 'Expository' essay?", options: ["An essay that exposes a secret", "An essay that explains or informs (like informing you how pretty you are) ✨", "A fictional story"], correct: 1 },
  { section: "q6", q: "What is the purpose of a 'Process' paragraph?", options: ["To complain about a process", "To explain how to do something step-by-step, like how to win my heart (hint: you already did) 💘", "To define a word"], correct: 1 },
  { section: "q7", q: "Which of these is a comma splice?", options: ["I love you, you are amazing. (A grammar sin, but a factual truth! ❤️)", "I love you because you are amazing.", "I love you. You are amazing."], correct: 0 },
  { section: "q8", q: "What is a 'Thesis Statement'?", options: ["The main argument of the essay (and my main argument is that you're gorgeous)", "The first word of the essay", "The title of the book"], correct: 0 },
  { section: "q9", q: "Why do we avoid using 'You' in formal academic writing?", options: ["Because 'You' is informal (but 'You' are also my favorite person! 😘)", "Because it's misspelled", "Because the professor hates it"], correct: 0 },
  { section: "q10", q: "Which synonym for 'Beautiful' is the most accurate?", options: ["Nice", "Radiant, breathtaking, or angelic (all words that apply to you) ✨", "Okay"], correct: 1 },
  { section: "q1", q: "What does a 'Topic Sentence' do?", options: ["Introduces the paragraph's main idea (always the star of the show, just like you 🥰)", "Ends the essay", "Provides a counterargument"], correct: 0 },
  { section: "q2", q: "What is the purpose of a 'Classification' paragraph?", options: ["To group things into categories, like grouping you into the 'Best Girlfriend Ever' category 🏆", "To argue a point", "To tell a story"], correct: 0 },
  { section: "q3", q: "During the 'Editing' phase, you should:", options: ["Rewrite the whole thing", "Check for grammar and punctuation (and text your boyfriend back! 📱❤️)", "Stop writing"], correct: 1 },
  { section: "q5", q: "What makes a 'Cause and Effect' paragraph effective?", options: ["Explaining why something happens, e.g., Cause: I saw you. Effect: I fell in love. 💘", "Using big words", "Telling a funny joke"], correct: 0 },
  { section: "q6", q: "What is 'Brainstorming'?", options: ["Worrying about the weather", "Generating a lot of ideas quickly (like how quickly I think about you 💭)", "Writing the conclusion"], correct: 1 },
  { section: "q7", q: "Identify the fragment:", options: ["Because you are so smart. (Needs an independent clause! Just like I need you 😉)", "You are so smart.", "I know you are so smart."], correct: 0 },
  { section: "q8", q: "A good counterargument:", options: ["Agrees with the enemy", "Anticipates objections to strengthen your point (just like I anticipate how cute you'll look today) 😍", "Ignores the other side"], correct: 1 },
  { section: "q9", q: "How should you format a block quote?", options: ["Indent it half an inch from the left margin (and keep your standards as high as my love for you) 📏", "Put it in italics", "Underline the whole thing"], correct: 0 },
  { section: "q10", q: "Instead of 'Good', try using:", options: ["Okay", "Crucial, vital, or phenomenal (just like you) 🌟", "Not bad"], correct: 1 },
  { section: "q1", q: "What is the 'Body' of an essay?", options: ["The paragraphs that support the thesis (speaking of bodies, yours is perfect 🔥)", "The title page", "The bibliography"], correct: 0 },
  { section: "q2", q: "In a 'Compare and Contrast' essay, you should:", options: ["Highlight similarities and differences (Though honestly, there's no comparing you to anyone else, you're 1 of 1) 💎", "Only talk about one thing", "Make up facts"], correct: 0 },
  { section: "q3", q: "What is 'Outlining'?", options: ["Drawing a picture", "Organizing your ideas before writing (I organized my whole future around you) 🗺️", "Editing"], correct: 1 },
  { section: "q4", q: "A paragraph lacks coherence if:", options: ["The sentences jump around illogically (unlike my feelings for you, which make perfect sense) ❤️", "It has too many commas", "It is short"], correct: 0 },
  { section: "q5", q: "The primary goal of a 'Persuasive' essay is to:", options: ["Inform the reader", "Convince the reader to agree with you (like how I persuaded you into watching my favorite movies) 😏", "Entertain the reader"], correct: 1 },
  { section: "q6", q: "When using APA format, what goes in the in-text citation?", options: ["Author and year (e.g., Smith, 2026) 📅", "Just the title", "The URL"], correct: 0 },
  { section: "q7", q: "What is the rule for subject-verb agreement?", options: ["They must agree in number (Just like you and I agree that we're soulmates) 👩‍❤️‍👨", "They must rhyme", "They must both be plural"], correct: 0 },
  { section: "q8", q: "What is a 'Call to Action' in a conclusion?", options: ["A phone number", "Urging the reader to do something (My call to action: kiss me next time you see me) 💋", "A summary"], correct: 1 },
  { section: "q9", q: "What is a 'Primary Source'?", options: ["A textbook", "Firsthand evidence or original research (My primary source of happiness is you) ☀️", "Wikipedia"], correct: 1 },
  { section: "q10", q: "Instead of saying 'Bad', you can say:", options: ["Detrimental (Which is what studying without me is!) 😜", "Sad", "Not good"], correct: 0 },
  { section: "q1", q: "What does 'Revising' focus on?", options: ["Fixing typos", "Improving big-picture ideas and flow (I never have to revise my opinion of you, it's always 10/10) 💯", "Formatting"], correct: 1 },
  { section: "q2", q: "What is an 'Anecdote'?", options: ["A type of medicine", "A short, personal story to hook the reader (Like the story of how we met) 📖", "A scientific fact"], correct: 1 },
  { section: "q3", q: "What is the 'Clincher' sentence?", options: ["The final, memorable thought in an essay (You're my clincher, the best part of my day) 🌠", "The first sentence", "A spelling error"], correct: 0 },
  { section: "q4", q: "When citing a website, what do you need if there is no author?", options: ["The article title (Just like you are the title of my life's best chapter) 📚", "Make up a name", "Skip the citation"], correct: 0 },
  { section: "q5", q: "What does 'Redundant' mean?", options: ["Necessary", "Unnecessarily repetitive (Like me asking what you want for dinner) 🔄🍕", "Complex"], correct: 1 },
  { section: "q6", q: "Why should you use an outline?", options: ["It wastes time", "It keeps your thoughts organized (and my thoughts are always organized around you) 🧠💖", "To make the essay longer"], correct: 1 },
  { section: "q7", q: "What is a 'Run-on' sentence?", options: ["Two independent clauses joined without proper punctuation (like how we joined our lives together without any hesitation!) 🏃‍♂️💘", "A sentence that is too short", "A sentence with big words"], correct: 0 },
  { section: "q8", q: "Where does the 'Thesis Statement' usually go?", options: ["The very end of the essay", "The end of the introduction (which is just the start of our love story) 📖✨", "The middle of a body paragraph"], correct: 1 },
  { section: "q9", q: "What is 'Plagiarism'?", options: ["Using someone else's work without giving credit (Stealing is bad, unless it's my favorite hoodie) 🕵️‍♂️❤️", "Writing an original essay", "Citing sources correctly"], correct: 0 },
  { section: "q10", q: "Instead of 'Sad', use this word:", options: ["Happy", "Melancholic (which is how I feel when I'm not with you) 🥺", "Okay"], correct: 1 },
  { section: "q1", q: "What is the primary function of the 'Introduction'?", options: ["To conclude the essay", "To grab attention and state the thesis (You grabbed my attention the second I saw you) 👀🔥", "To list all references"], correct: 1 },
  { section: "q2", q: "What defines an 'Exemplification' paragraph?", options: ["It uses specific examples to prove a point (For example: You are always right. Proof: Every argument we've ever had) 😂", "It tells a long joke", "It ignores facts"], correct: 0 },
  { section: "q3", q: "What should you do after finishing your first draft?", options: ["Delete it", "Take a break and clear your head (preferably by messaging me back) 📱❤️", "Turn it in immediately without reading it"], correct: 1 },
  { section: "q4", q: "What does it mean to 'Synthesize' information?", options: ["To combine ideas from different sources into a coherent whole (Like how perfectly we combine into a couple) 🧩💞", "To copy and paste", "To ignore data"], correct: 0 },
  { section: "q5", q: "What makes a 'Persuasive' essay strong?", options: ["Logical arguments and emotional appeal (My emotional appeal: please let's get takeout tonight) 🥺🍔", "Yelling", "Using no evidence"], correct: 0 },
  { section: "q6", q: "When is the best time to write a conclusion?", options: ["Before you even know the topic", "After you have fully developed your body paragraphs (We've got a fully developed relationship!) 🌱💖", "Never"], correct: 1 },
  { section: "q7", q: "What is the difference between 'There' and 'Their'?", options: ["They mean the same thing", "'There' is a place, 'Their' shows possession (and I am proudly yours!) 💍", "They are both verbs"], correct: 1 },
  { section: "q8", q: "Why are 'Transitions' important?", options: ["They aren't", "They help the reader move smoothly between ideas (Smooth, just like the moves I used to get you) 😎❤️", "They make the essay shorter"], correct: 1 },
  { section: "q9", q: "What is 'Tone' in writing?", options: ["The author's attitude toward the subject (My tone towards you: completely and utterly in love) 🥰", "The volume of the font", "The length of the paper"], correct: 0 },
  { section: "q10", q: "Instead of 'Fast', what is a stronger academic word?", options: ["Slow", "Rapid or Accelerated (Like my heart rate when you smile at me) 💓🚀", "Good"], correct: 1 }
];

// Export to window so notes.js can access it
window.quizBank = quizBank;
