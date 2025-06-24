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
     8. FAQ Component - UPDATED WITH YOUR STYLES
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
    white-space: wrap;
    overflow: hidden;
    text-overflow: cut;
  }

  .faq-item {
background: linear-gradient(145deg, #5a8fc7 0%, #4a7bb0 60%, #406ba0 100%);
transition:
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
    padding-block: 0rem;
    padding-right: calc(var(--summary-pad-inline) + var(--chevron-gap));
    font-weight: 500;
    cursor: pointer;
    list-style: none;
    position: relative;
    transition: background-color 0.2s;
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
    border-right: var(--chevron-thickness) solid var(--clr-heading);
    border-bottom: var(--chevron-thickness) solid var(--clr-heading);
    transform: rotate(45deg);
    transition: transform 0.25s ease;
  }
  .faq-item summary:hover,
  .faq-item summary:focus-visible {
 background: linear-gradient(150deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%) !important;
transition: background 0.2s;color: #fff;  }

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
    color: var(--clr-body) !important;
  }
  .faq-content p {
    margin: 0 !important;
  }
  .faq-content p:last-child {
    margin-bottom: 0 !important;
  }
  .faq-section {
    display: flex;
    flex-direction: column;
    gap: 0.6rem  !important;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .faq-section > * {
    margin-bottom: 0;
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
  /* Updated FAQ responsive styles */
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

/* Reduced Motion - Updated with FAQ */
@media (prefers-reduced-motion: reduce) {
  .faq-item,
  .faq-item summary::after {
    transition: none;
  }
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
  width: 50%;
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
  max-width: 11.11rem;
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
  min-width: 11.11rem !important;
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
    padding: 2rem 1rem;
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
/* Precisely target only this paragraph */
p.halsokontroll-text {
  padding: 1rem !important;
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

*,body{-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;text-rendering:optimizeLegibility!important}.clinic-card,.clinic-content,.image-wrapper{position:relative!important}.service-grid{grid-template-columns:repeat(2,115px)!important}.hours,.row.row1{z-index:2!important}.row.row1,div.row.row1,div.row.row2,div.row.row3,div.row.row4,div.row.row5,div.row.row6{margin-top:0!important}.buttons a,.service-item{cursor:pointer!important}.buttons a,.navigation__item,.service-grid .service-item .service-title,.service-grid .textblock.alignment--left,.service-grid .textblock.alignment--left :not(ul):not(ol):not(li),.service-item,.service-title,.welcome-header{text-align:center!important}*{-webkit-text-rendering:optimizeLegibility!important;-moz-text-rendering:optimizeLegibility!important;-o-text-rendering:optimizeLegibility!important;font-family:filsonpro,sans-serif!important}html{-webkit-text-size-adjust:100%!important;-moz-text-size-adjust:100%!important;-ms-text-size-adjust:100%!important;-o-text-size-adjust:100%!important;text-size-adjust:100%!important;-webkit-scroll-behavior:smooth!important;-moz-scroll-behavior:smooth!important;-ms-scroll-behavior:smooth!important;scroll-behavior:smooth!important;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-rendering:optimizeLegibility;scrollbar-gutter:auto;scroll-behavior:smooth!important;-webkit-text-size-adjust:100%!important;-ms-text-size-adjust:100%!important}*,::after,::before{-webkit-box-sizing:border-box!important;-moz-box-sizing:border-box!important;box-sizing:border-box!important}.buttons,.buttons a,.clinic-card,.clinic-cards,.clinic-content,.contact,.hours,.icon-container,.image-wrapper,.info-row,.main-flex,.service-grid,.service-item,nav.footer__link-nav ul#footer__links{display:-webkit-box!important;display:-moz-box!important;display:-ms-flexbox!important;display:-webkit-flex!important;display:flex!important}article.clinic-card div.clinic-content div.info-row div.contact *{text-align:left!important}.clinic-cards,.clinic-content,.contact,.hours,.icon-container,.info-row,.service-item{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-moz-box-orient:vertical!important;-moz-box-direction:normal!important;-ms-flex-direction:column!important;-webkit-flex-direction:column!important;flex-direction:column!important}.book-buttons,.row.no-gutters{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.book-buttons,.buttons,.hours ul,nav.footer__link-nav ul#footer__links{-webkit-box-pack:center!important;-moz-box-pack:center!important;-ms-flex-pack:center!important;-webkit-justify-content:center!important;justify-content:center!important}.buttons a,.hours,.icon-container,.service-item{-webkit-box-align:center!important;-moz-box-align:center!important;-ms-flex-align:center!important;-webkit-align-items:center!important;align-items:center!important}.clinic-content,.contact{-webkit-box-flex:1!important;-moz-box-flex:1!important;-webkit-flex:1!important;-ms-flex:1!important;flex:1!important}.btn-primary:hover,.btn-secondary:hover,.clinic-card:hover,.fade-in,.service-item:hover{-webkit-transform:translateY(-4px)!important;-moz-transform:translateY(-4px)!important;-ms-transform:translateY(-4px)!important;-o-transform:translateY(-4px)!important;transform:translateY(-4px)!important}.buttons a,.clinic-card,.fade-in,.service-item,a,footer.footer a{-webkit-transition:.2s!important;-moz-transition:.2s!important;-ms-transition:.2s!important;-o-transition:.2s!important;transition:.2s!important}.btn-primary,.buttons a,.clinic-card,.service-item{-webkit-box-shadow:0 4px 12px rgba(0,0,0,.08)!important;-moz-box-shadow:0 4px 12px rgba(0,0,0,.08)!important;box-shadow:0 4px 12px rgba(0,0,0,.08)!important}.buttons a,.clinic-card,.service-grid,.service-item{-webkit-border-radius:8px!important;-moz-border-radius:8px!important;border-radius:8px!important}.container{-webkit-overflow-scrolling:touch!important;-webkit-overflow-scrolling:touch!important;-webkit-overflow-scrolling:touch}.clinic-card,.image-wrapper,.service-item{overflow:hidden!important}button,input,select,textarea{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important}.clinic-content h3,.hours h4,.service-title{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.main-flex{width:-webkit-calc(100% - 0px)!important;width:-moz-calc(100% - 0px)!important;width:calc(100% - 0px)!important}.service-grid{display:-ms-grid!important;display:grid!important;-ms-grid-columns:115px 115px!important}.buttons a,.clinic-card,.service-item{-ms-touch-action:manipulation!important;touch-action:manipulation!important}.clinic-content h3,.contact p,p{-webkit-hyphens:auto!important;-moz-hyphens:auto!important;-ms-hyphens:auto!important;hyphens:auto!important}.info-row{-webkit-column-gap:15px!important;-moz-column-gap:15px!important;column-gap:15px!important;margin-top:18px!important}.image-wrapper img,.service-icon{-o-object-fit:cover!important;object-fit:cover!important}@supports not (aspect-ratio:1 / 1){.image-wrapper::before{content:""!important;display:block!important;padding-bottom:100%!important}}.buttons a:hover,.clinic-card:hover,.service-item:hover{pointer-events:auto!important}.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{width:100%;max-width:100%;margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;box-sizing:border-box}.clinic-cards,.main-flex{box-sizing:border-box!important}header .container-fluid{width:100%!important;max-width:100%!important;padding-left:0!important;padding-right:0!important;--bs-gutter-x:0!important;--bs-gutter-y:0!important}@media (min-width:640px){.container{padding-left:20px;padding-right:20px}}@media (min-width:768px){.container{padding-left:25px;padding-right:25px}.textblock.alignment--left,.textblock.alignment--left :not(ul):not(ol):not(li){text-align:left!important}#buss-heading,#buss-hours,#lund-heading,#lund-hours,#malmo-heading,#malmo-hours{text-align:center!important;margin-bottom:0!important}}@media (min-width:1024px){.container{max-width:1200px;padding-left:30px;padding-right:30px}}@media (min-width:1280px){.container{max-width:1280px!important}}@media (min-width:1536px){.container{max-width:1536px!important}}.row.no-gutters{display:flex;flex-wrap:wrap;margin-left:0!important;margin-right:0!important;--bs-gutter-x:0.1rem;--bs-gutter-y:0}.row.row2,.row.row2 .block,.row.row3,.row.row3 .block,.row.row4,.row.row4 .block,.row.row5,.row.row5 .block{margin:0!important;padding:0!important}div.row.row6{display:none!important}.block-container{--bs-gutter-x:0!important;padding:0!important}.book-buttons{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;margin-top:24px;padding-top:24px}.clinic-card,.clinic-cards,.main-flex,.welcome-header{display:flex!important}.navigation__item-category{color:#012363!important;padding-left:5px!important;padding-right:5px!important;font-weight:500!important}.fal.fa-chevron-down.navigation__item-chevron--collapsed{color:#012363!important}.navigation__logo.flex-start{display:flex!important;justify-content:center!important;align-items:center!important}.navigation__logo img{max-width:350px!important;min-width:225px!important;display:block;font-family:"object-fit:contain;object-position:left top";max-height:40px;-o-object-fit:contain;object-fit:contain;-o-object-position:left top;object-position:left top;width:50vw}.clinic-content h3,.service-title,.welcome-header,body{font-family:filsonpro,sans-serif!important}.contact,.hours li,.hours ul,.image-wrapper img,.info-row,.welcome-header{width:100%!important}.heading-highlight{font-size:22px;color:#012363;margin-block:1.2rem 0.8rem}.paragraph-highlight{font-size:19px;color:#fff;margin-block:0 1.6rem}.main-flex,body{margin:0!important;padding:0!important}div[style*="border-radius: 12px; overflow: hidden; margin: 20px"],div[style*="border-radius: 12px; overflow: hidden; margin: 24px"],div[style*="text-align: center; margin: 20px"],div[style*="text-align: center; margin: 24px"]{margin:2px 0!important}:root{--blue-primary:#012363!important;--blue-dark:#003366!important;--bg-service:#46b5ff!important;--bg-footer:#eff9ff!important;--text-white:#ffffff!important;--font-family-base:filsonpro,sans-serif!important;--shadow-sm:0 3px 6px rgba(0, 0, 0, 0.1)!important;--shadow-md:0 4px 12px rgba(0, 0, 0, 0.08)!important;--shadow-lg:0 8px 20px rgba(0, 0, 0, 0.12)!important;--border-radius:8px!important}body{color:var(--blue-dark)!important;line-height:1.5!important}.clinic-content h3,.hours li.today,.welcome-title,a{color:var(--blue-primary)!important}a{transition:color .2s!important}.clinic-cards a:not(.btn-primary):not(.btn-secondary){text-decoration:underline!important;color:#004c99!important}.main-flex{justify-content:start!important;align-items:flex-start!important;min-width:92vw!important;min-height:70vh!important;gap:85px!important}.fade-in{opacity:0!important;transform:translateY(10px)!important;transition:opacity .6s,transform .6s!important}.fade-in.visible{opacity:1!important;transform:none!important}.welcome-header{flex-direction:column!important;align-items:center!important;margin-bottom:16px!important;min-width:690px!important}.welcome-title{font-size:38px!important;margin:0 0 4px!important;font-weight:800!important}.buttons a,.clinic-content h3,.hours h4,.welcome-subtitle{font-weight:600!important}.welcome-subtitle{font-size:32px!important;color:var(--blue-dark)!important;margin:0!important}.clinic-cards{flex-direction:column!important;gap:32px!important;flex:0 1 800px!important}.clinic-card{min-height:209.6px!important;background:linear-gradient(150deg,#e5f0f5 0,#badfef 50%,#87ceeb 100%);border-radius:12px!important;box-shadow:var(--shadow-md)!important;transition:transform .25s,box-shadow .25s!important;margin-left:auto!important;margin-right:auto!important}.image-wrapper{aspect-ratio:1/1!important;flex:0 0 209.6px!important;aspect-ratio:1/1!important}.clinic-content,.info-row{display:flex!important;flex-direction:column!important;box-sizing:border-box!important}.image-wrapper img{height:100%!important;object-fit:cover!important;display:block!important}.clinic-content{flex:1!important;padding:20px!important}.clinic-content h3{margin:0 0 12px!important;font-size:22px!important;line-height:1.2!important}.address,.contact,.hours h4,.hours li,h1,h2,h3,h4,h5,h6{color:var(--blue-dark)!important}.info-row{gap:15px!important;flex:1!important}.contact,.hours{flex-direction:column!important;display:flex!important}.contact{gap:8px!important;max-width:300px!important}.contact p{margin:0!important;line-height:1.4!important;font-size:1 rem!important;padding:0!important}.address{word-wrap:break-word!important}.buttons{display:flex!important;row-gap:43px!important;column-gap:37px!important;max-width:730px!important;margin:5px 0 0!important;box-sizing:border-box!important}.buttons a{flex:1!important;display:flex!important;align-items:center!important;justify-content:center!important;font-size:14px!important;padding:8px 12px!important;border-radius:var(--border-radius)!important;text-decoration:none!important;white-space:nowrap!important;transition:.2s!important}.hours .day,.hours h4,li{text-align:left!important}.btn-primary,.buttons .btn-primary,.clinic-cards .btn-primary{background:linear-gradient(145deg,#69d2f1 0,#5cc0e0 50%,#4fb0d0 100%)!important;color:#000!important;border:0 solid var(--blue-primary)!important;box-shadow:0 2px 4px rgba(1,35,99,.1)!important;text-decoration:none!important}.btn-secondary,.buttons .btn-secondary,.clinic-cards .btn-secondary{background:linear-gradient(145deg,#2e5a88 0,#1f3e6d 50%,#102a4f 100%)!important;color:#fff!important;border:none!important;text-decoration:none!important}.btn-primary:hover{background-color:#7dddf4!important;border-color:var(--blue-dark)!important;transform:translateY(-1px)!important}.btn-secondary:hover{background-color:rgba(1,35,99,.05)!important;transform:translateY(-1px)!important}.hours{position:absolute!important;top:60%!important;right:20%!important;transform:translate(50%,-50%)!important;width:170px!important;align-items:center!important}.header [class*=position-absolute],.icon-container,.row.row1,.service-grid,.service-item,.service-title{position:relative!important}.hours h4{margin:0 0 8px!important;font-size:17px!important}.hours ul{list-style:none!important;margin:0!important;padding:0!important;display:flex!important;flex-direction:column!important;row-gap:2px!important}.hours li{display:flex!important;font-size:13px!important;line-height:1.3!important;column-gap:12px!important;justify-content:space-between!important}.service-grid a,.service-item,.service-item a{color:var(--text-white)!important;text-decoration:none!important}.hours .day{flex:0 0 72px!important}.hours .time{flex:0 0 80px!important;text-align:right!important}.hours li.today{font-weight:700!important}.service-grid{right:0!important;top:0!important;display:grid!important;grid-template-rows:auto!important;row-gap:45px!important;column-gap:45px!important;width:330px!important;background:#fff!important;border-radius:8px!important;box-sizing:border-box!important;justify-content:start!important;min-height:625px!important;margin:54px 0!important}.header,.service-item{flex-direction:column!important}.service-item{display:flex!important;align-items:center!important;justify-content:center!important;background:linear-gradient(145deg,#58a8bf 0,#5cb2d5 100%)!important;width:115px!important;height:115px!important;padding:6px!important;box-sizing:border-box!important;box-shadow:var(--shadow-sm)!important;transition:transform .2s,box-shadow .2s!important}.service-icon{-webkit-filter:brightness(0) saturate(100%) invert(18%) sepia(80%) saturate(2152%) hue-rotate(184deg) brightness(40%) contrast(102%)!important;-moz-filter:brightness(0) saturate(100%) invert(18%) sepia(80%) saturate(2152%) hue-rotate(184deg) brightness(40%) contrast(102%)!important;-ms-filter:brightness(0) saturate(100%) invert(18%) sepia(80%) saturate(2152%) hue-rotate(184deg) brightness(40%) contrast(102%)!important;-o-filter:brightness(0) saturate(100%) invert(18%) sepia(80%) saturate(2152%) hue-rotate(184deg) brightness(40%) contrast(102%)!important;filter:brightness(0) saturate(100%) invert(18%) sepia(80%) saturate(2152%) hue-rotate(184deg) brightness(40%) contrast(102%)!important;width:40px!important;height:40px!important;max-width:40px!important;max-height:40px!important;margin-bottom:8px!important;object-fit:contain!important}.service-title{font-size:11px!important;font-weight:450!important;color:#000!important;margin:0!important;word-break:break-word!important;width:100%!important;display:inline-block!important;text-decoration:none!important}.service-title br{display:block!important;content:''!important;margin-top:4px!important}@media(hover:hover) and (pointer:fine){.clinic-card:hover{transform:translateY(-4px) scale(1.02)!important;box-shadow:var(--shadow-lg)!important}.service-item:hover{transform:translateY(-4px) scale(1.03)!important;box-shadow:var(--shadow-lg)!important;text-decoration:none!important;color:var(--text-white)!important}}.icon-container{width:39px!important;height:39px!important;margin-bottom:8px!important;display:flex!important;align-items:center!important;justify-content:center!important}@media(max-width:1170px){.main-flex{align-items:center!important;display:flex!important;flex-direction:column-reverse!important;gap:32px!important;padding:10px 2%!important}.clinic-cards{align-items:center!important}.service-grid{position:relative!important;grid-template-columns:repeat(4,1fr)!important;grid-template-rows:repeat(2,auto)!important;row-gap:24px!important;column-gap:16px!important;margin:0!important;padding:0!important;width:90vw!important;max-width:95vw!important;min-width:70vw!important;min-height:275px!important;justify-content:center!important}.service-item{width:100%!important;max-width:120px!important;min-width:120px!important;height:120px!important;margin:0 auto!important}.service-item .service-title{font-size:13px!important}}@media(max-width:992px){.clinic-cards,.main-flex{gap:24px!important}.main-flex{align-items:center!important;padding:16px 3%!important}.service-grid{padding:20px!important;row-gap:32px!important;column-gap:24px!important;margin-top:40px!important;grid-template-columns:repeat(4,1fr)!important;min-height:auto!important}.service-item{width:100%!important;min-width:120px!important;max-width:120px!important;height:120px!important;min-height:120px!important;margin:0 auto!important}.clinic-content{padding:18px!important}.welcome-title{font-size:26px!important}}.contact-label{font-weight:600!important;display:inline-block!important;min-width:60px!important}@media(max-width:1000px){.clinic-content h3,.contact{text-align:center!important}.contact,.contact p,.image-wrapper{width:100%!important}.buttons a,.contact-label{font-weight:600!important}.clinic-content h3{margin-bottom:0!important}.clinic-card{flex-direction:column!important;max-width:100%!important;min-width:300px!important;margin:0 auto!important}.clinic-cards{max-width:500px!important;margin:0 auto!important}.contact p,.contact-label{margin-bottom:0!important}.image-wrapper{flex:0 0 auto!important;aspect-ratio:16/9!important}.info-row{display:flex!important;flex-direction:row!important;justify-content:space-between!important;padding-right:0!important;gap:20px!important;margin-top:16px!important;align-items:flex-start!important}.contact{flex:0 0 48%!important;flex-direction:column!important;align-items:center!important;min-width:235px!important}.contact p{text-align:left!important;align-self:flex-start!important;display:block!important}.contact-label{display:block!important}.contact p .address,.contact p a{display:block!important;margin-bottom:5px!important}@media (max-width:1000px){.clinic-card,.clinic-cards{max-width:500px!important;margin:0 auto!important}.clinic-card,.hours{position:relative!important}.contact p,.hours{align-self:flex-start!important}.contact,.contact p,.image-wrapper{width:100%!important}.clinic-card .buttons a,.clinic-content h3,.contact{text-align:center!important}.clinic-content h3{margin-bottom:0!important}.contact p,.hours h4{text-align:left!important}.clinic-card{flex-direction:column!important}.clinic-cards{min-width:500px!important}.contact p,.contact-label{margin-bottom:0!important}.image-wrapper{aspect-ratio:16/9!important}.info-row{display:flex!important;flex-direction:row!important;justify-content:space-between!important;padding-right:0!important;gap:20px!important;margin-top:16px!important;align-items:flex-start!important}.hours,.hours h4{margin-top:0!important}.contact{flex:0 0 48%!important;flex-direction:column!important;align-items:center!important}.contact p{display:block!important}.contact-label{display:block!important;font-weight:600!important}.contact p .address,.contact p a{display:block!important;margin-bottom:5px!important}.hours{top:auto!important;right:auto!important;transform:none!important;flex:0 0 48%!important;align-items:flex-start!important;padding:0!important;border-top:none!important}.clinic-card .contact .buttons{position:absolute!important;bottom:-37px!important;left:0!important;right:0!important;width:100%!important;display:flex!important;justify-content:space-evenly!important;gap:16px!important;margin:0!important;padding:0!important;z-index:5!important}.clinic-card .buttons a{flex:0 0 auto!important;width:auto!important;min-width:120px!important;max-width:160px!important;padding:8px 16px!important}.clinic-card{padding-bottom:60px!important}}.buttons a{flex:1!important;display:flex!important;align-items:center!important;justify-content:center!important;font-size:14px!important;padding:8px 12px!important;border-radius:6px!important;white-space:nowrap!important;color:var(--text-white)!important;text-decoration:none!important;box-shadow:var(--shadow-sm)!important;transition:transform .2s,box-shadow .2s!important}.buttons a:hover{transform:translateY(-3px)!important;box-shadow:0 7px 13px rgba(0,0,0,.12)!important}@media(max-width:768px){.welcome-header{margin-bottom:16px!important;text-align:center!important}.welcome-title{font-size:24px!important}.buttons a,.contact,.hours{font-size:14px!important}.clinic-content{padding:16px!important}.buttons{margin-top:20px!important;width:100%!important;justify-content:space-between!important}.buttons a{padding:8px 12px!important}}@media(max-width:480px){.info-row{flex-direction:column!important;gap:24px!important}.contact,.hours{flex:0 0 100%!important;width:100%!important}.hours{margin-top:0!important}.buttons{flex-direction:column!important;gap:10px!important}.buttons a{width:100%!important;justify-content:center!important}}@media(max-width:576px){.contact,.hours{font-size:13px!important}.main-flex{align-items:center!important;padding:12px 3%!important;gap:20px!important}.clinic-cards{gap:20px!important;padding:12px 0!important}.clinic-content,.service-grid{padding:16px!important}.clinic-content h3{font-size:20px!important;margin-bottom:8px!important}.info-row{gap:16px!important}.contact{gap:6px!important}.hours{margin-top:0!important}.hours li{font-size:11px!important}.hours .day{flex:0 0 65px!important}.hours .time{flex:0 0 70px!important}.buttons a{font-size:13px!important;padding:8px!important;justify-content:center!important;text-align:center!important}.service-grid{row-gap:24px!important;column-gap:20px!important;margin-top:24px!important;margin-bottom:24px!important}.service-item{width:120px!important;height:120px!important;min-width:120px!important;min-height:120px!important;max-width:120px!important}}@media (min-width:768px){.clinic-content h3{text-align:center!important;margin-bottom:0!important}}@media(max-width:375px){.main-flex{padding:10px 2%!important;align-items:center!important}.clinic-content,.service-grid{padding:12px!important}.welcome-title{font-size:20px!important}.welcome-subtitle{font-size:14px!important}.buttons{flex-direction:column!important;gap:8px!important}.buttons a{width:100%!important}.service-grid{grid-template-columns:repeat(1,145px)!important;justify-content:center!important}.service-item{width:145px!important;height:145px!important}.hours li{column-gap:8px!important}.clinic-card{border-radius:8px!important}}}footer.footer,footer.footer h4,footer.footer h5{color:#012363!important;font-family:filsonpro,sans-serif!important}.header,.navigation,.navigation__logo{height:auto!important}#buss-heading,#lund-heading,#malmo-heading{margin-top:6px!important}footer.footer{background-color:#eff9ff!important;padding:24px 16px!important;width:100%;box-sizing:border-box}.footer .container-fluid{padding-top:10px!important;padding-bottom:10px!important}.row.row1{margin-bottom:-214px!important;padding:0!important}.footer .block-container,.footer .row,.footer .textblock{margin-bottom:0!important;margin-top:0!important;margin:0}footer.footer h4,footer.footer h5{margin-top:1em!important;margin-bottom:.5em!important;line-height:1.3!important}footer.footer h4{font-size:18px!important;font-weight:600!important;margin-top:0!important}footer.footer h5{font-size:16px!important;font-weight:500!important}.footer h4[style*="color: #1f7ea4"]{margin-top:8px!important}footer.footer p{font-family:filsonpro,sans-serif!important;font-size:14px!important;color:#036!important;line-height:1.6!important;margin-top:0!important;margin-bottom:10px!important}.clinic-card:last-child,footer.footer .block.textblock:last-of-type,footer.footer .textblock__body>p:last-of-type,footer.footer p:last-child{margin-bottom:0!important}footer.footer a{font-family:filsonpro,sans-serif!important;color:var(--clr-body-text)!important;text-decoration:underline!important;font-weight:400!important}footer.footer a:hover{color:var(--clr-brand-500)!important;text-decoration:none!important}footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]){font-family:filsonpro,sans-serif!important;color:#044999!important;text-decoration:underline!important;font-size:inherit!important;font-weight:400!important}footer.footer p a:not([href^="tel:"]):not([href^="mailto:"]):hover{text-decoration:none!important}footer.footer a[href^="mailto:"],footer.footer a[href^="tel:"]{font-family:filsonpro,sans-serif!important;color:#06c!important;text-decoration:underline!important;font-size:inherit!important}footer.footer a[href^="mailto:"]:hover,footer.footer a[href^="tel:"]:hover{text-decoration:none!important;color:#004c99!important}footer.footer .block.textblock{margin-bottom:20px!important}footer.footer .block.textblock,footer.footer .textblock__body{background-color:transparent!important}footer.footer .textblock__body>div[style*=width][style*=height][style*=border-radius]{margin:10px auto!important}footer.footer .textblock__body>div[style*=width][style*=height][style*=border-radius] iframe{display:block!important;margin-left:auto!important;margin-right:auto!important}div[style*="text-align: center; margin: 24px"]{margin:0!important}nav.footer__link-nav{background-color:#1f7ea4!important;padding-top:15px!important;padding-bottom:15px!important;width:100%!important;box-sizing:border-box;font-family:filsonpro,sans-serif!important}nav.footer__link-nav ul#footer__links{list-style:none!important;padding-left:0!important;margin-top:0!important;margin-bottom:0!important;justify-content:center!important}nav.footer__link-nav ul#footer__links>li.col{flex-grow:0!important;flex-basis:auto!important;padding-top:5px!important;padding-bottom:5px!important;text-align:center}nav.footer__link-nav a.footer__link{font-family:filsonpro,sans-serif!important;color:#fff!important;text-decoration:none!important}nav.footer__link-nav a.footer__link:hover{text-decoration:underline!important}nav.footer__link-nav button#footer__links-toggle-button{background:0 0!important;border:1px solid #fff!important;padding:8px 10px!important;margin-left:15px;margin-bottom:10px!important;cursor:pointer!important}nav.footer__link-nav button#footer__links-toggle-button .hamburger-menu__line{background-color:#fff!important;display:block!important;height:2px!important;width:22px!important;margin:4px auto!important}@media (max-width:991.98px){nav.footer__link-nav ul#footer__links.open,nav.footer__link-nav ul#footer__links:target{flex-direction:column!important;align-items:center!important}nav.footer__link-nav ul#footer__links.open>li.col,nav.footer__link-nav ul#footer__links:target>li.col{width:100%!important;margin-bottom:5px!important}nav.footer__link-nav ul#footer__links.open>li.col:last-child,nav.footer__link-nav ul#footer__links:target>li.col:last-child{margin-bottom:0!important}}a,div,p,span{font-family:var(--ff-primary)!important;color:var(--clr-brand-100)!important;font-size:var(--fs-text);line-height:var(--lh-text)}.navigation__item--has-mega-menu .navigation__item-category .navigation__item-chevron--collapsed,.navigation__item--has-mega-menu .navigation__item-category .navigation__item-chevron--expanded{font-size:.75rem;margin-left:.5rem}.fa,.fab,.fad,.fal,.far,.fas{-webkit-font-feature-settings:normal!important;-moz-font-feature-settings:normal!important;font-feature-settings:normal!important;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-font-feature-settings:normal;font-feature-settings:normal;text-rendering:auto;display:inline-block!important;font-style:normal!important;font-variant:normal!important;text-rendering:auto!important;line-height:1!important;-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;font-size:1em!important;font-family:Font Awesome\ 5 Pro!important}.header,.navigation,.navigation__item,.navigation__logo{display:flex!important}@media (max-width:575.98px){.contact p,.textblock .contact h4,.textblock .contact h5,.textblock .contact p{text-align:left!important}.contact p{align-self:flex-start!important;width:100%!important;margin-bottom:0!important;display:block!important}}.header{align-items:stretch!important}.navigation{flex-direction:column!important;width:100%!important;padding:0!important;margin:0 auto!important}.navigation__logo{-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important;order:-1!important;width:100%!important;justify-content:flex-end!important;padding:30px 16px 25px!important;margin-left:6rem!important;box-sizing:border-box!important;line-height:normal!important}.navigation__logo>a,.navigation__logo>img,.navigation__logo>svg{margin-right:auto!important}.navigation__item{flex-grow:1!important;flex-basis:0!important;padding:0 .5rem!important;align-items:center!important;justify-content:center!important;border-left:none!important;border-right:none!important}.header .float-right,.header .pull-right{float:none!important}.clinic-card:nth-child(3) .hours{top:46%!important}.map-embed-container{--map-radius:12px;--map-shadow:0 4px 12px rgba(1, 35, 99, 0.1);--map-hover-shadow:0 7px 28px rgba(1, 35, 99, 0.18);--map-focus-outline-color:#007bff;--map-focus-shadow:0 0 0 3px hsla(0,0%,100%,.7),0 0 0 5px var(--map-focus-outline-color),var(--map-hover-shadow);--map-max-width:375px;--map-aspect-ratio:16/9;--map-vertical-margin:16px;--map-border-width:1px;--map-border-color:rgba(1, 35, 99, 0.15);--map-loading-text-color:#333;--map-loading-bg-color:#f0f2f5;--map-spinner-color:var(--map-focus-outline-color);--map-transition-duration:0.25s;position:relative;width:100%;max-width:var(--map-max-width);margin-top:var(--map-vertical-margin);margin-bottom:var(--map-vertical-margin);margin-left:0;margin-right:auto;border-radius:var(--map-radius);overflow:hidden;box-shadow:var(--map-shadow);border:var(--map-border-width) solid var(--map-border-color);aspect-ratio:var(--map-aspect-ratio);background-color:var(--map-loading-bg-color);transition:transform var(--map-transition-duration) ease,box-shadow var(--map-transition-duration) ease,border-color var(--map-transition-duration) ease}.clinic-card,.clinic-cards{min-width:0!important;max-width:100%!important}.map-embed-container:hover{transform:translateY(-4px);box-shadow:var(--map-hover-shadow);border-color:var(--map-spinner-color)}.map-embed-container:focus-visible{transform:translateY(-4px);box-shadow:var(--map-focus-shadow);border-color:var(--map-spinner-color);outline:0}.map-embed-frame{position:absolute;top:0;left:0;width:100%;height:100%;border:0;display:block;z-index:1}.map-embed-container::before{content:"";position:absolute;top:50%;left:50%;width:36px;height:36px;margin-top:-28px;margin-left:-18px;border:4px solid rgba(0,0,0,.1);border-left-color:var(--map-spinner-color);border-radius:50%;animation:.8s linear infinite map-spinner-rotation;z-index:0}.map-embed-container::after{content:"Laddar karta...";position:absolute;top:calc(50% + 10px);left:50%;transform:translateX(-50%);color:var(--map-loading-text-color);font-size:13px;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;z-index:0}@keyframes map-spinner-rotation{from{transform:rotate(0)}to{transform:rotate(360deg)}}@media (max-width:576px){.map-embed-container{--map-max-width:100%;margin-top:0;margin-bottom:0;border-radius:0;--map-border-width:0px}.map-embed-container::before{margin-top:-26px}.map-embed-container::after{font-size:12px;top:calc(50% + 8px)}}@media print{.map-embed-container{box-shadow:none!important;border:1px solid #bbb!important;page-break-inside:avoid;background-color:#fff!important}.map-embed-container::after,.map-embed-container::before{display:none!important}}.button-container{display:flex!important;align-items:center!important;justify-content:flex-start!important;width:100%!important;margin-top:-6px!important;margin-left:20%!important;margin-right:20%!important}.clinic-card:nth-child(3){margin-bottom:200px!important}.navigation__item .navigation__item-category{color:#012363!important;font-weight:500!important}.mega-menu__wrapper a.link{color:#fff!important}body.megamenu-visible .mega-container{overflow-y:auto;margin-top:50px}body,html{overflow-x:hidden!important}@media (max-width:767px){.welcome-header{min-width:0!important;padding-left:15px!important;padding-right:15px!important;box-sizing:border-box!important;margin-bottom:20px!important}.welcome-title{font-size:1.6em!important;line-height:1.2!important}.welcome-subtitle{font-size:1.1em!important;line-height:1.3!important}}.clinic-cards{width:100%!important;padding:0!important}.clinic-card{width:100%!important;box-shadow:0 2px 8px rgba(0,0,0,.1)!important;margin-bottom:20px!important}@media (max-width:1000px){.clinic-card .contact .buttons,.hours{position:relative!important;right:auto!important;margin-top:0!important}.clinic-cards{min-width:unset!important;max-width:600px!important;margin-left:auto!important;margin-right:auto!important}.clinic-card{flex-direction:column!important;min-width:280px!important;padding-bottom:20px!important}.image-wrapper{width:100%!important;flex:0 0 auto!important;aspect-ratio:16/9!important;max-height:280px}@media (max-width:480px){.image-wrapper{max-height:200px}}.clinic-content{padding:15px!important}.clinic-content h3{font-size:1.25em!important;text-align:center!important;margin-bottom:15px!important}.contact p,.hours h4{text-align:left!important;margin-bottom:8px!important}.info-row{flex-direction:row!important;justify-content:space-between!important;gap:20px!important;align-items:flex-start!important}.contact,.hours{flex:1 1 48%!important;max-width:48%!important}.contact{gap:5px!important}.contact p{display:flex!important;flex-direction:column!important}.contact p .contact-label{display:block!important;font-weight:600!important;margin-bottom:2px!important;font-size:.9em!important;color:var(--blue-dark)!important}.contact p .address-value,.contact p a{display:block!important;font-size:.95em!important;line-height:1.4!important;color:#004c99!important}.contact p .address{color:var(--blue-dark)!important}.hours{top:auto!important;transform:none!important;align-items:flex-start!important;padding:0!important}.hours h4{font-size:1.1em!important}.hours ul{width:100%!important}.hours li{font-size:.85em!important}.clinic-card .button-container{margin-left:0!important;margin-right:0!important;width:100%!important;padding:0!important;box-sizing:border-box;margin-top:15px!important}.clinic-card .contact .buttons{bottom:auto!important;left:auto!important;width:100%!important;padding:0!important;flex-direction:row!important;gap:10px!important;justify-content:center!important;z-index:1!important}.clinic-card .buttons a{flex:1 1 auto!important;min-width:100px!important;padding:10px 8px!important;font-size:.9em!important;min-height:40px!important;line-height:1.4!important}}@media (max-width:480px){.welcome-title{font-size:1.4em!important}.welcome-subtitle{font-size:1em!important}.clinic-content h3{font-size:1.15em!important;margin-bottom:10px!important}.info-row{flex-direction:column!important;gap:20px!important}.contact,.hours{max-width:100%!important;width:100%!important}.contact p .address,.contact p .address-value,.contact p .contact-label,.contact p a{font-size:.9em!important}.hours li{font-size:.8em!important}.clinic-card .contact .buttons{flex-direction:column!important;gap:8px!important}.clinic-card .buttons a{width:100%!important;padding:12px 10px!important;font-size:1em!important;min-height:44px!important}}@media (max-width:1170px){.main-flex{flex-direction:column-reverse!important;gap:30px!important;align-items:center!important;margin-bottom:40px!important}.service-grid{width:100%!important;max-width:90vw!important;margin-left:auto!important;margin-right:auto!important;min-height:auto!important;padding:15px!important;box-sizing:border-box!important}.service-item{max-width:none!important;min-width:100px!important;height:auto!important;aspect-ratio:1/1!important}}@media (max-width:992px){.service-grid{grid-template-columns:repeat(3,1fr)!important;column-gap:15px!important;row-gap:15px!important;padding:15px!important;max-width:700px!important;margin-top:20px!important;margin-bottom:20px!important}.service-item{padding:10px!important;min-height:100px!important}.service-icon{width:35px!important;height:35px!important;margin-bottom:5px!important}.service-item .service-title{font-size:12px!important}}@media (max-width:576px){.service-grid{grid-template-columns:repeat(2,1fr)!important;column-gap:15px!important;row-gap:15px!important;padding:10px!important;max-width:380px!important}.service-item{padding:8px!important;min-height:100px!important}.service-icon{width:30px!important;height:30px!important}.service-item .service-title{font-size:11px!important}}@media (max-width:375px){.service-grid{grid-template-columns:repeat(1,minmax(130px,160px))!important;justify-content:center!important;gap:15px!important;padding:10px!important;max-width:200px!important}.service-item{width:100%!important;height:auto!important;aspect-ratio:1/1!important;margin:0 auto!important;padding:12px!important}.service-item .service-title{font-size:12px!important}}.mobile-navigation__left .mobile-navigation__item#open-offside-menu{padding:10px!important}.hamburger-menu{width:24px!important;height:20px!important}.hamburger-menu__line{height:3px!important;margin:4px 0!important}.offside-navbar--menu__item a,.offside-navbar--menu__item span[role=button]{padding:14px 18px!important;font-size:1rem!important;display:block!important}.offside-navbar--menu.child-menu .offside-navbar--menu__item a{padding-left:30px!important}@media (max-width:767px){.main-flex{padding:20px 15px!important;gap:25px!important}footer.footer{padding:20px 15px!important}footer.footer h4{font-size:1.1em!important}footer.footer a,footer.footer p{font-size:.9em!important}.footer .map-embed-container{--map-max-width:100%!important;margin-top:15px!important;margin-bottom:15px!important}}nav.footer__link-nav ul#footer__links.open>li.col a.footer__link,nav.footer__link-nav ul#footer__links:target>li.col a.footer__link{padding:12px 15px!important;font-size:.95em!important}.main-flex{margin-bottom:180px!important}.navigation__left,.navigation__left--menu{display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:50px!important;padding-right:50px!important}.header-navigation-menu,.navigation__left--menu,nav.navigation__item--has-mega-menu .navigation__item-category{order:-1!important;display:flex!important;flex-direction:row!important;justify-content:center;width:100%!important;padding:0!important;margin:0!important;list-style:none!important;height:60px!important;flex-wrap:nowrap;align-content:center;align-items:center}body[class*=logo--normal] .navigation__logo{height:60px!important;padding-top:50px!important}
.place-title {
font-size: 1.111rem !important;
}