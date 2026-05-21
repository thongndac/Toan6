// ============================================================
// MASCOT KỲ LÂN PI COMPANION & SOUND EFFECTS (WEB AUDIO API)
// ============================================================
const MASCOT_SVG = `<svg class="mascot-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Tier 4: Galaxy Wings (renders behind body and sparkles) -->
  <g class="evo-wings">
    <!-- Left Wing -->
    <g class="wing-left">
      <path d="M28 60 C12 60 5 45 12 37 C19 30 29 40 27 60 Z" fill="#a29bfe" stroke="#6c5ce7" stroke-width="1" opacity="0.95"/>
      <path d="M24 57 C14 57 10 47 15 41 C20 36 26 43 24 57 Z" fill="#ffe3e3" opacity="0.75"/>
    </g>
    <!-- Right Wing -->
    <g class="wing-right">
      <path d="M72 60 C88 60 95 45 88 37 C81 30 71 40 73 60 Z" fill="#a29bfe" stroke="#6c5ce7" stroke-width="1" opacity="0.95"/>
      <path d="M76 57 C86 57 90 47 85 41 C80 36 74 43 76 57 Z" fill="#ffe3e3" opacity="0.75"/>
    </g>
  </g>

  <!-- Magical Sparkles around the Unicorn -->
  <g class="unicorn-sparkles">
    <path d="M15 20 L17 23 L20 20 L17 17 Z" fill="#ffeaa7" opacity="0.8" />
    <path d="M85 30 L87 33 L90 30 L87 27 Z" fill="#ffeaa7" opacity="0.8" />
    <path d="M80 75 L82 78 L85 75 L82 72 Z" fill="#ffeaa7" opacity="0.8" />
  </g>
  <!-- Colorful Unicorn Tail (Pastel Pink, Purple, Blue) -->
  <g class="unicorn-tail">
    <path d="M28 65 Q10 55 5 70 Q10 85 28 75 Z" fill="#ff7675" stroke="#e17055" stroke-width="1"/>
    <path d="M26 68 Q12 60 8 72 Q13 82 26 76 Z" fill="#a29bfe" stroke="#6c5ce7" stroke-width="1"/>
    <path d="M24 71 Q14 65 11 74 Q16 80 24 77 Z" fill="#74b9ff" stroke="#0984e3" stroke-width="1"/>
  </g>
  <!-- Chubby Body & Head group (retains classes for layout compatibility) -->
  <g class="pi-body">
    <!-- Legs/Hooves (Golden hooves) -->
    <!-- Back Leg -->
    <ellipse cx="36" cy="84" rx="7" ry="5" fill="#fcfcfc" stroke="#b2bec3" stroke-width="1.5"/>
    <path d="M30 83 C30 87 42 87 42 83 Z" fill="#ffeaa7" stroke="#fdcb6e" stroke-width="1"/>
    <!-- Front Legs -->
    <ellipse cx="64" cy="84" rx="7" ry="5" fill="#fcfcfc" stroke="#b2bec3" stroke-width="1.5"/>
    <path d="M58 83 C58 87 70 87 70 83 Z" fill="#ffeaa7" stroke="#fdcb6e" stroke-width="1"/>
    
    <!-- Chubby White Body -->
    <path d="M30 80 C26 65 38 48 55 48 C68 48 74 62 70 80 C68 85 32 85 30 80 Z" fill="#ffffff" stroke="#dfe6e9" stroke-width="2"/>
    <!-- Soft Pink Belly -->
    <ellipse cx="52" cy="68" rx="14" ry="12" fill="#ffe3e3"/>
    
    <!-- Front hooves pointing cute -->
    <ellipse cx="38" cy="60" rx="5" ry="4" fill="#ffffff" stroke="#dfe6e9" stroke-width="1.5" transform="rotate(-15 38 60)"/>
    <path d="M33 59 C33 63 43 63 43 59 Z" fill="#ffeaa7" stroke="#fdcb6e" stroke-width="1" transform="rotate(-15 38 60)"/>
    <ellipse cx="66" cy="60" rx="5" ry="4" fill="#ffffff" stroke="#dfe6e9" stroke-width="1.5" transform="rotate(15 66 60)"/>
    <path d="M61 59 C61 63 71 63 71 59 Z" fill="#ffeaa7" stroke="#fdcb6e" stroke-width="1" transform="rotate(15 66 60)"/>
  </g>
  <g class="pi-head">
    <!-- Colorful Flowing Mane (Back part of head) -->
    <path d="M32 32 Q20 40 28 52 Q35 45 35 32 Z" fill="#ff7675"/>
    <path d="M35 28 Q24 35 30 45 Q38 40 38 28 Z" fill="#a29bfe"/>
    <path d="M38 24 Q28 30 33 38 Q41 35 41 24 Z" fill="#74b9ff"/>

    <!-- Ears -->
    <!-- Left Ear -->
    <path d="M38 25 L34 12 C34 12 42 16 42 22 Z" fill="#ffffff" stroke="#dfe6e9" stroke-width="1.5"/>
    <path d="M37 23 L35 15 C35 15 40 18 40 21 Z" fill="#ffe3e3"/>
    <!-- Right Ear -->
    <path d="M62 25 L66 12 C66 12 58 16 58 22 Z" fill="#ffffff" stroke="#dfe6e9" stroke-width="1.5"/>
    <path d="M63 23 L65 15 C65 15 60 18 60 21 Z" fill="#ffe3e3"/>

    <!-- Tier 1: Cute Sprout (Mầm cây cấp 1-2) -->
    <g class="evo-sprout">
      <path d="M41 28 Q38 18 35 15" fill="none" stroke="#2ecc71" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M35 15 Q30 14 33 10 Q38 11 35 15 Z" fill="#2ecc71"/>
    </g>

    <!-- Chubby Unicorn Head -->
    <path d="M35 45 C35 32 65 32 65 45 C65 52 68 58 60 62 C54 65 46 65 40 62 C32 58 35 52 35 45 Z" fill="#ffffff" stroke="#dfe6e9" stroke-width="2"/>
    <!-- Cute pink snout -->
    <ellipse cx="50" cy="55" rx="10" ry="6" fill="#ffe3e3"/>
    <!-- Snout details: nostrils and smiling mouth -->
    <circle cx="47" cy="53" r="0.8" fill="#ff7675"/>
    <circle cx="53" cy="53" r="0.8" fill="#ff7675"/>
    <path d="M48 56 Q50 58 52 56" fill="none" stroke="#2d3436" stroke-width="1.2" stroke-linecap="round"/>

    <!-- Big anime sparkling eyes -->
    <g class="eyes-normal">
      <!-- Left Eye -->
      <circle cx="42" cy="42" r="4" fill="#2d3436"/>
      <circle cx="43.5" cy="40.5" r="1.5" fill="#ffffff"/>
      <circle cx="40.8" cy="43.5" r="0.7" fill="#ffffff"/>
      <!-- Right Eye -->
      <circle cx="58" cy="42" r="4" fill="#2d3436"/>
      <circle cx="59.5" cy="40.5" r="1.5" fill="#ffffff"/>
      <circle cx="56.8" cy="43.5" r="0.7" fill="#ffffff"/>
    </g>
    <!-- Happy/Success Eyes (Curved upward arcs) -->
    <g class="eyes-happy" style="display:none;">
      <path d="M38 44 Q42 38 46 44" fill="none" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M54 44 Q58 38 62 44" fill="none" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round"/>
    </g>
    <!-- Sad/Wrong Eyes (Curved downward/dizzy arcs) -->
    <g class="eyes-wrong" style="display:none;">
      <path d="M38 41 Q42 46 46 41" fill="none" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M54 41 Q58 46 62 41" fill="none" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round"/>
    </g>

    <!-- Tier 2: Detective Glasses (Kính thám tử cấp 3-5) -->
    <g class="evo-glasses">
      <circle cx="42" cy="42" r="6.5" fill="none" stroke="#f1c40f" stroke-width="1.2"/>
      <circle cx="58" cy="42" r="6.5" fill="none" stroke="#f1c40f" stroke-width="1.2"/>
      <path d="M48.5 42 L51.5 42" fill="none" stroke="#f1c40f" stroke-width="1.2"/>
      <path d="M35.5 42 L33 41" fill="none" stroke="#f1c40f" stroke-width="1.2"/>
      <path d="M64.5 42 L67 41" fill="none" stroke="#f1c40f" stroke-width="1.2"/>
    </g>

    <!-- Blushing Cheeks -->
    <ellipse cx="37" cy="47" rx="3" ry="1.5" fill="#ff7675" opacity="0.6"/>
    <ellipse cx="63" cy="47" rx="3" ry="1.5" fill="#ff7675" opacity="0.6"/>

    <!-- Flowing Front Mane -->
    <path d="M48 30 C42 22 36 34 38 38 C42 34 46 32 48 30 Z" fill="#ffeaa7"/>

    <!-- Tier 3: Wizard Hat (Mũ phù thủy cấp 6-8) -->
    <g class="evo-wizard">
      <ellipse cx="61" cy="22" rx="10" ry="3" fill="#6c5ce7" transform="rotate(-15 61 22)"/>
      <path d="M54 22 L63 5 Q66 4 67 8 L66 21 Z" fill="#4834d4" transform="rotate(-15 61 22)"/>
      <path d="M55.5 20 C57 19 63 19 65.5 21" fill="none" stroke="#fdcb6e" stroke-width="1.5" transform="rotate(-15 61 22)"/>
      <polygon points="61,12 62,14 64,14 62.5,15 63,17 61,16 59,17 59.5,15 58,14 60,14" fill="#f1c40f" transform="rotate(-15 61 22)"/>
    </g>

    <!-- MAGICAL GOLDEN HORN! (with Pi symbol floating at its tip) -->
    <g class="unicorn-horn">
      <path d="M47 30 L50 8 L53 30 Z" fill="#ffeaa7" stroke="#fdcb6e" stroke-width="1.5" stroke-linejoin="round"/>
      <!-- Horn spirals -->
      <path d="M48 24 Q50 22 52 23 M49 18 Q50 16 51 17 M49.5 12 Q50 11 50.5 11" fill="none" stroke="#fdcb6e" stroke-width="1" stroke-linecap="round"/>
      <!-- Floating mathematical Pi symbol at horn tip -->
      <text class="pi-symbol" x="50" y="5" font-size="5" font-family="monospace" font-weight="bold" fill="#e17055" text-anchor="middle">π</text>
    </g>
  </g>
</svg>`;

