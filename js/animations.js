/* =========================================================================
   BALAJEE ENTERPRISES — ANIMATIONS.JS
   Preloader, AOS config, GSAP page-load + ScrollTrigger choreography,
   parallax, mouse-following glow, text splitting.
   ========================================================================= */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ------------------------------------------------------------------ */
  /* Split heading text into lines/words for reveal animation           */
  /* ------------------------------------------------------------------ */
  function splitHeroLines() {
    document.querySelectorAll(".hero h1[data-split]").forEach((h1) => {
      const raw = h1.textContent.trim();
      const words = raw.split(/\s+/);
      // group into "lines" using <br data-line> markers if present in HTML,
      // otherwise treat the whole heading as one line of words.
      h1.innerHTML = "";
      const lineWrap = document.createElement("span");
      lineWrap.className = "line";
      words.forEach((word, i) => {
        const span = document.createElement("span");
        span.textContent = word + (i < words.length - 1 ? "\u00A0" : "");
        lineWrap.appendChild(span);
      });
      h1.appendChild(lineWrap);
    });

    /* Support explicit multi-line markup: .hero h1 > .line > span already authored in HTML */
  }

  /* ------------------------------------------------------------------ */
  /* PRELOADER                                                           */
  /* ------------------------------------------------------------------ */
  function initPreloader() {
    const loader = document.getElementById("preloader");
    if (!loader) {
      runHeroEntrance();
      initScrollAnimations();
      return;
    }

    if (!window.gsap || prefersReducedMotion) {
      loader.style.display = "none";
      runHeroEntrance();
      initScrollAnimations();
      return;
    }

    const chars = loader.querySelectorAll(".loader-mark span");
    const sub = loader.querySelector(".loader-sub");
    const ring = loader.querySelector(".ring");
    const barSpan = loader.querySelector(".loader-bar span");

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        loader.style.display = "none";
        runHeroEntrance();
        initScrollAnimations();
      }
    });

    tl.to(chars, { y: 0, duration: 0.7, stagger: 0.045 })
      .to(sub, { opacity: 1, duration: 0.4 }, "-=0.3")
      .to(ring, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" }, "-=0.5")
      .to(barSpan, { width: "100%", duration: 1, ease: "power1.inOut" }, "-=0.9")
      .to(loader.querySelector(".loader-seed"), { rotate: 360, duration: 1.1, ease: "power2.inOut" }, "-=1.1")
      .to([chars, sub, ".loader-seed", ".loader-bar"], { opacity: 0, y: -14, duration: 0.45, stagger: 0.03 }, "+=0.25")
      .to(loader, { autoAlpha: 0, duration: 0.6 }, "-=0.15");

    /* safety timeout in case something stalls */
    setTimeout(() => {
      if (loader.style.display !== "none") {
        loader.style.display = "none";
        runHeroEntrance();
        initScrollAnimations();
      }
    }, 4500);
  }

  /* ------------------------------------------------------------------ */
  /* HERO ENTRANCE                                                       */
  /* ------------------------------------------------------------------ */
  function runHeroEntrance() {
    const hero = document.querySelector(".hero");
    if (!hero || !window.gsap) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const lines = hero.querySelectorAll("h1 .line span");
    const badge = hero.querySelector(".hero-badge-row");
    const desc = hero.querySelector(".hero-desc");
    const actions = hero.querySelector(".hero-actions");
    const media = hero.querySelector(".hero-media img");

    if (badge) tl.fromTo(badge, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, 0.1);
    if (lines.length) {
      tl.to(lines, { y: 0, duration: 0.9, stagger: 0.06 }, 0.2);
    }
    if (desc) tl.to(desc, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
    if (actions) tl.fromTo(actions, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.45");
    if (media && !prefersReducedMotion) {
      tl.to(media, { scale: 1, duration: 1.6, ease: "power2.out" }, 0);
    }

    /* page hero (inner pages) simple entrance */
    document.querySelectorAll(".page-hero").forEach((ph) => {
      gsap.fromTo(
        ph.querySelectorAll(".breadcrumb-mono, h1, .lead"),
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out", delay: 0.15 }
      );
    });
  }

  /* ------------------------------------------------------------------ */
  /* PARALLAX + MOUSE GLOW                                               */
  /* ------------------------------------------------------------------ */
  function initParallax() {
    if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) return;

    const heroMedia = document.querySelector(".hero-media img");
    if (heroMedia) {
      gsap.to(heroMedia, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
      });
    }

    document.querySelectorAll(".image-parallax img").forEach((img) => {
      gsap.to(img, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: img.closest(".image-parallax"), start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    document.querySelectorAll(".story-media img").forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: img.closest(".story-media"), start: "top bottom", end: "bottom top", scrub: true }
        }
      );
    });
  }

  function initMouseGlow() {
    if (isTouchDevice || prefersReducedMotion || !window.gsap) return;
    const glow = document.querySelector(".deco-glow");
    if (!glow) return;
    const hero = document.querySelector(".hero");
    const moveX = gsap.quickTo(glow, "x", { duration: 0.8, ease: "power3.out" });
    const moveY = gsap.quickTo(glow, "y", { duration: 0.8, ease: "power3.out" });
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      moveX(e.clientX - rect.left);
      moveY(e.clientY - rect.top);
    });
  }

  /* ------------------------------------------------------------------ */
  /* SCROLL-TRIGGERED REVEALS                                            */
  /* ------------------------------------------------------------------ */
  function initScrollAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return;

    /* generic reveal-up elements */
    gsap.utils.toArray(".reveal-up").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
      });
    });

    /* image-reveal mask wipe */
    gsap.utils.toArray(".image-reveal").forEach((wrap) => {
      const mask = wrap.querySelector(".reveal-mask");
      const img = wrap.querySelector("img");
      if (!mask) return;
      gsap.set(img, { scale: 1.15 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: wrap, start: "top 80%" } });
      tl.to(mask, { scaleX: 0, transformOrigin: "right", duration: 0.9, ease: "power3.inOut" })
        .to(img, { scale: 1, duration: 1.2, ease: "power3.out" }, "-=0.7");
    });

    /* section headings underline / eyebrow reveal */
    gsap.utils.toArray(".section-head").forEach((head) => {
      gsap.fromTo(
        head.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: head, start: "top 85%" }
        }
      );
    });

    /* card grids stagger in */
    document.querySelectorAll(".card-grid, .products-grid, .feature-grid, .category-grid, .trust-grid").forEach((grid) => {
      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 88%" }
        }
      );
    });

    /* process timeline steps */
    gsap.utils.toArray(".process-step").forEach((step) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: step, start: "top 85%" } }
      );
    });

    /* service cards */
    document.querySelectorAll(".service-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: (i % 3) * 0.05,
          scrollTrigger: { trigger: card, start: "top 90%" }
        }
      );
    });

    /* decorative leaves parallax drift on scroll */
    gsap.utils.toArray(".section .deco-leaf").forEach((leaf) => {
      gsap.to(leaf, {
        y: -40,
        ease: "none",
        scrollTrigger: { trigger: leaf.closest(".section"), start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    /* CTA section headline reveal */
    document.querySelectorAll(".cta-section").forEach((cta) => {
      gsap.fromTo(
        cta.querySelectorAll(".eyebrow, h2, .lead, .btn-balajee"),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: cta, start: "top 80%" }
        }
      );
    });

    /* horizontal reveal for story copy route coordinate */
    document.querySelectorAll(".route-coord").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, duration: 0.6, scrollTrigger: { trigger: el, start: "top 90%" } }
      );
    });

    ScrollTrigger.refresh();
  }

  /* ------------------------------------------------------------------ */
  /* AOS INIT                                                             */
  /* ------------------------------------------------------------------ */
  function initAOSLib() {
    if (!window.AOS) return;
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
      disable: prefersReducedMotion ? true : false
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    splitHeroLines();
    initAOSLib();
    initPreloader();
    initParallax();
    initMouseGlow();
  });

  window.addEventListener("load", () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
})();
