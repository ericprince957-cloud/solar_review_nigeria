import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { categories } from '../data/products';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'not-configured'>('idle');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous state
    setMessage('');
    
    // Validate email
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    // Check if newsletter service is configured
    const newsletterUrl = import.meta.env.VITE_NEWSLETTER_API_URL;
    if (!newsletterUrl) {
      setStatus('not-configured');
      setMessage('Newsletter service is not configured yet. Please check back later or contact us directly.');
      return;
    }
    
    // Prevent duplicate submissions
    if (status === 'loading') return;
    
    setStatus('loading');
    
    try {
      const response = await fetch(newsletterUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          source: 'footer',
        }),
      });
      
      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing! You\'ll receive our latest updates.');
        setEmail(''); // Clear form on success
      } else {
        setStatus('error');
        setMessage('Failed to subscribe. Please try again later.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <footer className="bg-trust-800 text-white">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-solar-600 to-solar-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Get Price Alerts & New Reviews</h3>
              <p className="text-solar-100 text-sm mt-1">Be the first to know when prices drop or new products are reviewed</p>
            </div>
            <div className="w-full md:w-auto">
              {status === 'success' ? (
                <div 
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">{message}</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto gap-2">
                  <div className="flex-1 md:flex-initial">
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error' || status === 'not-configured') {
                          setStatus('idle');
                          setMessage('');
                        }
                      }}
                      placeholder="your@email.com"
                      required
                      disabled={status === 'loading'}
                      className="w-full md:w-64 px-4 py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
                      aria-describedby={message ? "newsletter-message" : undefined}
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="px-6 py-2.5 bg-trust-700 hover:bg-trust-600 disabled:bg-trust-500 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-2"
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </form>
              )}
              
              {(status === 'error' || status === 'not-configured') && message && (
                <div 
                  id="newsletter-message"
                  className="mt-2 flex items-start gap-2 text-sm text-white/90"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{message}</span>
                </div>
              )}
            </div>
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
              Honest solar equipment reviews for Nigerian homes and businesses. All reviews are based on published specifications and verified buyer feedback.
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

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-solar-400 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-solar-400 text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-solar-400 text-sm transition-colors">Affiliate Disclaimer</Link></li>
              <li><Link to="/methodology" className="text-gray-400 hover:text-solar-400 text-sm transition-colors">Review Methodology</Link></li>
            </ul>
            <div className="mt-4 space-y-1 text-xs text-gray-500">
              <p>✅ Independent Reviews</p>
              <p>✅ Specs-Based Analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>© 2026 SolarNaija Reviews. All rights reserved.</p>
            <p className="text-center">
              <strong>Affiliate Disclosure:</strong> We earn commissions from qualifying purchases. This does not affect our ratings.{' '}
              <Link to="/disclaimer" className="text-solar-400 hover:underline">Full disclosure</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
