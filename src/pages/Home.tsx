import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, TrendingUp, Zap, Battery, Sun, Home as HomeIcon, Plug, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { products, categories, buyingGuides, blogPosts } from '../data/products';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';
import { getCanonicalUrl, SITE_CONFIG } from '../lib/config';

export default function HomePage() {
  const topRated = [...products].sort((a, b) => {
    const ratingDiff = b.rating - a.rating;
    return ratingDiff !== 0 ? ratingDiff : a.name.localeCompare(b.name);
  }).slice(0, 4);
  const latestReviews = products.slice(0, 3);

  const categoryIcons: Record<string, React.ReactNode> = {
    'inverters': <Zap className="w-6 h-6" />,
    'batteries': <Battery className="w-6 h-6" />,
    'panels': <Sun className="w-6 h-6" />,
    'solar-kits': <HomeIcon className="w-6 h-6" />,
    'solar-lanterns': <Lightbulb className="w-6 h-6" />,
    'charge-controllers': <Plug className="w-6 h-6" />,
  };

  return (
    <div>
      <Helmet>
        <title>{`${SITE_CONFIG.name} — Best Solar Inverters, Batteries & Panels for Nigerian Homes`}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta property="og:title" content={`${SITE_CONFIG.name} — Honest Solar Equipment Reviews for Nigeria`} />
        <meta property="og:description" content={SITE_CONFIG.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getCanonicalUrl()} />
        <link rel="canonical" href={getCanonicalUrl()} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-700 via-trust-800 to-trust-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-solar-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-solar-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-solar-500/20 text-solar-300 text-sm font-medium rounded-full border border-solar-500/30">
                Made for Nigerian Homes
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Honest Solar Reviews for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-300 to-solar-500">
                Nigerian Homes & Businesses
              </span>
            </h1>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed max-w-2xl">
              Tired of NEPA wahala and generator noise? We research solar inverters, batteries, and panels based on specs and real buyer feedback — so you can choose the right setup without wasting money.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/category/inverters"
                className="inline-flex items-center gap-2 px-6 py-3 bg-solar-500 hover:bg-solar-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-solar-500/30"
              >
                Find Best Inverter <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/guides"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
              >
                Buying Guides
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <BookOpen className="w-5 h-5 text-green-400" />
                <span>Specs & Buyer Feedback</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-5 h-5 text-solar-400" />
                <span>Regularly Updated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>Independent Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Category Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-200 hover:border-solar-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-solar-50 group-hover:bg-solar-100 rounded-xl flex items-center justify-center text-solar-600 transition-colors">
                {categoryIcons[cat.id]}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{cat.name}</span>
              <span className="text-xs text-gray-500">{cat.productCount} reviews</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Top Rated Products</h2>
            <p className="text-gray-600 mt-1">Our highest-rated solar equipment, reviewed based on specs and buyer feedback</p>
          </div>
          <Link to="/compare" className="hidden sm:flex items-center gap-1 text-sm font-medium text-solar-600 hover:text-solar-700">
            Compare all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRated.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              badge={i === 0 ? 'Best Overall' : i === 1 ? 'Runner Up' : undefined}
            />
          ))}
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="bg-gradient-to-b from-solar-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Why Nigerians Trust Our Reviews</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We research every product using manufacturer specifications, verified buyer feedback, and Nigerian market context — so you can make informed decisions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Research-Based Reviews</h3>
              <p className="text-gray-600 text-sm mt-2">Every product review is based on published manufacturer specifications, verified buyer feedback, and installer consultations</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-solar-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-7 h-7 text-solar-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">No Paid Rankings</h3>
              <p className="text-gray-600 text-sm mt-2">Brands can't pay for better ratings. Our reviews are independent and we disclose all affiliate relationships</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Regularly Updated</h3>
              <p className="text-gray-600 text-sm mt-2">Prices and availability change fast in Nigeria. We update our reviews monthly with current Naira prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Latest Reviews</h2>
            <p className="text-gray-600 mt-1">Fresh reviews and updated ratings</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestReviews.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Buying Guides */}
      <section className="bg-trust-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Buying Guides</h2>
              <p className="text-gray-400 mt-1">Make the right choice with our detailed guides</p>
            </div>
            <Link to="/guides" className="text-solar-400 hover:text-solar-300 text-sm font-medium flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyingGuides.slice(0, 3).map(guide => (
              <Link
                key={guide.id}
                to={`/guides/${guide.id}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
              >
                <span className="text-xs font-medium text-solar-400 uppercase tracking-wide">{guide.category}</span>
                <h3 className="text-lg font-bold text-white mt-2 group-hover:text-solar-300 transition-colors">{guide.title}</h3>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">{guide.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{guide.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison Quick View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Quick Price Guide</h2>
          <p className="text-gray-600 mt-2">Current prices for popular solar equipment in Nigeria</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
            <thead>
              <tr className="bg-solar-50">
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Product</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Category</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Rating</th>
                <th className="text-right px-4 py-3 text-sm font-semibold text-gray-700">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 6).map((p, i) => (
                <tr key={p.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3">
                    <Link to={`/reviews/${p.id}`} className="text-sm font-medium text-gray-900 hover:text-solar-600">
                      {p.brand} {p.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 capitalize">{p.category.replace('-', ' ')}</td>
                  <td className="px-4 py-3">
                    <StarRating rating={p.rating} size="sm" showNumber={false} />
                  </td>
                  <td className="px-4 py-3 text-right text-sm font-bold text-gray-900">₦{p.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Latest News & Updates</h2>
              <p className="text-gray-600 mt-1">Solar prices, policy changes, and product launches</p>
            </div>
            <Link to="/blog" className="text-solar-600 hover:text-solar-700 text-sm font-medium flex items-center gap-1">
              All posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(0, 2).map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-solar-100 text-solar-700 text-xs font-medium rounded-full">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-solar-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-solar-500 to-solar-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Not Sure Which Solar Setup You Need?</h2>
          <p className="text-solar-100 mt-3 text-lg">Tell us about your home and power needs — we'll recommend the perfect system</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-white text-solar-700 font-bold rounded-lg hover:bg-solar-50 transition-colors shadow-lg"
          >
            Ask Us a Question <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
