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

function freemode() {
  st().activeJ = null; C.save();
  C.setBar(`<a class="btn ghost small" href="#/course">← Kurs</a>`);
  const s = st();
  C.app.innerHTML = `<div class="course-home">
    <div class="hero"><div><h1>🔓 Freemode</h1><p class="muted">Alle Lektionen sind offen. Lerne in deinem Tempo, ohne Karte und ohne Prüfung.</p></div></div>
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
  const s = st();
  const backTo = s.activeJ && s.activeJ.n === n && jById(s.activeJ.id) ? `#/course/j/${s.activeJ.id}/${n}` : "#/course/free";
  C.setBar(`<a class="btn ghost small" href="${backTo}">← ${backTo.includes("/j/") ? "Mission" : "Lektionen"}</a>`);
  C.app.innerHTML = `<div class="lvl-page course">
    <div class="lvl-title"><span class="lvl-n big">${n}</span><div><h1 dir="rtl" class="ar-t">${les.ar}</h1><div class="muted">${les.icon} ${esc(les.de)}</div></div></div>
    ${s.activeJ && s.activeJ.n === n && jById(s.activeJ.id) ? `<a class="mission-back" href="#/course/j/${s.activeJ.id}/${n}">🗺️ Zurück zur Mission von Level ${n}</a>` : ""}
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


// ================= Journey: a map where lessons unlock one after another =================
const s0 = () => st();
const J = () => (C.S().journeys ||= []);
const jById = id => J().find(j => j.id === id);
const cloud = () => window.LN && LN.cloud;
const AV = ["🧔", "🧕", "👳", "🧑"];

// Players of a journey: solo, two on one phone, or two online.
function players(j) {
  if (j.mode === "solo") return [{ key: "me", name: "Du", av: AV[0] }];
  if (j.mode === "local2") return [{ key: "p1", name: j.names[0] || "Spieler 1", av: AV[0] }, { key: "p2", name: j.names[1] || "Spieler 2", av: AV[1] }];
  const info = j.memberInfo || {};
  return (j.members || []).map((uid, i) => ({ key: uid, name: ((info[uid] || {}).name || "?").split(" ")[0], photo: (info[uid] || {}).photo, av: AV[i % AV.length], me: uid === C.myUid() }));
}
const starsOf = (j, n, key) => ((j.progress || {})[n] || {})[key] || 0;
const passed = (j, n) => { const ps = players(j); return ps.length > 0 && ps.every(p => starsOf(j, n, p.key) >= 1); };
const unlocked = (j, n) => n === 1 || passed(j, n - 1);
const currentLevel = j => { const L = LS(); for (const l of L) if (!passed(j, l.n)) return l.n; return L.length + 1; };
const totalStars = j => players(j).reduce((a, p) => a + LS().reduce((b, l) => b + starsOf(j, l.n, p.key), 0), 0);
function setStars(j, n, key, stars) {
  j.progress ||= {}; j.progress[n] ||= {};
  if (stars <= (j.progress[n][key] || 0)) return;
  j.progress[n][key] = stars; C.save();
  if (j.mode === "online" && cloud()) cloud().edit(j.id, ["progress", String(n), key], stars);
}
const avatar = p => p.photo ? `<img class="jav" src="${esc(p.photo)}" alt="" title="${esc(p.name)}" referrerpolicy="no-referrer">` : `<span class="jav" title="${esc(p.name)}">${p.av}</span>`;
const starRow = k => `<span class="stars">${[1, 2, 3].map(i => `<i class="${i <= k ? "on" : ""}">★</i>`).join("")}</span>`;

function home() {
  st().activeJ = null; C.save();
  C.setBar(`<a class="btn ghost small" href="#/">← Notizbücher</a>`);
  const js = J();
  C.app.innerHTML = `<div class="course-home">
    <div class="j-hero"><div class="j-title">📗 Arabisch-Anfängerkurs</div><p>Fusha nach der Tafel, Dars für Dars. Starte eine Reise und schalte Level für Level frei, allein oder zu zweit.</p>
      <div class="j-actions"><a class="btn j-big" href="#/course/new">🗺️ Neue Reise starten</a><a class="btn j-big ghosty" href="#/course/free">🔓 Freemode</a></div></div>
    ${js.length ? `<h2>Deine Reisen</h2><div class="pair-grid">${js.map(j => { const ps = players(j), cur = currentLevel(j); return `<a class="pair-card j-card" href="#/course/map/${j.id}">
      <div class="pc-top"><span class="pc-ic">${j.mode === "solo" ? "👤" : j.mode === "local2" ? "📱" : "🌐"}</span><div><b>${esc(ps.map(p => p.name).join(" & ") || "Reise")}</b>
      <small class="muted">${j.mode === "solo" ? "1 Spieler" : j.mode === "local2" ? "2 Spieler · ein Handy" : (j.members || []).length < 2 ? "2 Spieler online · wartet auf Mitspieler" : "2 Spieler online"}</small></div></div>
      <div class="progress"><i style="width:${Math.min(cur - 1, LS().length) / LS().length * 100}%"></i></div>
      <small class="muted">${cur > LS().length ? "Alle Level geschafft 🏆" : `Level ${cur} von ${LS().length}`} · ⭐ ${totalStars(j)}</small></a>`; }).join("")}</div>` : ""}
  </div>`;
}

function newJourney() {
  C.setBar(`<a class="btn ghost small" href="#/course">← Kurs</a>`);
  C.app.innerHTML = `<div class="setup"><h1>🗺️ Neue Reise</h1><p class="muted">Wie wollt ihr spielen?</p>
    <div class="j-modes">
      <button class="j-mode" data-m="solo"><span>👤</span><b>1 Spieler</b><small>Du allein, Level für Level.</small></button>
      <button class="j-mode" data-m="local2"><span>📱</span><b>2 Spieler auf einem Handy</b><small>Ihr sitzt zusammen. Bei der Prüfung seid ihr abwechselnd dran, beide müssen bestehen.</small></button>
      <button class="j-mode" data-m="online"><span>🌐</span><b>2 Spieler online</b><small>Lade jemanden per Link ein. Jeder spielt auf seinem Handy, das nächste Level öffnet sich, wenn ihr beide bestanden habt.</small></button>
    </div><div id="jExtra"></div></div>`;
  C.app.querySelectorAll(".j-mode").forEach(b => b.onclick = async () => {
    const m = b.dataset.m, id = "j" + Math.random().toString(36).slice(2, 9);
    if (m === "solo") { J().push({ id, mode: "solo", progress: {}, created: Date.now() }); C.save(); return (location.hash = `#/course/map/${id}`); }
    if (m === "local2") {
      C.$("#jExtra").innerHTML = `<div class="step"><h3>Wie heißt ihr?</h3><div class="row"><input class="field" id="n1" placeholder="Spieler 1" style="max-width:200px"><input class="field" id="n2" placeholder="Spieler 2" style="max-width:200px"></div>
        <button class="btn primary" id="go2" style="margin-top:12px">Reise starten →</button></div>`;
      C.$("#go2").onclick = () => { J().push({ id, mode: "local2", names: [C.$("#n1").value.trim() || "Spieler 1", C.$("#n2").value.trim() || "Spieler 2"], progress: {}, created: Date.now() }); C.save(); location.hash = `#/course/map/${id}`; };
      return C.$("#n1").focus();
    }
    if (!C.myUid() || !cloud()) { alert("Melde dich zuerst oben rechts mit Google an, dann kannst du jemanden einladen."); cloud() && cloud().signIn(); return; }
    try { await cloud().createJourney(id); } catch (e) { console.warn(e); return alert("Das hat nicht geklappt: " + (e.code || e.message)); }
    location.hash = `#/course/map/${id}`; setTimeout(() => invite(jById(id)), 300);
  });
}

