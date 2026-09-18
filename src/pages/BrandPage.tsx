import { useParams, Link } from 'react-router-dom';
import { brands, products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function BrandPage() {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brands.find(b => b.id === brandId);
  const brandProducts = products.filter(p => p.brand.toLowerCase().replace(/\s+/g, '-') === brandId || p.brand.toLowerCase() === brandId?.replace(/-/g, ' '));

  if (!brand) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Brand not found</h1>
        <Link to="/" className="text-solar-600 hover:underline mt-4 inline-block">← Back to home</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{brand.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Brand Header */}
        <div className="bg-gradient-to-r from-trust-700 to-trust-800 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-3xl font-bold">{brand.name}</h1>
          <p className="text-gray-300 mt-3 max-w-2xl">{brand.description}</p>
          <p className="text-sm text-gray-400 mt-4">{brandProducts.length} products reviewed</p>
        </div>

        {/* Products */}
        {brandProducts.length > 0 ? (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Our Reviews of {brand.name} Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-500 text-lg">No products reviewed yet for this brand</p>
            <p className="text-gray-400 text-sm mt-2">Check back soon — we're always testing new equipment</p>
          </div>
        )}

        {/* All Brands */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">All Brands We Review</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map(b => (
              <Link
                key={b.id}
                to={`/brand/${b.id}`}
                className={`p-4 rounded-xl border transition-all ${
                  b.id === brandId
                    ? 'bg-solar-50 border-solar-300'
                    : 'bg-white border-gray-200 hover:border-solar-200 hover:shadow-sm'
                }`}
              >
                <p className="font-bold text-gray-900">{b.name}</p>
                <p className="text-xs text-gray-500 mt-1">{b.productCount} product{b.productCount !== 1 ? 's' : ''}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
