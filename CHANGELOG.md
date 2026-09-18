# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Backend integration with Supabase
- Admin dashboard for content management
- Video reviews integration
- Solar calculator tool
- Installer directory
- User reviews and comments
- Multi-language support

## [1.2.0] - 2026-06-15

### Added
- Cookie consent banner for GDPR compliance
- Forex price fluctuation banner (site-wide)
- 404 Not Found page with helpful links
- Legal pages: Privacy Policy, Terms of Service, Affiliate Disclaimer, Methodology
- JSON-LD structured data (Product schema) on review pages
- Lazy loading for images (performance optimization)
- Visible "last updated" timestamp on review pages
- Methodology disclosure on each review page

### Changed
- Updated all product reviews to be transparent about methodology (specs + buyer feedback)
- Removed fabricated "tested in Nigeria" claims
- Replaced generic stock photos with AI-generated product images
- Updated trust signals to reflect actual methodology
- Improved About page with honest methodology description

### Fixed
- Contact form now submits to Web3Forms (was previously non-functional)
- Newsletter form shows proper feedback
- All product images now load correctly

## [1.1.0] - 2026-06-10

### Added
- Per-page SEO meta tags using react-helmet-async
- Open Graph tags for social sharing
- Twitter Card meta tags
- sitemap.xml with all pages
- robots.txt for search engine crawlers
- Canonical URLs on all pages
- Comparison tool for side-by-side product evaluation
- Search with autocomplete functionality
- Filter and sort system on category pages
- Newsletter signup form in footer

### Changed
- Improved mobile navigation menu
- Enhanced product card design
- Updated color palette for better brand consistency
- Optimized bundle size (reduced from 120KB to 103KB gzipped)

### Fixed
- Fixed routing issues with nested pages
- Corrected product category counts
- Improved form validation

## [1.0.0] - 2026-06-01

### Added
- Initial release
- Home page with hero section, top-rated products, latest reviews
- 5 category pages (Inverters, Batteries, Panels, Solar Kits, Charge Controllers)
- 9 detailed product reviews with consistent template
- 5 buying guides for Nigerian-specific use cases
- 4 blog posts covering market updates
- 8 brand profile pages
- About page with mission and methodology
- Contact page with form
- Responsive design (mobile-first)
- React Router for client-side navigation
- TypeScript for type safety
- Tailwind CSS for styling
- Product data structure with specs, pros/cons, FAQs
- Star rating system
- Price display in Naira (₦)

### Technical
- React 18.2
- TypeScript 5.0
- Vite 6.4
- React Router 6.8
- Tailwind CSS 4.1
- Lucide React for icons
- react-helmet-async for SEO

---

## Version Guidelines

### Major (X.0.0)
- Breaking changes
- Major feature additions
- Architecture changes

### Minor (0.X.0)
- New features (backward compatible)
- Significant improvements
- New pages or sections

### Patch (0.0.X)
- Bug fixes
- Minor improvements
- Content updates
- Performance optimizations

---

## Release Process

1. Update version in `package.json`
2. Update this CHANGELOG
3. Commit changes
4. Create git tag: `git tag v1.2.0`
5. Push tag: `git push origin v1.2.0`
6. Deploy to production
7. Create GitHub release with notes

---

**Note**: This project follows semantic versioning. See [semver.org](https://semver.org/) for details.
