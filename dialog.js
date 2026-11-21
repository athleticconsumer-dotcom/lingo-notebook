/* Dialogue practice: Arabic A0–A1 conversations for two people, personalised with each person's profile.
   Pairs are either "on one phone" (local) or two people on their own phones (shared through Firebase). */
window.DialogUI = (() => {
"use strict";
let C; // helpers from app.js: S(), save, setBar, esc, $, app, myUid, modal, closeModal, colorFor
const O = window.DIALOG_OPTIONS, LV = window.DIALOG_LEVELS, F = window.DIALOG_FIELDS;
const find = (list, id) => (O[list] || []).find(o => o[0] === id);
const AR_DIGITS = n => String(n).replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]);
const NUM_M = { 3: "ثَلَاثَةُ", 4: "أَرْبَعَةُ", 5: "خَمْسَةُ", 6: "سِتَّةُ", 7: "سَبْعَةُ", 8: "ثَمَانِيَةُ", 9: "تِسْعَةُ", 10: "عَشَرَةُ" };
const NUM_F = { 3: "ثَلَاثُ", 4: "أَرْبَعُ", 5: "خَمْسُ", 6: "سِتُّ", 7: "سَبْعُ", 8: "ثَمَانِي", 9: "تِسْعُ", 10: "عَشْرُ" };
const joinDe = a => a.length < 2 ? (a[0] || "") : a.slice(0, -1).join(", ") + " und " + a[a.length - 1];
// German countries with an article: [after "aus", accusative]
const DE_ART = { ch: ["der Schweiz", "die Schweiz"], tr: ["der Türkei", "die Türkei"], iq: ["dem Irak", "den Irak"], lb: ["dem Libanon", "den Libanon"],
  ye: ["dem Jemen", "den Jemen"], xk: ["dem Kosovo", "den Kosovo"], us: ["den USA", "die USA"] };
const isNum = v => v !== undefined && v !== null && v !== "" && !isNaN(v);

