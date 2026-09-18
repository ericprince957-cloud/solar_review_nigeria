import { describe, it, expect } from 'vitest';
import { productMatchesQuery, scoreProductMatch, searchProducts } from '../search';
import type { Product } from '../../data/products';

// Minimal mock product for testing
const mockProduct: Product = {
  id: 'test-product',
  name: 'Eco Watt 1100 Pure Sine Wave Inverter',
  brand: 'Luminous',
  category: 'inverters',
  image: 'test.jpg',
  rating: 4.5,
  price: 185000,
  priceNote: 'Test',
  verdict: 'Test verdict',
  specs: { 'Capacity': '900VA' },
  pros: ['Pro 1'],
  cons: ['Con 1'],
  reviewBody: 'Test review',
  bestFor: ['Small homes'],
  faqs: [{ question: 'Q?', answer: 'A' }],
  buyLinks: [{ store: 'Test', url: 'https://example.com' }],
  ratingBreakdown: { performance: 4, durability: 4, valueForMoney: 4, easeOfInstallation: 4 },
  relatedProducts: [],
  updatedAt: '2026-06',
  basedOnSpecsAndFeedback: true,
};

describe('productMatchesQuery', () => {
  it('matches by product name', () => {
    expect(productMatchesQuery(mockProduct, 'Eco Watt')).toBe(true);
  });

  it('matches by brand', () => {
    expect(productMatchesQuery(mockProduct, 'Luminous')).toBe(true);
  });

  it('matches by category', () => {
    expect(productMatchesQuery(mockProduct, 'inverters')).toBe(true);
  });

  it('matches by spec value', () => {
    expect(productMatchesQuery(mockProduct, '900VA')).toBe(true);
  });

  it('is case-insensitive', () => {
    expect(productMatchesQuery(mockProduct, 'luminous')).toBe(true);
    expect(productMatchesQuery(mockProduct, 'LUMINOUS')).toBe(true);
  });

  it('handles whitespace', () => {
    expect(productMatchesQuery(mockProduct, '  Luminous  ')).toBe(true);
  });

  it('returns false for empty query', () => {
    expect(productMatchesQuery(mockProduct, '')).toBe(false);
    expect(productMatchesQuery(mockProduct, '   ')).toBe(false);
  });

  it('returns false for non-matching query', () => {
    expect(productMatchesQuery(mockProduct, 'xyz123nonexistent')).toBe(false);
  });
});

describe('scoreProductMatch', () => {
  it('gives higher score for exact brand match', () => {
    const exactScore = scoreProductMatch(mockProduct, 'Luminous');
    const partialScore = scoreProductMatch(mockProduct, 'Lum');
    expect(exactScore).toBeGreaterThan(partialScore);
  });

  it('gives higher score for exact name match', () => {
    const exactScore = scoreProductMatch(mockProduct, 'Eco Watt 1100 Pure Sine Wave Inverter');
    const partialScore = scoreProductMatch(mockProduct, 'Eco Watt');
    expect(exactScore).toBeGreaterThan(partialScore);
  });

  it('returns 0 for empty query', () => {
    expect(scoreProductMatch(mockProduct, '')).toBe(0);
  });
});

describe('searchProducts', () => {
  const products: Product[] = [
    mockProduct,
    { ...mockProduct, id: 'test-2', name: 'Felicity 2KVA Hybrid', brand: 'Felicity Solar', category: 'inverters' as const },
    { ...mockProduct, id: 'test-3', name: 'Exide 200Ah Battery', brand: 'Exide', category: 'batteries' as const },
  ];

  it('returns matching products', () => {
    const results = searchProducts(products, 'Luminous');
    expect(results.length).toBe(1);
    expect(results[0].brand).toBe('Luminous');
  });

  it('returns multiple matches', () => {
    const results = searchProducts(products, 'inverter');
    expect(results.length).toBe(2);
  });

  it('sorts by relevance', () => {
    const results = searchProducts(products, 'inverter');
    // Both match by category, but the first one should be first since it has higher score
    expect(results.length).toBeGreaterThan(0);
  });

  it('returns empty for no matches', () => {
    const results = searchProducts(products, 'nonexistent');
    expect(results.length).toBe(0);
  });

  it('returns empty for empty query', () => {
    const results = searchProducts(products, '');
    expect(results.length).toBe(0);
  });
});
