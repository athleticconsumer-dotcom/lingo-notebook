/* Lingo Notebook – a fill-in-the-blanks vocabulary notebook.
   Words are shown in the language you KNOW; you write them in the language you LEARN.
   Everything is saved in this browser (localStorage). Use Backup to move it elsewhere. */
(() => {
"use strict";

// Word files store each topic as text lines "English|Deutsch|Français|Русский"; turn them into arrays and put them in reading order.
TOPICS.forEach(t => { if (typeof t.words === "string") t.words = t.words.trim().split("\n").map(l => l.split("|").map(x => x.trim())).filter(r => r.length === 4); });
if (window.TOPIC_ORDER) TOPICS.sort((a, b) => { const i = x => { const k = TOPIC_ORDER.indexOf(x.id); return k < 0 ? 999 : k; }; return i(a) - i(b); });

// ---------- Languages ----------
// Languages the words are printed in (the word list has these columns).
const KNOWN = [
  { code: "en", name: "English",  native: "English" },
  { code: "de", name: "German",   native: "Deutsch" },
  { code: "fr", name: "French",   native: "Français" },
  { code: "ru", name: "Russian",  native: "Русский" },
];
const COL = { en: 0, de: 1, fr: 2, ru: 3 };

// Languages you can learn (you write these yourself, so any language works).
const TARGETS = [
  ["Arabic (Fusha)", "العربية الفصحى", "ar"],
  ["Najdi Arabic (Saudi)", "نجدي", "ar"],
  ["Gulf Arabic", "خليجي", "ar"],
  ["Egyptian Arabic", "مصري", "ar"],
  ["Levantine Arabic", "شامي", "ar"],
  ["Algerian Darija", "دارجة جزائرية", "ar"],
  ["Moroccan Darija", "الدارجة المغربية", "ar"],
  ["English", "English", "en"],
  ["German", "Deutsch", "de"],
  ["French", "Français", "fr"],
  ["Russian", "Русский", "ru"],
  ["Spanish", "Español", ""],
  ["Italian", "Italiano", ""],
  ["Portuguese", "Português", ""],
  ["Turkish", "Türkçe", ""],
  ["Kumyk", "Къумукъ тил", ""],
  ["Chechen", "Нохчийн мотт", ""],
  ["Persian", "فارسی", ""],
  ["Urdu", "اردو", ""],
  ["Japanese", "日本語", ""],
  ["Korean", "한국어", ""],
  ["Chinese", "中文", ""],
];

// ---------- Interface text (follows the language you know) ----------
const UI = {
  en: { install:"Install app", installTip:"Install Lingo Notebook on your phone: it opens like an app, with its own icon, and works offline.", installIos:"On iPhone: tap Share, then “Add to Home Screen”.", my:"My notebooks", sub:"Pick a language you know and one you want to learn. Every word appears in your language with a blank next to it. Fill the blanks and build your own dictionary, topic by topic.",
    newNb:"New notebook", known:"I know…", knownHint:"The words will be printed in this language.", learn:"I want to learn…", learnHint:"You write this language in the blanks.",
    other:"Other language…", create:"Create notebook", words:"words", filled:"filled", topics:"topics", own:"own words", contents:"Contents",
    review:"Review", back:"Back", onlyBlanks:"Show only empty blanks", ownWords:"My own words", addWord:"+ Add a word", notes:"Notes & dialogues",
    promptPh:"word", answerPh:"translation", saved:"Saved", prev:"Previous", next:"Next", print:"Print topic", printBlank:"Print empty worksheet",
    backup:"Download backup", imp:"Restore backup", del:"Delete this notebook", confirmDel:"Delete this notebook and everything you wrote in it?",
    tap:"Tap to show your answer", knew:"I knew it ✓", again:"Again ↺", finished:"Session finished", restart:"Start again", noFilled:"Fill some blanks first, then come back to review them.",
    all:"All topics", reverse:"Reverse direction", importOk:"Backup restored.", importBad:"This file is not a valid backup.", same:"Choose a different language than the one you know.",
    langName:"Language name", mastered:"mastered", leftPage:"Fill in the blanks", rightPage:"Free page", cards:"cards" },
  de: { install:"App installieren", installTip:"Installiere Lingo Notebook auf deinem Handy: Es öffnet sich wie eine App, mit eigenem Icon, und funktioniert auch offline.", installIos:"Auf dem iPhone: Teilen antippen, dann „Zum Home-Bildschirm“.", my:"Meine Notizbücher", sub:"Wähle eine Sprache, die du kannst, und eine, die du lernen willst. Jedes Wort steht in deiner Sprache mit einer Lücke daneben. Fülle die Lücken und bau dir Thema für Thema dein eigenes Wörterbuch.",
    newNb:"Neues Notizbuch", known:"Ich kann…", knownHint:"In dieser Sprache werden die Wörter angezeigt.", learn:"Ich lerne…", learnHint:"Diese Sprache schreibst du in die Lücken.",
    other:"Andere Sprache…", create:"Notizbuch anlegen", words:"Wörter", filled:"ausgefüllt", topics:"Themen", own:"eigene Wörter", contents:"Inhalt",
    review:"Wiederholen", back:"Zurück", onlyBlanks:"Nur leere Lücken zeigen", ownWords:"Meine eigenen Wörter", addWord:"+ Wort hinzufügen", notes:"Notizen & Dialoge",
    promptPh:"Wort", answerPh:"Übersetzung", saved:"Gespeichert", prev:"Zurück", next:"Weiter", print:"Thema drucken", printBlank:"Leeres Arbeitsblatt drucken",
    backup:"Backup herunterladen", imp:"Backup wiederherstellen", del:"Notizbuch löschen", confirmDel:"Dieses Notizbuch und alles, was du hineingeschrieben hast, löschen?",
    tap:"Tippen, um deine Antwort zu sehen", knew:"Gewusst ✓", again:"Nochmal ↺", finished:"Runde beendet", restart:"Neu starten", noFilled:"Fülle zuerst ein paar Lücken aus, dann kannst du sie hier wiederholen.",
    all:"Alle Themen", reverse:"Richtung umdrehen", importOk:"Backup wiederhergestellt.", importBad:"Diese Datei ist kein gültiges Backup.", same:"Wähle eine andere Sprache als die, die du kannst.",
    langName:"Name der Sprache", mastered:"gewusst", leftPage:"Lücken ausfüllen", rightPage:"Freie Seite", cards:"Karten" },
  fr: { install:"Installer l’app", installTip:"Installe Lingo Notebook sur ton téléphone : il s’ouvre comme une app, avec sa propre icône, et marche hors ligne.", installIos:"Sur iPhone : touche Partager, puis « Sur l’écran d’accueil ».", my:"Mes cahiers", sub:"Choisis une langue que tu connais et une que tu veux apprendre. Chaque mot apparaît dans ta langue avec un blanc à côté. Remplis les blancs et construis ton propre dictionnaire, thème par thème.",
    newNb:"Nouveau cahier", known:"Je parle…", knownHint:"Les mots seront affichés dans cette langue.", learn:"J'apprends…", learnHint:"Tu écris cette langue dans les blancs.",
    other:"Autre langue…", create:"Créer le cahier", words:"mots", filled:"remplis", topics:"thèmes", own:"mots perso", contents:"Sommaire",
    review:"Réviser", back:"Retour", onlyBlanks:"Afficher seulement les blancs vides", ownWords:"Mes propres mots", addWord:"+ Ajouter un mot", notes:"Notes & dialogues",
    promptPh:"mot", answerPh:"traduction", saved:"Enregistré", prev:"Précédent", next:"Suivant", print:"Imprimer le thème", printBlank:"Imprimer une fiche vide",
    backup:"Télécharger une sauvegarde", imp:"Restaurer une sauvegarde", del:"Supprimer ce cahier", confirmDel:"Supprimer ce cahier et tout ce que tu y as écrit ?",
    tap:"Touche pour voir ta réponse", knew:"Je savais ✓", again:"Encore ↺", finished:"Série terminée", restart:"Recommencer", noFilled:"Remplis d'abord quelques blancs, puis reviens les réviser.",
    all:"Tous les thèmes", reverse:"Inverser le sens", importOk:"Sauvegarde restaurée.", importBad:"Ce fichier n'est pas une sauvegarde valide.", same:"Choisis une autre langue que celle que tu parles.",
    langName:"Nom de la langue", mastered:"maîtrisés", leftPage:"Remplis les blancs", rightPage:"Page libre", cards:"cartes" },
  ru: { install:"Установить", installTip:"Установи Lingo Notebook на телефон: он открывается как приложение, со своей иконкой, и работает офлайн.", installIos:"На iPhone: нажми «Поделиться», затем «На экран „Домой“».", my:"Мои тетради", sub:"Выбери язык, который знаешь, и язык, который хочешь выучить. Каждое слово написано на твоём языке, а рядом пустое место. Заполняй пропуски и составляй свой словарь, тема за темой.",
    newNb:"Новая тетрадь", known:"Я знаю…", knownHint:"Слова будут показаны на этом языке.", learn:"Я учу…", learnHint:"На этом языке ты пишешь в пропусках.",
    other:"Другой язык…", create:"Создать тетрадь", words:"слов", filled:"заполнено", topics:"тем", own:"своих слов", contents:"Содержание",
    review:"Повторить", back:"Назад", onlyBlanks:"Только пустые строки", ownWords:"Мои слова", addWord:"+ Добавить слово", notes:"Заметки и диалоги",
    promptPh:"слово", answerPh:"перевод", saved:"Сохранено", prev:"Назад", next:"Дальше", print:"Распечатать тему", printBlank:"Распечатать пустой лист",
    backup:"Скачать резервную копию", imp:"Восстановить копию", del:"Удалить тетрадь", confirmDel:"Удалить эту тетрадь и всё, что ты в ней написал?",
    tap:"Нажми, чтобы увидеть ответ", knew:"Знаю ✓", again:"Ещё раз ↺", finished:"Раунд окончен", restart:"Начать заново", noFilled:"Сначала заполни несколько пропусков, потом повторяй их здесь.",
    all:"Все темы", reverse:"Обратное направление", importOk:"Копия восстановлена.", importBad:"Этот файл не является резервной копией.", same:"Выбери язык, отличный от того, который знаешь.",
    langName:"Название языка", mastered:"выучено", leftPage:"Заполни пропуски", rightPage:"Свободная страница", cards:"карточек" },
};
const COVERS = ["#2f5d9e", "#b5443a", "#3d7a4f", "#c08a2d", "#6b4c8a", "#1f6f78", "#8a4b2f", "#334155"];

// ---------- Storage ----------
const KEY = "blank-notebook-v1";
const blankState = () => ({ notebooks: [], data: {}, uiLang: guessUi() });
function guessUi() { const l = (navigator.language || "en").slice(0, 2); return UI[l] ? l : "en"; }
let S;
try { S = JSON.parse(localStorage.getItem(KEY)) || blankState(); } catch { S = blankState(); }
S.notebooks ||= []; S.data ||= {}; S.uiLang ||= guessUi();
let saveTimer;
function save(flash, fromCloud) {
  if (!fromCloud) S.updated = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { console.warn(e); }
  if (!fromCloud && window.LN && LN.onSave) LN.onSave(S);
  if (flash) { const el = document.querySelector(".saved"); if (el) { el.classList.add("on"); clearTimeout(saveTimer); saveTimer = setTimeout(() => el.classList.remove("on"), 1200); } }
}
const D = id => (S.data[id] ||= { answers: {}, custom: {}, notes: {}, mastered: {} });
const nbById = id => S.notebooks.find(n => n.id === id);

// ---------- Helpers ----------
const $ = s => document.querySelector(s);
const app = $("#app");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
let L = UI[S.uiLang];
const setUi = code => { S.uiLang = UI[code] ? code : "en"; L = UI[S.uiLang]; document.documentElement.lang = S.uiLang; };
setUi(S.uiLang);
const topicName = (t, k) => t.name[COL[k]];
const word = (row, k) => row[COL[k]];

function topicStats(nb, t) {
  const d = D(nb.id), a = d.answers[t.id] || {};
  const filled = t.words.reduce((n, _, i) => n + (a[i] && a[i].trim() ? 1 : 0), 0);
  const own = (d.custom[t.id] || []).filter(c => c.p || c.a).length;
  return { filled, total: t.words.length, own };
}
function nbStats(nb) {
  let filled = 0, total = 0, own = 0;
  TOPICS.forEach(t => { const s = topicStats(nb, t); filled += s.filled; total += s.total; own += s.own; });
  const mastered = Object.keys(D(nb.id).mastered).length;
  return { filled, total, own, mastered };
}
const ring = (p, color) => {
  const r = 9, c = 2 * Math.PI * r;
  return `<svg class="ring" viewBox="0 0 22 22"><circle cx="11" cy="11" r="${r}" fill="none" stroke="var(--grid)" stroke-width="3"/>
  <circle cx="11" cy="11" r="${r}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-dasharray="${c * p} ${c}" transform="rotate(-90 11 11)"/></svg>`;
};

// ---------- Router ----------
function route() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  document.body.classList.remove("print-blank");
  const nb = parts[1] && nbById(parts[1]);
  if (nb) setUi(nb.known);
  if (parts[0] === "new") return viewSetup();
  if (parts[0] === "nb" && nb) {
    if (parts[2] === "t") return viewTopic(nb, parts[3]);
    if (parts[2] === "review") return viewReview(nb, parts[3]);
    return viewNotebook(nb);
  }
  return viewHome();
}
window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });

