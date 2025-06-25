/* ==========================================================================
 *
 * CONSOLIDATED & REFACTORED STYLESHEET
 *
 * Description: This stylesheet has been created by merging, de-duplicating,
 * and correcting the provided CSS snippets. It is organized logically
 * to improve readability and maintainability.
 *
 * Table of Contents:
 * 1. Root Variables & Global Resets
 * 2. Base Typography & Layout Helpers
 * 3. Site Header
 * 4. Main Content & Page-Specific Styles
 * 5. Component: FAQ Section
 * 6. Component: Price List (Box, Toggle & Table)
 * 7. Component: Location Schedule Table
 * 8. Component: Image Gallery (Bus)
 * 9. Component: Map Embed
 * 10. Site Footer
 * 11. Animations & Media Queries
 *
 * ========================================================================== */


/* ==========================================================================
   1. ROOT VARIABLES & GLOBAL RESETS
   ========================================================================== */

:root {
  /* Colors */
  --clr-primary: #012363;
  --clr-primary-dark: #0B496E;
  --clr-heading: #012363;
  --clr-body: #003366;
  --clr-body-text: #036;
  --clr-accent: #4AA6C9;
  --clr-brand-500: #1f7ea4;
  --clr-background: #ffffff;
  --clr-bg-alt: #eef5ff;
  --clr-bg-card: #E0F3FA;
  --clr-border: #e1e7f0;
  --clr-white: #ffffff;
  --clr-black: #000000;
  --clr-table-header-bg: linear-gradient(150deg, #5a9fe0 0%, #518ece 50%, #477eba 100%);
  --clr-table-header-bg-alt: linear-gradient(to left, #b4bfff 40%, #cdd8ff 100%);
  --bg-footer: #eff9ff;

  /* Typography */
  --font-family-base: 'filson-pro', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --ff-primary: 'filson-pro', sans-serif;
  --fs-base: 18px;
  --lh-base: 1.5;

  /* Spacing & Sizing */
  --container-max-width: 1280px;
  --content-max-width: 900px;
  --container-padding-inline: 1rem;

  /* Borders & Shadows */
  --border-radius-sm: 0.3333rem;
  --border-radius-md: 0.4444rem;
  --border-radius-lg: 0.6667rem;
  --shadow-sm: 0 3px 6px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 20px rgba(0, 0, 0, 0.12);

  /* Component Specific */
  --chevron-size: 0.55rem;
  --chevron-thickness: 2px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: var(--fs-base);
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  overflow-x: hidden;
}

body {
  font-family: var(--font-family-base);
  line-height: var(--lh-base);
  color: var(--clr-body);
  background-color: var(--clr-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

img,
svg,
video {
  display: block;
  max-width: 100%;
  height: auto;
}

fieldset {
  border: none;
}


/* ==========================================================================
   2. BASE TYPOGRAPHY & LAYOUT HELPERS
   ========================================================================== */

h1, h2, h3, h4, h5, h6 {
  font-family: var(--ff-primary);
  color: var(--clr-heading);
  line-height: 1.2;
  margin-block: 1.2rem 0.6rem;
  font-weight: 600;
}

h1 { font-size: 2.6667rem; font-weight: 900; } /* ~48px */
h2 { font-size: 2rem; font-weight: 800; }     /* ~36px */
h3 { font-size: 1.5556rem; font-weight: 700; } /* ~28px */
h4 { font-size: 1.3333rem; font-weight: 600; } /* ~24px */
h5 { font-size: 1.2222rem; font-weight: 600; } /* ~22px */

p {
  margin-block-end: 1rem;
  hyphens: none;
}

p.hyphens {
  hyphens: auto;
}

a {
  color: #004c99;
  text-decoration: underline;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--clr-brand-500);
}

.visually-hidden,
.sr-only,
nav#accessibility-navigation {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.fa,
.fab,
.fad,
.fal,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-family: 'Font Awesome 5 Pro', sans-serif;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}


/* ==========================================================================
   3. SITE HEADER
   ========================================================================== */

.header {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #fff;
  box-shadow: var(--shadow-sm);
  position: relative;
  z-index: 10;
}

.navigation {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--container-max-width);
  margin-inline: auto;
}

/* Row 1: Logo */
.navigation__logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.25rem 1rem; /* 20px 16px */
  height: 80px; /* Consistent height */
}

.navigation__logo img {
  display: block;
  max-height: 40px;
  max-width: 350px;
  object-fit: contain;
  object-position: left center;
}

