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
  /* Spacing */
  --sp-4: 0.2222rem;
  --sp-16: 0.8889rem;
  --chevron-size: 0.65rem;
  --chevron-thickness: 0.11rem;
  --summary-pad-inline: 0.875rem;
  --chevron-gap: 0.375rem;

  /* Layout */
  --container-max-width: 900px;
  --container-padding-inline: 1rem;
  --content-max-width: 720px;

  /* Colors */
  --clr-primary: #012363;
  --clr-primary-dark: #0B496E;
  --clr-heading: #012363;
  --clr-body: #003366;
  --clr-accent: #4AA6C9;
  --clr-background: #ffffff;
  --clr-bg-alt: #eef5ff;
  --clr-bg-card: #E0F3FA;
  --clr-border: #e1e7f0;
  --clr-table-header-bg: linear-gradient(150deg, #5a9fe0 0%, #518ece 50%, #477eba 100%);
  --clr-table-header-bg-alt: linear-gradient(to left, #b4bfff 40%, #cdd8ff 100%);
  --clr-white: #ffffff;
  --clr-black: #000000;

  /* Legacy colors (for compatibility) */
  --blue-primary: #012363;
  --blue-dark: #003366;
  --bg-service: #46b5ff;
  --bg-footer: #eff9ff;
  --text-white: #ffffff;

  /* FAQ specific */
  --faq-heading-color: var(--clr-heading);
  --faq-text-color: var(--clr-body);
  --faq-bg-color: #f4f7fa;
  --faq-accent-color: var(--clr-heading);
  --faq-border-color: var(--clr-border);

  /* Typography */
  --font-family-base: 'filsonpro', sans-serif;
  --ff-primary: var(--font-family-base);
  --fs-text: 18px;
  --lh-text: 1.5;

  /* Border radius */
  --border-radius-sm: 0.3333rem;
  --border-radius-md: 0.4444rem;
  --border-radius-lg: 0.6667rem;
  --border-radius: 0.4444rem;

  /* Shadows */
  --box-shadow-light: 0 0.1667rem 0.3333rem rgba(0, 0, 0, 0.08);
  --box-shadow-medium: 0 0.2222rem 0.6667rem rgba(0, 0, 0, 0.1);
  --shadow-sm: 0 0.1667rem 0.3333rem rgba(0, 0, 0, 0.1);
  --shadow-md: 0 0.2222rem 0.6667rem rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 0.4444rem 1.1111rem rgba(0, 0, 0, 0.12);

  /* Additional vars */
  --clr-body-text: #036;
  --clr-brand-100: #036;
  --clr-brand-500: #1f7ea4;
  --bs-gutter-x: 0.1rem;
  --bs-gutter-y: 0;
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

.fade-in {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s, transform 0.6s;
}

.fade-in.visible {
  opacity: 1;
  transform: none;
}

/* =========================
   5. Main Content
   ========================= */
.vaccination-info {
  max-width: var(--content-max-width);
  margin-inline: auto;
  padding-inline: var(--container-padding-inline);
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
  margin-block: 1.5rem 0.5rem;
}

.vaccination-info .vaccine-heading {
  font-size: 1.43rem;
  font-weight: 600;
  color: var(--clr-heading);
  margin-block: 1.43rem 0.5rem;
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

.vaccine-bus-image {
  display: block;
  width: 40%;
  margin: 1rem auto 2rem auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* =========================
   6. Location Schedule Table
   ========================= */
.location-schedule tbody tr:nth-child(odd) td {
  background-color: var(--clr-bg-alt);
}

.location-schedule tbody tr:nth-child(even) td {
  background-color: var(--clr-white);
}

/* =========================
   7. FAQ Component
   ========================= */
.faq {
  max-width: 20rem;
  min-width: 20rem;
  margin: 0 auto;
  padding-inline: 0rem;
}

section.faq.sidebar-content details.faq-item {
  min-width: 10rem;
}

.faq-title {
  font-size: 1.39rem;
  font-weight: 600;
  color: var(--clr-heading);
  margin-block: 2rem 0.5rem;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.faq-item {
  background: linear-gradient(145deg, #5a8fc7 0%, #4a7bb0 60%, #406ba0 100%);
  border: none !important;
  box-shadow: none !important;
  border-radius: var(--border-radius-md) !important;
  margin-block: 0.125rem !important;
  margin-bottom: 0.1111rem !important;
  padding: 0 !important;
  overflow: hidden !important;
  transition: border-color 0.25s ease !important;
}

.faq-item summary {
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0 !important;
  padding-inline: var(--summary-pad-inline);
  padding-block: 0.7rem;
  padding-right: calc(var(--summary-pad-inline) + var(--chevron-gap));
  font-weight: 500;
  cursor: pointer;
  list-style: none;
  position: relative;
  transition: background-color 0.2s;
  color: #fff;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::marker {
  display: none;
}

.faq-item summary::after {
  content: "";
  box-sizing: content-box;
  position: absolute;
  right: 1rem;
  width: var(--chevron-size);
  height: var(--chevron-size);
  border-right: var(--chevron-thickness) solid #fff;
  border-bottom: var(--chevron-thickness) solid #fff;
  transform: rotate(45deg);
  transition: transform 0.25s ease;
}

.faq-item summary:hover,
.faq-item summary:focus-visible {
  background: linear-gradient(150deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%) !important;
  color: var(--clr-heading);
}

.faq-item summary:hover::after,
.faq-item summary:focus-visible::after {
  border-right-color: var(--clr-accent);
  border-bottom-color: var(--clr-accent);
}

.faq-item summary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--clr-accent);
}

.faq-item[open] {
  border-color: var(--clr-accent);
}

.faq-item[open] summary::after {
  transform: rotate(-135deg);
}

.faq-content {
  padding-block: 0.5rem !important;
  padding-inline: 1rem !important;
  font-size: 1rem !important;
  line-height: 1.55 !important;
  color: #fff !important;
  background: transparent;
}

.faq-content p {
  margin: 0 !important;
  color: #fff !important;
}

.faq-content p:last-child {
  margin-bottom: 0 !important;
}

.faq-section {
  display: flex;
  flex-direction: column;
  gap: 0.6rem !important;
  margin-bottom: 0;
  padding-bottom: 0;
}

.faq-section > * {
  margin-bottom: 0;
}

/* =========================
   8. Price Table
   ========================= */
.price-box {
  max-width: 24rem;
  min-width: 24rem;
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding-inline);
}

.price-box .price-heading,
h3.price-heading {
  font-size: 1.6rem !important;
  font-weight: 400 !important;
  color: #012363;
  margin-block: 2rem 1rem;
  letter-spacing: 0.5px;
}

.price-toggle {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
}

.price-toggle-labels {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.price-toggle-label {
  flex: 1 1 0;
  min-width: 5.55rem;
  text-align: left !important;
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  background-color: #fff;
  color: #003366;
  border: 1px solid var(--clr-border, #e1e7f0);
  border-radius: var(--border-radius-sm, 6px);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  user-select: none;
  font-weight: 400;
}

.price-toggle-label[for="v-ord"] { min-width: 5.8rem !important; }
.price-toggle-label[for="v-pen"] { min-width: 9.17rem !important; }
.price-toggle-label[for="v-stu"] { min-width: 7.9rem !important; }

.price-toggle-label:hover {
  border-color: var(--clr-accent);
  background-color: var(--clr-bg-alt);
}

.price-toggle-input:focus-visible ~ .price-toggle-labels label[for*="v-"] {
  outline: 0.111rem solid var(--clr-accent);
  outline-offset: 0.111rem;
  box-shadow: 0 0 0 0.1667rem var(--clr-accent);
}

/* Active toggle state */
.price-toggle-input#v-ord:checked ~ .price-toggle-labels label[for="v-ord"],
.price-toggle-input#v-pen:checked ~ .price-toggle-labels label[for="v-pen"],
.price-toggle-input#v-stu:checked ~ .price-toggle-labels label[for="v-stu"] {
  background-color: #012363;
  color: #fff;
  border-color: #012363;
  font-weight: 600;
}

.price-table {
  width: 100%;
  table-layout: fixed !important;
  border-collapse: collapse !important;
  font-variant-numeric: tabular-nums !important;
  border: 1px solid var(--clr-border) !important;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  min-width: 11.11rem;
  max-width: 22.11rem;
}

.price-table thead th {
  background: var(--clr-table-header-bg);
  color: #fff;
  font-weight: 600;
  padding: 0.75rem 0.5rem;
  text-align: left;
}

.price-table th.price-col {
  text-align: left;
}

th.price-col.ord {
  white-space: normal;
  word-break: keep-all;
}

.price-table tbody tr:nth-child(odd) {
  background-color: var(--clr-white);
}

.price-table tbody tr:nth-child(even) {
  background-color: var(--clr-bg-alt);
}

.price-table td {
  color: #000 !important;
  font-size: 0.9rem !important;
  font-weight: 400 !important;
  letter-spacing: 0.5px !important;
  text-align: left !important;
  padding: 0.4rem 0.5rem !important;
  border-bottom: 1px solid var(--clr-border) !important;
}

.price-table tbody tr:last-child td {
  border-bottom: none;
}

.price-table td.price-val {
  text-align: left !important;
  white-space: nowrap;
}

/* Price column visibility logic */
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
   9. Header Styles
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

.header.float-right,
.header.pull-right {
  float: none !important;
}

.header[class*=position-absolute] {
  position: relative !important;
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
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
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

body[class*=logo--normal] .navigation__logo {
  height: 60px !important;
  padding-top: 50px !important;
}

.navigation__logo.flex-start {
  align-items: center !important;
  display: flex !important;
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

.navigation__left,
.navigation__left--menu {
  display: flex !important;
  padding-left: 50px !important;
  padding-right: 50px !important;
}

.header-navigation-menu,
.navigation__left--menu {
  align-content: center !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  height: 60px !important;
  list-style: none !important;
  margin: 0 !important;
  order: -1 !important;
  padding: 0 !important;
  width: 100% !important;
}

.mega-menu__wrapper a.link {
  color: #fff !important;
}

/* =========================
   10. Footer Styles
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

footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]) {
  color: #044999 !important;
  font-size: inherit !important;
  font-weight: 400 !important;
  text-decoration: underline !important;
}

footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]):hover {
  text-decoration: none !important;
}

footer.footer a[href^="mailto:"],
footer.footer a[href^="tel:"] {
  color: #06c !important;
  font-size: inherit !important;
  text-decoration: underline !important;
}

footer.footer a[href^="mailto:"]:hover,
footer.footer a[href^="tel:"]:hover {
  color: #004c99 !important;
  text-decoration: none !important;
}

footer.footer .row {
  margin: 0;
}

footer.footer .row.row1 {
  margin-bottom: -214px !important;
  padding: 0 !important;
  position: relative;
  z-index: 2;
}

footer.footer .row2 {
  margin-top: 150px !important;
}

footer.footer h4,
footer.footer h5 {
  color: var(--blue-primary) !important;
  font-family: var(--ff-primary) !important;
  line-height: 1.3 !important;
  margin-bottom: .5em !important;
  margin-top: 1em !important;
}

footer.footer h4 {
  font-size: 18px !important;
  font-weight: 600 !important;
  margin-top: 0 !important;
}

footer.footer h5 {
  font-size: 16px !important;
  font-weight: 500 !important;
}

footer.footer h4[style*="color:#1f7ea4"] {
  margin-top: 8px !important;
}

footer.footer p {
  color: var(--blue-dark) !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
  margin-bottom: 10px !important;
  margin-top: 0 !important;
}

footer.footer .textblock__body>p:last-of-type,
footer.footer p:last-child {
  margin-bottom: 0 !important;
}

footer.footer .block.textblock {
  background-color: transparent !important;
  margin-bottom: 20px !important;
}

footer.footer .block.textblock:last-of-type {
  margin-bottom: 0 !important;
}

footer.footer .textblock__body {
  background-color: transparent !important;
}

footer.footer .textblock__body>div[style*=width][style*=height][style*=border-radius] {
  margin: 10px auto !important;
}

footer.footer .textblock__body>div[style*=width][style*=height][style*=border-radius] iframe {
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
}

div[style*="text-align:center;margin:24px"] {
  margin: 0 !important;
}

/* Footer navigation */
nav.footer__link-nav {
  background-color: #1f7ea4 !important;
  box-sizing: border-box;
  font-family: var(--ff-primary) !important;
  list-style: none !important;
  padding-bottom: 15px !important;
  padding-left: 0 !important;
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

nav.footer__link-nav ul#footer__links>li.col {
  flex-basis: auto !important;
  flex-grow: 0 !important;
  padding-bottom: 5px !important;
  padding-top: 5px !important;
  text-align: center;
}

nav.footer__link-nav a.footer__link {
  color: #fff !important;
  text-decoration: none !important;
}

nav.footer__link-nav a.footer__link:hover {
  text-decoration: underline !important;
}

nav.footer__link-nav button#footer__links-toggle-button {
  background: transparent !important;
  border: 1px solid #fff !important;
  cursor: pointer !important;
  margin-bottom: 10px !important;
  margin-left: 15px;
  padding: 8px 10px !important;
}

nav.footer__link-nav button#footer__links-toggle-button .hamburger-menu__line {
  background-color: #fff !important;
  display: block !important;
  height: 2px !important;
  margin: 4px auto !important;
  width: 22px !important;
}

/* =========================
   11. Map Embed Styles
   ========================= */
.map-embed-container {
  --map-radius: 12px;
  --map-shadow: 0 4px 12px rgba(1, 35, 99, 0.1);
  --map-hover-shadow: 0 7px 28px rgba(1, 35, 99, 0.18);
  --map-focus-outline-color: #007bff;
  --map-focus-shadow: 0 0 0 3px hsla(0,0%,100%,.7), 0 0 0 5px var(--map-focus-outline-color), var(--map-hover-shadow);
  --map-max-width: 375px;
  --map-aspect-ratio: 16/9;
  --map-vertical-margin: 16px;
  --map-border-width: 1px;
  --map-border-color: rgba(1, 35, 99, 0.15);
  --map-loading-text-color: #333;
  --map-loading-bg-color: #f0f2f5;
  --map-spinner-color: var(--map-focus-outline-color);
  --map-transition-duration: 0.25s;

  position: relative;
  width: 100%;
  max-width: var(--map-max-width);
  margin-top: var(--map-vertical-margin);
  margin-bottom: var(--map-vertical-margin);
  margin-left: 0;
  margin-right: auto;
  border-radius: var(--map-radius);
  overflow: hidden;
  box-shadow: var(--map-shadow);
  border: var(--map-border-width) solid var(--map-border-color);
  aspect-ratio: var(--map-aspect-ratio);
  background-color: var(--map-loading-bg-color);
  transition: transform var(--map-transition-duration) ease,
              box-shadow var(--map-transition-duration) ease,
              border-color var(--map-transition-duration) ease;
}

.map-embed-container:hover {
  border-color: var(--map-spinner-color);
  box-shadow: var(--map-hover-shadow);
  transform: translateY(-4px);
}

.map-embed-container:focus-visible {
  border-color: var(--map-spinner-color);
  box-shadow: var(--map-focus-shadow);
  outline: none;
  transform: translateY(-4px);
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

.map-embed-container:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 36px;
  height: 36px;
  margin-top: -28px;
  margin-left: -18px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--map-spinner-color);
  border-radius: 50%;
  animation: map-spinner-rotation 0.8s linear infinite;
  z-index: 0;
}

.map-embed-container:after {
  content: "Laddar karta...";
  position: absolute;
  top: calc(50% + 10px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--map-loading-text-color);
  font-family: Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  z-index: 0;
}

.map-embed-container.is-loaded:after,
.map-embed-container.is-loaded:before {
  display: none;
}

@keyframes map-spinner-rotation {
  0% { transform: rotate(0deg); }
  to { transform: rotate(1turn); }
}

/* =========================
   12. Icon Styles
   ========================= */
.fa,
.fab,
.fad,
.fal,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-family: Font Awesome\ 5 Pro !important;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}

.footer__link .fa-external-link {
  font-size: .9em;
  margin-right: .5em;
}

.fa-chevron-down:before { content: "\f078"; }
.fa-chevron-up:before { content: "\f077"; }
.fa-external-link:before { content: "\f35d"; }

/* =========================
   13. Media Queries
   ========================= */
@media (max-width: 480px) {
  .price-table thead th,
  .price-table tbody td {
    padding: 0.4rem 0.3rem !important;
    font-size: 0.8em !important;
  }

  .faq {
    min-width: auto;
    width: 100%;
    padding-inline: 1rem;
  }

  .faq-title {
    white-space: normal;
    font-size: 1.2rem;
  }

  .faq-item summary {
    padding-block: 0.8rem;
    font-size: 0.95rem;
  }

  .faq-content {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .map-embed-container {
    --map-max-width: 100%;
    border-radius: 0;
    margin-bottom: 0;
    margin-top: 0;
    --map-border-width: 0px;
  }

  .map-embed-container:before {
    margin-top: -26px;
  }

  .map-embed-container:after {
    font-size: 12px;
    top: calc(50% + 8px);
  }
}

@media (min-width: 768px) {
  .textblock.alignment--left,
  .textblock.alignment--left :not(ul):not(ol):not(li) {
    text-align: left !important;
  }

  .textblock__body p {
    font-size: 1rem;
  }
}

@media (min-width: 64rem) {
  :root {
    --chevron-gap: 0.5rem;
  }
}

@media (max-width: 991.98px) {
  nav.footer__link-nav ul#footer__links.open,
  nav.footer__link-nav ul#footer__links:target {
    align-items: center !important;
    flex-direction: column !important;
  }

  nav.footer__link-nav ul#footer__links.open>li.col,
  nav.footer__link-nav ul#footer__links:target>li.col {
    margin-bottom: 5px !important;
    width: 100% !important;
  }

  nav.footer__link-nav ul#footer__links.open>li.col:last-child,
  nav.footer__link-nav ul#footer__links:target>li.col:last-child {
    margin-bottom: 0 !important;
  }
}