// ---------- Personal values in a sentence ----------
function val(pl, key) {
  const p = (pl && pl.p) || {}, f = pl && pl.g === "f", gi = f ? 1 : 0;
  const o = (list, id) => find(list, id);
  switch (key) {
    case "name": return p.nameAr || p.name || "";
    case "nameDe": return p.name || p.nameAr || "";
    case "country": return o("country", p.country)?.[1] || "";
    case "countryDe": return DE_ART[p.country]?.[1] || o("country", p.country)?.[2] || "";
    case "countryAusDe": return DE_ART[p.country]?.[0] || o("country", p.country)?.[2] || "";
    case "nat": return o("country", p.country)?.[3 + gi] || "";
    case "natDe": return o("country", p.country)?.[5 + gi] || "";
    case "city": case "cityDe": return p.city || "";
    case "home": return o("home", p.home)?.[1] || "";
    case "homeDe": return o("home", p.home)?.[2] || "";
    case "langs": return (p.langs || []).map(id => o("lang", id)?.[1]).filter(Boolean).join(" وَ");
    case "langsDe": return joinDe((p.langs || []).map(id => o("lang", id)?.[2]).filter(Boolean));
    case "mood": return o("mood", p.mood)?.[1 + gi] || "";
    case "moodDe": return o("mood", p.mood)?.[3] || "";
    case "age": {
      if (!isNum(p.age)) return ""; const n = +p.age;
      return n === 1 ? "سَنَةٌ وَاحِدَةٌ" : n === 2 ? "سَنَتَانِ" : AR_DIGITS(n) + (n <= 10 ? " سَنَوَاتٍ" : " سَنَةً");
    }
    case "ageDe": return isNum(p.age) ? `${p.age} Jahre alt` : "";
    case "hours": return o("hours", p.hours)?.[1] || "";
    case "hoursDe": return o("hours", p.hours)?.[2] || "";
    case "married": return p.married === "yes" ? `نَعَمْ، أَنَا ${f ? "مُتَزَوِّجَةٌ" : "مُتَزَوِّجٌ"}.` : p.married === "no" ? `لَا، أَنَا ${f ? "عَزْبَاءُ" : "أَعْزَبُ"}.` : "";
    case "marriedDe": return p.married === "yes" ? "Ja, ich bin verheiratet." : p.married === "no" ? "Nein, ich bin ledig." : "";
    case "kids": {
      if (!isNum(p.kids)) return ""; const k = +p.kids;
      return k === 0 ? "لَيْسَ عِنْدِي أَطْفَالٌ." : k === 1 ? "عِنْدِي طِفْلٌ وَاحِدٌ." : k === 2 ? "عِنْدِي طِفْلَانِ." : k <= 10 ? `عِنْدِي ${NUM_M[k]} أَطْفَالٍ.` : `عِنْدِي ${AR_DIGITS(k)} طِفْلًا.`;
    }
    case "kidsDe": return !isNum(p.kids) ? "" : +p.kids === 0 ? "Ich habe keine Kinder." : +p.kids === 1 ? "Ich habe ein Kind." : `Ich habe ${p.kids} Kinder.`;
    case "siblings": {
      if (!isNum(p.brothers) || !isNum(p.sisters)) return "";
      const b = +p.brothers, s = +p.sisters, parts = [];
      if (b) parts.push(b === 1 ? "أَخٌ وَاحِدٌ" : b === 2 ? "أَخَوَانِ" : b <= 10 ? `${NUM_M[b]} إِخْوَةٍ` : `${AR_DIGITS(b)} أَخًا`);
      if (s) parts.push(s === 1 ? "أُخْتٌ وَاحِدَةٌ" : s === 2 ? "أُخْتَانِ" : s <= 10 ? `${NUM_F[s]} أَخَوَاتٍ` : `${AR_DIGITS(s)} أُخْتًا`);
      return parts.length ? `عِنْدِي ${parts.join(" وَ")}.` : "لَيْسَ عِنْدِي إِخْوَةٌ وَلَا أَخَوَاتٌ.";
    }
    case "siblingsDe": {
      if (!isNum(p.brothers) || !isNum(p.sisters)) return "";
      const b = +p.brothers, s = +p.sisters, parts = [];
      if (b) parts.push(b === 1 ? "einen Bruder" : `${b} Brüder`);
      if (s) parts.push(s === 1 ? "eine Schwester" : `${s} Schwestern`);
      return parts.length ? `Ich habe ${parts.join(" und ")}.` : "Ich habe keine Geschwister.";
    }
    case "job": return o("job", p.job)?.[1 + gi] || "";
    case "jobDe": return o("job", p.job)?.[3 + gi] || "";
    case "workStart": case "wake": case "sleep": return o("hour", p[key])?.[1] || "";
    case "workStartDe": case "wakeDe": case "sleepDe": return o("hour", p[key.slice(0, -2)])?.[0] || "";
    case "hobbies": return (p.hobbies || []).map(id => o("hobby", id)?.[1]).filter(Boolean).join(" وَ");
    case "hobbiesDe": return joinDe((p.hobbies || []).map(id => o("hobby", id)?.[2]).filter(Boolean));
    case "hobby1": return o("hobby", (p.hobbies || [])[0])?.[1] || "";
    case "hobby1De": return o("hobby", (p.hobbies || [])[0])?.[2] || "";
    case "food": case "drink": case "item": return o(key, p[key])?.[1] || "";
    case "foodDe": case "drinkDe": case "itemDe": return o(key.slice(0, -2), p[key.slice(0, -2)])?.[2] || "";
  }
  return "";
}
// Fill a line template for speaker S talking to listener L.
function fill(t, S, L, de) {
  return C.esc(t)
    .replace(/\{([sl]):([^|{}]*)\|([^{}]*)\}/g, (m, w, a, b) => ((w === "s" ? S : L)?.g === "f" ? b : a))
    .replace(/\{([SL])\.(\w+)\}/g, (m, w, k) => { const v = val(w === "S" ? S : L, k); return v ? `<b class="pv">${C.esc(v)}</b>` : `<span class="miss">…</span>`; })
    .replace(/مِنْ (<b class="pv">)?ال/g, (m, b) => `مِنَ ${b || ""}ال`);
}
const hasField = (pl, k) => {
  const p = (pl && pl.p) || {};
  if (k === "name") return !!(p.name || p.nameAr);
  if (F[k] && (F[k].type === "count" || F[k].type === "number")) return isNum(p[k]);
  if (F[k] && F[k].type === "multi") return (p[k] || []).length > 0;
  return !!p[k];
};
const missing = (pl, lvl) => [...(pl && pl.g ? [] : ["g"]), ...lvl.fields.filter(k => !hasField(pl, k))];