function setBar(html) { $("#barRight").innerHTML = html || ""; }

// ---------- Home ----------
function viewHome() {
  const uiPick = `<select class="field" id="uiPick" aria-label="Interface language">${KNOWN.map(k => `<option value="${k.code}" ${k.code === S.uiLang ? "selected" : ""}>${k.native}</option>`).join("")}</select>`;
  setBar(uiPick);
  $("#uiPick").onchange = e => { setUi(e.target.value); save(); viewHome(); };
  const covers = S.notebooks.map((nb, i) => {
    const s = nbStats(nb), p = s.total ? s.filled / s.total : 0;
    const known = KNOWN.find(k => k.code === nb.known);
    return `<a class="cover" href="#/nb/${nb.id}" style="background:${nb.color || COVERS[i % COVERS.length]}">
      <div class="lbl"><small>${esc(known.native)} → </small><strong dir="auto">${esc(nb.targetName)}</strong></div>
      <div class="meta">${s.filled} / ${s.total} ${UI[nb.known].words}${s.own ? ` · +${s.own}` : ""}<div class="mini-bar"><i style="width:${(p * 100).toFixed(1)}%"></i></div></div></a>`;
  }).join("");
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const tip = (installEvent || ios) ? `<div class="install-tip"><img src="icons/icon-192.png" alt=""><div style="flex:1;min-width:200px">${L.installTip}${!installEvent && ios ? `<br><b>${L.installIos}</b>` : ""}</div>
    ${installEvent ? `<button class="btn primary small" id="installBtn">⬇ ${L.install}</button>` : ""}</div>` : "";
  app.innerHTML = `
    <div class="hero"><div><h1>${L.my}</h1><p class="muted">${L.sub}</p></div></div>
    <div class="shelf">${covers}<a class="cover add" href="#/new"><div><span>+</span><div>${L.newNb}</div></div></a></div>${tip}`;
  const ib = $("#installBtn");
  if (ib) ib.onclick = async () => { installEvent.prompt(); await installEvent.userChoice; installEvent = null; viewHome(); };
}