@media print {
  .map-embed-container {
    background-color: #fff !important;
    border: 1px solid #bbb !important;
    box-shadow: none !important;
    page-break-inside: avoid;
  }

  .map-embed-container:after,
  .map-embed-container:before {
    display: none !important;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .faq-item,
  .faq-item summary::after,
  .fade-in,
  .map-embed-container {
    transition: none;
  }

  @keyframes map-spinner-rotation {
    0% { transform: rotate(0deg); }
    to { transform: rotate(0deg); }
  }
}

/* =========================
   14. Utility Classes
   ========================= */
.col-md-8 {
  width: 60%;
}

/* CMS margin reset */
section.price-box.sidebar-content * {
  margin-block-start: 0 !important;
}
/* ===========================================================================================================
Start på og
================================================================================================================================================================================================== */



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
    white-space: wrap !important;
    border: 0 !important;
  }
  /* Remove this conflicting fade-in class */
  /* .fade-in {
    opacity: 0 !important;
    transform: translateY(10px) !important;
    transition: opacity 0.6s, transform 0.6s !important;
  }
  .fade-in.visible {
    opacity: 1 !important;
    transform: none !important;
  } */


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
  line-height: 0.85 !important;
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
  margin-block: 1.5rem 0.5rem;
}
.vaccination-info .vaccine-heading {
  font-size: 1.43rem;
  font-weight: 600;
  color: var(--clr-heading);
  margin-block: 1.43rem 0.5rem;
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
.vaccine-bus-image {
  display: block;
  width: 50%;
  margin: 1rem auto 2rem auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* =========================
   7. Location Schedule Table
   ========================= */

.location-schedule tbody tr:nth-child(odd) td {
  background-color: var(--clr-bg-alt);
}
.location-schedule tbody tr:nth-child(even) td {
  background-color: var(--clr-white);
}

/* =========================
   9. Price Table
   ========================= */
.price-box {
  width:clamp(20.8rem,80%,38rem);
  max-width: 24rem;
  min-width: rem;
  width: 75%;
  margin-inline: auto;
  padding-inline: var(--container-padding-inline);
}
.price-box .price-heading {
  font-size: 1rem !important;
  font-weight: 400 !important;
  color: #012363;
  margin-block: 1rem 1rem;
}
.price-toggle {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem  !important;
}
.price-toggle-labels {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.price-toggle-label {
  flex: 1 1 0;
  min-width: 5.55rem;
  text-align: center;
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  background-color: #fff;
  color: #003366;
  border: 1px solid var(--clr-border, #e1e7f0);
  border-radius: var(--border-radius-sm, 6px);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  user-select: none;
  font-weight: 400;
  text-align: left !important;
}
.price-toggle-label[for="v-ord"] { min-width: 5.8rem !important; }
.price-toggle-label[for="v-pen"] { min-width: 9.17rem !important; }
.price-toggle-label[for="v-stu"] { min-width: 7.9rem !important; }
.price-toggle-label:hover {
  border-color: var(--clr-accent);
  background-color: var(--clr-bg-alt);
}
.price-toggle-input:focus-visible ~ .price-toggle-labels label[for*="v-"] {
  outline: 0.111rem solid var(--clr-accent);
  outline-offset: 0.111rem;
  box-shadow: 0 0 0 0.1667rem var(--clr-accent);
}


.price-table th.prbice-col {
  text-align: left;
}
th.price-col.ord {
  white-space: normal;
  word-break: keep-all;
}
.price-table tbody tr:nth-child(odd) { background-color: var(--clr-white); }
.price-table tbody tr:nth-child(even) { background-color: var(--clr-bg-alt); }
.price-table td {
  color: #000 !important;
  font-size: 1rem !important;
  border-bottom: 1px solid var(--clr-border);
}
.price-table tbody tr:last-child td {
  border-bottom: none;
}
.price-table td.price-val {
  text-align: left !important;
  white-space: nowrap;
}
.price-table .price-col.pen,
.price-table .price-col.stu,
.price-table .price-val.pen,
.price-table .price-val.stu {
  display: none;
}
.price-table .price-col.ord,
.price-table .price-val.ord {
  display: table-cell;
}
#v-pen:checked ~ .price-table .price-col.pen,
#v-pen:checked ~ .price-table .price-val.pen {
  display: table-cell;
}
#v-pen:checked ~ .price-table .price-col.ord,
#v-pen:checked ~ .price-table .price-val.ord,
#v-pen:checked ~ .price-table .price-col.stu,
#v-pen:checked ~ .price-table .price-val.stu {
  display: none;
}
#v-stu:checked ~ .price-table .price-col.stu,
#v-stu:checked ~ .price-table .price-val.stu {
  display: table-cell;
}
#v-stu:checked ~ .price-table .price-col.ord,
#v-stu:checked ~ .price-table .price-val.ord,
#v-stu:checked ~ .price-table .price-col.pen,
#v-stu:checked ~ .price-table .price-val.pen {
  display: none;
}

/* =========================
   10. Media Queries
   ========================= */
@media (max-width: 480px) {
  .price-table thead th,
  .price-table tbody td {
    padding: 0.4rem 0.3rem;
    font-size: 0.8rem;
  }

/* ============================================================
   HEADER & FOOTER STYLES - Praktikertjänst Vaccincenter
   ============================================================
   Denna CSS innehåller ALLA stilar för sidhuvud (header) och sidfot (footer)
   från din kodbas. Kommentarerna är mycket utförliga och på svenska för att
   förklara varje sektion, klass och egenskap. Inget relevant har utelämnats!
   ============================================================ */


/* ------------------------------------------------------------
   1. CSS-variabler för färger, typsnitt och layout
   ------------------------------------------------------------
   Dessa variabler används överallt i header och footer för att
   säkerställa enhetlig färgsättning, typografi och spacing.
   ------------------------------------------------------------ */
:root {
  --blue-primary: #012363 !important;      /* Primär blå för rubriker, länkar, ikoner */
  --blue-dark: #036 !important;            /* Mörkare blå för brödtext */
  --bg-service: #46b5ff !important;        /* Accentblå för tjänster */
  --bg-footer: #eff9ff !important;         /* Ljusblå bakgrund för sidfot */
  --text-white: #fff !important;           /* Vit text, t.ex. på blå bakgrund */
  --font-family-base: filson-pro, sans-serif !important; /* Bas-typsnitt */
  --shadow-sm: 0 3px 6px rgba(0,0,0,.1) !important;      /* Liten skugga */
  --shadow-md: 0 4px 12px rgba(0,0,0,.08) !important;    /* Medium skugga */
  --shadow-lg: 0 8px 20px rgba(0,0,0,.12) !important;    /* Stor skugga */
  --border-radius: 8px !important;         /* Rundade hörn */
  --clr-body-text: #036 !important;        /* Standardfärg för text */
  --clr-brand-100: #036 !important;        /* Ljusare blå för text */
  --clr-brand-500: #1f7ea4 !important;     /* Accentblå för hover, länkar */
  --ff-primary: filson-pro, sans-serif !important; /* Primärt typsnitt */
  --fs-text: 16px !important;              /* Grundstorlek text */
  --lh-text: 1.5 !important;               /* Radavstånd */
  --bs-gutter-x: 0.1rem !important;        /* Bootstrap gutter X */
  --bs-gutter-y: 0 !important;             /* Bootstrap gutter Y */
}

/* ------------------------------------------------------------
   2. HEADER: Grundstruktur och layout
   ------------------------------------------------------------
   Headern använder flexbox för att rada ut logotyp, navigation
   och menyer. Allt är responsivt och anpassat för både desktop
   och mobil.
   ------------------------------------------------------------ */

/* Header container (fluid, fullbredd) */
header.container-fluid {
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  width: 100% !important;
  --bs-gutter-x: 0 !important;
  --bs-gutter-y: 0 !important;
}

/* Själva headern: flex, kolumnlayout, stretchar innehåll */
.header {
  align-items: stretch !important;
  display: flex !important;
  flex-direction: column !important;
  height: auto !important;
}

/* Tar bort float om det finns */
.header.float-right,
.header.pull-right {
  float: none !important;
}

/* Om headern har position absolute, gör den relativ istället */
.header[class*=position-absolute] {
  position: relative !important;
}

/* Navigation wrapper: flex, kolumn, fullbredd */
.navigation {
  flex-direction: column !important;
  height: auto !important;
  margin: 0 auto !important;
  padding: 0 !important;
  display: flex !important;
  width: 100% !important;
}

/* Logotypen i headern: flex, vänsterställd, padding, storlek */
.navigation__logo {
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
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

/* Extra padding för logotyp om .logo--normal används */
body[class*=logo--normal] .navigation__logo {
  height: 60px !important;
  padding-top: 50px !important;
}

/* Logotypen centrerad vertikalt */
.navigation__logo.flex-start {
  align-items: center !important;
  display: flex !important;
}

/* Logotypbild: max/min-storlek, objektposition */
.navigation__logo img {
  display: block !important;
  max-height: 40px !important;
  max-width: 350px !important;
  min-width: 225px !important;
  object-fit: contain !important;
  object-position: left top !important;
  width: 50vw !important;
}

/* Vänster meny: flex, padding */
.navigation__left,
.navigation__left--menu {
  display: flex !important;
  padding-left: 50px !important;
  padding-right: 50px !important;
}

/* Menylistan: rad, ingen list-style, fullbredd */
.header-navigation-menu,
.navigation__left--menu {
  align-content: center !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  height: 60px !important;
  list-style: none !important;
  margin: 0 !important;
  order: -1 !important;
  padding: 0 !important;
  width: 100% !important;
}

/* Mega-meny länkar: vit text */
.mega-menu__wrapper a.link {
  color: #fff !important;
}

/* ------------------------------------------------------------
   3. FOOTER: Grundstruktur, bakgrund, text, länkar
   ------------------------------------------------------------
   Sidfoten har ljusblå bakgrund, mörkblå text, och tydliga
   rubriker. Länkar är understrukna och får accentfärg vid hover.
   ------------------------------------------------------------ */

/* Sidfotens huvudcontainer */
footer.footer {
  background-color: var(--bg-footer) !important; /* Ljusblå bakgrund */
  box-sizing: border-box;
  color: var(--blue-primary) !important;         /* Mörkblå text */
  font-family: var(--font-family-base) !important;
  padding: 24px 16px !important;
  width: 100%;
}

/* Sidfotens innercontainer (fluid) */
footer.footer .container-fluid {
  padding-bottom: 10px !important;
  padding-top: 10px !important;
}

/* Länkar i sidfoten: blå, understrukna, smidig övergång */
footer.footer a {
  color: var(--clr-body-text) !important;
  font-family: var(--ff-primary) !important;
  font-weight: 400 !important;
  text-decoration: underline !important;
  transition: all .2s ease !important;
}

/* Länkar i sidfoten: hover får accentblå och ingen underline */
footer.footer a:hover {
  color: var(--clr-brand-500) !important;
  text-decoration: none !important;
}

/* Länkar i p-taggar som INTE är tel/mail: mörkare blå */
footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]) {
  color: #044999 !important;
  font-size: inherit !important;
  font-weight: 400 !important;
  text-decoration: underline !important;
}
footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]):hover {
  text-decoration: none !important;
}

/* Tel/mail-länkar: ljusblå, underline, mörkare vid hover */
footer.footer a[href^="mailto:"],
footer.footer a[href^="tel:"] {
  color: #06c !important;
  font-size: inherit !important;
  text-decoration: underline !important;
}
footer.footer a[href^="mailto:"]:hover,
footer.footer a[href^="tel:"]:hover {
  color: #004c99 !important;
  text-decoration: none !important;
}

/* Sidfotens rader: ingen marginal */
footer.footer .row {
  margin: 0;
}

/* Första raden: negativ bottom-marginal för överlapp */
footer.footer .row.row1 {
  margin-bottom: -214px !important;
  padding: 0 !important;
  position: relative;
  z-index: 2;
}

/* Andra raden: extra top-marginal */
footer.footer .row2 {
  margin-top: 150px !important;
}

/* Rubriker i sidfoten: mörkblå, semibold, spacing */
footer.footer h4,
footer.footer h5 {
  color: var(--blue-primary) !important;
  font-family: var(--ff-primary) !important;
  line-height: 1.3 !important;
  margin-bottom: .5em !important;
  margin-top: 1em !important;
}
footer.footer h4 {
  font-size: 18px !important;
  font-weight: 600 !important;
  margin-top: 0 !important;
}
footer.footer h5 {
  font-size: 16px !important;
  font-weight: 500 !important;
}
/* Specialfall: rubrik med accentfärg */
footer.footer h4[style*="color:#1f7ea4"] {
  margin-top: 8px !important;
}

/* Brödtext i sidfoten: mörkblå, mindre, radavstånd */
footer.footer p {
  color: var(--blue-dark) !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
  margin-bottom: 10px !important;
  margin-top: 0 !important;
}
/* Sista p-taggen: ingen extra marginal */
footer.footer .textblock__body>p:last-of-type,
footer.footer p:last-child {
  margin-bottom: 0 !important;
}

