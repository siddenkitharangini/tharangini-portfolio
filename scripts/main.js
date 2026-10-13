/**
 * MAIN JAVASCRIPT CONTROLLER - THARANGINI SIDDENKI PORTFOLIO
 * Implements smooth navigation, project filtering, contact form validation,
 * active scroll-spy, and dynamic UI state management.
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.PORTFOLIO_CONFIG || {};

  // 1. Ensure scroll position starts at top if on root without hash
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  if (!window.location.hash || window.location.hash === "#home") {
    window.scrollTo(0, 0);
  }

  // 2. Dynamic Year & Config Data Injection
  initDynamicConfig(config);

  // 3. Navigation, Mobile Drawer & Logo Refresh
  initNavigation();

  // 4. Render Projects & Filter System
  initProjects();

  // 5. Contact Form & Email Copy
  initContact(config);

  // 6. Scroll Entrance Animations
  initScrollAnimations();

  // 7. Initialize GitHub Activity API
  if (window.GitHubActivity) {
    const gh = new window.GitHubActivity(config.githubApi?.username || "siddenkitharangini");
    gh.init();
  }
});

/**
 * Injects dynamic configuration values (email, year, social links)
 */
function initDynamicConfig(config) {
  // Copyright Year
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Email Config
  const emailVal = config.email || "tharangini.siddenki@gmail.com";
  const emailDisplays = document.querySelectorAll(".dynamic-email-text");
  emailDisplays.forEach(el => el.textContent = emailVal);

  const emailLinks = document.querySelectorAll(".dynamic-email-link");
  emailLinks.forEach(el => el.href = `mailto:${emailVal}`);

  // Social Links
  const ghLinks = document.querySelectorAll(".dynamic-github-link");
  ghLinks.forEach(el => el.href = config.socials?.github || "https://github.com/siddenkitharangini");

  const liLinks = document.querySelectorAll(".dynamic-linkedin-link");
  liLinks.forEach(el => el.href = config.socials?.linkedin || "https://www.linkedin.com/in/tharangini-siddenki");
}

/**
 * Navigation Bar Scroll, Logo Refresh & Mobile Drawer Controls
 */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const siteLogo = document.getElementById("site-logo");
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  const sections = document.querySelectorAll("section[id]");

  const getNavbarHeight = () => (navbar ? navbar.offsetHeight : 74);

  // 1. THARANGINI.DEV Logo Click Handler
  // Navigates to / and refreshes the browser page to return to top Home Hero
  if (siteLogo) {
    siteLogo.addEventListener("click", (e) => {
      // Allow user to open in new tab with Cmd/Ctrl or middle click
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();

      // If already on / without hash, trigger a real page reload
      if (window.location.pathname === "/" && (!window.location.hash || window.location.hash === "#" || window.location.hash === "#home")) {
        window.scrollTo(0, 0);
        window.location.reload();
      } else {
        // Navigate to / root to clear hash and reload home
        window.location.href = "/";
      }
    });
  }

  // 2. Sticky Navbar state on scroll
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
    updateActiveNavLink();
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Drawer Controls
  if (mobileToggle && mobileDrawer) {
    const closeDrawer = () => {
      mobileDrawer.classList.remove("open");
      mobileToggle.classList.remove("active");
      mobileToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileToggle.classList.toggle("active", isOpen);
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close mobile drawer on link click
    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeDrawer);
    });

    // Close on Escape key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
        closeDrawer();
      }
    });

    // Close on outside backdrop click
    document.addEventListener("click", (e) => {
      if (
        mobileDrawer.classList.contains("open") &&
        !mobileDrawer.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        closeDrawer();
      }
    });

    // Close drawer on resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 880 && mobileDrawer.classList.contains("open")) {
        closeDrawer();
      }
    }, { passive: true });
  }

  // 4. Active Nav Link Spy on Scroll
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    const scrollBottom = window.pageYOffset + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const navHeight = getNavbarHeight();

    // Check if bottom of page reached -> activate contact
    if (scrollBottom >= docHeight - 40) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#contact");
      });
      return;
    }

    // If at the very top of page -> activate home
    if (scrollY < 100) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#home");
      });
      return;
    }

    let currentActiveId = null;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - navHeight - 30;
      const sectionId = current.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentActiveId = sectionId;
      }
    });

    if (currentActiveId) {
      const targetHref = currentActiveId === "github-activity" ? "#projects" : `#${currentActiveId}`;
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === targetHref);
      });
    }
  }

  // 5. Unified Smooth Scroll offset adjustment
  // Places section heading just below the sticky navbar without double jumps
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      if (targetId === "#home") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        history.pushState(null, "", "#home");
        updateActiveNavLink();
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navHeight = getNavbarHeight();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = Math.max(0, elementPosition + window.pageYOffset - navHeight - 12);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Single smooth transition, record history state cleanly
        history.pushState(null, "", targetId);
        setTimeout(updateActiveNavLink, 150);
      }
    });
  });

  // 6. Direct URL hash position alignment on load (e.g. /#about)
  if (window.location.hash && window.location.hash !== "#home") {
    const initialTarget = document.querySelector(window.location.hash);
    if (initialTarget) {
      setTimeout(() => {
        const navHeight = getNavbarHeight();
        const targetTop = initialTarget.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: Math.max(0, targetTop - navHeight),
          behavior: "smooth"
        });
        updateActiveNavLink();
      }, 60);
    }
  }
}

