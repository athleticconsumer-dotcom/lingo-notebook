/* Arabic beginner course: one page per lesson (دَرْس) with words, grammar, dialogue, a Kitab page to copy, and games. */
window.Course = (() => {
"use strict";
let C;
const LS = () => window.COURSE || [], TY = () => window.COURSE_TYPES || {};
const st = () => { const s = (C.S().course ||= {}); s.done ||= {}; if (s.de === undefined) s.de = true; s.role ||= "both"; return s; };
const esc = s => C.esc(s);
const TABS = [["words", "📝 Wörter"], ["grammar", "📘 Grammatik"], ["dialog", "💬 Dialog"], ["kitab", "📖 Kitab-Seite"], ["play", "🎮 Üben"]];

// Read aloud with the phone's Arabic voice.
let voice = null;
const pick = () => { const v = speechSynthesis.getVoices(); voice = v.find(x => /^ar(-|_)SA/i.test(x.lang)) || v.find(x => /^ar/i.test(x.lang)) || null; };
if ("speechSynthesis" in window) { pick(); speechSynthesis.addEventListener?.("voiceschanged", pick); }
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text).replace(/[·…/]/g, " "));
  u.lang = voice ? voice.lang : "ar-SA"; if (voice) u.voice = voice; u.rate = 0.75;
  speechSynthesis.speak(u);
}

// Words for the games: "X / Y" pairs become two cards.
function gameEntries(les) {
  const out = [];
  les.words.forEach(([ar, de]) => {
    const a = ar.split(" / "), d = de.replace(/\s*\(.*?\)\s*/g, " ").trim().split(" / ");
    if (a.length > 1 && a.length === d.length) a.forEach((x, i) => out.push({ q: d[i].trim(), a: x.trim() }));
    else out.push({ q: de.replace(/\s*\(.*?\)\s*$/, "").trim(), a: ar });
  });
  return out;
}

// One word for the Kitab page: coloured parts, German below.
const wordBlock = w => `<span class="kb"><span class="kb-ar" dir="rtl">${w.s.map(([txt, ty]) => `<span style="color:${(TY()[ty] || {}).color || "inherit"}">${esc(txt)}</span>`).join("")}</span><span class="kb-de" dir="ltr">${esc(w.d)}</span></span>`;
const legend = () => `<div class="k-legend">${Object.values(TY()).map(x => `<span><i style="background:${x.color}"></i>${esc(x.name)} · ${x.pen}</span>`).join("")}</div>`;

function home() {
  C.setBar(`<a class="btn ghost small" href="#/">← Notizbücher</a>`);
  const s = st();
  C.app.innerHTML = `<div class="course-home">
    <div class="hero"><div><h1>📗 Arabisch-Anfängerkurs</h1><p class="muted">Fusha Schritt für Schritt, Lektion für Lektion nach der Tafel: Wörter, Grammatik, ein Dialog zum Nachsprechen, eine Kitab-Seite zum Abschreiben und Spiele zum Üben.</p></div></div>
    <div class="lvl-grid">${LS().map(l => `<a class="lvl ${s.done[l.n] ? "done" : ""}" href="#/course/${l.n}">
      <span class="lvl-n">${l.n}</span><span class="lvl-ic">${l.icon}</span><b class="ar-t" dir="rtl">${l.ar}</b><small>${esc(l.de)}</small>${s.done[l.n] ? `<span class="tick">✓</span>` : ""}</a>`).join("")}
      <div class="lvl soon"><span class="lvl-n">${LS().length + 1}</span><b>Nächste Lektion</b><small>kommt mit dem nächsten Dars dazu</small></div></div>
  </div>`;
}

function lesson(n, tab) {
  const les = LS().find(l => l.n === n); if (!les) return home();
  tab = TABS.some(x => x[0] === tab) ? tab : "words";
  if (tab === "play") {
    return Games.open({ title: les.de, icon: "📗", back: `#/course/${n}`, kn: "Deutsch", tg: "Arabisch", entries: () => gameEntries(les) });
  }
  C.setBar(`<a class="btn ghost small" href="#/course">← Kurs</a>`);
  const s = st();
  C.app.innerHTML = `<div class="lvl-page course">
    <div class="lvl-title"><span class="lvl-n big">${n}</span><div><h1 dir="rtl" class="ar-t">${les.ar}</h1><div class="muted">${les.icon} ${esc(les.de)}</div></div></div>
    <p class="muted" style="margin-top:-4px">${esc(les.intro || "")}</p>
    <div class="c-tabs">${TABS.map(([k, label]) => `<a class="${k === tab ? "on" : ""}" href="#/course/${n}/${k}">${label}</a>`).join("")}</div>
    <div id="cBody"></div>
    <div class="row" style="justify-content:center;margin-top:24px">
      <button class="btn ${s.done[n] ? "" : "primary"}" id="cDone">${s.done[n] ? "✓ Lektion geschafft (rückgängig)" : "✓ Lektion geschafft"}</button></div>
  </div>`;
  C.$("#cDone").onclick = () => { if (s.done[n]) delete s.done[n]; else s.done[n] = true; C.save(); lesson(n, tab); };
  ({ words: tWords, grammar: tGrammar, dialog: tDialog, kitab: tKitab })[tab](les);
}