/* Block med text: transparent bakgrund, spacing */
footer.footer .block.textblock {
  background-color: transparent !important;
  margin-bottom: 20px !important;
}
footer.footer .block.textblock:last-of-type {
  margin-bottom: 0 !important;
}
footer.footer .textblock__body {
  background-color: transparent !important;
}

/* Karta och logga: centrerad, spacing */
footer.footer .textblock__body>div[style*=width][style*=height][style*=border-radius] {
  margin: 10px auto !important;
}
footer.footer .textblock__body>div[style*=width][style*=height][style*=border-radius] iframe {
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
div[style*="text-align:center;margin:24px"] {
  margin: 0 !important;
}

/* ------------------------------------------------------------
   4. FOOTER: Länknavigering (snabblänkar)
   ------------------------------------------------------------
   Den blåa navigationsbaren längst ner med snabblänkar.
   ------------------------------------------------------------ */
nav.footer__link-nav {
  background-color: #1f7ea4 !important; /* Accentblå bakgrund */
  box-sizing: border-box;
  font-family: var(--ff-primary) !important;
  list-style: none !important;
  padding-bottom: 15px !important;
  padding-left: 0 !important;
  padding-top: 15px !important;
  width: 100% !important;
}

/* Länkarna i snabblänksmenyn: centrerade, ingen list-style */
nav.footer__link-nav ul#footer__links {
  justify-content: center !important;
  list-style: none !important;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  padding-left: 0 !important;
}
nav.footer__link-nav ul#footer__links>li.col {
  flex-basis: auto !important;
  flex-grow: 0 !important;
  padding-bottom: 5px !important;
  padding-top: 5px !important;
  text-align: center;
}

/* Länkar: vit text, ingen underline, underline vid hover */
nav.footer__link-nav a.footer__link {
  color: #fff !important;
  text-decoration: none !important;
}
nav.footer__link-nav a.footer__link:hover {
  text-decoration: underline !important;
}

/* Hamburger-menyknapp för mobil: vit ram, padding, ikon */
nav.footer__link-nav button#footer__links-toggle-button {
  background: transparent !important;
  border: 1px solid #fff !important;
  cursor: pointer !important;
  margin-bottom: 10px !important;
  margin-left: 15px;
  padding: 8px 10px !important;
}
nav.footer__link-nav button#footer__links-toggle-button .hamburger-menu__line {
  background-color: #fff !important;
  display: block !important;
  height: 2px !important;
  margin: 4px auto !important;
  width: 22px !important;
}

/* ------------------------------------------------------------
   5. RESPONSIVITET: Anpassningar för mobil och print
   ------------------------------------------------------------
   Gör så att snabblänkar och kartor fungerar på små skärmar.
   ------------------------------------------------------------ */
@media (max-width:991.98px) {
  nav.footer__link-nav ul#footer__links.open,
  nav.footer__link-nav ul#footer__links:target {
    align-items: center !important;
    flex-direction: column !important;
  }
  nav.footer__link-nav ul#footer__links.open>li.col,
  nav.footer__link-nav ul#footer__links:target>li.col {
    margin-bottom: 5px !important;
    width: 100% !important;
  }
  nav.footer__link-nav ul#footer__links.open>li.col:last-child,
  nav.footer__link-nav ul#footer__links:target>li.col:last-child {
    margin-bottom: 0 !important;
  }
}

/* Print: ta bort skuggor och färg på kartor */
@media print {
  .map-embed-container {
    background-color: #fff !important;
    border: 1px solid #bbb !important;
    box-shadow: none !important;
    page-break-inside: avoid;
  }
  .map-embed-container:after,
  .map-embed-container:before {
    display: none !important;
  }
}

/* ------------------------------------------------------------
   6. Ikoner och FontAwesome i header/footer
   ------------------------------------------------------------
   Stilar för ikoner i menyer och snabblänkar.
   ------------------------------------------------------------ */
.fa,
.fab,
.fad,
.fal,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-family: Font Awesome\ 5 Pro !important;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}
.footer__link .fa-external-link {
  font-size: .9em;
  margin-right: .5em;
}
.fa-chevron-down:before { content: "\f078"; }
.fa-chevron-up:before { content: "\f077"; }
.fa-external-link:before { content: "\f35d"; }

/* ------------------------------------------------------------
   7. Övrigt: Utility och småfixar för header/footer
   ------------------------------------------------------------ */
/* Säkra att .navigation__left alltid är flex även i äldre browsers */
.navigation__left, .navigation__left--menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: 50px !important;
  padding-right: 50px !important;
}

/* ------------------------------------------------------------
   SLUT PÅ HEADER & FOOTER CSS
   ------------------------------------------------------------
   Allt ovan är noggrant extraherat och kommenterat på svenska.
   Inga viktiga stilar för header eller footer har utelämnats!
   ------------------------------------------------------------ */


/* ============================================================
   KARTA (MAP) - ALLA STILAR FÖR INBÄDDADE KARTOR I SIDFOT/SIDHUVUD
   ============================================================
   Denna sektion innehåller ALL styling för .map-embed-container
   och relaterade element, inklusive responsivitet, laddnings-
   indikatorer och tillgänglighet. Kommentarerna är mycket
   utförliga och på svenska.
   ============================================================ */

/* ------------------------------------------------------------
   1. Grundläggande container för karta
   ------------------------------------------------------------
   .map-embed-container används för att wrappa inbäddade Google Maps
   eller liknande. Den har rundade hörn, skugga, maxbredd och
   responsiv aspect-ratio.
   ------------------------------------------------------------ */
.map-embed-container {
  /* --- Variabler för enkel tematisering och justering --- */
  --map-radius: 12px; /* Rundade hörn på kartan */
  --map-shadow: 0 4px 12px rgba(1, 35, 99, 0.1); /* Standard skugga */
  --map-hover-shadow: 0 7px 28px rgba(1, 35, 99, 0.18); /* Skugga vid hover */
  --map-focus-outline-color: #007bff; /* Blå outline vid keyboard-fokus */
  --map-focus-shadow: 0 0 0 3px hsla(0,0%,100%,.7), 0 0 0 5px var(--map-focus-outline-color), var(--map-hover-shadow);
  --map-max-width: 375px; /* Maxbredd på kartan */
  --map-aspect-ratio: 16/9; /* Standardförhållande (responsiv) */
  --map-vertical-margin: 16px; /* Marginal ovan/under */
  --map-border-width: 1px;
  --map-border-color: rgba(1, 35, 99, 0.15); /* Ljusblå ram */
  --map-loading-text-color: #333;
  --map-loading-bg-color: #f0f2f5; /* Ljusgrå bakgrund vid laddning */
  --map-spinner-color: var(--map-focus-outline-color);
  --map-transition-duration: 0.25s;

  /* --- Kärnstilar --- */
  position: relative; /* För pseudo-element och iframe-positionering */
  width: 100%; /* Full bredd av föräldern */
  max-width: var(--map-max-width);
  margin-top: var(--map-vertical-margin);
  margin-bottom: var(--map-vertical-margin);
  margin-left: 0;
  margin-right: auto;
  border-radius: var(--map-radius);
  overflow: hidden; /* Rundade hörn även på iframe */
  box-shadow: var(--map-shadow);
  border: var(--map-border-width) solid var(--map-border-color);
  aspect-ratio: var(--map-aspect-ratio);
  background-color: var(--map-loading-bg-color);
  transition: transform var(--map-transition-duration) ease,
              box-shadow var(--map-transition-duration) ease,
              border-color var(--map-transition-duration) ease;
}

/* ------------------------------------------------------------
   2. Interaktivitet: Hover och fokus
   ------------------------------------------------------------ */
.map-embed-container:hover {
  border-color: var(--map-spinner-color);
  box-shadow: var(--map-hover-shadow);
  transform: translateY(-4px);
}
.map-embed-container:focus-visible {
  border-color: var(--map-spinner-color);
  box-shadow: var(--map-focus-shadow);
  outline: none;
  transform: translateY(-4px);
}

/* ------------------------------------------------------------
   3. Själva kartan (iframe)
   ------------------------------------------------------------ */
.map-embed-frame {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 0;
  display: block;
  z-index: 1;
}

/* ------------------------------------------------------------
   4. Laddningsindikatorer (spinner och text)
   ------------------------------------------------------------
   Visas ovanpå kartan tills den är laddad (kräver ev. JS för att dölja).
   ------------------------------------------------------------ */
.map-embed-container:before {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  width: 36px; height: 36px;
  margin-top: -28px; /* Vertikal centrering */
  margin-left: -18px; /* Horisontell centrering */
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--map-spinner-color);
  border-radius: 50%;
  animation: map-spinner-rotation 0.8s linear infinite;
  z-index: 0;
}
.map-embed-container:after {
  content: "Laddar karta...";
  position: absolute;
  top: calc(50% + 10px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--map-loading-text-color);
  font-family: Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  z-index: 0;
}
/* Döljer laddningsindikatorer när kartan är laddad (kräver JS) */
.map-embed-container.is-loaded:after,
.map-embed-container.is-loaded:before {
  display: none;
}

/* ------------------------------------------------------------
   5. Keyframes för spinner-animation
   ------------------------------------------------------------ */
@keyframes map-spinner-rotation {
  0% { transform: rotate(0deg); }
  to { transform: rotate(1turn); }
}

/* ------------------------------------------------------------
   6. Responsivitet: Mobilanpassning
   ------------------------------------------------------------ */
@media (max-width: 576px) {
  .map-embed-container {
    --map-max-width: 100%;
    border-radius: 0;
    margin-bottom: 0;
    margin-top: 0;
    --map-border-width: 0px;
  }
  .map-embed-container:before { margin-top: -26px; }
  .map-embed-container:after {
    font-size: 12px;
    top: calc(50% + 8px);
  }
}

/* ------------------------------------------------------------
   7. Utskrift: Ta bort skuggor och färg på kartor vid print
   ------------------------------------------------------------ */
@media print {
  .map-embed-container {
    background-color: #fff !important;
    border: 1px solid #bbb !important;
    box-shadow: none !important;
    page-break-inside: avoid;
  }
  .map-embed-container:after,
  .map-embed-container:before {
    display: none !important;
  }
}

