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
,
{
  n: 3, ar: "الدَّرْسُ الثَّالِثُ", de: "Dars 3: Ja, nein, ich bin nicht … & Berufe", icon: "💼",
  intro: "Ja/Nein-Fragen mit هَلْ, verneinen mit لَسْتُ (+ Akkusativ), „aber meine Herkunft ist …“ mit لَكِنْ أَصْلِي, Berufe und die weibliche Form mit ة.",

  words: [
    ["هَلْ", "Fragewort für Ja/Nein-Fragen", "p"],
    ["نَعَمْ", "ja", "p"],
    ["لَا", "nein", "p"],
    ["لَسْتُ", "ich bin nicht", "v"],
    ["لَكِنْ", "aber", "p"],
    ["أَصْلٌ", "Herkunft, Ursprung", "n"],
    ["أَصْلِي", "meine Herkunft (أَصْل + ي)", "n"],
    ["عَرَبِيٌّ / عَرَبِيَّةٌ", "Araber / Araberin", "n"],
    ["تُرْكِيٌّ / تُرْكِيَّةٌ", "Türke / Türkin", "n"],
    ["كُرْدِيٌّ / كُرْدِيَّةٌ", "Kurde / Kurdin", "n"],
    ["أَمْرِيكِيٌّ / أَمْرِيكِيَّةٌ", "Amerikaner / Amerikanerin", "n"],
    ["مُتَزَوِّجٌ / مُتَزَوِّجَةٌ", "verheiratet (m) / verheiratet (w)", "n"],
    ["مُهَنْدِسٌ / مُهَنْدِسَةٌ", "Ingenieur / Ingenieurin", "n"],
    ["طَالِبٌ / طَالِبَةٌ", "Student, Schüler / Studentin, Schülerin", "n"],
    ["طَبِيبٌ / طَبِيبَةٌ", "Arzt / Ärztin", "n"],
    ["مُدَرِّسٌ / مُدَرِّسَةٌ", "Lehrer / Lehrerin", "n"],
    ["طَالِبِي", "mein Schüler", "n"],
    ["طَالِبُكَ", "dein Schüler (zu einem Mann)", "n"],
    ["أَيْنَ طَالِبُكَ؟", "Wo ist dein Schüler?", "pr"],
    ["هَلْ أَنْتَ رُوسِيٌّ؟", "Bist du Russe?", "p"],
    ["لَسْتُ عَرَبِيًّا", "Ich bin kein Araber.", "v"],
    ["لَسْتُ مُتَزَوِّجًا", "Ich bin nicht verheiratet.", "v"]
  ],

  grammar: [
    { title: "Ja/Nein-Fragen mit هَلْ", ar: "هَلْ أَنْتَ رُوسِيٌّ؟ — نَعَمْ / لَا",
      text: "هَلْ macht aus einem Satz eine Ja/Nein-Frage. Die Antwort ist نَعَمْ (ja) oder لَا (nein).",
      rows: [["أَنْتَ طَالِبٌ", "Du bist Student.", "هَلْ أَنْتَ طَالِبٌ؟ = Bist du Student?"], ["أَنْتِ مُتَزَوِّجَةٌ", "Du (w) bist verheiratet.", "هَلْ أَنْتِ مُتَزَوِّجَةٌ؟"]] },
    { title: "Verneinen mit لَسْتُ: Akkusativ!", ar: "أَنَا لَسْتُ …ً",
      text: "لَسْتُ heißt „ich bin nicht“. Das Wort danach steht im Akkusativ: aus ـٌ wird ـً (mit Alif), wie die Tafel zeigt.",
      rows: [["أَنَا عَرَبِيٌّ", "→ لَسْتُ عَرَبِيًّا", "Ich bin kein Araber."], ["أَنَا مُتَزَوِّجٌ", "→ لَسْتُ مُتَزَوِّجًا", "Ich bin nicht verheiratet."], ["أَنَا رُوسِيٌّ", "→ لَسْتُ رُوسِيًّا", "Ich bin kein Russe."]] },
    { title: "لَكِنْ أَصْلِي …: aber meine Herkunft ist …", ar: "أَنَا أَمْرِيكِيٌّ لَكِنْ أَصْلِي …",
      text: "لَكِنْ = aber. أَصْلِي = mein Ursprung, meine Herkunft (أَصْل + ي). So sagt man, woher die Familie eigentlich kommt.",
      rows: [["أَنَا تُرْكِيَّةٌ لَكِنْ أَصْلِي كُرْدِيٌّ", "", "Ich bin Türkin, aber meine Herkunft ist kurdisch."]] },
    { title: "Weiblich mit ة", ar: "مُتَزَوِّج + ة = مُتَزَوِّجَةٌ",
      text: "Für eine Frau hängt man ة an. Das gilt für Berufe, Nationalitäten und Eigenschaften.",
      rows: [["مُهَنْدِسٌ", "→ مُهَنْدِسَةٌ", "Ingenieur / Ingenieurin"], ["طَالِبٌ", "→ طَالِبَةٌ", "Student / Studentin"], ["طَبِيبٌ", "→ طَبِيبَةٌ", "Arzt / Ärztin"],
        ["مُدَرِّسٌ", "→ مُدَرِّسَةٌ", "Lehrer / Lehrerin"], ["مُتَزَوِّجٌ", "→ مُتَزَوِّجَةٌ", "verheiratet"], ["تُرْكِيٌّ", "→ تُرْكِيَّةٌ", "Türke / Türkin"]] },
    { title: "Wiederholung: mein und dein", ar: "طَالِبِي · طَالِبُكَ",
      text: "Wie in Dars 1: ـِي = mein, ـُكَ = dein. أَيْنَ طَالِبُكَ؟ = Wo ist dein Schüler? — زَيْدٌ طَالِبِي = Zaid ist mein Schüler." }
  ],

  // Dialogue from the blackboard: A = فَاطِمَة, B = عُمَر
  people: [["فَاطِمَة", "Fāṭima"], ["عُمَر", "ʿUmar"]],
  dialog: [
    ["A", "هَلْ أَنْتَ عَرَبِيٌّ؟", "Bist du Araber?", [
      { d: "Ja/Nein-Frage", s: [["هَلْ", "p"]] }, { d: "du (m)", s: [["أَنْتَ", "pr"]] }, { d: "Araber", s: [["عَرَبِيٌّ", "n"]] }]],
    ["B", "لَا، لَسْتُ عَرَبِيًّا، أَنَا تُرْكِيٌّ.", "Nein, ich bin kein Araber, ich bin Türke.", [
      { d: "nein", s: [["لَا", "p"]] }, { d: "ich bin nicht", s: [["لَسْ", "v"], ["تُ", "pr"]] }, { d: "Araber (Akk.)", s: [["عَرَبِيًّا", "n"]] }, { d: "ich", s: [["أَنَا", "pr"]] }, { d: "Türke", s: [["تُرْكِيٌّ", "n"]] }]],
    ["A", "أَنَا تُرْكِيَّةٌ لَكِنْ أَصْلِي كُرْدِيٌّ.", "Ich bin Türkin, aber meine Herkunft ist kurdisch.", [
      { d: "ich", s: [["أَنَا", "pr"]] }, { d: "Türkin", s: [["تُرْكِيَّةٌ", "n"]] }, { d: "aber", s: [["لَكِنْ", "p"]] }, { d: "meine Herkunft", s: [["أَصْلِ", "n"], ["ي", "pr"]] }, { d: "kurdisch", s: [["كُرْدِيٌّ", "n"]] }]],
    ["B", "هَلْ أَنْتِ مُتَزَوِّجَةٌ؟", "Bist du verheiratet?", [
      { d: "Ja/Nein-Frage", s: [["هَلْ", "p"]] }, { d: "du (w)", s: [["أَنْتِ", "pr"]] }, { d: "verheiratet (w)", s: [["مُتَزَوِّجَةٌ", "n"]] }]],
    ["A", "نَعَمْ، أَنَا مُتَزَوِّجَةٌ، وَأَنْتَ؟", "Ja, ich bin verheiratet, und du?", [
      { d: "ja", s: [["نَعَمْ", "p"]] }, { d: "ich", s: [["أَنَا", "pr"]] }, { d: "verheiratet (w)", s: [["مُتَزَوِّجَةٌ", "n"]] }, { d: "und du (m)?", s: [["وَ", "p"], ["أَنْتَ", "pr"]] }]],
    ["B", "لَسْتُ مُتَزَوِّجًا.", "Ich bin nicht verheiratet.", [
      { d: "ich bin nicht", s: [["لَسْ", "v"], ["تُ", "pr"]] }, { d: "verheiratet (Akk.)", s: [["مُتَزَوِّجًا", "n"]] }]],
    ["A", "هَلْ أَنْتَ طَالِبٌ؟", "Bist du Student?", [
      { d: "Ja/Nein-Frage", s: [["هَلْ", "p"]] }, { d: "du (m)", s: [["أَنْتَ", "pr"]] }, { d: "Student", s: [["طَالِبٌ", "n"]] }]],
    ["B", "لَا، أَنَا مُدَرِّسٌ، وَأَنْتِ؟", "Nein, ich bin Lehrer, und du?", [
      { d: "nein", s: [["لَا", "p"]] }, { d: "ich", s: [["أَنَا", "pr"]] }, { d: "Lehrer", s: [["مُدَرِّسٌ", "n"]] }, { d: "und du (w)?", s: [["وَ", "p"], ["أَنْتِ", "pr"]] }]],
    ["A", "أَنَا طَبِيبَةٌ. وَهَلْ زَيْدٌ طَالِبُكَ؟", "Ich bin Ärztin. Und ist Zaid dein Schüler?", [
      { d: "ich", s: [["أَنَا", "pr"]] }, { d: "Ärztin", s: [["طَبِيبَةٌ", "n"]] }, { d: "und (Frage)", s: [["وَ", "p"], ["هَلْ", "p"]] }, { d: "Zaid", s: [["زَيْدٌ", "n"]] }, { d: "dein Schüler", s: [["طَالِبُ", "n"], ["كَ", "pr"]] }]],
    ["B", "نَعَمْ، زَيْدٌ طَالِبِي.", "Ja, Zaid ist mein Schüler.", [
      { d: "ja", s: [["نَعَمْ", "p"]] }, { d: "Zaid", s: [["زَيْدٌ", "n"]] }, { d: "mein Schüler", s: [["طَالِبِ", "n"], ["ي", "pr"]] }]]
  ],

  extra: [
    ["هَلْ أَنْتَ رُوسِيٌّ؟", "Bist du Russe?", [{ d: "Ja/Nein-Frage", s: [["هَلْ", "p"]] }, { d: "du (m)", s: [["أَنْتَ", "pr"]] }, { d: "Russe", s: [["رُوسِيٌّ", "n"]] }]],
    ["أَنَا لَسْتُ رُوسِيًّا.", "Ich bin kein Russe.", [{ d: "ich", s: [["أَنَا", "pr"]] }, { d: "bin nicht", s: [["لَسْ", "v"], ["تُ", "pr"]] }, { d: "Russe (Akk.)", s: [["رُوسِيًّا", "n"]] }]],
    ["أَنَا أَمْرِيكِيٌّ لَكِنْ أَصْلِي …", "Ich bin Amerikaner, aber meine Herkunft ist …", [{ d: "ich", s: [["أَنَا", "pr"]] }, { d: "Amerikaner", s: [["أَمْرِيكِيٌّ", "n"]] }, { d: "aber", s: [["لَكِنْ", "p"]] }, { d: "meine Herkunft", s: [["أَصْلِ", "n"], ["ي", "pr"]] }, { d: "…", s: [["…", "n"]] }]],
    ["أَيْنَ طَالِبُكَ؟", "Wo ist dein Schüler?", [{ d: "wo?", s: [["أَيْنَ", "pr"]] }, { d: "dein Schüler", s: [["طَالِبُ", "n"], ["كَ", "pr"]] }]],
    ["مُهَنْدِسٌ · طَالِبٌ · طَبِيبٌ · مُدَرِّسٌ", "Ingenieur · Student · Arzt · Lehrer", [{ d: "Ingenieur", s: [["مُهَنْدِسٌ", "n"]] }, { d: "Student", s: [["طَالِبٌ", "n"]] }, { d: "Arzt", s: [["طَبِيبٌ", "n"]] }, { d: "Lehrer", s: [["مُدَرِّسٌ", "n"]] }]]
  ]
}
];

window.COURSE_TYPES = {
  n: { name: "Nomen (اِسْم)", color: "#2f5d9e", pen: "blau" },
  v: { name: "Verb (فِعْل)", color: "#c0392b", pen: "rot" },
  p: { name: "Partikel / Präposition (حَرْف)", color: "#2e7d4f", pen: "grün" },
  pr: { name: "Pronomen & Fragewort", color: "#1f2a37", pen: "schwarz" }
};