// "Install app" button (Android/Chrome/Edge): the browser offers installation once the app qualifies.
let installEvent = null;
const onHome = () => !location.hash || location.hash === "#/" || location.hash === "#";
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installEvent = e; if (onHome()) viewHome(); });
window.addEventListener("appinstalled", () => { installEvent = null; if (onHome()) viewHome(); });

// ---------- Setup ----------
function viewSetup() {
  setBar(`<a class="btn ghost small" href="#/">← ${L.back}</a>`);
  let known = S.uiLang, target = null, custom = "";
  const draw = () => {
    const T = UI[known];
    app.innerHTML = `<div class="setup">
      <h1>${T.newNb}</h1>
      <div class="step"><h3><span class="num">1</span>${T.known}</h3><p class="muted">${T.knownHint}</p>
        <div class="choices">${KNOWN.map(k => `<button class="choice ${k.code === known ? "on" : ""}" data-k="${k.code}"><b>${k.native}</b><span>${k.name}</span></button>`).join("")}</div></div>
      <div class="step"><h3><span class="num">2</span>${T.learn}</h3><p class="muted">${T.learnHint}</p>
        <div class="choices">${TARGETS.map(([n, nat, code], i) => `<button class="choice ${target === i ? "on" : ""}" data-t="${i}" ${code === known ? "disabled" : ""}><b dir="auto">${esc(nat)}</b><span>${esc(n)}</span></button>`).join("")}
          <button class="choice ${target === "x" ? "on" : ""}" data-t="x"><b>${T.other}</b><span>Kumyk, Swahili, …</span></button></div>
        ${target === "x" ? `<input class="field" id="customLang" style="margin-top:12px" placeholder="${T.langName}" value="${esc(custom)}" dir="auto">` : ""}</div>
      <button class="btn primary" id="go" ${target === null ? "disabled" : ""}>${T.create} →</button></div>`;
    app.querySelectorAll("[data-k]").forEach(b => b.onclick = () => { known = b.dataset.k; if (typeof target === "number" && TARGETS[target][2] === known) target = null; draw(); });
    app.querySelectorAll("[data-t]").forEach(b => b.onclick = () => { target = b.dataset.t === "x" ? "x" : +b.dataset.t; draw(); if (target === "x") $("#customLang").focus(); });
    const ci = $("#customLang"); if (ci) ci.oninput = e => custom = e.target.value;
    $("#go").onclick = () => {
      const name = target === "x" ? custom.trim() : TARGETS[target][0];
      if (!name) return $("#customLang")?.focus();
      const nb = { id: Math.random().toString(36).slice(2, 9), known, targetName: name, color: COVERS[S.notebooks.length % COVERS.length], created: Date.now() };
      S.notebooks.push(nb); D(nb.id); setUi(known); save();
      location.hash = `#/nb/${nb.id}`;
    };
  };
  draw();
}

