import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Eye, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
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
              We started SolarNaija because too many Nigerians were getting ripped off buying solar equipment — either overpaying for poor-quality products or buying undersized systems that couldn't handle their needs. We believe every Nigerian deserves honest, practical information to make the right solar investment.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Our team tests every product in real Nigerian conditions — not in a lab with perfect temperature and clean power. We install them in actual homes and businesses across Lagos, Abuja, and other cities, dealing with the same 35°C+ heat, voltage fluctuations, and dusty environments that you face every day.
            </p>
          </section>

          {/* Who We Are */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-solar-500" />
              Who We Are
            </h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              We're a team of solar engineers, electricians, and tech reviewers based in Nigeria. Our lead reviewer has over 8 years of experience installing solar systems across Nigeria, from small POS shop setups to 10KVA home systems. We've seen what works and what doesn't — and we share that knowledge honestly.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              We are NOT a solar installation company. We don't sell equipment. This means our reviews are completely independent — we have no incentive to push any particular brand or product.
            </p>
          </section>

          {/* Review Methodology */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-solar-500" />
              Our Review Methodology
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <p className="text-gray-700"><strong>Purchase or borrow:</strong> We buy products with our own money or borrow from manufacturers (disclosed). We never review products we haven't physically handled.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <p className="text-gray-700"><strong>Real-world testing:</strong> Each product is installed and used for at least 4 weeks in Nigerian conditions. We measure actual performance, not just specs.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <p className="text-gray-700"><strong>Heat & stress testing:</strong> We specifically test how products handle Nigerian heat (35-45°C), voltage fluctuations, and dusty conditions.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <p className="text-gray-700"><strong>User feedback:</strong> We collect feedback from real Nigerian users who've been running the equipment for months or years.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-solar-100 text-solar-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">5</span>
                <p className="text-gray-700"><strong>Regular updates:</strong> We update reviews monthly with current prices and availability. If a product's quality changes, we update our rating.</p>
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
