# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Vaccin- & Hälsobussen Modular Bus Stop Template** - a static HTML/CSS website template for a Swedish mobile healthcare vaccination service. The project uses modular, self-contained HTML components designed for CMS integration (Episerver/Optimizely).

## Commands

Since this is a static HTML/CSS project without a build system:

```bash
# No build commands - edit HTML/CSS files directly
# Open components in browser for testing:
open "Modular Bus Stop Template/Modular Components Final/index-a.html"  # Version with large images
open "Modular Bus Stop Template/Modular Components Final/index-b.html"  # Version with text-wrapped images

# Manual testing checklist:
# 1. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
# 2. Test responsive design at 320px, 768px, 1024px, 1440px
# 3. Test keyboard navigation and screen readers
# 4. Validate HTML and CSS
# 5. Check performance with Lighthouse
```

## Architecture & Structure

### Component Architecture
- **Modular HTML Components**: Each UI component is a self-contained HTML file with embedded `<style>` tags
- **No External Dependencies**: Components work standalone for easy CMS integration
- **Two Layout Variants**: 
  - `index-a.html`: Large centered images (75% width)
  - `index-b.html`: Text-wrapped smaller images (45% width)

### CSS Architecture
```
1. Reset Layer: normalize-8.0.1.css (always first)
2. Base Layer: CSS custom properties, typography, layout primitives
3. Components Layer: Buttons, accordions, tables, galleries
4. Utilities Layer: Helper classes (.float-left, .visually-hidden)
```

### Key Design Tokens
```css
--clr-primary: #012363      /* Primary blue */
--clr-body: #003366        /* Dark blue for body text */
--clr-accent: #4AA6C9      /* Light blue accent */
--font-family-base: 'filsonpro', sans-serif
--container-max-width: 900px
--content-max-width: 720px
```

### JavaScript Approach
- **Progressive Enhancement**: All features work without JavaScript
- **Vanilla JS Only**: No frameworks or libraries
- **Common Patterns**:
  - FAQ accordion with event delegation
  - Image lazy loading with Intersection Observer
  - Price table toggle with radio buttons

## Critical Constraints

1. **CSS Budget**: Total CSS must be ≤ 45 KB after minification
2. **Browser Support**: Must support IE 11 (via Modernizr + Normalize.css)
3. **No Build Step**: Components are production-ready as-is
4. **CMS Compatibility**: Designed for Episerver/Optimizely includes
5. **Accessibility**: WCAG AA compliance required
6. **Language**: All content in Swedish (lang="sv")

## Component Files

### Core Components (in `Modular Components Final/`)
- `index-a.html` / `index-b.html`: Main page layouts
- `primary-content.html`: Main vaccination information
- `faq-section.html`: Accordion FAQ component
- `price-table.html`: Interactive pricing calculator

### Working Files (in `HTML/`)
Individual component development files for testing and iteration

## Development Guidelines

### When Modifying Components
1. Maintain self-contained structure (embedded styles)
2. Test both layout variants (index-a and index-b)
3. Ensure mobile-first responsive design
4. Preserve accessibility features (semantic HTML, ARIA labels)
5. Keep JavaScript minimal and progressively enhanced

### Image Handling
- Use WebP format for performance
- Apply "elegant glow effect" (multi-layered box-shadow)
- Ensure all images are clickable and have proper alt text
- Images link to full-size versions

### Testing Checklist
1. Visual consistency across devices (320px to 1440px)
2. Keyboard navigation works throughout
3. Screen reader compatibility verified
4. All links and navigation validated
5. Performance metrics meet targets (Lighthouse)
6. Content displays correctly without JavaScript

## CMS Integration Notes

When integrating with Episerver/Optimizely:
1. Components use server-side includes or CMS blocks
2. Replace placeholder image URLs with CMS-managed assets
3. Ensure parent templates define CSS custom properties
4. Be aware of TinyMCE content filtering that may strip styles

## File Structure

```
Modular Bus Stop Template/
├── Assets/                    # WebP images (1.webp, 2.webp only)
├── CSS/                       # normalize-8.0.1.css + style.css
├── HTML/                      # Individual component development
├── Modular Components Final/  # Production-ready components
└── Modernizr/                # Feature detection config
```

## Quick Reference

- **Live Reference Site**: https://www.ptj.se/vaccincenter-varvet/mottagningar/test/vaccin-och-halsobuss/buss2/vaccincenter-varvet/bussnu/
- **Primary Component**: `primary-content.html` contains main vaccination info
- **Layout Decision**: Choose between index-a (large images) or index-b (text-wrapped)
- **Mobile Breakpoint**: Major responsive changes at 768px
- **Container Width**: Max 900px with 720px content width