// Words the person learns personally in a level (their own country, job, hobbies …).
function personalVocab(pl, lvl) {
  const out = [], p = (pl && pl.p) || {}, gi = pl && pl.g === "f" ? 1 : 0;
  const add = (ar, de) => ar && out.push([ar, de]);
  lvl.fields.forEach(k => {
    if (k === "country") { const c = find("country", p.country); if (c) { add(c[1], c[2]); add(c[3 + gi], c[5 + gi]); } }
    if (k === "job") { const j = find("job", p.job); if (j) add(j[1 + gi], j[3 + gi]); }
    if (k === "hobbies") (p.hobbies || []).forEach(id => { const h = find("hobby", id); if (h) add(h[1], h[2]); });
    if (k === "langs") (p.langs || []).forEach(id => { const l = find("lang", id); if (l) add(l[1], l[2]); });
    if (["home", "food", "drink", "item", "hours"].includes(k)) { const o = find(k, p[k]); if (o) add(o[1], o[2]); }
    if (k === "mood") { const m = find("mood", p.mood); if (m) add(m[1 + gi], m[3]); }
  });
  return out;
}

// ---------- Speech (browser voice, no audio files) ----------
let voice = null;
const pickVoice = () => { const v = speechSynthesis.getVoices(); voice = v.find(x => /^ar(-|_)SA/i.test(x.lang)) || v.find(x => /^ar/i.test(x.lang)) || null; };
if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, "").replace(/…/g, ""));
  u.lang = voice ? voice.lang : "ar-SA"; if (voice) u.voice = voice; u.rate = 0.8;
  speechSynthesis.speak(u);
}

// ---------- Data ----------
const D = () => { const S = C.S(); S.dialog ||= {}; S.dialog.me ||= { g: "", p: {} }; S.dialog.me.p ||= {}; S.dialog.pairs ||= []; return S.dialog; };
const pairById = id => D().pairs.find(p => p.id === id);
const me = () => D().me;
const cloud = () => window.LN && LN.cloud;
function pushMe() { D().pairs.filter(p => p.shared).forEach(p => cloud() && cloud().uid() && cloud().edit(p.id, ["players", cloud().uid()], me())); }
function saveAll(changedMe) { C.save(); if (changedMe) pushMe(); }

// Both people of a pair, with roles A/B for a level.
function people(pair, n) {
  const uid = C.myUid();
  let A, B, aName, bName, mineA = true, mineB = true;
  if (!pair.shared) { A = me(); B = pair.partner || (pair.partner = { g: "", p: {} }); mineA = true; mineB = false; }
  else {
    const players = pair.players || {}, other = (pair.members || []).find(m => m !== uid);
    const ownerIsMe = pair.owner === uid;
    const mine = me(), theirs = other ? players[other] || { g: "", p: {} } : null;
    A = ownerIsMe ? mine : theirs; B = ownerIsMe ? theirs : mine;
    mineA = ownerIsMe; mineB = !ownerIsMe;
  }
  if ((pair.roles || {})[n]) { [A, B] = [B, A]; [mineA, mineB] = [mineB, mineA]; }
  aName = val(A, "nameDe") || "Person A"; bName = val(B, "nameDe") || "Person B";
  return { A, B, aName, bName, mineA, mineB };
}
const partnerOf = pair => {
  if (!pair.shared) return pair.partner || { g: "", p: {} };
  const other = (pair.members || []).find(m => m !== C.myUid());
  return other ? (pair.players || {})[other] || { g: "", p: {} } : null;
};
const partnerName = pair => { const p = partnerOf(pair); return (p && val(p, "nameDe")) || (pair.shared ? (pair.members || []).length < 2 ? "Wartet auf Partner" : "Partner" : "Partner"); };

function setDone(pair, n, v) { pair.done ||= {}; if (v) pair.done[n] = true; else delete pair.done[n]; C.save(); if (pair.shared && cloud()) cloud().edit(pair.id, ["done", String(n)], v ? true : null); }
function setRole(pair, n, v) { pair.roles ||= {}; if (v) pair.roles[n] = true; else delete pair.roles[n]; C.save(); if (pair.shared && cloud()) cloud().edit(pair.id, ["roles", String(n)], v ? true : null); }

