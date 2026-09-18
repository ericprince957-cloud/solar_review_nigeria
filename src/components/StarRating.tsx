import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

/**
 * Clamp a value between min and max
 */
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export default function StarRating({ rating, size = 'md', showNumber = true }: StarRatingProps) {
  // Validate and clamp rating
  const validRating = typeof rating === 'number' && !isNaN(rating) ? clamp(rating, 0, 5) : 0;
  
  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4.5 h-4.5',
    lg: 'w-5 h-5',
  };

  // Calculate stars with deliberate half-star threshold (0.3+)
  const fullStars = Math.floor(validRating);
  const hasHalf = validRating - fullStars >= 0.3;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalf ? 1 : 0));

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rated ${validRating.toFixed(1)} out of 5`}>
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className={`${sizeClasses[size]} fill-solar-400 text-solar-400`} aria-hidden="true" />
        ))}
        {hasHalf && <StarHalf className={`${sizeClasses[size]} fill-solar-400 text-solar-400`} aria-hidden="true" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className={`${sizeClasses[size]} text-gray-300`} aria-hidden="true" />
        ))}
      </div>
      {showNumber && (
        <span className={`font-semibold text-gray-700 ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'}`}>
          {validRating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

interface RatingBarProps {
  label: string;
  value: number;
}

export function RatingBar({ label, value }: RatingBarProps) {
  // Validate and clamp value
  const validValue = typeof value === 'number' && !isNaN(value) ? clamp(value, 0, 5) : 0;
  const percentage = (validValue / 5) * 100;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 w-32 shrink-0">{label}</span>
      <div 
        className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={validValue}
        aria-valuemin={0}
        aria-valuemax={5}
        aria-label={`${label}: ${validValue.toFixed(1)} out of 5`}
      >
        <div
          className="h-full bg-gradient-to-r from-solar-400 to-solar-500 rounded-full transition-all"
          style={{ width: `${clamp(percentage, 0, 100)}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-gray-700 w-8 text-right">{validValue.toFixed(1)}</span>
    </div>
  );
}
