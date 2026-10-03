/* =========================================================================
   BALAJEE ENTERPRISES — PRODUCTS.JS
   Product data source, catalogue filtering, search, and detail modal.
   ========================================================================= */
const PRODUCTS = [
  {
    id: "freeze-dried-vegetable-chips",
    name: "Freeze Dried Vegetable Chips",
    category: "Freeze Dried Snacks",
    icon: "bi-snow",
    image: "assets/image/pro/1.jpg",
    description:
      "Crispy freeze-dried vegetable chips prepared using modern food-processing methods, offering a convenient and value-added snack option for retail, food businesses and international markets."
  },
  {
    id: "vacuum-fried-vegetable-chips",
    name: "Vacuum Fried Vegetable Chips",
    category: "Vacuum Fried Snacks",
    icon: "bi-fire",
    image: "assets/image/pro/2.jpg",
    description:
      "Crispy vacuum-fried vegetable chips made from carefully selected vegetables, suitable for snack brands, retailers, distributors and food businesses."
  },
  {
    id: "dried-vegetable-chips",
    name: "Dried Vegetable Chips",
    category: "Dried Vegetable Snacks",
    icon: "bi-sun",
    image: "assets/image/pro/3.jpg",
    description:
      "Quality dried vegetable chips prepared for convenient snacking and food applications, offering a practical value-added vegetable product for modern markets."
  },
  {
    id: "mixed-vacuum-fried-vegetable-chips",
    name: "Mixed Vacuum Fried Vegetable Chips",
    category: "Mixed Vegetable Snacks",
    icon: "bi-grid",
    image: "assets/image/pro/4.jpg",
    description:
      "A colourful combination of vacuum-fried vegetables offering varied flavours, textures and visual appeal for snack retailers, distributors and private-label brands."
  } 
];

window.PRODUCTS = PRODUCTS;

(function ($) {
  "use strict";

  function fallbackImage(name) {
    // simple gradient placeholder if a local image is missing
    const initials = name
      .split(" ")
      .map((w) => w[0])
      .join("");
    return (
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='500'%3E" +
      "%3Crect width='100%25' height='100%25' fill='%23174d32'/%3E" +
      "%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='120' fill='%23d99a16' text-anchor='middle' dominant-baseline='middle'%3E" +
      initials +
      "%3C/text%3E%3C/svg%3E"
    );
  }

  function productCardHTML(p, withAos, delay) {
    return `
    <article class="product-card" data-category="${p.category}" data-name="${p.name.toLowerCase()}" data-id="${p.id}" ${withAos ? `data-aos="fade-up" data-aos-delay="${delay}"` : ""}>
      <div class="card-media">
        <img src="${p.image}" alt="${p.name} — Balajee Enterprises" loading="lazy"
             onerror="this.onerror=null;this.src='${fallbackImage(p.name)}';">
        <span class="card-category">${p.category}</span>
      </div>
     
      <div class="card-shine"></div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <span class="card-cta">View Product <i class="bi bi-arrow-up-right"></i></span>
      </div>
    </article>`;
  }

  /* ------------------------------------------------------------------ */
  /* Render featured products (homepage) + full catalogue (products page) */
  /* ------------------------------------------------------------------ */
  function renderFeatured() {
    const mount = document.getElementById("featured-products");
    if (!mount) return;
    const featuredIds = ["red-chilli", "turmeric", "black-pepper", "cumin-seeds", "cardamom", "cinnamon"];
    const items = PRODUCTS.filter((p) => featuredIds.includes(p.id));
    mount.innerHTML = items.map((p, i) => productCardHTML(p, true, (i % 3) * 100)).join("");
    bindCardClicks(mount);
  }

  function renderCatalogue() {
    const mount = document.getElementById("products-catalogue");
    if (!mount) return;
    mount.innerHTML = PRODUCTS.map((p, i) => productCardHTML(p, true, (i % 3) * 80)).join("");
    bindCardClicks(mount);
    initFilterAndSearch(mount);
  }

  function bindCardClicks(scope) {
    scope.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", () => openModal(card.dataset.id));
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-haspopup", "dialog");
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* FILTER + SEARCH (jQuery)                                            */
  /* ------------------------------------------------------------------ */
  function initFilterAndSearch(mount) {
    const $mount = $(mount);
    const $filterBtns = $(".filter-btn");
    const $search = $("#product-search");
    const $noResults = $(".no-results");

    function applyFilters() {
      const activeCat = $filterBtns.filter(".active").data("filter") || "all";
      const query = ($search.val() || "").toString().trim().toLowerCase();
      let visibleCount = 0;

      $mount.find(".product-card").each(function () {
        const $card = $(this);
        const cat = $card.data("category");
        const name = $card.data("name");
        const matchesCat = activeCat === "all" || cat === activeCat;
        const matchesSearch = !query || name.indexOf(query) !== -1;
        const show = matchesCat && matchesSearch;

        if (show) {
          $card.removeClass("is-hidden");
          visibleCount++;
        } else {
          $card.addClass("is-hidden");
        }
      });

      $noResults.toggleClass("is-visible", visibleCount === 0);
    }

    $filterBtns.on("click", function () {
      $filterBtns.removeClass("active");
      $(this).addClass("active");
      applyFilters();
      if (window.gsap) {
        gsap.fromTo(
          $mount.find(".product-card:not(.is-hidden)").toArray(),
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: "power2.out" }
        );
      }
    });

    $search.on("input", applyFilters);
  }

  /* ------------------------------------------------------------------ */
  /* PRODUCT MODAL                                                       */
  /* ------------------------------------------------------------------ */
  function openModal(id) {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;
    const overlay = document.getElementById("product-modal");
    if (!overlay) return;

    overlay.querySelector(".pm-media img").src = product.image;
    overlay.querySelector(".pm-media img").onerror = function () {
      this.onerror = null;
      this.src = fallbackImage(product.name);
    };
    overlay.querySelector(".pm-media img").alt = product.name + " — Balajee Enterprises";
    overlay.querySelector(".pm-category").textContent = product.category;
    overlay.querySelector(".pm-name").textContent = product.name;
    overlay.querySelector(".pm-desc").textContent = product.description;
    const enquireBtn = overlay.querySelector(".pm-enquire");
    enquireBtn.href = `contact.html?product=${encodeURIComponent(product.name)}#contact-form`;

    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const overlay = document.getElementById("product-modal");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function initModalChrome() {
    const overlay = document.getElementById("product-modal");
    if (!overlay) return;
    overlay.querySelector(".pm-close").addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ------------------------------------------------------------------ */
  /* Pre-fill contact page "Product Interested In" from query string     */
  /* ------------------------------------------------------------------ */
  function prefillContactProduct() {
    const select = document.querySelector('[name="product"]');
    if (!select) return;
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    if (product) {
      const optionExists = Array.from(select.options).some((o) => o.value === product);
      if (optionExists) select.value = product;
      select.closest(".form-floating-custom")?.classList.add("has-value");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderFeatured();
    renderCatalogue();
    initModalChrome();
    prefillContactProduct();
  });
})(jQuery);



// llpplplplpllplplplplplplplplplpllplplpl














