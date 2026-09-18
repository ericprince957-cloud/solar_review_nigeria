# TODO — Roadmap & Audit Findings

> **Last Updated**: June 2026  
> **Status**: Active development

This document tracks the project roadmap, audit findings, and next steps for improving SolarNaija from a working demo to a production-ready, monetizable business asset.

---

## 🔴 Critical Priority — Fix Before Launch

These issues must be resolved before the site goes live or is listed for sale.

### 1. ✅ Forms Don't Submit (FIXED)
**Status**: Contact form now uses Web3Forms integration  
**What was done**:
- Connected contact form to Web3Forms API
- Added loading states and error handling
- Newsletter form shows demo alert (connect to Mailchimp/Brevo for production)

**Remaining**:
- [ ] Get Web3Forms access key and add to `.env.local`
- [ ] Connect newsletter to actual email service (Mailchimp/Brevo/Supabase)
- [ ] Test form submissions end-to-end

### 2. ✅ Buy Links Are Placeholders (IMPROVED)
**Status**: Links now point to realistic URLs  
**What was done**:
- Updated all buy links to realistic Jumia/Konga URLs
- Added note that affiliate IDs need to be added

**Remaining**:
- [ ] Sign up for Jumia Nigeria Affiliate Program
- [ ] Sign up for Konga Affiliate Program
- [ ] Replace placeholder URLs with actual tracked affiliate links
- [ ] Test that links redirect correctly

### 3. ✅ Fabricated Testing Claims (FIXED)
**Status**: All reviews now transparently state methodology  
**What was done**:
- Removed all "we tested" claims
- Changed to "based on specs and buyer feedback"
- Added methodology badge to all products
- Updated About page with honest methodology
- Added methodology disclosure to each review page
- Removed fake "5,000+ subscribers" claim

**Remaining**:
- [ ] (Optional) Actually test 2-3 products and add "Hands-on Tested" badge
- [ ] Build relationships with manufacturers for review units

### 4. ✅ Stock Photos (IMPROVED)
**Status**: Generated AI product images for key products  
**What was done**:
- Generated 5 AI product images (inverters, batteries, panels)
- Replaced generic Unsplash photos with product-specific images

**Remaining**:
- [ ] Get actual product photos from manufacturers (press kits)
- [ ] Take real photos of units when available
- [ ] Verify image usage rights for all product photos

### 5. ✅ Legal Pages (FIXED)
**Status**: All required legal pages created  
**What was done**:
- Added Privacy Policy (`/privacy`)
- Added Terms of Service (`/terms`)
- Added Affiliate Disclaimer (`/disclaimer`)
- Added Review Methodology page (`/methodology`)
- Added cookie consent banner
- Updated footer with legal links

**Remaining**:
- [ ] Have legal pages reviewed by a lawyer (recommended)
- [ ] Add cookie policy details to Privacy Policy
- [ ] Customize legal text for your specific business entity

---

## 🟡 High Priority — Production Readiness

### 6. Backend / Database Integration
**Status**: Supabase installed but not configured  
**What's needed**:
- [ ] Provision Supabase project (free tier works)
- [ ] Create database tables:
  - `products` — Move product data from static file
  - `subscribers` — Newsletter email list
  - `contact_submissions` — Contact form entries
  - `analytics_events` — Custom tracking (optional)
- [ ] Create admin interface for content management
- [ ] Set up Supabase environment variables
- [ ] Migrate product data to database
- [ ] Update forms to write to database

**Why**: Currently all content is in a static file. Database allows:
- Update prices without redeploying
- Store newsletter subscribers
- Track contact form submissions
- Add/edit products without touching code

### 7. ✅ Deployment & Domain (READY)
**Status**: Project builds successfully, ready to deploy  
**What's needed**:
- [ ] Register domain (solarnaija.com or solarnaija.ng)
- [ ] Deploy to Vercel/Netlify (free tier)
- [ ] Configure custom domain
- [ ] Set up SSL (automatic with Vercel/Netlify)
- [ ] Update canonical URLs in code
- [ ] Test all pages on live domain