// ---------- Notebook overview ----------
function notebookMenu(nb) {
  return `<a class="btn small" href="#/nb/${nb.id}/review">🃏 ${L.review}</a>
  <div class="menu" id="menu"><button class="btn small ghost" id="menuBtn" aria-label="More">⋯</button>
    <div class="menu-list"><button data-act="backup">⬇ ${L.backup}</button><button data-act="import">⬆ ${L.imp}</button><div class="sep"></div><button data-act="delete" style="color:var(--red)">🗑 ${L.del}</button></div></div>`;
}
function wireMenu(nb) {
  const m = $("#menu"); if (!m) return;
  $("#menuBtn").onclick = e => { e.stopPropagation(); m.classList.toggle("open"); };
  document.addEventListener("click", () => m.classList.remove("open"), { once: true });
  m.querySelectorAll("[data-act]").forEach(b => b.onclick = () => {
    const act = b.dataset.act;
    if (act === "backup") downloadBackup();
    if (act === "import") $("#importFile").click();
    if (act === "delete" && confirm(L.confirmDel)) { S.notebooks = S.notebooks.filter(n => n.id !== nb.id); delete S.data[nb.id]; save(); location.hash = "#/"; }
  });
}
function viewNotebook(nb) {
  setBar(notebookMenu(nb)); wireMenu(nb);
  const s = nbStats(nb), p = s.total ? s.filled / s.total : 0;
  const known = KNOWN.find(k => k.code === nb.known);
  app.innerHTML = `
    <a class="btn ghost small" href="#/">← ${L.my}</a>
    <div class="nb-head" style="margin-top:14px"><div>
      <div class="muted" style="font-size:.85rem;letter-spacing:.06em;text-transform:uppercase">${esc(known.native)} → </div>
      <h1 dir="auto">${esc(nb.targetName)}</h1>
      <div class="progress"><i style="width:${(p * 100).toFixed(1)}%"></i></div>
      <div class="stats">
        <div class="stat"><b>${s.filled}</b><span>/ ${s.total} ${L.filled}</span></div>
        <div class="stat"><b>${s.own}</b><span>${L.own}</span></div>
        <div class="stat"><b>${s.mastered}</b><span>${L.mastered}</span></div>
        <div class="stat"><b>${TOPICS.length}</b><span>${L.topics}</span></div>
      </div></div></div>
    <h2>${L.contents}</h2>
    <div class="contents">${TOPICS.map((t, i) => {
      const ts = topicStats(nb, t), tp = ts.filled / ts.total;
      return `<a class="toc ${tp === 1 ? "done" : ""}" href="#/nb/${nb.id}/t/${t.id}">
        <span class="n">${i + 1}</span><span class="ic">${t.icon}</span><span class="t">${esc(topicName(t, nb.known))}</span>
        <span class="c">${ts.filled}/${ts.total}${ts.own ? ` +${ts.own}` : ""}</span>${ring(tp, tp === 1 ? "var(--green)" : "var(--blue)")}</a>`;
    }).join("")}</div>`;
}

