/* Mini games for every topic of a notebook, built from the words you filled in yourself.
   Games: Memory, Quiz (4 answers), Writing. Modes: alone, two players on one phone (taking turns),
   online duel in a shared notebook (same cards for both, live scoreboard). */
window.Games = (() => {
"use strict";
let C; // helpers from app.js

const TX = {
  de: { games: "Spiele", memory: "Memory", memoryD: "Finde die Paare: Wort und Übersetzung.", quiz: "Quiz", quizD: "Wähle die richtige Übersetzung aus 4.",
    write: "Schreiben", writeD: "Schreib die Übersetzung selbst.", solo: "Allein", hot: "Zu zweit (ein Handy)", duel: "Online-Duell",
    duelD: "Gegen deinen Partner im geteilten Notizbuch, jeder auf seinem Handy.", duelNo: "Online-Duelle gibt es in geteilten Notizbüchern (👥 Freunde einladen).",
    needMore: "Fülle in diesem Thema mindestens 4 Lücken aus, dann kannst du spielen.", words: "Wörter zum Spielen", player2: "Name von Spieler 2",
    turn: "{n} ist dran", correct: "Richtig!", almost: "Fast richtig!", wrong: "Leider falsch.", solution: "Lösung", next: "Weiter", check: "Prüfen",
    typeHere: "Übersetzung eintippen …", moves: "Züge", time: "Zeit", again: "Nochmal", back: "Zurück", won: "{n} gewinnt! 🏆", draw: "Unentschieden!",
    waiting: "Warte auf {n} …", joinDuel: "{n} hat ein {g}-Duell gestartet.", joinBtn: "▶ Mitspielen", leaveQ: "Spiel abbrechen?", pairs: "Paare",
    you: "du", points: "Punkte", start: "Los geht's", lastDuel: "Letztes Duell", finished: "fertig", dir: "Richtung", signIn: "Melde dich zuerst mit Google an." },
  en: { games: "Games", memory: "Memory", memoryD: "Find the pairs: word and translation.", quiz: "Quiz", quizD: "Pick the right translation out of 4.",
    write: "Writing", writeD: "Type the translation yourself.", solo: "Alone", hot: "Two players (one phone)", duel: "Online duel",
    duelD: "Against your partner in the shared notebook, each on their own phone.", duelNo: "Online duels are available in shared notebooks (👥 Invite friends).",
    needMore: "Fill in at least 4 blanks in this topic to play.", words: "words to play with", player2: "Name of player 2",
    turn: "{n}'s turn", correct: "Correct!", almost: "Almost right!", wrong: "Not quite.", solution: "Answer", next: "Next", check: "Check",
    typeHere: "Type the translation …", moves: "Moves", time: "Time", again: "Play again", back: "Back", won: "{n} wins! 🏆", draw: "It's a draw!",
    waiting: "Waiting for {n} …", joinDuel: "{n} started a {g} duel.", joinBtn: "▶ Join", leaveQ: "Quit the game?", pairs: "pairs",
    you: "you", points: "points", start: "Start", lastDuel: "Last duel", finished: "finished", dir: "Direction", signIn: "Sign in with Google first." },
  fr: { games: "Jeux", memory: "Memory", memoryD: "Trouve les paires : mot et traduction.", quiz: "Quiz", quizD: "Choisis la bonne traduction parmi 4.",
    write: "Écrire", writeD: "Écris toi-même la traduction.", solo: "Seul", hot: "À deux (un téléphone)", duel: "Duel en ligne",
    duelD: "Contre ton partenaire dans le cahier partagé, chacun sur son téléphone.", duelNo: "Les duels en ligne existent dans les cahiers partagés (👥 Inviter des amis).",
    needMore: "Remplis au moins 4 blancs dans ce thème pour jouer.", words: "mots pour jouer", player2: "Nom du joueur 2",
    turn: "À {n} de jouer", correct: "Correct !", almost: "Presque !", wrong: "Raté.", solution: "Réponse", next: "Suivant", check: "Vérifier",
    typeHere: "Tape la traduction …", moves: "Coups", time: "Temps", again: "Rejouer", back: "Retour", won: "{n} gagne ! 🏆", draw: "Égalité !",
    waiting: "On attend {n} …", joinDuel: "{n} a lancé un duel {g}.", joinBtn: "▶ Jouer", leaveQ: "Quitter la partie ?", pairs: "paires",
    you: "toi", points: "points", start: "C’est parti", lastDuel: "Dernier duel", finished: "terminé", dir: "Sens", signIn: "Connecte-toi d’abord avec Google." },
  ru: { games: "Игры", memory: "Мемори", memoryD: "Найди пары: слово и перевод.", quiz: "Викторина", quizD: "Выбери правильный перевод из 4.",
    write: "Письмо", writeD: "Напиши перевод сам.", solo: "Один", hot: "Вдвоём (один телефон)", duel: "Онлайн-дуэль",
    duelD: "Против партнёра в общей тетради, каждый на своём телефоне.", duelNo: "Онлайн-дуэли есть в общих тетрадях (👥 Пригласить друзей).",
    needMore: "Заполни хотя бы 4 пропуска в этой теме, чтобы играть.", words: "слов для игры", player2: "Имя игрока 2",
    turn: "Ходит {n}", correct: "Верно!", almost: "Почти верно!", wrong: "Неверно.", solution: "Ответ", next: "Дальше", check: "Проверить",
    typeHere: "Напиши перевод …", moves: "Ходы", time: "Время", again: "Ещё раз", back: "Назад", won: "{n} побеждает! 🏆", draw: "Ничья!",
    waiting: "Ждём {n} …", joinDuel: "{n} начал(а) дуэль: {g}.", joinBtn: "▶ Играть", leaveQ: "Выйти из игры?", pairs: "пар",
    you: "ты", points: "очков", start: "Начать", lastDuel: "Последняя дуэль", finished: "готово", dir: "Направление", signIn: "Сначала войди через Google." }
};
const t = (k, vars) => { let s = (TX[C.lang()] || TX.en)[k] || TX.en[k] || k; Object.entries(vars || {}).forEach(([a, b]) => s = s.replace(`{${a}}`, b)); return s; };
const esc = s => C.esc(s);

// ---------- Helpers ----------
const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let x = Math.imul(seed ^ seed >>> 15, 1 | seed); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; };
const shuffle = (arr, r) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
// Compare answers loosely: no harakat, same alef forms, no punctuation, no capitals.
const norm = s => String(s || "").toLowerCase().normalize("NFC")
  .replace(/[ً-ٰٟـ]/g, "").replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/ё/g, "е")
  .replace(/\([^)]*\)/g, " ").replace(/[.,!?¿¡;:«»"'„“”\-–—…/]/g, " ").replace(/\s+/g, " ").trim();
const lev = (a, b) => { const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]); for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[m][n]; };
const fmtTime = ms => { const s = Math.round(ms / 1000); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
const GAME_ICON = { memory: "🧠", quiz: "❓", write: "✍️" };

// The words of one topic that have an answer.
function entries(nb, tid) {
  const d = C.D(nb.id), topic = C.topic(tid), out = [], seen = new Set();
  topic.words.forEach((row, i) => { const a = (d.answers[tid] || {})[i]; if (a && a.trim()) out.push({ q: C.word(row, nb.known), a: a.trim() }); });
  (d.custom[tid] || []).forEach(c => { if (c.p && c.p.trim() && c.a && c.a.trim()) out.push({ q: c.p.trim(), a: c.a.trim() }); });
  return out.filter(e => { const k = norm(e.a); if (seen.has(k)) return false; seen.add(k); return true; });
}
const settings = () => (C.S().gameView ||= { dir: 0, mode: "solo", p2: "" });
const myName = nb => { const m = (nb.memberInfo || {})[C.myUid()]; return (m && m.name && m.name.split(" ")[0]) || t("you"); };
const duelOf = (nb, tid) => (nb.games || {})[tid] || null;
const cloud = () => window.LN && LN.cloud;

let G = null;        // running game
let menuOpen = null; // { nb, tid } while the game menu is shown

// ---------- Menu ----------
function view(nb, tid) {
  G = null; menuOpen = { nb, tid };
  const topic = C.topic(tid); if (!topic) return (location.hash = `#/nb/${nb.id}`);
  const all = entries(nb, tid), st = settings();
  const canDuel = nb.shared && (nb.members || []).length > 1 && C.myUid();
  if (st.mode === "duel" && !canDuel) st.mode = "solo";
  const kn = C.knownName(nb), tg = nb.targetName;
  const duel = duelOf(nb, tid), uid = C.myUid();
  const freshDuel = duel && Date.now() - (duel.created || 0) < 6 * 3600e3;
  const banner = freshDuel && duel.by !== uid && !(duel.players || {})[uid]
    ? `<div class="g-banner">⚔️ ${esc(t("joinDuel", { n: duel.byName || "?", g: t(duel.kind) }))} <button class="btn primary small" id="gJoin">${t("joinBtn")}</button></div>` : "";
  const last = freshDuel && duel.players && Object.keys(duel.players).length ? `<div class="g-last"><b>${t("lastDuel")} · ${GAME_ICON[duel.kind]} ${t(duel.kind)}</b>${board(nb, duel)}</div>` : "";
  C.setBar(`<a class="btn ghost small" href="#/nb/${nb.id}/t/${tid}">← ${esc(C.topicName(topic, nb.known))}</a>`);
  C.app.innerHTML = `<div class="g-page">
    <h1>🎮 ${t("games")}</h1>
    <div class="muted">${topic.icon} ${esc(C.topicName(topic, nb.known))} · ${all.length} ${t("words")}</div>
    ${banner}${last}
    ${all.length < 4 ? `<div class="empty" style="margin-top:18px">${t("needMore")}</div>` : `
    <div class="step g-set">
      <div class="df"><label>${t("dir")}</label><div class="seg" id="gDir">
        <button data-v="0" class="${st.dir ? "" : "on"}">${esc(kn)} → ${esc(tg)}</button><button data-v="1" class="${st.dir ? "on" : ""}">${esc(tg)} → ${esc(kn)}</button></div></div>
      <div class="df"><div class="seg wrap" id="gMode">
        <button data-v="solo" class="${st.mode === "solo" ? "on" : ""}">👤 ${t("solo")}</button>
        <button data-v="hot" class="${st.mode === "hot" ? "on" : ""}">👥 ${t("hot")}</button>
        <button data-v="duel" class="${st.mode === "duel" ? "on" : ""}" ${canDuel ? "" : "disabled"}>⚔️ ${t("duel")}</button></div>
        <small class="muted">${st.mode === "duel" ? t("duelD") : !canDuel ? t("duelNo") : ""}</small></div>
      ${st.mode === "hot" ? `<div class="df"><label>${t("player2")}</label><input class="field" id="gP2" value="${esc(st.p2 || "")}" placeholder="z. B. Aisha" style="max-width:260px"></div>` : ""}
    </div>
    <div class="g-cards">
      ${["memory", "quiz", "write"].map(k => `<button class="g-card" data-g="${k}"><span class="g-ic">${GAME_ICON[k]}</span><b>${t(k)}</b><small>${t(k + "D")}</small></button>`).join("")}
    </div>`}
  </div>`;
  const bind = (sel, fn) => C.app.querySelectorAll(sel).forEach(fn);
  bind("#gDir button", b => b.onclick = () => { st.dir = +b.dataset.v; C.save(); view(nb, tid); });
  bind("#gMode button", b => b.onclick = () => { st.mode = b.dataset.v; C.save(); view(nb, tid); });
  const p2 = C.$("#gP2"); if (p2) p2.oninput = () => { st.p2 = p2.value; C.save(); };
  bind(".g-card", b => b.onclick = () => {
    if (st.mode === "duel") return startDuel(nb, tid, b.dataset.g);
    start(nb, tid, b.dataset.g, { mode: st.mode, dir: st.dir, seed: Math.floor(Math.random() * 1e9) });
  });
  const j = C.$("#gJoin"); if (j) j.onclick = () => start(nb, tid, duel.kind, { mode: "duel", dir: duel.dir, seed: duel.seed, duelId: duel.id });
}

// ---------- Duel (online) ----------
function startDuel(nb, tid, kind) {
  if (!C.myUid() || !cloud()) return alert(t("signIn"));
  const seed = Math.floor(Math.random() * 1e9), id = Math.random().toString(36).slice(2, 9), uid = C.myUid();
  const duel = { id, kind, dir: settings().dir, seed, by: uid, byName: myName(nb), created: Date.now(), players: {} };
  nb.games ||= {}; nb.games[tid] = duel;
  cloud().edit(nb.id, ["games", tid], duel);
  start(nb, tid, kind, { mode: "duel", dir: duel.dir, seed, duelId: id });
}
function pushDuel() {
  if (!G || G.mode !== "duel" || !cloud()) return;
  const uid = C.myUid(), me = { name: myName(G.nb), score: G.players[0].score, pos: G.pos(), total: G.total, done: !!G.done, moves: G.moves, ms: G.done ? G.ms : 0 };
  const d = duelOf(G.nb, G.tid); if (d && d.id === G.duelId) { d.players ||= {}; d.players[uid] = me; }
  cloud().edit(G.nb.id, ["games", G.tid, "players", uid], me);
}
// Scoreboard of a duel, best first.
function board(nb, duel) {
  const uid = C.myUid();
  const rows = Object.entries(duel.players || {}).map(([id, p]) => ({ id, ...p }));
  rows.sort((a, b) => duel.kind === "memory" ? (b.done - a.done) || (a.moves - b.moves) || (a.ms - b.ms) : (b.score - a.score) || (a.ms - b.ms));
  return `<ul class="g-board">${rows.map(p => `<li class="${p.id === uid ? "me" : ""}"><b>${esc(p.name || "?")}${p.id === uid ? ` (${t("you")})` : ""}</b>
    <span>${duel.kind === "memory" ? `${p.moves || 0} ${t("moves")}` : `${p.score || 0} / ${p.total || "?"}`}${p.done ? ` · ${fmtTime(p.ms || 0)} ✓` : ` · ${p.pos || 0}/${p.total || "?"}`}</span></li>`).join("")}</ul>`;
}

// ---------- Game engine ----------
function start(nb, tid, kind, { mode, dir, seed, duelId }) {
  menuOpen = null;
  const all = entries(nb, tid), r = rng(seed);
  const show = e => dir ? { q: e.a, a: e.q } : { q: e.q, a: e.a };
  const p1 = mode === "hot" ? (myName(nb) === t("you") ? "Spieler 1" : myName(nb)) : myName(nb);
  G = { nb, tid, kind, mode, dir, seed, duelId, players: mode === "hot" ? [{ name: p1, score: 0 }, { name: settings().p2 || "Spieler 2", score: 0 }] : [{ name: p1, score: 0 }],
    turn: 0, i: 0, moves: 0, t0: Date.now(), ms: 0, done: false, answered: false };
  if (kind === "memory") {
    const pairs = shuffle(all, r).slice(0, Math.min(8, all.length)).map(show);
    G.cards = shuffle(pairs.flatMap((e, k) => [{ k, side: 0, text: e.q }, { k, side: 1, text: e.a }]), r).map(c => ({ ...c, open: false, found: false }));
    G.total = pairs.length; G.found = 0; G.open = [];
    G.pos = () => G.found;
  } else {
    const Q = Math.min(10, all.length);
    let deck = shuffle(all, r).slice(0, Q);
    if (mode === "hot") deck = deck.concat(shuffle(all, r).slice(0, Q));
    G.deck = deck.map(e => {
      const s = show(e);
      if (kind !== "quiz") return s;
      const others = shuffle(all.filter(x => norm(x.a) !== norm(e.a) && norm(x.q) !== norm(e.q)), r).slice(0, 3).map(x => show(x).a);
      return { ...s, options: shuffle([s.a, ...others], r) };
    });
    G.total = mode === "hot" ? Q : G.deck.length;
    G.pos = () => G.i;
  }
  if (mode === "duel") pushDuel();
  render();
}
function finish() {
  G.done = true; G.ms = Date.now() - G.t0;
  if (G.mode === "duel") pushDuel();
  render();
}
function header() {
  const cur = G.players[G.turn];
  const prog = G.kind === "memory" ? `${G.found} / ${G.total} ${t("pairs")}` : `${Math.min(G.i + 1, G.deck.length)} / ${G.deck.length}`;
  const scores = G.mode === "duel" ? `<div id="gScore">${liveScore()}</div>`
    : `<div class="g-scores">${G.players.map((p, i) => `<span class="${G.mode === "hot" && i === G.turn ? "on" : ""}">${esc(p.name)}: <b>${p.score}</b></span>`).join("")}</div>`;
  return `<div class="g-head"><button class="btn ghost small" id="gQuit">✕</button><b>${GAME_ICON[G.kind]} ${t(G.kind)}</b><span class="muted">${prog}</span></div>
    ${scores}${G.mode === "hot" && !G.done ? `<div class="g-turn">${esc(t("turn", { n: cur.name }))}</div>` : ""}`;
}
function liveScore() {
  const d = duelOf(G.nb, G.tid);
  if (!d || d.id !== G.duelId) return "";
  return board(G.nb, d);
}
function render() {
  if (!G) return;
  C.setBar("");
  if (G.done) return renderEnd();
  C.app.innerHTML = `<div class="g-page play">${header()}<div id="gBody"></div></div>`;
  C.$("#gQuit").onclick = () => { if (confirm(t("leaveQ"))) { const nb = G.nb, tid = G.tid; G = null; view(nb, tid); } };
  ({ memory: renderMemory, quiz: renderQuiz, write: renderWrite })[G.kind]();
}
const nextTurn = () => { if (G.mode === "hot") G.turn = 1 - G.turn; };

function renderQuiz() {
  const q = G.deck[G.i];
  C.$("#gBody").innerHTML = `<div class="g-q" dir="auto">${esc(q.q)}</div>
    <div class="g-opts">${q.options.map((o, k) => `<button class="g-opt" data-k="${k}" dir="auto">${esc(o)}</button>`).join("")}</div>`;
  C.$("#gBody").querySelectorAll(".g-opt").forEach(b => b.onclick = () => {
    if (G.answered) return; G.answered = true;
    const ok = q.options[+b.dataset.k] === q.a;
    if (ok) G.players[G.turn].score++;
    C.$("#gBody").querySelectorAll(".g-opt").forEach(x => { if (q.options[+x.dataset.k] === q.a) x.classList.add("ok"); else if (x === b) x.classList.add("bad"); });
    if (G.mode === "duel") pushDuel();
    setTimeout(() => { G.answered = false; G.i++; nextTurn(); G.i >= G.deck.length ? finish() : render(); }, ok ? 700 : 1500);
  });
}

function renderWrite() {
  const q = G.deck[G.i];
  C.$("#gBody").innerHTML = `<div class="g-q" dir="auto">${esc(q.q)}</div>
    <textarea class="field g-in" id="gAns" rows="2" dir="auto" placeholder="${t("typeHere")}" spellcheck="false" autocomplete="off"></textarea>
    <div id="gFb"></div><button class="btn primary" id="gGo">${t("check")}</button>`;
  const inp = C.$("#gAns"); inp.focus();
  const go = () => {
    if (G.answered) { G.answered = false; G.i++; nextTurn(); return G.i >= G.deck.length ? finish() : render(); }
    const a = norm(inp.value), b = norm(q.a);
    if (!a) return;
    const res = a === b ? "ok" : (b.length > 4 && lev(a, b) <= 1) ? "almost" : "bad";
    if (res !== "bad") G.players[G.turn].score++;
    G.answered = true; inp.readOnly = true;
    C.$("#gFb").innerHTML = `<div class="g-fb ${res}">${res === "ok" ? t("correct") : res === "almost" ? t("almost") : t("wrong")}
      ${res !== "ok" ? `<div>${t("solution")}: <b dir="auto">${esc(q.a)}</b></div>` : ""}</div>`;
    C.$("#gGo").textContent = t("next") + " →";
    if (G.mode === "duel") pushDuel();
  };
  C.$("#gGo").onclick = go;
  inp.onkeydown = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); go(); } };
}

