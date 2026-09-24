
/* -------------------------------------------------------------------------- */
/* Karta — Site Configuration                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Central storefront configuration.
 *
 * Keep globally shared commercial and brand-level constants here so pricing
 * and presentation logic do not become scattered throughout the application.
 */

export interface SiteConfig {
  /** Public-facing brand name. */
  name: string

  /** Professional assembly fee in NGN. */
  assemblyFee: number
}

export const SITE: SiteConfig = {
  name: 'Karta',

  // NGN 15,000 per assembled cart item.
  assemblyFee: 15_000,
}