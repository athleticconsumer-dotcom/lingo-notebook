// Cloud sync with Firebase: sign in with Google and your notebooks are saved to Firestore,
// so they are the same on every device. Without signing in, everything still works locally.
// Firebase project "lingo-notebook" (lingo-notebook-f3854), collection "lingoNotebook".
const firebaseConfig = {
  apiKey: "AIzaSyAStJmNAN_LgAiK4P-F1xneVX78o-STBII",
  authDomain: "lingo-notebook-f3854.firebaseapp.com",
  projectId: "lingo-notebook-f3854",
  storageBucket: "lingo-notebook-f3854.firebasestorage.app",
  messagingSenderId: "914399001572",
  appId: "1:914399001572:web:c9892a6af0095621f125f1",
};
const COLLECTION = "lingoNotebook";
const V = "10.12.2";

const T = {
  en: { in: "Sign in with Google", out: "Sign out", synced: "Synced", saving: "Saving…", local: "Saved on this device only", err: "Sync error", outQ: "Sign out? Your notebooks stay safe in your Google account and are removed from this device." },
  de: { in: "Mit Google anmelden", out: "Abmelden", synced: "Synchronisiert", saving: "Speichert…", local: "Nur auf diesem Gerät gespeichert", err: "Sync-Fehler", outQ: "Abmelden? Deine Notizbücher bleiben in deinem Google-Konto gespeichert und werden von diesem Gerät entfernt." },
  fr: { in: "Se connecter avec Google", out: "Se déconnecter", synced: "Synchronisé", saving: "Enregistrement…", local: "Enregistré sur cet appareil uniquement", err: "Erreur de synchro", outQ: "Se déconnecter ? Tes cahiers restent dans ton compte Google et sont retirés de cet appareil." },
  ru: { in: "Войти через Google", out: "Выйти", synced: "Синхронизировано", saving: "Сохранение…", local: "Сохранено только на этом устройстве", err: "Ошибка синхронизации", outQ: "Выйти? Тетради останутся в твоём аккаунте Google и будут удалены с этого устройства." },
};
const t = k => (T[window.LN?.lang()] || T.en)[k];
const box = document.getElementById("account");

let state = { user: null, status: "local", code: "" };
function render() {
  const u = state.user;
  if (!u) {
    box.innerHTML = `<button class="btn small" id="gIn" title="${t("local")}"><svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.9 6.1C12.5 13.6 17.8 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.6c0-1.6-.1-3.1-.4-4.6H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.7c4.3-4 6.9-9.9 6.9-17z"/><path fill="#FBBC05" d="M10.5 28.6c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.6 0 20.2 0 24s1 7.4 2.7 10.7l7.8-6.1z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.8 2.3-8.5 2.3-6.2 0-11.5-4.2-13.4-9.9l-7.8 6.1C6.6 42.6 14.6 48 24 48z"/></svg>${t("in")}</button>`;
    document.getElementById("gIn").onclick = signIn;
    return;
  }
  const dot = state.status === "error" ? "var(--red)" : state.status === "saving" ? "var(--gold)" : "var(--green)";
  const label = state.status === "error" ? `${t("err")} ${state.code}` : t(state.status === "saving" ? "saving" : "synced");
  box.innerHTML = `<div class="menu" id="accMenu"><button class="btn small ghost acc" id="accBtn" title="${label}">
      <span class="dot" style="background:${dot}"></span>${u.photoURL ? `<img src="${u.photoURL}" alt="" referrerpolicy="no-referrer">` : "👤"}</button>
    <div class="menu-list"><div class="acc-info"><b>${u.displayName || ""}</b><small>${u.email || ""}</small><small><span class="dot" style="background:${dot}"></span> ${label}</small></div>
      <div class="sep"></div><button id="gOut">${t("out")}</button></div></div>`;
  const m = document.getElementById("accMenu");
  document.getElementById("accBtn").onclick = e => { e.stopPropagation(); m.classList.toggle("open"); };
  document.addEventListener("click", () => m.classList.remove("open"), { once: true });
  document.getElementById("gOut").onclick = signOutNow;
}
const setStatus = (status, code = "") => { state.status = status; state.code = code; render(); };

let fb, auth, db, timer;
async function load() {
  const [a, b, c] = await Promise.all([
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`),
    import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`),
  ]);
  fb = { ...a, ...b, ...c };
  const app = fb.initializeApp(firebaseConfig);
  auth = fb.getAuth(app);
  db = fb.getFirestore(app);
}

const ref = () => fb.doc(db, COLLECTION, state.user.uid);
const SHARED = "sharedNotebooks";
const sref = id => fb.doc(db, SHARED, id);