function renderMemory() {
  C.$("#gBody").innerHTML = `<div class="mem-grid">${G.cards.map((c, i) => `<button class="mem ${c.open || c.found ? "open" : ""} ${c.found ? "found" : ""} ${c.side ? "a" : "q"}" data-i="${i}">
    <span dir="auto">${c.open || c.found ? esc(c.text) : ""}</span></button>`).join("")}</div>
    <div class="muted" style="text-align:center;margin-top:10px">${t("moves")}: ${G.moves}</div>`;
  C.$("#gBody").querySelectorAll(".mem").forEach(b => b.onclick = () => {
    const c = G.cards[+b.dataset.i];
    if (c.open || c.found || G.open.length >= 2) return;
    c.open = true; G.open.push(c);
    if (G.open.length === 2) {
      G.moves++;
      const [x, y] = G.open;
      if (x.k === y.k) {
        x.found = y.found = true; x.open = y.open = false; G.open = []; G.found++; G.players[G.turn].score++;
        if (G.mode === "duel") pushDuel();
        renderMemory();
        if (G.found === G.total) setTimeout(finish, 600);
        return;
      }
      renderMemory();
      setTimeout(() => { x.open = y.open = false; G.open = []; nextTurn(); if (G.mode === "duel") pushDuel(); render(); }, 1100);
      return;
    }
    renderMemory();
  });
}