const RANDOM_IDLE_MESSAGES = [
  "Cùng Kỳ Lân Pi khám phá kiến thức mới nào! 🦄✨",
  "Toán học là siêu năng lực diệu kỳ đó nha! ⚡💖",
  "Bạn đã làm rất tốt hôm nay! Tiếp tục nhé! 🌱",
  "Hôm nay bạn muốn thử thách bài toán nào? 🧩",
  "Mỗi bài tập giải đúng là một bước tiến xa! 🚀",
  "Toán học rất đáng yêu, như bạn vậy đó! 🥰",
  "Kỳ Lân Pi đang nạp năng lượng cầu vồng... Chờ bạn đó! 🌈⚡"
];

function playSound(type) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    const ctx = new AudioContext();
    if (type === 'giggle') {
      // Magical unicorn giggle: cute cascading high-pitched notes!
      const playChime = (freq, delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.18);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.18);
      };
      playChime(880, 0);      // A5
      playChime(1046.5, 0.05); // C6
      playChime(1318.5, 0.1);  // E6
      playChime(1760, 0.15);  // A6
    } else if (type === 'pop') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start(); osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'correct') {
      const playNote = (freq, start, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
        osc.start(start); osc.stop(start + duration);
      };
      playNote(659.25, ctx.currentTime, 0.2); // E5
      playNote(987.77, ctx.currentTime + 0.08, 0.35); // B5
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.start(); osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'levelup') {
      const playNote = (freq, start, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + duration);
        osc.start(start); osc.stop(start + duration);
      };
      const now = ctx.currentTime;
      playNote(523.25, now, 0.15);
      playNote(659.25, now + 0.1, 0.15);
      playNote(783.99, now + 0.2, 0.15);
      playNote(1046.50, now + 0.3, 0.45);
    }
  } catch (e) {
    console.error("Audio Context error:", e);
  }
}

function setMascotState(mascotState, text) {
  const mascotContainer = document.getElementById('mascot-container');
  const mascotBubble = document.getElementById('mascot-bubble');
  if (!mascotContainer || !mascotBubble) return;

  mascotContainer.className = '';
  
  if (mascotState === 'idle') {
    mascotContainer.classList.add('mascot-idle');
  } else if (mascotState === 'success') {
    mascotContainer.classList.add('mascot-success');
  } else if (mascotState === 'wrong') {
    mascotContainer.classList.add('mascot-wrong');
  }

  if (text) {
    mascotBubble.innerHTML = text;
    mascotBubble.classList.add('show');
    
    if (mascotState === 'idle') {
      if (state.bubbleTimeout) clearTimeout(state.bubbleTimeout);
      state.bubbleTimeout = setTimeout(() => {
        mascotBubble.classList.remove('show');
      }, 5000);
    }
  } else {
    mascotBubble.classList.remove('show');
  }
}

function triggerMascotGiggle() {
  playSound('giggle');
  const randomMsg = RANDOM_IDLE_MESSAGES[Math.floor(Math.random() * RANDOM_IDLE_MESSAGES.length)];
  setMascotState('idle', randomMsg);
  const avatar = document.getElementById('mascot-avatar');
  if (avatar) {
    avatar.classList.add('giggle-active');
    setTimeout(() => {
      avatar.classList.remove('giggle-active');
    }, 600);
  }
}

function changeTheme(theme) {
  document.body.className = '';
  if (theme !== 'dark') {
    document.body.classList.add('theme-' + theme);
  }
  state.theme = theme;
  saveState();
  const selector = document.getElementById('theme-selector');
  if (selector) selector.value = theme;
}

// ============================================================
// APP STATE
// ============================================================
let state = {
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: null,
  completedLessons: {},
  quizScores: {},
  currentView: 'home',
  currentLesson: null,
  currentChapter: null,
  theme: 'dark'
};

// ============================================================
// QUIZ STATE
// ============================================================
let quizState = {
  lessonId: null,
  questions: [],
  current: 0,
  score: 0,
  answered: false,
  timer: null,
  timeLeft: 25
};

// ============================================================
// UTILS
// ============================================================
function loadState() {
  const saved = localStorage.getItem('toan6_state_v2');
  if (saved) {
    try { state = { ...state, ...JSON.parse(saved) }; }
    catch(e) {}
  }
  updateStreak();
}

function saveState() {
  localStorage.setItem('toan6_state_v2', JSON.stringify(state));
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastActiveDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.lastActiveDate === yesterday) {
      state.streak++;
    } else if (state.lastActiveDate && state.lastActiveDate !== today) {
      state.streak = 1;
    } else if (!state.lastActiveDate) {
      state.streak = 1;
    }
    state.lastActiveDate = today;
    saveState();
  }
}

function getLevel(xp) {
  if (xp < 100) return 1;
  if (xp < 250) return 2;
  if (xp < 500) return 3;
  if (xp < 900) return 4;
  if (xp < 1400) return 5;
  if (xp < 2000) return 6;
  if (xp < 3000) return 7;
  if (xp < 4500) return 8;
  if (xp < 6000) return 9;
  return 10;
}

function getLevelName(lv) {
  const names = [
    '', 
    '🌱 Hạt Mầm Tò Mò', 
    '🌿 Mầm Non Ham Học', 
    '🔍 Thám Tử Số Học',
    '⚔️ Chiến Binh Tính Nhẩm', 
    '🔮 Phù Thủy Hình Học', 
    '🦉 Nhà Thông Thái Nhỏ',
    '👑 Trưởng Lão Số Học', 
    '🌌 Huyền Thoại Toán Học'
  ];
  return names[lv] || '🌌 Huyền Thoại Toán Học';
}

function getLevelXP(lv) {
  const xps = [0, 100, 250, 500, 900, 1400, 2000, 3000, 4500, 6000];
  return xps[Math.min(lv, xps.length - 1)] || 0;
}

function getLevelEmoji(lv) {
  return ['', '🌱', '🌿', '🔍', '⚔️', '🔮', '🦉', '👑', '🌌'][lv] || '🌌';
}

function addXP(amount) {
  const oldLevel = getLevel(state.xp);
  state.xp += amount;
  const newLevel = getLevel(state.xp);
  state.level = newLevel;
  saveState();
  updateTopbar();
  if (newLevel > oldLevel) {
    showToast('🎉', `Lên cấp! Bây giờ bạn là ${getLevelName(newLevel)}!`);
    playSound('levelup');
    setMascotState('success', `Wow! Bạn đã tiến hóa thành <strong>${getLevelName(newLevel)}</strong>! Đỉnh của chóp luôn! 🦄👑🌈`);
  }
}

function getAllLessons() {
  return CURRICULUM.flatMap(c => c.lessons);
}

function getTotalLessons() { return getAllLessons().length; }
function getDoneLessons() { return Object.keys(state.completedLessons).filter(k => state.completedLessons[k]).length; }
function getOverallProgress() { return Math.round(getDoneLessons() / getTotalLessons() * 100); }

function getChapterProgress(chapterId) {
  const chapter = CURRICULUM.find(c => c.id === chapterId);
  if (!chapter) return 0;
  const done = chapter.lessons.filter(l => state.completedLessons[l.id]).length;
  return Math.round(done / chapter.lessons.length * 100);
}