// ---------- Topic (the two-page spread) ----------
function viewTopic(nb, tid) {
  const idx = TOPICS.findIndex(t => t.id === tid);
  if (idx < 0) return (location.hash = `#/nb/${nb.id}`);
  const t = TOPICS[idx], d = D(nb.id);
  const ans = (d.answers[t.id] ||= {});
  const own = (d.custom[t.id] ||= []);
  setBar(notebookMenu(nb)); wireMenu(nb);
  const prev = TOPICS[idx - 1], next = TOPICS[idx + 1];

  app.innerHTML = `
    <div class="topic-head">
      <a class="btn ghost small" href="#/nb/${nb.id}">← ${L.contents}</a>
      <div class="row">
        <span class="saved">✓ ${L.saved}</span>
        <label class="toggle"><input type="checkbox" id="onlyBlanks" ${S.onlyBlanks ? "checked" : ""}> ${L.onlyBlanks}</label>
        <a class="btn small" href="#/nb/${nb.id}/review/${t.id}">🃏 ${L.review}</a>
        <button class="btn small" id="printBtn">🖨 ${L.print}</button>
        <button class="btn small ghost" id="printBlankBtn" title="${L.printBlank}">▢</button>
      </div></div>
    <div class="spread ${S.onlyBlanks ? "hide-filled" : ""}" id="spread">
      <section class="page">
        <div class="page-title"><h2>${t.icon} ${idx + 1}. ${esc(topicName(t, nb.known))}</h2><small id="count"></small></div>
        <ul class="wl">${t.words.map((row, i) => {
          const v = ans[i] || "";
          const w = word(row, nb.known).replace(/\(([^)]+)\)/g, "<em>($1)</em>");
          return `<li class="w ${v.trim() ? "filled" : ""}" data-i="${i}"><div class="p">${w}</div>
            <input class="blank" dir="auto" data-i="${i}" value="${esc(v)}" autocomplete="off" spellcheck="false" aria-label="${esc(word(row, nb.known))}"></li>`;
        }).join("")}</ul>
      </section>
      <section class="page grid-page">
        <div class="page-title"><h2>${L.rightPage}</h2><small dir="auto">${esc(nb.targetName)}</small></div>
        <div class="section-lbl">${L.ownWords}</div>
        <div id="ownList"></div>
        <button class="btn small" id="addOwn" style="margin-top:6px">${L.addWord}</button>
        <div><div class="section-lbl">${L.notes}</div></div>
        <textarea class="notes" id="notes" dir="auto" spellcheck="false">${esc(d.notes[t.id] || "")}</textarea>
      </section>
    </div>
    <div class="pager">
      ${prev ? `<a class="btn" href="#/nb/${nb.id}/t/${prev.id}">← ${prev.icon} ${esc(topicName(prev, nb.known))}</a>` : "<span></span>"}
      ${next ? `<a class="btn" href="#/nb/${nb.id}/t/${next.id}">${next.icon} ${esc(topicName(next, nb.known))} →</a>` : "<span></span>"}
    </div>`;

  const count = () => { const s = topicStats(nb, t); $("#count").textContent = `${s.filled} / ${s.total}`; };
  count();

  // Blanks: save on typing, Enter jumps to the next empty blank.
  const inputs = [...app.querySelectorAll(".wl .blank")];
  inputs.forEach((inp, k) => {
    inp.addEventListener("input", () => {
      const i = inp.dataset.i;
      if (inp.value.trim()) ans[i] = inp.value; else delete ans[i];
      delete d.mastered[`${t.id}:${i}`];
      save(true); count();
    });
    inp.addEventListener("blur", () => inp.closest(".w").classList.toggle("filled", !!inp.value.trim()));
    inp.addEventListener("keydown", e => {
      if (e.key === "Enter" || (e.key === "ArrowDown")) { e.preventDefault(); const n = inputs.slice(k + 1).find(x => x.offsetParent); n ? n.focus() : inp.blur(); }
      if (e.key === "ArrowUp") { e.preventDefault(); const n = inputs.slice(0, k).reverse().find(x => x.offsetParent); n && n.focus(); }
    });
  });
  const firstEmpty = inputs.find(i => !i.value.trim());
  if (firstEmpty && matchMedia("(min-width: 821px)").matches) firstEmpty.focus({ preventScroll: true });

  $("#onlyBlanks").onchange = e => { S.onlyBlanks = e.target.checked; save(); $("#spread").classList.toggle("hide-filled", S.onlyBlanks); app.querySelectorAll(".wl .w").forEach(li => li.classList.toggle("filled", !!li.querySelector("input").value.trim())); };

  // Own words on the free page.
  const drawOwn = () => {
    $("#ownList").innerHTML = own.map((c, i) => `<div class="own" data-o="${i}">
      <input class="p-in" dir="auto" placeholder="${L.promptPh}" value="${esc(c.p)}" data-f="p">
      <input class="blank" dir="auto" placeholder="${L.answerPh}" value="${esc(c.a)}" data-f="a">
      <button class="x" title="✕">✕</button></div>`).join("");
    $("#ownList").querySelectorAll(".own").forEach(row => {
      const i = +row.dataset.o;
      row.querySelectorAll("input").forEach(inp => inp.oninput = () => { own[i][inp.dataset.f] = inp.value; save(true); });
      row.querySelector(".x").onclick = () => { own.splice(i, 1); save(true); drawOwn(); };
    });
  };
  drawOwn();
  $("#addOwn").onclick = () => { own.push({ p: "", a: "" }); save(); drawOwn(); $("#ownList .own:last-child input").focus(); };
  $("#notes").oninput = e => { d.notes[t.id] = e.target.value; save(true); };

  $("#printBtn").onclick = () => { document.body.classList.remove("print-blank"); window.print(); };
  $("#printBlankBtn").onclick = () => { document.body.classList.add("print-blank"); window.print(); setTimeout(() => document.body.classList.remove("print-blank"), 500); };
}

