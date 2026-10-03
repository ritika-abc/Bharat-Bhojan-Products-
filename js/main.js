/* =========================================================================
   BALAJEE ENTERPRISES — MAIN.JS
   Core interaction layer: config, navbar, off-canvas menu, custom cursor,
   scroll progress, back-to-top, dark mode, magnetic buttons, card tilt,
   contact form validation + mailto.
   ========================================================================= */

/* -------------------------------------------------------------------- */
/* SITE CONFIG — change contact details here, everything reads from this */
/* -------------------------------------------------------------------- */
const SITE_CONFIG = {
  companyName: "Bharat Bhojan Products",
  contactPerson: "Ramkumar S",
  designation: "Ramkumar S",
  addressLine1: "6/662-H-4 RR Complex, 2nd Street",
  addressLine2: "Sivakasi, Tamil Nadu 626123",
  country: "India",
  phone: "+91 8825536410",
  phoneHref: "+918825536410",
  email: "ramkumarselvaraj493@gmail.com" // <-- company email
};

/* Expose globally for products.js / inline usage */
window.SITE_CONFIG = SITE_CONFIG;

(function ($) {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  /* ------------------------------------------------------------------ */
  /* Populate contact placeholders across pages                         */
  /* ------------------------------------------------------------------ */
  function hydrateContactDetails() {
    document.querySelectorAll("[data-config-email]").forEach((el) => {
      el.textContent = SITE_CONFIG.email;
      if (el.tagName === "A") el.href = "mailto:" + SITE_CONFIG.email;
    });
    document.querySelectorAll("[data-config-phone]").forEach((el) => {
      el.textContent = SITE_CONFIG.phone;
      if (el.tagName === "A") el.href = "tel:" + SITE_CONFIG.phoneHref;
    });
    document.querySelectorAll("[data-config-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ------------------------------------------------------------------ */
  /* NAVBAR — scroll state, active link, dropdown                       */
  /* ------------------------------------------------------------------ */
  function initNavbar() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const setScrolled = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });

    /* active link based on current URL */
    const currentPage = (location.pathname.split("/").pop() || "index.html");
    document.querySelectorAll(".nav-link, .oc-link, .dropdown-panel a, .oc-sub a").forEach((link) => {
      const href = (link.getAttribute("href") || "").split("#")[0];
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
        const parentDropdown = link.closest(".nav-dropdown");
        if (parentDropdown) parentDropdown.querySelector(".nav-link").classList.add("active");
      }
    });

    /* desktop dropdown */
    const dropdown = document.querySelector(".nav-dropdown");
    if (dropdown) {
      const trigger = dropdown.querySelector(".nav-link");
      let closeTimer;
      const open = () => {
        clearTimeout(closeTimer);
        dropdown.classList.add("is-open");
      };
      const close = () => {
        closeTimer = setTimeout(() => dropdown.classList.remove("is-open"), 150);
      };
      dropdown.addEventListener("mouseenter", open);
      dropdown.addEventListener("mouseleave", close);
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("is-open");
      });
      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) dropdown.classList.remove("is-open");
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /* OFF-CANVAS MOBILE MENU                                              */
  /* ------------------------------------------------------------------ */
  function initOffcanvas() {
    const toggle = document.querySelector(".nav-toggle");
    const offcanvas = document.querySelector(".offcanvas-nav");
    if (!toggle || !offcanvas) return;

    const closeBtn = offcanvas.querySelector(".oc-close");
    const backdrop = offcanvas.querySelector(".offcanvas-backdrop");
    const links = offcanvas.querySelectorAll(".oc-link");
    const subToggle = offcanvas.querySelector(".oc-sub-toggle");
    const sub = offcanvas.querySelector(".oc-sub");

    function openMenu() {
      offcanvas.classList.add("is-open");
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      if (window.gsap && !prefersReducedMotion) {
        gsap.fromTo(
          links,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power3.out", delay: 0.15 }
        );
      } else {
        links.forEach((l) => { l.style.opacity = 1; l.style.transform = "none"; });
      }
    }
    function closeMenu() {
      offcanvas.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", openMenu);
    closeBtn && closeBtn.addEventListener("click", closeMenu);
    backdrop && backdrop.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
    links.forEach((link) => {
      if (!link.classList.contains("oc-sub-toggle")) {
        link.addEventListener("click", closeMenu);
      }
    });
    if (subToggle && sub) {
      subToggle.addEventListener("click", (e) => {
        e.preventDefault();
        sub.classList.toggle("is-open");
        subToggle.querySelector(".caret")?.classList.toggle("rotated");
      });
    }
    offcanvas.querySelectorAll(".oc-sub a").forEach((a) => a.addEventListener("click", closeMenu));
  }

  /* ------------------------------------------------------------------ */
  /* CUSTOM CURSOR (desktop only)                                        */
  /* ------------------------------------------------------------------ */
  function initCursor() {
    if (isTouchDevice || prefersReducedMotion) return;

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    let dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    let dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    let ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    let ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    window.addEventListener("mousemove", (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    });

    const hoverables = "a, button, .btn-balajee, .product-card, .filter-btn, input, textarea, select, .theme-toggle";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverables)) ring.classList.add("is-hover");
      if (e.target.closest("img, .image-zoom, .image-reveal")) ring.classList.add("is-image");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverables)) ring.classList.remove("is-hover");
      if (e.target.closest("img, .image-zoom, .image-reveal")) ring.classList.remove("is-image");
    });
    document.addEventListener("mouseleave", () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    });
    document.addEventListener("mouseenter", () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    });
  }

  /* ------------------------------------------------------------------ */
  /* MAGNETIC BUTTONS                                                    */
  /* ------------------------------------------------------------------ */
  function initMagneticButtons() {
    if (isTouchDevice || prefersReducedMotion || !window.gsap) return;
    document.querySelectorAll(".btn-balajee").forEach((btn) => {
      const strength = 22;
      const moveX = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
      const moveY = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        moveX((relX / rect.width) * strength);
        moveY((relY / rect.height) * strength);
      });
      btn.addEventListener("mouseleave", () => {
        moveX(0);
        moveY(0);
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 3D CARD TILT                                                        */
  /* ------------------------------------------------------------------ */
  function initCardTilt() {
    if (isTouchDevice || prefersReducedMotion || !window.gsap) return;
    document.querySelectorAll(".product-card, .story-media, .service-card").forEach((card) => {
      const media = card.querySelector("img");
      const rotateX = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power3.out" });
      const rotateY = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power3.out" });
      const mediaX = media ? gsap.quickTo(media, "x", { duration: 0.5, ease: "power3.out" }) : null;
      const mediaY = media ? gsap.quickTo(media, "y", { duration: 0.5, ease: "power3.out" }) : null;

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateX(py * -8);
        rotateY(px * 8);
        if (mediaX && mediaY) {
          mediaX(px * -14);
          mediaY(py * -14);
        }
      });
      card.addEventListener("mouseleave", () => {
        rotateX(0);
        rotateY(0);
        if (mediaX && mediaY) {
          mediaX(0);
          mediaY(0);
        }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* SCROLL PROGRESS BAR                                                 */
  /* ------------------------------------------------------------------ */
  function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + "%";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ------------------------------------------------------------------ */
  /* BACK TO TOP                                                         */
  /* ------------------------------------------------------------------ */
  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
    const toggleVisible = () => btn.classList.toggle("is-visible", window.scrollY > 600);
    toggleVisible();
    window.addEventListener("scroll", toggleVisible, { passive: true });
    btn.addEventListener("click", () => {
      if (window.gsap) {
        gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power3.inOut" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* DARK MODE TOGGLE                                                    */
  /* ------------------------------------------------------------------ */
  function initDarkMode() {
    const toggle = document.querySelector(".theme-toggle");
    const root = document.documentElement;
    const stored = localStorage.getItem("balajee-theme");
    if (stored === "dark") {
      root.setAttribute("data-theme", "dark");
    }
    updateIcon();

    function updateIcon() {
      if (!toggle) return;
      const isDark = root.getAttribute("data-theme") === "dark";
      toggle.innerHTML = isDark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
      toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }

    toggle &&
      toggle.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        if (isDark) {
          root.removeAttribute("data-theme");
          localStorage.setItem("balajee-theme", "light");
        } else {
          root.setAttribute("data-theme", "dark");
          localStorage.setItem("balajee-theme", "dark");
        }
        updateIcon();
      });
  }

  /* ------------------------------------------------------------------ */
  /* CONTACT FORM — validation + mailto (no backend)                    */
  /* ------------------------------------------------------------------ */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const fields = {
      name: { required: true, message: "Please enter your name." },
      email: { required: true, email: true, message: "Please enter a valid email address." },
      phone: { required: false },
      company: { required: false },
      product: { required: false },
      message: { required: true, message: "Please enter a short message." }
    };

    function validateField(input, rules) {
      const wrap = input.closest(".form-floating-custom");
      const value = input.value.trim();
      let valid = true;

      if (rules.required && !value) valid = false;
      if (rules.email && value) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(value)) valid = false;
      }
      wrap.classList.toggle("is-invalid", !valid);
      wrap.classList.toggle("has-value", !!value);
      return valid;
    }

    Object.keys(fields).forEach((name) => {
      const input = form.querySelector(`[name="${name}"]`);
      if (!input) return;
      input.addEventListener("blur", () => validateField(input, fields[name]));
      input.addEventListener("input", () => {
        if (input.closest(".form-floating-custom").classList.contains("is-invalid")) {
          validateField(input, fields[name]);
        }
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let allValid = true;
      Object.keys(fields).forEach((name) => {
        const input = form.querySelector(`[name="${name}"]`);
        if (!input) return;
        const ok = validateField(input, fields[name]);
        if (!ok) allValid = false;
      });
      if (!allValid) {
        const firstInvalid = form.querySelector(".is-invalid input, .is-invalid textarea, .is-invalid select");
        firstInvalid && firstInvalid.focus();
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());
      const subject = encodeURIComponent(
        `Website Enquiry — ${data.product ? data.product : "General"} — ${data.name}`
      );
      const bodyLines = [
        `Name: ${data.name}`,
        `Company: ${data.company || "-"}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "-"}`,
        `Product Interested In: ${data.product || "-"}`,
        "",
        "Message:",
        data.message
      ];
      const body = encodeURIComponent(bodyLines.join("\n"));
      const mailto = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;

      const successBox = form.parentElement.querySelector(".form-success");
      form.style.display = "none";
      if (successBox) successBox.classList.add("is-visible");

      window.location.href = mailto;
    });
  }

  /* ------------------------------------------------------------------ */
  /* INIT                                                                */
  /* ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    hydrateContactDetails();
    initNavbar();
    initOffcanvas();
    initScrollProgress();
    initBackToTop();
    initDarkMode();
    initContactForm();

    /* GSAP-dependent enhancements — guarded in case CDN fails to load */
    if (window.gsap) {
      initCursor();
      initMagneticButtons();
      initCardTilt();
    }
  });
})(jQuery);
