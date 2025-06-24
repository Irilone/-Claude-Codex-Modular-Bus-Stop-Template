Here’s a polished version of your README/init document, aligned with the latest design and clarified for two image layout versions:

---

```markdown
# Modular Bus Stop Template – Claude Code Opus 4

*Project URL:*
https://www.ptj.se/vaccincenter-varvet/mottagningar/test/vaccin-och-halsobuss/buss2/vaccincenter-varvet/bussnu/

A clean, accessible, and CMS-friendly HTML/CSS template—now updated to match the latest design on the live site. Includes two responsive image layout variants:
1. **Large-centered images (≈75% width)**: full-width row, centered below the header or further down.
2. **Wrapped smaller images (≈45% width)**: integrated into text flow, offering a more narrative style.

---

## 🔍 What’s New

- **Design synced with live site:** layout, heading style, color palette, and spacing reflect the PTJ staging URL above.
- **Two layout variants:**
  - **Variant A (Large images):** promotes visual impact with images spanning 75% width, centered in full rows.
  - **Variant B (Text-wrapped):** images sized to ~45% width, right or left aligned with text wrapping.

---

## 🛠️ File Structure

```

/
├── css/
│   └── styles.css            # Core styles, variables, responsive utilities
├── variants/
│   ├── variant-a.html        # Layout with large-centered images
│   └── variant-b.html        # Text-wrapped smaller images variant
└── js/
└── progressive.js        # Lazy-load or fade-in script (optional)

````

---

## 🖼️ Variant A: Large-Centered Images

```html
<header><!-- site header here --></header>

<section class="hero py-4">
  <img src="..." alt="Bus in front of tent" class="image-large mb-4">
  <img src="..." alt="Staff assisting public" class="image-large">
</section>

<main>
  <h1>Vaccin- och Hälsobussen – Varvet</h1>
  <p>Detailed description here…</p>
  <!-- Rest of the content -->
</main>
````

**Key CSS:**

```css
.image-large {
  width: 75%;
  display: block;
  margin: 0 auto 1.5rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  loading: lazy;
}
```

---

## 🎯 Variant B: Text-Wrapped Images

```html
<main>
  <h1>Vaccin- och Hälsobussen – Varvet</h1>
  <p>
    <img src="..." alt="Bus and tent" class="image-wrap-right mr-3 mb-3">
    Introductory content flows around the image in a conversational style...
  </p>
  <p>More content continues here…</p>
  <img src="..." alt="Public interaction" class="image-wrap-left ml-3 mb-3">
  <p>Final paragraph wrap with aligned image to keep layout consistent.</p>
</main>
```

**CSS:**

```css
.image-wrap-right, .image-wrap-left {
  width: 45%;
  float: right; /* or left */
  margin: 0 0 1rem 1rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
}
.image-wrap-left {
  float: left;
  margin: 0 1rem 1rem 0;
}
@media (max-width: 767px) {
  .image-wrap-right, .image-wrap-left {
    width: 100%;
    float: none;
    margin: 0 0 1rem;
  }
}
```

---

## ⚙️ Integration & CMS Notes

* Use your CMS’s include or partial syntax for headers/footers and content areas.
* Adjust image paths per CMS file structure (default to `/img/...`).
* No external JS frameworks—only lightweight lazy-loading or fade-in scripts are used—and everything works without JS if stripped out.

---

## ✅ Accessibility & Responsiveness

* **WCAG AA compliance**: sufficient contrast, alt text, focus states respected.
* **Semantic HTML**: correct heading levels and landmarks.
* **Responsive breakpoints** ensure layout adapts for mobile vs. desktop.
* **Lazy-loading**: `loading="lazy"` added to all images.

---

## Performance & Optimization

* One central stylesheet with custom properties for theming.
* CSS cascade ensures CMS injections don’t override critical styles.
* Minimal JS (optional) for enhancements—no reliance on heavy libraries.
* Critical CSS can be inlined; rest can be deferred to optimize load performance.

---

## 🧪 QA & Testing Checklist

* [ ] Variant A and B render as expected on desktop & mobile.
* [ ] Images are sized, centered/wrapped per design spec.
* [ ] Content matches live design: typography, spacing, headings.
* [ ] Alt attributes present and descriptive.
* [ ] Focus states visible and keyboard navigation intact.
* [ ] All CMS includes, image paths, and variables resolved correct.
* [ ] Performance check: CSS file size <45 KB, JS minimal.
* [ ] Accessibility passes with Lighthouse / Axe.

---

## 🚀 Next Steps

* Finalize Figma style asset update (colors, fonts, spacing).
* Update staging with both variants for internal preview.
* Run accessibility audit and address any issues.
* Train editorial team on choosing between variants per use case.
* Plan production handoff, documentation, and maintenance guide.

---

**Take a deep breath and work on this problem step-by-step.**

```

```
