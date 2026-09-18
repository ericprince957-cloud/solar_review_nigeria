import { Link } from 'react-router-dom';
import { Sun, Mail } from 'lucide-react';
import { categories } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-trust-800 text-white">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-solar-600 to-solar-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Get Price Drop Alerts & New Reviews</h3>
              <p className="text-solar-100 text-sm mt-1">Join 5,000+ Nigerians who get our weekly solar deals newsletter</p>
            </div>
            <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-2.5 bg-trust-700 hover:bg-trust-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-solar-400 to-solar-600 rounded-lg flex items-center justify-center">
                <Sun className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">SolarNaija</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Honest solar equipment reviews for Nigerian homes and businesses. We test everything in real Nigerian conditions.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span>hello@solarnaija.com</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`} className="text-gray-400 hover:text-solar-400 text-sm transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/guides" className="text-gray-400 hover:text-solar-400 text-sm transition-colors">Buying Guides</Link></li>
              <li><Link to="/compare" className="text-gray-400 hover:text-solar-400 text-sm transition-colors">Compare Products</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-solar-400 text-sm transition-colors">Blog & News</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-solar-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-solar-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Trust</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">✅ Tested in Nigeria</li>
              <li className="flex items-center gap-2">✅ Updated June 2026</li>
              <li className="flex items-center gap-2">✅ Independent Reviews</li>
              <li className="flex items-center gap-2">✅ No Paid Rankings</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>© 2026 SolarNaija Reviews. All rights reserved.</p>
            <p className="text-center">
              <strong>Affiliate Disclosure:</strong> We earn commissions from purchases made through our links. This doesn't affect our ratings.{' '}
              <Link to="/about" className="text-solar-400 hover:underline">Learn more</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
