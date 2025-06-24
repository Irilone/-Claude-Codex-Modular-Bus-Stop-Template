Absolutely! Here’s how you can **polish and clarify your documentation and requirements for the new two-image layouts** (for your Vaccin- och Hälsobussen project), referencing your latest input and site link:

---

## 🖼️ Image Layout Strategy (Final Polish)

**There are two layout variants for presenting the bus images. Choose the version that best fits your content density and design taste.**

### **Version 1: Large, Prominent Images**

* **Purpose:** Strong visual impact; gallery-style.
* **Image Sizing:**

  * Both images are large, each up to **75% width of the content area** (capped for mobile).
  * Images are centered and each occupies its own row—no text wrapping.
* **Placement:**

  * **Image 1:** Appears directly beneath the page ingress (introduction/lead).
  * **Image 2:** Appears further down, after the “Why Choose Us?” section.
* **Accessibility:**

  * Both images are clickable, linking to their full-size versions.
  * Each has descriptive alt text and `aria-label` attributes for assistive tech.

### **Version 2: Integrated, Text-Wrapped Images**

* **Purpose:** More text-centric; images blend with content for a denser, editorial feel.
* **Image Sizing:**

  * Images are **smaller**—no more than **45% width of the content area**.
  * Images are floated left or right and allow text to wrap beside them on desktop.
* **Placement:**

  * **Image 1:** Appears just after the ingress, wrapped by the first text block.
  * **Image 2:** Appears further down, embedded within a later paragraph or section.
* **Accessibility:**

  * Same requirements as above (alt text, aria-label, links to full-size).

---

### **Technical Implementation Notes**

* **No top gallery:** Images are placed directly in content flow as described—no separate “gallery” module at the top.
* **CMS Compatibility:**

  * Both versions must work in Episerver/Optimizely and be robust against CMS content filtering (as per your migration notes).
* **Responsive:**

  * On mobile, both layouts must stack images above text for full readability.
* **Styling:**

  * Use `.bus-image-large` and `.bus-image-inline` (or similar) utility classes to toggle between the two styles.
  * Leverage CSS custom properties and box-shadow for polish and brand consistency.

---

### **Design QA Checklist (Images Section)**

1. **Correct Version Applied:** Confirm which layout is in use (large/centered or inline/wrapped).
2. **Width on Desktop:**

   * Version 1: \~75% of content width, centered.
   * Version 2: ≤45% of content width, aligned with text flow.
3. **Full-Size Linking:** Clicking opens original image (in new tab or lightbox).
4. **Alt Text/ARIA:** All images have meaningful `alt` and `aria-label`.
5. **Mobile:** Both images are 100% width and stack above text.
6. **No Gallery on Top:** Confirm no redundant gallery section.
7. **Accessibility:** Tab order, keyboard navigation, and screen reader experience are tested.

---

### **Example: CSS Utility Classes**

```css
/* For Version 1: Large, centered images */
.bus-image-large {
  display: block;
  width: 75%;
  max-width: 600px;
  margin: 1.5rem auto;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
}

/* For Version 2: Inline images with text wrap */
.bus-image-inline {
  display: block;
  width: 45%;
  max-width: 340px;
  float: right; /* or left as needed */
  margin: 0.5rem 0 1rem 1.5rem; /* adjust as needed */
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}
@media (max-width: 768px) {
  .bus-image-large, .bus-image-inline {
    float: none;
    width: 100%;
    margin: 1rem auto;
  }
}
```

---

### **How to Specify Which Version to Use**

* In your documentation, **explicitly state “This is Version 1” or “This is Version 2” at the start of the relevant section or file**.
* Or, use a config toggle or CMS property if your system supports it.

---

## **Reference for Implementation**

* Design and layout should match the **latest live example**:
  [https://www.ptj.se/vaccincenter-varvet/mottagningar/test/vaccin-och-halsobuss/buss2/vaccincenter-varvet/bussnu/](https://www.ptj.se/vaccincenter-varvet/mottagningar/test/vaccin-och-halsobuss/buss2/vaccincenter-varvet/bussnu/)
* The “no top gallery, only inline images” pattern is now the canonical approach.

---

**Ready for developer handoff and final QA. Let me know if you want a concise code sample, a QA checklist in table format, or a summary blurb for your README!**
