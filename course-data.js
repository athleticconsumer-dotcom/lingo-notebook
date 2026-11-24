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
,
{
  n: 2, ar: "الدَّرْسُ الثَّانِي", de: "Dars 2: Herkunft & Nationalität", icon: "🌍",
  intro: "Bestimmt und unbestimmt (الْبَيْتُ / بَيْتٌ), die drei Tanwīn-Formen, die Endung ـِيّ für Herkunft und Zugehörigkeit, und nach der Nationalität fragen.",

  words: [
    ["الْبَيْتُ", "das Haus (bestimmt, mit ال)", "n"],
    ["بَيْتٌ", "ein Haus (unbestimmt, mit Tanwīn)", "n"],
    ["خَيْرًا", "Gutes (Tanwīn mit Fatha, z. B. جَزَاكَ اللَّهُ خَيْرًا)", "n"],
    ["جِنْسِيَّةٌ", "Nationalität, Staatsangehörigkeit", "n"],
    ["مَا جِنْسِيَّتُكَ؟ / مَا جِنْسِيَّتُكِ؟", "Was ist deine Nationalität? / Was ist deine Nationalität? (zu einer Frau)", "pr"],
    ["أُخْتِي", "meine Schwester", "n"],
    ["مِصْرُ", "Ägypten", "n"],
    ["الصِّينُ", "China", "n"],
    ["رُوسِيَا", "Russland", "n"],
    ["أَلْمَانِيَا", "Deutschland", "n"],
    ["الشِّيشَانُ", "Tschetschenien", "n"],
    ["كَنَدَا", "Kanada", "n"],
    ["الْيَابَانُ", "Japan", "n"],
    ["مِصْرِيٌّ / مِصْرِيَّةٌ", "Ägypter / Ägypterin", "n"],
    ["صِينِيٌّ / صِينِيَّةٌ", "Chinese / Chinesin", "n"],
    ["رُوسِيٌّ / رُوسِيَّةٌ", "Russe / Russin", "n"],
    ["أَلْمَانِيٌّ / أَلْمَانِيَّةٌ", "Deutscher / Deutsche", "n"],
    ["شِيشَانِيٌّ / شِيشَانِيَّةٌ", "Tschetschene / Tschetschenin", "n"],
    ["كَنَدِيٌّ / كَنَدِيَّةٌ", "Kanadier / Kanadierin", "n"],
    ["يَابَانِيٌّ / يَابَانِيَّةٌ", "Japaner / Japanerin", "n"],
    ["إِسْلَامٌ", "Islam", "n"],
    ["إِسْلَامِيٌّ", "islamisch", "n"],
    ["بَيْتِيٌّ", "hausgemacht, häuslich", "n"],
    ["مَدْرَسَةٌ", "Schule", "n"],
    ["مَدْرَسِيٌّ", "Schul-, schulisch", "n"],
    ["كِتَابٌ مَدْرَسِيٌّ", "ein Schulbuch", "n"],
    ["الْكِتَابُ", "das Buch (bestimmt)", "n"]
  ],

  grammar: [
    { title: "Bestimmt und unbestimmt", ar: "بَيْتٌ ← الْبَيْتُ",
      text: "Ohne ال ist ein Wort unbestimmt und bekommt Tanwīn: بَيْتٌ = ein Haus. Mit ال ist es bestimmt, dann fällt das Tanwīn weg: الْبَيْتُ = das Haus. ال und Tanwīn stehen nie zusammen.",
      rows: [["بَيْتٌ", "ein Haus", "كِتَابٌ = ein Buch"], ["الْبَيْتُ", "das Haus", "الْكِتَابُ = das Buch"]] },
    { title: "Die drei Tanwīn-Formen", ar: "ـٌ · ـً · ـٍ",
      text: "Tanwīn ist ein „n“ am Wortende. Bei ـً schreibt man meist noch ein Alif dazu: خَيْرًا.",
      rows: [["ـٌ", "-un (Nominativ)", "بَيْتٌ · كِتَابٌ"], ["ـً", "-an (Akkusativ)", "خَيْرًا · أَهْلًا"], ["ـٍ", "-in (Genitiv)", "بِخَيْرٍ"]] },
    { title: "هَذَا كِتَابٌ oder هَذَا الْكِتَابُ?", ar: "هَذَا كِتَابٌ · هَذَا الْكِتَابُ",
      text: "هَذَا + unbestimmtes Wort ist ein ganzer Satz: هَذَا كِتَابٌ = Das ist ein Buch. هَذَا + bestimmtes Wort heißt „dieses …“: هَذَا الْكِتَابُ مِنْ مِصْرَ = Dieses Buch ist aus Ägypten." },
    { title: "Die Endung ـِيٌّ: Herkunft und Zugehörigkeit", ar: "إِسْلَام + ـِيّ = إِسْلَامِيٌّ",
      text: "Mit ـِيٌّ macht man aus einem Wort „zugehörig zu …“. So entstehen Nationalitäten und Adjektive. Endet das Wort auf ة oder ـيَا, fällt das weg. Für eine Frau kommt noch ة dazu: ـِيَّةٌ.",
      rows: [["مِصْر", "→ مِصْرِيٌّ", "Ägypter · مِصْرِيَّةٌ Ägypterin"], ["رُوسِيَا", "→ رُوسِيٌّ", "ـيَا fällt weg"], ["مَدْرَسَة", "→ مَدْرَسِيٌّ", "ة fällt weg: Schul-"],
        ["بَيْت", "→ بَيْتِيٌّ", "hausgemacht"], ["إِسْلَام", "→ إِسْلَامِيٌّ", "islamisch"], ["الْيَابَان", "→ يَابَانِيٌّ", "ال fällt weg · يَابَانِيَّةٌ"]] },
    { title: "ة wird zu ت, wenn eine Endung kommt", ar: "جِنْسِيَّة + كَ = جِنْسِيَّتُكَ",
      text: "Hängt man an ein Wort mit ة eine Endung wie ـكَ oder ـِي an, wird aus ة ein normales ت.",
      rows: [["جِنْسِيَّة", "+ كَ", "جِنْسِيَّتُكَ = deine Nationalität (m)"], ["جِنْسِيَّة", "+ كِ", "جِنْسِيَّتُكِ = deine Nationalität (w)"], ["جِنْسِيَّة", "+ ي", "جِنْسِيَّتِي = meine Nationalität"]] },
    { title: "Länder und Nationalitäten", ar: "مِصْر · الصِّين · رُوسِيَا · أَلْمَانِيَا · الشِّيشَان",
      rows: [["مِصْر", "Ägypten", "مِصْرِيٌّ / مِصْرِيَّةٌ"], ["الصِّين", "China", "صِينِيٌّ / صِينِيَّةٌ"], ["رُوسِيَا", "Russland", "رُوسِيٌّ / رُوسِيَّةٌ"],
        ["أَلْمَانِيَا", "Deutschland", "أَلْمَانِيٌّ / أَلْمَانِيَّةٌ"], ["الشِّيشَان", "Tschetschenien", "شِيشَانِيٌّ / شِيشَانِيَّةٌ"], ["كَنَدَا", "Kanada", "كَنَدِيٌّ / كَنَدِيَّةٌ"], ["الْيَابَان", "Japan", "يَابَانِيٌّ / يَابَانِيَّةٌ"]] }
  ],

  // Dialogue from the blackboard: A = a sister, B = a brother
  people: [["الْأُخْت", "Schwester"], ["الْأَخ", "Bruder"]],
  dialog: [
    ["A", "مَا جِنْسِيَّتُكَ يَا أَخِي؟", "Was ist deine Nationalität, mein Bruder?", [
      { d: "was?", s: [["مَا", "pr"]] }, { d: "deine Nationalität", s: [["جِنْسِيَّتُ", "n"], ["كَ", "pr"]] }, { d: "o (Anrede)", s: [["يَا", "p"]] }, { d: "mein Bruder", s: [["أَخِ", "n"], ["ي", "pr"]] }]],
    ["B", "أَنَا كَنَدِيٌّ، وَأَنْتِ يَا أُخْتِي؟", "Ich bin Kanadier, und du, meine Schwester?", [
      { d: "ich", s: [["أَنَا", "pr"]] }, { d: "Kanadier", s: [["كَنَدِيٌّ", "n"]] }, { d: "und du (w)", s: [["وَ", "p"], ["أَنْتِ", "pr"]] }, { d: "o (Anrede)", s: [["يَا", "p"]] }, { d: "meine Schwester", s: [["أُخْتِ", "n"], ["ي", "pr"]] }]],
    ["A", "أَنَا يَابَانِيَّةٌ.", "Ich bin Japanerin.", [
      { d: "ich", s: [["أَنَا", "pr"]] }, { d: "Japanerin", s: [["يَابَانِيَّةٌ", "n"]] }]]
  ],

  extra: [
    ["هَذَا الْكِتَابُ مِنْ مِصْر.", "Dieses Buch ist aus Ägypten.", [{ d: "dies(es)", s: [["هَذَا", "pr"]] }, { d: "das Buch", s: [["الْكِتَابُ", "n"]] }, { d: "aus", s: [["مِنْ", "p"]] }, { d: "Ägypten", s: [["مِصْر", "n"]] }]],
    ["هَذَا كِتَابٌ مَدْرَسِيٌّ.", "Das ist ein Schulbuch.", [{ d: "das", s: [["هَذَا", "pr"]] }, { d: "ein Buch", s: [["كِتَابٌ", "n"]] }, { d: "Schul-", s: [["مَدْرَسِيٌّ", "n"]] }]],
    ["الْبَيْتُ · بَيْتٌ", "das Haus · ein Haus", [{ d: "das Haus", s: [["الْ", "p"], ["بَيْتُ", "n"]] }, { d: "ein Haus", s: [["بَيْتٌ", "n"]] }]],
    ["إِسْلَامِيٌّ · بَيْتِيٌّ · مَدْرَسِيٌّ", "islamisch · hausgemacht · Schul-", [{ d: "islamisch", s: [["إِسْلَامِ", "n"], ["يٌّ", "n"]] }, { d: "hausgemacht", s: [["بَيْتِ", "n"], ["يٌّ", "n"]] }, { d: "Schul-", s: [["مَدْرَسِ", "n"], ["يٌّ", "n"]] }]],
    ["مَا جِنْسِيَّتُكِ؟", "Was ist deine Nationalität? (zu einer Frau)", [{ d: "was?", s: [["مَا", "pr"]] }, { d: "deine Nationalität (w)", s: [["جِنْسِيَّتُ", "n"], ["كِ", "pr"]] }]]
  ]
}
];

window.COURSE_TYPES = {
  n: { name: "Nomen (اِسْم)", color: "#2f5d9e", pen: "blau" },
  v: { name: "Verb (فِعْل)", color: "#c0392b", pen: "rot" },
  p: { name: "Partikel / Präposition (حَرْف)", color: "#2e7d4f", pen: "grün" },
  pr: { name: "Pronomen & Fragewort", color: "#1f2a37", pen: "schwarz" }
};