function invite(j) {
  if (!j || !j.inviteCode) return;
  const link = `${location.origin}${location.pathname}#/join/${j.id}/${j.inviteCode}`, msg = "Lass uns zusammen die Arabisch-Reise spielen:";
  const m = C.modal(`<h2>🌐 Mitspieler einladen</h2><p class="muted">Schick diesen Link. Nach der Anmeldung mit Google seid ihr zusammen auf der Karte. Ein Level öffnet sich, wenn ihr beide das Level davor bestanden habt.</p>
    <div class="row" style="flex-wrap:nowrap"><input class="field" id="invLink" readonly value="${esc(link)}"><button class="btn primary" id="copyLink">Kopieren</button></div>
    <div class="row" style="margin-top:10px"><button class="btn" id="shareLink">📤 Teilen</button><a class="btn" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(msg + " " + link)}">💬 WhatsApp</a>
    <button class="btn ghost" id="closeM" style="margin-left:auto">Schließen</button></div>`);
  m.querySelector("#closeM").onclick = C.closeModal;
  m.querySelector("#copyLink").onclick = async e => { try { await navigator.clipboard.writeText(link); } catch { m.querySelector("#invLink").select(); document.execCommand("copy"); } e.target.textContent = "Kopiert!"; };
  m.querySelector("#shareLink").onclick = () => navigator.share ? navigator.share({ title: "Lingo Notebook", text: msg, url: link }).catch(() => {}) : m.querySelector("#copyLink").click();
}