// ---------- Profile form ----------
function fieldHtml(k, pl, who) {
  const p = pl.p || {}, id = `${who}-${k}`;
  if (k === "g") return `<div class="df"><label>${who === "me" ? "Ich bin" : "Partner ist"}</label>
    <div class="seg" data-who="${who}" data-k="g"><button data-v="m" class="${pl.g === "m" ? "on" : ""}">♂ männlich</button><button data-v="f" class="${pl.g === "f" ? "on" : ""}">♀ weiblich</button></div></div>`;
  const f = F[k];
  if (f.type === "name") return `<div class="df"><label>${who === "me" ? "Dein Name" : "Name"}</label>
    <div class="row" style="flex-wrap:nowrap"><input class="field" data-who="${who}" data-k="name" placeholder="z. B. Musa" value="${C.esc(p.name || "")}">
    <input class="field ar-in" dir="rtl" data-who="${who}" data-k="nameAr" placeholder="auf Arabisch: مُوسَى" value="${C.esc(p.nameAr || "")}"></div></div>`;
  if (f.type === "text") return `<div class="df"><label>${f.label}</label><input class="field" dir="auto" data-who="${who}" data-k="${k}" value="${C.esc(p[k] || "")}"><small class="muted">${f.hint || ""}</small></div>`;
  if (f.type === "number") return `<div class="df"><label>${f.label}</label><input class="field" type="number" inputmode="numeric" min="${f.min}" max="${f.max}" data-who="${who}" data-k="${k}" value="${C.esc(p[k] ?? "")}" style="width:110px"></div>`;
  if (f.type === "count") return `<div class="df"><label>${f.label}</label><select class="field" data-who="${who}" data-k="${k}"><option value="">–</option>${[...Array(11).keys()].map(i => `<option ${String(p[k]) === String(i) ? "selected" : ""}>${i}</option>`).join("")}</select></div>`;
  if (f.type === "select") return `<div class="df"><label>${f.label}</label><select class="field" data-who="${who}" data-k="${k}"><option value="">bitte wählen</option>${O[f.opt].map(o => `<option value="${o[0]}" ${p[k] === o[0] ? "selected" : ""}>${C.esc(f.show(o, pl.g))}</option>`).join("")}</select></div>`;
  if (f.type === "multi") return `<div class="df"><label>${f.label}</label><div class="chips" data-who="${who}" data-k="${k}" data-max="${f.max}">${O[f.opt].map(o => `<button data-v="${o[0]}" class="${(p[k] || []).includes(o[0]) ? "on" : ""}">${C.esc(f.show(o))}</button>`).join("")}</div></div>`;
  return "";
}
function wireForm(root, pair, onChange) {
  const target = who => who === "me" ? me() : pair.partner;
  const changed = who => { saveAll(who === "me"); onChange && onChange(); };
  root.querySelectorAll("input[data-k], select[data-k]").forEach(el => {
    const ev = el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(ev, () => {
      const pl = target(el.dataset.who), k = el.dataset.k;
      pl.p ||= {};
      if (el.type === "number" || F[k]?.type === "count") pl.p[k] = el.value === "" ? "" : +el.value; else pl.p[k] = el.value.trim();
      changed(el.dataset.who);
    });
    // When a field is finished (left / selected), forms may close or update
    el.addEventListener("change", () => onChange && onChange("commit"));
  });
  root.querySelectorAll(".seg[data-k=g]").forEach(seg => seg.querySelectorAll("button").forEach(b => b.onclick = () => {
    target(seg.dataset.who).g = b.dataset.v; seg.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    changed(seg.dataset.who); onChange && onChange(true);
  }));
  root.querySelectorAll(".chips").forEach(box => box.querySelectorAll("button").forEach(b => b.onclick = () => {
    const pl = target(box.dataset.who), k = box.dataset.k, max = +box.dataset.max;
    pl.p ||= {}; let arr = pl.p[k] || [];
    arr = arr.includes(b.dataset.v) ? arr.filter(x => x !== b.dataset.v) : arr.length >= max ? arr : [...arr, b.dataset.v];
    pl.p[k] = arr; box.querySelectorAll("button").forEach(x => x.classList.toggle("on", arr.includes(x.dataset.v)));
    changed(box.dataset.who); onChange && onChange("commit");
  }));
}