// ---------- Review (flashcards from YOUR answers) ----------
function viewReview(nb, tid) {
  setBar(`<a class="btn ghost small" href="#/nb/${nb.id}${tid ? `/t/${tid}` : ""}">← ${L.back}</a>`);
  const d = D(nb.id);
  const pool = () => {
    const cards = [];
    TOPICS.filter(t => !tid || t.id === tid).forEach(t => {
      const a = d.answers[t.id] || {};
      t.words.forEach((row, i) => { if (a[i] && a[i].trim()) cards.push({ key: `${t.id}:${i}`, q: word(row, nb.known), a: a[i], t }); });
      (d.custom[t.id] || []).forEach((c, i) => { if (c.p && c.a) cards.push({ key: `${t.id}:own${i}`, q: c.p, a: c.a, t }); });
    });
    // Unmastered cards first, shuffled.
    cards.sort(() => Math.random() - .5).sort((x, y) => (!!d.mastered[x.key]) - (!!d.mastered[y.key]));
    return cards;
  };
  let deck = pool(), pos = 0, shown = false, knew = 0;
  const reverse = () => !!S.reverse;
  const topicPick = `<select class="field" id="tp"><option value="">${L.all}</option>${TOPICS.map(t => `<option value="${t.id}" ${t.id === tid ? "selected" : ""}>${t.icon} ${esc(topicName(t, nb.known))}</option>`).join("")}</select>`;

  const draw = () => {
    const head = `<h1>🃏 ${L.review}</h1>
      <div class="row" style="justify-content:center;margin-top:8px">${topicPick}
      <label class="toggle"><input type="checkbox" id="rev" ${reverse() ? "checked" : ""}> ${L.reverse}</label></div>`;
    if (!deck.length) { app.innerHTML = `<div class="review">${head}<div class="empty" style="margin-top:20px">${L.noFilled}</div></div>`; return wire(); }
    if (pos >= deck.length) {
      app.innerHTML = `<div class="review">${head}<div class="flash" style="cursor:default"><div class="q">${L.finished}</div>
        <div class="hint">${knew} / ${deck.length} ✓</div></div><button class="btn primary" id="restart">${L.restart}</button></div>`;
      wire(); $("#restart").onclick = () => { deck = pool(); pos = 0; knew = 0; shown = false; draw(); };
      return;
    }
    const c = deck[pos];
    const front = reverse() ? `<div class="a" dir="auto">${esc(c.a)}</div>` : `<div class="q">${esc(c.q)}</div>`;
    const back = reverse() ? `<div class="q">${esc(c.q)}</div>` : `<div class="a" dir="auto">${esc(c.a)}</div>`;
    app.innerHTML = `<div class="review">${head}
      <div class="muted" style="margin-top:14px;font-size:.85rem">${pos + 1} / ${deck.length} ${L.cards}</div>
      <div class="flash" id="card"><div class="tp">${c.t.icon} ${esc(topicName(c.t, nb.known))}</div>${front}${shown ? back : `<div class="hint">${L.tap}</div>`}</div>
      <div class="row" ${shown ? "" : 'style="visibility:hidden"'}><button class="btn" id="again">${L.again}</button><button class="btn primary" id="knew">${L.knew}</button></div></div>`;
    wire();
    $("#card").onclick = () => { if (!shown) { shown = true; draw(); } };
    if (shown) {
      $("#knew").onclick = () => { d.mastered[c.key] = Date.now(); knew++; save(); pos++; shown = false; draw(); };
      $("#again").onclick = () => { delete d.mastered[c.key]; save(); deck.push(c); pos++; shown = false; draw(); };
    }
  };
  const wire = () => {
    $("#tp").onchange = e => { location.hash = `#/nb/${nb.id}/review${e.target.value ? "/" + e.target.value : ""}`; };
    $("#rev").onchange = e => { S.reverse = e.target.checked; save(); draw(); };
  };
  document.onkeydown = e => {
    if (!location.hash.includes("/review")) return (document.onkeydown = null);
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); $("#knew") && shown ? $("#knew").click() : $("#card")?.click(); }
    if (e.key === "ArrowLeft" && shown) $("#again")?.click();
    if (e.key === "ArrowRight" && shown) $("#knew")?.click();
  };
  draw();
}

