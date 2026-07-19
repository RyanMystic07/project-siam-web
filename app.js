const root = document.documentElement;
const body = document.body;
const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const primaryNav = document.getElementById("primary-nav");
const themeToggle = document.getElementById("theme-toggle");
const motionToggle = document.getElementById("motion-toggle");
const toast = document.getElementById("toast");
const mapDialog = document.getElementById("map-dialog");
const discordDialog = document.getElementById("discord-dialog");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const THEME_KEY = "neramit-theme";
const MOTION_KEY = "neramit-motion";

function readPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // The interface still works when storage is blocked.
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
}

function setTheme(theme, announce = false) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "เปิดโหมดสว่าง" : "เปิดโหมดมืด");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", nextTheme === "dark" ? "#18100f" : "#7b241f");
  savePreference(THEME_KEY, nextTheme);
  if (announce) showToast(nextTheme === "dark" ? "เปิดโหมดมืดแล้ว" : "เปิดโหมดสว่างแล้ว");
}

function setMotion(enabled, announce = false) {
  root.dataset.motion = enabled ? "on" : "off";
  motionToggle.setAttribute("aria-pressed", String(enabled));
  motionToggle.setAttribute("aria-label", enabled ? "ปิดแอนิเมชัน" : "เปิดแอนิเมชัน");
  savePreference(MOTION_KEY, enabled ? "on" : "off");
  if (announce) showToast(enabled ? "เปิดแอนิเมชันแล้ว" : "ปิดแอนิเมชันแล้ว");
}

function closeMenu() {
  primaryNav.classList.remove("is-open");
  header.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "เปิดเมนู");
}

function toggleMenu() {
  const willOpen = !primaryNav.classList.contains("is-open");
  primaryNav.classList.toggle("is-open", willOpen);
  header.classList.toggle("menu-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "ปิดเมนู" : "เปิดเมนู");
}

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function openDiscord() {
  const inviteUrl = body.dataset.discordUrl.trim();
  if (inviteUrl) {
    window.open(inviteUrl, "_blank", "noopener,noreferrer");
    return;
  }
  discordDialog.showModal();
}

function closeOnBackdrop(event) {
  if (event.target === event.currentTarget) event.currentTarget.close();
}

const storedTheme = readPreference(THEME_KEY);
const storedMotion = readPreference(MOTION_KEY);
setTheme(storedTheme || "light");
setMotion(storedMotion ? storedMotion === "on" : !reducedMotionQuery.matches);
updateHeader();

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
});

motionToggle.addEventListener("click", () => {
  setMotion(root.dataset.motion !== "on", true);
});

menuToggle.addEventListener("click", toggleMenu);
primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.querySelectorAll("[data-discord-action]").forEach((button) => {
  button.addEventListener("click", openDiscord);
});

document.getElementById("open-map").addEventListener("click", () => mapDialog.showModal());
document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

mapDialog.addEventListener("click", closeOnBackdrop);
discordDialog.addEventListener("click", closeOnBackdrop);

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 1088) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && primaryNav.classList.contains("is-open")) closeMenu();
});

reducedMotionQuery.addEventListener("change", (event) => {
  if (!readPreference(MOTION_KEY)) setMotion(!event.matches);
});

// auto-update copyright year
const footerYear = document.getElementById("footer-year");
if (footerYear) footerYear.textContent = new Date().getFullYear();

// footer discord button
document.querySelectorAll(".footer-link[data-discord-action]").forEach((btn) => {
  btn.addEventListener("click", openDiscord);
});

// scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal-section").forEach((el) => {
  revealObserver.observe(el);
});

// ─── A: Parallax hero ────────────────────────────────────────────────────────
const heroMedia = document.getElementById("hero-media");

function updateParallax() {
  if (!heroMedia || root.dataset.motion === "off") return;
  const scrolled = window.scrollY;
  const heroHeight = heroMedia.closest(".hero").offsetHeight;
  if (scrolled > heroHeight) return;
  heroMedia.style.transform = `translateY(${scrolled * 0.28}px) scale(1)`;
}

window.addEventListener("scroll", updateParallax, { passive: true });

// ─── B: Gold dust particles ───────────────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let rafId = null;
  let running = false;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * 0.5 + 0.15),
      alpha: Math.random() * 0.5 + 0.15,
      life: 0,
      maxLife: Math.random() * 220 + 100,
    };
  }

  function initPool() {
    particles = Array.from({ length: 60 }, makeParticle).map((p) => {
      p.life = Math.floor(Math.random() * p.maxLife); // stagger start
      return p;
    });
  }

  function tick() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.life++;
      p.x += p.vx;
      p.y += p.vy;

      const progress = p.life / p.maxLife;
      const fade = progress < 0.15
        ? progress / 0.15
        : progress > 0.75
        ? 1 - (progress - 0.75) / 0.25
        : 1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      // gold hue
      ctx.fillStyle = `oklch(72% 0.09 80 / ${p.alpha * fade})`;
      ctx.fill();

      if (p.life >= p.maxLife) Object.assign(p, makeParticle(), { life: 0 });
    }

    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (running) return;
    running = true;
    resize();
    initPool();
    tick();
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // only run when motion is on
  function syncMotion() {
    if (root.dataset.motion === "off") stop();
    else start();
  }

  window.addEventListener("resize", () => { resize(); }, { passive: true });

  // watch motion toggle
  motionToggle.addEventListener("click", () => {
    // dataset updates after the click handler in setMotion; defer one tick
    setTimeout(syncMotion, 0);
  });

  syncMotion();
})();

// ─── C: Typewriter on hero h1 ────────────────────────────────────────────────
(function initTypewriter() {
  const el = document.querySelector("[data-typewriter]");
  if (!el || root.dataset.motion === "off") return;

  const text = el.dataset.typewriter;
  el.textContent = "";

  const cursor = document.createElement("span");
  cursor.className = "tw-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.textContent = "|";
  el.appendChild(cursor);

  let i = 0;
  const delay = 90; // ms per character

  function type() {
    if (i < text.length) {
      el.insertBefore(document.createTextNode(text[i]), cursor);
      i++;
      setTimeout(type, delay);
    } else {
      // remove blinking cursor after done
      setTimeout(() => cursor.remove(), 1200);
    }
  }

  // start after hero-copy-in animation offset (240ms + a bit)
  setTimeout(type, 400);
})();

// ─── E: War diagram draw-in ───────────────────────────────────────────────────
const warDiagram = document.querySelector(".war-diagram");
if (warDiagram) {
  const drawObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-drawn");
          drawObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  drawObserver.observe(warDiagram);
}
