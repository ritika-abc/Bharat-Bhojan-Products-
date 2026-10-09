<?php
include "nav.php";
?>
  <main>

    <!-- ===================== HERO ===================== -->
    <section class="hero">
      <div class="hero-media">
        <!-- <img src="assets/images/hero-spices.jpg" alt="Freeze dried and vacuum fried vegetable chips from India"
         onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1800&auto=format&fit=crop';"> -->
        <video src="2.mp4" class="obj" style="height: 100vh;" width="100%" autoplay muted loop type="video/mp4"></video>
      </div>
      <div class="hero-deco" aria-hidden="true">
        <div class="deco-glow "></div>
        <div class="deco-ring" style="width:260px;height:260px;top:12%;right:12%;"></div>
        <div class="deco-ring reverse" style="width:160px;height:160px;top:20%;right:22%;"></div>
        <div class="stamp" style="top:18%;right:8%;">
          <span class="stamp-text">Export Quality<br>India</span>
        </div>
        <i class="bi bi-leaf deco-leaf" style="top:30%;left:8%;font-size:2.2rem;"></i>
        <i class="bi bi-leaf-fill deco-leaf d2" style="top:55%;left:16%;font-size:1.4rem;"></i>
        <i class="bi bi-flower1 deco-leaf d3" style="top:70%;left:6%;font-size:1.7rem;"></i>
        <span class="deco-particle" style="width:8px;height:8px;top:40%;left:30%;"></span>
        <span class="deco-particle" style="width:5px;height:5px;top:65%;left:40%;animation-delay:.8s;"></span>
        <span class="deco-particle" style="width:10px;height:10px;top:24%;left:45%;animation-delay:1.6s;"></span>
      </div>

      <div class="container-fluid-custom hero-inner">
        <div class="hero-badge-row">
          <span class="eyebrow">India • Vegetable Snack Products</span>
        </div>
        <h1 data-split>From Fresh Vegetables to Global Markets.</h1>
        <p class="hero-desc">Quality freeze-dried, vacuum-fried and dried vegetable chips developed for modern
          consumers, retailers, distributors and international markets.</p>
        <div class="hero-actions">
          <a href="products.html" class="btn-balajee btn-primary-fill magnetic">
            <span>Explore Products</span><span class="btn-arrow"><i class="bi bi-arrow-up-right"></i></span>
          </a>
          <a href="contact.html" class="btn-balajee btn-outline-cream magnetic">
            <span>Contact Us</span><span class="btn-arrow"><i class="bi bi-arrow-up-right"></i></span>
          </a>
        </div>
      </div>

      <div class="hero-scroll-cue"><span class="cue-line"></span> Scroll</div>
    </section>

    <!-- ===================== TRUST / INTRODUCTION ===================== -->
    <section class="section">
      <div class="container-fluid-custom">
        <div class="row align-items-end">
          <div class="col-lg-7 section-head">
            <span class="eyebrow">Who We Are</span>
            <h2>Quality Vegetable Snacks. Global Possibilities.</h2>
          </div>
          <div class="col-lg-5">
            <p class="lead" data-aos="fade-up"> <span>Bharat Bhojan Products</span> is an Indian food products company
              specializing in freeze-dried, vacuum-fried and dried vegetable chips, serving domestic and international
              markets with a focus on quality, consistency and reliable supply.</p>
          </div>
        </div>

        <div class="trust-grid">
          <div class="trust-pill" data-aos="fade-up" data-aos-delay="0">
            <i class="bi bi-geo-alt"></i>
            <span class="pill-label">Origin</span>
            <div class="pill-title">Made in India</div>
          </div>
          <div class="trust-pill" data-aos="fade-up" data-aos-delay="80">
            <i class="bi bi-box-seam"></i>
            <span class="pill-label">Products</span>
            <div class="pill-title">Vegetable Chips</div>
          </div>
          <div class="trust-pill" data-aos="fade-up" data-aos-delay="160">
            <i class="bi bi-globe2"></i>
            <span class="pill-label">Markets</span>
            <div class="pill-title">Global Supply</div>
          </div>
          <div class="trust-pill" data-aos="fade-up" data-aos-delay="240">
            <i class="bi bi-patch-check"></i>
            <span class="pill-label">Approach</span>
            <div class="pill-title">Quality Driven</div>
          </div>
        </div>
      </div>
    </section>
    <!-- COMPANY INTRODUCTION -->





    <section class="section">
      <div class="container-fluid-custom">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <span class="eyebrow">Our Story</span>
            <h2>A Modern Vegetable Snack Business Built for Global Markets</h2>
            <p class="lead" data-aos="fade-up"> <span>Bharat Bhojan Products</span> is an Indian food products company
              focused on developing and supplying innovative vegetable snacks for domestic and international markets.
            </p>
            <p data-aos="fade-up">Based in Sivakasi, Tamil Nadu, the company is led by Ramkumar S, with a focus on
              delivering quality freeze-dried, vacuum-fried and dried vegetable products for retailers, distributors,
              food businesses and international buyers.</p>
            <p data-aos="fade-up">Our approach is simple: focus on consistent processing, quality products, attractive
              presentation and dependable supply while building long-term relationships with customers and business
              partners.</p>
          </div>
          <div class="col-lg-6">
            <div class="image-reveal image-3d" style="height:520px;">
              <div class="reveal-mask"></div>
              <img src="assets/image/banner/2.jpg"
                alt="Bharat Bhojan Products vegetable snacks and chips prepared for domestic and international markets">
            </div>
          </div>
        </div>
      </div>
    </section>


    <style>
      .pro-bo {
        height: 200px;
        width: 100%;
      }

      .pro-cards {
        border: 1px solid #c8901780;
        border-radius: 20px;
        background-color: white;
        text-align: center;
      }
    </style>


    <!-- ===================== FEATURED PRODUCTS ===================== -->
    <section class="section section-alt">
      <div class="container-fluid-custom">
        <div class="section-head">
          <span class="eyebrow">Our Products</span>
          <h2>Featured Vegetable Snacks</h2>
        </div>
        <div class="card-grid" id="featured-products"><!-- injected by products.js --></div>
        <div class="text-center mt-5" data-aos="fade-up">
          <a href="products.html" class="btn-balajee btn-outline-ink magnetic">
            <span>View Full Catalogue</span><span class="btn-arrow"><i class="bi bi-arrow-right"></i></span>
          </a>
        </div>

        <div class="my-4">
          <div class="row">
            <div class="col-lg-3 my-3">
              <div class="pro-cards p-1">
                <div class="img-pro">
                  <div class="story-media image-3d pro-bo">
                    <img src="assets/image/pro/1.jpg" alt="Freeze Dried Vegetable Chips">
                  </div>
                </div>
                <div class="p-3">
                  <h4>Freeze Dried Vegetable Chips</h4>
                  <a href="">Enquire Now</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 my-3">
              <div class="pro-cards p-1">
                <div class="img-pro">
                  <div class="story-media image-3d pro-bo">
                    <img src="assets/image/pro/2.jpg" alt="Vacuum Fried Vegetable Chips">
                  </div>
                </div>
                <div class="p-3">
                  <h4>Vacuum Fried Vegetable Chips</h4>
                  <a href="">Enquire Now</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 my-3">
              <div class="pro-cards p-1">
                <div class="img-pro">
                  <div class="story-media image-3d pro-bo">
                    <img src="assets/image/pro/3.jpg" alt="Dried Vegetable Chips">
                  </div>
                </div>
                <div class="p-3">
                  <h4>Dried Vegetable Chips</h4>
                  <a href="">Enquire Now</a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 my-3">
              <div class="pro-cards p-1">
                <div class="img-pro">
                  <div class="story-media image-3d pro-bo">
                    <img src="assets/image/pro/4.jpg" alt="Mixed Vacuum Fried Vegetable Chips">
                  </div>
                </div>
                <div class="p-3">
                  <h4>Mixed Vacuum Fried Vegetable Chips</h4>
                  <a href="">Enquire Now</a>
                </div>
              </div>
            </div>

             

           

          </div>
        </div>
      </div>
    </section>












    <!-- ===================== WHY CHOOSE US ===================== -->
    <section class="section section-dark">
      <div class="container-fluid-custom">
        <div class="section-head">
          <span class="eyebrow">Why Bharat Bhojan</span>
          <h2>Why Choose Us</h2>
        </div>
        <div class="feature-grid">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="0">
            <span class="feat-num">01</span>
            <i class="bi bi-patch-check"></i>
            <h3>Quality Focus</h3>
            <p>We focus on consistent product quality, careful processing and reliable standards from preparation
              through to packing.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="80">
            <span class="feat-num">02</span>
            <i class="bi bi-flower1"></i>
            <h3>Innovative Vegetable Snacks</h3>
            <p>Our range includes freeze-dried, vacuum-fried and dried vegetable chips developed for modern snack
              preferences.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="160">
            <i class="bi bi-box-seam"></i>
            <span class="feat-num">03</span>
            <h3>Reliable Supply</h3>
            <p>We work to provide dependable product supply and clear communication for domestic and international
              business requirements.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="240">
            <span class="feat-num">04</span>
            <i class="bi bi-people"></i>
            <h3>Buyer-Oriented Approach</h3>
            <p>We understand customer requirements and offer flexible solutions for retailers, distributors, food
              businesses and private-label brands.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- ===================== AGRICULTURE VISUAL STORY ===================== -->
    <section class="section story-section">
      <div class="container-fluid-custom">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="story-media image-3d">
              <img src="assets/image/banner/2.jpg"
                alt="Vegetable chips and value-added vegetable products prepared in India">
            </div>
          </div>
          <div class="col-lg-6 story-copy">
            <span class="route-coord font-mono">Sivakasi, Tamil Nadu, India</span>
            <span class="eyebrow">From Processing to Market</span>
            <h2>A Story Rooted in Quality and Innovation</h2>
            <p class="lead" data-aos="fade-up">Every product begins with carefully selected vegetables and modern
              food-processing methods — transformed into freeze-dried, vacuum-fried and dried vegetable snacks designed
              for today's markets.</p>
            <div class="divider-line"></div>
            <p data-aos="fade-up"> <span>Bharat Bhojan Products</span> works to connect quality Indian vegetable snack
              products with customers in domestic and international markets, focusing on consistent processing, reliable
              supply and products prepared with care.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- ===================== PRODUCT CATEGORIES ===================== -->
    <section class="section section-alt">
  <div class="container-fluid-custom">
    <div class="section-head">
      <span class="eyebrow">Browse By Type</span>
      <h2>Product Categories</h2>
    </div>
    <div class="category-grid">
      <a href="products.html" class="category-tile" data-aos="fade-up" data-aos-delay="0">
        <img src="assets/image/cat/1.jpg" alt="Freeze Dried Vegetable Chips">

        <div class="tile-content"><span class="eyebrow">01</span>
          <h3>Freeze Dried Vegetable Chips</h3>
        </div>
      </a>

      <a href="products.html" class="category-tile" data-aos="fade-up" data-aos-delay="80">
        <img src="assets/image/cat/2.jpg" alt="Vacuum Fried Vegetable Chips">
        <div class="tile-content"><span class="eyebrow">02</span>
          <h3>Vacuum Fried Vegetable Chips</h3>
        </div>
      </a>

      <a href="products.html" class="category-tile" data-aos="fade-up" data-aos-delay="160">
        <img src="assets/image/cat/3.jpg" alt="Dried Vegetable Chips">
        <div class="tile-content"><span class="eyebrow">03</span>
          <h3>Dried Vegetable Chips</h3>
        </div>
      </a>

      <a href="products.html" class="category-tile" data-aos="fade-up" data-aos-delay="240">
        <img src="assets/image/cat/4.jpg" alt="Mixed Vacuum Fried Vegetable Chips">
        <div class="tile-content"><span class="eyebrow">04</span>
          <h3>Mixed Vacuum Fried Vegetable Chips</h3>
        </div>
      </a>
    </div>
  </div>
</section>


    <!-- ===================== GLOBAL EXPORT CTA ===================== -->
    <section class="section section-primary cta-section">
      <div class="container-fluid-custom">
        <span class="eyebrow">Let's Talk Business</span>
        <h2>Bring Quality Vegetable Snacks to Your Market.</h2>
        <p class="lead">Talk to <span>Bharat Bhojan Products</span> about your freeze-dried, vacuum-fried, dried and
          private-label vegetable snack requirements.</p>
        <a href="contact.html" class="btn-balajee btn-outline-cream magnetic">
          <span>Start a Conversation</span><span class="btn-arrow"><i class="bi bi-arrow-up-right"></i></span>
        </a>
      </div>
    </section>


  </main>

  <?php

include "footer.php";
?>