// ---------- Backup ----------
function downloadBackup() {
  const blob = new Blob([JSON.stringify({ app: "blank-notebook", version: 1, saved: new Date().toISOString(), ...S }, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = `lingo-notebook-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
$("#importFile").onchange = async e => {
  const f = e.target.files[0]; if (!f) return;
  try {
    const j = JSON.parse(await f.text());
    if (!Array.isArray(j.notebooks) || typeof j.data !== "object") throw 0;
    // Merge: notebooks from the backup replace ones with the same id.
    j.notebooks.forEach(nb => { S.notebooks = S.notebooks.filter(n => n.id !== nb.id); S.notebooks.push(nb); S.data[nb.id] = j.data[nb.id] || {}; });
    save(); alert(L.importOk); location.hash = "#/"; route();
  } catch { alert(L.importBad); }
  e.target.value = "";
};

// ---------- Bridge for cloud sync (firebase-sync.js) ----------
window.LN = {
  onSave: null,
  get: () => S,
  lang: () => S.uiLang,
  // Merge a state from the cloud with this device. Notebooks that exist on only one side are kept;
  // for notebooks on both sides, the side that was changed more recently wins.
  merge(remote) {
    if (!remote || !Array.isArray(remote.notebooks)) return S;
    const newer = (remote.updated || 0) > (S.updated || 0) ? remote : S;
    const older = newer === remote ? S : remote;
    const out = { ...older, ...newer, notebooks: [...newer.notebooks], data: { ...newer.data } };
    older.notebooks.forEach(nb => { if (!out.notebooks.some(n => n.id === nb.id)) { out.notebooks.push(nb); out.data[nb.id] = older.data[nb.id] || {}; } });
    out.updated = Math.max(remote.updated || 0, S.updated || 0);
    S = out; S.data ||= {}; setUi(S.uiLang); save(false, true); route();
    return S;
  },
  clear() { S = blankState(); save(false, true); location.hash = "#/"; route(); },
};

route();
})();
