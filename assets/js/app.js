// Dota Review App - static, GitHub Pages friendly
// Data shape: { matchId: string, rating: number, hero?: string, slides: [{ image: string(base64 or url), notes: string[] }] }

// Dota 2 Heroes data
const DOTA_HEROES = [
  { id: 'antimage', name: 'Anti-Mage', localized_name: 'Anti-Mage' },
  { id: 'axe', name: 'Axe', localized_name: 'Axe' },
  { id: 'bane', name: 'Bane', localized_name: 'Bane' },
  { id: 'bloodseeker', name: 'Bloodseeker', localized_name: 'Bloodseeker' },
  { id: 'crystal_maiden', name: 'Crystal Maiden', localized_name: 'Crystal Maiden' },
  { id: 'drow_ranger', name: 'Drow Ranger', localized_name: 'Drow Ranger' },
  { id: 'earthshaker', name: 'Earthshaker', localized_name: 'Earthshaker' },
  { id: 'juggernaut', name: 'Juggernaut', localized_name: 'Juggernaut' },
  { id: 'mirana', name: 'Mirana', localized_name: 'Mirana' },
  { id: 'morphling', name: 'Morphling', localized_name: 'Morphling' },
  { id: 'nevermore', name: 'Shadow Fiend', localized_name: 'Shadow Fiend' },
  { id: 'phantom_lancer', name: 'Phantom Lancer', localized_name: 'Phantom Lancer' },
  { id: 'puck', name: 'Puck', localized_name: 'Puck' },
  { id: 'pudge', name: 'Pudge', localized_name: 'Pudge' },
  { id: 'razor', name: 'Razor', localized_name: 'Razor' },
  { id: 'sand_king', name: 'Sand King', localized_name: 'Sand King' },
  { id: 'storm_spirit', name: 'Storm Spirit', localized_name: 'Storm Spirit' },
  { id: 'sven', name: 'Sven', localized_name: 'Sven' },
  { id: 'tiny', name: 'Tiny', localized_name: 'Tiny' },
  { id: 'vengefulspirit', name: 'Vengeful Spirit', localized_name: 'Vengeful Spirit' },
  { id: 'windrunner', name: 'Windrunner', localized_name: 'Windrunner' },
  { id: 'zeus', name: 'Zeus', localized_name: 'Zeus' },
  { id: 'kunkka', name: 'Kunkka', localized_name: 'Kunkka' },
  { id: 'kez', name: 'Kez', localized_name: 'Kez' },
  { id: 'lina', name: 'Lina', localized_name: 'Lina' },
  { id: 'lion', name: 'Lion', localized_name: 'Lion' },
  { id: 'shadow_shaman', name: 'Shadow Shaman', localized_name: 'Shadow Shaman' },
  { id: 'slardar', name: 'Slardar', localized_name: 'Slardar' },
  { id: 'tidehunter', name: 'Tidehunter', localized_name: 'Tidehunter' },
  { id: 'witch_doctor', name: 'Witch Doctor', localized_name: 'Witch Doctor' },
  { id: 'lich', name: 'Lich', localized_name: 'Lich' },
  { id: 'riki', name: 'Riki', localized_name: 'Riki' },
  { id: 'enigma', name: 'Enigma', localized_name: 'Enigma' },
  { id: 'tinker', name: 'Tinker', localized_name: 'Tinker' },
  { id: 'sniper', name: 'Sniper', localized_name: 'Sniper' },
  { id: 'necrolyte', name: 'Necrophos', localized_name: 'Necrophos' },
  { id: 'warlock', name: 'Warlock', localized_name: 'Warlock' },
  { id: 'beastmaster', name: 'Beastmaster', localized_name: 'Beastmaster' },
  { id: 'queenofpain', name: 'Queen of Pain', localized_name: 'Queen of Pain' },
  { id: 'venomancer', name: 'Venomancer', localized_name: 'Venomancer' },
  { id: 'faceless_void', name: 'Faceless Void', localized_name: 'Faceless Void' },
  { id: 'skeleton_king', name: 'Wraith King', localized_name: 'Wraith King' },
  { id: 'death_prophet', name: 'Death Prophet', localized_name: 'Death Prophet' },
  { id: 'phantom_assassin', name: 'Phantom Assassin', localized_name: 'Phantom Assassin' },
  { id: 'pugna', name: 'Pugna', localized_name: 'Pugna' },
  { id: 'templar_assassin', name: 'Templar Assassin', localized_name: 'Templar Assassin' },
  { id: 'viper', name: 'Viper', localized_name: 'Viper' },
  { id: 'luna', name: 'Luna', localized_name: 'Luna' },
  { id: 'dragon_knight', name: 'Dragon Knight', localized_name: 'Dragon Knight' },
  { id: 'dazzle', name: 'Dazzle', localized_name: 'Dazzle' },
  { id: 'rattletrap', name: 'Clockwerk', localized_name: 'Clockwerk' },
  { id: 'leshrac', name: 'Leshrac', localized_name: 'Leshrac' },
  { id: 'furion', name: 'Nature\'s Prophet', localized_name: 'Nature\'s Prophet' },
  { id: 'life_stealer', name: 'Lifestealer', localized_name: 'Lifestealer' },
  { id: 'dark_seer', name: 'Dark Seer', localized_name: 'Dark Seer' },
  { id: 'clinkz', name: 'Clinkz', localized_name: 'Clinkz' },
  { id: 'omniknight', name: 'Omniknight', localized_name: 'Omniknight' },
  { id: 'enchantress', name: 'Enchantress', localized_name: 'Enchantress' },
  { id: 'huskar', name: 'Huskar', localized_name: 'Huskar' },
  { id: 'night_stalker', name: 'Night Stalker', localized_name: 'Night Stalker' },
  { id: 'broodmother', name: 'Broodmother', localized_name: 'Broodmother' },
  { id: 'bounty_hunter', name: 'Bounty Hunter', localized_name: 'Bounty Hunter' },
  { id: 'weaver', name: 'Weaver', localized_name: 'Weaver' },
  { id: 'jakiro', name: 'Jakiro', localized_name: 'Jakiro' },
  { id: 'batrider', name: 'Batrider', localized_name: 'Batrider' },
  { id: 'chen', name: 'Chen', localized_name: 'Chen' },
  { id: 'spectre', name: 'Spectre', localized_name: 'Spectre' },
  { id: 'ancient_apparition', name: 'Ancient Apparition', localized_name: 'Ancient Apparition' },
  { id: 'doom_bringer', name: 'Doom', localized_name: 'Doom' },
  { id: 'ursa', name: 'Ursa', localized_name: 'Ursa' },
  { id: 'spirit_breaker', name: 'Spirit Breaker', localized_name: 'Spirit Breaker' },
  { id: 'gyrocopter', name: 'Gyrocopter', localized_name: 'Gyrocopter' },
  { id: 'alchemist', name: 'Alchemist', localized_name: 'Alchemist' },
  { id: 'invoker', name: 'Invoker', localized_name: 'Invoker' },
  { id: 'silencer', name: 'Silencer', localized_name: 'Silencer' },
  { id: 'obsidian_destroyer', name: 'Outworld Devourer', localized_name: 'Outworld Devourer' },
  { id: 'lycan', name: 'Lycan', localized_name: 'Lycan' },
  { id: 'brewmaster', name: 'Brewmaster', localized_name: 'Brewmaster' },
  { id: 'shadow_demon', name: 'Shadow Demon', localized_name: 'Shadow Demon' },
  { id: 'lone_druid', name: 'Lone Druid', localized_name: 'Lone Druid' },
  { id: 'chaos_knight', name: 'Chaos Knight', localized_name: 'Chaos Knight' },
  { id: 'meepo', name: 'Meepo', localized_name: 'Meepo' },
  { id: 'treant', name: 'Treant Protector', localized_name: 'Treant Protector' },
  { id: 'ogre_magi', name: 'Ogre Magi', localized_name: 'Ogre Magi' },
  { id: 'undying', name: 'Undying', localized_name: 'Undying' },
  { id: 'rubick', name: 'Rubick', localized_name: 'Rubick' },
  { id: 'disruptor', name: 'Disruptor', localized_name: 'Disruptor' },
  { id: 'nyx_assassin', name: 'Nyx Assassin', localized_name: 'Nyx Assassin' },
  { id: 'naga_siren', name: 'Naga Siren', localized_name: 'Naga Siren' },
  { id: 'keeper_of_the_light', name: 'Keeper of the Light', localized_name: 'Keeper of the Light' },
  { id: 'wisp', name: 'Io', localized_name: 'Io' },
  { id: 'visage', name: 'Visage', localized_name: 'Visage' },
  { id: 'slark', name: 'Slark', localized_name: 'Slark' },
  { id: 'medusa', name: 'Medusa', localized_name: 'Medusa' },
  { id: 'troll_warlord', name: 'Troll Warlord', localized_name: 'Troll Warlord' },
  { id: 'centaur', name: 'Centaur Warrunner', localized_name: 'Centaur Warrunner' },
  { id: 'magnataur', name: 'Magnus', localized_name: 'Magnus' },
  { id: 'shredder', name: 'Timbersaw', localized_name: 'Timbersaw' },
  { id: 'bristleback', name: 'Bristleback', localized_name: 'Bristleback' },
  { id: 'tusk', name: 'Tusk', localized_name: 'Tusk' },
  { id: 'skywrath_mage', name: 'Skywrath Mage', localized_name: 'Skywrath Mage' },
  { id: 'abaddon', name: 'Abaddon', localized_name: 'Abaddon' },
  { id: 'elder_titan', name: 'Elder Titan', localized_name: 'Elder Titan' },
  { id: 'legion_commander', name: 'Legion Commander', localized_name: 'Legion Commander' },
  { id: 'techies', name: 'Techies', localized_name: 'Techies' },
  { id: 'ember_spirit', name: 'Ember Spirit', localized_name: 'Ember Spirit' },
  { id: 'earth_spirit', name: 'Earth Spirit', localized_name: 'Earth Spirit' },
  { id: 'abyssal_underlord', name: 'Underlord', localized_name: 'Underlord' },
  { id: 'terrorblade', name: 'Terrorblade', localized_name: 'Terrorblade' },
  { id: 'phoenix', name: 'Phoenix', localized_name: 'Phoenix' },
  { id: 'oracle', name: 'Oracle', localized_name: 'Oracle' },
  { id: 'winter_wyvern', name: 'Winter Wyvern', localized_name: 'Winter Wyvern' },
  { id: 'arc_warden', name: 'Arc Warden', localized_name: 'Arc Warden' },
  { id: 'monkey_king', name: 'Monkey King', localized_name: 'Monkey King' },
  { id: 'dark_willow', name: 'Dark Willow', localized_name: 'Dark Willow' },
  { id: 'pangolier', name: 'Pangolier', localized_name: 'Pangolier' },
  { id: 'grimstroke', name: 'Grimstroke', localized_name: 'Grimstroke' },
  { id: 'hoodwink', name: 'Hoodwink', localized_name: 'Hoodwink' },
  { id: 'void_spirit', name: 'Void Spirit', localized_name: 'Void Spirit' },
  { id: 'snapfire', name: 'Snapfire', localized_name: 'Snapfire' },
  { id: 'mars', name: 'Mars', localized_name: 'Mars' },
  { id: 'dawnbreaker', name: 'Dawnbreaker', localized_name: 'Dawnbreaker' },
  { id: 'marci', name: 'Marci', localized_name: 'Marci' },
  { id: 'primal_beast', name: 'Primal Beast', localized_name: 'Primal Beast' },
  { id: 'muerta', name: 'Muerta', localized_name: 'Muerta' },
  { id: 'ringmaster', name: 'Ringmaster', localized_name: 'Ringmaster' }
];