// ---------- Views ----------
function viewHome() {
  C.setBar(`<a class="btn ghost small" href="#/">← Notizbücher</a>`);
  const d = D(), m = me();
  const cards = d.pairs.map(pair => {
    const done = Object.keys(pair.done || {}).length;
    return `<a class="pair-card" href="#/dialog/${pair.id}"><div class="pc-top"><span class="pc-ic">${pair.shared ? "👥" : "📱"}</span>
      <div><b>${C.esc(partnerName(pair))}</b><small class="muted">${pair.shared ? "jeder auf seinem Handy" : "zusammen auf diesem Handy"}</small></div></div>
      <div class="progress"><i style="width:${done / LV.length * 100}%"></i></div><small class="muted">${done} / ${LV.length} Level</small></a>`;
  }).join("");
  C.app.innerHTML = `<div class="dlg-home">
    <div class="hero"><div><h1>💬 Dialoge üben</h1><p class="muted">Arabisch (Fusha) A0 bis A1 in 12 Leveln. Lernt zu zweit: Jeder trägt seine Infos ein (Name, Herkunft, Arbeit, Hobbys …) und der Dialog wird für euch beide angepasst, auch männlich und weiblich. Jeder sieht seine Seite, dann sprecht ihr den Dialog zusammen.</p></div></div>
    <div class="step"><h3>👤 Über mich</h3><div id="meForm">${fieldHtml("g", m, "me")}${fieldHtml("name", m, "me")}</div>
      <a class="btn small" href="#/dialog/me" style="margin-top:8px">✎ Ganzes Profil bearbeiten</a></div>
    <h2>Meine Übungspartner</h2>
    <div class="pair-grid">${cards}
      <button class="pair-card add" id="addRemote"><span class="pc-ic">👥</span><b>Freund einladen</b><small class="muted">Jeder auf seinem eigenen Handy, per Link</small></button>
      <button class="pair-card add" id="addLocal"><span class="pc-ic">📱</span><b>Zusammen auf einem Handy</b><small class="muted">Ihr sitzt zusammen und übt auf diesem Gerät</small></button>
    </div></div>`;
  wireForm(C.$("#meForm"), null);
  C.$("#addLocal").onclick = () => {
    if (!me().g) return alert("Wähle zuerst oben, ob du männlich oder weiblich bist.");
    const pair = { id: "d" + Math.random().toString(36).slice(2, 9), shared: false, partner: { g: "", p: {} }, done: {}, roles: {}, created: Date.now() };
    D().pairs.push(pair); C.save(); location.hash = `#/dialog/${pair.id}`;
  };
  C.$("#addRemote").onclick = async () => {
    if (!me().g) return alert("Wähle zuerst oben, ob du männlich oder weiblich bist.");
    if (!C.myUid()) { alert("Melde dich zuerst oben rechts mit Google an. Dann kannst du einen Freund einladen."); cloud() && cloud().signIn(); return; }
    const id = "d" + Math.random().toString(36).slice(2, 9);
    try { await cloud().createPair(id, me()); } catch (e) { console.warn(e); return alert("Das hat nicht geklappt: " + (e.code || e.message)); }
    location.hash = `#/dialog/${id}`; setTimeout(() => invite(pairById(id)), 300);
  };
}

function viewMe() {
  C.setBar(`<a class="btn ghost small" href="#/dialog">← Dialoge</a>`);
  const keys = ["g", "name", "country", "city", "home", "langs", "age", "hours", "married", "kids", "brothers", "sisters", "job", "workStart", "hobbies", "food", "drink", "wake", "sleep", "mood", "item"];
  C.app.innerHTML = `<div class="setup"><h1>👤 Mein Profil</h1><p class="muted">Diese Infos werden in die Dialoge eingesetzt. Du kannst sie jederzeit ändern. Alles wird automatisch gespeichert.</p>
    <div class="step" id="pf">${keys.map(k => fieldHtml(k, me(), "me")).join("")}</div>
    <a class="btn primary" href="#/dialog">✓ Fertig</a></div>`;
  wireForm(C.$("#pf"), null, rerenderJob => { if (rerenderJob === true) viewMe(); });
}

