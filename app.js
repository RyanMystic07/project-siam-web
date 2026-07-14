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