const state = {
  data: { matchId: "", rating: 0, slides: [] },
  slideIndex: 0,
  edit: false,
  autosaveKey: null,
  verified: false,
  selectedNoteIndex: null,
};

// Elements
const $ = (sel) => document.querySelector(sel);
const matchIdInput = $("#matchIdInput");
const editMatchIdBtn = $("#editMatchIdBtn");
const saveMatchIdBtn = $("#saveMatchIdBtn");
const loadBtn = $("#loadBtn");
const newBtn = $("#newBtn");
const editToggle = $("#editToggle");
const ratingInput = $("#ratingInput");
const ratingValue = $("#ratingValue");
const addSlideBtn = $("#addSlideBtn");
const exportBtn = $("#exportBtn");
const publishBtn = $("#publishBtn");
const verifyBtn = $("#verifyBtn");
const deleteSlideBtn = $("#deleteSlideBtn");
const helpBtn = $("#helpBtn");
const helpDialog = $("#helpDialog");
const welcomeDialog = $("#welcomeDialog");
const welcomeSampleBtn = $("#welcomeSampleBtn");
const welcomeNewBtn = $("#welcomeNewBtn");
const imageEl = $("#slideImage");
const navPrev = $("#navPrev");
const navNext = $("#navNext");
const pasteHint = $("#pasteHint");
const notesList = $("#notesList");
const noteInput = $("#noteInput");
const addNoteBtn = $("#addNoteBtn");
const clearNotesBtn = $("#clearNotesBtn");
// slide-level hero removed; match-level hero is `matchHeroSelect`
const emptyState = $("#emptyState");
const emptyAddBtn = $("#emptyAddBtn");
const filmstrip = $("#filmstrip");
const toastContainer = $("#toastContainer");
const showWelcomeBtn = $("#showWelcomeBtn");
const matchHeroSelect = $("#matchHeroSelect");
const matchHeroPortrait = $("#matchHeroPortrait");

const ghOwner = $("#ghOwner");
const ghRepo = $("#ghRepo");
const ghBranch = $("#ghBranch");
const ghToken = $("#ghToken");
const publishProgress = $("#publishProgress");
const progressFill = $("#progressFill");
const progressText = $("#progressText");

// Load saved GitHub credentials (owner/repo/branch/token) if present
function loadSavedCredentials(){
  try{
    // prefer encrypted credentials if present
    const encRaw = localStorage.getItem('dota-review:gh_enc');
    if(encRaw){
      const ecred = JSON.parse(encRaw);
      if(ecred.owner) ghOwner.value = ecred.owner;
      if(ecred.repo) ghRepo.value = ecred.repo;
      if(ecred.branch) ghBranch.value = ecred.branch;
      // store encrypted blob and attempt to prompt for passphrase to auto-fill token
      window._dota_review_saved_encrypted = ecred; // temp global for verify flow
      try{
        // Prompt user to unlock saved credentials so the publish form can be auto-filled
        const pass = prompt('Enter passphrase to decrypt saved GitHub token (Cancel to skip)');
        if(pass){
          decryptToken(pass, ecred.encrypted).then((token) => {
            ghToken.value = token;
            // Persist plain creds for smoother UX (match existing verify flow behavior)
            try{ localStorage.setItem('dota-review:gh', JSON.stringify({ owner: ecred.owner, repo: ecred.repo, branch: ecred.branch, token })); }catch{}
            // attempt silent verification
            verifyAccess({ silent: true });
            showToast('Unlocked saved credentials.');
          }).catch(() => {
            showToast('Failed to decrypt saved credentials. Click Verify to unlock.', 'error');
          });
        } else {
          showToast('Encrypted credentials stored. Click Verify to unlock.', 'info');
        }
      }catch(err){
        // ignore prompt/crypto failures
        showToast('Encrypted credentials present. Click Verify to unlock.');
      }
      return;
    }
    const raw = localStorage.getItem('dota-review:gh');
    if(!raw) return;
    const cred = JSON.parse(raw);
    if(cred.owner) ghOwner.value = cred.owner;
    if(cred.repo) ghRepo.value = cred.repo;
    if(cred.branch) ghBranch.value = cred.branch;
    if(cred.token) ghToken.value = cred.token;
    // attempt silent verification
    if(cred.token){ verifyAccess({ silent: true }); }
  }catch(err){ /* ignore */ }
}