/* ============================================================
   SLUT PÅ KARTSTILAR
   ============================================================ */
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
  --sp-4: 0.2222rem;
  --sp-16: 0.8889rem;
  --chevron-size: 0.65rem;
  --chevron-thickness: 0.11rem;
  --summary-pad-inline: 0.875rem;
  --chevron-gap: 0.375rem;
  --container-max-width: 900px;
  --container-padding-inline: 1rem;
  --content-max-width: 720px;
  --clr-primary: #012363;
  --clr-primary-dark: #0B496E;
  --clr-heading: #012363;
  --clr-body: #003366;
  --clr-accent: #4AA6C9;
  --clr-background: #ffffff;
  --clr-bg-alt: #eef5ff;
  --clr-bg-card: #E0F3FA;
  --clr-border: #e1e7f0;
  --clr-table-header-bg: linear-gradient(150deg, #5a9fe0 0%, #518ece 50%, #477eba 100%);
  --clr-table-header-bg-alt: linear-gradient(to left, #b4bfff 40%, #cdd8ff 100%);
  --clr-white: #ffffff;
  --clr-black: #000000;
  --blue-primary: #012363;
  --blue-dark: #003366;
  --bg-service: #46b5ff;
  --bg-footer: #eff9ff;
  --text-white: #ffffff;
  --faq-heading-color: var(--clr-heading);
  --faq-text-color: var(--clr-body);
  --faq-bg-color: #f4f7fa;
  --faq-accent-color: var(--clr-heading);
  --faq-border-color: var(--clr-border);
  --font-family-base: 'filsonpro', sans-serif;
  --border-radius-sm: 0.3333rem;
  --border-radius-md: 0.4444rem;
  --border-radius-lg: 0.6667rem;
  --box-shadow-light: 0 0.1667rem 0.3333rem rgba(0, 0, 0, 0.08);
  --box-shadow-medium: 0 0.2222rem 0.6667rem rgba(0, 0, 0, 0.1);
  --shadow-sm: 0 0.1667rem 0.3333rem rgba(0, 0, 0, 0.1);
  --shadow-md: 0 0.2222rem 0.6667rem rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 0.4444rem 1.1111rem rgba(0, 0, 0, 0.12);
  --border-radius: 0.4444rem;

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
.visually-hidden {
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
.fade-in {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.6s, transform 0.6s;
}
.fade-in.visible {
  opacity: 1;
  transform: none;
}

/* =========================
   5. Main Content
   ========================= */
.vaccination-info {
  max-width: var(--content-max-width);
  margin-inline: auto;
  padding-inline: var(--container-padding-inline);
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
  margin-block: 1.5rem 0.5rem;
}
.vaccination-info .vaccine-heading {
  font-size: 1.43rem;
  font-weight: 600;
  color: var(--clr-heading);
  margin-block: 1.43rem 0.5rem;
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
.vaccine-bus-image {
  display: block;
  width: 40%;
  margin: 1rem auto 2rem auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}


/* =========================
   9. Price Table
   ========================= */
.price-box {
  max-width: 24rem;
  min-width: 24rem;
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding-inline);
}
.price-box .price-heading {
  font-size: 1.6rem;
  font-weight: 400 !important;
  color: #012363;
  margin-block: 2rem 1rem;
}
.price-toggle {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
}
.price-toggle-labels {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.price-toggle-label {
  flex: 1 1 0;
  min-width: 5.55rem;
  text-align: center;
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  background-color: #fff;
  color: #003366;
  border: 1px solid var(--clr-border, #e1e7f0);
  border-radius: var(--border-radius-sm, 6px);
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  user-select: none;
  font-weight: 400;
  text-align: left !important;
}
.price-toggle-label[for="v-ord"] { min-width: 5.8rem !important; }
.price-toggle-label[for="v-pen"] { min-width: 9.17rem !important; }
.price-toggle-label[for="v-stu"] { min-width: 7.9rem !important; }
.price-toggle-label:hover {
  border-color: var(--clr-accent);
  background-color: var(--clr-bg-alt);
}
.price-toggle-input:focus-visible ~ .price-toggle-labels label[for*="v-"] {
  outline: 0.111rem solid var(--clr-accent);
  outline-offset: 0.111rem;
  box-shadow: 0 0 0 0.1667rem var(--clr-accent);
}
.price-table {
  border-collapse: collapse;
  font-size: 1rem;
  border: 0.00556rem solid var(--clr-border);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  table-layout: fixed;
  min-width: 11.11rem;
  max-width: 22.11rem;
}



th.price-col.ord {
  white-space: normal;
  word-break: keep-all;
}
.price-table tbody tr:nth-child(odd) { background-color: var(--clr-white); }
.price-table tbody tr:nth-child(even) { background-color: var(--clr-bg-alt); }
.price-table td {
  color: #000 !important;
  border-bottom: 1px solid var(--clr-border);
}
.price-table tbody tr:last-child td {
  border-bottom: none;
}
.price-table td.price-val {
  text-align: left !important;
  white-space: nowrap;
}
.price-table .price-col.pen,
.price-table .price-col.stu,
.price-table .price-val.pen,
.price-table .price-val.stu {
  display: none;
}
.price-table .price-col.ord,
.price-table .price-val.ord {
  display: table-cell;
}
#v-pen:checked ~ .price-table .price-col.pen,
#v-pen:checked ~ .price-table .price-val.pen {
  display: table-cell;
}
#v-pen:checked ~ .price-table .price-col.ord,
#v-pen:checked ~ .price-table .price-val.ord,
#v-pen:checked ~ .price-table .price-col.stu,
#v-pen:checked ~ .price-table .price-val.stu {
  display: none;
}
#v-stu:checked ~ .price-table .price-col.stu,
#v-stu:checked ~ .price-table .price-val.stu {
  display: table-cell;
}
#v-stu:checked ~ .price-table .price-col.ord,
#v-stu:checked ~ .price-table .price-val.ord,
#v-stu:checked ~ .price-table .price-col.pen,
#v-stu:checked ~ .price-table .price-val.pen {
  display: none;
}

/* =========================
   10. Media Queries
   ========================= */
@media (max-width: 480px) {
  .price-table thead th,
  .price-table tbody td {
    padding: 0.4rem 0.3rem;
    font-size: 0.8em;
  }
}
@media (min-width: 768px) {
  .textblock.alignment--left,
  .textblock.alignment--left :not(ul):not(ol):not(li) {
    text-align: left !important;
  }
  .textblock__body p {
    font-size: 1rem;
  }
}
.col-md-8 {
  width: 60%;
}
@media (min-width: 64rem) {
  :root {
    --chevron-gap: 0.5rem;
  }
}

/* =========================
   11. Card & Image Hover dorian
   ========================= */





/* ==========================================================
   PTJ Prislista & UI Fix – Återställning & Förbättringar
   (2025-06-18)
   ----------------------------------------------------------
   Denna CSS återställer och förbättrar Prislista-komponenten,
   toggle-labels och rubriker så att de matchar "Buss - Dev Experimentation".
   Samtidigt behålls förbättrad typografi och tillgänglighet.
   Varje sektion har tydliga svenska kommentarer.
   ========================================================== */


/* =========================
   1. Grundläggande typografi & färger
   ========================= */
/* Basinställningar för text, färg och font för hela sidan */
html {
  font-size: 18px !important; /* 1rem = 18px för bättre läsbarhet */
}
body, p, li, td {
  font-family: 'filsonpro', sans-serif !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  line-height: 1.15 !important;
  color: #003366 !important; /* Standard kroppstextfärg */
  margin: 0 0 0.75rem 0 !important;
}
h1, h2, h3, h4, h5 {
  font-family: 'filsonpro', sans-serif !important;
  color: #012363 !important; /* Mörkblå rubriker */
  line-height: 1.2 !important;
  margin-block: 0.8rem 0.5rem !important;
}
h1 { font-size: 2.6667rem !important; font-weight: 900 !important; } /* 48px */
h2 { font-size: 2rem !important; font-weight: 800 !important; }      /* 36px */
h3 { font-size: 1.5556rem !important; font-weight: 700 !important; } /* 28px */
h4 { font-size: 1.3333rem !important; font-weight: 600 !important; } /* 24px */
h5 { font-size: 1.2222rem !important; font-weight: 600 !important; } /* 22px */

/* =========================
   2. Prislista-komponent (Price Box & Table)
   ========================= */
/* Prisboxen centrerad och med maxbredd */
.price-box {
  max-width: 24rem;
  min-width: 24rem;
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;
}

/* Prislista-rubrik – rätt storlek och vikt */
.price-box .price-heading,
h3.price-heading {
  font-size: 1.6rem !important;
  font-weight: 400 !important;
  color: #012363;
  margin-block: 2rem 1rem;
  letter-spacing: 0.5px;
}

/* =========================
   3. Toggle-knappar för prislista
   ========================= */
/* Flexbox för att rada ut radio-knappar och etiketter */
.price-toggle {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
}
.price-toggle-labels {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Toggle-etiketter – grundstil */
.price-toggle-label {
  flex: 1 1 0;
  min-width: 5.55rem;
  text-align: center;
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  background-color: #fff;
  color: #003366;
  border: 1px solid #e1e7f0;
  border-radius: 0.3333rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  user-select: none;
  font-weight: 400;
  text-align: left !important;
}

/* Specifika min-bredder för varje etikett */
.price-toggle-label[for="v-ord"] { min-width: 5.8rem !important; }
.price-toggle-label[for="v-pen"] { min-width: 9.17rem !important; }
.price-toggle-label[for="v-stu"] { min-width: 7.9rem !important; }

/* Hover-effekt på etiketter */
.price-toggle-label:hover {
  border-color: #4AA6C9;
  background-color: #eef5ff;
}

/* Aktiv (checked) etikett – tydlig blå bakgrund och vit text */
.price-toggle-input#v-ord:checked ~ .price-toggle-labels label[for="v-ord"],
.price-toggle-input#v-pen:checked ~ .price-toggle-labels label[for="v-pen"],
.price-toggle-input#v-stu:checked ~ .price-toggle-labels label[for="v-stu"] {
  background-color: #012363;
  color: #fff;
  border-color: #012363;
  font-weight: 600;
}

/* =========================
   4. Prislista-tabell (Price Table)
   ========================= */
/* Tabellens layout och färger */
.price-table {
  table-layout: fixed !important;
  border-collapse: collapse !important;
  font-variant-numeric: tabular-nums !important;
  border: 1px solid #e1e7f0 !important;
  border-radius: 0.4444rem;
  overflow: hidden;
}



/* Tabellceller – svart text, vänsterjusterat */
.price-table td {
  color: #000 !important;
  font-size: 0.8rem !important;
  font-weight: 400 !important;
  letter-spacing: 0.5px !important;
  margin-block: 0.6rem 0.375rem !important;
  text-align: left !important;
  padding: 0.4rem 0.5rem !important;
  border-bottom: 1px solid #e1e7f0 !important;
}

/* Zebra-ränder för bättre läsbarhet */
.price-table tbody tr:nth-child(even) { background: #eef5ff !important; }
.price-table tbody tr:last-child td { border-bottom: none !important; }


/* Visa/dölj kolumner beroende på valt prisalternativ */
.price-table .price-col.pen,
.price-table .price-col.stu,
.price-table .price-val.pen,
.price-table .price-val.stu { display: none !important; }
.price-table .price-col.ord,
.price-table .price-val.ord { display: table-cell !important; }
#v-pen:checked ~ .price-table .price-col.pen,
#v-pen:checked ~ .price-table .price-val.pen { display: table-cell !important; }
#v-pen:checked ~ .price-table .price-col.ord,
#v-pen:checked ~ .price-table .price-val.ord,
#v-pen:checked ~ .price-table .price-col.stu,
#v-pen:checked ~ .price-table .price-val.stu { display: none !important; }
#v-stu:checked ~ .price-table .price-col.stu,
#v-stu:checked ~ .price-table .price-val.stu { display: table-cell !important; }
#v-stu:checked ~ .price-table .price-col.ord,
#v-stu:checked ~ .price-table .price-val.ord,
#v-stu:checked ~ .price-table .price-col.pen,
#v-stu:checked ~ .price-table .price-val.pen { display: none !important; }

/* =========================
   5. Responsivitet (mobilanpassning)
   ========================= */
/* Mindre padding och textstorlek på små skärmar */
@media (max-width: 480px) {
  .price-table thead th,
  .price-table tbody td {
    padding: 0.4rem 0.3rem !important;
    font-size: 0.9em !important;
  }
}

/* =========================
   6. Extra: Återställ CMS-injekterade marginaler
   ========================= */
/* Nollställ negativa marginaler som CMS ibland lägger till */
section.price-box.sidebar-content * {
  margin-block-start: 0 !important;
}

/* =========================
   7. Tillgänglighet & småfixar
   ========================= */
/* Visuellt dölja element men behålla för skärmläsare */
.visually-hidden {
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
   8. Slut på CSS
   ========================= */

/* ============================================================
   HEADER & FOOTER STYLES - Praktikertjänst Vaccincenter
   ============================================================
   Denna CSS innehåller ALLA stilar för sidhuvud (header) och sidfot (footer)
   från din kodbas. Kommentarerna är mycket utförliga och på svenska för att
   förklara varje sektion, klass och egenskap. Inget relevant har utelämnats!
   ============================================================ */


/* ------------------------------------------------------------
   1. CSS-variabler för färger, typsnitt och layout
   ------------------------------------------------------------
   Dessa variabler används överallt i header och footer för att
   säkerställa enhetlig färgsättning, typografi och spacing.
   ------------------------------------------------------------ */
:root {
  --blue-primary: #012363 !important;      /* Primär blå för rubriker, länkar, ikoner */
  --blue-dark: #036 !important;            /* Mörkare blå för brödtext */
  --bg-service: #46b5ff !important;        /* Accentblå för tjänster */
  --bg-footer: #eff9ff !important;         /* Ljusblå bakgrund för sidfot */
  --text-white: #fff !important;           /* Vit text, t.ex. på blå bakgrund */
  --font-family-base: filson-pro, sans-serif !important; /* Bas-typsnitt */
  --shadow-sm: 0 3px 6px rgba(0,0,0,.1) !important;      /* Liten skugga */
  --shadow-md: 0 4px 12px rgba(0,0,0,.08) !important;    /* Medium skugga */
  --shadow-lg: 0 8px 20px rgba(0,0,0,.12) !important;    /* Stor skugga */
  --border-radius: 8px !important;         /* Rundade hörn */
  --clr-body-text: #036 !important;        /* Standardfärg för text */
  --clr-brand-100: #036 !important;        /* Ljusare blå för text */
  --clr-brand-500: #1f7ea4 !important;     /* Accentblå för hover, länkar */
  --ff-primary: filson-pro, sans-serif !important; /* Primärt typsnitt */
  --fs-text: 16px !important;              /* Grundstorlek text */
  --lh-text: 1.5 !important;               /* Radavstånd */
  --bs-gutter-x: 0.1rem !important;        /* Bootstrap gutter X */
  --bs-gutter-y: 0 !important;             /* Bootstrap gutter Y */
}

/* ------------------------------------------------------------
   2. HEADER: Grundstruktur och layout
   ------------------------------------------------------------
   Headern använder flexbox för att rada ut logotyp, navigation
   och menyer. Allt är responsivt och anpassat för både desktop
   och mobil.
   ------------------------------------------------------------ */

/* Header container (fluid, fullbredd) */
header.container-fluid {
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  width: 100% !important;
  --bs-gutter-x: 0 !important;
  --bs-gutter-y: 0 !important;
}

/* Själva headern: flex, kolumnlayout, stretchar innehåll */
.header {
  align-items: stretch !important;
  display: flex !important;
  flex-direction: column !important;
  height: !important;
}

/* Tar bort float om det finns */
.header.float-right,
.header.pull-right {
  float: none !important;
}

/* Om headern har position absolute, gör den relativ istället */
.header[class*=position-absolute] {
  position: relative !important;
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

/* Logotypen i headern: flex, vänsterställd, padding, storlek */
.navigation__logo {
  -webkit-backdrop-filter: blur(10px) !important;
  backdrop-filter: blur(10px) !important;
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

/* Extra padding för logotyp om .logo--normal används */
body[class*=logo--normal] .navigation__logo {
  height: 60px !important;
  padding-top: 50px !important;
}

/* Logotypen centrerad vertikalt */
.navigation__logo.flex-start {
  align-items: center !important;
  display: flex !important;
}

/* Logotypbild: max/min-storlek, objektposition */
.navigation__logo img {
  display: block !important;
  max-height: 40px !important;
  max-width: 350px !important;
  min-width: 225px !important;
  object-fit: contain !important;
  object-position: left top !important;
  width: 50vw !important;
}

/* Vänster meny: flex, padding */
.navigation__left,
.navigation__left--menu {
  display: flex !important;
  padding-left: 50px !important;
  padding-right: 50px !important;
}

/* Menylistan: rad, ingen list-style, fullbredd */
.header-navigation-menu,
.navigation__left--menu {
  align-content: center !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  height: 135px !important;
  list-style: none !important;
  margin: 0 !important;
  order: -1 !important;
  padding: 0 !important;
  width: 100% !important;
}

/* Mega-meny länkar: vit text */
.mega-menu__wrapper a.link {
  color: #fff !important;
}

/* ------------------------------------------------------------
   3. FOOTER: Grundstruktur, bakgrund, text, länkar
   ------------------------------------------------------------
   Sidfoten har ljusblå bakgrund, mörkblå text, och tydliga
   rubriker. Länkar är understrukna och får accentfärg vid hover.
   ------------------------------------------------------------ */

/* Sidfotens huvudcontainer */
footer.footer {
  background-color: var(--bg-footer) !important; /* Ljusblå bakgrund */
  box-sizing: border-box;
  color: var(--blue-primary) !important;         /* Mörkblå text */
  font-family: var(--font-family-base) !important;
  padding: 24px 16px !important;
  width: 100%;
}

/* Sidfotens innercontainer (fluid) */
footer.footer .container-fluid {
  padding-bottom: 10px !important;
  padding-top: 10px !important;
}

/* Länkar i sidfoten: blå, understrukna, smidig övergång */
footer.footer a {
  color: var(--clr-body-text) !important;
  font-family: var(--ff-primary) !important;
  font-weight: 400 !important;
  text-decoration: underline !important;
  transition: all .2s ease !important;
}

/* Länkar i sidfoten: hover får accentblå och ingen underline */
footer.footer a:hover {
  color: var(--clr-brand-500) !important;
  text-decoration: none !important;
}

/* Länkar i p-taggar som INTE är tel/mail: mörkare blå */
footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]) {
  color: #044999 !important;
  font-size: inherit !important;
  font-weight: 400 !important;
  text-decoration: underline !important;
}
footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]):hover {
  text-decoration: none !important;
}

/* Tel/mail-länkar: ljusblå, underline, mörkare vid hover */
footer.footer a[href^="mailto:"],
footer.footer a[href^="tel:"] {
  color: #06c !important;
  font-size: inherit !important;
  text-decoration: underline !important;
}
footer.footer a[href^="mailto:"]:hover,
footer.footer a[href^="tel:"]:hover {
  color: #004c99 !important;
  text-decoration: none !important;
}

/* Sidfotens rader: ingen marginal */
footer.footer .row {
  margin: 0;
}

/* Första raden: negativ bottom-marginal för överlapp */
footer.footer .row.row1 {
  margin-bottom: -214px !important;
  padding: 0 !important;
  position: relative;
  z-index: 2;
}

/* Andra raden: extra top-marginal */
footer.footer .row2 {
  margin-top: 150px !important;
}

/* Rubriker i sidfoten: mörkblå, semibold, spacing */
footer.footer h4,
footer.footer h5 {
  color: var(--blue-primary) !important;
  font-family: var(--ff-primary) !important;
  line-height: 1.3 !important;
  margin-bottom: .5em !important;
  margin-top: 1em !important;
}
footer.footer h4 {
  font-size: 18px !important;
  font-weight: 600 !important;
  margin-top: 0 !important;
}
footer.footer h5 {
  font-size: 16px !important;
  font-weight: 500 !important;
}
/* Specialfall: rubrik med accentfärg */
footer.footer h4[style*="color:#1f7ea4"] {
  margin-top: 8px !important;
}

/* Brödtext i sidfoten: mörkblå, mindre, radavstånd */
footer.footer p {
  color: var(--blue-dark) !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
  margin-bottom: 10px !important;
  margin-top: 0 !important;
}
/* Sista p-taggen: ingen extra marginal */
footer.footer .textblock__body>p:last-of-type,
footer.footer p:last-child {
  margin-bottom: 0 !important;
}

/* Block med text: transparent bakgrund, spacing */
footer.footer .block.textblock {
  background-color: transparent !important;
  margin-bottom: 20px !important;
}
footer.footer .block.textblock:last-of-type {
  margin-bottom: 0 !important;
}
footer.footer .textblock__body {
  background-color: transparent !important;
}

/* Karta och logga: centrerad, spacing */
footer.footer .textblock__body>div[style*=width][style*=height][style*=border-radius] {
  margin: 10px auto !important;
}
footer.footer .textblock__body>div[style*=width][style*=height][style*=border-radius] iframe {
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
}
div[style*="text-align:center;margin:24px"] {
  margin: 0 !important;
}

/* ------------------------------------------------------------
   4. FOOTER: Länknavigering (snabblänkar)
   ------------------------------------------------------------
   Den blåa navigationsbaren längst ner med snabblänkar.
   ------------------------------------------------------------ */
nav.footer__link-nav {
  background-color: #1f7ea4 !important; /* Accentblå bakgrund */
  box-sizing: border-box;
  font-family: var(--ff-primary) !important;
  list-style: none !important;
  padding-bottom: 15px !important;
  padding-left: 0 !important;
  padding-top: 15px !important;
  width: 100% !important;
}

/* Länkarna i snabblänksmenyn: centrerade, ingen list-style */
nav.footer__link-nav ul#footer__links {
  justify-content: center !important;
  list-style: none !important;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  padding-left: 0 !important;
}
nav.footer__link-nav ul#footer__links>li.col {
  flex-basis: auto !important;
  flex-grow: 0 !important;
  padding-bottom: 5px !important;
  padding-top: 5px !important;
  text-align: center;
}

