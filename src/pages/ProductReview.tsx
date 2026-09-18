import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ExternalLink, ThumbsUp, ThumbsDown, ChevronDown, ChevronUp, Clock, AlertTriangle, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';
import StarRating, { RatingBar } from '../components/StarRating';
import ProductCard from '../components/ProductCard';
import { formatNGN } from '../lib/format';
import { getCanonicalUrl, SITE_CONFIG } from '../lib/config';

export default function ProductReview() {
  const { productId } = useParams<{ productId: string }>();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="text-gray-600 mt-2">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="text-solar-600 hover:underline mt-4 inline-block">← Back to home</Link>
      </div>
    );
  }

  // Safe related products - filter out invalid IDs, duplicates, and self-references
  const relatedProducts = product.relatedProducts
    ? [...new Set(product.relatedProducts)] // Remove duplicates
        .filter(id => id !== product.id) // Remove self-reference
        .map(id => products.find(p => p.id === id))
        .filter((p): p is NonNullable<typeof p> => p !== undefined) // Type guard
    : [];

  // Build structured data - only include aggregateRating if we have real data
  const structuredData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.brand} ${product.name}`,
    description: product.verdict,
    brand: { '@type': 'Brand', name: product.brand },
    category: product.category.replace('-', ' '),
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'NGN',
      // Only include availability if we have real data
      ...(product.availability && product.availability !== 'unknown' && {
        availability: product.availability === 'in-stock' 
          ? 'https://schema.org/InStock'
          : product.availability === 'out-of-stock'
          ? 'https://schema.org/OutOfStock'
          : 'https://schema.org/LimitedAvailability',
      }),
      // Include price validity if available
      ...(product.priceVerifiedAt && {
        priceValidUntil: new Date(new Date(product.priceVerifiedAt).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      }),
    },
  };

  // Only add aggregateRating if we have real customer rating data
  if (product.ratingCount && product.ratingCount > 0 && product.ratingSource === 'customer') {
    structuredData.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      bestRating: 5,
      ratingCount: product.ratingCount,
      ...(product.reviewCount && { reviewCount: product.reviewCount }),
    };
  }

  // Add editorial review (not customer review)
  structuredData.review = {
    '@type': 'Review',
    author: { '@type': 'Organization', name: SITE_CONFIG.name },
    datePublished: product.updatedAt,
    reviewRating: { 
      '@type': 'Rating', 
      ratingValue: product.rating, 
      bestRating: 5,
    },
    reviewBody: product.verdict,
  };

  const canonicalUrl = getCanonicalUrl(`/reviews/${product.id}`);
  const imageAlt = product.imageAlt || `${product.brand} ${product.name}`;

  return (
    <div>
      <Helmet>
        <title>{`${product.brand} ${product.name} Review — ${formatNGN(product.price)} | ${SITE_CONFIG.name}`}</title>
        <meta name="description" content={`${product.verdict} Rated ${product.rating}/5. Price: ${formatNGN(product.price)}. Based on specs and buyer feedback.`} />
        <meta property="og:title" content={`${product.brand} ${product.name} — ${product.rating}/5 Review`} />
        <meta property="og:description" content={product.verdict} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/category/${product.category}`} className="hover:text-solar-600 capitalize">
              {product.category.replace('-', ' ')}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-900 font-medium truncate" aria-current="page">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] bg-gray-100">
                {imageError ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-gray-400" aria-hidden="true" />
                  </div>
                ) : (
                  <img
                    src={product.image}
                    alt={imageAlt}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                )}
                {product.basedOnSpecsAndFeedback && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-trust-600 text-white text-sm font-medium rounded-full">
                    <BookOpen className="w-4 h-4" />
                    Based on Specs & Buyer Feedback
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm font-semibold text-solar-600 uppercase tracking-wide">{product.brand}</p>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
                    <div className="flex items-center gap-3 mt-3">
                      <StarRating rating={product.rating} size="lg" />
                      <span className="text-sm text-gray-500" aria-hidden="true">|</span>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> Updated {product.updatedAt}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Verdict */}
                <div className="mt-6 p-4 bg-solar-50 border border-solar-200 rounded-xl">
                  <h2 className="font-bold text-solar-800 flex items-center gap-2">
                    Quick Verdict
                  </h2>
                  <p className="text-solar-900 mt-1 leading-relaxed">{product.verdict}</p>
                </div>

                {/* Rating Breakdown */}
                <div className="mt-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Rating Breakdown</h2>
                  <div className="space-y-3">
                    <RatingBar label="Performance" value={product.ratingBreakdown.performance} />
                    <RatingBar label="Durability" value={product.ratingBreakdown.durability} />
                    <RatingBar label="Value for Money" value={product.ratingBreakdown.valueForMoney} />
                    <RatingBar label="Ease of Installation" value={product.ratingBreakdown.easeOfInstallation} />
                    {product.ratingBreakdown.batteryLife !== undefined && (
                      <RatingBar label="Battery Life" value={product.ratingBreakdown.batteryLife} />
                    )}
                  </div>
                </div>

                {/* Specifications */}
                <div className="mt-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Key Specifications</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                      <tbody>
                        {Object.entries(product.specs).map(([key, value], i) => (
                          <tr key={key} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-700 w-1/3 text-left">{key}</th>
                            <td className="px-4 py-3 text-sm text-gray-900">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                    <h3 className="font-bold text-green-800 flex items-center gap-2 mb-3">
                      <ThumbsUp className="w-4 h-4" /> Pros
                    </h3>
                    <ul className="space-y-2">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                          <span className="text-green-500 mt-0.5" aria-hidden="true">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                    <h3 className="font-bold text-red-800 flex items-center gap-2 mb-3">
                      <ThumbsDown className="w-4 h-4" /> Cons
                    </h3>
                    <ul className="space-y-2">
                      {product.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                          <span className="text-red-500 mt-0.5" aria-hidden="true">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: {product.updatedAt}</span>
                </div>

                {/* Detailed Review */}
                <div className="mt-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Detailed Review</h2>
                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
                    {product.reviewBody.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Methodology Note */}
                <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <p className="text-xs text-gray-500 flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gray-400" aria-hidden="true" />
                    <span>
                      <strong>Review basis:</strong> This review is based on published manufacturer specifications, verified buyer feedback from Nigerian platforms, and consultation with solar installers. We have not physically tested this unit. See our{' '}
                      <Link to="/methodology" className="text-solar-600 hover:underline">methodology</Link>{' '}
                      for details.
                    </span>
                  </p>
                </div>

                {/* Best For */}
                <div className="mt-8 p-5 bg-blue-50 border border-blue-200 rounded-xl">
                  <h3 className="font-bold text-blue-800 mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.bestFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-blue-900">
                        <span className="text-blue-500 mt-0.5" aria-hidden="true">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQs */}
                <div className="mt-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-2">
                    {product.faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                          className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                          aria-expanded={expandedFaq === i}
                          aria-controls={`faq-answer-${i}`}
                        >
                          <span className="text-sm font-medium text-gray-900">{faq.question}</span>
                          {expandedFaq === i ? (
                            <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" aria-hidden="true" />
                          )}
                        </button>
                        {expandedFaq === i && (
                          <div 
                            id={`faq-answer-${i}`}
                            className="px-4 pb-3 text-sm text-gray-700 border-t border-gray-100 pt-3"
                            role="region"
                            aria-labelledby={`faq-question-${i}`}
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Price & Buy Box */}
              <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500">Current Price</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{formatNGN(product.price)}</p>
                  <p className="text-xs text-gray-500 mt-1">{product.priceNote}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Where to buy:</p>
                  {product.buyLinks.filter(link => link.url && (link.url.startsWith('http://') || link.url.startsWith('https://'))).map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 bg-solar-50 hover:bg-solar-100 border border-solar-200 rounded-lg transition-colors group"
                    >
                      <span className="text-sm font-medium text-solar-800">{link.store}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-solar-600 group-hover:text-solar-700" aria-hidden="true" />
                      <span className="sr-only">(opens in new tab)</span>
                    </a>
                  ))}
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  * We may earn a commission from purchases made through these links.{' '}
                  <Link to="/disclaimer" className="text-solar-600 hover:underline">Learn more</Link>
                </p>
              </div>

              {/* Quick Specs */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-3">Quick Specs</h3>
                <div className="space-y-2">
                  {Object.entries(product.specs).slice(0, 5).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compare CTA */}
              <div className="bg-gradient-to-br from-trust-700 to-trust-800 rounded-xl p-5 text-center">
                <h3 className="font-bold text-white">Compare with alternatives</h3>
                <p className="text-gray-300 text-sm mt-1">See how this product stacks up against competitors</p>
                <Link
                  to="/compare"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-solar-500 hover:bg-solar-600 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Compare Now <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} compact />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
