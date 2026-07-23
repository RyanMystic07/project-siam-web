let activeProject = null;
let currentSlideIndex = 0;
let slideInterval = null;
let activePinId = null;

document.addEventListener("DOMContentLoaded", () => {
  initPortal();
  initNav();
  initSlider();
  initMapEvents();
});

function initPortal() {
  const btnBack = document.getElementById("btn-back-to-hub");
  if (btnBack) {
    btnBack.addEventListener("click", () => {
      showPortalHub();
    });
  }
  showPortalHub();
}

function showPortalHub() {
  activeProject = null;
  stopSlider();
  resetMapPanel();

  document.getElementById("portal-hub-section").style.display = "block";
  document.getElementById("project-dashboard-section").style.display = "none";
  document.getElementById("btn-back-to-hub").style.display = "none";
  document.getElementById("project-navigation").style.display = "none";

  document.getElementById("display-site-name").textContent = "สยามพอร์ทัล";
  document.getElementById("display-site-slogan").textContent = "ศูนย์รวมข้อมูลดินแดนและโครงการต่างๆ ยุคสยามแฟนตาซี";

  const root = document.documentElement;
  root.style.setProperty("--gold-color", "#d4af37");
  root.style.setProperty("--gold-glow", "rgba(212, 175, 55, 0.4)");
  root.style.setProperty("--gold-hover", "#ebd382");
  root.style.setProperty("--crimson-color", "#a82229");
  root.style.setProperty("--crimson-glow", "rgba(168, 34, 41, 0.5)");
  root.style.setProperty("--crimson-hover", "#c9323b");
  root.style.setProperty("--primary-theme-color", "#a82229");

  document.getElementById("orb-left").style.backgroundColor = "#a82229";
  document.getElementById("orb-right").style.backgroundColor = "#d4af37";

  renderProjectsHubList();
}