// --- Web Crypto helpers for token encryption ---
async function deriveKey(pass, salt){
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(pass), { name: 'PBKDF2' }, false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, keyMaterial, { name: 'AES-GCM', length: 256 }, false, ['encrypt','decrypt']);
}

function bufToB64(buf){ return btoa(String.fromCharCode(...new Uint8Array(buf))); }
function b64ToBuf(b64){ const s = atob(b64); const arr = new Uint8Array(s.length); for(let i=0;i<s.length;i++) arr[i]=s.charCodeAt(i); return arr.buffer; }

async function encryptToken(pass, token){
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(pass, salt.buffer);
  const enc = new TextEncoder();
  const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(token));
  // store salt|iv|ct as base64 joined by dots
  return `${bufToB64(salt.buffer)}.${bufToB64(iv.buffer)}.${bufToB64(ct)}`;
}

async function decryptToken(pass, data){
  try{
    const [saltB64, ivB64, ctB64] = String(data).split('.');
    if(!saltB64 || !ivB64 || !ctB64) throw new Error('bad');
    const salt = b64ToBuf(saltB64);
    const iv = new Uint8Array(b64ToBuf(ivB64));
    const ct = b64ToBuf(ctB64);
    const key = await deriveKey(pass, salt);
    const dec = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct);
    const decStr = new TextDecoder().decode(dec);
    return decStr;
  }catch(e){ throw e; }
}

function setEdit(on){
  state.edit = !!on;
  editToggle.checked = state.edit;
  setControlsEnabled(state.edit);
  renderSlide();
}

function setControlsEnabled(enabled){
  ratingInput.disabled = !enabled;
  noteInput.disabled = !enabled;
  addNoteBtn.disabled = !enabled;
  clearNotesBtn.disabled = !enabled;
  if(matchHeroSelect) matchHeroSelect.disabled = !enabled;

  // Hide/show buttons based on edit mode
  if(enabled){
    // In edit mode: show Add Slide, Delete Slide, and Publish to GitHub
    addSlideBtn.style.display = 'inline-block';
    deleteSlideBtn.style.display = 'inline-block';
    const githubPanel = $("#githubPanel");
    if(githubPanel) githubPanel.style.display = 'inline-block';

    // Show Edit Match ID button
    if(editMatchIdBtn) editMatchIdBtn.style.display = 'inline-block';
  } else {
    // Not in edit mode: hide Add Slide, Delete Slide, and Publish to GitHub
    addSlideBtn.style.display = 'none';
    deleteSlideBtn.style.display = 'none';
    const githubPanel = $("#githubPanel");
    if(githubPanel) githubPanel.style.display = 'none';

    // Hide edit and save buttons
    if(editMatchIdBtn) editMatchIdBtn.style.display = 'none';
    if(saveMatchIdBtn) saveMatchIdBtn.style.display = 'none';

    // Make match ID readonly
    if(matchIdInput) matchIdInput.readOnly = true;
  }
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

  let loaded = false;

  // Priority order for loading:
  // 1. LocalStorage autosave (highest priority - user's latest changes)
  // 2. LocalStorage backup (for edited match IDs)
  // 3. JSON file from data/ directory

  // Try localStorage autosave first
  const local = localStorage.getItem(`dota-review:${id}`);
  if(local){
    try {
      state.data = JSON.parse(local);
      loaded = true;
    } catch { /* ignore */ }
  }

  // If not found or doesn't match, try local backup
  if(!loaded || (state.data && state.data.matchId !== id)){
    const localBackup = localStorage.getItem(`dota-review:local:${id}`);
    if(localBackup){
      try {
        const metadata = JSON.parse(localBackup);
        // If it's the new metadata format (has matchId property), create a basic structure
        if(metadata.matchId){
          state.data = {
            matchId: metadata.matchId,
            hero: metadata.hero || "",
            rating: metadata.rating || 0,
            slides: [] // We can't restore full slides from metadata, only basic info
          };
          loaded = true;
          console.log("Loaded metadata from localStorage backup");
          showToast(`Loaded basic match info for "${id}". Full data may not be available.`, "info");
        } else {
          // It's the old full JSON format
          state.data = metadata;
          loaded = true;
          console.log("Loaded full data from localStorage backup");
        }
      } catch { /* ignore */ }
    }
  }

  // If still not loaded, try to fetch from data/{id}.json
  if(!loaded || (state.data && state.data.matchId !== id)){
    try{
      showToast("Loading match data...", "info");

      // Determine the correct URL for data files
      let dataUrl = `./data/${encodeURIComponent(id)}.json`;
      if(window.location.hostname.includes('github.io')){
        dataUrl = `${window.location.origin}${window.location.pathname.replace(/\/$/, '')}/data/${encodeURIComponent(id)}.json`;
      }

      const res = await fetch(dataUrl, { cache: "no-store" });
      if(res.ok){
        const jsonText = await res.text();
        // Check if the response is extremely large (potential memory issue)
        if(jsonText.length > 10 * 1024 * 1024) { // 10MB
          showToast("Large file detected - this may take a moment to load", "info");
        }

        const publishedData = JSON.parse(jsonText);
        const publishedSlideCount = publishedData.slides?.length || 0;

        // Check if we have more recent local data
        const localAutosave = localStorage.getItem(`dota-review:${id}`);
        let localSlideCount = 0;
        if(localAutosave){
          try {
            const localData = JSON.parse(localAutosave);
            localSlideCount = localData.slides?.length || 0;
          } catch {}
        }

        state.data = publishedData;
        loaded = true;

        // Warn user if local data has more slides than published
        if(localSlideCount > publishedSlideCount && localSlideCount > 0){
          showToast(`⚠️ Local data has ${localSlideCount} slides, but published has ${publishedSlideCount}. Consider publishing your changes.`, "warning");
        } else {
          showToast(`Loaded match with ${publishedSlideCount} slides`, "info");
        }
      }
    }catch(err){
      console.error("Error loading match:", err);
      showToast("Failed to load match data", "error");
    }
  }

  // If still no data, create new match
  if(!loaded || !state.data || state.data.matchId !== id){
    state.data = { matchId: id, rating: 0, slides: [] };
  }

  state.slideIndex = 0;
  updateAutosaveKey();
  renderAll();
}

// Helper function to check for local vs published data differences
function checkLocalVsPublished(matchId){
  const id = String(matchId || "").trim();
  if(!id) return { localSlides: 0, publishedSlides: 0, hasDifference: false };

  let localSlides = 0;
  let publishedSlides = 0;

  // Check local data
  const localAutosave = localStorage.getItem(`dota-review:${id}`);
  if(localAutosave){
    try {
      const localData = JSON.parse(localAutosave);
      localSlides = localData.slides?.length || 0;
    } catch {}
  }

  // Check published data
  try {
    let dataUrl = `./data/${encodeURIComponent(id)}.json`;
    if(window.location.hostname.includes('github.io')){
      dataUrl = `${window.location.origin}${window.location.pathname.replace(/\/$/, '')}/data/${encodeURIComponent(id)}.json`;
    }

    // This is async, but we'll return what we can synchronously
    fetch(dataUrl, { cache: "no-store" })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if(data && data.slides){
          publishedSlides = data.slides.length;
          if(localSlides > publishedSlides && localSlides > 0){
            showToast(`⚠️ Local: ${localSlides} slides, Published: ${publishedSlides}. Click "Publish to GitHub" to sync.`, "warning");
          }
        }
      })
      .catch(() => {});
  } catch {}

  return {
    localSlides,
    publishedSlides,
    hasDifference: localSlides !== publishedSlides && (localSlides > 0 || publishedSlides > 0)
  };
}