function renderEnd() {
  const nb = G.nb, tid = G.tid;
  let result;
  if (G.mode === "hot") {
    const [a, b] = G.players;
    result = `<h2>${a.score === b.score ? t("draw") : esc(t("won", { n: (a.score > b.score ? a : b).name }))}</h2>
      <div class="g-scores big">${G.players.map(p => `<span>${esc(p.name)}: <b>${p.score}</b></span>`).join("")}</div>`;
  } else if (G.mode === "duel") {
    const d = duelOf(nb, tid), others = Object.entries((d && d.players) || {}).filter(([id]) => id !== C.myUid());
    const open = others.filter(([, p]) => !p.done);
    result = `<div id="gScore">${liveScore()}</div>${open.length ? `<p class="muted">${esc(t("waiting", { n: open.map(([, p]) => p.name).join(", ") }))}</p>` : ""}`;
  } else {
    result = G.kind === "memory" ? `<h2>🎉 ${G.total} ${t("pairs")}</h2><div class="g-scores big"><span>${t("moves")}: <b>${G.moves}</b></span><span>${t("time")}: <b>${fmtTime(G.ms)}</b></span></div>`
      : `<h2>🎉 ${G.players[0].score} / ${G.deck.length}</h2><div class="g-scores big"><span>${t("time")}: <b>${fmtTime(G.ms)}</b></span></div>`;
  }
  C.app.innerHTML = `<div class="g-page end"><div class="g-trophy">${GAME_ICON[G.kind]}</div>${result}
    <div class="row" style="justify-content:center;margin-top:20px">
      <button class="btn" id="gBack">← ${t("back")}</button>
      ${G.mode !== "duel" ? `<button class="btn primary" id="gAgain">↻ ${t("again")}</button>` : ""}</div></div>`;
  C.$("#gBack").onclick = () => { G = null; view(nb, tid); };
  const ag = C.$("#gAgain"); if (ag) ag.onclick = () => start(nb, tid, G.kind, { mode: G.mode, dir: G.dir, seed: Math.floor(Math.random() * 1e9) });
}

// A friend's change arrived (shared notebook): update the scoreboard or the menu.
function onShared(id) {
  if (G && G.nb.id === id) { if (G.mode === "duel") { const el = C.$("#gScore"); if (el) el.innerHTML = liveScore(); if (G.done) renderEnd(); } return; }
  if (menuOpen && menuOpen.nb.id === id && location.hash.includes("/play/")) view(menuOpen.nb, menuOpen.tid);
}

return { init(ctx) { C = ctx; }, view, onShared, isPlaying: () => !!G, entries, norm };
})();