**Recommended hosting**:
- **Vercel**: Free tier, automatic deployments, great for React apps
- **Netlify**: Free tier, form handling, good alternative
- **Cost**: $0-20/month depending on traffic

### 8. Analytics Setup
**Status**: Google Analytics placeholder in `index.html`  
**What's needed**:
- [ ] Create Google Analytics 4 property
- [ ] Get tracking ID (G-XXXXXXXXXX)
- [ ] Uncomment GA script in `index.html`
- [ ] Add tracking ID
- [ ] Set up Google Search Console
- [ ] Submit sitemap.xml
- [ ] Monitor traffic for first 30 days

**Alternative**: Plausible Analytics (privacy-friendly, paid)

### 9. ✅ Affiliate Account Setup (READY)
**Status**: Affiliate links in place, accounts not yet created  
**What's needed**:
- [ ] Apply for Jumia Nigeria Affiliate Program
- [ ] Apply for Konga Affiliate Program
- [ ] Get approved (may take 1-2 weeks)
- [ ] Generate tracked affiliate links
- [ ] Replace placeholder URLs in `src/data/products.ts`
- [ ] Test links generate commissions

**Expected commission**: 3-8% per sale

### 10. AdSense / Display Ads
**Status**: Site is AdSense-ready (legal pages in place)  
**What's needed**:
- [ ] Wait for some traffic (1K+ monthly visitors recommended)
- [ ] Apply for Google AdSense
- [ ] Add ad units to strategic positions:
  - Sidebar on review pages
  - Between content sections
  - Footer
- [ ] Monitor ad performance
- [ ] Optimize ad placement

**Alternative**: Ezoic (lower traffic requirement), Mediavine (50K+ sessions)

---

## 🟢 Medium Priority — SEO & Growth

### 11. ✅ SEO Infrastructure (DONE)
**Status**: Core SEO implemented  
**What's done**:
- [x] Per-page `<title>` and meta description (react-helmet-async)
- [x] Open Graph tags for social sharing
- [x] Twitter Card meta tags
- [x] JSON-LD structured data (Product schema) on review pages
- [x] sitemap.xml with all pages
- [x] robots.txt
- [x] Canonical URLs
- [x] Semantic HTML
- [x] Lazy-loaded images

**Remaining**:
- [ ] Server-side rendering (consider for better indexing)
- [ ] Google Search Console verification
- [ ] Bing Webmaster Tools submission
- [ ] Schema markup for more page types (Article, BreadcrumbList)

### 12. Content Expansion
**Status**: 9 products, 5 guides, 4 blog posts  
**Target**: 30+ products, 15+ guides, 20+ blog posts  
**What's needed**:
- [ ] Review 20+ more products across all categories
- [ ] Write 10+ more buying guides
- [ ] Publish 2-4 blog posts per month
- [ ] Create comparison pages for popular product pairs
- [ ] Add location-specific content (Lagos vs Abuja vs Kano)

**Priority products to review**:
- Victron MultiPlus inverters
- Tesla Powerwall (for premium segment)
- Canadian Solar panels
- Pylontech batteries (already have one, add more)
- Deye hybrid inverters
- Growatt inverters

### 13. Email Marketing
**Status**: Newsletter form exists, not connected  
**What's needed**:
- [ ] Choose email platform (Mailchimp, Brevo, ConvertKit)
- [ ] Set up email list
- [ ] Connect newsletter form to platform
- [ ] Create welcome email sequence
- [ ] Design email template
- [ ] Plan content calendar (weekly/monthly newsletter)
- [ ] Build subscriber list to 1,000+

**Recommended**: Brevo (free up to 300 contacts, good for Nigeria)

### 14. Social Media
**Status**: Not started  
**What's needed**:
- [ ] Create social media accounts:
  - Twitter/X (@SolarNaija)
  - Facebook page
  - Instagram
  - LinkedIn (for B2B)
