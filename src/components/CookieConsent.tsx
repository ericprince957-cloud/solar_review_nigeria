import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

type ConsentStatus = 'unknown' | 'accepted' | 'declined';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('unknown');

  useEffect(() => {
    const stored = localStorage.getItem('solarnaija-cookie-consent');
    if (stored === 'accepted' || stored === 'declined') {
      setConsentStatus(stored);
    } else {
      // Show after a short delay to not block initial render
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('solarnaija-cookie-consent', 'accepted');
    setConsentStatus('accepted');
    setVisible(false);
    // Analytics would be loaded here if consent is given
    // For now, no analytics is loaded regardless
  };

  const handleDecline = () => {
    localStorage.setItem('solarnaija-cookie-consent', 'declined');
    setConsentStatus('declined');
    setVisible(false);
  };

  if (!visible || consentStatus !== 'unknown') return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg"
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div id="cookie-consent-description" className="flex-1 text-sm text-gray-700">
          <p>
            We use essential cookies to make this site work. We'd also like to use analytics cookies to understand how you use the site, but only if you agree.{' '}
            <Link to="/privacy" className="text-solar-600 hover:underline font-medium">Privacy Policy</Link>
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg transition-colors focus:ring-2 focus:ring-solar-400 focus:outline-none"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-solar-500 hover:bg-solar-600 rounded-lg transition-colors focus:ring-2 focus:ring-solar-400 focus:outline-none"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="p-1 text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-solar-400 rounded focus:outline-none"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
