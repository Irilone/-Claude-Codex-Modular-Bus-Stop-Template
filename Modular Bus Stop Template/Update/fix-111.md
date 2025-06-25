/* =========================
   1. CSS Reset & Defaults
   ========================= */
body,
h1, h2, h3, h4, h5, h6,
p, ul, ol, table,
thead, tbody, tr, th, td {
  margin: revert !important;
  padding: revert !important;
}

/* =========================
   2. Custom Properties
   ========================= */
:root {
  --sp-4: 0.2222rem !important;
  --sp-16: 0.8889rem !important;
  --chevron-size: 0.65rem !important;
  --chevron-thickness: 0.11rem !important;
  --summary-pad-inline: 0.875rem !important;
  --chevron-gap: 0.375rem !important;
  --container-max-width: 900px !important;
  --container-padding-inline: 1rem !important;
  --content-max-width: 720px !important;
  --clr-primary: #012363 !important;
  --clr-primary-dark: #0B496E !important;
  --clr-heading: #012363 !important;
  --clr-body: #003366 !important;
  --clr-accent: #4AA6C9 !important;
  --clr-background: #ffffff !important;
  --clr-bg-alt: #eef5ff !important;
  --clr-bg-card: #E0F3FA !important;
  --clr-border: #e1e7f0 !important;
  --clr-table-header-bg: linear-gradient(to left, #b4bfff 40%, #cdd8ff 100%) !important;
  --clr-table-header-bg-alt: linear-gradient(150deg, #5a9fe0 0%, #518ece 50%, #477eba 100%) !important;
  --clr-white: #ffffff !important;
  --clr-black: #000000 !important;
  --blue-primary: #012363 !important;
  --blue-dark: #036 !important;
  --bg-service: #46b5ff !important;
  --bg-footer: #eff9ff !important;
  --text-white: #fff !important;
  --faq-heading-color: var(--clr-heading) !important;
  --faq-text-color: var(--clr-body) !important;
  --faq-bg-color: #f4f7fa !important;
  --faq-accent-color: var(--clr-heading) !important;
  --faq-border-color: var(--clr-border) !important;
  --font-family-base: filson-pro, sans-serif !important;
  --border-radius-sm: 0.3333rem !important;
  --border-radius-md: 0.4444rem !important;
  --border-radius-lg: 0.6667rem !important;
  --box-shadow-light: 0 0.1667rem 0.3333rem rgba(0, 0, 0, 0.08) !important;
  --box-shadow-medium: 0 0.2222rem 0.6667rem rgba(0, 0, 0, 0.1) !important;
  --shadow-sm: 0 3px 6px rgba(0,0,0,.1) !important;
  --shadow-md: 0 4px 12px rgba(0,0,0,.08) !important;
  --shadow-lg: 0 8px 20px rgba(0,0,0,.12) !important;
  --border-radius: 8px !important;
  --bus-img-min: 11.111rem !important;
  --clr-body-text: #036 !important;
  --clr-brand-100: #036 !important;
  --clr-brand-500: #1f7ea4 !important;
  --ff-primary: filson-pro, sans-serif !important;
  --fs-text: 18px !important;
  --lh-text: 1.5 !important;
  --bs-gutter-x: 0.1rem !important;
  --bs-gutter-y: 0 !important;
}

/* =========================
   3. Base Styles
   ========================= */
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html {
  font-size: 18px;
  scroll-behavior: smooth !important;
  -webkit-text-size-adjust: 100% !important;
  -ms-text-size-adjust: 100% !important;
}

body {
  line-height: 1.5 !important;
  color: var(--clr-body, #003366);
  background-color: var(--clr-background, #fff);
  font-family: var(--font-family-base);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

img, svg, video {
  display: block;
  max-width: 100%;
  height: auto;
}

button, input, select, textarea {
  font: inherit;
}

a {
  text-decoration: underline;
  color: #0000EE;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  color: #012363 !important;
}

p {
  color: var(--clr-body) !important;
}

/* =========================
   4. Helper Classes
   ========================= */
.visually-hidden,
.sr-only {
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

/* =========================
   5. Main Content
   ========================= */
.vaccination-info {
  max-width: var(--content-max-width);
  margin-inline: auto;
  padding-inline: 1rem;
}

.page__content-title {
  font-weight: 900 !important;
}

.vaccination-info .section-title {
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--clr-heading);
  margin-block: 0 1rem;
}

.vaccination-info .ingress {
  font-size: 1.29rem;
  font-weight: 400;
  color: var(--clr-body);
  margin-block: 0 1rem;
}

.vaccination-info .subtitle {
  font-size: 1.29rem;
  font-weight: 500;
  color: var(--clr-heading);
  margin-block: 1rem 0.5rem;
}

.vaccination-info .vaccine-heading {
  font-size: 1.43rem;
  font-weight: 600;
  color: var(--clr-heading);
  margin-block: 1rem 0.5rem;
}

.vaccination-info p {
  font-size: 1.07rem;
  line-height: 1.55;
  color: var(--clr-body);
  margin-block: 0 0.75rem;
}

.vaccination-info p strong {
  font-weight: 600;
}

/* =========================
   6. Bus Gallery Images - 30% Smaller
   ========================= */
.bus-gallery-row {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  margin: 1.5rem 0 !important;
  gap: 1.5rem !important;
  width: 100% !important;
}

.bus-gallery-col {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  width: 52.5% !important; /* 30% smaller than 75% */
  max-width: 420px !important;
  margin: 0 auto !important;
}

.bus-gallery-col .img-wrapper {
  width: 100% !important;
  max-width: 100% !important;
  position: relative !important;
  overflow: hidden !important;
  border-radius: var(--border-radius-lg) !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08) !important;
  margin-bottom: 0.75rem !important;
  /* Hover effects commented out
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  transform: translateZ(0) !important;
  -webkit-transform: translateZ(0) !important;
  */
}

/* Hover effects commented out
.bus-gallery-col .img-wrapper:hover {
  transform: translateY(-8px) scale(1.02) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
}
*/

.bus-gallery-col .bus-img {
  width: 100% !important;
  height: auto !important;
  display: block !important;
  object-fit: cover !important;
  aspect-ratio: 4/3;
}

.bus-gallery-col .card-body {
  width: 100% !important;
  text-align: center !important;
  padding: 0.5rem 0 !important;
}

.bus-gallery-col .bus-title {
  font-size: 1rem !important;
  font-weight: 500 !important;
  color: var(--clr-heading) !important;
  margin: 0 !important;
}

/* =========================
   7. Location Schedule Table
   ========================= */
.location-schedule {
  width: 90% !important;
  max-width: 100% !important;
  margin: 0.5rem auto 1rem auto !important;
  border-collapse: collapse !important;
  border: 1px solid var(--clr-border) !important;
  border-radius: var(--border-radius-md) !important;
  overflow: hidden !important;
  font-family: filson-pro, sans-serif !important;
}

.location-schedule th {
  background: linear-gradient(to left, #b4bfff 40%, #cdd8ff 100%) !important;
  color: #012363 !important;
  padding: 0.5rem 0.4rem !important;
  text-align: center !important;
  font-weight: 600 !important;
  border-bottom: 1.5px solid var(--clr-heading) !important;
  font-size: 0.9444rem !important; /* 17px */
  line-height: 1.3 !important;
}

.location-schedule td {
  padding: 0.4rem 0.375rem !important;
  text-align: center !important;
  color: #000 !important;
  font-size: 0.8333rem !important; /* 15px */
  font-weight: 400 !important;
  line-height: 1.4 !important;
  border-bottom: 1px solid var(--clr-border) !important;
}

.location-schedule tbody tr:last-child td {
  border-bottom: none !important;
}

.location-schedule tbody tr:nth-child(odd) td {
  background-color: var(--clr-bg-alt);
}

.location-schedule tbody tr:nth-child(even) td {
  background-color: var(--clr-white);
}

/* =========================
   8. FAQ Component - Light Colors
   ========================= */
.faq {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

.faq-title {
  font-size: 1.39rem !important;
  font-weight: 600 !important;
  color: var(--clr-heading) !important;
  margin: 1rem 0 0.75rem 0 !important;
  padding: 0 !important;
}

.faq-section {
  display: flex !important;
  flex-direction: column !important;
  gap: 0.4444rem !important;
  margin: 0 !important;
  padding: 0 !important;
}

.faq-item {
  background: #e8f4fb !important; /* Light blue background */
  border: 1px solid #c5ddf1 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
  border-radius: var(--border-radius-md) !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  transition: all 0.25s ease !important;
}

.faq-item summary {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 0.6667rem 0.8889rem !important;
  margin: 0 !important;
  font-family: filson-pro, sans-serif !important;
  font-size: 0.9444rem !important;
  font-weight: 500 !important;
  color: var(--clr-heading) !important;
  letter-spacing: 0.02em !important;
  line-height: 1.4 !important;
  cursor: pointer !important;
  list-style: none !important;
  position: relative !important;
  background: transparent !important;
  transition: background-color 0.2s ease !important;
}

.faq-item summary::-webkit-details-marker,
.faq-item summary::marker {
  display: none !important;
}

.faq-item summary::after {
  content: "" !important;
  position: absolute !important;
  right: 0.8889rem !important;
  top: 50% !important;
  width: var(--chevron-size) !important;
  height: var(--chevron-size) !important;
  border-right: var(--chevron-thickness) solid var(--clr-heading) !important;
  border-bottom: var(--chevron-thickness) solid var(--clr-heading) !important;
  transform: translateY(-50%) rotate(45deg) !important;
  transition: transform 0.25s ease !important;
}

.faq-item[open] summary::after {
  transform: translateY(-50%) rotate(-135deg) !important;
}

.faq-item summary:hover {
  background: rgba(74, 166, 201, 0.1) !important;
}

.faq-item summary:focus-visible {
  outline: 2px solid var(--clr-accent) !important;
  outline-offset: -2px !important;
}

.faq-item[open] {
  background: #ffffff !important;
  border-color: var(--clr-accent) !important;
}

.faq-content {
  padding: 0.8889rem !important;
  margin: 0 !important;
  background-color: transparent !important;
  font-family: filson-pro, sans-serif !important;
  font-size: 0.8889rem !important;
  font-weight: 400 !important;
  line-height: 1.5 !important;
  color: var(--clr-body) !important;
}

.faq-content p {
  margin: 0 !important;
  padding: 0 !important;
}

.faq-content p + p {
  margin-top: 0.5rem !important;
}

/* =========================
   9. Price Box & Table
   ========================= */
.price-box {
  width: 90% !important;
  max-width: 100% !important;
  margin: 0.5rem auto 1rem auto !important;
  padding: 0 !important;
}

.price-box .price-heading {
  font-size: 1.39rem !important;
  font-weight: 600 !important;
  color: #012363 !important;
  margin: 1rem 0 0.75rem 0 !important;
  padding: 0 !important;
}

/* Price toggle */
.price-toggle {
  display: block !important;
  margin-bottom: 0.75rem !important;
}

.price-toggle-input {
  position: absolute !important;
  opacity: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.price-toggle-labels {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  width: 100% !important;
  gap: 0.5rem !important;
  margin-bottom: 0.75rem !important;
}

.price-toggle-label {
  flex: 1 1 0 !important;
  text-align: center !important;
  padding: 0.5rem 0.4rem !important;
  font-size: 0.8889rem !important;
  background-color: #fff !important;
  color: #003366 !important;
  border: 1px solid var(--clr-border) !important;
  border-radius: var(--border-radius-sm) !important;
  transition: all 0.2s ease !important;
  cursor: pointer !important;
  user-select: none !important;
  font-weight: 400 !important;
  font-family: filson-pro, sans-serif !important;
}

.price-toggle-label:hover {
  border-color: var(--clr-accent) !important;
  background-color: var(--clr-bg-alt) !important;
}

/* Active state for toggles */
#v-ord:checked ~ .price-toggle-labels label[for="v-ord"],
#v-pen:checked ~ .price-toggle-labels label[for="v-pen"],
#v-stu:checked ~ .price-toggle-labels label[for="v-stu"] {
  background-color: #012363 !important;
  color: #ffffff !important;
  border-color: #012363 !important;
  font-weight: 600 !important;
}

/* Price table matching location schedule */
.price-table {
  width: 100% !important;
  margin: 0 auto !important;
  border-collapse: collapse !important;
  border: 1px solid var(--clr-border) !important;
  border-radius: var(--border-radius-md) !important;
  overflow: hidden !important;
  font-family: filson-pro, sans-serif !important;
  table-layout: fixed !important;
}

.price-table thead th {
  background: linear-gradient(to left, #b4bfff 40%, #cdd8ff 100%) !important;
  color: #012363 !important;
  padding: 0.5rem 0.4rem !important;
  font-weight: 600 !important;
  font-size: 0.9444rem !important; /* 17px */
  line-height: 1.3 !important;
  border-bottom: 1.5px solid var(--clr-heading) !important;
}

.price-table th.price-vaccine {
  width: 40% !important;
  text-align: left !important;
  padding-left: 0.75rem !important;
}

.price-table th.price-col {
  width: 20% !important;
  text-align: right !important;
  padding-right: 0.75rem !important;
}

.price-table tbody td {
  padding: 0.4rem 0.375rem !important;
  color: #000 !important;
  font-size: 0.8333rem !important; /* 15px */
  font-weight: 400 !important;
  line-height: 1.4 !important;
  border-bottom: 1px solid var(--clr-border) !important;
}

.price-table td.price-vaccine {
  text-align: left !important;
  padding-left: 0.75rem !important;
}

.price-table td.price-val {
  text-align: right !important;
  padding-right: 0.75rem !important;
  font-variant-numeric: tabular-nums !important;
}

.price-table tbody tr:nth-child(odd) {
  background-color: var(--clr-white) !important;
}

.price-table tbody tr:nth-child(even) {
  background-color: var(--clr-bg-alt) !important;
}

.price-table tbody tr:last-child td {
  border-bottom: none !important;
}

/* Toggle functionality */
.price-table .price-col.pen,
.price-table .price-col.stu,
.price-table .price-val.pen,
.price-table .price-val.stu {
  display: none !important;
}

.price-table .price-col.ord,
.price-table .price-val.ord {
  display: table-cell !important;
}

#v-pen:checked ~ .price-table .price-col.pen,
#v-pen:checked ~ .price-table .price-val.pen {
  display: table-cell !important;
}

#v-pen:checked ~ .price-table .price-col.ord,
#v-pen:checked ~ .price-table .price-val.ord,
#v-pen:checked ~ .price-table .price-col.stu,
#v-pen:checked ~ .price-table .price-val.stu {
  display: none !important;
}

#v-stu:checked ~ .price-table .price-col.stu,
#v-stu:checked ~ .price-table .price-val.stu {
  display: table-cell !important;
}

#v-stu:checked ~ .price-table .price-col.ord,
#v-stu:checked ~ .price-table .price-val.ord,
#v-stu:checked ~ .price-table .price-col.pen,
#v-stu:checked ~ .price-table .price-val.pen {
  display: none !important;
}

/* =========================
   10. Sidebar Content Spacing
   ========================= */
.page__sidebar {
  padding-top: 0 !important;
}

.sidebar-content {
  margin-bottom: 1.5rem !important;
}

.textblock {
  margin-bottom: 1rem !important;
}

.textblock__body {
  padding: 0 !important;
  margin: 0 !important;
}

.place-title {
  font-weight: 600 !important;
  margin: 0.5rem 0 0.25rem 0 !important;
}

.place-addy {
  margin: 0 0 0.75rem 0 !important;
}

/* =========================
   11. Header Styles
   ========================= */
header.container-fluid {
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  width: 100% !important;
  --bs-gutter-x: 0 !important;
  --bs-gutter-y: 0 !important;
}

.header {
  align-items: stretch !important;
  display: flex !important;
  flex-direction: column !important;
  height: auto !important;
}

.navigation {
  display: flex !important;
  flex-direction: column !important;
  width: 100% !important;
  height: auto !important;
  padding: 0 !important;
  margin: 0 auto !important;
  max-width: 1440px;
}

.navigation__logo {
  box-sizing: border-box !important;
  height: 60px !important;
  justify-content: flex-start !important;
  line-height: normal !important;
  margin-left: 6rem !important;
  order: -1 !important;
  padding: 30px 16px 25px !important;
  display: flex !important;
  width: 100% !important;
}

.navigation__logo img {
  display: block !important;
  max-height: 40px !important;
  max-width: 350px !important;
  min-width: 225px !important;
  object-fit: contain !important;
  object-position: left top !important;
  width: 50vw !important;
}

/* =========================
   12. Footer Styles
   ========================= */
footer.footer {
  background-color: var(--bg-footer) !important;
  box-sizing: border-box;
  color: var(--blue-primary) !important;
  font-family: var(--font-family-base) !important;
  padding: 24px 16px !important;
  width: 100%;
}

footer.footer .container-fluid {
  padding-bottom: 10px !important;
  padding-top: 10px !important;
}

footer.footer a {
  color: var(--clr-body-text) !important;
  font-family: var(--ff-primary) !important;
  font-weight: 400 !important;
  text-decoration: underline !important;
  transition: all .2s ease !important;
}

footer.footer a:hover {
  color: var(--clr-brand-500) !important;
  text-decoration: none !important;
}

footer.footer h4 {
  font-size: 18px !important;
  font-weight: 600 !important;
  margin-top: 0 !important;
  color: var(--blue-primary) !important;
  font-family: var(--ff-primary) !important;
  line-height: 1.3 !important;
  margin-bottom: .5em !important;
}

footer.footer h5 {
  font-size: 16px !important;
  font-weight: 500 !important;
  color: var(--blue-primary) !important;
  font-family: var(--ff-primary) !important;
  line-height: 1.3 !important;
  margin-top: 1em !important;
  margin-bottom: .5em !important;
}

footer.footer p {
  color: var(--blue-dark) !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
  margin-bottom: 10px !important;
  margin-top: 0 !important;
}

/* Footer link navigation */
nav.footer__link-nav {
  background-color: #1f7ea4 !important;
  box-sizing: border-box;
  font-family: var(--ff-primary) !important;
  padding-bottom: 15px !important;
  padding-top: 15px !important;
  width: 100% !important;
}

nav.footer__link-nav ul#footer__links {
  justify-content: center !important;
  list-style: none !important;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  padding-left: 0 !important;
}

nav.footer__link-nav a.footer__link {
  color: #fff !important;
  text-decoration: none !important;
}

nav.footer__link-nav a.footer__link:hover {
  text-decoration: underline !important;
}

/* White footer icons */
.footer__link .fa,
.footer__link .fa-external-link {
  color: #ffffff !important;
  font-size: .9em;
  margin-right: .5em;
}

.fa-external-link:before {
  content: "\f35d";
  color: #ffffff !important;
}

/* =========================
   13. Map Container
   ========================= */
.map-embed-container {
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: 16px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(1, 35, 99, 0.1);
  border: 1px solid rgba(1, 35, 99, 0.15);
  aspect-ratio: 16/9;
  background-color: #f0f2f5;
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

/* =========================
   14. Media Queries
   ========================= */
@media (max-width: 768px) {
  .vaccination-info {
    padding-inline: 0.75rem;
  }
  
  .bus-gallery-col {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  .location-schedule,
  .price-box {
    width: 100% !important;
  }
  
  .faq-title {
    font-size: 1.2rem !important;
  }
  
  .faq-item summary {
    font-size: 0.8889rem !important;
    padding: 0.5556rem 0.7778rem !important;
  }
  
  .faq-content {
    font-size: 0.8333rem !important;
    padding: 0.7778rem !important;
  }
}

@media (max-width: 480px) {
  .price-table thead th,
  .location-schedule th {
    font-size: 0.8889rem !important;
    padding: 0.4rem 0.3rem !important;
  }
  
  .price-table tbody td,
  .location-schedule td {
    font-size: 0.7778rem !important;
    padding: 0.35rem 0.25rem !important;
  }
  
  .price-toggle-label {
    font-size: 0.7778rem !important;
    padding: 0.4rem 0.3rem !important;
  }
}

/* =========================
   15. Animation Fix
   ========================= */
.fade-in {
  opacity: 1 !important;
  animation: fadeIn 0.6s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* =========================
   16. Reduced Motion
   ========================= */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}