/* Row 2: Menu */
.navigation__left--menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;
  height: 60px;
  flex-wrap: nowrap;
  gap: 1.5rem; /* Spacing between menu items */
}

.navigation__item {
  text-align: center;
}

.navigation__item .navigation__item-category {
  color: var(--clr-primary);
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem;
}

.mega-menu__wrapper a.link {
  color: var(--clr-white);
}


/* ==========================================================================
   4. MAIN CONTENT & PAGE-SPECIFIC STYLES
   ========================================================================== */

.page__content-wrapper {
  margin-block: 1.5rem 1rem;
}

.page__sidebar {
  padding-top: 0;
}

.sidebar-content {
  margin-bottom: 1.5rem;
}

.vaccination-info {
  max-width: var(--content-max-width);
  margin-inline: auto;
  padding-inline: var(--container-padding-inline);
}

.vaccination-info .section-title,
.page__content-title {
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--clr-heading);
  margin-block: 0 1rem;
}

.vaccination-info .ingress {
  font-size: 1.29rem;
  font-weight: 400;
  margin-block: 0 1rem;
}

.vaccination-info .subtitle {
  font-size: 1.29rem;
  font-weight: 500;
  margin-block: 1.5rem 0.5rem;
}

.vaccination-info .vaccine-heading {
  font-size: 1.43rem;
  font-weight: 600;
  margin-block: 1.43rem 0.5rem;
}

.vaccination-info p {
  font-size: 1.07rem;
  line-height: 1.55;
  margin-block: 0 0.75rem;
}

.vaccination-info p strong {
  font-weight: 600;
}


/* ==========================================================================
   5. COMPONENT: FAQ SECTION
   ========================================================================== */

.faq {
  max-width: 100%;
}

.faq-title {
  font-size: 1.39rem;
  font-weight: 600;
  color: var(--clr-heading);
  margin: 1rem 0 0.75rem 0;
}

.faq-section {
  display: flex;
  flex-direction: column;
  gap: 0.4444rem; /* 8px */
}