// The world map: a winding path through the desert, one stop per lesson.
const DECO = ["🌴", "🐪", "🕌", "⛰️", "🌵", "🏜️", "⛺", "🌙", "🐫", "🌴"];
function viewMap(id) {
  const j = jById(id); if (!j) return home();
  st().activeJ = null; C.save();
  const L = LS(), ps = players(j), cur = currentLevel(j);
  C.setBar(`<a class="btn ghost small" href="#/course">← Kurs</a>${j.mode === "online" && j.owner === C.myUid() ? `<button class="btn small" id="jInv">🌐 Einladen</button>` : ""}
    <div class="menu" id="jmenu"><button class="btn small ghost" id="jmenuBtn">⋯</button><div class="menu-list"><button data-a="del" style="color:var(--red)">🗑 Reise ${j.mode === "online" && j.owner !== C.myUid() ? "verlassen" : "löschen"}</button></div></div>`);
  const STEP = 150, TOP = 160, H = TOP + (L.length + 1) * STEP + 60;
  const xs = [50, 76, 50, 24];
  const pts = [...L.map((l, i) => [xs[i % 4], TOP + i * STEP]), [xs[L.length % 4], TOP + L.length * STEP]];
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], my = (y0 + y1) / 2; d += ` C ${x0} ${my}, ${x1} ${my}, ${x1} ${y1}`; }
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const deco = Array.from({ length: Math.round(H / 90) }, (_, i) => { const left = rnd() < .5; return `<span class="deco" style="top:${60 + i * 90 + rnd() * 40}px;${left ? "left" : "right"}:${2 + rnd() * 8}%">${DECO[i % DECO.length]}</span>`; }).join("");
  const waiting = j.mode === "online" && (j.members || []).length < 2;
  C.app.innerHTML = `<div class="j-map-wrap">
    <div class="j-map-head"><div class="j-players">${ps.map(p => `<span class="jp">${avatar(p)}<b>${esc(p.name)}</b></span>`).join('<span class="amp">&amp;</span>')}</div>
      <div class="muted">⭐ ${totalStars(j)} · ${cur > L.length ? "Alle Level geschafft 🏆" : `Level ${cur}`}</div>
      ${waiting ? `<div class="wait-box" style="margin-top:10px">⏳ Dein Mitspieler ist noch nicht dabei. <button class="btn small primary" id="jInv2">🌐 Link senden</button></div>` : ""}</div>
    <div class="j-map" style="height:${H}px">
      <svg class="j-path" viewBox="0 0 100 ${H}" preserveAspectRatio="none"><path d="${d}" /></svg>
      ${deco}
      <div class="j-start" style="top:${TOP - 135}px">🏁 Start</div>
      ${L.map((l, i) => {
        const [x, y] = pts[i], open = unlocked(j, l.n), done = passed(j, l.n), here = l.n === cur;
        return `<button class="j-node ${done ? "done" : open ? "open" : "locked"} ${here ? "here" : ""}" style="left:${x}%;top:${y}px" data-n="${l.n}">
          <span class="jn-num">${open ? l.n : "🔒"}</span>
          <span class="jn-label"><b>${esc(l.de.replace(/^Dars \d+:\s*/, ""))}</b>${ps.map(p => `<span class="jn-st">${ps.length > 1 ? `${p.av}` : ""}${starRow(starsOf(j, l.n, p.key))}</span>`).join("")}</span>
          ${here ? `<span class="jn-av">${ps.map(avatar).join("")}</span>` : ""}
        </button>`; }).join("")}
      <div class="j-node soon" style="left:${pts[L.length][0]}%;top:${pts[L.length][1]}px"><span class="jn-num">🏆</span><span class="jn-label"><b>Nächster Dars</b><small>kommt bald</small></span></div>
    </div></div>`;
  C.app.querySelectorAll(".j-node[data-n]").forEach(b => b.onclick = () => {
    const n = +b.dataset.n;
    if (!unlocked(j, n)) { b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); return toast(`🔒 Schafft zuerst Level ${n - 1}${ps.length > 1 ? " (beide)" : ""}.`); }
    location.hash = `#/course/j/${j.id}/${n}`;
  });
  const inv = () => invite(j); [C.$("#jInv"), C.$("#jInv2")].forEach(b => b && (b.onclick = inv));
  const jm = C.$("#jmenu"); C.$("#jmenuBtn").onclick = e => { e.stopPropagation(); jm.classList.toggle("open"); };
  document.addEventListener("click", () => jm.classList.remove("open"), { once: true });
  jm.querySelector("[data-a=del]").onclick = () => {
    if (!confirm("Diese Reise wirklich entfernen?")) return;
    if (j.mode === "online" && cloud()) cloud().deleteShared(j).catch(e => console.warn(e));
    C.S().journeys = J().filter(x => x !== j); C.save(); location.hash = "#/course";
  };
  const here = C.app.querySelector(".j-node.here"); if (here) setTimeout(() => here.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
}
function toast(msg) { const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2200); }

