import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ArrowUpDown, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

type SortOption = 'rating' | 'price-low' | 'price-high' | 'name';

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);
  const [showFilters, setShowFilters] = useState(false);

  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  const filteredProducts = useMemo(() => {
    let filtered = categoryProducts.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return filtered;
  }, [categoryProducts, sortBy, priceRange]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
        <Link to="/" className="text-solar-600 hover:underline mt-4 inline-block">← Back to home</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-solar-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{category.icon} {category.name}</h1>
          <p className="text-gray-600 mt-2">{category.description}</p>
          <p className="text-sm text-gray-500 mt-1">{categoryProducts.length} products reviewed • Updated June 2026</p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 p-4 bg-white rounded-xl border border-gray-200">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            <span className="text-sm text-gray-500">{filteredProducts.length} results</span>
          </div>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:ring-2 focus:ring-solar-400 focus:border-solar-400 outline-none"
            >
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Price Range (₦)</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs text-gray-500">Min</label>
                <input
                  type="range"
                  min={0}
                  max={2000000}
                  step={50000}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full accent-solar-500"
                />
                <span className="text-sm font-medium text-gray-700">₦{priceRange[0].toLocaleString()}</span>
              </div>
              <span className="text-gray-400 mt-4">—</span>
              <div className="flex-1">
                <label className="text-xs text-gray-500">Max</label>
                <input
                  type="range"
                  min={0}
                  max={2000000}
                  step={50000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-solar-500"
                />
                <span className="text-sm font-medium text-gray-700">₦{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                badge={i === 0 && sortBy === 'rating' ? '🏆 Top Pick' : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products match your filters</p>
            <button
              onClick={() => setPriceRange([0, 2000000])}
              className="mt-4 text-solar-600 hover:underline font-medium"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Category Info */}
        <div className="mt-12 p-6 bg-solar-50 rounded-xl border border-solar-200">
          <h2 className="text-lg font-bold text-gray-900">About {category.name}</h2>
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            {categoryId === 'inverters' && 'Solar inverters convert battery power (DC) to household power (AC). For Nigerian homes, we recommend pure sine wave inverters as they\'re safe for all electronics. Hybrid inverters with built-in MPPT are ideal if you want to add solar panels.'}
            {categoryId === 'batteries' && 'Solar batteries store energy from your panels for use when there\'s no sun. Tubular lead-acid batteries are the most popular in Nigeria due to their balance of cost and lifespan. Lithium batteries last longer but cost more upfront.'}
            {categoryId === 'panels' && 'Solar panels convert sunlight into electricity. Monocrystalline panels are more efficient and better for Nigerian rooftops where space may be limited. Look for Tier-1 brands with 25-year warranties.'}
            {categoryId === 'solar-kits' && 'Complete solar kits include everything you need: inverter, batteries, panels, cables, and accessories. They\'re ideal for first-time buyers who want a hassle-free setup.'}
            {categoryId === 'charge-controllers' && 'Charge controllers regulate the power flowing from solar panels to your batteries, preventing overcharging. MPPT controllers are more efficient than PWM and worth the extra cost for Nigerian installations.'}
          </p>
        </div>
      </div>
    </div>
  );
}
