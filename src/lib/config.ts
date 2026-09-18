/**
 * Site-wide configuration for SolarNaija
 * Centralizes site metadata and URL generation
 */

export const SITE_CONFIG = {
  name: 'SolarNaija',
  tagline: 'Honest Solar Equipment Reviews for Nigerian Homes',
  description: 'Research-based reviews of solar inverters, batteries, panels, and kits for Nigerian homes and businesses. Compare products, read buying guides, and make informed decisions.',
  email: 'hello@solarnaija.com',
  
  // Read from environment variable with fallback for development
  url: import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
  
  // Social media (optional - only if you have accounts)
  // twitter: '@SolarNaija',
  // facebook: 'https://facebook.com/solarnaija',
  
  // Content metadata
  lastSiteUpdate: '2026-06-15', // ISO date string
} as const;

/**
 * Generate a canonical URL for a page
 * Ensures consistent URL formatting
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, ''); // Remove trailing slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Generate Open Graph metadata for a page
 */
export function getOGMeta(options: {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
}) {
  const url = getCanonicalUrl(options.path || '');
  
  return {
    'og:title': options.title,
    'og:description': options.description,
    'og:url': url,
    'og:type': options.type || 'website',
    'og:site_name': SITE_CONFIG.name,
    ...(options.image && { 'og:image': options.image }),
    'twitter:card': 'summary_large_image',
    'twitter:title': options.title,
    'twitter:description': options.description,
    ...(options.image && { 'twitter:image': options.image }),
  };
}
