// Dota Review App - static, GitHub Pages friendly
// Data shape: { matchId: string, rating: number, slides: [{ image: string(base64 or url), notes: string[] }] }

const state = {
  data: { matchId: "", rating: 0, slides: [] },
  slideIndex: 0,
  edit: false,
  autosaveKey: null,
};

// Elements
const $ = (sel) => document.querySelector(sel);
const matchIdInput = $("#matchIdInput");
const loadBtn = $("#loadBtn");
const newBtn = $("#newBtn");
const editToggle = $("#editToggle");
const ratingInput = $("#ratingInput");
const ratingValue = $("#ratingValue");
const addSlideBtn = $("#addSlideBtn");
const exportBtn = $("#exportBtn");
const publishBtn = $("#publishBtn");
const helpBtn = $("#helpBtn");
const helpDialog = $("#helpDialog");
const imageEl = $("#slideImage");
const navPrev = $("#navPrev");
const navNext = $("#navNext");
const pasteHint = $("#pasteHint");
const notesList = $("#notesList");
const noteInput = $("#noteInput");
const addNoteBtn = $("#addNoteBtn");
const clearNotesBtn = $("#clearNotesBtn");
const emptyState = $("#emptyState");
const emptyAddBtn = $("#emptyAddBtn");
const filmstrip = $("#filmstrip");

const ghOwner = $("#ghOwner");
const ghRepo = $("#ghRepo");
const ghBranch = $("#ghBranch");
const ghToken = $("#ghToken");

function setEdit(on){
  state.edit = !!on;
  editToggle.checked = state.edit;
  renderSlide();
}

function updateAutosaveKey(){
  state.autosaveKey = state.data.matchId ? `dota-review:${state.data.matchId}` : null;
}

function newMatch(matchId){
  state.data = { matchId: String(matchId || Date.now()), rating: 0, slides: [] };
  state.slideIndex = 0;
  updateAutosaveKey();
  renderAll();
}

async function loadMatch(matchId){
  const id = String(matchId || matchIdInput.value || "").trim();
  if(!id){ return; }
  // Try localStorage first
  const local = localStorage.getItem(`dota-review:${id}`);
  if(local){
    try { state.data = JSON.parse(local); } catch { /* ignore */ }
  }
  if(!state.data || state.data.matchId !== id){
    // try to fetch from data/{id}.json
    try{
      const res = await fetch(`./data/${encodeURIComponent(id)}.json`, { cache: "no-store" });
      if(res.ok){ state.data = await res.json(); }
    }catch{ /* ignore */ }
  }
  if(!state.data || state.data.matchId !== id){
    state.data = { matchId: id, rating: 0, slides: [] };
  }
  state.slideIndex = 0;
  updateAutosaveKey();
  renderAll();
}

function saveLocal(){
  if(!state.autosaveKey) return;
  try{ localStorage.setItem(state.autosaveKey, JSON.stringify(state.data)); }catch{}
}

function renderAll(){
  matchIdInput.value = state.data.matchId || "";
  ratingInput.value = String(state.data.rating || 0);
  ratingValue.textContent = String(state.data.rating || 0);
  renderSlide();
  renderFilmstrip();
  saveLocal();
}

function currentSlide(){
  return state.data.slides[state.slideIndex];
}

function renderSlide(){
  const slide = currentSlide();
  if(!slide){
    imageEl.src = "";
    emptyState.hidden = false;
    notesList.innerHTML = "";
    pasteHint.style.display = state.edit ? "flex" : "none";
    return;
  }
  emptyState.hidden = true;
  imageEl.src = slide.image || "";
  pasteHint.style.display = (state.edit && !slide.image) ? "flex" : "none";
  notesList.innerHTML = "";
  for(const note of slide.notes || []){
    const li = document.createElement("li");
    const b = document.createElement("div"); b.className = "bullet"; b.textContent = "•";
    const t = document.createElement("div"); t.className = "text"; t.textContent = note;
    const del = document.createElement("button"); del.className = "del"; del.textContent = "×";
    del.addEventListener("click", () => { removeNote(note); });
    li.appendChild(b); li.appendChild(t); li.appendChild(del);
    notesList.appendChild(li);
  }
}

function renderFilmstrip(){
  filmstrip.innerHTML = "";
  state.data.slides.forEach((s, i) => {
    const th = document.createElement("div"); th.className = "thumb" + (i===state.slideIndex ? " active" : "");
    const img = document.createElement("img"); img.src = s.image || "";
    const idx = document.createElement("div"); idx.className = "index"; idx.textContent = String(i+1);
    th.appendChild(img); th.appendChild(idx);
    th.addEventListener("click", () => { state.slideIndex = i; renderSlide(); renderFilmstrip(); });
    filmstrip.appendChild(th);
  });
}

function addSlideFromImage(src){
  state.data.slides.push({ image: src, notes: [] });
  state.slideIndex = state.data.slides.length - 1;
  renderAll();
}

function addEmptySlide(){
  state.data.slides.push({ image: "", notes: [] });
  state.slideIndex = state.data.slides.length - 1;
  renderAll();
}

