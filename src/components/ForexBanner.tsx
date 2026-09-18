import { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

export default function ForexBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
        <p className="text-xs sm:text-sm text-amber-800 flex-1">
          <strong>Price Note:</strong> Solar equipment prices in Nigeria fluctuate with forex rates. All prices shown are approximate — verify at point of purchase.
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 text-amber-600 hover:text-amber-800 shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
