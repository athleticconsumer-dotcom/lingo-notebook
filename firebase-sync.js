// Cloud sync with Firebase: sign in with Google and your notebooks are saved to Firestore,
// so they are the same on every device. Without signing in, everything still works locally.
// Uses the Firebase project "dar A" (same as the dar app), collection "lingoNotebook".
const firebaseConfig = {
  apiKey: "AIzaSyCJwoLkDn2W_uN-hlqjMk6kqbhKdZBPT_g",
  authDomain: "dar-a-87f01.firebaseapp.com",
  projectId: "dar-a-87f01",
  storageBucket: "dar-a-87f01.firebasestorage.app",
  messagingSenderId: "926469855723",
  appId: "1:926469855723:web:6676d875c756487afa61ae",
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
async function push(S) {
  if (!state.user) return;
  setStatus("saving");
  try {
    await fb.setDoc(ref(), { state: JSON.stringify(S), updated: S.updated || Date.now(), updatedAt: fb.serverTimestamp() });
    setStatus("synced");
  } catch (e) { console.warn(e); setStatus("error", e.code || ""); }
}

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
  await fb.signOut(auth);
  window.LN.clear();
}

async function start() {
  render();
  window.addEventListener("hashchange", () => setTimeout(render)); // keeps labels in the notebook's language
  try { await load(); } catch (e) { console.warn("Firebase not reachable, working offline.", e); return; }
  // Every local save is sent to the cloud, bundled so typing doesn't write on every key.
  window.LN.onSave = S => { if (!state.user) return; clearTimeout(timer); state.status = "saving"; render(); timer = setTimeout(() => push(S), 1200); };
  fb.onAuthStateChanged(auth, async user => {
    state.user = user; render();
    if (!user) return;
    try {
      const snap = await fb.getDoc(ref());
      const remote = snap.exists() ? JSON.parse(snap.data().state || "null") : null;
      const merged = remote ? window.LN.merge(remote) : window.LN.get();
      // Upload if this device had something the cloud did not.
      if (!remote || JSON.stringify(merged) !== JSON.stringify(remote)) await push(merged);
      else setStatus("synced");
    } catch (e) { console.warn(e); setStatus("error", e.code || ""); }
  });
}
start();