function addNote(){
  const val = (noteInput.value || "").trim();
  if(!val) return;
  const slide = currentSlide();
  if(!slide){ return; }
  slide.notes.push(val);
  noteInput.value = "";
  renderSlide();
  saveLocal();
}

function removeNote(text){
  const slide = currentSlide();
  if(!slide) return;
  slide.notes = (slide.notes || []).filter(n => n !== text);
  renderSlide();
  saveLocal();
}

function nav(delta){
  const len = state.data.slides.length;
  if(!len) return;
  state.slideIndex = (state.slideIndex + delta + len) % len;
  renderSlide();
  renderFilmstrip();
}

function toJSONBlob(){
  const json = JSON.stringify(state.data, null, 2);
  return new Blob([json], { type: "application/json" });
}

function exportJSON(){
  const blob = toJSONBlob();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${state.data.matchId || "match"}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

async function handlePaste(e){
  if(!state.edit) return;
  const items = e.clipboardData?.items || [];
  for(const it of items){
    if(it.kind === "file" && it.type.startsWith("image/")){
      const file = it.getAsFile();
      if(file) { await fileToDataUrl(file).then(addSlideFromImage); }
      e.preventDefault();
      return;
    }
    if(it.kind === "string" && it.type === "text/plain"){
      it.getAsString((txt) => {
        const url = txt.trim();
        if(/^https?:\/\//.test(url)){
          addSlideFromImage(url);
          saveLocal();
        }
      });
    }
  }
}

function setupDragDrop(){
  const wrap = document.getElementById("imageWrap");
  ["dragenter","dragover"].forEach(ev => wrap.addEventListener(ev, e => { if(state.edit){ e.preventDefault(); wrap.classList.add("drag"); } }));
  ["dragleave","drop"].forEach(ev => wrap.addEventListener(ev, e => { wrap.classList.remove("drag"); }));
  wrap.addEventListener("drop", async (e) => {
    if(!state.edit) return;
    e.preventDefault();
    const files = Array.from(e.dataTransfer?.files || []).filter(f => f.type.startsWith("image/"));
    for(const f of files){ const url = await fileToDataUrl(f); addSlideFromImage(url); }
  });
}

function fileToDataUrl(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function publishToGitHub(){
  const owner = ghOwner.value.trim();
  const repo = ghRepo.value.trim();
  const branch = ghBranch.value.trim() || "gh-pages";
  const token = ghToken.value.trim();
  const path = `data/${encodeURIComponent(state.data.matchId)}.json`;
  if(!owner || !repo || !token){ alert("Enter owner, repo, and token"); return; }
  const api = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  // Get existing file sha if present
  let sha = undefined;
  try{
    const headRes = await fetch(`${api}?ref=${encodeURIComponent(branch)}`, { headers: { Authorization: `token ${token}` } });
    if(headRes.ok){ const j = await headRes.json(); sha = j.sha; }
  }catch{}

  const content = await blobToBase64(toJSONBlob());
  const body = { message: `Add/Update review ${state.data.matchId}`, content, branch };
  if(sha) body.sha = sha;

  const res = await fetch(api, {
    method: "PUT",
    headers: { Authorization: `token ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if(!res.ok){
    const t = await res.text();
    alert(`Publish failed: ${res.status} ${t}`);
    return;
  }
  alert("Published to GitHub.");
}

function blobToBase64(blob){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = String(reader.result).split(",")[1] || "";
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function onKey(e){
  if(e.target && ["INPUT","TEXTAREA"].includes(e.target.tagName)) return;
  if(e.key === "ArrowLeft") nav(-1);
  if(e.key === "ArrowRight") nav(1);
}

// Wire up
loadBtn.addEventListener("click", () => loadMatch());
newBtn.addEventListener("click", () => { newMatch(""); setEdit(true); });
matchIdInput.addEventListener("keydown", (e) => { if(e.key === "Enter") loadMatch(); });
editToggle.addEventListener("change", () => setEdit(editToggle.checked));
ratingInput.addEventListener("input", () => { state.data.rating = Number(ratingInput.value); ratingValue.textContent = ratingInput.value; saveLocal(); });
addSlideBtn.addEventListener("click", addEmptySlide);
exportBtn.addEventListener("click", exportJSON);
publishBtn?.addEventListener("click", publishToGitHub);
helpBtn.addEventListener("click", () => helpDialog.showModal());
document.addEventListener("keydown", onKey);
document.addEventListener("paste", handlePaste);
noteInput.addEventListener("keydown", (e) => { if(e.key === "Enter"){ e.preventDefault(); addNote(); }});
addNoteBtn.addEventListener("click", addNote);
clearNotesBtn.addEventListener("click", () => { const s = currentSlide(); if(!s) return; s.notes = []; renderSlide(); saveLocal(); });
navPrev.addEventListener("click", () => nav(-1));
navNext.addEventListener("click", () => nav(1));
emptyAddBtn.addEventListener("click", addEmptySlide);
setupDragDrop();

// Initial load: if URL has ?match=123 or hash
const url = new URL(location.href);
const q = url.searchParams.get("match") || (location.hash.startsWith("#") ? location.hash.slice(1) : "");
if(q){ loadMatch(q); }
else { newMatch(""); setEdit(true); }


