// ============================================================
// MASCOT KỲ LÂN PI COMPANION & SOUND EFFECTS (WEB AUDIO API)
// ============================================================
const MASCOT_SVG = `<svg class="mascot-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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

    <!-- Blushing Cheeks -->
    <ellipse cx="37" cy="47" rx="3" ry="1.5" fill="#ff7675" opacity="0.6"/>
    <ellipse cx="63" cy="47" rx="3" ry="1.5" fill="#ff7675" opacity="0.6"/>

    <!-- Flowing Front Mane -->
    <path d="M48 30 C42 22 36 34 38 38 C42 34 46 32 48 30 Z" fill="#ffeaa7"/>

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
          return `<div class="lesson-item ${done ? 'done' : ''}" id="li-${l.id}" onclick="showLesson('${l.id}'); if(window.innerWidth <= 768) { document.getElementById('sidebar').classList.add('collapsed'); }">
            <span class="lesson-check">${done ? '✅' : '○'}</span>
            <span class="lesson-name">Bài ${l.num}: ${l.title}</span>
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

    <div class="section-title">📋 Chi tiết từng chương</div>
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
}

window.addEventListener('DOMContentLoaded', init);