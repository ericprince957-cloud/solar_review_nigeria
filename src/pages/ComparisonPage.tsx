import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X, ArrowLeftRight } from 'lucide-react';
import { products } from '../data/products';
import StarRating from '../components/StarRating';

export default function ComparisonPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([
    products[0].id,
    products[1].id,
  ]);
  const [showAddModal, setShowAddModal] = useState(false);

  const selected = products.filter(p => selectedProducts.includes(p.id));

  const addProduct = (id: string) => {
    if (selectedProducts.length < 3 && !selectedProducts.includes(id)) {
      setSelectedProducts([...selectedProducts, id]);
    }
    setShowAddModal(false);
  };

  const removeProduct = (id: string) => {
    setSelectedProducts(selectedProducts.filter(p => p !== id));
  };

  const availableProducts = products.filter(p => !selectedProducts.includes(p.id));

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Compare Products</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <ArrowLeftRight className="w-8 h-8 text-solar-500" />
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
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
              >
                <X className="w-3 h-3" />
              </button>
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-3" />
              <p className="text-xs text-solar-600 font-semibold">{product.brand}</p>
              <p className="text-sm font-bold text-gray-900 mt-1 line-clamp-2">{product.name}</p>
              <div className="mt-2">
                <StarRating rating={product.rating} size="sm" />
              </div>
            </div>
          ))}
          {selectedProducts.length < 3 && (
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-4 flex flex-col items-center justify-center gap-2 hover:border-solar-400 hover:bg-solar-50 transition-all min-h-[200px]"
            >
              <Plus className="w-8 h-8 text-gray-400" />
              <span className="text-sm font-medium text-gray-500">Add Product</span>
            </button>
          )}
        </div>

        {/* Comparison Table */}
        {selected.length >= 2 && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-solar-50">
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 w-40">Feature</th>
                    {selected.map(p => (
                      <th key={p.id} className="text-center px-4 py-3 text-sm font-semibold text-gray-700">
                        {p.brand} {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Rating */}
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">Overall Rating</td>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center">
                        <StarRating rating={p.rating} size="sm" />
                      </td>
                    ))}
                  </tr>
                  {/* Price */}
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">Price</td>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-bold text-gray-900">
                        ₦{p.price.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  {/* Specs */}
                  {Object.keys(selected[0].specs).map((specKey, i) => (
                    <tr key={specKey} className={`border-t border-gray-100 ${i % 2 === 1 ? 'bg-gray-50' : ''}`}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-700">{specKey}</td>
                      {selected.map(p => (
                        <td key={p.id} className="px-4 py-3 text-center text-sm text-gray-900">
                          {p.specs[specKey] || '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Rating Breakdown */}
                  <tr className="border-t border-gray-200 bg-solar-50">
                    <td colSpan={selected.length + 1} className="px-4 py-2 text-xs font-bold text-solar-800 uppercase tracking-wide">
                      Rating Breakdown
                    </td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">Performance</td>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        {p.ratingBreakdown.performance}/5
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">Durability</td>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        {p.ratingBreakdown.durability}/5
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">Value for Money</td>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        {p.ratingBreakdown.valueForMoney}/5
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">Ease of Installation</td>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        {p.ratingBreakdown.easeOfInstallation}/5
                      </td>
                    ))}
                  </tr>
                  {/* Pros */}
                  <tr className="border-t border-gray-200 bg-green-50">
                    <td className="px-4 py-3 text-sm font-medium text-green-800">Key Pros</td>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-xs text-green-900">
                        <ul className="space-y-1">
                          {p.pros.slice(0, 3).map((pro, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-green-500">✓</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  {/* Cons */}
                  <tr className="border-t border-gray-100 bg-red-50">
                    <td className="px-4 py-3 text-sm font-medium text-red-800">Key Cons</td>
                    {selected.map(p => (
                      <td key={p.id} className="px-4 py-3 text-xs text-red-900">
                        <ul className="space-y-1">
                          {p.cons.slice(0, 3).map((con, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-red-500">✗</span> {con}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  {/* Best For */}
                  <tr className="border-t border-gray-200 bg-blue-50">
                    <td className="px-4 py-3 text-sm font-medium text-blue-800">Best For</td>
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
            <ArrowLeftRight className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Select at least 2 products to compare</p>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Add Product to Compare</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[60vh] space-y-2">
              {availableProducts.map(p => (
                <button
                  key={p.id}
                  onClick={() => addProduct(p.id)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-solar-300 hover:bg-solar-50 transition-all text-left"
                >
                  <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{p.brand} {p.name}</p>
                    <p className="text-xs text-gray-500">₦{p.price.toLocaleString()} • {p.rating}/5</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