function renderProjectsHubList() {
  const container = document.getElementById("projects-hub-list");
  if (!container) return;
  container.innerHTML = "";

  if (typeof PROJECTS_DATA === 'undefined' || PROJECTS_DATA.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-muted); grid-column: 1/-1;">ไม่มีข้อมูลโครงการการในระบบ (โปรดตรวจสอบไฟล์ projects-data.js)</p>`;
    return;
  }

  PROJECTS_DATA.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-hub-card";
    card.addEventListener("click", () => {
      selectProject(project.id);
    });

    card.innerHTML = `
      <div class="project-card-image" style="background-image: url('${project.coverImage || 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80'}')"></div>
      <div class="project-card-content">
        <h3 class="project-card-title">${project.name}</h3>
        <span class="project-card-tagline">${project.tagline}</span>
        <p class="project-card-desc">${project.description}</p>
        <div class="project-card-action">เข้าชมเว็บไซต์โครงการ ➔</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function selectProject(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  activeProject = project;

  document.getElementById("portal-hub-section").style.display = "none";
  document.getElementById("project-dashboard-section").style.display = "block";
  document.getElementById("btn-back-to-hub").style.display = "inline-flex";
  document.getElementById("project-navigation").style.display = "flex";

  document.getElementById("display-site-name").textContent = project.name;
  document.getElementById("display-site-slogan").textContent = project.tagline;

  const root = document.documentElement;
  root.style.setProperty("--gold-color", project.theme.accentColor);
  root.style.setProperty("--gold-glow", project.theme.accentGlow);
  root.style.setProperty("--gold-hover", adjustColorBrightness(project.theme.accentColor, 30));
  root.style.setProperty("--crimson-color", project.theme.primaryColor);
  root.style.setProperty("--crimson-glow", project.theme.primaryGlow);
  root.style.setProperty("--crimson-hover", adjustColorBrightness(project.theme.primaryColor, 35));
  root.style.setProperty("--primary-theme-color", project.theme.primaryColor);

  document.getElementById("orb-left").style.backgroundColor = project.theme.primaryColor;
  document.getElementById("orb-right").style.backgroundColor = project.theme.accentColor;

  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(t => {
    if (t.getAttribute("data-tab") === "home") {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  const contentSections = document.querySelectorAll(".tab-content");
  contentSections.forEach(section => {
    if (section.id === "content-home") {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  document.getElementById("banner-container").style.display = "block";

  const hasMap = project.map && project.map.pins && project.map.pins.length > 0;
  const mapTab = document.querySelector('.nav-tab[data-tab="map"]');
  if (mapTab) {
    mapTab.style.display = hasMap ? "" : "none";
  }

  currentSlideIndex = 0;
  renderProjectContent();
  startSlider();
}

function adjustColorBrightness(hex, percent) {
  let num = parseInt(hex.replace("#",""), 16),
  amt = Math.round(2.55 * percent),
  R = (num >> 16) + amt,
  G = (num >> 8 & 0x00FF) + amt,
  B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R<255?R<0?0:R:255)*0x10000 + (G<255?G<0?0:G:255)*0x100 + (B<255?B<0?0:B:255)).toString(16).slice(1);
}

function initNav() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      if (!activeProject) return;

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const targetTab = tab.getAttribute("data-tab");
      const contentSections = document.querySelectorAll(".tab-content");
      
      contentSections.forEach(section => {
        section.classList.remove("active");
      });
      
      const targetSection = document.getElementById(`content-${targetTab}`);
      if (targetSection) {
        targetSection.classList.add("active");
      }
      
      // Control slider autoplay
      if (targetTab === 'home') {
        document.getElementById("banner-container").style.display = "block";
        startSlider();
      } else {
        document.getElementById("banner-container").style.display = "none";
        stopSlider();
      }
      
      if (targetTab === 'map') {
        resetMapPanel();
      }
    });
  });
}

// Banner Slider Setup
function initSlider() {
  document.getElementById("slider-prev").addEventListener("click", () => moveSlide(-1));
  document.getElementById("slider-next").addEventListener("click", () => moveSlide(1));
}

function startSlider() {
  stopSlider();
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 5000);
}

function stopSlider() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

function moveSlide(direction) {
  if (!activeProject || !activeProject.banners || activeProject.banners.length === 0) return;
  currentSlideIndex = (currentSlideIndex + direction + activeProject.banners.length) % activeProject.banners.length;
  updateSliderPosition();
}

function goToSlide(index) {
  currentSlideIndex = index;
  updateSliderPosition();
}

function updateSliderPosition() {
  const slides = document.getElementById("slider-slides");
  if (slides) {
    slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    const dots = document.querySelectorAll("#slider-dots .dot");
    dots.forEach((dot, idx) => {
      if (idx === currentSlideIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
}

function renderProjectContent() {
  if (!activeProject) return;

  renderBanners();
  renderAnnouncements();
  renderGuidelines();
  renderStory();
  renderJobs();
  renderMapPins();
  renderNations();
  renderRules();
  renderStatuses();
  renderServices();
}

function renderBanners() {
  const slidesContainer = document.getElementById("slider-slides");
  const dotsContainer = document.getElementById("slider-dots");
  
  if (!slidesContainer) return;
  slidesContainer.innerHTML = "";
  dotsContainer.innerHTML = "";

  if (!activeProject.banners || activeProject.banners.length === 0) {
    slidesContainer.innerHTML = `
      <div class="slide" style="background-image: url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80')">
        <div class="slide-content">
          <h2 class="slide-title">ไม่มีแบนเนอร์</h2>
          <p class="slide-subtitle">ผู้ดูแลระบบไม่ได้อัปโหลดแบนเนอร์สไลด์สำหรับโครงการนี้</p>
        </div>
      </div>
    `;
    return;
  }

  activeProject.banners.forEach((banner, idx) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.backgroundImage = `url('${banner.image}')`;
    
    slide.innerHTML = `
      <div class="slide-content">
        <h2 class="slide-title">${banner.title}</h2>
        <p class="slide-subtitle">${banner.subtitle}</p>
      </div>
    `;
    slidesContainer.appendChild(slide);

    const dot = document.createElement("div");
    dot.className = `dot ${idx === currentSlideIndex ? 'active' : ''}`;
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  updateSliderPosition();
}

function renderAnnouncements() {
  const container = document.getElementById("announcements-list");
  if (!container) return;
  container.innerHTML = "";

  if (!activeProject.announcements || activeProject.announcements.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 2rem;">ไม่มีประกาศข่าวสารในเซิร์ฟเวอร์นี้</p>`;
    return;
  }

  activeProject.announcements.forEach(ann => {
    const card = document.createElement("div");
    card.className = "announcement-card glass-card";
    
    let badgeText = "ข่าวสาร";
    let badgeClass = "badge-info";
    if (ann.type === 'update') {
      badgeText = "อัปเดตระบบ";
      badgeClass = "badge-update";
    } else if (ann.type === 'promo') {
      badgeText = "โปรโมชัน";
      badgeClass = "badge-promo";
    }

    card.innerHTML = `
      <div class="announcement-meta">
        <span class="ann-date">📅 ${ann.date}</span>
        <span class="ann-badge ${badgeClass}">${badgeText}</span>
      </div>
      <h3 class="ann-title">${ann.title}</h3>
      <p class="ann-content">${ann.content.replace(/\n/g, '<br>')}</p>
    `;
    container.appendChild(card);
  });
}