function invite(pair) {
  if (!pair || !pair.inviteCode) return;
  const link = `${location.origin}${location.pathname}#/join/${pair.id}/${pair.inviteCode}`;
  const msg = "Lass uns zusammen Arabisch-Dialoge üben:";
  const m = C.modal(`<h2>👥 Partner einladen</h2><p class="muted">Schick diesen Link deinem Übungspartner. Nach der Anmeldung mit Google wählt er männlich oder weiblich und trägt seine Infos ein. Danach seht ihr beide euren angepassten Dialog.</p>
    <div class="row" style="flex-wrap:nowrap"><input class="field" id="invLink" readonly value="${C.esc(link)}"><button class="btn primary" id="copyLink">Kopieren</button></div>
    <div class="row" style="margin-top:10px"><button class="btn" id="shareLink">📤 Teilen</button>
      <a class="btn" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(msg + " " + link)}">💬 WhatsApp</a>
      <button class="btn ghost" id="closeM" style="margin-left:auto">Schließen</button></div>`);
  m.querySelector("#closeM").onclick = C.closeModal;
  m.querySelector("#copyLink").onclick = async e => { try { await navigator.clipboard.writeText(link); } catch { m.querySelector("#invLink").select(); document.execCommand("copy"); } e.target.textContent = "Kopiert!"; };
  m.querySelector("#shareLink").onclick = () => navigator.share ? navigator.share({ title: "Lingo Notebook", text: msg, url: link }).catch(() => {}) : m.querySelector("#copyLink").click();
}

function viewPair(id) {
  const pair = pairById(id); if (!pair) return (location.hash = "#/dialog");
  C.setBar(`<a class="btn ghost small" href="#/dialog">← Dialoge</a>
    <div class="menu" id="pmenu"><button class="btn small ghost" id="pmenuBtn">⋯</button><div class="menu-list">
    ${pair.shared && pair.owner === C.myUid() ? `<button data-a="invite">👥 Einladungslink</button>` : ""}
    <button data-a="del" style="color:var(--red)">🗑 ${pair.shared && pair.owner !== C.myUid() ? "Partner verlassen" : "Partner entfernen"}</button></div></div>`);
  const pm = C.$("#pmenu");
  C.$("#pmenuBtn").onclick = e => { e.stopPropagation(); pm.classList.toggle("open"); };
  document.addEventListener("click", () => pm.classList.remove("open"), { once: true });
  pm.querySelectorAll("[data-a]").forEach(b => b.onclick = () => {
    if (b.dataset.a === "invite") return invite(pair);
    if (!confirm("Diesen Übungspartner wirklich entfernen?")) return;
    if (pair.shared && cloud()) cloud().deleteShared(pair).catch(e => console.warn(e));
    D().pairs = D().pairs.filter(p => p !== pair); C.save(); location.hash = "#/dialog";
  });
  const partner = partnerOf(pair), waiting = pair.shared && (pair.members || []).length < 2;
  C.app.innerHTML = `<div class="pair-head"><div class="duo">
      <div class="who me">${me().g === "f" ? "🧕" : "🧔"}<b>${C.esc(val(me(), "nameDe") || "Ich")}</b><small>du</small></div><span class="amp">&amp;</span>
      <div class="who">${partner && partner.g === "f" ? "🧕" : partner && partner.g === "m" ? "🧔" : "❔"}<b>${C.esc(partnerName(pair))}</b><small>${pair.shared ? "Partner" : "auf diesem Handy"}</small></div></div>
    ${waiting ? `<div class="wait-box">⏳ Dein Partner ist noch nicht beigetreten. <button class="btn small primary" id="invBtn">👥 Einladungslink senden</button></div>` : ""}
    ${!pair.shared ? `<div class="step" id="partnerForm"><h3>📱 Dein Partner auf diesem Handy</h3>${fieldHtml("g", pair.partner, "partner")}${fieldHtml("name", pair.partner, "partner")}</div>` : ""}
  </div>
  <h2>12 Level · Arabisch A0 → A1</h2>
  <div class="lvl-grid">${LV.map(l => `<a class="lvl ${pair.done?.[l.n] ? "done" : ""}" href="#/dialog/${pair.id}/${l.n}">
    <span class="lvl-n">${l.n}</span><span class="lvl-ic">${l.icon}</span><b class="ar-t" dir="rtl">${l.ar}</b><small>${l.de}</small><span class="cefr">${l.cefr}</span>${pair.done?.[l.n] ? `<span class="tick">✓</span>` : ""}</a>`).join("")}</div>`;
  const ib = C.$("#invBtn"); if (ib) ib.onclick = () => invite(pair);
  const pf = C.$("#partnerForm"); if (pf) wireForm(pf, pair, g => { if (g === true || g === "commit") viewPair(id); });
}

