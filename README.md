# Balajee Enterprises — Website

A five-page, fully responsive, animated website for **Balajee Enterprises**, an Indian agricultural and food-spice export business based in Kolkata, West Bengal.

Built with **HTML5, CSS3, Bootstrap 5, Bootstrap Icons, JavaScript ES6+, jQuery, GSAP (+ ScrollTrigger) and AOS** — no frameworks (React/Vue/Angular) and no Tailwind.

---

## 1. Project structure

```
balajee-enterprises/
├── index.html          Home
├── about.html           About Us
├── products.html        Products (catalogue, filter, search, modal)
├── services.html         Our Services
├── contact.html          Contact (validated form + mailto)
│
├── css/
│   ├── style.css         Variables, typography, components, layout
│   ├── responsive.css     Breakpoints (320px → large desktop)
│   └── animations.css     Keyframes + AOS tuning
│
├── js/
│   ├── main.js            Navbar, off-canvas menu, cursor, scroll progress,
│   │                        back-to-top, dark mode, magnetic buttons, tilt,
│   │                        contact form validation + mailto
│   ├── animations.js       Preloader, AOS init, GSAP/ScrollTrigger reveals,
│   │                        parallax, mouse glow
│   └── products.js         Product data + catalogue render + filter/search/modal
│
├── assets/
│   ├── images/             Put your photography here (see images/README.txt)
│   └── icons/               favicon.svg
│
└── README.md
```

## 2. How to run

1. Copy/download the whole `balajee-enterprises` folder to your computer.
2. Add real photos to `assets/images/` using the exact filenames listed in
   `assets/images/README.txt` (the site displays clean placeholder graphics
   automatically if a file is missing, so nothing will look "broken" in the
   meantime).
3. Open `index.html` directly in a browser, **or**, for the best experience
   (and so relative paths / fonts behave exactly like production), open the
   folder in VS Code and run it with the **Live Server** extension.
4. All five pages share the same header, footer, styles and scripts, so you
   can navigate between them exactly as a visitor would.

No build step, no `npm install` — everything is plain files plus CDN-hosted
libraries (Bootstrap, Bootstrap Icons, GSAP, AOS, jQuery), so it also runs
fine straight from a static host (Netlify, GitHub Pages, cPanel, etc).

## 3. Where to change company details

Open **`js/main.js`** and edit the `SITE_CONFIG` object at the top of the
file:

```js
const SITE_CONFIG = {
  companyName: "BALAJEE ENTERPRISES",
  contactPerson: "Kaushal Sethia",
  designation: "Head of Business Development",
  addressLine1: "168-B, Cotton Street, Badabazar",
  addressLine2: "Kolkata, West Bengal 700007",
  country: "India",
  phone: "+91 6289987689",
  phoneHref: "+916289987689",
  email: "Kaushalsethiaa10@gmail.com"   // <-- change the email here
};
```

Every element on every page marked `data-config-email` or `data-config-phone`
(navigation, footer, contact page) reads from this object automatically, so
you only ever need to edit it in one place. The address and contact-person
text that appears directly in the page copy (About/Contact hero, footer
address block) is written in the HTML files themselves — update it with
find-and-replace across the five `.html` files if it changes.

## 4. How to replace product images

Product data lives in **`js/products.js`**, in the `PRODUCTS` array:

```js
{
  id: "red-chilli",
  name: "Red Chilli",
  category: "Spices",
  icon: "bi-fire",
  image: "assets/images/red-chilli.jpg",
  description: "…"
}
```

Just drop a correctly-named JPG into `assets/images/` (see
`assets/images/README.txt` for the full filename list) — the homepage
featured cards, the full catalogue on `products.html`, and the product
modal all pull from this same array, so one image update covers every
page. To add a new product, copy an object in the array and give it a
unique `id`.

## 5. How to change colors

All brand colors are CSS variables at the top of **`css/style.css`**:

```css
:root{
  --primary:#174d32;      /* deep forest green */
  --primary-dark:#0b2d1d;
  --green:#2f7d46;
  --accent:#d99a16;       /* warm turmeric yellow */
  --spice:#c75b22;        /* spice orange */
  --cream:#f7f3e8;
  --earth:#6b4a2f;
  --dark:#08140e;
  --white:#ffffff;
}
```

Change any hex value and it updates everywhere the color is used — buttons,
navbar, cards, footer, etc. Dark-mode overrides live directly below in the
`[data-theme="dark"]` block.

## 6. How to change animation speed

- **GSAP timelines** (preloader, hero entrance, scroll reveals) live in
  `js/animations.js` — adjust the `duration` and `stagger` values inside
  each `gsap.to()` / `gsap.fromTo()` / `gsap.timeline()` call.
- **AOS** (simple fade/slide-in effects marked with `data-aos="…"` in the
  HTML) is configured once, near the bottom of `js/animations.js`:
  ```js
  AOS.init({ duration: 900, once: true, offset: 100, easing: "ease-out-cubic" });
  ```
  Lower `duration` for snappier animations, raise it for a slower, more
  cinematic feel.
- **CSS keyframe animations** (floating leaves, rotating rings, particles,
  glow pulse) live in `css/animations.css` — each rule has an
  `animation-duration` you can shorten or lengthen.

The whole site respects `prefers-reduced-motion`: if a visitor has that
setting enabled, GSAP/AOS/CSS motion is automatically disabled or reduced.

## 7. Notes on the contact form

There is no backend or server included. The form in `contact.html`
validates required fields (name, email, message) in the browser with
`js/main.js`, then opens the visitor's own email client via a `mailto:`
link pre-filled with their message, addressed to the email set in
`SITE_CONFIG.email`. It does not silently claim to "send" anything to a
server — the visitor still has to press send in their own mail app.

## 8. Accessibility & performance notes

- Semantic HTML5 landmarks (`header`, `main`, `footer`, `nav`), heading
  hierarchy, `alt` text on every image, visible focus states, and
  `aria-label`/`aria-expanded` on interactive controls.
- Custom cursor, 3D card tilt and magnetic buttons are automatically
  disabled on touch devices (`(hover: none), (pointer: coarse)`) and when
  `prefers-reduced-motion` is set.
- Non-hero images use `loading="lazy"`.
- Animations favor `transform`/`opacity` and GSAP `quickTo` for smooth,
  performant motion.

---

Built for **Balajee Enterprises**, 168-B Cotton Street, Badabazar, Kolkata, West Bengal 700007, India.
