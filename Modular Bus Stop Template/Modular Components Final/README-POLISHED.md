# Polished Modular Bus Stop Template
## Praktikertjänst Vaccincenter Varvet

### Overview
This is a pixel-perfect, modular template system for the Vaccin- & Hälsobussen (Vaccine & Health Bus) location pages. The templates are based on the Praktikertjänst Vaccincenter Varvet website design and optimized for performance, accessibility, and responsiveness.

### Files Created

#### 1. `bus-stop-complete.html`
Complete, production-ready template for a bus stop page featuring:
- Full header with navigation menu
- Hero section with location-specific content
- Two-column layout (content + sidebar)
- Image galleries with hover effects
- Price table with toggle functionality
- Location schedule
- FAQ section
- Complete footer with contact info and maps

#### 2. `styles-polished.css`
Comprehensive stylesheet with:
- Modern CSS custom properties for theming
- Pixel-perfect typography using rem units (base 18px)
- PTJ brand colors and gradients
- Responsive design breakpoints
- Accessibility features
- Print styles
- Smooth animations and transitions

#### 3. `navigation.js`
JavaScript for interactive components:
- Mega menu navigation
- Price table toggle functionality
- FAQ accordion behavior
- Smooth scrolling
- Lazy image loading
- Mobile menu
- Keyboard navigation
- Screen reader announcements

#### 4. `header-footer.html`
Standalone header and footer template that can be included in any page.

### Key Features

#### Design
- **Pixel-Perfect**: Matches PTJ website design exactly
- **Brand Consistency**: Uses official PTJ colors (#012363, #4AA6C9, etc.)
- **Typography**: Filson Pro font with carefully crafted size hierarchy
- **Spacing**: Consistent spacing using custom properties

#### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- High contrast mode support
- Skip links
- ARIA labels and roles

#### Performance
- Lazy loading images
- Optimized CSS with minimal specificity
- Debounced resize events
- Intersection Observer for animations

#### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 991px, 1200px
- Touch-friendly interactive elements
- Flexible grid layout

### Usage

1. **Basic Implementation**
```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <link rel="stylesheet" href="styles-polished.css">
</head>
<body>
    <!-- Your content here -->
    <script src="navigation.js"></script>
</body>
</html>
```

2. **Customizing for Different Locations**
- Update the location name in `<h1>` and throughout content
- Replace bus images in `/Assets/` folder
- Update schedule table with location-specific dates
- Modify FAQ content as needed

3. **Price Table Toggle**
The price table supports three views:
- Ordinarie (Regular prices)
- Pensionär (10% discount)
- Student (15% discount)

4. **Adding New Vaccines**
Add rows to the price table:
```html
<tr>
    <td class="price-vaccine">Vaccine Name</td>
    <td class="price-val ord">Regular Price</td>
    <td class="price-val pen">Pensioner Price</td>
    <td class="price-val stu">Student Price</td>
</tr>
```

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 14+
- iOS Safari 14+
- Samsung Internet

### Color Palette
```css
--clr-primary: #012363;      /* PTJ Blue */
--clr-accent: #4AA6C9;       /* Light Blue */
--clr-body: #003366;         /* Dark Blue Text */
--clr-bg-alt: #eef5ff;       /* Light Blue Background */
--clr-bg-footer: #eff9ff;    /* Footer Background */
```

### Typography Scale
```css
h1: 2.6667rem (48px)
h2: 2rem (36px)  
h3: 1.5556rem (28px)
h4: 1.3333rem (24px)
h5: 1.2222rem (22px)
p: 1rem (18px)
```

### Maintenance Notes
1. Always test on actual devices, not just browser DevTools
2. Run accessibility audits after changes
3. Compress images before adding to `/Assets/`
4. Keep JavaScript progressive enhancement in mind
5. Test with keyboard navigation and screen readers

### Version
Version 2.0 - Polished & Pixel-Perfect
Last Updated: December 2024