/* Länkar: vit text, ingen underline, underline vid hover */
nav.footer__link-nav a.footer__link {
  color: #fff !important;
  text-decoration: none !important;
}
nav.footer__link-nav a.footer__link:hover {
  text-decoration: underline !important;
}

/* Hamburger-menyknapp för mobil: vit ram, padding, ikon */
nav.footer__link-nav button#footer__links-toggle-button {
  background: transparent !important;
  border: 1px solid #fff !important;
  cursor: pointer !important;
  margin-bottom: 10px !important;
  margin-left: 15px;
  padding: 8px 10px !important;
}
nav.footer__link-nav button#footer__links-toggle-button .hamburger-menu__line {
  background-color: #fff !important;
  display: block !important;
  height: 2px !important;
  margin: 4px auto !important;
  width: 22px !important;
}

/* ------------------------------------------------------------
   5. RESPONSIVITET: Anpassningar för mobil och print
   ------------------------------------------------------------
   Gör så att snabblänkar och kartor fungerar på små skärmar.
   ------------------------------------------------------------ */
@media (max-width:991.98px) {
  nav.footer__link-nav ul#footer__links.open,
  nav.footer__link-nav ul#footer__links:target {
    align-items: center !important;
    flex-direction: column !important;
  }
  nav.footer__link-nav ul#footer__links.open>li.col,
  nav.footer__link-nav ul#footer__links:target>li.col {
    margin-bottom: 5px !important;
    width: 100% !important;
  }
  nav.footer__link-nav ul#footer__links.open>li.col:last-child,
  nav.footer__link-nav ul#footer__links:target>li.col:last-child {
    margin-bottom: 0 !important;
  }
}

/* Print: ta bort skuggor och färg på kartor */
@media print {
  .map-embed-container {
    background-color: #fff !important;
    border: 1px solid #bbb !important;
    box-shadow: none !important;
    page-break-inside: avoid;
  }
  .map-embed-container:after,
  .map-embed-container:before {
    display: none !important;
  }
}

/* ------------------------------------------------------------
   6. Ikoner och FontAwesome i header/footer
   ------------------------------------------------------------
   Stilar för ikoner i menyer och snabblänkar.
   ------------------------------------------------------------ */
.fa,
.fab,
.fad,
.fal,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-family: Font Awesome\ 5 Pro !important;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}
.footer__link .fa-external-link {
  font-size: .9em;
  margin-right: .5em;
}
.fa-chevron-down:before { content: "\f078"; }
.fa-chevron-up:before { content: "\f077"; }
.fa-external-link:before { content: "\f35d"; }

/* ------------------------------------------------------------
   7. Övrigt: Utility och småfixar för header/footer
   ------------------------------------------------------------ */
/* Säkra att .navigation__left alltid är flex även i äldre browsers */
.navigation__left, .navigation__left--menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: 50px !important;
  padding-right: 50px !important;
}

/* ------------------------------------------------------------
   SLUT PÅ HEADER & FOOTER CSS
   ------------------------------------------------------------
   Allt ovan är noggrant extraherat och kommenterat på svenska.
   Inga viktiga stilar för header eller footer har utelämnats!
   ------------------------------------------------------------ */


/* ============================================================
   KARTA (MAP) - ALLA STILAR FÖR INBÄDDADE KARTOR I SIDFOT/SIDHUVUD
   ============================================================
   Denna sektion innehåller ALL styling för .map-embed-container
   och relaterade element, inklusive responsivitet, laddnings-
   indikatorer och tillgänglighet. Kommentarerna är mycket
   utförliga och på svenska.
   ============================================================ */

/* ------------------------------------------------------------
   1. Grundläggande container för karta
   ------------------------------------------------------------
   .map-embed-container används för att wrappa inbäddade Google Maps
   eller liknande. Den har rundade hörn, skugga, maxbredd och
   responsiv aspect-ratio.
   ------------------------------------------------------------ */
.map-embed-container {
  /* --- Variabler för enkel tematisering och justering --- */
  --map-radius: 12px; /* Rundade hörn på kartan */
  --map-shadow: 0 4px 12px rgba(1, 35, 99, 0.1); /* Standard skugga */
  --map-hover-shadow: 0 7px 28px rgba(1, 35, 99, 0.18); /* Skugga vid hover */
  --map-focus-outline-color: #007bff; /* Blå outline vid keyboard-fokus */
  --map-focus-shadow: 0 0 0 3px hsla(0,0%,100%,.7), 0 0 0 5px var(--map-focus-outline-color), var(--map-hover-shadow);
  --map-max-width: 375px; /* Maxbredd på kartan */
  --map-aspect-ratio: 16/9; /* Standardförhållande (responsiv) */
  --map-vertical-margin: 16px; /* Marginal ovan/under */
  --map-border-width: 1px;
  --map-border-color: rgba(1, 35, 99, 0.15); /* Ljusblå ram */
  --map-loading-text-color: #333;
  --map-loading-bg-color: #f0f2f5; /* Ljusgrå bakgrund vid laddning */
  --map-spinner-color: var(--map-focus-outline-color);
  --map-transition-duration: 0.25s;

  /* --- Kärnstilar --- */
  position: relative; /* För pseudo-element och iframe-positionering */
  width: 100%; /* Full bredd av föräldern */
  max-width: var(--map-max-width);
  margin-top: var(--map-vertical-margin);
  margin-bottom: var(--map-vertical-margin);
  margin-left: 0;
  margin-right: auto;
  border-radius: var(--map-radius);
  overflow: hidden; /* Rundade hörn även på iframe */
  box-shadow: var(--map-shadow);
  border: var(--map-border-width) solid var(--map-border-color);
  aspect-ratio: var(--map-aspect-ratio);
  background-color: var(--map-loading-bg-color);
  transition: transform var(--map-transition-duration) ease,
              box-shadow var(--map-transition-duration) ease,
              border-color var(--map-transition-duration) ease;
}

/* ------------------------------------------------------------
   2. Interaktivitet: Hover och fokus
   ------------------------------------------------------------ */
.map-embed-container:hover {
  border-color: var(--map-spinner-color);
  box-shadow: var(--map-hover-shadow);
  transform: translateY(-4px);
}
.map-embed-container:focus-visible {
  border-color: var(--map-spinner-color);
  box-shadow: var(--map-focus-shadow);
  outline: none;
  transform: translateY(-4px);
}

/* ------------------------------------------------------------
   3. Själva kartan (iframe)
   ------------------------------------------------------------ */
.map-embed-frame {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 0;
  display: block;
  z-index: 1;
}

/* ------------------------------------------------------------
   4. Laddningsindikatorer (spinner och text)
   ------------------------------------------------------------
   Visas ovanpå kartan tills den är laddad (kräver ev. JS för att dölja).
   ------------------------------------------------------------ */
.map-embed-container:before {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  width: 36px; height: 36px;
  margin-top: -28px; /* Vertikal centrering */
  margin-left: -18px; /* Horisontell centrering */
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--map-spinner-color);
  border-radius: 50%;
  animation: map-spinner-rotation 0.8s linear infinite;
  z-index: 0;
}
.map-embed-container:after {
  content: "Laddar karta...";
  position: absolute;
  top: calc(50% + 10px);
  left: 50%;
  transform: translateX(-50%);
  color: var(--map-loading-text-color);
  font-family: Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  font-size: 13px;
  z-index: 0;
}
/* Döljer laddningsindikatorer när kartan är laddad (kräver JS) */
.map-embed-container.is-loaded:after,
.map-embed-container.is-loaded:before {
  display: none;
}

/* ------------------------------------------------------------
   5. Keyframes för spinner-animation
   ------------------------------------------------------------ */
@keyframes map-spinner-rotation {
  0% { transform: rotate(0deg); }
  to { transform: rotate(1turn); }
}

/* ------------------------------------------------------------
   6. Responsivitet: Mobilanpassning
   ------------------------------------------------------------ */
@media (max-width: 576px) {
  .map-embed-container {
    --map-max-width: 100%;
    border-radius: 0;
    margin-bottom: 0;
    margin-top: 0;
    --map-border-width: 0px;
  }
  .map-embed-container:before { margin-top: -26px; }
  .map-embed-container:after {
    font-size: 12px;
    top: calc(50% + 8px);
  }
}

/* ------------------------------------------------------------
   7. Utskrift: Ta bort skuggor och färg på kartor vid print
   ------------------------------------------------------------ */
@media print {
  .map-embed-container {
    background-color: #fff !important;
    border: 1px solid #bbb !important;
    box-shadow: none !important;
    page-break-inside: avoid;
  }
  .map-embed-container:after,
  .map-embed-container:before {
    display: none !important;
  }
}

/* ============================================================
   SLUT PÅ KARTSTILAR
   ============================================================ */
.card-body {
  padding: 0 !important;
}
.bus-title {
  font-size: 1rem;
  margin: 0;
}
.text-start { text-align: left !important; }
.text-center { text-align: center !important; }
.text-end { text-align: right !important; }


/* ==========================================================
   PTJ Prislista & UI Fix – Återställning & Förbättringar
   (2025-06-18)
   ----------------------------------------------------------
   Denna CSS återställer och förbättrar Prislista-komponenten,
   toggle-labels och rubriker så att de matchar "Buss - Dev Experimentation".
   Samtidigt behålls förbättrad typografi och tillgänglighet.
   Varje sektion har tydliga svenska kommentarer.
   ========================================================== */


/* =========================
   1. Grundläggande typografi & färger
   ========================= */
/* Basinställningar för text, färg och font för hela sidan */
html {
  font-size: 18px !important; /* 1rem = 18px för bättre läsbarhet */
}
body, p, li, td {
  font-family: 'filsonpro', sans-serif !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  line-height: 1.55 !important;
  color: #003366 !important; /* Standard kroppstextfärg */
  margin: 0 0 0.75rem 0 !important;
}
h1, h2, h3, h4, h5 {
  font-family: 'filsonpro', sans-serif !important;
  color: #012363 !important; /* Mörkblå rubriker */
  line-height: 1.2 !important;
  margin-block: 0.8rem 0.5rem !important;
}
h1 { font-size: 2.6667rem !important; font-weight: 900 !important; } /* 48px */
h2 { font-size: 2rem !important; font-weight: 800 !important; }      /* 36px */
h3 { font-size: 1.5556rem !important; font-weight: 700 !important; } /* 28px */
h4 { font-size: 1.3333rem !important; font-weight: 600 !important; } /* 24px */
h5 { font-size: 1.2222rem !important; font-weight: 600 !important; } /* 22px */

/* =========================
   2. Prislista-komponent (Price Box & Table)
   ========================= */
/* Prisboxen centrerad och med maxbredd */
.price-box {
  max-width: 24rem;
  min-width: 24rem;
  width: 100%;
  margin-inline: auto;
  padding-inline: 1rem;
}

/* Prislista-rubrik – rätt storlek och vikt */
.price-box .price-heading,
h3.price-heading {
  font-size: 1.6rem !important;
  font-weight: 400 !important;
  color: #012363;
  margin-block: 2rem 1rem;
  letter-spacing: 0.5px;
}

/* =========================
   3. Toggle-knappar för prislista
   ========================= */
/* Flexbox för att rada ut radio-knappar och etiketter */
.price-toggle {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
}
.price-toggle-labels {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

/* Toggle-etiketter – grundstil */
.price-toggle-label {
  flex: 1 1 0;
  min-width: 5.55rem;
  text-align: center;
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  background-color: #fff;
  color: #003366;
  border: 1px solid #e1e7f0;
  border-radius: 0.3333rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  cursor: pointer;
  user-select: none;
  font-weight: 400;
  text-align: left !important;
}

/* Specifika min-bredder för varje etikett */
.price-toggle-label[for="v-ord"] { min-width: 5.8rem !important; }
.price-toggle-label[for="v-pen"] { min-width: 9.17rem !important; }
.price-toggle-label[for="v-stu"] { min-width: 7.9rem !important; }

/* Hover-effekt på etiketter */
.price-toggle-label:hover {
  border-color: #4AA6C9;
  background-color: #eef5ff;
}

/* Aktiv (checked) etikett – tydlig blå bakgrund och vit text */
.price-toggle-input#v-ord:checked ~ .price-toggle-labels label[for="v-ord"],
.price-toggle-input#v-pen:checked ~ .price-toggle-labels label[for="v-pen"],
.price-toggle-input#v-stu:checked ~ .price-toggle-labels label[for="v-stu"] {
  background-color: #012363;
  color: #fff;
  border-color: #012363;
  font-weight: 600;
}

/* =========================
   4. Prislista-tabell (Price Table)
   ========================= */
