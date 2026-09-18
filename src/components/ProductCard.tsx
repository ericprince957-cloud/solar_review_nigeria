import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink } from 'lucide-react';
import StarRating from './StarRating';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  badge?: string;
  compact?: boolean;
}

export default function ProductCard({ product, badge, compact = false }: ProductCardProps) {
  if (compact) {
    return (
      <Link
        to={`/reviews/${product.id}`}
        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-solar-300 hover:shadow-sm transition-all"
      >
        <img src={product.image} alt={product.name} loading="lazy" className="w-14 h-14 rounded-lg object-cover shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-solar-600 font-medium">{product.brand}</p>
          <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRating rating={product.rating} size="sm" />
            <span className="text-xs text-gray-500">₦{product.price.toLocaleString()}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-solar-200 transition-all group">
      {/* Image */}
      <div className="relative">
        <Link to={`/reviews/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-solar-500 text-white text-xs font-bold rounded-full">
            {badge}
          </span>
        )}
        {product.basedOnSpecsAndFeedback && (
          <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-trust-600 text-white text-xs font-medium rounded-full">
            <BookOpen className="w-3 h-3" />
            Specs & Feedback
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-solar-600 font-semibold uppercase tracking-wide">{product.brand}</p>
        <Link to={`/reviews/${product.id}`}>
          <h3 className="text-base font-bold text-gray-900 mt-1 hover:text-solar-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2">
          <StarRating rating={product.rating} size="sm" />
        </div>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.verdict}</p>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <div>
            <span className="text-lg font-bold text-gray-900">₦{product.price.toLocaleString()}</span>
            <p className="text-xs text-gray-500">Price may vary</p>
          </div>
          <Link
            to={`/reviews/${product.id}`}
            className="flex items-center gap-1 px-3 py-1.5 bg-solar-500 hover:bg-solar-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Read Review <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