function saveLocal(){
  if(!state.autosaveKey) return;
  try{
    // Save full data to autosave key
    localStorage.setItem(state.autosaveKey, JSON.stringify(state.data));

    // Save metadata backup to avoid quota issues
    if(state.data.matchId){
      const metadata = {
        matchId: state.data.matchId,
        hero: state.data.hero || "",
        rating: state.data.rating || 0,
        slideCount: state.data.slides?.length || 0,
        lastModified: new Date().toISOString()
        // Removed thumbnail to prevent quota issues
      };
      const metadataString = JSON.stringify(metadata);

      // Only save if under size limit
      if(metadataString.length <= 1024 * 1024) { // 1MB limit for metadata
        localStorage.setItem(`dota-review:local:${state.data.matchId}`, metadataString);
      }
    }
  }catch(err){
    // Silently handle quota exceeded errors
    if(err.name === 'QuotaExceededError'){
      console.warn("localStorage quota exceeded, skipping backup save");
    }
  }
}

// Populate hero dropdown
function populateHeroDropdown(){
  if(!matchHeroSelect) return;
  matchHeroSelect.innerHTML = '<option value="">Select hero...</option>';
  DOTA_HEROES.forEach(hero => {
    const option = document.createElement('option');
    option.value = hero.id;
    option.textContent = hero.localized_name;
    matchHeroSelect.appendChild(option);
  });
}

function updateHeroPortrait(){
  if(!matchHeroPortrait) return;
  const heroId = state.data.hero;
  if(heroId){
    const hero = DOTA_HEROES.find(h => h.id === heroId);
    if(hero){
      // Use Steam CDN icon URL format
      // Most heroes use {heroId}_icon.png format
      let iconUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${heroId}_icon.png`;

      // Handle special cases where icon format might be different
      if(heroId === 'kez'){
        // Kez uses full image as fallback since icon might not be available
        iconUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${heroId}_full.png`;
      }

      matchHeroPortrait.innerHTML = `<img src="${iconUrl}" alt="${hero.localized_name}" title="${hero.localized_name}" onerror="this.src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${heroId}_full.png'">`;
      matchHeroPortrait.style.display = '';
    } else {
      matchHeroPortrait.style.display = 'none';
    }
  } else {
    matchHeroPortrait.style.display = 'none';
  }
}

function renderAll(){
  matchIdInput.value = state.data.matchId || "";
  // Set readonly based on edit mode and whether we're currently editing
  if(!state.edit){
    matchIdInput.readOnly = true;
  } else if(state.edit && saveMatchIdBtn.style.display === 'none'){
    // If in edit mode but save button is not visible, make readonly
    matchIdInput.readOnly = true;
  }
  ratingInput.value = String(state.data.rating || 0);
  // match-level hero
  if(matchHeroSelect){
    populateHeroDropdown();
    matchHeroSelect.value = state.data.hero || "";
    matchHeroSelect.disabled = !state.edit;
  }
  updateHeroPortrait();
  ratingValue.textContent = String(state.data.rating || 0);
  renderSlide();
  renderFilmstrip();
  saveLocal();
  updateUrl();
  updateTitle();
}

function currentSlide(){
  return state.data.slides[state.slideIndex];
}

function renderSlide(){
  const slide = currentSlide();
  // Show empty state only when there are absolutely no slides for this match
  try{
    const hasSlides = !!(state.data.slides && state.data.slides.length > 0);
    // use style.display instead of hidden attribute to avoid CSS specificity hiding
    emptyState.style.display = hasSlides ? 'none' : '';
  }catch{}
  const slideExists = !!(state.data.slides && state.data.slides.length > 0 && state.data.slides[state.slideIndex]);
  if(!slideExists){
    imageEl.src = "";
    notesList.innerHTML = "";
    pasteHint.style.display = state.edit ? "flex" : "none";
    return;
  }
  const cur = state.data.slides[state.slideIndex];

  // Add error handling for large images
  const loadImage = () => {
    try {
      imageEl.src = cur.image || "";
      imageEl.onerror = () => {
        console.warn(`Failed to load slide ${state.slideIndex + 1} - possibly due to memory limits`);
        imageEl.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%230e1216'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='%23cf2e2e' font-size='16'%3EImage too large to display%3C/text%3E%3Ctext x='200' y='165' text-anchor='middle' fill='%239aa7b2' font-size='12'%3EUse navigation arrows to view other slides%3C/text%3E%3C/svg%3E";
        showToast("Slide image too large to display. Try navigating to other slides.", "error");
      };
    } catch (e) {
      console.error("Error loading slide image:", e);
      imageEl.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%230e1216'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='%23cf2e2e' font-size='16'%3EError loading image%3C/text%3E%3Ctext x='200' y='165' text-anchor='middle' fill='%239aa7b2' font-size='12'%3EPlease try refreshing the page%3C/text%3E%3C/svg%3E";
    }
  };

  loadImage();
  pasteHint.style.display = (state.edit && !cur.image) ? "flex" : "none";
  notesList.innerHTML = "";
  for(let i = 0; i < (cur.notes || []).length; i++){
    const note = cur.notes[i];
    const li = document.createElement("li");
    const b = document.createElement("div"); b.className = "bullet"; b.textContent = "•";
    const sentiment = document.createElement('div'); sentiment.className = 'sentiment';
    // note may be stored as either string or {text, sentiment}
    let noteText = '';
    let noteSentiment = 'neutral'; // default to neutral
    if(typeof note === 'string') { noteText = note; noteSentiment = 'neutral'; }
    else if(note && typeof note === 'object'){ noteText = note.text || ''; noteSentiment = note.sentiment || 'neutral'; }
    const t = document.createElement("div"); t.className = "text";
    if(state.edit){
      t.contentEditable = true;
      t.spellcheck = false;
      t.textContent = noteText;
      sentiment.textContent = noteSentiment === 'positive' ? '👍' : (noteSentiment === 'negative' ? '👎' : (noteSentiment === 'neutral' ? '🟡' : ''));
      // reflect sentiment on bullet for clearer visibility
      b.className = 'bullet ' + (noteSentiment || '');
      sentiment.title = noteSentiment || '';

      // when clicking the note text, mark this note as selected so the input radios reflect it
      t.addEventListener('focus', () => {
        state.selectedNoteIndex = i;
        syncNoteSentimentToControls(i);
      });
      t.addEventListener('click', () => {
        state.selectedNoteIndex = i;
        syncNoteSentimentToControls(i);
      });

      sentiment.addEventListener('click', () => {
        if(!state.edit) return; // only interactive in edit mode
        // cycle sentiment: '' -> positive -> neutral -> negative -> ''
        const next = noteSentiment === '' ? 'positive' : (noteSentiment === 'positive' ? 'neutral' : (noteSentiment === 'neutral' ? 'negative' : ''));
        noteSentiment = next;
        sentiment.textContent = noteSentiment === 'positive' ? '👍' : (noteSentiment === 'negative' ? '👎' : (noteSentiment === 'neutral' ? '🟡' : ''));
        b.className = 'bullet ' + (noteSentiment || '');
        sentiment.title = noteSentiment || '';
        // persist back
        cur.notes[i] = { text: String(t.textContent || '').trim(), sentiment: noteSentiment };
        saveLocal();
        // keep controls in sync
        state.selectedNoteIndex = i; syncNoteSentimentToControls(i);
      });
      // save on blur
      t.addEventListener("blur", (ev) => {
        const v = String(ev.target.textContent || "").trim();
        cur.notes[i] = { text: v, sentiment: noteSentiment };
        saveLocal();
      });
      // Save on Enter and prevent newline
      t.addEventListener("keydown", (ev) => {
        if(ev.key === "Enter"){ ev.preventDefault(); t.blur(); }
      });
    } else {
      // show sentiment when not editing
      if(typeof note === 'string'){ t.textContent = note; sentiment.textContent = '🟡'; b.className = 'bullet neutral'; }
      else { t.textContent = note.text || ''; sentiment.textContent = note.sentiment === 'positive' ? '👍' : (note.sentiment === 'negative' ? '👎' : (note.sentiment === 'neutral' ? '🟡' : '🟡')); b.className = 'bullet ' + (note.sentiment || 'neutral'); }
    }
    const del = document.createElement("button"); del.className = "del"; del.textContent = "×";
    del.addEventListener("click", () => { removeNoteAt(i); });
    li.appendChild(b); li.appendChild(t); li.appendChild(sentiment); li.appendChild(del);
    notesList.appendChild(li);
  }
  // keep input radios in sync with selected note (if any)
  if(state.selectedNoteIndex !== null && state.selectedNoteIndex !== undefined){
    // Validate that the selected note still exists
    if(state.selectedNoteIndex >= (cur.notes || []).length){
      state.selectedNoteIndex = null;
    } else {
      syncNoteSentimentToControls(state.selectedNoteIndex);
    }
  }
}

