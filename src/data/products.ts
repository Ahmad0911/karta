import type { Product, Vendor } from '@/types'

import { IMAGES } from '@/data/images'

/**
 * SAMPLE CATALOG DATA
 *
 * Temporary frontend data for the Karta marketplace.
 * Replace with catalog/API data when the backend is connected.
 *
 * Image assets are centralized in:
 * /src/data/images.ts
 *
 * Physical image files live in:
 * /public/images/
 */

/* -------------------------------------------------------------------------- */
/* Vendors                                                                    */
/* -------------------------------------------------------------------------- */

const ade: Vendor = {
  id: 'v1',
  name: 'Ade & Sons Woodworks',
  trustScore: 92,
}

const nsukka: Vendor = {
  id: 'v2',
  name: 'Nsukka Craft House',
  trustScore: 88,
}

const abuja: Vendor = {
  id: 'v3',
  name: 'Abuja Living Co.',
  trustScore: 76,
}

const zuri: Vendor = {
  id: 'v4',
  name: 'Zuri Interiors',
  trustScore: 63,
}

/* -------------------------------------------------------------------------- */
/* Products                                                                   */
/* -------------------------------------------------------------------------- */

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Adaeze Bouclé Three-Seater Sofa',
    categoryId: 'sofas',
    room: 'living',
    price: 685000,
    originalPrice: 780000,
    vendor: ade,
    rating: 4.8,
    reviewCount: 64,
    material: 'Bouclé, kiln-dried hardwood frame',
    dimensions: '218 × 92 × 78 cm',
    colors: [
      { name: 'Ivory', hex: '#E9E2D3' },
      { name: 'Sand', hex: '#C9B79C' },
      { name: 'Charcoal', hex: '#3B4143' },
    ],
    deliveryEstimateDays: [5, 9],
    assemblyAvailable: true,
    inStock: true,
    tag: 'Bestseller',
    swatch: 'from-[#d8cbb5] to-[#a89373]',
    image: IMAGES.products.karta01,
  },

  {
    id: 'p2',
    name: 'Oba Solid Oak Bed Frame, King',
    categoryId: 'beds',
    room: 'bedroom',
    price: 540000,
    vendor: nsukka,
    rating: 4.7,
    reviewCount: 41,
    material: 'Solid oak, oiled finish',
    dimensions: '203 × 193 × 110 cm',
    colors: [
      { name: 'Natural', hex: '#C8A37A' },
      { name: 'Smoked', hex: '#6B5844' },
    ],
    deliveryEstimateDays: [7, 12],
    assemblyAvailable: true,
    inStock: true,
    tag: 'New Arrival',
    swatch: 'from-[#c9b28f] to-[#8c7455]',
    image: IMAGES.bedrooms.bedroom01,
  },

  {
    id: 'p3',
    name: 'Kano Six-Seater Dining Table',
    categoryId: 'tables',
    room: 'dining',
    price: 420000,
    vendor: ade,
    rating: 4.9,
    reviewCount: 28,
    material: 'Iroko top, powder-coated steel legs',
    dimensions: '180 × 90 × 75 cm',
    deliveryEstimateDays: [6, 10],
    assemblyAvailable: true,
    inStock: true,
    tag: 'Featured',
    swatch: 'from-[#bfa886] to-[#7d6748]',
    image: IMAGES.dining.dining01,
  },

  {
    id: 'p4',
    name: 'Zuri Curved Lounge Chair',
    categoryId: 'chairs',
    room: 'living',
    price: 185000,
    originalPrice: 220000,
    vendor: zuri,
    rating: 4.4,
    reviewCount: 19,
    material: 'Velvet, beech legs',
    dimensions: '78 × 80 × 74 cm',
    colors: [
      { name: 'Moss', hex: '#4D6A4F' },
      { name: 'Clay', hex: '#B5715A' },
    ],
    deliveryEstimateDays: [4, 8],
    assemblyAvailable: false,
    inStock: true,
    tag: 'Hot Deal',
    swatch: 'from-[#a9b8a3] to-[#5f7660]',
    image: IMAGES.products.karta02,
  },

  {
    id: 'p5',
    name: 'Halo Brass Floor Lamp',
    categoryId: 'lighting',
    room: 'lighting',
    price: 96000,
    vendor: abuja,
    rating: 4.6,
    reviewCount: 33,
    material: 'Brushed brass, linen shade',
    dimensions: '32 × 32 × 165 cm',
    deliveryEstimateDays: [3, 6],
    assemblyAvailable: false,
    inStock: false,
    swatch: 'from-[#e3d3b4] to-[#b99a64]',
    image: IMAGES.products.karta03,
  },

  {
    id: 'p6',
    name: 'Ankara Linen Three-Door Wardrobe',
    categoryId: 'storage',
    room: 'bedroom',
    price: 610000,
    vendor: nsukka,
    rating: 4.7,
    reviewCount: 22,
    material: 'Engineered oak veneer, soft-close hinges',
    dimensions: '180 × 60 × 220 cm',
    deliveryEstimateDays: [8, 14],
    assemblyAvailable: true,
    inStock: true,
    tag: 'Premium',
    swatch: 'from-[#cfc3af] to-[#8f8068]',
    image: IMAGES.bedrooms.bedroom02,
  },

  {
    id: 'p7',
    name: 'Executive Walnut Desk',
    categoryId: 'office',
    room: 'office',
    price: 480000,
    vendor: ade,
    rating: 4.8,
    reviewCount: 17,
    material: 'Walnut veneer, leather inlay',
    dimensions: '160 × 75 × 76 cm',
    deliveryEstimateDays: [6, 10],
    assemblyAvailable: true,
    inStock: true,
    swatch: 'from-[#b59b7e] to-[#6e5741]',
    image: IMAGES.products.karta04,
  },

  {
    id: 'p8',
    name: 'Lekki Ceramic Vase Set of Three',
    categoryId: 'decor',
    room: 'decor',
    price: 38500,
    vendor: abuja,
    rating: 4.5,
    reviewCount: 52,
    material: 'Hand-glazed stoneware',
    dimensions: 'Tallest 34 cm',
    deliveryEstimateDays: [2, 5],
    assemblyAvailable: false,
    inStock: true,
    swatch: 'from-[#ece4d4] to-[#c4b499]',
    image: IMAGES.products.karta05,
  },
]

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Retrieve a single product by its ID.
 */
export const getProduct = (id: string): Product | undefined =>
  products.find((product) => product.id === id)