/* Tabellhuvud – blå gradient och vänsterjusterad text */
.price-table thead th, .location-schedule th {
  background: linear-gradient(150deg, #5a9fe0 0%, #518ece 50%, #477eba 100%) !important;
  color: #012363 !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
  text-align: left !important;
  padding: 0.5rem 0.5rem !important;
}

/* Tabellceller – svart text, vänsterjusterat */
.price-table td, .location-schedule td {
  color: #000 !important;
  font-size: 0.8rem !important;
  font-weight: 400 !important;
  letter-spacing: 0.5px !important;
  margin-block: 0.4rem 0.375rem !important;
  text-align: left !important;
  padding: 0.4rem 0.5rem !important;
  border-bottom: 1px solid #e1e7f0 !important;
}

/* Zebra-ränder för bättre läsbarhet */
.price-table tbody tr:nth-child(even) { background: #eef5ff !important; }
.price-table tbody tr:last-child td { border-bottom: none !important; }


/* Visa/dölj kolumner beroende på valt prisalternativ */
.price-table .price-col.pen,
.price-table .price-col.stu,
.price-table .price-val.pen,
.price-table .price-val.stu { display: none !important; }
.price-table .price-col.ord,
.price-table .price-val.ord { display: table-cell !important; }
#v-pen:checked ~ .price-table .price-col.pen,
#v-pen:checked ~ .price-table .price-val.pen { display: table-cell !important; }
#v-pen:checked ~ .price-table .price-col.ord,
#v-pen:checked ~ .price-table .price-val.ord,
#v-pen:checked ~ .price-table .price-col.stu,
#v-pen:checked ~ .price-table .price-val.stu { display: none !important; }
#v-stu:checked ~ .price-table .price-col.stu,
#v-stu:checked ~ .price-table .price-val.stu { display: table-cell !important; }
#v-stu:checked ~ .price-table .price-col.ord,
#v-stu:checked ~ .price-table .price-val.ord,
#v-stu:checked ~ .price-table .price-col.pen,
#v-stu:checked ~ .price-table .price-val.pen { display: none !important; }

/* =========================
   5. Responsivitet (mobilanpassning)
   ========================= */
/* Mindre padding och textstorlek på små skärmar */
@media (max-width: 480px) {
  .price-table thead th,
  .price-table tbody td {
    padding: 0.4rem 0.3rem !important;
    font-size: 0.8em !important;
  }
}

/* =========================
   6. Extra: Återställ CMS-injekterade marginaler
   ========================= */
/* Nollställ negativa marginaler som CMS ibland lägger till */
section.price-box.sidebar-content * {
  margin-block-start: 0 !important;
}

/* =========================
   7. Tillgänglighet & småfixar
   ========================= */
/* Visuellt dölja element men behålla för skärmläsare */
.visually-hidden {
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
   8. Slut på CSS
   ========================= */
/* Denna CSS ska ligga sist i stacken för att säkerställa att den överstyr
   eventuella CMS-standarder och gamla regler. */


.vaccination-info {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem 1rem;
}

.section-title {
    font-size: 2rem;
    font-weight: 500;plac
    color: var(--clr-heading);
    text-align: center;
    margin-bottom: 2rem;
}


        /* Image Wrapper with Modern Effects */
        .img-wrapper {
            position: relative;
max-width: 9rem;
min-width: 2rem;
            overflow: hidden;
            border-radius: var(--border-radius-lg);
            background: #f0f9ff;
            box-shadow:
                0 4px 20px rgba(0, 0, 0, 0.08),
                0 8px 32px rgba(74, 166, 201, 0.15),
                0 0 20px 5px rgba(74, 166, 201, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform: translateZ(0); /* Enable hardware acceleration */
            -webkit-transform: translateZ(0);
        }

        .img-wrapper::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, transparent, var(--clr-accent), transparent);
            border-radius: var(--border-radius-lg);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }

        /* Hover Effects */
        .img-wrapper:hover {
            transform: translateY(-8px) scale(1.02);
            -webkit-transform: translateY(-8px) scale(1.02);
            box-shadow:
                0 8px 32px rgba(0, 0, 0, 0.12),
                0 16px 48px rgba(74, 166, 201, 0.25),
                0 0 40px 15px rgba(74, 166, 201, 0.3);
        }

.img-wrapper:hover::before {
    opacity: 0.3;
}

/* Images */
.bus-img {
    width: 100%;
max-width: 9rem !important;
min-width: 2rem !important;
    height: auto;
    display: block;
    object-fit: cover;
    aspect-ratio: 4/3;
}

/* Fixed Fade-in Animation - starts visible */
.fade-in {
    opacity: 1; /* Changed from 0 to 1 */
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

.bus-gallery-col:nth-child(1) .fade-in { animation-delay: 0.1s; }
.bus-gallery-col:nth-child(2) .fade-in { animation-delay: 0.2s; }
.bus-gallery-col:nth-child(3) .fade-in { animation-delay: 0.3s; }

/* Browser Compatibility */
@supports not (inset: 0) {
    .img-wrapper::before {
        top: -2px;
        right: -2px;
        bottom: -2px;
        left: -2px;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .bus-gallery-row {
        gap: 1.5rem;
    }

    .bus-gallery-col {
        flex: 1 1 100%;
        max-width: 100%;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .img-wrapper,
    .fade-in {
        transition: none;
        animation: none;
    }

    .fade-in {
        opacity: 1;
    }

    .img-wrapper:hover {
        transform: none;
        -webkit-transform: none;
    }
}

/* =============================================================
   FOOTER STYLES - Praktikertjänst Vaccincenter
   Version: 2.0 (Properly Organised Edition)

   Table of Contents:
   1. CSS Variables & Global Footer Settings
   2. Structural Layout & Spacing
   3. Typography & Text Elements
   4. Links & Interactive Elements
   5. Component-Specific Styles
      5.1 Text Blocks
      5.2 Maps & iFrames
      5.3 Logo Container
   6. Navigation Bar (footer__link-nav)
   7. Responsive Breakpoints
   8. Utility Overrides
   ============================================================= */

/* =============================================================
   1. CSS VARIABLES & GLOBAL FOOTER SETTINGS
   ============================================================= */
footer.footer {
    font-family: filsonpro, sans-serif !important;
    background-color: #eff9ff !important;
    color: #012363 !important;
    padding: 24px 16px !important;
    width: 100%;
    box-sizing: border-box;
}

/* =============================================================
   2. STRUCTURAL LAYOUT & SPACING
   ============================================================= */
/* Container fluid adjustments */
.footer .container-fluid {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
}

/* Row spacing normalisation */
.row.row1 {
    position: relative;
    z-index: 2;
    margin-bottom: -214px !important;
    padding: 0 !important;
}

/* Remove all default row margins */
div.row.row6,
div.row.row5,
div.row.row4,
div.row.row3,
div.row.row2,
div.row.row1 {
    margin-top: 0 !important;
}

/* Global margin resets for structural elements */
.footer .block-container,
.footer .textblock,
.footer .row {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    margin: 0;
    /* Belt and braces approach */
}

/* =============================================================
   3. TYPOGRAPHY & TEXT ELEMENTS
   ============================================================= */
/* Heading styles */
footer.footer h4,
footer.footer h5 {
    font-family: filsonpro, sans-serif !important;
    color: #012363 !important;
    margin-top: 1em !important;
    margin-bottom: 0.5em !important;
    line-height: 1.3 !important;
}

footer.footer h4 {
    font-size: 18px !important;
    /* Note: Original had "18" without px */
    font-weight: 600 !important;
    /* Adjusted from 550 */
    margin-top: 0 !important;
}

footer.footer h5 {
    font-size: 16px !important;
    /* Note: Original had "16" without px */
    font-weight: 500 !important;
}

/* Special case for styled h4 elements */
.footer h4[style*="color: #1f7ea4"] {
    margin-top: 8px !important;
}

/* Paragraph styles */
footer.footer p {
    font-family: filsonpro, sans-serif !important;
    font-size: 14px !important;
    color: #003366 !important;
    line-height: 1.6 !important;
    margin-top: 0 !important;
    margin-bottom: 10px !important;
}

footer.footer p:last-child,
footer.footer .textblock__body>p:last-of-type {
    margin-bottom: 0 !important;
}

/* =============================================================
   4. LINKS & INTERACTIVE ELEMENTS
   ============================================================= */
/* General link styles */
footer.footer a {
    font-family: filsonpro, sans-serif !important;
    color: var(--clr-body-text) !important;
    text-decoration: underline !important;
    font-weight: normal !important;
}

footer.footer a:hover {
    color: var(--clr-brand-500) !important;
    text-decoration: none !important;
}

/* Non-tel/mailto links */
footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]) {
    font-family: filsonpro, sans-serif !important;
    color: #044999 !important;
    text-decoration: underline !important;
    font-size: inherit !important;
    font-weight: normal !important;
}

footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]):hover {
    text-decoration: none !important;
}

/* Tel/mailto specific styling */
footer.footer a[href^="tel:"],
footer.footer a[href^="mailto:"] {
    font-family: filsonpro, sans-serif !important;
    color: #0066CC !important;
    text-decoration: underline !important;
    font-size: inherit !important;
}

footer.footer a[href^="tel:"]:hover,
footer.footer a[href^="mailto:"]:hover {
    text-decoration: none !important;
    color: #004c99 !important;
}

/* =============================================================
   5. COMPONENT-SPECIFIC STYLES
   ============================================================= */

/* --- 5.1 Text Blocks --- */
footer.footer .block.textblock {
    margin-bottom: 20px !important;
}

footer.footer .block.textblock:last-of-type {
    margin-bottom: 0 !important;
}

footer.footer .block.textblock,
footer.footer .textblock__body {
    background-color: transparent !important;
}



footer.footer .textblock__body>div[style*="width"][style*="height"][style*="border-radius"] {
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}

footer.footer .textblock__body>div[style*="width"][style*="height"][style*="border-radius"] iframe {
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
}

/* --- 5.3 Logo Container --- */
div[style*="text-align: center; margin: 24px"] {
margin: 0 !important;
}

/* =============================================================
   6. NAVIGATION BAR (footer__link-nav)
   ============================================================= */
nav.footer__link-nav {
    background-color: #1f7ea4 !important;
    padding-top: 15px !important;
    padding-bottom: 15px !important;
    width: 100% !important;
    box-sizing: border-box;
    font-family: filsonpro, sans-serif !important;
}

/* Navigation list */
nav.footer__link-nav ul#footer__links {
    list-style: none !important;
    padding-left: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    justify-content: center !important;
}

nav.footer__link-nav ul#footer__links>li.col {
    flex-grow: 0 !important;
    flex-basis: auto !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
    text-align: center;
}

/* Navigation links */
nav.footer__link-nav a.footer__link {
    font-family: filsonpro, sans-serif !important;
    color: #ffffff !important;
    text-decoration: none !important;
}

nav.footer__link-nav a.footer__link:hover {
    text-decoration: underline !important;
}

/* Hamburger menu button */
nav.footer__link-nav button#footer__links-toggle-button {
    background: transparent !important;
    border: 1px solid #ffffff !important;
    padding: 8px 10px !important;
    margin-left: 15px;
    margin-bottom: 10px !important;
    cursor: pointer !important;
}

nav.footer__link-nav button#footer__links-toggle-button .hamburger-menu__line {
    background-color: #ffffff !important;
    display: block !important;
    height: 2px !important;
    width: 22px !important;
    margin: 4px auto !important;
}

/* =============================================================
   7. RESPONSIVE BREAKPOINTS
   ============================================================= */
@media (max-width: 991.98px) {

    /* Mobile navigation states */
    nav.footer__link-nav ul#footer__links.open,
    nav.footer__link-nav ul#footer__links:target {
        flex-direction: column !important;
        align-items: center !important;
    }

    nav.footer__link-nav ul#footer__links.open>li.col,
    nav.footer__link-nav ul#footer__links:target>li.col {
        width: 100% !important;
        margin-bottom: 5px !important;
    }

    nav.footer__link-nav ul#footer__links.open>li.col:last-child,
    nav.footer__link-nav ul#footer__links:target>li.col:last-child {
        margin-bottom: 0 !important;
    }
}


p,
span,
a,
div {
    font-family: var(--ff-primary) !important;
    color: var(--clr-brand-100) !important;
    font-size: var(--fs-text);
    line-height: var(--lh-text);
}

.navigation__item--has-mega-menu .navigation__item-category .navigation__item-chevron--collapsed,
.navigation__item--has-mega-menu .navigation__item-category .navigation__item-chevron--expanded {
    font-size: .75rem;
    margin-left: .5rem;
}

.fa,
.fab,
.fad,
.fal,
.far,
.fas {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-font-feature-settings: normal;
    font-feature-settings: normal;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
}

.fa,
.fas,
.far,
.fal,
.fad,
.fab {
    display: inline-block !important;
    font-style: normal !important;
    font-variant: normal !important;
    text-rendering: auto !important;
    line-height: 1 !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    font-size: 1em !important;
    font-family: Font Awesome\ 5 Pro !important;
}

@media (max-width: 575.98px) {

    .textblock .contact p,
    .textblock .contact h4,
    .textblock .contact h5 {
        text-align: left !important;
    }

    .contact p {
        text-align: left !important;
        align-self: flex-start !important;
        width: 100% !important;
        margin-bottom: 0 !important;
        display: block !important;
    }

    /* Force row breaks for contact labels */
}

/* --- CUSTOM HEADER OVERRIDES --- */

/* Make the main header a flex column to stack logo and menu vertically */
.header {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    /* Child rows can span full width for backgrounds */
    height: auto !important;
    /* Adjust height dynamically */
}

/* Reconfigure the .navigation container to also be a column */
.navigation {
    display: flex !important;
    flex-direction: column !important;
    width: 100% !important;
    height: auto !important;
    /* Reset fixed height */
    padding: 0 !important;
    /* Reset padding if needed */
    margin: 0 auto !important;
    /* Center if within a wider container */
    /* max-width: 1440px; */
    /* Or your preferred max-width for content */
}

/* 1. Navigation Logo Row */
/* Assuming .navigation__logo is the direct child for the logo content */
.navigation__logo {
    order: -1 !important;
    /* Make this the first row */
    width: 100% !important;
    /* Take full width to allow internal alignment */
    display: flex !important;
    justify-content: flex-end !important;
    /* Push logo content to the right */
padding-top: 30px !important;
padding-right: 16px !important;
padding-bottom: 25px !important;
padding-left: 16px !important;
margin-left: 6rem !important;
    box-sizing: border-box !important;
    height: auto !important;
    line-height: normal !important;
}


/* Ensure the logo image/link itself aligns to the right if it's a block/flex item inside .navigation__logo */
.navigation__logo>a,
.navigation__logo>img,
.navigation__logo>svg {
    margin-right: auto !important;
}


/* Styling for individual menu items within the menu row */
.navigation__item {
    flex-grow: 1 !important;
    /* Allow items to grow to fill space */
    flex-basis: 0 !important;
    /* Distribute space evenly */
    text-align: center !important;
    /* Center text within each item */
    padding: 0 0.5rem !important;
    /* Adjust padding (var(--spacing-2)) */
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-left: none !important;
    /* Remove existing borders if any */
    border-right: none !important;
}


/* Cleanup potentially conflicting styles from Bootstrap or template */
.header .float-right,
.header .pull-right {
    float: none !important;
}

.header [class*="position-absolute"] {
    position: relative !important;
    /* Or static, depending on desired flow */
}

.clinic-card:nth-child(3) .hours {
    top: 46% !important;
}
/* --- 5.2 Maps & iFrames --- */

/*
   The following selector is from your original CSS:
   div[style*="border-radius: 12px; overflow: hidden; margin: 0"] {
       margin: 0 !important;
   }
   If you transition to using the .map-embed-container class consistently,
   this rule might become redundant or could be removed. It targets very specific
   inline-styled divs that already have 'margin: 0'.
   The .map-embed-container class below provides a more comprehensive styling solution.
*/

