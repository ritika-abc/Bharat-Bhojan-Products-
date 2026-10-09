<?php
include "nav.php";
?>
<main>
<section class="page-hero"> <div class="container-fluid-custom"> <span class="breadcrumb-mono">Home / Contact</span> <h1>Let's Start the Conversation</h1> <p class="lead">Get in touch with us for freeze-dried, vacuum-fried and dried vegetable snack products for retail, distribution and international markets.</p> </div> </section> <section class="section"> <div class="container-fluid-custom"> <div class="row g-4">
  <div class="col-lg-5">
    <div class="contact-info-card" data-aos="fade-up">
      <span class="eyebrow" style="color:var(--accent);">Get In Touch</span>
      <h3 class="mt-3 mb-4" style="color:var(--cream);">Vegetable Snack Products</h3>

      <div class="info-row">
        <i class="bi bi-person-badge"></i>
        <div>
          <span class="info-label">Contact</span>
          Our Business Development Team
        </div>
      </div>
      <div class="info-row">
        <i class="bi bi-geo-alt"></i>
        <div>
          <span class="info-label">Address</span>
          6/662-H-4 RR Complex, 2nd Street<br>Sivakasi, Tamil Nadu 626123<br>India
        </div>
      </div>
      <div class="info-row">
        <i class="bi bi-telephone"></i>
        <div>
          <span class="info-label">Phone</span>
          <a data-config-phone href="tel:">+91 8825536410</a>
        </div>
      </div>
      <div class="info-row">
        <i class="bi bi-envelope"></i>
        <div>
          <span class="info-label">Email</span>
          <a data-config-email href="mailto:">ramkumarselvaraj493@gmail.com</a>
        </div>
      </div>
      <div class="info-row">
        <span class="pulse-dot mt-2"></span>
        <div>
          <span class="info-label">Response</span>
          Enquiries are handled directly by our team. Contact us for product details, pricing and business requirements.
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-7">
    <div class="contact-form-card" data-aos="fade-up" data-aos-delay="100">
      <span class="eyebrow">Send an Enquiry</span>
      <h3 class="mt-2 mb-4">Tell Us What You Need</h3>

      <form id="contact-form" novalidate>
        <div class="row">
          <div class="col-md-6">
            <div class="form-floating-custom">
              <input type="text" name="name" placeholder=" " required>
              <label>Full Name *</label>
              <span class="field-error">Please enter your name.</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-floating-custom">
              <input type="text" name="company" placeholder=" ">
              <label>Company</label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-floating-custom">
              <input type="email" name="email" placeholder=" " required>
              <label>Email Address *</label>
              <span class="field-error">Please enter a valid email address.</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-floating-custom">
              <input type="tel" name="phone" placeholder=" ">
              <label>Phone Number</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating-custom">
              <select name="product">
                <option value=""></option>
                <option value="Freeze Dried Vegetable Chips">Freeze Dried Vegetable Chips</option>
                <option value="Vacuum Fried Vegetable Chips">Vacuum Fried Vegetable Chips</option>
                <option value="Dried Vegetable Chips">Dried Vegetable Chips</option>
                <option value="Mixed Vacuum Fried Vegetable Chips">Mixed Vacuum Fried Vegetable Chips</option>
                <option value="Private Label Vegetable Snacks">Private Label Vegetable Snacks</option>
                <option value="Bulk Vegetable Snack Products">Bulk Vegetable Snack Products</option>
                <option value="Other / Not Sure">Other / Not Sure</option>
              </select>
              <label>Product Interested In</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating-custom">
              <textarea name="message" placeholder=" " required></textarea>
              <label>Message *</label>
              <span class="field-error">Please enter a short message.</span>
            </div>
          </div>
        </div>

        <p class="font-mono" style="font-size:.72rem;color:var(--ink-soft);letter-spacing:.02em;">
          <i class="bi bi-info-circle me-1"></i> This form has no server backend — submitting opens your email app with the message pre-filled, addressed to our team.
        </p>

        <button type="submit" class="btn-balajee btn-primary-fill magnetic mt-2">
          <span>Send Enquiry</span><span class="btn-arrow"><i class="bi bi-envelope-arrow-up"></i></span>
        </button>
      </form>

      <div class="form-success">
        <i class="bi bi-check-circle" style="font-size:2.4rem;color:var(--green);"></i>
        <h3 class="mt-3">Your email app should now be open</h3>
        <p>Review the pre-filled message and hit send — we'll get back to you shortly.</p>
      </div>
    </div>
  </div>
</div>

<div class="mt-5" data-aos="fade-up">
  <div class="map-strip">
    <iframe
      src="https://www.google.com/maps?q=6/662-H-4+RR+Complex+2nd+Street+Sivakasi+Tamil+Nadu+626123&output=embed"
      loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Vegetable snack products location — Sivakasi, Tamil Nadu, India"></iframe>
  </div>
</div>

</div> </section>
</main>
<?php
include "footer.php";
?>