// The personal document keeps only the list of shared notebooks and your own review progress;
// the shared words themselves live in the shared notebook document.
function strip(S) {
  const c = JSON.parse(JSON.stringify(S));
  (c.notebooks || []).filter(n => n.shared).forEach(n => {
    c.data[n.id] = { mastered: (c.data[n.id] || {}).mastered || {} };
    delete n.memberInfo; delete n.members; delete n.inviteCode;
  });
  ((c.dialog || {}).pairs || []).filter(p => p.shared).forEach(p => { delete p.players; delete p.memberInfo; delete p.members; delete p.inviteCode; delete p.kumyk; delete p.kvocab; });
  return c;
}
async function push(S) {
  if (!state.user) return;
  setStatus("saving");
  try {
    const clean = strip(S);
    await fb.setDoc(ref(), { state: JSON.stringify(clean), updated: S.updated || Date.now(), updatedAt: fb.serverTimestamp() });
    setStatus("synced");
  } catch (e) { console.warn(e); setStatus("error", e.code || ""); }
}

// ---------- Shared notebooks ----------
const me = () => ({ name: state.user.displayName || state.user.email || "?", photo: state.user.photoURL || "" });
const newCode = () => Array.from(crypto.getRandomValues(new Uint8Array(9)), b => "abcdefghjkmnpqrstuvwxyz23456789"[b % 31]).join("");
const watchers = new Map();
const pending = new Map();   // "id|a|b|c" -> { id, path, value }; bundled writes so typing doesn't write on every key
let flushTimer = null;

function setPath(obj, path, value) {
  let o = obj;
  for (let k = 0; k < path.length - 1; k++) o = (o[path[k]] ||= {});
  if (value === null) delete o[path[path.length - 1]]; else o[path[path.length - 1]] = value;
}
function watch(id) {
  if (watchers.has(id) || !state.user) return;
  const unsub = fb.onSnapshot(sref(id), snap => {
    const data = snap.exists() ? snap.data() : null;
    if (!data || !(data.members || []).includes(state.user.uid)) { unwatch(id); window.LN.removeShared(id); return; }
    // Keep what you are typing right now (not sent yet) instead of the older cloud value.
    pending.forEach(p => { if (p.id === id) setPath(data, p.path, p.value); });
    if (data.kind === "dialog") window.LN.applyPair(id, data); else window.LN.applyShared(id, data);
  }, e => { console.warn(e); if (e.code === "permission-denied") { unwatch(id); window.LN.removeShared(id); } });
  watchers.set(id, unsub);
}
function unwatch(id) { const u = watchers.get(id); if (u) u(); watchers.delete(id); }
function watchAll() {
  (window.LN.get().notebooks || []).filter(n => n.shared).forEach(n => watch(n.id));
  (window.LN.pairs() || []).filter(p => p.shared).forEach(p => watch(p.id));
}

function edit(id, path, value) {
  if (!state.user) return;
  pending.set([id, ...path].join("|"), { id, path, value });
  if (path[0] === "answers") pending.set([id, "authors", path[1], path[2]].join("|"), { id, path: ["authors", path[1], path[2]], value: value === null ? null : state.user.uid });
  clearTimeout(flushTimer); state.status = "saving"; render();
  flushTimer = setTimeout(flush, 800);
}
async function flush() {
  const byId = new Map();
  pending.forEach(p => { if (!byId.has(p.id)) byId.set(p.id, []); byId.get(p.id).push(p); });
  pending.clear();
  for (const [id, list] of byId) {
    const args = [];
    list.forEach(p => { args.push(new fb.FieldPath(...p.path.map(String)), p.value === null ? fb.deleteField() : p.value); });
    try { await fb.updateDoc(sref(id), ...args); setStatus("synced"); }
    catch (e) { console.warn(e); setStatus("error", e.code || ""); }
  }
}