// Focus the editable text element for a given note index (if present)
function focusNoteAt(index){
  try{
    const li = notesList.children[index];
    if(!li) return;
    const t = li.querySelector('.text');
    if(!t) return;
    t.focus();
    // place caret at end
    const range = document.createRange();
    range.selectNodeContents(t);
    range.collapse(false);
    const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
  }catch{}
}

function renderFilmstrip(){
  filmstrip.innerHTML = "";
  state.data.slides.forEach((s, i) => {
    const th = document.createElement("div"); th.className = "thumb" + (i===state.slideIndex ? " active" : "");
    const img = document.createElement("img");

    // Use lazy loading to prevent memory issues with large images
    if (i === state.slideIndex) {
      // Load current slide immediately
      img.src = s.image || "";
    } else {
      // Load other slides on demand
      img.dataset.src = s.image || "";
      img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='72' viewBox='0 0 120 72'%3E%3Crect width='120' height='72' fill='%230e1216'/%3E%3Ctext x='60' y='36' text-anchor='middle' fill='%239aa7b2' font-size='12'%3ESlide " + (i+1) + "%3C/text%3E%3C/svg%3E";
      img.classList.add("lazy-thumb");

      // Load image when thumbnail comes into view or on hover
      const loadImage = () => {
        if (img.dataset.src && !img.src.includes("data:image/svg+xml")) {
          img.src = img.dataset.src;
          delete img.dataset.src;
          img.classList.remove("lazy-thumb");
        }
      };

      th.addEventListener("mouseenter", loadImage);
      th.addEventListener("focus", loadImage);
    }

    const idx = document.createElement("div"); idx.className = "index"; idx.textContent = String(i+1);
    th.appendChild(img); th.appendChild(idx);
    th.addEventListener("click", () => {
      state.slideIndex = i;
      renderSlide();
      renderFilmstrip();
    });
    filmstrip.appendChild(th);
  });
}

function updateUrl(){
  try{
    const url = new URL(window.location.href);
    if(state.data.matchId){ url.searchParams.set("match", state.data.matchId); }
    else { url.searchParams.delete("match"); }
    history.replaceState(null, "", `${url.pathname}?${url.searchParams.toString()}${url.hash}`);
  }catch{}
}

function updateTitle(){
  document.title = state.data.matchId ? `Dota Review – ${state.data.matchId}` : "Dota Review";
}

function addSlideFromImage(src){
  // If there's a current slide without an image, paste into it instead of creating a new slide
  if(!state.data.slides) state.data.slides = [];
  const cur = currentSlide();
  if(cur && !cur.image){
    cur.image = src;
    // Keep current index
    renderAll();
    return;
  }
  state.data.slides.push({ image: src, notes: [] });
  state.slideIndex = state.data.slides.length - 1;
  renderAll();
}

function addEmptySlide(){
  state.data.slides.push({ image: "", notes: [] });
  state.slideIndex = state.data.slides.length - 1;
  renderAll();
}

function deleteCurrentSlide(){
  if(!state.edit){ showToast("Enable Edit to delete slides.", "error"); return; }
  if(!state.data.slides.length) return;
  state.data.slides.splice(state.slideIndex, 1);
  if(state.slideIndex > 0) state.slideIndex -= 1;
  renderAll();
}

function addNote(){
  let val = (noteInput.value || "").trim();
  if(!val) return;
  // Determine sentiment from radio controls, default to neutral
  let sentiment = 'neutral';
  try{
    const sel = document.querySelector('input[name="noteSentiment"]:checked');
    if(sel) sentiment = sel.value;
  }catch{}
  const slide = currentSlide();
  if(!slide){ return; }
  slide.notes.push({ text: val, sentiment });
  noteInput.value = "";
  renderSlide();
  saveLocal();
}

// Sync selected note's sentiment into the input radio controls
function syncNoteSentimentToControls(index){
  try{
    const slide = currentSlide();
    if(!slide || index === null || index === undefined) return;
    const note = slide.notes[index];
    let s = '';
    if(typeof note === 'string') s = '';
    else if(note && typeof note === 'object') s = note.sentiment || '';
    const sel = document.querySelectorAll('input[name="noteSentiment"]');
    sel.forEach(r => { r.checked = (r.value === s); });
    // Clear any previous selected note when syncing
    if(state.selectedNoteIndex !== index){
      state.selectedNoteIndex = index;
    }
  }catch{}
}

// Wire a single change handler for the note sentiment radios that updates the selected note in-place
function wireNoteSentimentControls(){
  try{
    // Attach change listeners directly to each radio button
    const radios = document.querySelectorAll('input[name="noteSentiment"]');
    radios.forEach(radio => {
      radio.addEventListener('change', (ev) => {
        if(state.selectedNoteIndex === null || state.selectedNoteIndex === undefined) return;
        const val = ev.target.value;
        const slide = currentSlide();
        if(!slide) return;
        const idx = state.selectedNoteIndex;
        const note = slide.notes[idx];
        const text = (typeof note === 'string') ? note : (note && note.text) || '';
        // update data
        slide.notes[idx] = val ? { text: text, sentiment: val } : text;
        saveLocal();
        // update DOM in-place so we don't lose focus
        try{
          const li = notesList.children[idx];
          if(li){
            const sentEl = li.querySelector('.sentiment');
            const bullet = li.querySelector('.bullet');
            if(sentEl) sentEl.textContent = val === 'positive' ? '👍' : (val === 'negative' ? '👎' : (val === 'neutral' ? '🟡' : ''));
            if(bullet) bullet.className = 'bullet ' + (val || '');
            // Keep focus on the note text element
            const textEl = li.querySelector('.text');
            if(textEl && document.activeElement !== textEl){
              textEl.focus();
            }
          }
        }catch(e){}
      });
    });
  }catch{}
}

function removeNoteAt(index){
  const slide = currentSlide();
  if(!slide) return;
  if(index < 0 || index >= (slide.notes || []).length) return;
  slide.notes.splice(index, 1);
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
  if(!owner || !repo || !token){ showToast("Enter owner, repo, and token.", "error"); return; }
  const api = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  // Show progress bar
  publishProgress.style.display = 'flex';
  progressFill.style.width = '0%';
  progressText.textContent = 'Preparing...';

  try {
    // Get existing file sha if present
    progressText.textContent = 'Checking existing file...';
    let sha = undefined;
    try{
      const headRes = await fetch(`${api}?ref=${encodeURIComponent(branch)}`, { headers: { Authorization: `token ${token}` } });
      if(headRes.ok){ const j = await headRes.json(); sha = j.sha; }
    }catch{}

    const content = await blobToBase64(toJSONBlob());
    const body = { message: `Add/Update review ${state.data.matchId}`, content, branch };
    if(sha) body.sha = sha;

    // Use XMLHttpRequest for progress tracking
    progressText.textContent = 'Uploading...';
    await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          progressFill.style.width = percentComplete + '%';
          progressText.textContent = `Uploading... ${Math.round(percentComplete)}%`;
        }
      });

      xhr.addEventListener('load', async () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          progressFill.style.width = '100%';
          progressText.textContent = 'Updating index...';

          // Update index.json after successful publish
          try {
            await updateIndexAfterPublish(owner, repo, branch, token, state.data.matchId);
            progressText.textContent = 'Complete!';
          } catch (indexError) {
            console.warn('Failed to update index.json:', indexError);
            progressText.textContent = 'Complete! (Index update failed)';
          }

          setTimeout(() => {
            publishProgress.style.display = 'none';
            showToast("Published to GitHub.");
          }, 500);
          resolve();
        } else {
          reject(new Error(`HTTP ${xhr.status}: ${xhr.responseText}`));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Network error during upload'));
      });

      xhr.open('PUT', api);
      xhr.setRequestHeader('Authorization', `token ${token}`);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(body));
    });

  } catch (error) {
    publishProgress.style.display = 'none';
    showToast(`Publish failed: ${error.message}`, "error");
    console.error(error);
  }
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
  if(e.key === "Delete") deleteCurrentSlide();
}

