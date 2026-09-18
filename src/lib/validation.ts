/**
 * Product data validation utility
 * Validates product data in development mode
 */

import type { Product } from '../data/products';

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validate a single product
 */
export function validateProduct(product: Product, allProducts: Product[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Required fields
  if (!product.id || typeof product.id !== 'string') {
    errors.push('Product ID is required and must be a string');
  }
  
  if (!product.name || typeof product.name !== 'string') {
    errors.push('Product name is required and must be a string');
  }
  
  if (!product.brand || typeof product.brand !== 'string') {
    errors.push('Product brand is required and must be a string');
  }
  
  // Category validation
  const validCategories = ['inverters', 'batteries', 'panels', 'solar-kits', 'charge-controllers'];
  if (!validCategories.includes(product.category)) {
    errors.push(`Invalid category: ${product.category}. Must be one of: ${validCategories.join(', ')}`);
  }
  
  // Rating validation (0-5)
  if (typeof product.rating !== 'number' || product.rating < 0 || product.rating > 5) {
    errors.push(`Rating must be a number between 0 and 5, got: ${product.rating}`);
  }
  
  // Rating breakdown validation
  if (product.ratingBreakdown) {
    const breakdown = product.ratingBreakdown;
    const breakdownFields = ['performance', 'durability', 'valueForMoney', 'easeOfInstallation'] as const;
    
    for (const field of breakdownFields) {
      const value = breakdown[field];
      if (typeof value !== 'number' || value < 0 || value > 5) {
        errors.push(`Rating breakdown.${field} must be between 0 and 5, got: ${value}`);
      }
    }
    
    if (breakdown.batteryLife !== undefined) {
      if (typeof breakdown.batteryLife !== 'number' || breakdown.batteryLife < 0 || breakdown.batteryLife > 5) {
        errors.push(`Rating breakdown.batteryLife must be between 0 and 5, got: ${breakdown.batteryLife}`);
      }
    }
  }
  
  // Price validation
  if (typeof product.price !== 'number' || product.price < 0) {
    errors.push(`Price must be a non-negative number, got: ${product.price}`);
  }
  
  // Image validation
  if (!product.image || typeof product.image !== 'string') {
    warnings.push('Product image is missing or invalid');
  }
  
  // Arrays validation
  if (!Array.isArray(product.pros)) {
    errors.push('Pros must be an array');
  }
  
  if (!Array.isArray(product.cons)) {
    errors.push('Cons must be an array');
  }
  
  if (!Array.isArray(product.bestFor)) {
    warnings.push('bestFor should be an array');
  }
  
  if (!Array.isArray(product.faqs)) {
    warnings.push('FAQs should be an array');
  } else {
    product.faqs.forEach((faq, index) => {
      if (!faq.question || !faq.answer) {
        errors.push(`FAQ ${index} is missing question or answer`);
      }
    });
  }
  
  // Buy links validation
  if (!Array.isArray(product.buyLinks)) {
    warnings.push('buyLinks should be an array');
  } else {
    product.buyLinks.forEach((link, index) => {
      if (!link.store) {
        warnings.push(`Buy link ${index} is missing store name`);
      }
      if (!link.url || typeof link.url !== 'string') {
        errors.push(`Buy link ${index} is missing or invalid URL`);
      } else if (!link.url.startsWith('http://') && !link.url.startsWith('https://')) {
        errors.push(`Buy link ${index} URL must start with http:// or https://, got: ${link.url}`);
      }
    });
  }
  
  // Related products validation
  if (product.relatedProducts && Array.isArray(product.relatedProducts)) {
    product.relatedProducts.forEach(relatedId => {
      if (!allProducts.some(p => p.id === relatedId)) {
        warnings.push(`Related product ID "${relatedId}" does not exist in product list`);
      }
      if (relatedId === product.id) {
        errors.push('Product cannot be related to itself');
      }
    });
  }
  
  // Updated at validation
  if (!product.updatedAt || typeof product.updatedAt !== 'string') {
    warnings.push('updatedAt is missing or invalid');
  }
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate all products
 */
export function validateAllProducts(products: Product[]): void {
  if (import.meta.env.DEV) {
    const productIds = new Set<string>();
    const duplicateIds: string[] = [];
    
    console.group('Validating product data...');
    
    products.forEach((product, index) => {
      // Check for duplicate IDs
      if (productIds.has(product.id)) {
        duplicateIds.push(product.id);
      }
      productIds.add(product.id);
      
      // Validate individual product
      const result = validateProduct(product, products);
      
      if (result.errors.length > 0) {
        console.error(`[ERROR] Product ${index} (${product.id || 'unknown'}):`, result.errors);
      }
      
      if (result.warnings.length > 0) {
        console.warn(`[WARN] Product ${index} (${product.id || 'unknown'}):`, result.warnings);
      }
      
      if (result.valid && result.warnings.length === 0) {
        console.log(`[OK] Product ${index} (${product.id}): Valid`);
      }
    });
    
    if (duplicateIds.length > 0) {
      console.error('[ERROR] Duplicate product IDs found:', duplicateIds);
    }
    
    console.groupEnd();
  }
}
