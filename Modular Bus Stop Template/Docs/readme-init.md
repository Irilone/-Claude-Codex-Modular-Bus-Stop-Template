Here’s the patched **README\_INIT.md** (now explicitly calling out **Normalize.css 8.0.1** as the first step) followed by a short, side-car advisory on when you might *omit* either **Modernizr** or **Normalize**.

```markdown
/docs/README_INIT.md
# Vaccin- & Hälsobussen — Modular Bus-Stop Template · **FINAL SPEC**

> **Live reference**
> <https://www.ptj.se/vaccincenter-varvet/mottagningar/test/vaccin-och-halsobuss/buss2/vaccincenter-varvet/bussnu/>

---

## 0 · Canonical Folder Layout (2025-06-24)

```

Modular Bus Stop Template/
├── Assets/
│   ├── 1.webp
│   ├── 2.webp
│   └── 3.webp              # *archive only*
│
├── CSS/
│   ├── normalize-8.0.1.css  # ← **NEW • always imported first**
│   └── style.css            # design tokens & components
│
├── Docs/
│   ├── README\_INIT.md
│   ├── IMPLEMENTATION\_SUMMARY.md
│   └── CLAUDE.md
│
├── HTML/
│   ├── primary-content\*.html
│   ├── faq-section.html
│   ├── price-table.html
│   └── top-gallery.html     # ⚠️ **delete** (legacy)
│
├── Modular Components Final/
│   ├── index-a.html
│   ├── index-b.html
│   ├── faq-section.html
│   ├── price-table.html
│   ├── gallery-top.html     # ⚠️ **delete**
│   └── styles.css
│
└── Modernizr/
├── modernizr-config.json
└── modernizr-custom.js

````

*The temporary `/vvbuss/` clone living alongside this project is **not** part of the deliverable; treat it as reference only.*

---

## 1 · Purpose & Core Constraints
*(unchanged)*

---

## 2 · CSS Stack (layered)

| Layer        | File / Purpose                                  |
|--------------|-------------------------------------------------|
| **reset**    | **Normalize.css 8.0.1** → baseline consistency |
| **base**     | Root tokens, typography, layout primitives      |
| **vendors**  | *Optional* Modernizr class helpers              |
| **components** | Buttons, accordions, tables, image utilities |
| **utilities** | Helpers (`.float-left`, `.visually-hidden`, …) |

```css
/* style.css — ALWAYS begin with Reset */
@import url('./normalize-8.0.1.css');
/* …then layers continue here … */
````

> **Budget:** `normalize-8.0.1.css` (\~6 KB gz) + `style.css` must stay **≤ 45 KB** after minification.

---

## 3 → 7

\*(all previous sections remain identical, except that references to the removed
top-gallery files now read “delete”.)

---

```

---

### Side-car Advice — When to Skip Modernizr or Normalize

| Library | Keep it if… | Safe to skip when… | Typical weight |
|---------|-------------|--------------------|----------------|
| **Normalize.css 8.0.1** | You target editors on **IE 11 / old Safari** or need rock-solid form & typographic defaults out of the box. | You are *certain* the project runs only on evergreen Chromium/WebKit/Firefox engines and every component already zeroes out browser quirks. | ≈ 6 KB gz |
| **Modernizr (custom build)** | Your CSS/JS still branches on feature flags (e.g. `.webp`, `.no-details`). | No conditional classes are referenced anywhere — then it’s dead weight (delete Modernizr folder & request). | 3-4 KB gz per handful of tests |

**Rule of thumb**

* Keep **Normalize** unless you’re **fighting** for those last six kilobytes.
* Keep **Modernizr** only while at least one feature test actively guards a progressive-enhancement path; otherwise remove it and the extra network request vanishes.
```