function renderGuidelines() {
  const container = document.getElementById("guidelines-list");
  if (!container) return;
  container.innerHTML = "";

  if (!activeProject.guidelines || activeProject.guidelines.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">ไม่มีข้อมูลคำแนะนำในเซิร์ฟเวอร์นี้</p>`;
    return;
  }

  activeProject.guidelines.forEach(guide => {
    const card = document.createElement("div");
    card.className = "guideline-card glass-card";

    card.innerHTML = `
      <div class="guideline-header">
        <div class="guideline-icon">${guide.icon}</div>
        <h3 class="guideline-title">${guide.title}</h3>
      </div>
      <p class="guideline-content">${guide.content.replace(/\n/g, '<br>')}</p>
    `;
    container.appendChild(card);
  });
}

function renderStory() {
  const display = document.getElementById("story-display");
  if (!display) return;
  display.innerHTML = activeProject.story || `<p style="color: var(--text-muted); text-align: center;">ไม่มีรายละเอียดเนื้อเรื่อง</p>`;
}

function renderJobs() {
  const container = document.getElementById("jobs-list");
  if (!container) return;
  container.innerHTML = "";

  if (!activeProject.jobs || activeProject.jobs.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">ไม่มีข้อมูลสายอาชีพในเซิร์ฟเวอร์นี้</p>`;
    return;
  }

  activeProject.jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card glass-card";

    card.innerHTML = `
      <div class="job-header">
        <div class="job-icon">${job.icon}</div>
        <div>
          <h3 class="job-name">${job.name}</h3>
          <span class="job-status">${job.status}</span>
        </div>
      </div>
      <div class="job-abilities">
        <strong>ความสามารถ:</strong> ${job.abilities}
      </div>
      <p class="job-desc">${job.description}</p>
    `;
    container.appendChild(card);
  });
}

function renderRules() {
  const container = document.getElementById("rules-categories-list");
  if (!container) return;
  container.innerHTML = "";

  if (!activeProject.rules || activeProject.rules.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 2rem;">ไม่มีกฎระเบียบในเซิร์ฟเวอร์นี้</p>`;
    return;
  }

  activeProject.rules.forEach(cat => {
    const catSection = document.createElement("div");
    catSection.className = "rule-category glass-card";

    let bodyHtml = "";
    if (cat.subItems && cat.subItems.length > 0) {
      bodyHtml = `<div class="rule-subitems">${cat.subItems.map(sub => `
        <div class="rule-subitem">
          <h4 class="rule-subitem-title">ข้อ ${sub.id}: ${sub.title}</h4>
          <div class="rule-subitem-content">${sub.content}</div>
          ${sub.subRules && sub.subRules.length > 0 ? `
          <ul class="rule-subrules-list">
            ${sub.subRules.map(sr => `<li class="rule-subrule-item">${sr}</li>`).join('')}
          </ul>` : ''}
        </div>
      `).join('')}</div>`;
    } else if (cat.rulesList && cat.rulesList.length > 0) {
      bodyHtml = `<ul class="rule-list">${cat.rulesList.map((rule, idx) => `
        <li class="rule-item">
          <span class="rule-num">${idx + 1}.</span>
          <span class="rule-text">${rule}</span>
        </li>
      `).join('')}</ul>`;
    } else {
      bodyHtml = `<p class="rule-empty">ยังไม่มีกฎในหมวดหมู่นี้</p>`;
    }

    catSection.innerHTML = `
      <h3 class="rule-category-title">${cat.icon ? cat.icon : '📜'} ${cat.categoryName}</h3>
      ${bodyHtml}
    `;
    container.appendChild(catSection);
  });
}

