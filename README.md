# SolarNaija - Solar Equipment Reviews for Nigerian Homes

A comprehensive review platform for solar equipment in Nigeria, helping consumers make informed decisions about inverters, batteries, panels, solar kits, lanterns, and charge controllers.

## 🌟 Overview

SolarNaija provides honest, research-based reviews of solar equipment available in the Nigerian market. All reviews are based on manufacturer specifications and verified buyer feedback, with clear disclosure of our methodology.

**Live Site**: [https://solar-review-nigeria.vercel.app](https://solar-review-nigeria.vercel.app)

## 📦 Products Reviewed (14 Total)

### Solar Inverters (5)
- **Luminous Eco Watt 1100** - Budget pure sine wave inverter (₦185,000)
- **Felicity Solar 2KVA Hybrid** - Top-rated hybrid with MPPT (₦320,000)
- **Rubitek 3KVA Hybrid** - High-capacity hybrid system (₦420,000)
- **Blue Gate 1KVA** - Entry-level modified sine wave (₦95,000)
- **Sun King PowerPlay Pro** - Complete AC solar system with UPS (₦350,000)

### Solar Batteries (2)
- **Exide InvaMaster 200Ah** - Tubular lead-acid battery (₦210,000)
- **Pylontech US3000C** - Premium LiFePO4 lithium battery (₦680,000)

### Solar Panels (1)
- **Jinko Solar 450W** - High-efficiency monocrystalline panel (₦95,000)

### Solar Kits (3)
- **Felicity 3KVA Complete Kit** - All-in-one home system (₦1,250,000)
- **Sun King Home 40 Plus** - Multi-room lighting kit (₦59,040)
- **Sun King HomePlus Max** - Premium home system with TV support (₦185,000)

### Solar Lanterns (2)
- **Sun King Pico Plus** - Portable emergency lantern (₦10,000)
- **Sun King Pro 400** - Bright lantern with USB charging (₦37,255)

### Charge Controllers (1)
- **Epsolar Tracer 4210AN** - MPPT charge controller (₦75,000)

## 🏢 Brands Covered (9)

- Luminous
- Felicity Solar
- Exide
- Jinko Solar
- Rubitek
- Blue Gate
- Epsolar
- Pylontech
- **Sun King** (newly added)

## ✨ Key Features

### Product Reviews
- Detailed specifications tables
- Pros and cons analysis
- Honest verdicts based on specs and buyer feedback
- FAQs addressing common concerns
- Price tracking with last verified dates
- Related product recommendations

### Comparison Tools
- Side-by-side product comparison
- Dynamic specification union across products
- Accessible table design with proper headers
- Mobile-responsive layout

### Search & Navigation
- Real-time search with autocomplete
- Keyboard navigation (Arrow keys, Enter, Escape)
- Search by product name, brand, category, or specifications
- Category filtering with price range sliders
- Sorting by rating, price, or name

### Accessibility
- Full keyboard navigation support
- ARIA labels and roles throughout
- Screen reader friendly
- Focus indicators on all interactive elements
- Semantic HTML structure
- Proper heading hierarchy

### SEO Optimized
- Unique meta tags per page
- Structured data (JSON-LD) for products
- Canonical URLs
- Open Graph tags for social sharing
- Sitemap.xml included
- Robots.txt configured

## 🔗 Official Links

All products now link directly to:
- **Official manufacturer websites** (e.g., luminousnigeria.com, felicitysolar.com, ng.sunking.com)
- **Verified marketplace listings** (Jumia Nigeria, Konga, Jiji)
- **"Visit Official Website"** section on each product page

## 🛠️ Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **react-helmet-async** - SEO meta tags
- **Lucide React** - Icon library

## 📁 Project Structure

```
solar_review_nigeria/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with search
│   │   ├── Footer.tsx          # Footer with newsletter
│   │   ├── ProductCard.tsx     # Product display card
│   │   ├── StarRating.tsx      # Rating display component
│   │   ├── CookieConsent.tsx   # Cookie consent banner
│   │   └── ForexBanner.tsx     # Price fluctuation notice
│   ├── data/
│   │   └── products.ts         # All product data (14 products)
│   ├── lib/
│   │   ├── config.ts           # Site configuration
│   │   ├── format.ts           # Formatting utilities
│   │   ├── search.ts           # Search functionality
│   │   └── validation.ts       # Data validation
│   ├── pages/
│   │   ├── Home.tsx            # Homepage
│   │   ├── CategoryPage.tsx    # Category listings
│   │   ├── ProductReview.tsx   # Individual product reviews
│   │   ├── ComparisonPage.tsx  # Product comparison
│   │   ├── BuyingGuidePage.tsx # Buying guides
│   │   ├── BlogPage.tsx        # Blog posts
│   │   ├── BrandPage.tsx       # Brand pages
│   │   ├── AboutPage.tsx       # About & methodology
│   │   ├── ContactPage.tsx     # Contact form
│   │   ├── LegalPage.tsx       # Privacy, Terms, Disclaimer
│   │   └── NotFoundPage.tsx    # 404 page
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   ├── sitemap.xml
│   └── robots.txt
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
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

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Contact form - Get your key at https://web3forms.com
VITE_WEB3FORMS_KEY=your_web3forms_access_key

# Newsletter service endpoint
VITE_NEWSLETTER_API_URL=your_newsletter_api_url

# Site URL for canonical links
VITE_SITE_URL=https://solarnaija.com
```

### Connecting Forms

1. **Contact Form**: Sign up at [Web3Forms](https://web3forms.com) (free) and add your access key
2. **Newsletter**: Connect to Mailchimp, Brevo, or custom endpoint
3. **Analytics**: Add Google Analytics or Plausible to `index.html`

## 📊 Recent Updates

### Latest Additions (June 2026)

**New Products:**
- ✅ Added 5 Sun King products (lanterns, home systems, inverter)
- ✅ New "Solar Lanterns" category
- ✅ Sun King brand profile

**Product Links:**
- ✅ All 14 products linked to official manufacturer websites
- ✅ Verified marketplace links (Jumia, Konga, Jiji)
- ✅ "Visit Official Website" section on product pages

**Accessibility & UX:**
- ✅ Removed all emojis from UI
- ✅ Enhanced keyboard navigation
- ✅ Improved ARIA labels and roles
- ✅ Better focus management

**Code Quality:**
- ✅ Fixed contact form with proper error handling
- ✅ Improved search with consistent matching
- ✅ Enhanced comparison logic
- ✅ Better price formatting utilities
- ✅ Type-safe environment variables

## 📝 Content Guidelines

### Review Methodology

All reviews are based on:
- Published manufacturer specifications
- Verified buyer feedback from Nigerian platforms
- Consultation with solar installers
- Analysis of Nigerian operating conditions

**Important**: We do not claim hands-on testing unless explicitly stated. Our ratings reflect editorial assessments based on available data.

### Adding New Products

To add a new product, edit `src/data/products.ts`:

```typescript
{
  id: 'unique-product-id',
  name: 'Product Name',
  brand: 'Brand Name',
  category: 'inverters' | 'batteries' | 'panels' | 'solar-kits' | 'solar-lanterns' | 'charge-controllers',
  image: 'https://example.com/image.jpg',
  rating: 4.5, // 0-5
  price: 100000, // in NGN
  priceNote: 'Price verification note',
  verdict: 'Quick 2-3 sentence verdict',
  specs: { /* key-value pairs */ },
  pros: ['Pro 1', 'Pro 2'],
  cons: ['Con 1', 'Con 2'],
  reviewBody: 'Detailed review text',
  bestFor: ['Use case 1', 'Use case 2'],
  faqs: [{ question: 'Q?', answer: 'A' }],
  buyLinks: [
    { store: 'Store Name', url: 'https://...', isAffiliate: false }
  ],
  manufacturerUrl: 'https://official-website.com',
  ratingBreakdown: {
    performance: 4.5,
    durability: 4.0,
    valueForMoney: 4.5,
    easeOfInstallation: 4.0,
    batteryLife: 4.0 // optional
  },
  relatedProducts: ['other-product-id'],
  updatedAt: 'June 2026',
  basedOnSpecsAndFeedback: true
}
```

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
3. Update `VITE_SITE_URL` in environment variables

## 📈 SEO & Analytics

### Current SEO Features
- Per-page meta tags (title, description)
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data for products
- Canonical URLs
- Semantic HTML
- Sitemap.xml
- Robots.txt

### Adding Analytics

**Google Analytics:**
```html
<!-- Add to index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible (Privacy-friendly):**
```html
<!-- Add to index.html before </head> -->
<script defer data-domain="solarnaija.com" src="https://plausible.io/js/script.js"></script>
```

## 💰 Monetization

### Current Setup
- Affiliate links to Jumia, Konga, and other retailers
- Ready for Google AdSense integration
- Newsletter signup for email marketing

### Next Steps
1. Apply for affiliate programs (Jumia, Konga)
2. Apply for Google AdSense (requires Privacy Policy ✓)
3. Set up email marketing (Mailchimp/Brevo)
4. Consider sponsored content (clearly labeled)

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Product data sourced from official manufacturer websites and verified retailers
- Icons by [Lucide](https://lucide.dev/)
- Font: Inter by [Rasmus Andersson](https://rsms.me/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Contact

- **Email**: hello@solarnaija.com
- **GitHub**: [@ericprince957-cloud](https://github.com/ericprince957-cloud)

## 🔗 Quick Links

- [Live Demo](https://solar-review-nigeria.vercel.app)
- [Product Reviews](https://solar-review-nigeria.vercel.app/category/inverters)
- [Buying Guides](https://solar-review-nigeria.vercel.app/guides)
- [Compare Products](https://solar-review-nigeria.vercel.app/compare)
- [About & Methodology](https://solar-review-nigeria.vercel.app/about)

---

**Made with ☀️ for Nigerian solar consumers**

*Last updated: June 2026*
