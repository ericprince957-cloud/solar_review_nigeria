import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Sun, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { searchProducts } from '../lib/search';
import { formatNGN } from '../lib/format';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const filteredProducts = searchQuery.length > 1
    ? searchProducts(products, searchQuery).slice(0, 5)
    : [];

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && filteredProducts.length > 0) {
      const product = filteredProducts[activeIndex >= 0 ? activeIndex : 0];
      navigate(`/reviews/${product.id}`);
      closeSearch();
    }
  };

  // Close search UI
  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
    setActiveIndex(-1);
  };

  // Keyboard navigation for autocomplete
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!searchOpen || filteredProducts.length === 0) {
      if (e.key === 'Escape') {
        closeSearch();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0) {
          navigate(`/reviews/${filteredProducts[activeIndex].id}`);
          closeSearch();
        } else if (filteredProducts.length > 0) {
          navigate(`/reviews/${filteredProducts[0].id}`);
          closeSearch();
        }
        break;
      case 'Escape':
        e.preventDefault();
        closeSearch();
        break;
    }
  };

  // Close "More" menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };

    if (moreMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [moreMenuOpen]);

  // Close "More" menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && moreMenuOpen) {
        setMoreMenuOpen(false);
      }
    };

    if (moreMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [moreMenuOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

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
            <div className="relative" ref={moreMenuRef}>
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setMoreMenuOpen(!moreMenuOpen);
                  }
                }}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-solar-600 hover:bg-solar-50 rounded-lg transition-colors flex items-center gap-1"
                aria-expanded={moreMenuOpen}
                aria-haspopup="true"
              >
                More <ChevronDown className={`w-3 h-3 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {moreMenuOpen && (
                <div 
                  className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-48 z-50"
                  role="menu"
                >
                  <Link to="/category/charge-controllers" onClick={() => setMoreMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50" role="menuitem">Charge Controllers</Link>
                  <Link to="/category/solar-kits" onClick={() => setMoreMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50" role="menuitem">Complete Solar Kits</Link>
                  <Link to="/guides" onClick={() => setMoreMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50" role="menuitem">Buying Guides</Link>
                  <Link to="/blog" onClick={() => setMoreMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50" role="menuitem">Blog & News</Link>
                  <Link to="/compare" onClick={() => setMoreMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50" role="menuitem">Compare Products</Link>
                  <hr className="my-1 border-gray-100" />
                  <Link to="/methodology" onClick={() => setMoreMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50" role="menuitem">Our Methodology</Link>
                  <Link to="/about" onClick={() => setMoreMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-solar-50" role="menuitem">About Us</Link>
                </div>
              )}
            </div>
          </nav>

          {/* Search + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="relative" role="search">
                  <label htmlFor="header-search" className="sr-only">Search products</label>
                  <input
                    id="header-search"
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setActiveIndex(-1);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Search inverters, batteries..."
                    className="w-48 sm:w-64 pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-400 focus:border-solar-400 outline-none"
                    autoFocus
                    autoComplete="off"
                    aria-autocomplete="list"
                    aria-controls="search-results"
                    aria-expanded={filteredProducts.length > 0}
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" aria-hidden="true" />
                  <button
                    type="button"
                    onClick={closeSearch}
                    className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                    aria-label="Close search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  {/* Autocomplete */}
                  {filteredProducts.length > 0 && (
                    <div 
                      id="search-results"
                      className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
                      role="listbox"
                    >
                      {filteredProducts.map((p, index) => (
                        <Link
                          key={p.id}
                          to={`/reviews/${p.id}`}
                          onClick={() => closeSearch()}
                          className={`block px-4 py-2 text-sm hover:bg-solar-50 border-b border-gray-100 last:border-0 ${
                            index === activeIndex ? 'bg-solar-50' : ''
                          }`}
                          role="option"
                          aria-selected={index === activeIndex}
                        >
                          <span className="font-medium text-gray-900">{p.brand}</span>{' '}
                          <span className="text-gray-600">{p.name}</span>
                          <span className="text-solar-600 ml-2">{formatNGN(p.price)}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {/* No results */}
                  {searchQuery.length > 1 && filteredProducts.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 text-center text-sm text-gray-500">
                      No products found
                    </div>
                  )}
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-gray-600 hover:text-solar-600 hover:bg-solar-50 rounded-lg transition-colors"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-solar-600 hover:bg-solar-50 rounded-lg"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-gray-200 bg-white">
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