/**
 * Render Projects & Interactive Category Filtering
 */
function initProjects() {
  const container = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projects = window.PROJECTS_DATA || [];
  const schematics = window.WIREFRAME_SCHEMATICS || {};

  if (!container) return;

  function render(filter = "all") {
    container.innerHTML = "";

    const filtered = projects.filter(p => {
      if (filter === "all") return true;
      return p.category === filter;
    });

    filtered.forEach(project => {
      const card = document.createElement("article");
      card.className = "project-card fade-up visible";
      card.setAttribute("data-category", project.category);

      const wireframeSvg = schematics[project.wireframeType] || schematics["landing"];

      // Tech tags HTML
      const techHtml = project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("");

      // Live link button HTML (Only render if liveUrl exists and is verified)
      let liveBtnHtml = "";
      if (project.liveUrl) {
        liveBtnHtml = `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" aria-label="View Live Website for ${project.title}">
            <span>Live Demo</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        `;
      }

      // GitHub Source button HTML
      const githubBtnHtml = `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View Source Code for ${project.title}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
          <span>Source Code</span>
        </a>
      `;

      card.innerHTML = `
        <div class="project-visual-header">
          <span class="project-category-badge">${project.categoryLabel}</span>
          ${wireframeSvg}
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tech-tags">
            ${techHtml}
          </div>
          <div class="project-actions">
            ${liveBtnHtml}
            ${githubBtnHtml}
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Initial render
  render("all");

  // Filter button click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const filter = btn.getAttribute("data-filter");
      render(filter);
    });
  });
}

/**
 * Contact Form Validation & Clipboard Copy
 */
function initContact(config) {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const copyBtn = document.getElementById("copy-email-btn");
  const emailVal = config.email || "tharangini.siddenki@gmail.com";

  // Copy Email to Clipboard
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(emailVal).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied ✓";
        copyBtn.style.color = "var(--accent-red)";
        copyBtn.style.borderColor = "var(--accent-red)";
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.color = "";
          copyBtn.style.borderColor = "";
        }, 2200);
      }).catch(err => {
        console.error("Clipboard copy failed:", err);
      });
    });
  }

  // Form Submission
  if (form && feedback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.elements["name"]?.value.trim();
      const email = form.elements["email"]?.value.trim();
      const subject = form.elements["subject"]?.value.trim() || "Portfolio Project Inquiry";
      const message = form.elements["message"]?.value.trim();

      // Validation
      if (!name || !email || !message) {
        showFeedback("error", "Please fill in all required fields.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback("error", "Please provide a valid email address.");
        return;
      }

      // Success feedback and mailto trigger option
      showFeedback("success", `Thank you, ${name}! Your inquiry has been prepared. Opening your email client to send directly to ${emailVal}...`);

      // Construct mailto link
      const mailtoUrl = `mailto:${emailVal}?subject=${encodeURIComponent(subject + " - " + name)}&body=${encodeURIComponent("Sender: " + name + " (" + email + ")\n\n" + message)}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
        form.reset();
      }, 1000);
    });
  }

  function showFeedback(type, text) {
    if (!feedback) return;
    feedback.className = `form-feedback ${type}`;
    feedback.textContent = text;
    feedback.style.display = "block";

    if (type === "error") {
      setTimeout(() => {
        feedback.style.display = "none";
      }, 4500);
    }
  }
}

/**
 * Scroll Reveal Animations via Intersection Observer & Scroll Fallback
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".fade-up");

  const revealElement = (el) => {
    el.classList.add("visible");
  };

  // Immediate check for elements already in viewport or near top
  const checkInitialVisibility = () => {
    const triggerBottom = window.innerHeight + 150;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= triggerBottom) {
        revealElement(el);
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: "0px 0px 120px 0px"
    });

    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    elements.forEach(revealElement);
  }

  // Run on load and on scroll
  checkInitialVisibility();
  window.addEventListener("scroll", checkInitialVisibility, { passive: true });
  window.addEventListener("resize", checkInitialVisibility, { passive: true });
}
