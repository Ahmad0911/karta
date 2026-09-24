/**
 * Central image registry for Karta.
 *
 * All assets live in /public/images and are referenced
 * directly from the public root.
 */

const img = (name: string) => `/images/${name}`

export const IMAGES = {
  /**
   * Main landing-page hero.
   */
  hero: img('Karta 1.jpeg'),

  /**
   * Room collections.
   */
  rooms: {
    bedroom: img('Bedroom 1.jpeg'),
    dining: img('Dining 1.jpeg'),
    living: img('Karta 2.jpeg'),
    office: img('Karta 3.jpeg'),
    outdoor: img('Karta 4.jpeg'),
    lighting: img('Karta 5.jpeg'),
    rugs: img('Karta 6.jpeg'),
    decor: img('Karta 7.jpeg'),
  },

  /**
   * Karta product / furniture imagery.
   */
  products: {
    karta01: img('Karta 1.jpeg'),
    karta02: img('Karta 2.jpeg'),
    karta03: img('Karta 3.jpeg'),
    karta04: img('Karta 4.jpeg'),
    karta05: img('Karta 5.jpeg'),
    karta06: img('Karta 6.jpeg'),
    karta07: img('Karta 7.jpeg'),
    karta08: img('Karta 8.jpeg'),
    karta09: img('Karta 9.jpeg'),
    karta10: img('Karta 10.jpeg'),
    karta11: img('Karta 11.jpeg'),
    karta12: img('Karta 12.jpeg'),
    karta13: img('Karta 13.jpeg'),
    karta14: img('Karta 14.jpeg'),
  },

  /**
   * Bedroom collection.
   */
  bedrooms: {
    bedroom01: img('Bedroom 1.jpeg'),
    bedroom02: img('Bedroom 2.jpeg'),
    bedroom03: img('Bedroom 3.jpeg'),
    bedroom04: img('Bedroom 4.jpeg'),
    bedroom05: img('Bedroom 5.jpeg'),
    bedroom06: img('Bedroom 6.jpeg'),
  },

  /**
   * Dining collection.
   */
  dining: {
    dining01: img('Dining 1.jpeg'),
    dining02: img('Dining 2.jpeg'),
    dining03: img('Dining 3.jpeg'),
    dining04: img('Dining 4.jpeg'),
    dining05: img('Dining 5.jpeg'),
    dining06: img('Dining 6.jpeg'),
    dining07: img('Dining 7.jpeg'),
  },
} as const