// Mission page of one level: learn, then pass the exam.
function mission(id, n) {
  const j = jById(id), les = LS().find(l => l.n === n);
  if (!j || !les) return home();
  if (!unlocked(j, n)) return (location.hash = `#/course/map/${id}`);
  const s = st(); s.activeJ = { id, n }; C.save();
  const ps = players(j), seen = ((j.seen ||= {})[n] ||= {});
  C.setBar(`<a class="btn ghost small" href="#/course/map/${id}">← Karte</a>`);
  const steps = [["words", "📝", "Wörter lernen", `${les.words.length} Wörter mit 🔊 anhören`], ["grammar", "📘", "Grammatik lesen", `${les.grammar.length} kurze Erklärungen`],
    ["dialog", "💬", "Dialog sprechen", ps.length > 1 ? `${ps[0].name} spricht ${les.people[0][1]}, ${ps[1].name} spricht ${les.people[1][1]}. Danach Rollen tauschen.` : "Laut nachsprechen, dann deine Zeilen verdecken"],
    ["kitab", "📖", "Ins Kitab schreiben", "Die Sätze Wort für Wort abschreiben (freiwillig)"]];
  C.app.innerHTML = `<div class="lvl-page">
    <div class="lvl-title"><span class="lvl-n big">${n}</span><div><h1 dir="rtl" class="ar-t">${les.ar}</h1><div class="muted">${les.icon} ${esc(les.de)}</div></div></div>
    <div class="j-scores">${ps.map(p => `<span>${avatar(p)} ${esc(p.name)} ${starRow(starsOf(j, n, p.key))}</span>`).join("")}</div>
    <h2>🎯 Mission</h2>
    <div class="m-steps">${steps.map(([k, ic, t, d], i) => `<a class="m-step ${seen[k] ? "done" : ""}" href="#/course/${n}/${k}" data-k="${k}"><span class="m-n">${seen[k] ? "✓" : i + 1}</span><span class="m-ic">${ic}</span><div><b>${t}</b><small>${esc(d)}</small></div><span>›</span></a>`).join("")}</div>
    <button class="btn primary j-exam" id="exam">🏆 Prüfung starten</button>
    <p class="muted" style="text-align:center;font-size:.85rem">10 Fragen zu den Wörtern. Ab 7 richtigen ist das Level geschafft: ⭐ 7–8 · ⭐⭐ 9 · ⭐⭐⭐ alle 10${ps.length > 1 ? (j.mode === "local2" ? ". Ihr seid abwechselnd dran, beide müssen bestehen." : ". Jeder macht die Prüfung auf seinem Handy.") : ""}.</p>
  </div>`;
  C.app.querySelectorAll(".m-step").forEach(a => a.addEventListener("click", () => { seen[a.dataset.k] = true; C.save(); }));
  C.$("#exam").onclick = () => exam(j, les);
}
const starsFor = (score, total) => { const p = score / total; return p >= 1 ? 3 : p >= .9 ? 2 : p >= .7 ? 1 : 0; };
function exam(j, les) {
  const ps = players(j), n = les.n;
  const myKey = j.mode === "online" ? C.myUid() : null;
  const src = { title: `Prüfung · Level ${n}`, icon: "🏆", back: `#/course/j/${j.id}/${n}`, kn: "Deutsch", tg: "Arabisch", entries: () => gameEntries(les),
    onQuit: () => mission(j.id, n),
    onFinish: res => {
      const results = j.mode === "local2" ? ps.map((p, i) => ({ p, score: res.players[i].score })) : [{ p: ps.find(p => p.key === (myKey || "me")) || ps[0], score: res.players[0].score }];
      results.forEach(r => { r.stars = starsFor(r.score, res.total); if (r.stars) setStars(j, n, r.p.key, r.stars); });
      const allPassed = passed(j, n), next = LS().find(l => l.n === n + 1);
      C.app.innerHTML = `<div class="g-page end"><div class="g-trophy">${results.every(r => r.stars) ? "🏆" : "💪"}</div>
        ${results.map(r => `<div class="ex-res"><b>${avatar(r.p)} ${esc(r.p.name)}</b><span>${r.score} / ${res.total}</span>${starRow(r.stars)}<small>${r.stars ? "Bestanden!" : "Noch nicht bestanden, ab 7 richtigen."}</small></div>`).join("")}
        ${allPassed ? `<h2>${next ? `🔓 Level ${n + 1} ist frei!` : "🎉 Alle Level geschafft!"}</h2>` : j.mode === "online" && results[0].stars ? `<p class="muted">Sobald dein Mitspieler auch bestanden hat, öffnet sich Level ${n + 1}.</p>` : ""}
        <div class="row" style="justify-content:center;margin-top:18px"><button class="btn" id="again">↻ Nochmal</button><a class="btn primary" href="#/course/map/${j.id}">🗺️ Zur Karte</a></div></div>`;
      C.$("#again").onclick = () => exam(j, les);
    } };
  const names = j.mode === "local2" ? ps.map(p => p.name) : [ps.find(p => p.key === (myKey || "me"))?.name || "Du"];
  Games.play(src, "quiz", { mode: j.mode === "local2" ? "hot" : "solo", dir: Math.random() < .5 ? 0 : 1, seed: Math.floor(Math.random() * 1e9), names });
}

// Live update from the online partner
function refresh(id) {
  const h = location.hash;
  if (h === `#/course/map/${id}`) viewMap(id);
  else if (h.startsWith(`#/course/j/${id}/`) && !Games.isPlaying() && C.app.querySelector(".m-steps")) mission(id, +h.split("/").pop());
}

function route(parts) { // ["course", …]
  if (!parts[1]) return home();
  if (parts[1] === "free") return freemode();
  if (parts[1] === "new") return newJourney();
  if (parts[1] === "map") return viewMap(parts[2]);
  if (parts[1] === "j") return mission(parts[2], +parts[3]);
  return lesson(+parts[1], parts[2]);
}
return { init(ctx) { C = ctx; }, route, refresh, journeys: () => J(), jById,
  addJourney(j) { if (!jById(j.id)) J().push(j); }, removeJourney(id) { C.S().journeys = J().filter(j => j.id !== id); } };
})();
