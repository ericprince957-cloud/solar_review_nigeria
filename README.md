# SolarNaija — Solar Equipment Reviews for Nigerian Homes

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8.svg)](https://tailwindcss.com/)

> Honest solar equipment reviews for Nigerian homes and businesses. Helping Nigerians beat NEPA wahala by choosing the right solar setup.

## 📖 About

**SolarNaija** is an authority website that reviews, compares, and recommends solar power equipment (inverters, batteries, panels, charge controllers, complete solar kits) specifically for the Nigerian market. It helps Nigerian homeowners, small business owners, landlords, and middle-class buyers deal with unreliable grid electricity by choosing the right solar setup.

### 🎯 Target Audience
- Nigerian homeowners tired of fuel generators and rising petrol/diesel costs
- Small business owners (shop owners, salon owners, POS agents, welders) who need backup power
- Landlords installing solar for rental properties
- Middle-class Nigerians researching before a big purchase

## ✨ Features

### Core Pages
- **Home** — Hero section, top-rated products, latest reviews, quick category links, price guide table
- **Category Pages** — 5 categories with filters (price range in Naira, sort by rating/price/name)
- **Product Reviews** — 9 detailed reviews following a consistent template with specs, pros/cons, FAQs
- **Comparison Tool** — Side-by-side comparison of 2-3 products
- **Buying Guides** — 5 detailed guides for Nigerian-specific use cases
- **Blog/News** — Market updates, price changes, product launches
- **Brand Pages** — 8 brand profiles with product listings
- **About** — Mission, methodology, affiliate disclosure
- **Contact** — Working form with Web3Forms integration
- **Legal Pages** — Privacy Policy, Terms of Service, Affiliate Disclaimer, Methodology

### Technical Features
- 🔍 **Search with autocomplete** — Find products instantly
- ⚖️ **Product comparison** — Compare up to 3 products side-by-side
- 🎛️ **Filters & sorting** — By price, rating, capacity
- 📱 **Mobile-first design** — Optimized for Android phones with slow connections
- 🌐 **SEO optimized** — Per-page meta tags, structured data (JSON-LD), sitemap.xml, robots.txt
- 🍪 **Cookie consent** — GDPR-compliant cookie banner
- 💰 **Forex banner** — Site-wide price fluctuation notice
- 📧 **Newsletter signup** — Email subscription form
- 📊 **Analytics ready** — Google Analytics placeholder included
- 🔗 **Affiliate links** — Ready for Jumia/Konga affiliate IDs
- 📄 **404 page** — Custom not-found page
- ⚡ **Fast loading** — ~103KB gzipped JS bundle

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite 6** | Build tool & dev server |
| **React Router 6** | Client-side routing |
| **Tailwind CSS 4** | Utility-first styling |
| **Lucide React** | Icon library |
| **react-helmet-async** | Per-page SEO meta tags |
| **Supabase** | (Installed, ready for backend) |

## 📁 Project Structure

```
solar_review_nigeria/
├── public/
│   ├── sitemap.xml          # XML sitemap for search engines
│   └── robots.txt           # Crawler instructions
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation with search & mobile menu
│   │   ├── Footer.tsx       # Footer with newsletter & legal links
│   │   ├── ProductCard.tsx  # Reusable product card component
│   │   ├── StarRating.tsx   # Star rating display component
│   │   ├── CookieConsent.tsx # Cookie consent banner
│   │   └── ForexBanner.tsx  # Price fluctuation notice
│   ├── data/
│   │   └── products.ts      # All product data, categories, brands, guides
│   ├── pages/
│   │   ├── Home.tsx         # Landing page
│   │   ├── CategoryPage.tsx # Product category with filters
│   │   ├── ProductReview.tsx # Individual product review
│   │   ├── ComparisonPage.tsx # Side-by-side comparison tool
│   │   ├── BuyingGuidePage.tsx # Buying guides (list + individual)
│   │   ├── BlogPage.tsx     # Blog posts (list + individual)
│   │   ├── BrandPage.tsx    # Brand profiles
│   │   ├── AboutPage.tsx    # About us & methodology
│   │   ├── ContactPage.tsx  # Contact form
│   │   ├── LegalPage.tsx    # Privacy, Terms, Disclaimer, Methodology
│   │   └── NotFoundPage.tsx # 404 page
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind + custom theme colors
├── index.html               # HTML template with SEO meta tags
├── package.json
├── tsconfig.json
├── vite.config.js
├── README.md
├── LICENSE
├── DESCRIPTION.md           # Business description for Flippa/listing
├── CONTRIBUTING.md          # Contribution guidelines
├── CHANGELOG.md             # Version history
├── TODO.md                  # Roadmap & audit findings
├── SECURITY.md              # Security policy
├── .env.example             # Environment variables template
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ericprince957-cloud/solar_review_nigeria.git
cd solar_review_nigeria

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env.local

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory, ready to deploy.

### Preview Production Build

```bash
npm run preview
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file (see `.env.example`):

```env
# Contact form - Get your key at https://web3forms.com
VITE_WEB3FORMS_KEY=your_web3forms_access_key

# Newsletter - Mailchimp/Brevo API endpoint
VITE_NEWSLETTER_API_URL=your_newsletter_api_url

# Google Analytics - Replace with your tracking ID
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Supabase (optional - for backend storage)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Connecting Forms

1. **Contact Form**: Sign up at [Web3Forms](https://web3forms.com) (free), get your access key, and add it to `.env.local`
2. **Newsletter**: Connect to Mailchimp, Brevo, or a Supabase table
3. **Analytics**: Uncomment the GA script in `index.html` and add your tracking ID

### Affiliate Links

Update product `buyLinks` in `src/data/products.ts` with your actual affiliate URLs:
- Sign up for [Jumia Nigeria Affiliate Program](https://affiliate.jumia.com.ng/)
- Sign up for [Konga Affiliate Program](https://www.konga.com/affiliate)
- Replace placeholder URLs with your tracked links

## 🌍 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Push to GitHub
2. Connect repo at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Custom Domain

1. Register domain (e.g., solarnaija.com or solarnaija.ng)
2. Point DNS to your hosting provider
3. Update canonical URLs in `index.html` and page Helmet tags

## 📊 SEO Checklist

- [x] Per-page `<title>` and meta description (via react-helmet-async)
- [x] Open Graph tags for social sharing
- [x] Twitter Card meta tags
- [x] JSON-LD structured data (Product schema) on review pages
- [x] sitemap.xml with all pages
- [x] robots.txt
- [x] Canonical URLs
- [x] Semantic HTML
- [x] Lazy-loaded images
- [ ] Server-side rendering (consider for better indexing)
- [ ] Google Search Console verification
- [ ] Bing Webmaster Tools submission

## 📈 Analytics Setup

### Google Analytics
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID (G-XXXXXXXXXX)
3. Uncomment the GA script in `index.html`
4. Replace `G-XXXXXXXXXX` with your ID

### Alternative: Plausible (Privacy-friendly)
1. Sign up at [plausible.io](https://plausible.io)
2. Add the script to `index.html`

## 💰 Monetization

### Current Setup
- Affiliate links (Jumia, Konga) — ready to activate
- Ad placement spots — ready for AdSense

### Next Steps
1. Apply for [Google AdSense](https://adsense.google.com/) (requires Privacy Policy ✓)
2. Join Jumia/Konga affiliate programs
3. Add display ads in strategic positions
4. Consider sponsored content (clearly labeled)

## 🧪 Testing

```bash
# Type checking
npm run typecheck

# Build (includes production checks)
npm run build
```

## 📝 Content Management

Currently, all content is in `src/data/products.ts`. To add a new product:

```typescript
{
  id: 'unique-product-id',
  name: 'Product Name',
  brand: 'Brand Name',
  category: 'inverters', // or batteries, panels, solar-kits, charge-controllers
  image: '/path/to/image.jpg',
  rating: 4.5,
  price: 250000,
  priceNote: 'Prices fluctuate with forex rates. Last verified June 2026.',
  verdict: 'Quick 2-3 sentence verdict...',
  specs: { /* key-value pairs */ },
  pros: ['Pro 1', 'Pro 2'],
  cons: ['Con 1', 'Con 2'],
  reviewBody: 'Full review text...',
  bestFor: ['Use case 1', 'Use case 2'],
  faqs: [{ question: '...', answer: '...' }],
  buyLinks: [{ store: 'Jumia', url: 'https://...' }],
  ratingBreakdown: { performance: 4.5, durability: 4.0, valueForMoney: 4.5, easeOfInstallation: 4.0 },
  relatedProducts: ['other-product-id'],
  updatedAt: 'June 2026',
  basedOnSpecsAndFeedback: true,
}
```

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License — see [LICENSE](./LICENSE) for details.

## 🙏 Credits

- Product images generated with AI
- Icons by [Lucide](https://lucide.dev/)
- Font: Inter by [Rasmus Andersson](https://rsms.me/)
- Built with [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)

## 📞 Contact

- **Email**: hello@solarnaija.com
- **GitHub**: [@ericprince957-cloud](https://github.com/ericprince957-cloud)

## 🔗 Links

- [Live Demo](https://solarnaija.vercel.app) _(update with your URL)_
- [Project Description](./DESCRIPTION.md) — For Flippa/business listing
- [Roadmap & TODO](./TODO.md) — Audit findings and next steps
- [Changelog](./CHANGELOG.md) — Version history

---

**Made with ☀️ for Nigerian solar buyers**