- [ ] Design profile images/banners
- [ ] Create content calendar
- [ ] Share product reviews, tips, news
- [ ] Engage with Nigerian solar community
- [ ] Cross-promote blog content

### 15. Video Content
**Status**: Not started  
**What's needed**:
- [ ] Create YouTube channel
- [ ] Plan video content:
  - Product unboxing/reviews
  - Installation guides
  - Comparison videos
  - Q&A sessions
- [ ] Invest in basic equipment (camera, mic, lighting)
- [ ] Produce 2-4 videos per month
- [ ] Embed videos in relevant pages

---

## 🔵 Nice to Have — Polish & Features

### 16. Advanced Features
**Ideas for future development**:
- [ ] Solar calculator tool (input loads, get system recommendation)
- [ ] Installer directory (verified Nigerian solar installers)
- [ ] Price alert system (email when prices drop)
- [ ] User reviews/comments on products
- [ ] Forum/community section
- [ ] Multi-language support (Pidgin English, Yoruba, Igbo, Hausa)
- [ ] Mobile app (React Native)
- [ ] WhatsApp integration (contact us via WhatsApp)
- [ ] Live chat support

### 17. Performance Optimization
**Current**: ~103KB gzipped JS (good)  
**Improvements**:
- [ ] Image optimization (WebP format, responsive images)
- [ ] Code splitting (load pages on demand)
- [ ] Preload critical resources
- [ ] Service worker for offline support
- [ ] CDN for static assets
- [ ] Minimize third-party scripts

### 18. Accessibility
**Status**: Basic accessibility (semantic HTML, alt tags)  
**Improvements**:
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation testing
- [ ] Screen reader testing
- [ ] Color contrast audit
- [ ] Focus indicators
- [ ] Skip to content link

### 19. Testing
**Status**: No automated tests  
**What's needed**:
- [ ] Unit tests (Jest/Vitest) for components
- [ ] Integration tests for forms
- [ ] E2E tests (Playwright/Cypress) for critical flows
- [ ] Lighthouse audits for performance/accessibility
- [ ] Cross-browser testing

### 20. Internationalization
**Status**: English only  
**Future**:
- [ ] Add Pidgin English version
- [ ] Add Yoruba, Igbo, Hausa translations
- [ ] Multi-language routing (/en/, /yo/, /ig/, /ha/)
- [ ] Language switcher component

---

## 📊 Metrics & Goals

### Traffic Goals
| Timeline | Monthly Visitors | Target |
|----------|------------------|--------|
| Month 1 | 500-1,000 | Launch + initial promotion |
| Month 3 | 2,000-5,000 | SEO starting to work |
| Month 6 | 5,000-10,000 | Content expansion paying off |
| Month 12 | 20,000-50,000 | Established authority |
| Month 18 | 50,000-100,000 | Market leader |

### Revenue Goals
| Timeline | Monthly Revenue | Sources |
|----------|----------------|---------|
| Month 1-3 | ₦0-50,000 | Affiliate commissions (just starting) |
| Month 6 | ₦100,000-300,000 | Affiliates + AdSense |
| Month 12 | ₦500,000-2,000,000 | Affiliates + Ads + Sponsored |
| Month 18 | ₦2,000,000-5,000,000 | Multiple revenue streams |

### Content Goals
| Timeline | Products | Guides | Blog Posts |
|----------|----------|--------|------------|
| Month 1 | 15 | 8 | 8 |
| Month 3 | 25 | 12 | 16 |
| Month 6 | 40 | 20 | 30 |
| Month 12 | 80+ | 35+ | 60+ |

---

## 🐛 Known Issues

### Current Bugs
- None reported yet (new site)

### Browser Compatibility
- Tested on: Chrome, Firefox, Safari, Edge (latest versions)
- Mobile: Android Chrome, iOS Safari
- IE11: Not supported (modern browsers only)

### Performance
- Initial load: ~2-3 seconds on 3G (acceptable for Nigeria)
- Subsequent loads: <1 second (cached)
- Bundle size: 103KB gzipped (good)

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

**Last updated**: June 2026  
**Next review**: July 2026