function renderStatuses() {
  const container = document.getElementById("statuses-list");
  if (!container) return;
  container.innerHTML = "";

  if (!activeProject.statuses || activeProject.statuses.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">ไม่มีข้อมูลยศ/สถานะในเซิร์ฟเวอร์นี้</p>`;
    return;
  }

  activeProject.statuses.forEach(status => {
    const card = document.createElement("div");
    card.className = "status-card glass-card";

    card.innerHTML = `
      <h3 class="status-title">${status.name}</h3>
      <p class="status-desc">${status.description}</p>
      <div class="status-rights">
        <div class="status-rights-title">🛡️ ข้อกำหนด / สิทธิ์พิเศษ:</div>
        <div class="status-rights-list">${status.rights}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderServices() {
  const container = document.getElementById("services-list");
  if (!container) return;
  container.innerHTML = "";

  if (!activeProject.services || activeProject.services.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">ไม่มีรายการสินค้า/บริการสนับสนุนในขณะนี้</p>`;
    return;
  }

  activeProject.services.forEach(serv => {
    const card = document.createElement("div");
    card.className = "service-card glass-card";

    card.innerHTML = `
      <div class="service-image" style="background-image: url('${serv.image}')"></div>
      <div class="service-content">
        <h3 class="service-title">${serv.name}</h3>
        <div class="service-price">${serv.price} บาท / พอยท์</div>
        <p class="service-desc">${serv.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderMapPins() {
  const container = document.getElementById("map-pins-container");
  if (!container) return;
  container.innerHTML = "";

  if (activeProject.map && activeProject.map.image) {
    document.getElementById("map-background-img").src = activeProject.map.image;
  }

  if (!activeProject.map || !activeProject.map.pins) return;

  activeProject.map.pins.forEach(pin => {
    const pinEl = document.createElement("div");
    pinEl.className = `map-pin ${pin.type}`;
    pinEl.style.left = `${pin.x}%`;
    pinEl.style.top = `${pin.y}%`;
    pinEl.title = pin.name;

    pinEl.addEventListener("click", (e) => {
      e.stopPropagation();
      showPinDetails(pin.id);
    });

    container.appendChild(pinEl);
  });
}

function showPinDetails(pinId) {
  if (!activeProject || !activeProject.map || !activeProject.map.pins) return;
  
  activePinId = pinId;
  const pin = activeProject.map.pins.find(p => p.id == pinId);
  if (!pin) return;

  document.getElementById("panel-placeholder").style.display = "none";
  const activeContent = document.getElementById("panel-active-content");
  activeContent.style.display = "flex";

  const badge = document.getElementById("pin-detail-badge");
  badge.textContent = pin.type === 'safezone' ? 'Safezone' : pin.type === 'danger' ? 'Danger Zone' : 'VIP Zone';
  badge.className = `pin-badge ${pin.type}`;

  document.getElementById("pin-detail-name").textContent = pin.name;
  document.getElementById("pin-detail-desc").textContent = pin.description;
}

function resetMapPanel() {
  activePinId = null;
  document.getElementById("panel-placeholder").style.display = "block";
  document.getElementById("panel-active-content").style.display = "none";
}

function initMapEvents() {
}

// Nations (Alliance & War) rendering
function getNationsList() {
  if (!activeProject || !activeProject.map || !activeProject.map.nations) return [];
  return activeProject.map.nations;
}

function getNationNameById(nationId) {
  const nations = getNationsList();
  const found = nations.find(n => n.id === nationId);
  return found ? found.name : "ไม่ทราบชื่อ";
}

function nationStatusLabel(status) {
  switch (status) {
    case "colony": return "เมืองขึ้น";
    case "independent": return "เอกราช";
    case "collapsed": return "ล่มสลาย";
    default: return status;
  }
}

function renderNations() {
  const section = document.querySelector(".nations-section");
  const container = document.getElementById("nations-list");
  if (!container || !section) return;
  container.innerHTML = "";

  const nations = getNationsList();

  if (nations.length === 0) {
    section.style.display = "none";
    return;
  }

  section.style.display = "block";

  nations.forEach(nation => {
    const card = document.createElement("div");
    card.className = "nation-card glass-card";

    const status = nation.status || "independent";

    const allies = (nation.allies || []).map(id =>
      `<span class="relation-tag ally">🤝 ${getNationNameById(id)}</span>`
    ).join("");

    const atWar = (nation.atWar || []).map(id =>
      `<span class="relation-tag war">⚔️ ${getNationNameById(id)}</span>`
    ).join("");

    card.innerHTML = `
      <div class="nation-card-header">
        <h3 class="nation-name">${nation.name}</h3>
        <span class="nation-status-badge ${status}">${nationStatusLabel(status)}</span>
      </div>
      <div class="nation-meta">
        <span>📅 เปิดเมื่อ: <strong>${nation.foundedDate || "not ready yet"}</strong></span>
        <span>👑 ผู้ก่อตั้ง: <strong>${nation.founder || "not ready yet"}</strong></span>
        <span>👥 จำนวนสมาชิก: <strong>${nation.memberCount ?? "not ready yet"} คน</strong></span>
      </div>
      ${nation.description ? `<p class="nation-desc">${nation.description}</p>` : ""}
      <div class="nation-relations">
        <div class="nation-relation-row">
          <span class="nation-relation-label">พันธมิตร:</span>
          ${allies || `<span class="relation-tag none">ไม่มีพันธมิตร</span>`}
        </div>
        <div class="nation-relation-row">
          <span class="nation-relation-label">สงครามกับ:</span>
          ${atWar || `<span class="relation-tag none">ไม่มีสงคราม</span>`}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}
