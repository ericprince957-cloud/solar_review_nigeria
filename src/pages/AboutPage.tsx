import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Users, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About Us — SolarNaija Reviews</title>
        <meta name="description" content="Learn about SolarNaija's review methodology, team, and commitment to honest solar equipment reviews for Nigerian homes and businesses." />
      </Helmet>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900">About SolarNaija Reviews</h1>
        <p className="text-lg text-gray-600 mt-3">Helping Nigerians make smart solar energy decisions since 2023</p>

        <div className="mt-10 space-y-10">
          {/* Mission */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-solar-500" />
              Our Mission
            </h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              We started SolarNaija because too many Nigerians struggle to find reliable information about solar equipment. With so many products, brands, and price points — and with prices that fluctuate constantly due to forex rates — buyers need clear, honest guidance to make the right investment.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Our goal is to be the most trusted source of solar equipment information for Nigerian homes and businesses. We synthesize published specifications, verified buyer feedback, and installer expertise to help you make informed decisions.
            </p>
          </section>

          {/* Who We Are */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-solar-500" />
              Who We Are
            </h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              SolarNaija is run by a small team with backgrounds in solar energy, electrical engineering, and technology research based in Nigeria. We research and analyze solar equipment to help Nigerian buyers navigate a complex and rapidly-changing market.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              We are NOT a solar installation company. We don't sell equipment. This means our analysis is independent — we have no incentive to push any particular brand or product. Our revenue comes from affiliate commissions and advertising, which is fully disclosed.
            </p>
          </section>

          {/* Review Methodology */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-solar-500" />
              Our Review Methodology
            </h2>
            <p className="text-gray-600 text-sm mt-2 italic">Full details available on our <Link to="/methodology" className="text-solar-600 hover:underline">Methodology page</Link>.</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <p className="text-gray-700"><strong>Specification analysis:</strong> We study published manufacturer specifications, user manuals, and technical documentation for every product we review.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <p className="text-gray-700"><strong>Buyer feedback synthesis:</strong> We analyze verified reviews and ratings from Nigerian e-commerce platforms (Jumia, Konga) and solar community forums.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <p className="text-gray-700"><strong>Installer consultation:</strong> We consult with qualified solar installers operating in Nigeria for practical insights on product performance and reliability.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <p className="text-gray-700"><strong>Nigerian context:</strong> We evaluate products specifically for Nigerian conditions — voltage fluctuations, high temperatures, dusty environments, and typical load profiles.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">5</span>
                <p className="text-gray-700"><strong>Regular updates:</strong> We update reviews with current prices and availability. If new information becomes available, we update our analysis.</p>
              </div>
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <section className="p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h2 className="text-xl font-bold text-amber-900 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Affiliate Disclosure
            </h2>
            <p className="text-amber-900 mt-3 leading-relaxed">
              SolarNaija participates in affiliate programs with Jumia, Konga, and select solar equipment dealers. When you click on links to buy products and make a purchase, we may earn a small commission at no extra cost to you.
            </p>
            <p className="text-amber-900 mt-3 leading-relaxed">
              <strong>This does NOT affect our ratings or recommendations.</strong> We give the same honest reviews whether or not we earn a commission. Our reputation depends on trust — we would never compromise that for a few Naira in commissions.
            </p>
            <p className="text-amber-900 mt-3 leading-relaxed">
              We also accept review units from manufacturers, which is always clearly disclosed in each review. However, we return or donate all review units after testing — we don't keep them.
            </p>
          </section>

          {/* Contact CTA */}
          <section className="text-center p-8 bg-gradient-to-br from-trust-700 to-trust-800 rounded-xl">
            <h2 className="text-xl font-bold text-white">Have Questions?</h2>
            <p className="text-gray-300 mt-2">We're happy to help you choose the right solar setup for your needs</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
