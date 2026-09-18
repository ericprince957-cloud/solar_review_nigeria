/**
 * Search matching utility for SolarNaija
 * Provides consistent search behavior across the app
 */

import type { Product } from '../data/products';

/**
 * Normalize text for search matching
 * - Converts to lowercase
 * - Trims whitespace
 * - Collapses multiple spaces
 */
function normalizeText(text: string): string {
  return text.toLowerCase().trim().replace(/\s+/g, ' ');
}

/**
 * Check if a product matches a search query
 * Searches across: name, brand, category, and key specifications
 */
export function productMatchesQuery(product: Product, query: string): boolean {
  if (!query || query.trim().length === 0) return false;
  
  const normalizedQuery = normalizeText(query);
  
  // Check basic fields
  const nameMatch = normalizeText(product.name).includes(normalizedQuery);
  const brandMatch = normalizeText(product.brand).includes(normalizedQuery);
  const categoryMatch = normalizeText(product.category).includes(normalizedQuery);
  
  if (nameMatch || brandMatch || categoryMatch) return true;
  
  // Check specification values (but not too noisy)
  const specValues = Object.values(product.specs || {});
  return specValues.some(value => 
    normalizeText(String(value)).includes(normalizedQuery)
  );
}

/**
 * Score a product match for ranking
 * Higher score = better match
 */
export function scoreProductMatch(product: Product, query: string): number {
  if (!query || query.trim().length === 0) return 0;
  
  const normalizedQuery = normalizeText(query);
  const normalizedName = normalizeText(product.name);
  const normalizedBrand = normalizeText(product.brand);
  const normalizedCategory = normalizeText(product.category);
  
  let score = 0;
  
  // Exact matches get highest priority
  if (normalizedName === normalizedQuery) score += 100;
  else if (normalizedName.startsWith(normalizedQuery)) score += 80;
  else if (normalizedName.includes(normalizedQuery)) score += 60;
  
  if (normalizedBrand === normalizedQuery) score += 90;
  else if (normalizedBrand.startsWith(normalizedQuery)) score += 70;
  else if (normalizedBrand.includes(normalizedQuery)) score += 50;
  
  if (normalizedCategory === normalizedQuery) score += 80;
  else if (normalizedCategory.includes(normalizedQuery)) score += 40;
  
  // Bonus for higher-rated products
  score += product.rating * 2;
  
  return score;
}

/**
 * Search products and return sorted results
 */
export function searchProducts(products: Product[], query: string): Product[] {
  if (!query || query.trim().length === 0) return [];
  
  return products
    .filter(product => productMatchesQuery(product, query))
    .sort((a, b) => scoreProductMatch(b, query) - scoreProductMatch(a, query));
}