function onEditToggleChange(){
  if(editToggle.checked){
    // Gate by verification
    if(!state.verified){
      verifyAccess().then(ok => { if(ok){ setEdit(true); } else { editToggle.checked = false; } });
    } else {
      setEdit(true);
    }
  } else {
    setEdit(false);
  }
}

async function verifyAccess({ silent } = { silent: false }){
  const owner = ghOwner.value.trim();
  const repo = ghRepo.value.trim();
  const branch = (ghBranch.value.trim() || "gh-pages");
  const token = ghToken.value.trim();
  if(!owner || !repo || !token){ showToast("Enter owner, repo, and token.", "error"); state.verified = false; updateVerifyUi(); return false; }
  try{
    const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers: { Authorization: `token ${token}` } });
    if(!repoRes.ok){ state.verified = false; updateVerifyUi(); showToast(`Repo access failed (${repoRes.status}).`, "error"); return false; }
    const repoJson = await repoRes.json();
    if(!repoJson.permissions || !repoJson.permissions.push){ state.verified = false; updateVerifyUi(); showToast("Token lacks push permission to repo.", "error"); return false; }
    const brRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${encodeURIComponent(branch)}`, { headers: { Authorization: `token ${token}` } });
    if(!brRes.ok){ state.verified = false; updateVerifyUi(); showToast("Branch not found or no access.", "error"); return false; }
    state.verified = true;
    updateVerifyUi();
    // Persist credentials locally for convenience (plain token) or encrypted
    try{
      const saveEnc = document.getElementById('saveEncrypted')?.checked;
      if(saveEnc){
        // encrypt token with passphrase
        const pass = prompt('Enter passphrase to encrypt token (remember it)');
        if(pass){
          const enc = await encryptToken(pass, token);
          const store = { owner, repo, branch, encrypted: enc };
          localStorage.setItem('dota-review:gh_enc', JSON.stringify(store));
          // keep a temp global to allow decrypt on verify
          window._dota_review_saved_encrypted = store;
        }
      } else {
        localStorage.setItem('dota-review:gh', JSON.stringify({ owner, repo, branch, token }));
      }
    }catch{}
    if(!silent) showToast("Token verified. You can now enable Edit.");
    return true;
  }catch(err){
    console.error(err);
    state.verified = false; updateVerifyUi();
    showToast("Verification failed.", "error");
    return false;
  }
}

function updateVerifyUi(){
  editToggle.disabled = !state.verified;
  editToggle.title = state.verified ? "" : "Verify token to enable Edit";
}

function showToast(message, type){
  const el = document.createElement("div");
  el.className = "toast" + (type === "error" ? " error" : "");
  el.textContent = message;
  toastContainer?.appendChild(el);
  setTimeout(() => { el.remove(); }, 4000);
}

async function renameMatchId(newId){
  const nid = String(newId || "").trim();
  if(!nid) return;

  const oldId = state.data.matchId;
  const oldKey = state.autosaveKey;

  // Check if new ID already exists (only check localStorage, not remote)
  if(nid !== oldId){
    try {
      // First check localStorage
      const localCheck = localStorage.getItem(`dota-review:local:${nid}`);
      if(localCheck){
        showToast(`Match ID "${nid}" already exists locally. Choose a different ID.`, "error");
        return;
      }

      // Then try to fetch from data directory, but handle both local and remote URLs
      let dataUrl = `./data/${encodeURIComponent(nid)}.json`;
      // If we're on GitHub Pages, use the full URL
      if(window.location.hostname.includes('github.io')){
        const basePath = window.location.pathname.replace(/\/$/, '').replace(/\/index\.html$/, '');
        dataUrl = `${window.location.origin}${basePath}/data/${encodeURIComponent(nid)}.json`;
      }

      const checkRes = await fetch(dataUrl, { cache: "no-store" });
      if(checkRes.ok){
        showToast(`Match ID "${nid}" already exists. Choose a different ID.`, "error");
        return;
      }
    } catch(err) {
      // File doesn't exist, which is good - ignore network errors
      if(!err.message.includes('Failed to fetch') && !err.message.includes('404')) {
        console.warn("Error checking match ID:", err);
      }
    }
  }

  // Update in-memory state
  state.data.matchId = nid;
  updateAutosaveKey();

  // Save to localStorage with new key
  if(oldKey && oldKey !== state.autosaveKey){
    try{ localStorage.removeItem(oldKey); }catch{}
  }
  saveLocal();

  // If user has verified GitHub credentials, also rename the file on GitHub and update index.json
  if(state.verified && oldId !== nid){
    const owner = ghOwner.value.trim();
    const repo = ghRepo.value.trim();
    const branch = ghBranch.value.trim() || "gh-pages";
    const token = ghToken.value.trim();

    if(owner && repo && token){
      try {
        showToast("Renaming file on GitHub...", "info");

        // Rename the JSON file on GitHub
        const oldPath = `data/${encodeURIComponent(oldId)}.json`;
        const newPath = `data/${encodeURIComponent(nid)}.json`;
        await renameFileOnGitHub(owner, repo, branch, token, oldPath, newPath, nid);

        // Update index.json to reflect the new match ID
        await updateIndexForRenamedMatch(owner, repo, branch, token, oldId, nid);

        showToast(`Match ID changed to "${nid}". File renamed and index updated on GitHub.`, "info");
      } catch(githubError) {
        console.error("Failed to rename on GitHub:", githubError);
        showToast(`Match ID changed locally to "${nid}", but GitHub operations failed. You may need to publish manually.`, "warning");
      }
    }
  }

  // Save minimal metadata locally to avoid quota issues
  // This ensures the change persists even if not published to GitHub
  try {
    // Store only essential metadata instead of full JSON to avoid quota issues
    const metadata = {
      matchId: nid,
      hero: state.data.hero || "",
      rating: state.data.rating || 0,
      slideCount: state.data.slides?.length || 0,
      lastModified: new Date().toISOString()
      // Removed thumbnail to prevent quota issues
    };

    const metadataString = JSON.stringify(metadata);

    // Check if the data would exceed a reasonable size limit (1MB for metadata)
    if(metadataString.length > 1024 * 1024) {
      console.warn("Metadata too large, skipping local backup");
      if(!state.verified || oldId === nid) {
        showToast(`Match ID changed to "${nid}".`, "info");
      }
      return;
    }

    localStorage.setItem(`dota-review:local:${nid}`, metadataString);
    if(!state.verified || oldId === nid) {
      showToast(`Match ID changed to "${nid}". Changes saved locally.`, "info");
    }

  } catch(err) {
    console.warn("Could not save local metadata:", err);
    // Silently handle quota issues
    if(err.name === 'QuotaExceededError') {
      console.warn("localStorage quota exceeded for metadata, skipping backup");
    }
    if(!state.verified || oldId === nid) {
      showToast(`Match ID changed to "${nid}".`, "info");
    }
  }

  renderAll();
}

function enableMatchIdEdit(){
  if(!state.edit) return;
  matchIdInput.readOnly = false;
  matchIdInput.focus();
  editMatchIdBtn.style.display = 'none';
  saveMatchIdBtn.style.display = 'inline-block';
}

function saveMatchId(){
  const newId = matchIdInput.value.trim();
  if(newId){
    renameMatchId(newId);
    showToast("Match ID saved", "info");
  } else {
    showToast("Match ID cannot be empty", "error");
    return;
  }
  matchIdInput.readOnly = true;
  saveMatchIdBtn.style.display = 'none';
  editMatchIdBtn.style.display = 'inline-block';
}

// Load published matches list for welcome
async function loadPublished(){
  try{
    const res = await fetch("./data/index.json", { cache: "no-store" });
    if(!res.ok) return [];
    const j = await res.json();
    return j.published || [];
  }catch{return []}
}

// Populate the publishedList node and wire click handlers
async function populatePublishedList(){
  try{
    const list = await loadPublished();
    const node = document.getElementById('publishedList');
    if(!node) return;
    node.innerHTML = '';
    if(list.length === 0){ node.innerHTML = '<div class="empty-published">No published matches</div>'; return; }
    for(const p of list){
      const item = document.createElement('div'); item.className = 'published-item';
      const img = document.createElement('img'); img.src = p.image || ''; img.className = 'pub-thumb';

      // Add hero portrait if hero is specified
      let heroPortrait = null;
      if(p.hero){
        const hero = DOTA_HEROES.find(h => h.id === p.hero);
        if(hero){
          heroPortrait = document.createElement('img');
          heroPortrait.className = 'pub-hero-portrait';
          // Use Steam CDN icon URL format
          let iconUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${p.hero}_icon.png`;

          // Handle special cases where icon format might be different
          if(p.hero === 'kez'){
            // Kez uses full image as fallback since icon might not be available
            iconUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${p.hero}_full.png`;
          }

          heroPortrait.src = iconUrl;
          heroPortrait.alt = hero.localized_name;
          heroPortrait.title = hero.localized_name;
          // Add error fallback
          heroPortrait.onerror = function() {
            this.src = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${p.hero}_full.png`;
          };
        }
      }

      const meta = document.createElement('div'); meta.className = 'pub-meta';
      const title = document.createElement('div'); title.className = 'pub-title'; title.textContent = p.matchId;
      const sub = document.createElement('div'); sub.className = 'pub-sub'; sub.textContent = `${p.hero || ''} • ${p.ts ? new Date(p.ts).toLocaleString() : ''}`;
      meta.appendChild(title); meta.appendChild(sub);
      item.appendChild(img);
      if(heroPortrait) item.appendChild(heroPortrait);
      item.appendChild(meta);
      // load on click
      item.addEventListener('click', () => { try{ localStorage.setItem('dota-review:welcomed','1'); }catch{}; welcomeDialog?.close(); loadMatch(p.matchId); });
      // show delete control when verified
      if(state.verified){
        const delBtn = document.createElement('button'); delBtn.className = 'btn small subtle'; delBtn.textContent = 'Delete';
        delBtn.style.marginLeft = '12px';
        delBtn.addEventListener('click', (ev) => { ev.stopPropagation(); deletePublishedMatch(p.matchId); });
        item.appendChild(delBtn);
      }
      node.appendChild(item);
    }
  }catch{}
}

