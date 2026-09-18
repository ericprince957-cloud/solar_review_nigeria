import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const pages: Record<string, { title: string; content: JSX.Element }> = {
  privacy: {
    title: 'Privacy Policy',
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p><strong>Last updated:</strong> June 1, 2026</p>

        <h2 className="text-xl font-bold text-gray-900">1. Introduction</h2>
        <p>SolarNaija ("we," "our," or "us") operates the website solarnaija.com. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.</p>

        <h2 className="text-xl font-bold text-gray-900">2. Information We Collect</h2>
        <p>We may collect the following information:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Contact information:</strong> Name, email address, and message content when you use our contact form</li>
          <li><strong>Newsletter data:</strong> Email address when you subscribe to our newsletter</li>
          <li><strong>Usage data:</strong> Pages visited, time spent on pages, browser type, and device information (collected via analytics)</li>
          <li><strong>Cookies:</strong> Small data files stored on your device (see Cookie section below)</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To respond to your inquiries and contact form submissions</li>
          <li>To send newsletter updates (only if you explicitly subscribe)</li>
          <li>To analyze website usage and improve our content</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">4. Cookies</h2>
        <p>We use cookies for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
          <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (Google Analytics or similar)</li>
          <li><strong>Affiliate cookies:</strong> Some affiliate links may set tracking cookies (managed by the affiliate network, not us)</li>
        </ul>
        <p>You can control cookies through your browser settings. Disabling cookies may affect website functionality.</p>

        <h2 className="text-xl font-bold text-gray-900">5. Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Analytics:</strong> Google Analytics or Plausible for website traffic analysis</li>
          <li><strong>Hosting:</strong> Vercel/Netlify for website hosting</li>
          <li><strong>Forms:</strong> Form service (e.g., Web3Forms, Formspree) for contact form processing</li>
          <li><strong>Affiliate networks:</strong> Jumia, Konga affiliate programs</li>
        </ul>
        <p>Each service has its own privacy policy. We encourage you to review them.</p>

        <h2 className="text-xl font-bold text-gray-900">6. Data Retention</h2>
        <p>We retain contact form submissions for up to 12 months. Newsletter subscriber data is retained until you unsubscribe. Analytics data is retained according to the analytics provider's policy.</p>

        <h2 className="text-xl font-bold text-gray-900">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Unsubscribe from newsletters at any time</li>
          <li>Opt out of analytics tracking</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">8. Contact</h2>
        <p>For privacy-related questions or requests, contact us at: <strong>privacy@solarnaija.com</strong></p>
      </div>
    ),
  },
  terms: {
    title: 'Terms of Service',
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p><strong>Last updated:</strong> June 1, 2026</p>

        <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
        <p>By accessing and using solarnaija.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>

        <h2 className="text-xl font-bold text-gray-900">2. Content Disclaimer</h2>
        <p>All content on SolarNaija is provided for informational purposes only. Our reviews are based on published manufacturer specifications, verified buyer feedback, and consultation with solar professionals. While we strive for accuracy:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Product specifications may change without notice</li>
          <li>Prices in Naira fluctuate frequently due to forex rates</li>
          <li>Individual experiences with products may vary</li>
          <li>We recommend consulting a qualified solar installer before making purchase decisions</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">3. Affiliate Disclosure</h2>
        <p>SolarNaija participates in affiliate programs. When you click on links to products and make purchases, we may earn a commission at no additional cost to you. This does not influence our ratings or recommendations. See our <Link to="/disclaimer" className="text-solar-600 hover:underline">Affiliate Disclaimer</Link> for full details.</p>

        <h2 className="text-xl font-bold text-gray-900">4. No Professional Advice</h2>
        <p>Content on this website does not constitute professional electrical, engineering, or financial advice. Solar installations involve electrical work that can be dangerous if performed incorrectly. Always hire qualified professionals for installation.</p>

        <h2 className="text-xl font-bold text-gray-900">5. Limitation of Liability</h2>
        <p>SolarNaija shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Your use of or inability to use the website</li>
          <li>Purchase decisions made based on our content</li>
          <li>Any errors or omissions in our content</li>
          <li>Any actions taken based on information provided on this site</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">6. External Links</h2>
        <p>Our website contains links to external websites (product pages, manufacturer sites, etc.). We are not responsible for the content or practices of these external sites.</p>

        <h2 className="text-xl font-bold text-gray-900">7. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.</p>

        <h2 className="text-xl font-bold text-gray-900">8. Contact</h2>
        <p>For questions about these terms, contact us at: <strong>legal@solarnaija.com</strong></p>
      </div>
    ),
  },
  disclaimer: {
    title: 'Affiliate Disclaimer',
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p><strong>Last updated:</strong> June 1, 2026</p>

        <div className="p-4 bg-solar-50 border border-solar-200 rounded-lg">
          <p className="font-semibold text-solar-800">In short: We earn commissions from some links on this site. This does NOT affect our ratings or recommendations. Here are the full details.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900">Affiliate Relationships</h2>
        <p>SolarNaija participates in affiliate programs with the following types of partners:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>E-commerce platforms:</strong> Jumia Nigeria, Konga (through their affiliate programs)</li>
          <li><strong>Solar equipment dealers:</strong> Select verified Nigerian solar equipment retailers</li>
        </ul>
        <p>When you click on a product link on our site and make a purchase, we may receive a small commission. This comes at <strong>no additional cost to you</strong> — the price you pay is the same whether you use our link or go directly.</p>

        <h2 className="text-xl font-bold text-gray-900">How This Affects (or Doesn't Affect) Our Reviews</h2>
        <p><strong>Our ratings and recommendations are NOT influenced by affiliate relationships.</strong> Specifically:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>We do not accept payment for positive reviews</li>
          <li>We do not accept payment for better rankings in our comparison tables</li>
          <li>We review products regardless of whether we have an affiliate relationship with the seller</li>
          <li>If a product is poor quality, we will say so — even if we earn commission on it</li>
          <li>We include "where to buy" links for products even from stores where we don't earn commission</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">Review Units</h2>
        <p>Occasionally, manufacturers or dealers may provide products for review. When this happens:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>It is clearly disclosed in the specific product review</li>
          <li>We return or donate all review units after the review period</li>
          <li>Receiving a review unit does not guarantee a positive review</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">Price Accuracy</h2>
        <p>Prices shown on our site are indicative and based on the most recent data available to us. Solar equipment prices in Nigeria fluctuate frequently due to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Naira/Dollar exchange rate changes</li>
          <li>Import duty adjustments</li>
          <li>Supply chain variations</li>
          <li>Individual seller pricing</li>
        </ul>
        <p>Always verify the current price at the point of purchase. We update prices regularly but cannot guarantee real-time accuracy.</p>

        <h2 className="text-xl font-bold text-gray-900">Our Revenue Model</h2>
        <p>SolarNaija is funded through:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Affiliate commissions from product links</li>
          <li>Display advertising (Google AdSense or similar)</li>
          <li>Sponsored content (clearly labeled when applicable)</li>
        </ul>
        <p>This revenue allows us to maintain the site, conduct research, and provide free information to Nigerian solar buyers.</p>

        <h2 className="text-xl font-bold text-gray-900">Questions?</h2>
        <p>If you have questions about our affiliate relationships or how we make money, contact us at: <strong>hello@solarnaija.com</strong></p>
      </div>
    ),
  },
  methodology: {
    title: 'Review Methodology',
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p><strong>Last updated:</strong> June 1, 2026</p>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="font-semibold text-blue-800">Transparency matters. Here's exactly how we produce our reviews and what they are (and aren't) based on.</p>
        </div>

        <h2 className="text-xl font-bold text-gray-900">Current Methodology: Specs-Based Analysis</h2>
        <p>Our current reviews are based on the following sources:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Published manufacturer specifications:</strong> Official spec sheets, user manuals, and product documentation</li>
          <li><strong>Verified buyer feedback:</strong> Reviews and ratings from Nigerian e-commerce platforms (Jumia, Konga) and solar forums</li>
          <li><strong>Installer consultations:</strong> Input from qualified solar installers operating in Nigeria</li>
          <li><strong>Technical analysis:</strong> Comparison of specifications against stated use cases and Nigerian operating conditions</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">What Our Reviews Are NOT (Currently)</h2>
        <p>We want to be transparent: our current reviews are <strong>not</strong> based on hands-on physical testing of every product. We do not currently have a testing lab or long-term installation test sites. If and when we conduct physical testing, we will clearly label those reviews as "Hands-on Tested" and explain the testing methodology.</p>

        <h2 className="text-xl font-bold text-gray-900">How We Rate Products</h2>
        <p>Our ratings (out of 5 stars) are based on:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Performance (specifications vs. use case):</strong> Does the product's rated capacity match common Nigerian use cases?</li>
          <li><strong>Durability (build quality & warranty):</strong> Build quality indicators, warranty terms, brand reputation</li>
          <li><strong>Value for Money:</strong> Price relative to specifications and alternatives</li>
          <li><strong>Ease of Installation:</strong> Complexity of setup based on specifications and user reports</li>
          <li><strong>Battery Life (where applicable):</strong> Cycle life ratings, warranty period, maintenance requirements</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">Price Verification</h2>
        <p>We check prices from multiple Nigerian retailers and update them regularly. However, prices in Nigeria change frequently due to forex fluctuations. All prices shown should be treated as approximate — always verify at the point of purchase.</p>

        <h2 className="text-xl font-bold text-gray-900">Limitations</h2>
        <p>Our analysis has limitations:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>We cannot verify long-term reliability without extended physical testing</li>
          <li>Manufacturer specifications may not reflect real-world performance in all conditions</li>
          <li>Buyer feedback may be biased (people with problems are more likely to leave reviews)</li>
          <li>Product quality can vary between batches</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900">Our Goal</h2>
        <p>We aim to transition to hands-on testing of key products as resources allow. When we do, those reviews will be clearly marked with our "Hands-on Tested" badge and will include specific testing details (duration, conditions, measurements).</p>
        <p>In the meantime, our specs-based analysis provides valuable guidance for Nigerian solar buyers by synthesizing available information and applying it to real Nigerian use cases.</p>

        <h2 className="text-xl font-bold text-gray-900">Corrections</h2>
        <p>If you spot an error in any of our reviews — wrong specifications, outdated prices, or incorrect information — please <Link to="/contact" className="text-solar-600 hover:underline">contact us</Link> and we'll correct it promptly.</p>
      </div>
    ),
  },
};

export default function LegalPage() {
  const { pageId } = useParams<{ pageId: string }>();
  const page = pageId ? pages[pageId] : null;

  if (!page) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
        <Link to="/" className="text-solar-600 hover:underline mt-4 inline-block">← Back to home</Link>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{page.title} — SolarNaija</title>
        <meta name="description" content={`${page.title} for SolarNaija solar equipment review website.`} />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{page.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{page.title}</h1>
        {page.content}
      </div>
    </div>
  );
}