function tWords(les) {
  C.$("#cBody").innerHTML = `<div class="vocab">${les.words.map(([ar, de, ty], i) => `<div class="voc c-voc" style="border-left:4px solid ${(TY()[ty] || {}).color || "var(--line)"}" data-i="${i}">
    <button class="say">🔊</button><span class="v-de">${esc(de)}</span><span class="v-ar" dir="rtl">${esc(ar)}</span></div>`).join("")}</div>${legend()}`;
  C.$("#cBody").querySelectorAll(".voc").forEach(r => r.querySelector(".say").onclick = () => speak(les.words[+r.dataset.i][0]));
}

function tGrammar(les) {
  C.$("#cBody").innerHTML = les.grammar.map(g => `<div class="step gram">
    <h3>${esc(g.title)}</h3><div class="gram-ar" dir="rtl">${esc(g.ar || "")}</div>
    ${g.text ? `<p>${esc(g.text)}</p>` : ""}
    ${g.rows ? `<div class="gram-rows">${g.rows.map(([a, d, ex]) => `<div class="gr"><b dir="rtl">${esc(a)}</b><span>${esc(d)}</span><span class="gr-ex" dir="rtl">${esc(ex)}</span></div>`).join("")}</div>` : ""}
  </div>`).join("");
}

function tDialog(les) {
  const s = st(), [pa, pb] = les.people;
  const isMine = sp => s.role === "both" ? sp === "A" : (s.role === sp);
  const draw = () => {
    C.$("#cBody").innerHTML = `<div class="dlg-tools">
        <span>Ich bin:</span><div class="seg" id="cRole">
          <button data-v="A" class="${s.role === "A" ? "on" : ""}">${esc(pa[1])}</button><button data-v="B" class="${s.role === "B" ? "on" : ""}">${esc(pb[1])}</button><button data-v="both" class="${s.role === "both" ? "on" : ""}">beide</button></div>
        <label class="toggle"><input type="checkbox" id="cDe" ${s.de ? "checked" : ""}> Deutsch</label>
        <label class="toggle"><input type="checkbox" id="cOther" ${s.hideOther ? "checked" : ""}> Partner verdecken</label>
        <label class="toggle"><input type="checkbox" id="cMine" ${s.hideMine ? "checked" : ""}> Meine Zeilen verdecken</label>
      </div>
      <div class="chat">${les.dialog.map(([sp, ar, de], i) => {
        const mine = isMine(sp), hidden = (mine && s.hideMine) || (!mine && s.hideOther);
        const who = sp === "A" ? pa : pb;
        return `<div class="bub ${mine ? "mine" : "other"} ${hidden ? "hid" : ""}" data-i="${i}">
          <div class="bub-who">${esc(who[1])} · <span dir="rtl">${esc(who[0])}</span></div>
          <div class="bub-ar" dir="rtl">${esc(ar)}</div>${s.de ? `<div class="bub-de">${esc(de)}</div>` : ""}
          <button class="say">🔊</button></div>`; }).join("")}</div>
      ${les.extra ? `<h3 style="margin-top:24px">Weitere Sätze von der Tafel</h3><div class="vocab">${les.extra.map(([ar, de], i) => `<div class="voc" data-x="${i}"><button class="say">🔊</button><span class="v-de">${esc(de)}</span><span class="v-ar" dir="rtl">${esc(ar)}</span></div>`).join("")}</div>` : ""}`;
    C.$("#cRole").querySelectorAll("button").forEach(b => b.onclick = () => { s.role = b.dataset.v; C.save(); draw(); });
    C.$("#cDe").onchange = e => { s.de = e.target.checked; C.save(); draw(); };
    C.$("#cOther").onchange = e => { s.hideOther = e.target.checked; C.save(); draw(); };
    C.$("#cMine").onchange = e => { s.hideMine = e.target.checked; C.save(); draw(); };
    C.$("#cBody").querySelectorAll(".bub").forEach(b => b.onclick = e => {
      if (e.target.closest(".say")) return speak(les.dialog[+b.dataset.i][1]);
      if (b.classList.contains("hid")) b.classList.replace("hid", "shown");
    });
    C.$("#cBody").querySelectorAll("[data-x]").forEach(r => r.querySelector(".say").onclick = () => speak(les.extra[+r.dataset.x][0]));
  };
  draw();
}

function tKitab(les) {
  const [pa, pb] = les.people;
  C.$("#cBody").innerHTML = `<div class="row" style="justify-content:flex-end;margin-bottom:8px"><button class="btn small" id="kPrint">🖨 Drucken</button></div>
    <div class="kitab-print">${legend()}
      <h2 class="ar-t" dir="rtl" style="text-align:center">${les.ar}</h2>
      ${les.dialog.map(([sp, , de, words]) => `<div class="k-line"><div class="k-who" dir="rtl">${esc((sp === "A" ? pa : pb)[0])}:</div>
        <div class="k-words" dir="rtl">${words.map(wordBlock).join("")}</div><div class="k-tr">${esc(de)}</div></div>`).join("")}
      ${les.extra ? `<h3 style="margin-top:22px">Weitere Sätze</h3>${les.extra.map(([, de, words]) => `<div class="k-line"><div class="k-words" dir="rtl">${words.map(wordBlock).join("")}</div><div class="k-tr">${esc(de)}</div></div>`).join("")}` : ""}
    </div>`;
  C.$("#kPrint").onclick = () => { document.body.classList.add("print-kitab"); window.print(); setTimeout(() => document.body.classList.remove("print-kitab"), 500); };
}

function route(parts) { // ["course", n?, tab?]
  if (!parts[1]) return home();
  return lesson(+parts[1], parts[2]);
}
return { init(ctx) { C = ctx; }, route };
})();