// Wire up
loadBtn.addEventListener("click", () => loadMatch());
newBtn.addEventListener("click", () => { newMatch(""); /* edit remains gated */ });
editMatchIdBtn?.addEventListener("click", enableMatchIdEdit);
saveMatchIdBtn?.addEventListener("click", saveMatchId);
matchIdInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    if(state.edit && !matchIdInput.readOnly){
      e.preventDefault();
      saveMatchId();
    } else if(!state.edit){
      loadMatch();
    }
  }
});
matchIdInput.addEventListener("change", () => {
  if(state.edit && !matchIdInput.readOnly){
    saveMatchId();
  }
});
editToggle.addEventListener("change", onEditToggleChange);
ratingInput.addEventListener("input", () => { state.data.rating = Number(ratingInput.value); ratingValue.textContent = ratingInput.value; saveLocal(); });
matchHeroSelect?.addEventListener("change", () => { state.data.hero = matchHeroSelect.value; updateHeroPortrait(); saveLocal(); });
addSlideBtn.addEventListener("click", addEmptySlide);
deleteSlideBtn.addEventListener("click", deleteCurrentSlide);
exportBtn.addEventListener("click", exportJSON);
publishBtn?.addEventListener("click", publishToGitHub);
verifyBtn?.addEventListener("click", () => verifyAccess());
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
// wire note sentiment control handler
wireNoteSentimentControls();

// Clear selected note index when clicking outside of notes
document.addEventListener('click', (ev) => {
  if(!state.edit) return;
  const target = ev.target;
  // If clicked outside of notes list, sentiment controls, and note input, clear selection
  const sentimentControls = document.querySelector('.sentiment-controls');
  if(!notesList.contains(target) && (!sentimentControls || !sentimentControls.contains(target)) && target !== noteInput){
    state.selectedNoteIndex = null;
    // Reset radio controls to neutral (default)
    try{
      const sel = document.querySelectorAll('input[name="noteSentiment"]');
      sel.forEach(r => { r.checked = (r.value === 'neutral'); });
    }catch{}
  }
});

// Load saved GH credentials on startup
loadSavedCredentials();

// Invalidate verification if GH fields change
[ghOwner, ghRepo, ghBranch, ghToken].forEach(el => el?.addEventListener("input", () => { state.verified = false; updateVerifyUi(); if(state.edit){ setEdit(false); showToast("Edit disabled: token changed.", "error"); } }));

// Initial load: if URL has ?match=123 or hash
const url = new URL(location.href);
const q = url.searchParams.get("match") || (location.hash.startsWith("#") ? location.hash.slice(1) : "");
if(q){ loadMatch(q); }
else {
  // Show welcome dialog when no match is provided in the URL
  try{
    if(welcomeDialog){ await populatePublishedList(); welcomeDialog.showModal(); }
  }catch{}
}

welcomeSampleBtn?.addEventListener("click", (e) => { e.preventDefault(); try{ localStorage.setItem("dota-review:welcomed", "1"); }catch{}; welcomeDialog?.close(); loadMatch("sample"); });
welcomeNewBtn?.addEventListener("click", (e) => { e.preventDefault(); try{ localStorage.setItem("dota-review:welcomed", "1"); }catch{}; welcomeDialog?.close(); newMatch(""); });

showWelcomeBtn?.addEventListener("click", async () => { await populatePublishedList(); welcomeDialog.showModal(); });

