// Arabic beginner course (Fusha), following the lessons (دُرُوس) of the teacher's blackboard.
// Word types for the Kitab page (colours for the pens):
//   n = Nomen (اِسْم) blue · v = Verb (فِعْل) red · p = Partikel / Präposition (حَرْف) green · pr = Pronomen & Fragewort black
// A sentence is a list of words: { d: German meaning, s: [[Arabic part, type], …] }.
// A word can have several parts, e.g. اِسْمِي = اِسْمِ (Nomen) + ي (Pronomen "mein").

window.COURSE = [
{
  n: 1, ar: "الدَّرْسُ الْأَوَّلُ", de: "Dars 1: Kennenlernen", icon: "👋",
  intro: "Begrüßen, sich vorstellen, nach Name und Herkunft fragen. Dazu: die Endungen ـِي (mein) und ـكَ / ـكِ (dein).",

  words: [
    ["أَهْلًا", "hallo, willkommen (von أَهْلٌ = Familie)", "n"],
    ["أَخٌ / أَخِي", "Bruder / mein Bruder", "n"],
    ["اِسْمٌ", "Name", "n"],
    ["اِسْمِي", "mein Name (اِسْم + ي)", "n"],
    ["اِسْمُكَ / اِسْمُكِ", "dein Name (zu einem Mann / zu einer Frau)", "n"],
    ["مَا؟", "was?", "pr"],
    ["هَذَا", "das, dies (männlich)", "pr"],
    ["مَا هَذَا؟", "Was ist das?", "pr"],
    ["بَيْتٌ", "Haus", "n"],
    ["هَذَا بَيْتِي", "Das ist mein Haus.", "n"],
    ["بَيْتُكَ", "dein Haus (zu einem Mann)", "n"],
    ["كِتَابٌ / كِتَابِي", "Buch / mein Buch", "n"],
    ["أَيْنَ؟", "wo?", "pr"],
    ["فِي", "in", "p"],
    ["مِنْ", "aus, von", "p"],
    ["مِنْ أَيْنَ أَنْتَ؟", "Woher bist du? (zu einem Mann)", "pr"],
    ["أَنَا مِنْ …", "Ich bin aus …", "pr"],
    ["أَنَا", "ich", "pr"],
    ["أَنْتَ / أَنْتِ", "du (zu einem Mann / zu einer Frau)", "pr"],
    ["كَيْفَ حَالُكَ؟", "Wie geht es dir? (wörtlich: Wie ist dein Zustand?)", "pr"],
    ["أَنَا بِخَيْرٍ", "Mir geht es gut. (wörtlich: Ich bin in Gutem)", "n"],
    ["يَا", "Anrede-Partikel (o …), z. B. يَا زَيْدُ", "p"],
    ["تَشَرَّفْتُ بِكَ", "Es ist mir eine Ehre (dich kennenzulernen).", "v"],
    ["الشَّرَفُ لِي", "Die Ehre ist meinerseits. (wörtlich: Die Ehre ist für mich)", "n"],
    ["مَا شَاءَ اللَّهُ", "was Allah wollte (Ausdruck der Bewunderung)", "pr"]
  ],

  grammar: [
    { title: "Mein und dein: Endungen am Nomen", ar: "اِسْم + ـِي = اِسْمِي",
      text: "Im Arabischen hängt man „mein“ und „dein“ einfach hinten an das Wort an.",
      rows: [["ـِي", "mein", "اِسْمِي · كِتَابِي · بَيْتِي · أَخِي"], ["ـُكَ", "dein (zu einem Mann)", "اِسْمُكَ · بَيْتُكَ · حَالُكَ"], ["ـُكِ", "dein (zu einer Frau)", "اِسْمُكِ · بَيْتُكِ · حَالُكِ"]] },
    { title: "Fragewörter", ar: "مَا · أَيْنَ · مِنْ أَيْنَ · كَيْفَ",
      rows: [["مَا", "was?", "مَا هَذَا؟ · مَا اسْمُكَ؟"], ["أَيْنَ", "wo?", "أَيْنَ تَتَارْسْتَان؟"], ["مِنْ أَيْنَ", "woher?", "مِنْ أَيْنَ أَنْتَ؟"], ["كَيْفَ", "wie?", "كَيْفَ حَالُكَ؟"]] },
    { title: "Kleine Wörter: مِنْ · فِي · بِـ", ar: "مِنْ · فِي · بِـ",
      text: "بِـ wird direkt an das nächste Wort angehängt: بِكَ (bei dir / durch dich), بِخَيْرٍ (in Gutem).",
      rows: [["مِنْ", "aus, von", "أَنَا مِنْ مَالِيزِيَا"], ["فِي", "in", "تَتَارْسْتَان فِي رُوسِيَا"], ["بِـ", "mit, durch, in", "تَشَرَّفْتُ بِكَ · بِخَيْرٍ"]] },
    { title: "Tanwīn: ـٍ in بِخَيْرٍ", ar: "بِخَيْرٍ",
      text: "Die doppelte Kasra ـٍ spricht man „-in“: bi-chairin. Nach بِـ steht das Wort mit Kasra (Genitiv), und weil es unbestimmt ist, mit Tanwīn." },
    { title: "Sonnenbuchstabe in الشَّرَفُ", ar: "الشَّرَفُ = asch-scharafu",
      text: "Vor einem Sonnenbuchstaben wie ش spricht man das ل von ال nicht. Stattdessen wird der Buchstabe verdoppelt (Schadda): nicht al-scharaf, sondern asch-scharaf." },
    { title: "يَا: jemanden anreden", ar: "يَا زَيْدُ · يَا أَخِي",
      text: "Mit يَا spricht man jemanden direkt an, wie „o …“ oder einfach den Namen mit Komma: مِنْ أَيْنَ أَنْتَ يَا زَيْدُ؟ = Woher bist du, Zaid?" }
  ],

  // Dialogue from the blackboard: A = قَاسِم, B = زَيْد
  people: [["قَاسِم", "Qāsim"], ["زَيْد", "Zaid"]],
  dialog: [
    ["A", "أَهْلًا أَخِي.", "Hallo / willkommen, mein Bruder.", [
      { d: "hallo, willkommen", s: [["أَهْلًا", "n"]] }, { d: "mein Bruder", s: [["أَخِ", "n"], ["ي", "pr"]] }]],
    ["B", "أَهْلًا.", "Hallo.", [
      { d: "hallo", s: [["أَهْلًا", "n"]] }]],
    ["A", "اِسْمِي قَاسِمٌ. مَا اسْمُكَ؟", "Mein Name ist Qāsim. Was ist dein Name?", [
      { d: "mein Name", s: [["اِسْمِ", "n"], ["ي", "pr"]] }, { d: "Qāsim", s: [["قَاسِمٌ", "n"]] }, { d: "was?", s: [["مَا", "pr"]] }, { d: "dein Name", s: [["اسْمُ", "n"], ["كَ", "pr"]] }]],
    ["B", "اِسْمِي زَيْدٌ.", "Mein Name ist Zaid.", [
      { d: "mein Name", s: [["اِسْمِ", "n"], ["ي", "pr"]] }, { d: "Zaid", s: [["زَيْدٌ", "n"]] }]],
    ["A", "مِنْ أَيْنَ أَنْتَ يَا زَيْدُ؟", "Woher bist du, Zaid?", [
      { d: "aus, von", s: [["مِنْ", "p"]] }, { d: "wo?", s: [["أَيْنَ", "pr"]] }, { d: "du (m)", s: [["أَنْتَ", "pr"]] }, { d: "o (Anrede)", s: [["يَا", "p"]] }, { d: "Zaid", s: [["زَيْدُ", "n"]] }]],
    ["B", "أَنَا مِنْ مَالِيزِيَا، وَأَنْتَ؟", "Ich bin aus Malaysia, und du?", [
      { d: "ich", s: [["أَنَا", "pr"]] }, { d: "aus", s: [["مِنْ", "p"]] }, { d: "Malaysia", s: [["مَالِيزِيَا", "n"]] }, { d: "und du?", s: [["وَ", "p"], ["أَنْتَ", "pr"]] }]],
    ["A", "أَنَا مِنْ تَتَارْسْتَان.", "Ich bin aus Tatarstan.", [
      { d: "ich", s: [["أَنَا", "pr"]] }, { d: "aus", s: [["مِنْ", "p"]] }, { d: "Tatarstan", s: [["تَتَارْسْتَان", "n"]] }]],
    ["B", "أَيْنَ تَتَارْسْتَان؟", "Wo ist Tatarstan?", [
      { d: "wo?", s: [["أَيْنَ", "pr"]] }, { d: "Tatarstan", s: [["تَتَارْسْتَان", "n"]] }]],
    ["A", "تَتَارْسْتَان فِي رُوسِيَا.", "Tatarstan ist in Russland.", [
      { d: "Tatarstan", s: [["تَتَارْسْتَان", "n"]] }, { d: "in", s: [["فِي", "p"]] }, { d: "Russland", s: [["رُوسِيَا", "n"]] }]],
    ["B", "مَا شَاءَ اللَّهُ.", "Ma scha'a Allah! (was Allah wollte)", [
      { d: "was", s: [["مَا", "pr"]] }, { d: "er wollte", s: [["شَاءَ", "v"]] }, { d: "Allah", s: [["اللَّهُ", "n"]] }]],
    ["A", "تَشَرَّفْتُ بِكَ يَا أَخِي زَيْد.", "Es ist mir eine Ehre (dich kennenzulernen), mein Bruder Zaid.", [
      { d: "ich wurde geehrt", s: [["تَشَرَّفْ", "v"], ["تُ", "pr"]] }, { d: "durch dich", s: [["بِ", "p"], ["كَ", "pr"]] }, { d: "o (Anrede)", s: [["يَا", "p"]] },
      { d: "mein Bruder", s: [["أَخِ", "n"], ["ي", "pr"]] }, { d: "Zaid", s: [["زَيْد", "n"]] }]],
    ["B", "الشَّرَفُ لِي أَخِي قَاسِم.", "Die Ehre ist meinerseits, mein Bruder Qāsim.", [
      { d: "die Ehre", s: [["الشَّرَفُ", "n"]] }, { d: "für mich", s: [["لِ", "p"], ["ي", "pr"]] }, { d: "mein Bruder", s: [["أَخِ", "n"], ["ي", "pr"]] }, { d: "Qāsim", s: [["قَاسِم", "n"]] }]]
  ],

  // More sentences from the blackboard
  extra: [
    ["مَا هَذَا؟", "Was ist das?", [{ d: "was?", s: [["مَا", "pr"]] }, { d: "das", s: [["هَذَا", "pr"]] }]],
    ["هَذَا بَيْتِي.", "Das ist mein Haus.", [{ d: "das", s: [["هَذَا", "pr"]] }, { d: "mein Haus", s: [["بَيْتِ", "n"], ["ي", "pr"]] }]],
    ["كَيْفَ حَالُكَ؟", "Wie geht es dir?", [{ d: "wie?", s: [["كَيْفَ", "pr"]] }, { d: "dein Zustand", s: [["حَالُ", "n"], ["كَ", "pr"]] }]],
    ["أَنَا بِخَيْرٍ.", "Mir geht es gut.", [{ d: "ich", s: [["أَنَا", "pr"]] }, { d: "in Gutem", s: [["بِ", "p"], ["خَيْرٍ", "n"]] }]],
    ["كِتَابِي · بَيْتُكَ", "mein Buch · dein Haus", [{ d: "mein Buch", s: [["كِتَابِ", "n"], ["ي", "pr"]] }, { d: "dein Haus", s: [["بَيْتُ", "n"], ["كَ", "pr"]] }]]
  ]
}
];

window.COURSE_TYPES = {
  n: { name: "Nomen (اِسْم)", color: "#2f5d9e", pen: "blau" },
  v: { name: "Verb (فِعْل)", color: "#c0392b", pen: "rot" },
  p: { name: "Partikel / Präposition (حَرْف)", color: "#2e7d4f", pen: "grün" },
  pr: { name: "Pronomen & Fragewort", color: "#1f2a37", pen: "schwarz" }
};
