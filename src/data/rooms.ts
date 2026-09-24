import type { Category } from '@/types'

/**
 * Room-first browsing for the Karta marketplace.
 *
 * Product types such as sofas, beds, tables, etc. are maintained
 * separately in categories.ts and can be used as product filters.
 *
 * BRD §12.3
 */
export const rooms: Category[] = [
  {
    id: 'living',
    name: 'Living Room',
  },
  {
    id: 'dining',
    name: 'Dining Room',
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
  },
  {
    id: 'office',
    name: 'Office',
  },
  {
    id: 'outdoor',
    name: 'Outdoor',
  },
  {
    id: 'lighting',
    name: 'Lighting',
  },
  {
    id: 'rugs',
    name: 'Rugs & Carpets',
  },
  {
    id: 'decor',
    name: 'Décor',
  },
]