// ============================================================
// UI UPDATES
// ============================================================
function updateTopbar() {
  document.getElementById('top-xp').textContent = state.xp;
  document.getElementById('top-streak').textContent = state.streak;
  document.getElementById('top-level').textContent = state.level;
  updateMascotEvolution(); // Cập nhật ngoại hình tiến hóa của Kỳ Lân Pi
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

function setBreadcrumb(parts) {
  const bc = document.getElementById('breadcrumb');
  bc.innerHTML = parts.map((p, i) =>
    i < parts.length - 1
      ? `<span>${p}</span><span class="sep">›</span>`
      : `<span class="current">${p}</span>`
  ).join('');
}

function showToast(icon, msg, duration = 3000) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-icon').textContent = icon;
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ============================================================
// SIDEBAR BUILD
// ============================================================
function buildSidebar() {
  const nav = document.getElementById('chaptersNav');
  let vol1Done = false;
  nav.innerHTML = CURRICULUM.map(ch => {
    let volHeader = '';
    if (ch.volume === 2 && !vol1Done) {
      vol1Done = true;
      volHeader = `<div class="nav-section-title" style="margin-top:8px">TẬP 2</div>`;
    }
    const prog = getChapterProgress(ch.id);
    return `${volHeader}
    <div class="chapter-group">
      <div class="chapter-header" onclick="toggleChapter('${ch.id}')">
        <span class="ch-icon">${ch.emoji}</span>
        <span style="flex:1;overflow:hidden;text-overflow:ellipsis">${ch.title}</span>
        <span class="ch-arrow">›</span>
      </div>
      <div class="chapter-lessons" id="cl-${ch.id}">
        ${ch.lessons.map(l => {
          const done = state.completedLessons[l.id];
          const hasEx = l.exercises && l.exercises.length > 0;
          const exBadge = hasEx ? `<span class="badge-exercises" title="Có bài tập tương tác">📝</span>` : '';
          return `<div class="lesson-item ${done ? 'done' : ''}" id="li-${l.id}" onclick="showLesson('${l.id}'); if(window.innerWidth <= 768) { document.getElementById('sidebar').classList.add('collapsed'); }">
            <span class="lesson-check">${done ? '✅' : '○'}</span>
            <span class="lesson-name">Bài ${l.num}: ${l.title}</span>
            ${exBadge}
            <span class="lesson-xp">+${l.xp}</span>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');
}

function toggleChapter(id) {
  const lessons = document.getElementById('cl-' + id);
  const header = lessons.previousElementSibling;
  lessons.classList.toggle('open');
  header.classList.toggle('open');
}

// ============================================================
// VIEWS
// ============================================================
function showView(name, lessonId = null, chapterId = null) {
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.add('collapsed');
  }
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const viewEl = document.getElementById('view-' + name);
  if (viewEl) viewEl.classList.add('active');

  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  state.currentView = name;

  if (name === 'home') {
    renderHome();
    setBreadcrumb(['Trang chủ']);
  } else if (name === 'progress') {
    renderProgress();
    setBreadcrumb(['Tiến độ học tập']);
  } else if (name === 'lesson' && lessonId) {
    renderLesson(lessonId);
  } else if (name === 'quiz' && lessonId) {
    startQuiz(lessonId);
  }
}

// ============================================================
// HOME VIEW
// ============================================================
function renderHome() {
  const lv = state.level;
  const lvXP = getLevelXP(lv);
  const nextLvXP = getLevelXP(lv + 1);
  const prog = nextLvXP > lvXP ? Math.round((state.xp - lvXP) / (nextLvXP - lvXP) * 100) : 100;
  const done = getDoneLessons();
  const total = getTotalLessons();
  const overallPct = getOverallProgress();
  const sgkExercises = CURRICULUM.flatMap(ch => ch.lessons || []).flatMap(l => l.exercises || []);
  const sgkDone = sgkExercises.filter(ex => state.completedLessons[`sgk-ex-${ex.id}`]).length;
  const sgkTotal = sgkExercises.length;

  document.getElementById('view-home').innerHTML = `
    <div class="dashboard-header">
      <h2>Xin chào! 👋</h2>
      <p>Tiếp tục hành trình chinh phục Toán 6 của bạn nào!</p>
    </div>

    <div class="level-section">
      <div class="level-avatar">${getLevelEmoji(lv)}</div>
      <div class="level-info">
        <div class="level-name">${getLevelName(lv)}</div>
        <div class="level-xp">Cấp ${lv} · ${state.xp} XP ${lv < 10 ? `→ Cần ${nextLvXP} XP để lên cấp ${lv+1}` : '(Tối đa!)'}</div>
        <div class="level-bar"><div class="level-fill" style="width:${prog}%"></div></div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card xp">
        <div class="sc-icon">⭐</div>
        <div class="sc-val">${state.xp}</div>
        <div class="sc-label">Tổng XP</div>
      </div>
      <div class="stat-card streak">
        <div class="sc-icon">🔥</div>
        <div class="sc-val">${state.streak}</div>
        <div class="sc-label">Ngày liên tiếp</div>
      </div>
      <div class="stat-card done">
        <div class="sc-icon">✅</div>
        <div class="sc-val">${done}/${total}</div>
        <div class="sc-label">Bài đã học</div>
      </div>
      <div class="stat-card level">
        <div class="sc-icon">🎖</div>
        <div class="sc-val">${overallPct}%</div>
        <div class="sc-label">Hoàn thành</div>
      </div>
    </div>

    <div class="progress-section">
      <div class="section-title">📈 Tiến độ tổng thể</div>
      <div class="progress-bar-wrap">
        <div class="pb-header">
          <span class="pb-label">Chương trình Toán 6 (2 tập)</span>
          <span class="pb-pct">${overallPct}%</span>
        </div>
        <div class="pb-track"><div class="pb-fill" style="width:${overallPct}%"></div></div>
      </div>
    </div>


    <div class="section-title">📚 Danh sách chương</div>
    <div class="chapters-grid">
      ${CURRICULUM.map(ch => {
        const pct = getChapterProgress(ch.id);
        const chDone = ch.lessons.filter(l => state.completedLessons[l.id]).length;
        return `<div class="chapter-card" onclick="openChapter('${ch.id}')">
          <div class="cc-emoji">${ch.emoji}</div>
          <div class="cc-num">Chương · Tập ${ch.volume}</div>
          <div class="cc-name">${ch.title}</div>
          <div class="cc-sub">${ch.subtitle} · ${ch.lessons.length} bài học</div>
          <div class="cc-progress">
            <span>${chDone}/${ch.lessons.length}</span>
            <div class="cc-bar"><div class="cc-bar-fill" style="width:${pct}%"></div></div>
            <span>${pct}%</span>
          </div>
        </div>`;
      }).join('')}
    </div>
  `;
}

function openChapter(id) {
  const ch = document.getElementById('cl-' + id);
  const header = ch?.previousElementSibling;
  if (ch && header) { ch.classList.add('open'); header.classList.add('open'); }
  const chapter = CURRICULUM.find(c => c.id === id);
  if (chapter && chapter.lessons.length > 0) {
    showLesson(chapter.lessons[0].id);
  }
}

// ============================================================
// SVG TEMPLATES & INTERACTIVE SGK EXERCISES INTERACTIVITY
// ============================================================
const SVG_TEMPLATES = {
  sun_earth_svg: `
<svg class="svg-sun-earth" viewBox="0 0 450 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sunGlowGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" opacity="1" />
      <stop offset="50%" stop-color="#d97706" opacity="0.8" />
      <stop offset="100%" stop-color="#b45309" opacity="0" />
    </radialGradient>
    <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4f46e5" opacity="0.1" />
      <stop offset="100%" stop-color="#818cf8" opacity="0.3" />
    </linearGradient>
  </defs>

  <g opacity="0.3">
    <circle cx="30" cy="40" r="1" fill="#fff" />
    <circle cx="100" cy="120" r="1.5" fill="#fff" />
    <circle cx="200" cy="30" r="0.8" fill="#fff" />
    <circle cx="380" cy="130" r="1.2" fill="#fff" />
    <circle cx="410" cy="40" r="1.5" fill="#fff" />
    <circle cx="280" cy="140" r="1" fill="#fff" />
  </g>

  <g transform="translate(225, 80)">
    <circle cx="0" cy="0" r="35" fill="url(#sunGlowGrad)" opacity="0.4" />
    <circle class="sun-core" cx="0" cy="0" r="17" fill="#f59e0b" />
    <path d="M-4 2 Q0 6 4 2" fill="none" stroke="#78350f" stroke-width="1.5" stroke-linecap="round" />
    <circle cx="-5" cy="-2" r="1.5" fill="#78350f" />
    <circle cx="5" cy="-2" r="1.5" fill="#78350f" />
  </g>

  <ellipse class="orbit-path" cx="225" cy="80" rx="140" ry="60" fill="none" stroke="url(#orbitGrad)" stroke-width="2" />

  <g class="earth-group">
    <g transform="translate(365, 80)">
      <circle cx="0" cy="0" r="11" fill="#60a5fa" opacity="0.3" />
      <circle cx="0" cy="0" r="8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1" />
      <path d="M-4 -3 Q-1 -5 1 -4 Q3 -1 1 2 Q-2 4 -5 1 Z" fill="#10b981" />
      <path d="M2 -3 Q4 -4 5 -2 Q3 1 1 3 Z" fill="#10b981" />
    </g>
  </g>

  <g transform="translate(225, 80)">
    <g transform="rotate(30)">
      <circle class="hydrogen-particle" cx="-120" cy="0" r="3" />
      <text x="-120" y="-6" fill="#a5b4fc" font-size="8" font-family="sans-serif" text-anchor="middle" font-weight="bold">H</text>
    </g>
    <g transform="rotate(150)">
      <circle class="hydrogen-particle" cx="-130" cy="0" r="3" style="animation-delay: 0.7s;" />
      <text x="-130" y="-6" fill="#a5b4fc" font-size="8" font-family="sans-serif" text-anchor="middle" font-weight="bold">H</text>
    </g>
    <g transform="rotate(270)">
      <circle class="hydrogen-particle" cx="-110" cy="0" r="3" style="animation-delay: 1.4s;" />
      <text x="-110" y="-6" fill="#a5b4fc" font-size="8" font-family="sans-serif" text-anchor="middle" font-weight="bold">H</text>
    </g>
  </g>
  
  <text x="15" y="25" fill="#94a3b8" font-size="9" font-family="sans-serif" font-weight="bold">Khối lượng Trái Đất ~ 6 · 10²⁰ tấn</text>
  <text x="15" y="145" fill="#f59e0b" font-size="9" font-family="sans-serif" font-weight="bold">Mặt Trời tiêu thụ ~ 6 · 10⁶ tấn H/s</text>
</svg>
`,
  blood_cell_svg: `
<svg class="svg-blood-cell" viewBox="0 0 450 160" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vesselGrad" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#4c0519" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#881337" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#4c0519" stop-opacity="0.8" />
    </linearGradient>
    <radialGradient id="rbcGrad" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#f43f5e" />
      <stop offset="60%" stop-color="#e11d48" />
      <stop offset="100%" stop-color="#9f1239" />
    </radialGradient>
  </defs>

  <rect x="0" y="20" width="450" height="120" rx="10" fill="url(#vesselGrad)" stroke="rgba(225, 29, 72, 0.2)" stroke-width="2" />
  
  <g class="blood-flow-cell" style="animation-delay: -2s;">
    <g transform="translate(0, 50)">
      <ellipse cx="0" cy="0" rx="14" ry="10" fill="url(#rbcGrad)" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.3))" />
      <ellipse cx="0" cy="0" rx="7" ry="4" fill="#881337" opacity="0.4" />
    </g>
    <g transform="translate(180, 110) rotate(15)">
      <ellipse cx="0" cy="0" rx="12" ry="8" fill="url(#rbcGrad)" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.3))" />
      <ellipse cx="0" cy="0" rx="6" ry="3" fill="#881337" opacity="0.4" />
    </g>
  </g>
  
  <g class="blood-flow-cell-fast" style="animation-delay: -1s;">
    <g transform="translate(80, 85) rotate(-20)">
      <ellipse cx="0" cy="0" rx="13" ry="9" fill="url(#rbcGrad)" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.3))" />
      <ellipse cx="0" cy="0" rx="6.5" ry="3.5" fill="#881337" opacity="0.4" />
    </g>
    <g transform="translate(260, 45) rotate(10)">
      <ellipse cx="0" cy="0" rx="15" ry="11" fill="url(#rbcGrad)" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.3))" />
      <ellipse cx="0" cy="0" rx="7.5" ry="4.5" fill="#881337" opacity="0.4" />
    </g>
  </g>

  <g transform="translate(200, 80)">
    <circle cx="0" cy="0" r="55" fill="none" stroke="#94a3b8" stroke-width="4" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.4))" />
    <circle cx="0" cy="0" r="53" fill="rgba(255, 255, 255, 0.08)" />
    <g class="blood-flow-cell" style="animation-duration: 8s;">
      <g transform="translate(-20, -10) rotate(5)">
        <ellipse cx="0" cy="0" rx="18" ry="13" fill="url(#rbcGrad)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.4))" />
        <ellipse cx="0" cy="0" rx="9" ry="5.5" fill="#881337" opacity="0.5" />
      </g>
    </g>
    <g class="blood-flow-cell-fast" style="animation-duration: 5s; animation-delay: -2s;">
      <g transform="translate(10, 20) rotate(-15)">
        <ellipse cx="0" cy="0" rx="20" ry="14" fill="url(#rbcGrad)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.4))" />
        <ellipse cx="0" cy="0" rx="10" ry="6" fill="#881337" opacity="0.5" />
      </g>
    </g>
  </g>
  
  <g class="blood-pulse-heart" transform="translate(390, 45)">
    <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#e11d48" stroke-width="2" />
    <line x1="0" y1="0" x2="0" y2="-9" stroke="#e2e8f0" stroke-width="1.5" stroke-linecap="round" />
    <line x1="0" y1="0" x2="6" y2="2" stroke="#e2e8f0" stroke-width="1.5" stroke-linecap="round" />
    <path d="M-4 -3 C-7 -6 -3 -8 0 -5 C3 -8 7 -6 4 -3 L0 2 Z" fill="#e11d48" transform="scale(0.7) translate(0, 8)" />
  </g>

  <text x="15" y="38" fill="#fda4af" font-size="9" font-family="sans-serif" font-weight="bold">Mỗi giây: ~ 25 · 10⁵ tế bào hồng cầu</text>
  <text x="340" y="132" fill="#e2e8f0" font-size="8" font-family="sans-serif" font-weight="bold">1 giờ = 3600s</text>
</svg>
`,
  solar_system_svg: `
<svg class="svg-solar-system" viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" style="background: radial-gradient(circle, #1e1b4b 0%, #0f172a 100%); border-radius: var(--radius-sm); border: 1px solid var(--c-border); overflow: hidden; width: 100%; height: auto; display: block; margin: 0 auto;">
  <defs>
    <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="40%" stop-color="#eab308" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
    </radialGradient>
    <style>
      .star { fill: #ffffff; opacity: 0.5; }
      .orbit { fill: none; stroke: rgba(99, 102, 241, 0.15); stroke-dasharray: 3 3; }
      .planet-orbit { animation: spin linear infinite; transform-origin: 250px 120px; }
      @keyframes spin { 100% { transform: rotate(360deg); } }
    </style>
  </defs>
  <g>
    <circle class="star" cx="45" cy="50" r="1" />
    <circle class="star" cx="120" cy="190" r="1.5" />
    <circle class="star" cx="230" cy="30" r="0.8" />
    <circle class="star" cx="340" cy="210" r="1.2" />
    <circle class="star" cx="420" cy="70" r="1" />
    <circle class="star" cx="280" cy="180" r="0.5" />
    <circle class="star" cx="80" cy="120" r="0.8" />
    <circle class="star" cx="460" cy="150" r="1.2" />
  </g>
  <ellipse class="orbit" cx="250" cy="120" rx="40" ry="20" />
  <ellipse class="orbit" cx="250" cy="120" rx="65" ry="32" />
  <ellipse class="orbit" cx="250" cy="120" rx="90" ry="45" />
  <ellipse class="orbit" cx="250" cy="120" rx="115" ry="57" />
  <ellipse class="orbit" cx="250" cy="120" rx="145" ry="72" />
  <ellipse class="orbit" cx="250" cy="120" rx="175" ry="87" />
  <ellipse class="orbit" cx="250" cy="120" rx="205" ry="102" />
  <ellipse class="orbit" cx="250" cy="120" rx="235" ry="117" />
  
  <circle cx="250" cy="120" r="28" fill="url(#sunGlow)" />
  <circle cx="250" cy="120" r="12" fill="#f59e0b" />
  <text x="250" y="123" fill="#ffffff" font-size="8" font-family="sans-serif" text-anchor="middle" font-weight="bold">MẶT TRỜI</text>

  <g class="planet-orbit" style="animation-duration: 4s;">
    <circle cx="210" cy="120" r="3" fill="#94a3b8" />
  </g>
  <g class="planet-orbit" style="animation-duration: 7s;">
    <circle cx="185" cy="120" r="5" fill="#f59e0b" />
  </g>
  <g class="planet-orbit" style="animation-duration: 10s;">
    <circle cx="340" cy="120" r="6" fill="#3b82f6" />
    <circle cx="346" cy="116" r="1.5" fill="#94a3b8" />
  </g>
  <g class="planet-orbit" style="animation-duration: 15s;">
    <circle cx="135" cy="120" r="4.5" fill="#ef4444" />
  </g>
  <g class="planet-orbit" style="animation-duration: 22s;">
    <circle cx="395" cy="120" r="9" fill="#f97316" />
  </g>
  <g class="planet-orbit" style="animation-duration: 30s;">
    <circle cx="75" cy="120" r="7" fill="#fbbf24" />
    <ellipse cx="75" cy="120" rx="11" ry="3" fill="none" stroke="#fbbf24" stroke-width="1.5" transform="rotate(15 75 120)" />
  </g>
  <g class="planet-orbit" style="animation-duration: 40s;">
    <circle cx="455" cy="120" r="6.5" fill="#06b6d4" />
  </g>
  <g class="planet-orbit" style="animation-duration: 55s;">
    <circle cx="15" cy="120" r="6" fill="#6366f1" />
  </g>
</svg>
`,
  airport_svg: `
<svg class="svg-airport" viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="background: linear-gradient(135deg, #1e1b4b 0%, #311042 100%); border-radius: var(--radius-sm); border: 1px solid var(--c-border); overflow: hidden; width: 100%; height: auto; display: block; margin: 0 auto;">
  <defs>
    <style>
      .runway { fill: none; stroke: #475569; stroke-width: 12; stroke-dasharray: 10 6; }
      .terminal-box { fill: rgba(255, 255, 255, 0.05); stroke: rgba(99, 102, 241, 0.3); stroke-width: 1.5; rx: 8; }
      .plane-anim { animation: fly 8s linear infinite; }
      @keyframes fly {
        0% { transform: translate(-50px, 140px) scale(0.6) rotate(-15deg); opacity: 0; }
        15% { opacity: 1; }
        85% { opacity: 1; }
        100% { transform: translate(550px, 20px) scale(1) rotate(-15deg); opacity: 0; }
      }
    </style>
  </defs>
  <line class="runway" x1="-50" y1="130" x2="550" y2="130" />
  
  <g transform="translate(30, 20)">
    <rect class="terminal-box" x="0" y="0" width="130" height="70" />
    <text x="65" y="25" fill="#a5b4fc" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ga số 1 🏢</text>
    <text x="65" y="45" fill="#e2e8f0" font-size="10" font-family="sans-serif" text-anchor="middle">6 526 300</text>
    <text x="65" y="58" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">hành khách/năm</text>
  </g>
  <g transform="translate(185, 20)">
    <rect class="terminal-box" x="0" y="0" width="130" height="70" />
    <text x="65" y="25" fill="#a5b4fc" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ga số 2 🏢</text>
    <text x="65" y="45" fill="#e2e8f0" font-size="10" font-family="sans-serif" text-anchor="middle">3 514 500</text>
    <text x="65" y="58" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">hành khách/năm</text>
  </g>
  <g transform="translate(340, 20)">
    <rect class="terminal-box" x="0" y="0" width="130" height="70" style="stroke: #10b981; fill: rgba(16, 185, 129, 0.05);" />
    <text x="65" y="25" fill="#34d399" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Ga số 3 (Mới) 🌟</text>
    <text x="65" y="45" fill="#e2e8f0" font-size="10" font-family="sans-serif" text-anchor="middle">? lượt</text>
    <text x="65" y="58" fill="#34d399" font-size="8" font-family="sans-serif" text-anchor="middle">Cần tính...</text>
  </g>

  <g transform="translate(30, 105)">
    <rect x="0" y="0" width="440" height="25" rx="5" fill="rgba(99, 102, 241, 0.15)" stroke="rgba(99, 102, 241, 0.2)" stroke-width="1" />
    <text x="220" y="16" fill="#e2e8f0" font-size="10" font-family="sans-serif" text-anchor="middle">🛫 <strong>TỔNG CẢ SÂN BAY:</strong> 22 851 200 lượt hành khách mỗi năm</text>
  </g>

  <g class="plane-anim">
    <path d="M0 0 L25 -5 L30 5 L10 7 L8 15 L5 15 L7 7 L0 0 Z" fill="#ffffff" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
    <path d="M10 7 L3 -2 L0 -2 L5 5 Z" fill="#3b82f6" />
    <circle cx="20" cy="-2" r="1" fill="#f59e0b" />
  </g>
</svg>
`,
  hall_svg: `
<svg class="svg-hall" viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="background: linear-gradient(135deg, #111827 0%, #1e1b4b 100%); border-radius: var(--radius-sm); border: 1px solid var(--c-border); overflow: hidden; width: 100%; height: auto; display: block; margin: 0 auto;">
  <defs>
    <style>
      .stage { fill: #312e81; stroke: #4f46e5; stroke-width: 2; }
      .curtain { fill: #b91c1c; }
      .seat { fill: #f97316; stroke: #ea580c; stroke-width: 1; rx: 2; }
      .spotlight { fill: url(#spotlightGrad); opacity: 0.15; }
    </style>
    <linearGradient id="spotlightGrad" x1="50%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fff" />
      <stop offset="100%" stop-color="#fff" stop-opacity="0" />
    </linearGradient>
  </defs>
  <polygon class="spotlight" points="250,10 100,120 400,120" />
  
  <rect class="stage" x="120" y="10" width="260" height="40" rx="5" />
  <text x="250" y="34" fill="#fbbf24" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle">🎓 LỄ TỔNG KẾT NĂM HỌC 🎓</text>
  
  <path class="curtain" d="M0 0 L100 0 L80 80 Q60 120 0 100 Z" />
  <path class="curtain" d="M500 0 L400 0 L420 80 Q440 120 500 100 Z" />

  <g transform="translate(60, 80)">
    <text x="190" y="-8" fill="#e2e8f0" font-size="9" font-family="sans-serif" text-anchor="middle" opacity="0.8">Hàng ghế 5 chỗ ngồi 🪑</text>
    <rect class="seat" x="0" y="0" width="60" height="8" rx="2" />
    <rect class="seat" x="80" y="0" width="60" height="8" rx="2" />
    <rect class="seat" x="160" y="0" width="60" height="8" rx="2" />
    <rect class="seat" x="240" y="0" width="60" height="8" rx="2" />
    <rect class="seat" x="320" y="0" width="60" height="8" rx="2" />
  </g>
  <g transform="translate(40, 110)">
    <rect class="seat" x="0" y="0" width="65" height="10" />
    <rect class="seat" x="85" y="0" width="65" height="10" />
    <rect class="seat" x="170" y="0" width="65" height="10" style="fill: #ef4444; stroke: #b91c1c;" />
    <rect class="seat" x="255" y="0" width="65" height="10" />
    <rect class="seat" x="340" y="0" width="65" height="10" />
    <text x="202" y="7" fill="#ffffff" font-size="7" font-weight="bold" font-family="sans-serif" text-anchor="middle">997 HỌC SINH</text>
  </g>
  <g transform="translate(20, 145)">
    <rect class="seat" x="0" y="0" width="70" height="12" />
    <rect class="seat" x="95" y="0" width="70" height="12" />
    <rect class="seat" x="190" y="0" width="80" height="12" style="fill: #10b981; stroke: #047857;" />
    <rect class="seat" x="295" y="0" width="70" height="12" />
    <rect class="seat" x="390" y="0" width="70" height="12" />
    <text x="230" y="9" fill="#ffffff" font-size="8" font-weight="bold" font-family="sans-serif" text-anchor="middle">CẦN ÍT NHẤT ? GHẾ</text>
  </g>
</svg>
`,
  flooring_svg: `
<svg class="svg-flooring" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="background: #1f2937; border-radius: var(--radius-sm); border: 1px solid var(--c-border); overflow: hidden; width: 100%; height: auto; display: block; margin: 0 auto;">
  <defs>
    <pattern id="wood1" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="20" height="20" fill="#78350f" />
      <line x1="0" y1="0" x2="0" y2="20" stroke="#92400e" stroke-width="1.5" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="#92400e" stroke-width="1" />
    </pattern>
    <pattern id="wood2" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
      <rect width="20" height="20" fill="#a16207" />
      <line x1="0" y1="0" x2="0" y2="20" stroke="#ca8a04" stroke-width="1.5" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="#ca8a04" stroke-width="1" />
    </pattern>
    <pattern id="tiles" width="15" height="15" patternUnits="userSpaceOnUse">
      <rect width="15" height="15" fill="#4b5563" />
      <rect x="0.5" y="0.5" width="14" height="14" fill="#6b7280" />
    </pattern>
  </defs>

  <text x="250" y="25" fill="#f9fafb" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">SƠ ĐỒ CĂN HỘ NHÀ BÁC CƯỜNG (TỔNG DIỆN TÍCH: 105 m²)</text>
  
  <g transform="translate(30, 45)">
    <rect x="0" y="0" width="100" height="120" fill="url(#tiles)" stroke="#374151" stroke-width="2" rx="4" />
    <rect x="10" y="10" width="80" height="30" rx="3" fill="rgba(0,0,0,0.4)" />
    <text x="50" y="28" fill="#e2e8f0" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">BẾP & WC 🚽🍳</text>
    <text x="50" y="70" fill="#f9fafb" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">30 m²</text>
    <text x="50" y="90" fill="#d1d5db" font-size="8" font-family="sans-serif" text-anchor="middle">(Không lát gỗ)</text>
  </g>

  <g transform="translate(145, 45)">
    <rect x="0" y="0" width="150" height="120" fill="url(#wood1)" stroke="#b45309" stroke-width="2" rx="4" />
    <rect x="15" y="10" width="120" height="30" rx="3" fill="rgba(0,0,0,0.4)" />
    <text x="75" y="28" fill="#fde68a" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">GỖ LOẠI 1 🪵</text>
    <text x="75" y="70" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">37,5 m²</text>
    <text x="75" y="90" fill="#fde68a" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">350.000đ/m²</text>
    <text x="75" y="105" fill="#e2e8f0" font-size="7" font-family="sans-serif" text-anchor="middle">(Một nửa diện tích sàn)</text>
  </g>

  <g transform="translate(310, 45)">
    <rect x="0" y="0" width="160" height="120" fill="url(#wood2)" stroke="#ca8a04" stroke-width="2" rx="4" />
    <rect x="15" y="10" width="130" height="30" rx="3" fill="rgba(0,0,0,0.4)" />
    <text x="80" y="28" fill="#fef08a" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">GỖ LOẠI 2 🪵</text>
    <text x="80" y="70" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">37,5 m²</text>
    <text x="80" y="90" fill="#fef9c3" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">270.000đ/m²</text>
    <text x="80" y="105" fill="#e2e8f0" font-size="7" font-family="sans-serif" text-anchor="middle">(Phần diện tích còn lại)</text>
  </g>

  <text x="250" y="184" fill="#9ca3af" font-size="8.5" font-family="sans-serif" text-anchor="middle">💡 Diện tích lát gỗ = Tổng diện tích - (Bếp & WC) = 105 - 30 = 75 m²</text>
</svg>
`
};

function superscriptsToCaret(str) {
  const superMap = {
    '⁰': '^0', '¹': '^1', '²': '^2', '³': '^3', '⁴': '^4',
    '⁵': '^5', '⁶': '^6', '⁷': '^7', '⁸': '^8', '⁹': '^9',
    'ᵃ': '^a', 'ᵇ': '^b', 'ᶜ': '^c', 'ᵈ': '^d', 'ᵉ': '^e',
    'ᶠ': '^f', 'ᵍ': '^g', 'ʰ': '^h', 'ⁱ': '^i', 'ʲ': '^j',
    'ᵏ': '^k', 'ˡ': '^l', 'ᵐ': '^m', 'ⁿ': '^n', 'ᵒ': '^o',
    'ᵖ': '^p', 'ʳ': '^r', 'ˢ': '^s', 'ᵗ': '^t', 'ᵘ': '^u',
    'ᵛ': '^v', 'ʷ': '^w', 'ˣ': '^x', 'ʸ': '^y', 'ᶻ': '^z'
  };
  let result = str;
  for (const [sup, caret] of Object.entries(superMap)) {
    result = result.split(sup).join(caret);
  }
  return result;
}

function normalizeAnswer(str) {
  if (!str) return '';
  let s = str.toLowerCase().trim();
  
  if (/^[0-9.,\s]+$/.test(s)) {
    s = s.replace(/[.,\s]/g, '');
  } else {
    s = superscriptsToCaret(s);
    s = s.replace(/\s+/g, '');
    s = s.replace(/·/g, '*');
    s = s.replace(/\./g, '*');
    s = s.replace(/x/g, '*');
  }
  return s;
}

function convertExponentSymbols(str) {
  const superscripts = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ',
    'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
    'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ',
    'p': 'ᵖ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ',
    'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ'
  };
  return str.replace(/\^([0-9a-z])/gi, (match, char) => {
    return superscripts[char] || match;
  });
}

function setupMathInputs() {
  const inputs = document.querySelectorAll('.workspace-input, .table-input');
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const origValue = input.value;
      const converted = convertExponentSymbols(origValue);
      if (origValue !== converted) {
        const start = input.selectionStart;
        const end = input.selectionEnd;
        input.value = converted;
        input.setSelectionRange(start - 1, end - 1);
      }
    });
  });
}