let current = null; // { id, n, drawDialog }
function viewLevel(id, n) {
  const pair = pairById(id); if (!pair) return (location.hash = "#/dialog");
  const lvl = LV.find(l => l.n === +n); if (!lvl) return (location.hash = `#/dialog/${id}`);
  C.setBar(`<a class="btn ghost small" href="#/dialog/${id}">← Level</a>`);
  const st = (C.S().dialogView ||= { de: true, hideOther: false, hideMine: false });
  const prev = LV.find(l => l.n === lvl.n - 1), next = LV.find(l => l.n === lvl.n + 1);
  C.app.innerHTML = `<div class="lvl-page">
    <div class="lvl-title"><span class="lvl-n big">${lvl.n}</span><div><h1 dir="rtl" class="ar-t">${lvl.ar}</h1><div class="muted">${lvl.icon} ${lvl.de} · ${lvl.cefr}</div></div></div>
    <div id="formArea"></div>
    <div class="dlg-tools">
      <button class="btn small" id="swap">⇄ Rollen tauschen</button>
      <label class="toggle"><input type="checkbox" id="tDe" ${st.de ? "checked" : ""}> Deutsch</label>
      <label class="toggle"><input type="checkbox" id="tOther" ${st.hideOther ? "checked" : ""}> Partner verdecken</label>
      <label class="toggle"><input type="checkbox" id="tMine" ${st.hideMine ? "checked" : ""}> Meine Zeilen verdecken</label>
    </div>
    <div id="roles" class="muted" style="font-size:.85rem;margin:6px 2px 10px"></div>
    <div class="chat" id="chat"></div>
    <h2 style="margin-top:28px">📚 Gelernte Wörter</h2>
    <div class="vocab" id="vocab"></div>
    <div class="row" style="justify-content:space-between;margin-top:22px">
      ${prev ? `<a class="btn" href="#/dialog/${id}/${prev.n}">← ${prev.n}. ${prev.de}</a>` : "<span></span>"}
      <button class="btn ${pair.done?.[lvl.n] ? "" : "primary"}" id="doneBtn">${pair.done?.[lvl.n] ? "✓ Geschafft (rückgängig)" : "✓ Level geschafft"}</button>
      ${next ? `<a class="btn" href="#/dialog/${id}/${next.n}">${next.n}. ${next.de} →</a>` : "<span></span>"}
    </div></div>`;

  // The fields that were missing when the level was opened stay in the form until "Fertig" is tapped.
  let keysMe = null, keysPartner = null, formClosed = false;
  const drawForm = () => {
    const mine = me(), other = partnerOf(pair);
    if (!keysMe) { keysMe = missing(mine, lvl); keysPartner = !pair.shared ? missing(other, lvl) : []; }
    const mm = formClosed ? [] : keysMe, om = formClosed ? [] : keysPartner;
    const stillMissing = missing(mine, lvl).length + (!pair.shared ? missing(other, lvl).length : 0);
    const remoteMissing = pair.shared && (!other || missing(other, lvl).length);
    C.$("#formArea").innerHTML = (mm.length || om.length || remoteMissing) ? `<div class="step setup-box">
      <h3>✍️ Bevor ihr startet</h3><p class="muted" style="margin-top:0">Tragt eure Infos ein, dann wird der Dialog für euch angepasst.</p>
      ${mm.length ? `<div class="form-part" data-part="me"><h4>Du (${C.esc(val(mine, "nameDe") || "ich")})</h4>${mm.map(k => fieldHtml(k, mine, "me")).join("")}</div>` : ""}
      ${om.length ? `<div class="form-part" data-part="partner"><h4>Dein Partner (${C.esc(val(other, "nameDe") || "Partner")})</h4>${om.map(k => fieldHtml(k, other, "partner")).join("")}</div>` : ""}
      ${mm.length || om.length ? `<button class="btn primary" id="formDone" ${stillMissing ? "disabled" : ""}>✓ Fertig, zum Dialog</button>` : ""}
      ${remoteMissing ? `<p class="wait-note">⏳ ${other ? C.esc(val(other, "nameDe") || "Dein Partner") + " muss noch seine Infos für dieses Level eintragen." : "Dein Partner ist noch nicht beigetreten."} Die fehlenden Stellen sind mit … markiert.</p>` : ""}
    </div>` : "";
    wireForm(C.$("#formArea"), pair, g => {
      drawDialog();
      const b = C.$("#formDone"); if (b) b.disabled = missing(me(), lvl).length + (!pair.shared ? missing(partnerOf(pair), lvl).length : 0) > 0;
      if (g === true) drawForm();
    });
    const fd = C.$("#formDone"); if (fd) fd.onclick = () => { formClosed = true; drawForm(); C.$("#chat").scrollIntoView({ behavior: "smooth", block: "start" }); };
  };
  const drawDialog = () => {
    const P = people(pair, lvl.n);
    const roleNames = lvl.roles || ["Person A", "Person B"];
    C.$("#roles").innerHTML = `<b>${C.esc(P.aName)}</b> = ${roleNames[0]} · <b>${C.esc(P.bName)}</b> = ${roleNames[1]}`;
    C.$("#chat").innerHTML = lvl.lines.map(([sp, ar, de], i) => {
      const S = sp === "A" ? P.A : P.B, L = sp === "A" ? P.B : P.A;
      const mine = sp === "A" ? P.mineA : P.mineB;
      const hidden = (mine && st.hideMine) || (!mine && st.hideOther);
      return `<div class="bub ${mine ? "mine" : "other"} ${hidden ? "hid" : ""}" data-i="${i}">
        <div class="bub-who">${C.esc(sp === "A" ? P.aName : P.bName)}</div>
        <div class="bub-ar" dir="rtl">${fill(ar, S, L)}</div>
        ${st.de ? `<div class="bub-de">${fill(de, S, L, true)}</div>` : ""}
        <button class="say" title="Vorlesen">🔊</button></div>`;
    }).join("");
    C.$("#chat").querySelectorAll(".bub").forEach(b => {
      b.onclick = e => {
        if (e.target.closest(".say")) return speak(b.querySelector(".bub-ar").textContent);
        if (b.classList.contains("hid")) b.classList.replace("hid", "shown");
      };
    });
    const pv = personalVocab(me(), lvl);
    C.$("#vocab").innerHTML = [...lvl.vocab, ...pv].map(([a, d], i) => `<div class="voc ${i >= lvl.vocab.length ? "mine" : ""}"><button class="say">🔊</button><span class="v-de">${C.esc(d)}</span><span class="v-ar" dir="rtl">${C.esc(a)}</span></div>`).join("")
      + (pv.length ? `<p class="muted" style="font-size:.82rem">Farbig markiert: deine persönlichen Wörter aus diesem Level.</p>` : "");
    C.$("#vocab").querySelectorAll(".voc").forEach(r => r.querySelector(".say").onclick = () => speak(r.querySelector(".v-ar").textContent));
  };
  drawForm(); drawDialog();
  current = { id, n: lvl.n, drawDialog, drawForm };

  C.$("#swap").onclick = () => { setRole(pair, lvl.n, !(pair.roles || {})[lvl.n]); drawDialog(); };
  C.$("#tDe").onchange = e => { st.de = e.target.checked; C.save(); drawDialog(); };
  C.$("#tOther").onchange = e => { st.hideOther = e.target.checked; C.save(); drawDialog(); };
  C.$("#tMine").onchange = e => { st.hideMine = e.target.checked; C.save(); drawDialog(); };
  C.$("#doneBtn").onclick = () => { setDone(pair, lvl.n, !pair.done?.[lvl.n]); viewLevel(id, n); };
}

// Live update from the partner's phone.
function refresh(id) {
  const h = location.hash;
  if (!h.startsWith("#/dialog")) return;
  if (current && current.id === id && h === `#/dialog/${id}/${current.n}`) {
    const focusInForm = C.$("#formArea") && C.$("#formArea").contains(document.activeElement);
    current.drawDialog(); if (!focusInForm) current.drawForm();
    return;
  }
  if (h === `#/dialog/${id}` || h === "#/dialog") route(location.hash);
}

function route(hash) {
  current = null;
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean); // ["dialog", id?, n?]
  if (!parts[1]) return viewHome();
  if (parts[1] === "me") return viewMe();
  if (parts[2]) return viewLevel(parts[1], parts[2]);
  return viewPair(parts[1]);
}

return {
  init(ctx) { C = ctx; },
  route, refresh, pairById, data: D, val, fill, missing,
  addPair(p) { if (!pairById(p.id)) D().pairs.push(p); },
  removePair(id) { const d = D(); d.pairs = d.pairs.filter(p => p.id !== id); },
};
})();