/* Map Embed System - Enhanced */
.map-embed-container {
    /* --- Customizable Properties --- */
    --map-radius: 12px;
    --map-shadow: 0 4px 12px rgba(1, 35, 99, 0.1);        /* Softer default shadow */
    --map-hover-shadow: 0 7px 28px rgba(1, 35, 99, 0.18); /* Enhanced hover shadow */
    --map-focus-outline-color: #007bff;                   /* Colour for focus indicator */
    --map-focus-shadow: 0 0 0 3px hsla(0,0%,100%,.7), 0 0 0 5px var(--map-focus-outline-color), var(--map-hover-shadow); /* Layered focus for visibility */
    --map-max-width: 375px;                              /* Default maximum width of the map */
    --map-aspect-ratio: 16/9;                            /* Default aspect ratio */
    --map-vertical-margin: 16px;                         /* Vertical spacing */
    --map-border-width: 1px;
    --map-border-color: rgba(1, 35, 99, 0.15);           /* Subtle border for definition */
    --map-loading-text-color: #333;
    --map-loading-bg-color: #f0f2f5;                     /* Placeholder background colour */
    --map-spinner-color: var(--map-focus-outline-color); /* Spinner colour, can be themed */
    --map-transition-duration: 0.25s;

    /* --- Core Styles --- */
    position: relative; /* For absolute positioning of iframe and pseudo-elements */
    width: 100%;        /* Occupy available width of its parent */
    max-width: var(--map-max-width); /* But cap at the defined max-width */

    /* ALIGNMENT: Ensures the container is to the left */
    margin-top: var(--map-vertical-margin);
    margin-bottom: var(--map-vertical-margin);
    margin-left: 0; /* Explicitly align to the left */
    margin-right: auto; /* Right margin takes up remaining space, pushing element left */

    border-radius: var(--map-radius);
    overflow: hidden;   /* Ensures iframe corners are rounded if map itself isn't */
    box-shadow: var(--map-shadow);
    border: var(--map-border-width) solid var(--map-border-color);
    aspect-ratio: var(--map-aspect-ratio); /* Modern way to maintain height based on width */

    background-color: var(--map-loading-bg-color); /* Visible during loading */
    transition: transform var(--map-transition-duration) ease,
                box-shadow var(--map-transition-duration) ease,
                border-color var(--map-transition-duration) ease;
}

/* Interactivity: Hover and Focus States */
.map-embed-container:hover {
    transform: translateY(-4px); /* Slightly more pronounced lift */
    box-shadow: var(--map-hover-shadow);
    border-color: var(--map-spinner-color); /* Example: highlight border on hover */
}

.map-embed-container:focus-visible { /* For keyboard accessibility */
    transform: translateY(-4px);
    box-shadow: var(--map-focus-shadow);
    border-color: var(--map-spinner-color);
    outline: none; /* Custom focus shadow is preferred */
}

/* The actual iframe element */
.map-embed-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;      /* Standard reset for iframes */
    display: block; /* Removes potential extra space beneath the iframe */
    z-index: 1;     /* Ensures iframe appears above the loading indicators once loaded */
}

/* Loading State: Spinner (::before) and Text (::after) */
/* These pseudo-elements will be covered by an opaque iframe once it loads. */
/* For explicit removal after load, JavaScript would be needed to add a class like 'is-loaded'. */

.map-embed-container::before { /* Spinner */
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 36px; /* Spinner size */
    height: 36px;
    margin-top: -28px; /* Adjust to vertically center with text below: -(spinner_height/2 + text_offset/2) */
    margin-left: -18px; /* -(spinner_width/2) */
    border: 4px solid rgba(0, 0, 0, 0.1); /* Light track for spinner */
    border-left-color: var(--map-spinner-color); /* Active part of spinner */
    border-radius: 50%;
    animation: map-spinner-rotation 0.8s linear infinite;
    z-index: 0; /* Below the iframe */
}

.map-embed-container::after { /* Loading Text */
    content: "Laddar karta..."; /* "Loading map..." in Swedish */
    position: absolute;
    top: calc(50% + 10px); /* Position below spinner */
    left: 50%;
    transform: translateX(-50%);
    color: var(--map-loading-text-color);
    font-size: 13px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    z-index: 0; /* Below the iframe */
}

@keyframes map-spinner-rotation {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Responsive Adjustments */
@media (max-width: 576px) {
    .map-embed-container {
        --map-max-width: 100%; /* Allow full width on smaller screens */
        /* For edge-to-edge display on mobile, if desired: */
        margin-top: 0;
        margin-bottom: 0;
        border-radius: 0;   /* Optional: remove radius for full bleed */
        --map-border-width: 0px; /* Optional: remove border for full bleed */
    }

    .map-embed-container::before { /* Adjust spinner position if margins change dramatically */
        margin-top: -26px; /* Re-adjust if needed */
    }
    .map-embed-container::after {
        font-size: 12px;
        top: calc(50% + 8px);
    }
}

/* Print Styles */
@media print {
    .map-embed-container {
        box-shadow: none !important; /* Important to override JS-added shadows if any */
        border: 1px solid #bbb !important;
        page-break-inside: avoid;
        background-color: #fff !important; /* Ensure no dark loading bg in print */
    }
    /* Hide loading indicators when printing */
    .map-embed-container::before,
    .map-embed-container::after {
        display: none !important;
    }
}

/* Optional: If using JavaScript to detect iframe load */
/*
.map-embed-container.is-loaded::before,
.map-embed-container.is-loaded::after {
    display: none;
}
*/

.button-container {
    display: flex !important;
    align-items: center !important;
    /* Your precious vertical centering */
    justify-content: flex-start !important;
    /* Or center, if you're feeling adventurous */
    width: 100% !important;
    margin-top: -6px !important;
    /* Breathing room from the address */
    margin-left: 20% !important;
    margin-right: 20% !important;
}

.clinic-card:nth-child(3) {
    margin-bottom: 200px !important;
}


h1, h2, h3, h4, h5, h6 {
    color: var(--blue-dark) !important;
}
.navigation__item .navigation__item-category {
    color: #012363 !important;
    font-weight: 500 !important;
}
.mega-menu__wrapper a.link {
    color: #fff !important;
}

li {
text-align: left !important;
}
body.megamenu-visible .mega-container {
    overflow-y: auto;
    margin-top: 50px;
}

/* === REFINED MOBILE OPTIMIZATION CSS (Corrected .welcome-header) === */

/* General Mobile Body & HTML */
html, body {
    overflow-x: hidden !important; /* Prevent horizontal scrollbars */
}

body {
    line-height: 1.5 !important;
}

/* --- Welcome Header Adjustments --- */
/* Styles for .welcome-header specifically for mobile viewports */
@media (max-width: 767px) {
    .welcome-header {
        min-width: 0 !important; /* THIS IS THE KEY: Override desktop min-width for mobile */
        padding-left: 15px !important; /* Ensure consistent padding on mobile */
        padding-right: 15px !important;
        box-sizing: border-box !important; /* Consistent box model */
        margin-bottom: 20px !important; /* Consistent bottom margin on mobile */
        /* width: 100%; /* Implicitly handled by block display or ensure it if needed */
    }

    .welcome-title {
        font-size: 1.6em !important; /* Relative unit for better scaling */
        line-height: 1.2 !important;
    }
    .welcome-subtitle {
        font-size: 1.1em !important; /* Relative unit */
        line-height: 1.3 !important;
    }
}

@media (max-width: 480px) {
    /* .welcome-header rules from the 767px breakpoint still apply */
    .welcome-title {
        font-size: 1.4em !important;
    }
    .welcome-subtitle {
        font-size: 1.0em !important;
    }
}

/* --- Main Flex Layout --- */
@media (max-width: 1170px) { /* This is your existing breakpoint where it stacks */
    .main-flex {
        flex-direction: column-reverse !important;
        gap: 30px !important; /* Consistent gap */
        align-items: center !important;
        /* Reduced bottom margin for general mobile */
        margin-bottom: 40px !important;
    }
}
@media (max-width: 767px) {
    .main-flex {
        padding: 20px 15px !important;
        gap: 25px !important;
    }
}


/* --- Footer Adjustments --- */
@media (max-width: 767px) {
    footer.footer { padding: 20px 15px !important; }
    footer.footer h4 { font-size: 1.1em !important; }
    footer.footer p, footer.footer a { font-size: 0.9em !important; }

    .footer .map-embed-container {
        --map-max-width: 100% !important;
        margin-top: 15px !important; margin-bottom: 15px !important;
    }
}

nav.footer__link-nav ul#footer__links.open > li.col a.footer__link,
nav.footer__link-nav ul#footer__links:target > li.col a.footer__link {
    padding: 12px 15px !important;
    font-size: 0.95em !important;
}

.main-flex {
margin-bottom: 180px !important;
}
.navigation__left, .navigation__left--menu {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex
;
	padding-left: 50px !important;
	padding-right: 50px !important;
}

/* 2. Header Navigation Menu Row */
.navigation__left--menu,
nav.navigation__item--has-mega-menu .navigation__item-category,
.header-navigation-menu
    {
	order: -1 !important;
	display: flex !important;
	flex-direction: row !important;
	justify-content: center;
	width: 100% !important;
	padding: 0 0 !important;
	margin: 0 !important;
	list-style: none !important;
	height: 60px !important;
	flex-wrap: nowrap;
	align-content: center;
	align-items: center;
}

body[class*="logo--normal"] .navigation__logo {
    height: 60px !important;
	padding-top: 50px !important;
    /* Applies only when body has a class containing "logo--normal" */
}

/* =========================
   7. Location Schedule Table
   ========================= */
.location-schedule {
  width: 100%;
  max-width: 21.11rem !important;
  border-collapse: collapse;
  margin-block: 0.75rem 1.5rem;
  border: 1px solid var(--clr-border);
  border-radius: var(--border-radius-md);
  overflow: hidden;
}
.location-schedule th {
 background: linear-gradient(to left, #b4bfff 40%, #cdd8ff 100%) !important;
  color: #012363 !important;
  padding: 0.4rem 0.375rem !important;
  text-align: center !important;
  font-weight: 500 !important;
  border-bottom: 1.5px solid var(--clr-heading) !important;
  font-size: 0.83333rem !important;
}
.location-schedule td {
  padding: 0.4rem 0.375rem !important;
  text-align: center !important;
  color: #000 !important;
  font-size: 0.66667rem !important;
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


/* ── Price Table ─────────────────────────────────────────────────────────── */

/* body cells */
table.price-table td {
  font-family: 'filsonpro', sans-serif !important;
  font-size: 0.5rem !important;
  font-weight: 500 !important;
  line-height: 1 !important;
  color: #003366 !important;
  margin: 0 0 0.7rem 0 !important;
}

/* header cells */
table.price-table th {
  font-family: 'filsonpro', sans-serif !important;
  font-size: 0.65rem !important;
  font-weight: 600 !important;
  line-height: 1.1 !important;
  color: #003366 !important;
  margin: 0 0 0.7rem 0 !important;
}

/* ── Location Schedule Table ─────────────────────────────────────────────── */

/* body cells */
table.location-schedule td {
  font-family: 'filsonpro', sans-serif !important;
  font-size: 0.78rem !important;
  font-weight: 500 !important;
  line-height: 1 !important;
  color: #003366 !important;
  margin: 0 0 0.7rem 0 !important;
}

/* header cells */
table.location-schedule th {
  font-family: 'filsonpro', sans-serif !important;
  font-size: 0.89rem !important;
  font-weight: 600 !important;
  line-height: 1.1 !important;
  color: #003366 !important;
  margin: 0 0 0.7rem 0 !important;
}


/* =========================
   Version 2: Centered Row Images
   Images in dedicated rows at 75% width
   ========================= */

/* Gallery row as flex container */
.bus-gallery-row {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  margin: 3rem 0 !important;
  gap: 3rem !important;
  width: 100% !important;
}

/* Each image in its own row */
.bus-gallery-col {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  width: 75% !important;
  max-width: 600px !important;
  margin: 0 auto !important;
}

/* Enhanced image wrapper */
.bus-gallery-col .img-wrapper {
  width: 100% !important;
  max-width: 100% !important;
  position: relative !important;
  overflow: hidden !important;
  border-radius: var(--border-radius-lg) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08),
              0 16px 48px rgba(74, 166, 201, 0.15),
              0 0 24px 8px rgba(74, 166, 201, 0.08) !important;
  margin-bottom: 1.5rem !important;
}

/* Add decorative frame */
.bus-gallery-col .img-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid rgba(74, 166, 201, 0.1);
  border-radius: var(--border-radius-lg);
  pointer-events: none;
  transition: border-color 0.3s ease;
}

.bus-gallery-col .img-wrapper:hover::after {
  border-color: rgba(74, 166, 201, 0.3);
}

/* Image styling */
.bus-gallery-col .bus-img {
  width: 100% !important;
  height: auto !important;
  display: block !important;
  max-width: none !important;
  min-width: unset !important;
}

/* Enhanced caption styling */
.bus-gallery-col .card-body {
  width: 100% !important;
  text-align: center !important;
  padding: 1rem 0 !important;
}

.bus-gallery-col .bus-title {
  font-size: 1.1rem !important;
  font-weight: 500 !important;
  color: var(--clr-heading) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  position: relative !important;
  display: inline-block !important;
  padding-bottom: 0.5rem !important;
}

/* Caption underline decoration */
.bus-gallery-col .bus-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: var(--clr-accent);
  opacity: 0.5;
}

/* Inline version (45% width) - activated with class */
.bus-gallery-col.inline-version {
  width: 45% !important;
  max-width: 400px !important;
  display: inline-block !important;
  vertical-align: top !important;
  margin: 0 1.5% !important;
}

.bus-gallery-row.inline-layout {
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  flex-wrap: wrap !important;
  gap: 2rem !important;
}

/* Tablet adjustments */
@media (max-width: 992px) {
  .bus-gallery-col {
    width: 85% !important;
  }

  .bus-gallery-col.inline-version {
    width: 48% !important;
    margin: 0 1% !important;
  }
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .bus-gallery-col,
  .bus-gallery-col.inline-version {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
  }

  .bus-gallery-row,
  .bus-gallery-row.inline-layout {
    gap: 2rem !important;
  }
}

