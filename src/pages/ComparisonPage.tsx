import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Plus, X, ArrowLeftRight } from 'lucide-react';
import { products } from '../data/products';
import StarRating from '../components/StarRating';
import { formatNGN } from '../lib/format';
import { getCanonicalUrl, SITE_CONFIG } from '../lib/config';

export default function ComparisonPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([
    products[0]?.id || '',
    products[1]?.id || '',
  ].filter(Boolean));
  const [showAddModal, setShowAddModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selected = products.filter(p => selectedProducts.includes(p.id));

  const addProduct = (id: string) => {
    if (selectedProducts.length < 3 && !selectedProducts.includes(id)) {
      setSelectedProducts([...selectedProducts, id]);
    }
    setShowAddModal(false);
    triggerRef.current?.focus();
  };

  const removeProduct = (id: string) => {
    setSelectedProducts(selectedProducts.filter(p => p !== id));
  };

  const availableProducts = products.filter(p => !selectedProducts.includes(p.id));

  // Build union of all spec keys across selected products
  const allSpecKeys = Array.from(
    new Set(selected.flatMap(p => Object.keys(p.specs)))
  );

  // Focus trap for modal
  useEffect(() => {
    if (!showAddModal) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowAddModal(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    // Focus first focusable element in modal
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements && focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showAddModal]);

  return (
    <div>
      <Helmet>
        <title>Compare Solar Products Side-by-Side — {SITE_CONFIG.name}</title>
        <meta name="description" content="Compare solar inverters, batteries, and panels side-by-side. See specs, prices, ratings, and pros/cons to make the right choice." />
        <link rel="canonical" href={getCanonicalUrl('/compare')} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-900 font-medium" aria-current="page">Compare Products</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <ArrowLeftRight className="w-8 h-8 text-solar-500" aria-hidden="true" />
            Compare Solar Products
          </h1>
          <p className="text-gray-600 mt-2">Select 2-3 products to compare side-by-side. Perfect for making your final decision.</p>
        </div>

        {/* Product Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {selected.map(product => (
            <div key={product.id} className="bg-white rounded-xl border-2 border-solar-300 p-4 relative">
              <button
                onClick={() => removeProduct(product.id)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none"
                aria-label={`Remove ${product.brand} ${product.name}`}
              >
                <X className="w-3 h-3" aria-hidden="true" />
              </button>
              <img src={product.image} alt={`${product.brand} ${product.name}`} className="w-full h-32 object-cover rounded-lg mb-3" />
              <p className="text-xs text-solar-600 font-semibold">{product.brand}</p>
              <p className="text-sm font-bold text-gray-900 mt-1 line-clamp-2">{product.name}</p>
              <div className="mt-2">
                <StarRating rating={product.rating} size="sm" />
              </div>
            </div>
          ))}
          {selectedProducts.length < 3 && (
            <button
              ref={triggerRef}
              onClick={() => setShowAddModal(true)}
              className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center gap-2 hover:border-solar-400 hover:bg-solar-50 transition-all min-h-[200px] focus:ring-2 focus:ring-solar-400 focus:outline-none"
              aria-label="Add product to comparison"
            >
              <Plus className="w-8 h-8 text-gray-400" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-500">Add Product</span>
            </button>
          )}
        </div>

        {/* Comparison Table */}
        {selected.length >= 2 && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Product comparison table">
              <table className="w-full">
                <thead>
                  <tr className="bg-solar-50">
                    <th scope="col" className="text-left px-4 py-3 text-sm font-semibold text-gray-700 w-40">Feature</th>
                    {selected.map(p => (
                      <th key={p.id} scope="col" className="text-center px-4 py-3 text-sm font-semibold text-gray-700">
                        {p.brand} {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Rating */}
                  <tr className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-700 text-left">Overall Rating</th>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center">
                        <StarRating rating={p.rating} size="sm" />
                      </td>
                    ))}
                  </tr>
                  {/* Price */}
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-700 text-left">Price</th>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-bold text-gray-900">
                        {formatNGN(p.price)}
                      </td>
                    ))}
                  </tr>
                  {/* Specs - using union of all keys */}
                  {allSpecKeys.map((specKey, i) => (
                    <tr key={specKey} className={`border-t border-gray-100 ${i % 2 === 1 ? 'bg-gray-50' : ''}`}>
                      <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-700 text-left">{specKey}</th>
                      {selected.map(p => (
                        <td key={p.id} className="px-4 py-3 text-center text-sm text-gray-900">
                          {p.specs[specKey] ?? '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Rating Breakdown */}
                  <tr className="border-t border-gray-200 bg-solar-50">
                    <th colSpan={selected.length + 1} scope="colgroup" className="px-4 py-2 text-xs font-bold text-solar-800 uppercase tracking-wide text-left">
                      Rating Breakdown
                    </th>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-700 text-left">Performance</th>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        {p.ratingBreakdown.performance}/5
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-700 text-left">Durability</th>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        {p.ratingBreakdown.durability}/5
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-100">
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-700 text-left">Value for Money</th>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        {p.ratingBreakdown.valueForMoney}/5
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-gray-700 text-left">Ease of Installation</th>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        {p.ratingBreakdown.easeOfInstallation}/5
                      </td>
                    ))}
                  </tr>
                  {/* Pros */}
                  <tr className="border-t border-gray-200 bg-green-50">
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-green-800 text-left">Key Pros</th>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-xs text-green-900">
                        <ul className="space-y-1">
                          {p.pros.slice(0, 3).map((pro, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-green-500" aria-hidden="true">✓</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  {/* Cons */}
                  <tr className="border-t border-gray-100 bg-red-50">
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-red-800 text-left">Key Cons</th>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-xs text-red-900">
                        <ul className="space-y-1">
                          {p.cons.slice(0, 3).map((con, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-red-500" aria-hidden="true">✗</span> {con}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  {/* Best For */}
                  <tr className="border-t border-gray-200 bg-blue-50">
                    <th scope="row" className="px-4 py-3 text-sm font-medium text-blue-800 text-left">Best For</th>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-xs text-blue-900">
                        <ul className="space-y-1">
                          {p.bestFor.slice(0, 3).map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selected.length < 2 && (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <ArrowLeftRight className="w-12 h-12 text-gray-300 mx-auto mb-4" aria-hidden="true" />
            <p className="text-gray-500 text-lg">Select at least 2 products to compare</p>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowAddModal(false);
              triggerRef.current?.focus();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Add product to comparison"
        >
          <div 
            ref={modalRef}
            className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Add Product to Compare</h3>
              <button 
                onClick={() => { setShowAddModal(false); triggerRef.current?.focus(); }}
                className="text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-solar-400 rounded focus:outline-none"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[60vh] space-y-2">
              {availableProducts.length > 0 ? (
                availableProducts.map(p => (
                  <button
                    key={p.id}
                    onClick={() => addProduct(p.id)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-solar-300 hover:bg-solar-50 transition-all text-left focus:ring-2 focus:ring-solar-400 focus:outline-none"
                  >
                    <img src={p.image} alt={`${p.brand} ${p.name}`} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{p.brand} {p.name}</p>
                      <p className="text-xs text-gray-500">{formatNGN(p.price)} • {p.rating}/5</p>
                    </div>
                  </button>
                ))
              ) : (
                <p className="text-center text-gray-500 py-4">No more products available to compare</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