// Helper to get file SHA for a path
async function getFileSha(owner, repo, path, branch, token){
  const api = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`;
  const res = await fetch(api, { headers: { Authorization: `token ${token}` } });
  if(!res.ok) return null;
  const j = await res.json();
  return j.sha;
}

// Rename a file on GitHub from old path to new path
async function renameFileOnGitHub(owner, repo, branch, token, oldPath, newPath, newMatchId) {
  try {
    // First, get the content of the old file
    const getRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${oldPath}?ref=${encodeURIComponent(branch)}`, {
      headers: { Authorization: `token ${token}` }
    });

    if (!getRes.ok) {
      throw new Error(`Could not fetch old file: ${getRes.status}`);
    }

    const fileData = await getRes.json();
    const content = fileData.content;
    const sha = fileData.sha;

    // Update the content to reflect the new matchId
    const decodedContent = JSON.parse(atob(content));
    decodedContent.matchId = newMatchId;

    // Create the new file with updated content
    const newContent = btoa(unescape(encodeURIComponent(JSON.stringify(decodedContent, null, 2))));
    const createApi = `https://api.github.com/repos/${owner}/${repo}/contents/${newPath}`;
    const createRes = await fetch(createApi, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Rename match from ${oldPath} to ${newPath}`,
        content: newContent,
        branch
      })
    });

    if (!createRes.ok) {
      throw new Error(`Failed to create new file: ${createRes.status}`);
    }

    // Delete the old file
    const deleteApi = `https://api.github.com/repos/${owner}/${repo}/contents/${oldPath}`;
    const deleteRes = await fetch(deleteApi, {
      method: 'DELETE',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Delete old file after renaming to ${newPath}`,
        sha,
        branch
      })
    });

    if (!deleteRes.ok) {
      console.warn(`Failed to delete old file ${oldPath}: ${deleteRes.status}`);
    }

    console.log(`Successfully renamed ${oldPath} to ${newPath}`);
    return true;
  } catch (error) {
    console.error('Error renaming file on GitHub:', error);
    throw error;
  }
}

// Update index.json after publishing a new match
async function updateIndexAfterPublish(owner, repo, branch, token, matchId) {
  try {
    const idxPath = 'data/index.json';

    // Fetch current index.json if it exists
    let currentIndex = { published: [] };
    let idxSha = null;

    try {
      idxSha = await getFileSha(owner, repo, idxPath, branch, token);
      if (idxSha) {
        const idxRes = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${idxPath}`);
        if (idxRes.ok) {
          currentIndex = await idxRes.json();
        }
      }
    } catch (err) {
      // index.json doesn't exist yet, use empty structure
      console.log('index.json not found, creating new one');
    }

    // Fetch the newly published match data
    const matchPath = `data/${encodeURIComponent(matchId)}.json`;
    const matchRes = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${matchPath}`);
    if (!matchRes.ok) {
      throw new Error('Could not fetch newly published match data');
    }

    const matchData = await matchRes.json();

    // Create entry for the new match
    const newEntry = {
      matchId: matchData.matchId || matchId,
      hero: matchData.hero || '',
      image: (matchData.slides && matchData.slides[0] && matchData.slides[0].image) || '',
      ts: matchData.ts || new Date().toISOString()
    };

    // Remove existing entry if present, then add new one
    currentIndex.published = (currentIndex.published || []).filter(p => p.matchId !== matchId);
    currentIndex.published.unshift(newEntry); // Add to beginning for newest first

    // Sort by timestamp descending
    currentIndex.published.sort((a, b) => String(b.ts).localeCompare(String(a.ts)));

    // Update index.json on GitHub
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(currentIndex, null, 2))));
    const api = `https://api.github.com/repos/${owner}/${repo}/contents/${idxPath}`;
    const body = {
      message: `Update index after publishing ${matchId}`,
      content,
      branch
    };

    if (idxSha) {
      body.sha = idxSha; // Required for updating existing file
    }

    const putRes = await fetch(api, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!putRes.ok) {
      const errorText = await putRes.text();
      throw new Error(`Failed to update index.json: ${putRes.status} ${errorText}`);
    }

    console.log(`Successfully updated index.json with match ${matchId}`);
  } catch (error) {
    console.error('Error updating index.json:', error);
    throw error;
  }
}

// Update index.json to replace old match ID with new match ID
async function updateIndexForRenamedMatch(owner, repo, branch, token, oldMatchId, newMatchId) {
  try {
    const idxPath = 'data/index.json';

    // Fetch current index.json
    let idxSha = await getFileSha(owner, repo, idxPath, branch, token);
    if (!idxSha) {
      console.log('index.json not found, nothing to update for renamed match');
      return;
    }

    const idxRes = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${idxPath}`);
    if (!idxRes.ok) {
      throw new Error('Could not fetch index.json');
    }

    const currentIndex = await idxRes.json();

    // Find the entry for the old match ID
    const oldEntry = (currentIndex.published || []).find(p => p.matchId === oldMatchId);
    if (!oldEntry) {
      console.log(`No entry found for ${oldMatchId} in index.json`);
      return;
    }

    // Update the entry with the new match ID
    const updatedEntry = { ...oldEntry, matchId: newMatchId };

    // Replace the old entry with the updated one
    currentIndex.published = (currentIndex.published || []).map(p =>
      p.matchId === oldMatchId ? updatedEntry : p
    );

    // Sort by timestamp descending
    currentIndex.published.sort((a, b) => String(b.ts).localeCompare(String(a.ts)));

    // Update index.json on GitHub
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(currentIndex, null, 2))));
    const api = `https://api.github.com/repos/${owner}/${repo}/contents/${idxPath}`;
    const putRes = await fetch(api, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Update index after renaming match ${oldMatchId} to ${newMatchId}`,
        content,
        sha: idxSha,
        branch
      })
    });

    if (!putRes.ok) {
      const errorText = await putRes.text();
      throw new Error(`Failed to update index.json: ${putRes.status} ${errorText}`);
    }

    console.log(`Successfully updated index.json for renamed match ${oldMatchId} -> ${newMatchId}`);
  } catch (error) {
    console.error('Error updating index.json for renamed match:', error);
    throw error;
  }
}

// Delete a published match file and remove it from data/index.json
async function deletePublishedMatch(matchId){
  if(!confirm(`Delete published match ${matchId}? This cannot be undone via the app.`)) return;
  const owner = ghOwner.value.trim();
  const repo = ghRepo.value.trim();
  const branch = ghBranch.value.trim() || 'gh-pages';
  const token = ghToken.value.trim();
  if(!owner || !repo || !token){ showToast('Enter owner/repo/token to delete.', 'error'); return; }
  try{
    // delete data/<matchId>.json
    const path = `data/${encodeURIComponent(matchId)}.json`;
    const sha = await getFileSha(owner, repo, path, branch, token);
    if(!sha){ showToast('Could not find published file to delete.', 'error'); return; }
    const api = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const delRes = await fetch(api, { method: 'DELETE', headers: { Authorization: `token ${token}`, 'Content-Type':'application/json' }, body: JSON.stringify({ message: `Delete review ${matchId}`, sha, branch }) });
    if(!delRes.ok){ const t = await delRes.text(); showToast('Failed to delete match file.', 'error'); console.error(t); return; }

    // update index.json if present
    const idxPath = 'data/index.json';
    const idxSha = await getFileSha(owner, repo, idxPath, branch, token);
    if(idxSha){
      const idxRes = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${idxPath}`);
      if(idxRes.ok){
        const idxJson = await idxRes.json();
        idxJson.published = (idxJson.published || []).filter(p => p.matchId !== matchId);
        const content = btoa(unescape(encodeURIComponent(JSON.stringify(idxJson, null, 2))));
        const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${idxPath}`, { method: 'PUT', headers: { Authorization: `token ${token}`, 'Content-Type':'application/json' }, body: JSON.stringify({ message: `Update index after deleting ${matchId}`, content, sha: idxSha, branch }) });
        if(!putRes.ok){ const t=await putRes.text(); console.error('Failed to update index.json', t); }
      }
    }

    showToast(`Deleted ${matchId}`);
    // refresh published list
    try{ const node = document.getElementById('publishedList'); node.innerHTML=''; }catch{}
    showWelcomeBtn?.click();
  }catch(err){ console.error(err); showToast('Error deleting match.', 'error'); }
}

// If encrypted creds are present and user clicks Verify, allow them to enter passphrase to unlock
verifyBtn?.addEventListener('click', async () => {
  if(window._dota_review_saved_encrypted){
    const pass = prompt('Enter passphrase to decrypt saved credentials:');
    if(!pass) return;
    try{
      const enc = window._dota_review_saved_encrypted.encrypted;
      const token = await decryptToken(pass, enc);
      // set token and proceed with verify
      ghToken.value = token;
      await verifyAccess({ silent: false });
      // on success, replace stored plain entry
      try{ localStorage.setItem('dota-review:gh', JSON.stringify({ owner: window._dota_review_saved_encrypted.owner, repo: window._dota_review_saved_encrypted.repo, branch: window._dota_review_saved_encrypted.branch, token })); }catch{}
      delete window._dota_review_saved_encrypted;
    }catch(err){ showToast('Failed to decrypt credentials', 'error'); }
  } else {
    // normal verify flow (will persist plain creds)
    verifyAccess({ silent: false });
  }
});

// Start with edit disabled until verification
updateVerifyUi();
setControlsEnabled(false);


