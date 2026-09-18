import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Search } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Helmet>
        <title>Page Not Found — SolarNaija</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved. Let's get you back to finding the right solar equipment.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-solar-500 hover:bg-solar-600 text-white font-medium rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link
            to="/category/inverters"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 hover:border-solar-300 text-gray-700 font-medium rounded-lg transition-colors"
          >
            <Search className="w-4 h-4" /> Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
