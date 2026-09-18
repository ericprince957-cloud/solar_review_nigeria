import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Sun, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = searchQuery.length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const found = products.find(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (found) {
        navigate(`/reviews/${found.id}`);
      }
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-solar-400 to-solar-600 rounded-lg flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-trust-700">SolarNaija</span>
              <span className="text-xs block text-gray-500 -mt-1">Reviews & Guides</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.slice(0, 4).map(cat => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-solar-600 hover:bg-solar-50 rounded-lg transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-solar-600 hover:bg-solar-50 rounded-lg transition-colors flex items-center gap-1">
                More <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/category/charge-controllers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50">Charge Controllers</Link>
                <Link to="/category/solar-kits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50">Complete Solar Kits</Link>
                <Link to="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50">Buying Guides</Link>
                <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50">Blog & News</Link>
                <Link to="/compare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50">Compare Products</Link>
                <hr className="my-1 border-gray-100" />
                <Link to="/methodology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50">Our Methodology</Link>
                <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50">About Us</Link>
              </div>
            </div>
          </nav>

          {/* Search + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search inverters, batteries..."
                    className="w-48 sm:w-64 pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-400 focus:border-solar-400 outline-none"
                    autoFocus
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  {/* Autocomplete */}
                  {filteredProducts.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      {filteredProducts.map(p => (
                        <Link
                          key={p.id}
                          to={`/reviews/${p.id}`}
                          onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                          className="block px-4 py-2 text-sm hover:bg-solar-50 border-b border-gray-100 last:border-0"
                        >
                          <span className="font-medium text-gray-900">{p.brand}</span>{' '}
                          <span className="text-gray-600">{p.name}</span>
                          <span className="text-solar-600 ml-2">₦{p.price.toLocaleString()}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-gray-600 hover:text-solar-600 hover:bg-solar-50 rounded-lg transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-solar-600 hover:bg-solar-50 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-solar-50 hover:text-solar-600 rounded-lg"
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
            <hr className="my-2" />
            <Link to="/guides" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-solar-50 rounded-lg">📖 Buying Guides</Link>
            <Link to="/compare" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-solar-50 rounded-lg">⚖️ Compare Products</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-solar-50 rounded-lg">📰 Blog & News</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-solar-50 rounded-lg">ℹ️ About Us</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-solar-50 rounded-lg">✉️ Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
