<?php
include "nav.php";
?>
  <main>

    <section class="page-hero">
      <div class="container-fluid-custom">
        <span class="breadcrumb-mono">Home / Products</span>
        <h1>Our Product Catalogue</h1>
        <p class="lead">Thirteen Indian spices, seeds and whole spices, prepared for culinary and commercial export.
          Filter by category or search by name.</p>
      </div>
    </section>

    <section class="section">
      <div class="container-fluid-custom">

        <div class="products-toolbar" data-aos="fade-up">
          <div class="filter-group">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="Spices">Spices</button>
            <button class="filter-btn" data-filter="Seeds">Seeds</button>
            <button class="filter-btn" data-filter="Whole Spices">Whole Spices</button>
          </div>
          <div class="search-wrap">
            <i class="bi bi-search"></i>
            <input type="text" id="product-search" placeholder="Search products…" aria-label="Search products">
          </div>
        </div>

        <div class="products-grid card-grid" id="products-catalogue"><!-- injected by products.js --></div>

        <div class="no-results">
          <i class="bi bi-search" style="font-size:2rem;color:var(--ink-soft);"></i>
          <p class="mt-3">No products match your search. Try a different term or category.</p>
        </div>

      </div>
    </section>

    <section class="section section-primary cta-section">
      <div class="container-fluid-custom">
        <span class="eyebrow">Custom Requirements</span>
        <h2>Looking for Something Specific?</h2>
        <p class="lead">Tell us the product, grade or quantity you need and our team will get back to you directly.</p>
        <a href="contact.html" class="btn-balajee btn-outline-cream magnetic">
          <span>Enquire Now</span><span class="btn-arrow"><i class="bi bi-arrow-up-right"></i></span>
        </a>
      </div>
    </section>

  </main>
<?php
include "footer.php";
?>