/* Enhanced hover effects */
.bus-gallery-col .img-wrapper {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.bus-gallery-col:hover .img-wrapper {
  transform: translateY(-10px) scale(1.02) !important;
/*  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12),
              0 20px 60px rgba(74, 166, 201, 0.2),
              0 0 40px 12px rgba(74, 166, 201, 0.15) !important;
}*/

/* Staggered animations */
.bus-gallery-col:nth-child(1) {
  animation-delay: 0.1s !important;
}

.bus-gallery-col:nth-child(2) {
  animation-delay: 0.2s !important;
}

/* Fade-in animation */
@keyframes galleryFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bus-gallery-col {
  animation: galleryFadeIn 0.8s ease-out forwards;
  opacity: 0;
}

/* =========================
   Price Table - Fixed Layout
   90% width with proper column distribution
   ========================= */

/* Main table structure */
.price-table {
  width: 90% !important;
  max-width: none !important;
  min-width: auto !important;
  margin: 0 auto 2rem auto !important;
  table-layout: fixed !important;
  border-collapse: collapse !important;
  font-variant-numeric: tabular-nums !important;
  border: 1px solid var(--clr-border) !important;
  border-radius: var(--border-radius-md) !important;
  overflow: hidden !important;
  background-color: var(--clr-white) !important;
}

/* Table header styling */
.price-table thead th {
  background: linear-gradient(150deg, #5a9fe0 0%, #518ece 50%, #477eba 100%) !important;
  color: #ffffff !important;
  font-family: 'filsonpro', 'Filson Pro', sans-serif !important;
  font-size: 14.04px !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
  line-height: 1.4 !important;
  text-align: left !important;
  padding: 0.75rem 0.5rem !important;
  white-space: nowrap !important;
  border-bottom: 2px solid rgba(1, 35, 99, 0.2) !important;
}

/* First column (vaccine names) - takes more space */
.price-table th.price-vaccine,
.price-table td.price-vaccine {
  width: 40% !important;
  text-align: left !important;
  padding-left: 0.75rem !important;
}

/* Price columns - equal distribution of remaining space */
.price-table th.price-col,
.price-table td.price-val {
  width: 20% !important;
  text-align: right !important;
  padding-right: 0.75rem !important;
}

/* Table body cells - matching typography */
.price-table tbody td {
  font-family: 'filsonpro', 'Filson Pro', sans-serif !important;
  font-size: 14.04px !important;
  font-weight: 500 !important;
  color: #003366 !important;
  letter-spacing: 0.5px !important;
  line-height: 1.4 !important;
  padding: 0.6rem 0.5rem !important;
  border-bottom: 1px solid var(--clr-border) !important;
  white-space: nowrap !important;
  font-variant: normal !important;
  font-feature-settings: normal !important;
  font-variation-settings: normal !important;
}

/* Vaccine name cells - specific styling */
.price-table td.price-vaccine {
  font-weight: 500 !important;
  color: #003366 !important;
}

/* Price value cells - ensure proper alignment */
.price-table td.price-val {
  font-variant-numeric: tabular-nums lining-nums !important;
  font-feature-settings: "tnum" 1, "lnum" 1 !important;
}

/* Zebra striping with better contrast */
.price-table tbody tr:nth-child(odd) {
  background-color: var(--clr-white) !important;
}

.price-table tbody tr:nth-child(even) {
  background-color: #f8fbff !important;
}

/* Remove bottom border from last row */
.price-table tbody tr:last-child td {
  border-bottom: none !important;
}

/* Hover effect for better interactivity */
.price-table tbody tr:hover {
  background-color: #eef5ff !important;
  transition: background-color 0.2s ease !important;
}

/* Ensure column visibility based on toggle selection */
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .price-table {
    width: 100% !important;
    font-size: 13px !important;
  }

  .price-table thead th,
  .price-table tbody td {
    font-size: 13px !important;
    padding: 0.5rem 0.4rem !important;
    letter-spacing: 0.3px !important;
  }

  /* Adjust column widths for mobile */
  .price-table th.price-vaccine,
  .price-table td.price-vaccine {
    width: 45% !important;
    padding-left: 0.5rem !important;
  }

  .price-table th.price-col,
  .price-table td.price-val {
    width: 55% !important;
    padding-right: 0.5rem !important;
  }
}

@media (max-width: 480px) {
  .price-table thead th,
  .price-table tbody td {
    font-size: 12px !important;
    padding: 0.4rem 0.3rem !important;
    letter-spacing: 0.2px !important;
  }
}

/* Print styles */
@media print {
  .price-table {
    width: 100% !important;
    page-break-inside: avoid !important;
  }

  .price-table tbody tr:hover {
    background-color: transparent !important;
  }
}

/* Ensure font loading */
@font-face {
  font-family: 'filsonpro';
  font-display: swap;
  /* Add your font source here if needed */
}

/* Fallback for font loading */
.price-table {
  font-family: 'filsonpro', 'Filson Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
}

/* =========================
   Price Table - Toggle Functionality Fix
   ========================= */

/* Hide radio inputs */
.price-toggle-input {
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

/* Price table with proper structure */
.price-table {
  width: 90% !important;
  margin: 0 auto 2rem auto !important;
  table-layout: fixed !important;
  border-collapse: collapse !important;
  font-variant-numeric: tabular-nums !important;
  border: 1px solid var(--clr-border) !important;
  border-radius: var(--border-radius-md) !important;
  overflow: hidden !important;
}

/* Column widths */
.price-table th.price-vaccine,
.price-table td.price-vaccine {
  width: 40% !important;
  text-align: left !important;
  padding-left: 0.75rem !important;
}

.price-table th.price-col,
.price-table td.price-val {
  width: 20% !important;
  text-align: right !important;
  padding-right: 0.75rem !important;
}

/* DEFAULT STATE: Hide all price columns initially */
.price-table .price-col,
.price-table .price-val {
  display: none !important;
}

/* Show only ordinarie by default (when checked) */
#v-ord:checked ~ .price-toggle-labels ~ .price-table .price-col.ord,
#v-ord:checked ~ .price-toggle-labels ~ .price-table .price-val.ord {
  display: table-cell !important;
}

/* Show pensionär when selected */
#v-pen:checked ~ .price-toggle-labels ~ .price-table .price-col.pen,
#v-pen:checked ~ .price-toggle-labels ~ .price-table .price-val.pen {
  display: table-cell !important;
}

/* Show student when selected */
#v-stu:checked ~ .price-toggle-labels ~ .price-table .price-col.stu,
#v-stu:checked ~ .price-toggle-labels ~ .price-table .price-val.stu {
  display: table-cell !important;
}

/* Alternative selector if structure is different */
.price-box:has(#v-ord:checked) .price-table .price-col.ord,
.price-box:has(#v-ord:checked) .price-table .price-val.ord {
  display: table-cell !important;
}

.price-box:has(#v-pen:checked) .price-table .price-col.pen,
.price-box:has(#v-pen:checked) .price-table .price-val.pen {
  display: table-cell !important;
}

.price-box:has(#v-stu:checked) .price-table .price-col.stu,
.price-box:has(#v-stu:checked) .price-table .price-val.stu {
  display: table-cell !important;
}

/* Toggle label active states */
#v-ord:checked ~ .price-toggle-labels label[for="v-ord"],
#v-pen:checked ~ .price-toggle-labels label[for="v-pen"],
#v-stu:checked ~ .price-toggle-labels label[for="v-stu"] {
  background-color: #012363 !important;
  color: #ffffff !important;
  border-color: #012363 !important;
  font-weight: 600 !important;
  box-shadow: 0 2px 4px rgba(1, 35, 99, 0.2) !important;
}

/* Toggle label hover states */
.price-toggle-label:hover {
  border-color: #4AA6C9 !important;
  background-color: #eef5ff !important;
  cursor: pointer !important;
}

/* Active label hover (darker) */
#v-ord:checked ~ .price-toggle-labels label[for="v-ord"]:hover,
#v-pen:checked ~ .price-toggle-labels label[for="v-pen"]:hover,
#v-stu:checked ~ .price-toggle-labels label[for="v-stu"]:hover {
  background-color: #0B496E !important;
  border-color: #0B496E !important;
}

/* ==========================================================================
   BLOCK 1: GENERAL PAGE EDITS
   ==========================================================================
   Description: This block contains global resets, base typography,
   layout helpers, and utility classes for the entire page.
   ========================================================================== */

/* --- Comprehensive Browser Compatibility & Resets --- */
*,
*::before,
*::after {
    box-sizing: border-box !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
}

html {
    -webkit-text-size-adjust: 100% !important;
    -ms-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
    scroll-behavior: smooth !important;
    overflow-x: hidden; /* Prevent horizontal scroll on all pages */
}

body {
    font-family: 'filson-pro', sans-serif !important; /* A more standard way to declare this font */
    line-height: 1.5 !important;
    color: #003366 !important; /* Base text colour */
    background-color: #fff;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}


/* --- Base Typography & Links --- */
h1, h2, h3, h4, h5, h6 {
    color: #012363; /* Primary heading colour */
    font-weight: 600;
    margin: 1.2em 0 0.6em;
}

p {
    margin: 0 0 1em 0;
}

a {
    color: #004c99; /* A good, accessible link colour */
    text-decoration: none;
    transition: color 0.2s ease, text-decoration 0.2s ease;
}

a:hover {
    color: #003366;
    text-decoration: underline;
}


/* --- Layout Container --- */
.container {
    width: 100%;
    max-width: 1280px; /* Standard max-width for content */
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
}

@media (max-width: 768px) {
    .container {
        padding-left: 15px;
        padding-right: 15px;
    }
}


/* --- Utility Classes --- */
.fade-in {
    opacity: 0 !important;
    transform: translateY(10px) !important;
    transition: opacity 0.6s ease, transform 0.6s ease !important;
}

.fade-in.visible {
    opacity: 1 !important;
    transform: none !important;
}

/* --- Font Awesome Base (if used) --- */
.fa,
.fab,
.fad,
.fal,
.far,
.fas {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    font-family: 'Font Awesome 5 Pro', sans-serif !important; /* Ensure correct family is targeted */
}


/* ==========================================================================
   BLOCK 2: HEADER STYLES
   ==========================================================================
   Description: All styles pertaining to the site's main header,
   including the logo, navigation, and responsive behaviour. This section
   has been completely rebuilt for clarity and modern practices.
   ========================================================================== */

/* --- Main Header Container --- */
.site-header {
    background-color: #fff;
    border-bottom: 1px solid #e5e7eb; /* Subtle separator */
    padding: 0 20px; /* Horizontal padding */
    position: relative;
    z-index: 100;
}

.site-header .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px; /* Consistent height */
    width: 100%;
    max-width: 1440px; /* Wider container for header content */
    margin: 0 auto;
}

/* --- Logo Styling --- */
.site-header .logo a {
    display: inline-block;
}

.site-header .logo img {
    max-height: 40px; /* Control logo size */
    width: auto;
    display: block;
}

/* --- Main Navigation --- */
.site-header .main-navigation {
    display: flex;
    align-items: center;
}

.site-header .main-navigation ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px; /* Space between nav items */
}

.site-header .main-navigation a {
    display: block;
    color: #012363;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    padding: 10px 5px;
    position: relative;
    transition: color 0.25s ease;
}

.site-header .main-navigation a:hover {
    color: #46b5ff; /* Highlight colour on hover */
}

.site-header .main-navigation a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #46b5ff;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
}

.site-header .main-navigation a:hover::after {
    transform: scaleX(1);
}

/* --- Mobile Navigation --- */
.mobile-menu-toggle {
    display: none; /* Hidden on desktop */
    background: none;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.mobile-menu-toggle .hamburger-icon {
    width: 24px;
    height: 2px;
    background-color: #012363;
    display: block;
    position: relative;
}

.mobile-menu-toggle .hamburger-icon::before,
.mobile-menu-toggle .hamburger-icon::after {
    content: '';
    position: absolute;
    left: 0;
    width: 24px;
    height: 2px;
    background-color: #012363;
    transition: transform 0.25s ease, top 0.25s ease;
}

.mobile-menu-toggle .hamburger-icon::before {
    top: -7px;
}

.mobile-menu-toggle .hamburger-icon::after {
    top: 7px;
}


/* --- Responsive Header Adjustments --- */
@media (max-width: 992px) {
    .site-header .main-navigation {
        display: none; /* Hide desktop nav */
    }

    .mobile-menu-toggle {
        display: block; /* Show hamburger icon */
    }

    .site-header .header-container {
        /* On mobile, logo moves to the center and toggle is on the right */
        justify-content: center;
    }

    .site-header .logo {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .mobile-menu-toggle {
        position: absolute;
        right: 20px;
    }
}



/*
 * ==========================================================================
 * PIXEL-PERFECT STYLING FOR "VACCINATION I BJÄRRED" PAGE
 * ==========================================================================
 * This CSS block targets the specific layout and styling issues on the
 * page featuring the mobile vaccination bus in Bjärred.
 */

/*
 * 1. Accessibility Navigation Fix
 * --------------------------------------------------------------------------
 * Hides the accessibility navigation from view while keeping it for screen
 * readers. This also removes the unwanted white gap above the main header.
 */



/*
 * 2. Header Style Correction
 * --------------------------------------------------------------------------
 * Ensures the main header has a clean white background, a subtle shadow
 * for separation, and correctly aligned content.
 */
header.header {
    background-color: #ffffff !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    border-top: none !important;
}


/*
 * 3. Main Content Typography
 * --------------------------------------------------------------------------
 * Applies "pixel-perfect" font styles to the main headline and body text
 * to match the desired visual hierarchy.
 */

/* This targets the container for the main content on the page */
main .container .block > .textblock {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
}

/* Main headline: "Vaccination i Bjärred" */
main .textblock h1 {
    font-family: 'filsonpro', sans-serif !important;
    font-size: 42px !important;
    font-weight: 800 !important;
    color: #012363 !important;
    margin-bottom: 16px !important;
}

/* Body text paragraph */
main .textblock p {
    font-family: 'filsonpro', sans-serif !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    color: #333333 !important;
    max-width: 60ch !important; /* Improves readability */
}


/*
 * 4. Main Content Layout & Schedule Table
 * --------------------------------------------------------------------------
 * Structures the content into a two-column grid and styles the schedule
 * for clarity and visual appeal.
 */

/* Creates the two-column layout */
.textblock .textblock__body > div {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
    gap: 40px !important;
    align-items: flex-start !important;
}

/* Styles for the schedule table */
table {
    width: 100% !important;
    border-collapse: collapse !important;
    font-size: 15px !important;
    margin-top: 10px !important;
}

table thead th {
    background-color: #6a82a5 !important; /* Adjusted color from image */
    color: #ffffff !important;
    padding: 12px 15px !important;
    text-align: left !important;
    font-weight: 600 !important;
}

table tbody td {
    padding: 12px 15px !important;
    border-bottom: 1px solid #e0e0e0 !important;
    color: #333333 !important;
}

/* Zebra-striping for better readability */
table tbody tr:nth-of-type(odd) {
    background-color: #f7f9fc !important;
}

/*
 * ==========================================================================
 * PIXEL-PERFECT STYLING FOR "VACCINATION I BJÄRRED" PAGE
 * ==========================================================================
 * This CSS block targets the specific layout and styling issues on the
 * page featuring the mobile vaccination bus in Bjärred.
 */

/*
 * 1. Accessibility Navigation Fix
 * --------------------------------------------------------------------------
 * Hides the accessibility navigation from view while keeping it for screen
 * readers. This also removes the unwanted white gap above the main header.
 */
nav#accessibility-navigation {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    border: 0 !important;
    /* By moving it off-screen and collapsing its size, the element
       no longer occupies any visual space. */
}


/*
 * 2. Header Style Correction
 * --------------------------------------------------------------------------
 * Ensures the main header has a clean white background, a subtle shadow
 * for separation, and correctly aligned content.
 */
header.header {
    background-color: #ffffff !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    border-top: none !important;
}


/*
 * 3. Main Content Typography
 * --------------------------------------------------------------------------
 * Applies "pixel-perfect" font styles to the main headline and body text
 * to match the desired visual hierarchy.
 */

/* This targets the container for the main content on the page */
main .container .block > .textblock {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
}

/* Main headline: "Vaccination i Bjärred" */
main .textblock h1 {
    font-family: 'filsonpro', sans-serif !important;
    font-size: 42px !important;
    font-weight: 800 !important;
    color: #012363 !important;
    margin-bottom: 16px !important;
}

/* Body text paragraph */
main .textblock p {
    font-family: 'filsonpro', sans-serif !important;
    font-size: 16px !important;
    line-height: 1.6 !important;
    color: #333333 !important;
    max-width: 60ch !important; /* Improves readability */
}


/*
 * 4. Main Content Layout & Schedule Table
 * --------------------------------------------------------------------------
 * Structures the content into a two-column grid and styles the schedule
 * for clarity and visual appeal.
 */

/* Creates the two-column layout */
.textblock .textblock__body > div {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
    gap: 40px !important;
    align-items: flex-start !important;
}

/* Styles for the schedule table */
table {
    width: 100% !important;
    border-collapse: collapse !important;
    font-size: 15px !important;
    margin-top: 10px !important;
}

table thead th {
    background-color: #6a82a5 !important; /* Adjusted color from image */
    color: #ffffff !important;
    padding: 12px 15px !important;
    text-align: left !important;
    font-weight: 600 !important;
}

table tbody td {
    padding: 12px 15px !important;
    border-bottom: 1px solid #e0e0e0 !important;
    color: #333333 !important;
}

/* Zebra-striping for better readability */
table tbody tr:nth-of-type(odd) {
    background-color: #f7f9fc !important;
}

nav#accessibility-navigation {
    position: absolute !important;
    width: 0 !important;
    height: 0 !important;
    margin: -1px !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    border: 0 !important;
    /* By moving it off-screen and collapsing its size, the element
       no longer occupies any visual space. */
}

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