async function share(nb) {
  const uid = state.user.uid, S = window.LN.get(), d = S.data[nb.id] || {};
  const authors = {};
  Object.entries(d.answers || {}).forEach(([t, a]) => { authors[t] = {}; Object.keys(a).forEach(i => authors[t][i] = uid); });
  const doc = { owner: uid, members: [uid], memberInfo: { [uid]: me() }, inviteCode: newCode(), known: nb.known, targetName: nb.targetName, color: nb.color || "",
    answers: d.answers || {}, authors, custom: d.custom || {}, notes: d.notes || {}, created: fb.serverTimestamp() };
  await fb.setDoc(sref(nb.id), doc);
  window.LN.markShared(nb.id, { owner: uid, members: [uid], memberInfo: doc.memberInfo, inviteCode: doc.inviteCode });
  watch(nb.id);
}
async function join(id, code) {
  const uid = state.user.uid;
  await fb.updateDoc(sref(id), "members", fb.arrayUnion(uid), new fb.FieldPath("memberInfo", uid), me(), "lastJoinCode", code);
  const snap = await fb.getDoc(sref(id));
  const data = snap.data();
  if (data.kind === "dialog") {
    const myProfile = window.LN.get().dialog?.me || { g: "", p: {} };
    data.players = { ...(data.players || {}), [uid]: myProfile };
    window.LN.addPair({ id, shared: true, created: Date.now() }, data);
    await fb.updateDoc(sref(id), new fb.FieldPath("players", uid), myProfile);
    watch(id);
    return "dialog";
  }
  window.LN.addShared({ id, known: data.known, targetName: data.targetName, color: data.color, shared: true, created: Date.now() }, data);
  watch(id);
  return "notebook";
}
// Dialogue partners: stored like a shared notebook (same security rules), with kind "dialog".
async function createPair(id, profile) {
  const uid = state.user.uid;
  const doc = { kind: "dialog", owner: uid, members: [uid], memberInfo: { [uid]: me() }, inviteCode: newCode(), known: "de", targetName: "Arabisch Dialoge",
    players: { [uid]: profile }, done: {}, roles: {}, created: fb.serverTimestamp() };
  await fb.setDoc(sref(id), doc);
  window.LN.addPair({ id, shared: true, created: Date.now() }, { ...doc, created: null });
  watch(id);
}
async function leave(nb) {
  const uid = state.user.uid; unwatch(nb.id);
  await fb.updateDoc(sref(nb.id), "members", fb.arrayRemove(uid), new fb.FieldPath("memberInfo", uid), fb.deleteField());
}
async function removeMember(nb, uid) {
  await fb.updateDoc(sref(nb.id), "members", fb.arrayRemove(uid), new fb.FieldPath("memberInfo", uid), fb.deleteField());
}
async function resetInvite(nb) {
  const code = newCode();
  await fb.updateDoc(sref(nb.id), "inviteCode", code);
  nb.inviteCode = code;
}
async function deleteShared(nb) { unwatch(nb.id); if (nb.owner === state.user?.uid) await fb.deleteDoc(sref(nb.id)); else await leave(nb); }

let authKnown = false;
window.LN.cloud = {
  ready: () => authKnown,
  uid: () => state.user ? state.user.uid : null,
  signIn: () => fb ? signIn() : alert(t("err")),
  edit, share, join, leave, removeMember, resetInvite, deleteShared, createPair,
};

async function signIn() {
  try { await fb.signInWithPopup(auth, new fb.GoogleAuthProvider()); }
  catch (e) {
    if (e.code === "auth/popup-blocked") return fb.signInWithRedirect(auth, new fb.GoogleAuthProvider());
    if (e.code !== "auth/popup-closed-by-user" && e.code !== "auth/cancelled-popup-request") { console.warn(e); alert(`${t("err")}: ${e.code}`); }
  }
}
async function signOutNow() {
  if (!confirm(t("outQ"))) return;
  clearTimeout(timer);
  if (pending.size) await flush();
  [...watchers.keys()].forEach(unwatch);
  await fb.signOut(auth);
  window.LN.clear();
}

async function start() {
  render();
  window.addEventListener("hashchange", () => setTimeout(render)); // keeps labels in the notebook's language
  try { await load(); } catch (e) { console.warn("Firebase not reachable, working offline.", e); authKnown = true; window.dispatchEvent(new Event("ln-auth")); return; }
  // Every local save is sent to the cloud, bundled so typing doesn't write on every key.
  window.LN.onSave = S => { if (!state.user) return; clearTimeout(timer); state.status = "saving"; render(); timer = setTimeout(() => push(window.LN.get()), 1200); };
  window.addEventListener("pagehide", () => { if (pending.size) flush(); });
  fb.onAuthStateChanged(auth, async user => {
    state.user = user; render();
    if (!user) { [...watchers.keys()].forEach(unwatch); authKnown = true; window.dispatchEvent(new Event("ln-auth")); return; }
    try {
      const snap = await fb.getDoc(ref());
      const remote = snap.exists() ? JSON.parse(snap.data().state || "null") : null;
      const merged = remote ? window.LN.merge(remote) : window.LN.get();
      // Upload if this device had something the cloud did not.
      if (!remote || JSON.stringify(strip(merged)) !== JSON.stringify(remote)) await push(merged);
      else setStatus("synced");
    } catch (e) { console.warn(e); setStatus("error", e.code || ""); }
    watchAll();
    authKnown = true; window.dispatchEvent(new Event("ln-auth"));
  });
}
start();