function findSgkExercise(exId) {
  for (const ch of CURRICULUM) {
    for (const l of ch.lessons) {
      if (l.exercises) {
        const found = l.exercises.find(ex => ex.id === exId);
        if (found) return found;
      }
    }
  }
  return null;
}

function renderSgkExercisesHTML(exercises, pages) {
  if (!exercises || exercises.length === 0) return '';
  const pageStr = pages ? ` (Trang ${pages})` : '';

  return `
    <div class="sgk-exercises-section">
      <div class="sgk-section-title">📝 Bài tập Sách giáo khoa${pageStr}</div>
      ${exercises.map(ex => {
        const isExCorrect = !!state.completedLessons[`sgk-ex-${ex.id}`];
        const statusClass = isExCorrect ? 'correct' : '';
        const statusBadge = isExCorrect 
          ? '<span class="ex-card-status status-correct">Đã xong (+10 XP)</span>' 
          : '<span class="ex-card-status status-todo">Chưa làm</span>';
          
        let workspaceHTML = '';
        
        if (ex.type === 'table') {
          workspaceHTML = `
            <table class="sgk-interactive-table">
              <thead>
                <tr>
                  <th>Lũy thừa</th>
                  <th>Cơ số</th>
                  <th>Số mũ</th>
                  <th>Giá trị</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>4³</strong></td>
                  <td><input type="text" class="table-input" id="input-${ex.id}-r1_base" placeholder="..." data-part-id="r1_base" ${isExCorrect ? 'disabled' : ''}></td>
                  <td><input type="text" class="table-input" id="input-${ex.id}-r1_exp" placeholder="..." data-part-id="r1_exp" ${isExCorrect ? 'disabled' : ''}></td>
                  <td><input type="text" class="table-input" id="input-${ex.id}-r1_val" placeholder="..." data-part-id="r1_val" ${isExCorrect ? 'disabled' : ''}></td>
                </tr>
                <tr>
                  <td><input type="text" class="table-input" id="input-${ex.id}-r2_pow" placeholder="..." data-part-id="r2_pow" ${isExCorrect ? 'disabled' : ''}></td>
                  <td><strong>3</strong></td>
                  <td><strong>5</strong></td>
                  <td><input type="text" class="table-input" id="input-${ex.id}-r2_val" placeholder="..." data-part-id="r2_val" ${isExCorrect ? 'disabled' : ''}></td>
                </tr>
                <tr>
                  <td><input type="text" class="table-input" id="input-${ex.id}-r3_pow" placeholder="..." data-part-id="r3_pow" ${isExCorrect ? 'disabled' : ''}></td>
                  <td><strong>2</strong></td>
                  <td><input type="text" class="table-input" id="input-${ex.id}-r3_exp" placeholder="..." data-part-id="r3_exp" ${isExCorrect ? 'disabled' : ''}></td>
                  <td><strong>128</strong></td>
                </tr>
              </tbody>
            </table>
          `;
        } else {
          workspaceHTML = `
            <div class="exercise-workspace">
              ${ex.parts.map(part => `
                <div class="workspace-row">
                  <div class="workspace-label">${part.q}</div>
                  <div class="workspace-input-group">
                    <input type="text" class="workspace-input" 
                      id="input-${ex.id}-${part.id}" 
                      placeholder="${part.placeholder || 'Nhập kết quả...'}" 
                      data-part-id="${part.id}"
                      ${isExCorrect ? 'disabled' : ''}>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }

        const illustrationHTML = ex.illustration && SVG_TEMPLATES[ex.illustration]
          ? `<div class="exercise-illustration-box">${SVG_TEMPLATES[ex.illustration]}</div>`
          : '';

        return `
          <div class="exercise-card ${statusClass}" id="card-ex-${ex.id}">
            <div class="ex-card-header">
              <div class="ex-card-title">✨ ${ex.title}</div>
              <div id="badge-ex-${ex.id}">${statusBadge}</div>
            </div>
            <div class="ex-card-desc">${ex.desc}</div>
            
            ${illustrationHTML}
            ${workspaceHTML}
            
            <div class="ex-card-actions">
              <button class="btn btn-secondary ex-btn ex-btn-verify" 
                id="btn-verify-${ex.id}" 
                onclick="verifySgkAnswer('${ex.id}')"
                ${isExCorrect ? 'style="display:none;"' : ''}>
                Kiểm tra đáp án
              </button>
              <button class="btn ex-btn ex-btn-hint" onclick="toggleSgkHint('${ex.id}')">
                Gợi ý
              </button>
              <button class="btn ex-btn ex-btn-solution" onclick="toggleSgkSolution('${ex.id}')">
                Xem Lời giải chi tiết
              </button>
            </div>
            
            <div class="ex-hint-panel" id="hint-${ex.id}">
              <div class="panel-title panel-title-hint">💡 Gợi ý giải:</div>
              <div class="hint-content">
                ${ex.parts && ex.parts.length > 0 ? ex.parts.map(p => `• ${p.q ? `<strong>${p.q}:</strong> ` : ''}${p.hint || ''}`).join('<br>') : ''}
              </div>
            </div>
            
            <div class="ex-solution-panel" id="sol-${ex.id}">
              <div class="panel-title panel-title-solution">📌 Lời giải chi tiết:</div>
              <div class="solution-content">${ex.solution}</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function verifySgkAnswer(exId) {
  const ex = findSgkExercise(exId);
  if (!ex) return;

  let allCorrect = true;
  const incorrectParts = [];

  ex.parts.forEach(part => {
    const inputEl = document.getElementById(`input-${ex.id}-${part.id}`);
    if (!inputEl) return;

    const val = inputEl.value.trim();
    const normVal = normalizeAnswer(val);
    const isPartCorrect = part.ans.some(allowed => normalizeAnswer(allowed) === normVal);
    
    if (isPartCorrect) {
      inputEl.classList.remove('wrong');
      inputEl.classList.add('correct');
    } else {
      inputEl.classList.remove('correct');
      inputEl.classList.add('wrong');
      allCorrect = false;
      incorrectParts.push(part);
    }
  });

  if (allCorrect) {
    ex.parts.forEach(part => {
      const inputEl = document.getElementById(`input-${ex.id}-${part.id}`);
      if (inputEl) inputEl.disabled = true;
    });

    const verifyBtn = document.getElementById(`btn-verify-${ex.id}`);
    if (verifyBtn) verifyBtn.style.display = 'none';

    const badgeEl = document.getElementById(`badge-ex-${ex.id}`);
    if (badgeEl) {
      badgeEl.innerHTML = '<span class="ex-card-status status-correct">Đã xong (+10 XP)</span>';
    }

    const cardEl = document.getElementById(`card-ex-${ex.id}`);
    if (cardEl) cardEl.classList.add('correct');

    const storageKey = `sgk-ex-${ex.id}`;
    if (!state.completedLessons[storageKey]) {
      state.completedLessons[storageKey] = true;
      saveState();
      addXP(10);
      playSound('correct');
      
      const PRAISE_MESSAGES = [
        `Xuất sắc! Bạn đã giải đúng bài ${ex.id}! Nhận thêm +10 XP nha! 🦄✨`,
        `Tuyệt vời! Bài ${ex.id} đã được chinh phục hoàn hảo! 🌟🚀`,
        `Kỳ Lân Pi vỗ tay hoan hô bạn đã vượt qua thử thách bài ${ex.id}! 🌈💖`,
        `Đúng rồi! Bạn làm bài tập siêu thế, Kỳ Lân Pi tự hào lắm! 🥰🎉`
      ];
      setMascotState('success', PRAISE_MESSAGES[Math.floor(Math.random() * PRAISE_MESSAGES.length)]);
    } else {
      setMascotState('success', `Đúng rồi! Bạn thật kiên trì giải lại bài ${ex.id}! 🌟`);
    }
    
    const solPanel = document.getElementById(`sol-${ex.id}`);
    if (solPanel) solPanel.classList.add('open');
  } else {
    playSound('wrong');
    
    const ENCOURAGE_MESSAGES = [
      `Có một vài chỗ chưa khớp rồi. Xem kỹ lại gợi ý của Kỳ Lân Pi nhé! 💪`,
      `Đừng nản chí! Kỳ Lân Pi thấy bạn sắp tìm ra lời giải đúng rồi đó! 🧩`,
      `Thử kiểm tra lại các số mũ hoặc phép tính xem sao nha! ⚡`,
      `Chưa chính xác hoàn toàn rồi. Thử lại nhé, Kỳ Lân Pi tin bạn làm được! 💖`
    ];
    setMascotState('wrong', ENCOURAGE_MESSAGES[Math.floor(Math.random() * ENCOURAGE_MESSAGES.length)]);
    
    const hintPanel = document.getElementById(`hint-${ex.id}`);
    if (hintPanel) hintPanel.classList.add('open');
  }
}

function toggleSgkHint(exId) {
  const panel = document.getElementById(`hint-${exId}`);
  if (panel) panel.classList.toggle('open');
}

function toggleSgkSolution(exId) {
  const panel = document.getElementById(`sol-${exId}`);
  if (panel) panel.classList.toggle('open');
}

// ============================================================
// LESSON VIEW
// ============================================================
function findLesson(lessonId) {
  for (const ch of CURRICULUM) {
    for (const l of ch.lessons) {
      if (l.id === lessonId) return { chapter: ch, lesson: l };
    }
  }
  return null;
}

function findAdjacentLesson(lessonId, dir) {
  const all = getAllLessons();
  const idx = all.findIndex(l => l.id === lessonId);
  if (dir === 'prev' && idx > 0) return all[idx - 1];
  if (dir === 'next' && idx < all.length - 1) return all[idx + 1];
  return null;
}

function showLesson(lessonId) {
  state.currentLesson = lessonId;
  showView('lesson', lessonId);
}

function renderLesson(lessonId) {
  const found = findLesson(lessonId);
  if (!found) return;
  const { chapter: ch, lesson: l } = found;
  const isDone = !!state.completedLessons[lessonId];
  const prevL = findAdjacentLesson(lessonId, 'prev');
  const nextL = findAdjacentLesson(lessonId, 'next');

  setBreadcrumb([ch.title, `Bài ${l.num}: ${l.title}`]);

  document.querySelectorAll('.lesson-item').forEach(el => el.classList.remove('active'));
  const liEl = document.getElementById('li-' + lessonId);
  if (liEl) liEl.classList.add('active');

  const theoryHTML = (l.theory || []).map(t => `
    <div class="theory-block">
      <div class="tb-title">${t.title}</div>
      <p>${t.content}</p>
      ${t.svg ? `<div class="theory-illustration" style="margin: 16px 0; display: flex; justify-content: center; background: var(--c-surface2); padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--c-border);">${t.svg}</div>` : ''}
      ${(t.formulas || []).map(f => `<div class="formula">${f}</div>`).join('')}
      ${(t.notes || []).length > 0 ? `<div class="note-block" style="margin-top:10px">
        <div class="nb-title">💡 Chú ý</div>
        <ul>${t.notes.map(n => `<li>${n}</li>`).join('')}</ul>
      </div>` : ''}
    </div>
  `).join('');

  const examplesHTML = (l.examples || []).map(ex => `
    <div class="example-block">
      <div class="ex-title">📝 ${ex.title}</div>
      <p>${ex.question}</p>
      <div class="ex-solution">📌 Giải:
${ex.solution}</div>
    </div>
  `).join('');

  document.getElementById('view-lesson').innerHTML = `
    <div class="lesson-header">
      <div class="lesson-meta">
        <span class="lesson-badge">Bài ${l.num}</span>
        <span class="lesson-xp-badge">⭐ +${l.xp} XP</span>
        ${isDone ? '<span style="color:var(--c-emerald);font-size:12px;font-weight:700">✅ Đã hoàn thành</span>' : ''}
      </div>
      <div class="lesson-title">${l.title}</div>
      <div class="lesson-tags">${(l.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="lesson-skills">${(l.skills||[]).map(s=>`<span class="skill-item">${s}</span>`).join('')}</div>
    </div>

    <div class="lesson-body">
      ${l.exercises && l.exercises.length > 0 ? `
        <div class="sgk-exercises-quick-link" onclick="const el = document.querySelector('.sgk-exercises-section'); if(el) el.scrollIntoView({ behavior: 'smooth' });" style="cursor: pointer; background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08)); border: 1px solid rgba(99, 102, 241, 0.25); padding: 14px 20px; border-radius: var(--radius-sm); margin-bottom: 25px; display: flex; align-items: center; justify-content: space-between; transition: all 0.3s ease;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 24px; line-height: 1;">📝</span>
            <div>
              <div style="font-weight: 800; color: var(--c-accent2); font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase;">BÀI TẬP SGK TƯƠNG TÁC ĐANG CHỜ BẠN!</div>
              <div style="font-size: 12px; color: var(--c-text2); margin-top: 2px;">Bài học này có ${l.exercises.length} bài tập Kết nối tri thức (Trang ${l.pages}) cực hay với hình ảnh trực quan.</div>
            </div>
          </div>
          <button class="btn btn-primary" style="padding: 6px 14px; font-size: 12px; font-weight: 700; margin: 0; background: linear-gradient(135deg, var(--c-accent), var(--c-accent2)); border: none; box-shadow: 0 4px 10px rgba(99, 102, 241, 0.2);">Làm ngay ➔</button>
        </div>
      ` : ''}

      ${l.mnemonic ? `
        <div class="mnemonic-box">
          <div class="mnemonic-mascot">🦄</div>
          <div class="mnemonic-content">
            <div class="mnemonic-title">🪄 Thần Chú Kỳ Lân Pi Ghi Nhớ Nhanh!</div>
            <div class="mnemonic-text">${l.mnemonic}</div>
          </div>
        </div>
      ` : ''}

      ${theoryHTML ? `<div class="lesson-section">
        <h3>📖 Lý thuyết</h3>
        ${theoryHTML}
      </div>` : ''}

      ${examplesHTML ? `<div class="lesson-section">
        <h3>📓 Ví dụ minh họa</h3>
        ${examplesHTML}
      </div>` : ''}

      ${renderSgkExercisesHTML(l.exercises, l.pages)}
    </div>

    <div class="lesson-nav">
      <div style="display:flex;gap:10px">
        ${prevL ? `<button class="btn btn-secondary" onclick="showLesson('${prevL.id}')">← Bài trước</button>` : '<div></div>'}
      </div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-gold" id="startQuizBtn" onclick="startQuiz('${l.id}')">
          🎯 Làm bài quiz (+${l.xp} XP)
        </button>
        ${nextL ? `<button class="btn btn-secondary" onclick="showLesson('${nextL.id}')">Bài tiếp →</button>` : ''}
      </div>
    </div>
  `;

  // Pre-fill answers for completed SGK exercises and setup events
  if (l.exercises) {
    l.exercises.forEach(ex => {
      const isExCorrect = !!state.completedLessons[`sgk-ex-${ex.id}`];
      if (isExCorrect) {
        ex.parts.forEach(part => {
          const inputEl = document.getElementById(`input-${ex.id}-${part.id}`);
          if (inputEl) {
            inputEl.value = part.ans[0];
            inputEl.classList.add('correct');
          }
        });
      }
    });
    setupMathInputs();
    
    // Welcome the user with a Mascot greeting specifically about the SGK exercises
    setTimeout(() => {
      setMascotState('idle', `Kỳ Lân Pi phát hiện Bài ${l.num} có phần Bài tập SGK tương tác cực kì sinh động ở cuối trang! Mau cuộn xuống làm nhé! 🦄✨`);
    }, 800);
  }
}

// ============================================================
// QUIZ ENGINE
// ============================================================
function startQuiz(lessonId) {
  const found = findLesson(lessonId);
  if (!found) return;
  const { lesson: l } = found;
  if (!l.quiz || l.quiz.length === 0) {
    showToast('⚠️', 'Bài này chưa có câu hỏi quiz!');
    return;
  }

  quizState = {
    lessonId,
    questions: [...l.quiz].sort(() => Math.random() - 0.5),
    current: 0,
    score: 0,
    answered: false,
    timer: null,
    timeLeft: 25
  };

  showView('quiz');
  renderQuestion();
}

function renderQuestion() {
  const qs = quizState.questions;
  const idx = quizState.current;
  const q = qs[idx];
  const found = findLesson(quizState.lessonId);
  const ch = found?.chapter;

  setBreadcrumb([ch?.title || '', 'Quiz']);

  const dotsHTML = qs.map((_, i) => {
    let cls = i < idx ? 'done' : i === idx ? 'current' : '';
    return `<div class="qp-dot ${cls}"></div>`;
  }).join('');

  const optsHTML = q.opts.map((opt, i) => `
    <button class="option-btn" id="opt-${i}" onclick="selectAnswer(${i})">
      <div class="opt-key">${String.fromCharCode(65+i)}</div>
      <span>${opt}</span>
    </button>
  `).join('');

  document.getElementById('view-quiz').innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress">
        <span class="qp-label">Câu ${idx+1}/${qs.length}</span>
        <div class="qp-dots">${dotsHTML}</div>
        <span class="quiz-score">✅ ${quizState.score}</span>
      </div>
      <div class="quiz-timer">
        <span>⏱ <span id="timer-val">${quizState.timeLeft}</span>s</span>
        <div class="timer-bar"><div class="timer-fill" id="timer-fill" style="width:100%"></div></div>
      </div>
    </div>

    <div class="question-card">
      <div class="question-num">Câu hỏi ${idx+1}</div>
      <div class="question-text">${q.q}</div>
      <div class="options-grid">${optsHTML}</div>
    </div>

    <div id="explanation-area"></div>

    <div style="display:flex;justify-content:flex-end;margin-top:8px">
      <button class="btn btn-secondary" onclick="skipQuestion()">Bỏ qua →</button>
    </div>
  `;

  startTimer();
}

function startTimer() {
  clearInterval(quizState.timer);
  quizState.timeLeft = 25;
  const fill = document.getElementById('timer-fill');
  const val = document.getElementById('timer-val');

  quizState.timer = setInterval(() => {
    quizState.timeLeft--;
    if (val) val.textContent = quizState.timeLeft;
    if (fill) fill.style.width = (quizState.timeLeft / 25 * 100) + '%';
    if (quizState.timeLeft <= 0) {
      clearInterval(quizState.timer);
      if (!quizState.answered) timeUp();
    }
  }, 1000);
}

function timeUp() {
  quizState.answered = true;
  const q = quizState.questions[quizState.current];
  const optBtns = document.querySelectorAll('.option-btn');
  optBtns.forEach(btn => btn.classList.add('disabled'));
  optBtns[q.ans]?.classList.add('correct');

  document.getElementById('explanation-area').innerHTML = `
    <div class="explanation-card wrong-exp">
      <div class="ec-title wrong-title">⏰ Hết thời gian!</div>
      <p>Đáp án đúng là: <strong>${q.opts[q.ans]}</strong><br>${q.exp}</p>
    </div>
  `;

  setTimeout(() => nextQuestion(), 2500);
}

function selectAnswer(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  clearInterval(quizState.timer);

  const q = quizState.questions[quizState.current];
  const isCorrect = idx === q.ans;
  const optBtns = document.querySelectorAll('.option-btn');

  optBtns.forEach(btn => btn.classList.add('disabled'));
  optBtns[idx]?.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) optBtns[q.ans]?.classList.add('correct');

  if (isCorrect) {
    quizState.score++;
    playSound('correct');
    const CORRECT_MESSAGES = [
      "Tuyệt vời ông mặt trời! Bạn đỉnh quá đi! 🎉",
      "Quá chính xác! Bạn là thiên tài toán học! 🌟",
      "Đúng rồi! Bạn làm Kỳ Lân Pi tự hào lắm đó! 🦄✨",
      "Kỳ Lân Pi vẫy đuôi cầu vồng ăn mừng vì bạn quá giỏi! 🌈✨"
    ];
    setMascotState('success', CORRECT_MESSAGES[Math.floor(Math.random() * CORRECT_MESSAGES.length)]);
  } else {
    playSound('wrong');
    const WRONG_MESSAGES = [
      "Ui da, xém chút nữa là trúng rồi! Thử lại nha! 💪",
      "Không sao cả, sai là mẹ của thành công! Học tiếp nào! 🌱",
      "Đừng nản lòng nhé! Kỳ Lân Pi luôn tin tưởng bạn! 💖",
      "Cố lên bạn ơi, bài toán này có chút lắt léo thôi! 🧩"
    ];
    setMascotState('wrong', WRONG_MESSAGES[Math.floor(Math.random() * WRONG_MESSAGES.length)]);
  }

  const expEl = document.getElementById('explanation-area');
  if (expEl) {
    expEl.innerHTML = `
      <div class="explanation-card ${isCorrect ? '' : 'wrong-exp'}">
        <div class="ec-title ${isCorrect ? 'correct-title' : 'wrong-title'}">
          ${isCorrect ? '✅ Chính xác!' : '❌ Chưa đúng!'}
        </div>
        <p>${q.exp}</p>
      </div>
    `;
  }

  setTimeout(() => nextQuestion(), isCorrect ? 1800 : 2500);
}

function skipQuestion() {
  if (!quizState.answered) {
    clearInterval(quizState.timer);
    nextQuestion();
  }
}

function nextQuestion() {
  quizState.answered = false;
  quizState.current++;
  if (quizState.current >= quizState.questions.length) {
    showResult();
  } else {
    setMascotState('idle', `Cố lên! Câu tiếp theo nhé! ⚡`);
    renderQuestion();
  }
}

function showResult() {
  clearInterval(quizState.timer);
  const total = quizState.questions.length;
  const score = quizState.score;
  const pct = Math.round(score / total * 100);

  const found = findLesson(quizState.lessonId);
  const l = found?.lesson;
  const xpEarned = pct >= 60 ? (l ? Math.round(l.xp * pct / 100) : 0) : 0;

  let emoji, title, sub;
  if (pct === 100) { 
    emoji = '🏆'; title = 'Hoàn hảo!'; sub = 'Bạn đã trả lời đúng tất cả các câu!'; 
    playSound('levelup');
    setMascotState('success', `Chúc mừng! Bạn đạt ${score}/${total} điểm tuyệt đối! Kỳ Lân Pi quá ngưỡng mộ bạn! 👑🌈`);
  }
  else if (pct >= 80) { 
    emoji = '🌟'; title = 'Xuất sắc!'; sub = 'Kết quả rất tốt! Tiếp tục phát huy nhé!'; 
    playSound('levelup');
    setMascotState('success', `Tuyệt vời! Bạn hoàn thành với ${score}/${total} điểm! Bạn đỉnh quá xá! ⭐`);
  }
  else if (pct >= 60) { 
    emoji = '😊'; title = 'Tốt lắm!'; sub = 'Bạn đã vượt qua bài kiểm tra!'; 
    playSound('correct');
    setMascotState('success', `Chúc mừng! Bạn đạt ${score}/${total} điểm! Luyện tập thêm để đạt điểm tối đa cùng Kỳ Lân Pi nhé! 🌱`);
  }
  else { 
    emoji = '💪'; title = 'Cố lên!'; sub = 'Hãy đọc lại lý thuyết và thử lại nhé!'; 
    playSound('wrong');
    setMascotState('idle', `Cố lên nha! Bạn đạt ${score}/${total} điểm. Hãy đọc kỹ lý thuyết và thử lại cùng Kỳ Lân Pi nào! 🦄`);
  }

  if (xpEarned > 0) {
    addXP(xpEarned);
    state.completedLessons[quizState.lessonId] = true;
    saveState();
    buildSidebar();
  }

  document.getElementById('view-quiz').innerHTML = `
    <div class="result-view">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">${title}</div>
      <div class="result-sub">${sub}</div>
      <div class="result-stats">
        <div class="rs-item">
          <div class="rs-val" style="color:var(--c-emerald)">${score}</div>
          <div class="rs-label">Câu đúng</div>
        </div>
        <div class="rs-item">
          <div class="rs-val" style="color:var(--c-rose)">${total - score}</div>
          <div class="rs-label">Câu sai</div>
        </div>
        <div class="rs-item">
          <div class="rs-val" style="color:var(--c-gold)">+${xpEarned}</div>
          <div class="rs-label">XP nhận được</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-secondary" onclick="startQuiz('${quizState.lessonId}')">🔄 Làm lại</button>
        <button class="btn btn-primary" onclick="showLesson('${quizState.lessonId}')">📖 Xem lại bài</button>
        ${pct >= 60 ? `<button class="btn btn-gold" onclick="goNextLesson('${quizState.lessonId}')">Bài tiếp → </button>` : ''}
      </div>
    </div>
  `;
}

function goNextLesson(lessonId) {
  const next = findAdjacentLesson(lessonId, 'next');
  if (next) showLesson(next.id);
  else showView('home');
}

// ============================================================
// PROGRESS VIEW
// ============================================================
function renderProgress() {
  const done = getDoneLessons();
  const total = getTotalLessons();
  const sgkExercises = CURRICULUM.flatMap(ch => ch.lessons || []).flatMap(l => l.exercises || []);
  const sgkDone = sgkExercises.filter(ex => state.completedLessons[`sgk-ex-${ex.id}`]).length;
  const sgkTotal = sgkExercises.length;

  document.getElementById('view-progress').innerHTML = `
    <div class="dashboard-header">
      <h2>📊 Tiến độ học tập</h2>
      <p>Theo dõi quá trình chinh phục Toán 6 của bạn</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card done">
        <div class="sc-icon">📚</div>
        <div class="sc-val">${done}/${total}</div>
        <div class="sc-label">Bài đã hoàn thành</div>
      </div>
      <div class="stat-card xp">
        <div class="sc-icon">⭐</div>
        <div class="sc-val">${state.xp}</div>
        <div class="sc-label">Tổng điểm XP</div>
      </div>
      <div class="stat-card level">
        <div class="sc-icon">${getLevelEmoji(state.level)}</div>
        <div class="sc-val">${state.level}</div>
        <div class="sc-label">${getLevelName(state.level)}</div>
      </div>
      <div class="stat-card streak">
        <div class="sc-icon">🔥</div>
        <div class="sc-val">${state.streak}</div>
        <div class="sc-label">Streak học liên tiếp</div>
      </div>
    </div>

    ${sgkTotal > 0 ? `
    <div class="progress-section" style="margin-top: 25px;">
      <div class="section-title">📝 Tiến độ Bài tập Sách giáo khoa Tương Tác</div>
      <div class="progress-bar-wrap" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05)); border: 1px solid rgba(99, 102, 241, 0.2); padding: 16px; border-radius: var(--radius); cursor: pointer; transition: all 0.3s ease;" onclick="showFirstUnfinishedSgkLesson()" onmouseover="this.style.borderColor='rgba(99, 102, 241, 0.5)'; this.style.boxShadow='0 4px 15px rgba(99, 102, 241, 0.1)';" onmouseout="this.style.borderColor='rgba(99, 102, 241, 0.2)'; this.style.boxShadow='none';">
        <div class="pb-header" style="margin-bottom: 8px;">
          <span class="pb-label" style="font-weight: 700; color: var(--c-text);">Bài tập tương tác (Tất cả các chương)</span>
          <span class="pb-pct" style="font-weight: 700; color: var(--c-accent2);">${sgkDone}/${sgkTotal} bài hoàn thành · ${Math.round(sgkDone/sgkTotal * 100)}%</span>
        </div>
        <div class="pb-track" style="background: rgba(255,255,255,0.05);"><div class="pb-fill" style="width:${sgkDone/sgkTotal * 100}%; background: linear-gradient(90deg, var(--c-accent), var(--c-accent2));"></div></div>
      </div>
    </div>
    ` : ''}

    <div class="section-title" style="margin-top: 25px;">📋 Chi tiết từng chương</div>
    ${CURRICULUM.map(ch => {
      const pct = getChapterProgress(ch.id);
      const chDone = ch.lessons.filter(l => state.completedLessons[l.id]).length;
      return `
        <div class="progress-bar-wrap" style="margin-bottom:10px">
          <div class="pb-header">
            <span class="pb-label">${ch.emoji} ${ch.title} (Tập ${ch.volume})</span>
            <span class="pb-pct">${chDone}/${ch.lessons.length} bài · ${pct}%</span>
          </div>
          <div class="pb-track"><div class="pb-fill" style="width:${pct}%"></div></div>
        </div>
      `;
    }).join('')}
  `;
}

function showFirstUnfinishedSgkLesson() {
  for (const ch of CURRICULUM) {
    for (const l of ch.lessons) {
      if (l.exercises && l.exercises.length > 0) {
        const unfinished = l.exercises.some(ex => !state.completedLessons[`sgk-ex-${ex.id}`]);
        if (unfinished) {
          showLesson(l.id);
          setTimeout(() => {
            const el = document.querySelector('.sgk-exercises-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 500);
          return;
        }
      }
    }
  }
  // Default to Lesson 1 if all are complete
  showLesson('c1-l1');
  setTimeout(() => {
    const el = document.querySelector('.sgk-exercises-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 500);
}

// ============================================================
// INIT
// ============================================================
function init() {
  loadState();
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.add('collapsed');
  }

  // Auto-collapse sidebar on content click for mobile
  document.getElementById('content').addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.add('collapsed');
    }
  });

  // Inject Mascot SVG
  const avatarEl = document.getElementById('mascot-avatar');
  if (avatarEl) {
    avatarEl.innerHTML = MASCOT_SVG;
  }
  // Initialize Mascot Bubble state
  setTimeout(() => {
    setMascotState('idle', 'Chào bạn! Mình là Kỳ Lân Pi, cùng học Toán nhé! 🦄✨');
  }, 1000);

  // Hook up initial theme selection
  if (state.theme) {
    changeTheme(state.theme);
  } else {
    changeTheme('dark');
  }

  updateTopbar();
  buildSidebar();
  renderHome();
  
  // Kích hoạt kéo thả cho Kỳ Lân Pi
  makeMascotDraggable();

  // Bắt đầu tự động phóng to thu nhỏ (scale) ngẫu nhiên
  startRandomScaling();
}

// ============================================================
// MASCOT UPGRADE FEATURES (EVOLUTION, DRAG & DROP, MINIMIZE)
// ============================================================
function updateMascotEvolution() {
  const mascotContainer = document.getElementById('mascot-container');
  if (!mascotContainer) return;
  
  mascotContainer.classList.remove('evo-tier-1', 'evo-tier-2', 'evo-tier-3', 'evo-tier-4');
  
  const lv = state.level || 1;
  if (lv >= 9) {
    mascotContainer.classList.add('evo-tier-4'); // Cánh thiên sứ
  } else if (lv >= 6) {
    mascotContainer.classList.add('evo-tier-3'); // Mũ phù thủy
  } else if (lv >= 3) {
    mascotContainer.classList.add('evo-tier-2'); // Kính thám tử
  } else {
    mascotContainer.classList.add('evo-tier-1'); // Mầm cây
  }
}

function toggleMascotMinimize(event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const mascotContainer = document.getElementById('mascot-container');
  if (!mascotContainer) return;
  
  const isMin = mascotContainer.classList.toggle('minimized');
  
  if (isMin) {
    if (state.bubbleTimeout) clearTimeout(state.bubbleTimeout);
    const bubble = document.getElementById('mascot-bubble');
    if (bubble) bubble.classList.remove('show');
  } else {
    setMascotState('idle', 'Kỳ Lân Pi đã thức giấc rồi đây! 🦄✨');
  }
}

function startRandomScaling() {
  const avatar = document.getElementById('mascot-avatar');
  if (!avatar) return;
  
  function triggerRandomScale() {
    const container = document.getElementById('mascot-container');
    // Chỉ phóng to thu nhỏ nếu mascot không ở chế độ ngủ (minimized)
    if (container && !container.classList.contains('minimized')) {
      const scales = [0.8, 0.9, 1.0, 1.15, 1.25];
      const randomScale = scales[Math.floor(Math.random() * scales.length)];
      
      avatar.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      avatar.style.transform = `scale(${randomScale})`;
      
      // Hiển thị bóng chat tương tác vui vẻ theo trạng thái phóng to thu nhỏ
      if (randomScale >= 1.15) {
        setMascotState('idle', 'Ú òa! Kỳ Lân Pi phóng to ra để nhìn bạn học rõ hơn nè! 🦄🔍');
      } else if (randomScale <= 0.9) {
        setMascotState('idle', 'Kỳ Lân Pi thu nhỏ lại một chút để bạn tập trung làm bài nhé! 🦄🌱');
      } else {
        // Đôi khi reset về bình thường thì nói câu chào năng lượng
        const normalMsgs = [
          "Kỳ Lân Pi đang đồng hành cùng bạn học giỏi Toán! 🌈✨",
          "Năng lượng học tập của bạn tuyệt vời quá! 🚀",
          "Bạn đang làm rất tốt, cố lên nhé! 💖"
        ];
        setMascotState('idle', normalMsgs[Math.floor(Math.random() * normalMsgs.length)]);
      }
    }
    
    // Lên lịch cho lần thay đổi tiếp theo sau 12 - 24 giây ngẫu nhiên
    const nextDelay = 12000 + Math.random() * 12000;
    setTimeout(triggerRandomScale, nextDelay);
  }
  
  // Khởi động lần đầu sau 8 giây
  setTimeout(triggerRandomScale, 8000);
}

function makeMascotDraggable() {
  const elmnt = document.getElementById('mascot-container');
  const avatar = document.getElementById('mascot-avatar');
  if (!elmnt || !avatar) return;

  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let startX = 0, startY = 0;
  let hasDragged = false;
  
  avatar.onmousedown = dragMouseDown;
  avatar.ontouchstart = dragTouchStart;

  function dragMouseDown(e) {
    e = e || window.event;
    // Không kéo thả nếu click vào các nút điều khiển hoặc khi mascot thu nhỏ
    if (e.target.classList.contains('control-btn') || elmnt.classList.contains('minimized')) return;
    
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    hasDragged = false;
    
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function dragTouchStart(e) {
    if (elmnt.classList.contains('minimized')) return;
    if (e.touches.length === 1) {
      // Không kéo thả nếu chạm vào các nút điều khiển
      if (e.target.classList.contains('control-btn')) return;
      
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      hasDragged = false;
      
      document.ontouchend = closeDragElement;
      document.ontouchmove = elementTouchDrag;
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // Đo khoảng cách di chuyển để phân biệt giữa kéo thả và click chuột
    if (Math.abs(e.clientX - startX) > 6 || Math.abs(e.clientY - startY) > 6) {
      hasDragged = true;
    }
    
    updatePosition(elmnt.offsetLeft - pos1, elmnt.offsetTop - pos2);
  }

  function elementTouchDrag(e) {
    if (e.touches.length === 1) {
      pos1 = pos3 - e.touches[0].clientX;
      pos2 = pos4 - e.touches[0].clientY;
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      
      if (Math.abs(e.touches[0].clientX - startX) > 6 || Math.abs(e.touches[0].clientY - startY) > 6) {
        hasDragged = true;
      }
      
      updatePosition(elmnt.offsetLeft - pos1, elmnt.offsetTop - pos2);
    }
  }

  function updatePosition(left, top) {
    const maxLeft = window.innerWidth - elmnt.offsetWidth - 10;
    const maxTop = window.innerHeight - elmnt.offsetHeight - 10;
    
    const finalLeft = Math.max(10, Math.min(left, maxLeft));
    const finalTop = Math.max(10, Math.min(top, maxTop));
    
    elmnt.style.left = finalLeft + "px";
    elmnt.style.top = finalTop + "px";
    elmnt.style.bottom = "auto";
    elmnt.style.right = "auto";
    
    localStorage.setItem('toan6_mascot_left', finalLeft);
    localStorage.setItem('toan6_mascot_top', finalTop);
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
    
    // Nếu chỉ là click (không kéo đi đâu hoặc kéo dưới 6px), kích hoạt tiếng cười khúc khích
    if (!hasDragged) {
      triggerMascotGiggle();
    }
  }
  
  // Khôi phục vị trí từ localStorage nếu có
  const savedLeft = localStorage.getItem('toan6_mascot_left');
  const savedTop = localStorage.getItem('toan6_mascot_top');
  if (savedLeft && savedTop) {
    elmnt.style.left = savedLeft + "px";
    elmnt.style.top = savedTop + "px";
    elmnt.style.bottom = "auto";
    elmnt.style.right = "auto";
  }
}

window.addEventListener('DOMContentLoaded', init);