.faq-item {
  background: linear-gradient(145deg, #5a8fc7 0%, #4a7bb0 60%, #406ba0 100%);
  border-radius: var(--border-radius-md);
  margin: 0;
  overflow: hidden;
  transition: background 0.25s ease;
}

.faq-item:hover {
  background: linear-gradient(145deg, #477eba 0%, #3a6aa0 60%, #2f5a90 100%);
}

.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6667rem 0.8889rem; /* 12px 16px */
  font-size: 0.9444rem; /* 17px */
  font-weight: 500;
  color: var(--clr-white);
  letter-spacing: 0.02em;
  cursor: pointer;
  list-style: none;
  position: relative;
  transition: background-color 0.2s ease;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary:hover {
  background-color: rgba(0, 0, 0, 0.15);
}

.faq-item summary::after {
  content: "";
  flex-shrink: 0;
  width: var(--chevron-size);
  height: var(--chevron-size);
  border-right: var(--chevron-thickness) solid var(--clr-white);
  border-bottom: var(--chevron-thickness) solid var(--clr-white);
  transform: translateY(-25%) rotate(45deg);
  transition: transform 0.25s ease;
}

.faq-item[open] > summary::after {
  transform: translateY(0%) rotate(-135deg);
}

.faq-content {
  padding: 0.8889rem; /* 16px */
  background-color: var(--clr-white);
  font-size: 0.8889rem; /* 16px */
  line-height: 1.5;
  color: var(--clr-body);
}

.faq-content p + p {
  margin-top: 0.5rem;
}


/* ==========================================================================
   6. COMPONENT: PRICE LIST (BOX, TOGGLE & TABLE)
   ========================================================================== */
/* NOTE: The toggle functionality relies on a specific HTML structure where
   the radio inputs are siblings before the .price-table element.
   Example:
   <div class="price-box">
     <h3>...</h3>
     <div class="price-toggle">
       <input type="radio" id="v-ord" name="price-type" class="price-toggle-input" checked>
       <input type="radio" id="v-pen" name="price-type" class="price-toggle-input">
       <input type="radio" id="v-stu" name="price-type" class="price-toggle-input">
       <div class="price-toggle-labels">
         <label for="v-ord">...</label>
         <label for="v-pen">...</label>
         <label for="v-stu">...</label>
       </div>
       <table class="price-table">...</table>
     </div>
   </div>
*/

.price-box {
  width: 90%;
  max-width: 24rem;
  margin-inline: auto;
  margin-block: 1rem 2rem;
}

.price-heading {
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--clr-heading);
  margin-block: 2rem 1rem;
}

.price-toggle {
  margin-bottom: 1rem;
}

.price-toggle-input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.price-toggle-labels {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.price-toggle-label {
  flex: 1 1 auto;
  padding: 0.5rem 0.6rem;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
  background-color: var(--clr-white);
  color: var(--clr-body);
  border: 1px solid var(--clr-border);
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  user-select: none;
}

.price-toggle-label:hover {
  border-color: var(--clr-accent);
  background-color: var(--clr-bg-alt);
}

#v-ord:checked ~ .price-toggle-labels label[for="v-ord"],
#v-pen:checked ~ .price-toggle-labels label[for="v-pen"],
#v-stu:checked ~ .price-toggle-labels label[for="v-stu"] {
  background-color: var(--clr-primary);
  color: var(--clr-white);
  border-color: var(--clr-primary);
  font-weight: 600;
}

.price-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  border: 1px solid var(--clr-border);
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.price-table thead th {
  background: var(--clr-table-header-bg);
  color: var(--clr-white);
  padding: 0.75rem 0.5rem;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.price-table td {
  padding: 0.6rem 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--clr-body);
  border-bottom: 1px solid var(--clr-border);
}

.price-table tbody tr:last-child td {
  border-bottom: none;
}

.price-table tbody tr:nth-child(even) {
  background-color: #f8fbff;
}

.price-table th.price-vaccine,
.price-table td.price-vaccine {
  width: 50%;
  padding-left: 0.75rem;
}

.price-table th.price-col,
.price-table td.price-val {
  width: 25%;
  text-align: right;
  padding-right: 0.75rem;
  font-variant-numeric: tabular-nums;
}

/* Logic for showing/hiding columns */
#v-ord:checked ~ .price-table .price-col.ord,
#v-ord:checked ~ .price-table .price-val.ord { display: table-cell; }
#v-ord:checked ~ .price-table .price-col.pen,
#v-ord:checked ~ .price-table .price-val.pen,
#v-ord:checked ~ .price-table .price-col.stu,
#v-ord:checked ~ .price-table .price-val.stu { display: none; }

#v-pen:checked ~ .price-table .price-col.pen,
#v-pen:checked ~ .price-table .price-val.pen { display: table-cell; }
#v-pen:checked ~ .price-table .price-col.ord,
#v-pen:checked ~ .price-table .price-val.ord,
#v-pen:checked ~ .price-table .price-col.stu,
#v-pen:checked ~ .price-table .price-val.stu { display: none; }

#v-stu:checked ~ .price-table .price-col.stu,
#v-stu:checked ~ .price-table .price-val.stu { display: table-cell; }
#v-stu:checked ~ .price-table .price-col.ord,
#v-stu:checked ~ .price-table .price-val.ord,
#v-stu:checked ~ .price-table .price-col.pen,
#v-stu:checked ~ .price-table .price-val.pen { display: none; }


/* ==========================================================================
   7. COMPONENT: LOCATION SCHEDULE TABLE
   ========================================================================== */

.location-schedule {
  width: 90%;
  max-width: 100%;
  margin: 0.5rem auto 1rem auto;
  border-collapse: collapse;
  border: 1px solid var(--clr-border);
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.location-schedule th {
  background: var(--clr-table-header-bg-alt);
  color: var(--clr-heading);
  padding: 0.5rem 0.4rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
}

.location-schedule td {
  padding: 0.4rem 0.375rem;
  text-align: center;
  color: var(--clr-black);
  font-size: 0.85rem;
  border-bottom: 1px solid var(--clr-border);
}

.location-schedule tbody tr:last-child td {
  border-bottom: none;
}

.location-schedule tbody tr:nth-child(odd) {
  background-color: var(--clr-bg-alt);
}


/* ==========================================================================
   8. COMPONENT: IMAGE GALLERY (BUS)
   ========================================================================== */

.bus-gallery-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  gap: 3rem;
  width: 100%;
}

.bus-gallery-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  max-width: 600px;
  margin-inline: auto;
}

.bus-gallery-col .img-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bus-gallery-col .img-wrapper:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12),
              0 20px 60px rgba(74, 166, 201, 0.2);
}

.bus-gallery-col .bus-img {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.bus-gallery-col .card-body {
  width: 100%;
  text-align: center;
  padding: 0;
}

.bus-gallery-col .bus-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--clr-heading);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}


/* ==========================================================================
   9. COMPONENT: MAP EMBED
   ========================================================================== */

.map-embed-container {
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: 1rem 0;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--clr-border);
  aspect-ratio: 16/9;
  background-color: #f0f2f5;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.map-embed-container:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.map-embed-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  z-index: 1;
}

.map-embed-container::after {
  content: "Laddar karta...";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #555;
  font-size: 0.8rem;
  z-index: 0;
}

.map-embed-container.is-loaded::after {
  display: none;
}


/* ==========================================================================
   10. SITE FOOTER
   ========================================================================== */

.footer {
  background-color: var(--bg-footer);
  color: var(--clr-primary);
  font-family: var(--ff-primary);
  padding: 2rem 1rem;
  width: 100%;
}

.footer .container-fluid {
  padding-block: 10px;
}

.footer .row {
  margin: 0;
}

/* This creates an overlap, keep if intentional. Otherwise, remove. */
.footer .row.row1 {
  position: relative;
  z-index: 2;
  margin-bottom: -214px;
}

.footer .row2 {
  margin-top: 150px;
}

.footer h4,
.footer h5 {
  color: var(--clr-primary);
  line-height: 1.3;
  margin-block: 1em 0.5em;
}

.footer h4 {
  font-size: 1.1rem; /* 18px-ish */
  font-weight: 600;
  margin-top: 0;
}

.footer h5 {
  font-size: 1rem; /* 16px-ish */
  font-weight: 500;
}

.footer p {
  color: var(--clr-body-text);
  font-size: 0.875rem; /* 14px */
  line-height: 1.6;
  margin-bottom: 10px;
}

.footer p:last-child {
  margin-bottom: 0;
}

.footer a {
  color: var(--clr-body-text);
  font-weight: 400;
  text-decoration: underline;
}

.footer a:hover {
  color: var(--clr-brand-500);
  text-decoration: none;
}

.footer a[href^="mailto:"],
.footer a[href^="tel:"] {
  color: #0066CC;
}

.footer a[href^="mailto:"]:hover,
.footer a[href^="tel:"]:hover {
  color: #004c99;
}

.footer .block.textblock {
  background-color: transparent;
  margin-bottom: 20px;
}

.footer .block.textblock:last-of-type {
  margin-bottom: 0;
}

nav.footer__link-nav {
  background-color: var(--clr-brand-500);
  padding-block: 15px;
}

nav.footer__link-nav ul#footer__links {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  gap: 1.5rem;
}

nav.footer__link-nav a.footer__link {
  color: var(--clr-white);
  text-decoration: none;
  font-size: 0.9rem;
}

nav.footer__link-nav a.footer__link:hover {
  text-decoration: underline;
}


/* ==========================================================================
   11. ANIMATIONS & MEDIA QUERIES
   ========================================================================== */

/* Fade-in Animation */
.fade-in {
  opacity: 0;
  animation: fadeInAnimation 0.6s ease forwards;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bus-gallery-col:nth-child(1) .fade-in { animation-delay: 0.1s; }
.bus-gallery-col:nth-child(2) .fade-in { animation-delay: 0.2s; }
.bus-gallery-col:nth-child(3) .fade-in { animation-delay: 0.3s; }


/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Responsive Breakpoints */
@media (max-width: 991.98px) {
  nav.footer__link-nav ul#footer__links {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 768px) {
  .bus-gallery-col {
    width: 90%;
  }

  .price-table,
  .location-schedule {
    font-size: 13px;
  }

  .price-table th.price-vaccine,
  .price-table td.price-vaccine {
    width: 45%;
  }

  .price-table th.price-col,
  .price-table td.price-val {
    width: auto;
    flex-grow: 1;
  }
}

@media (max-width: 576px) {
  .map-embed-container {
    max-width: 100%;
    border-radius: 0;
    border-inline: none;
  }
}

@media (max-width: 480px) {
  .price-toggle-labels {
    flex-direction: column;
    align-items: stretch;
  }

  .price-table thead,
  .location-schedule thead {
    font-size: 12px;
  }
}

/* Print Styles */
@media print {
  .header,
  .footer,
  .price-toggle,
  .bus-gallery-col .img-wrapper:hover {
    box-shadow: none !important;
  }

  .map-embed-container,
  .faq-item,
  .price-table {
    page-break-inside: avoid;
  }

  .map-embed-container::after {
    display: none;
  }
}
