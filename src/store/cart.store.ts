
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

/* -------------------------------------------------------------------------- */
/* Cart Types                                                                 */
/* -------------------------------------------------------------------------- */

export interface CartItem {
  productId: string
  qty: number
  assembly: boolean
}

interface CartState {
  items: CartItem[]
  wishlist: string[]

  /** Add a product or increase its existing quantity. */
  add: (
    productId: string,
    qty?: number,
    assembly?: boolean,
  ) => void

  /** Set an exact quantity for a product. */
  setQty: (
    productId: string,
    qty: number,
  ) => void

  /** Toggle professional assembly for a product. */
  toggleAssembly: (
    productId: string,
  ) => void

  /** Remove a product completely from the cart. */
  remove: (
    productId: string,
  ) => void

  /** Empty the cart while preserving the wishlist. */
  clear: () => void

  /** Add/remove a product from the wishlist. */
  toggleWishlist: (
    productId: string,
  ) => void
}

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const MIN_QUANTITY = 1

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const normalizeQuantity = (qty: number) =>
  Math.max(MIN_QUANTITY, Math.floor(qty))

/* -------------------------------------------------------------------------- */
/* Store                                                                      */
/* -------------------------------------------------------------------------- */

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      wishlist: [],

      add: (
        productId,
        qty = 1,
        assembly = false,
      ) =>
        set((state) => {
          const quantity = normalizeQuantity(qty)

          const existingItem = state.items.find(
            (item) => item.productId === productId,
          )

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.productId === productId
                  ? {
                      ...item,
                      qty: item.qty + quantity,

                      // Once assembly has been selected for an item,
                      // adding it again does not silently remove it.
                      assembly: item.assembly || assembly,
                    }
                  : item,
              ),
            }
          }

          return {
            items: [
              ...state.items,
              {
                productId,
                qty: quantity,
                assembly,
              },
            ],
          }
        }),

      setQty: (
        productId,
        qty,
      ) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  qty: normalizeQuantity(qty),
                }
              : item,
          ),
        })),

      toggleAssembly: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  assembly: !item.assembly,
                }
              : item,
          ),
        })),

      remove: (productId) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.productId !== productId,
          ),
        })),

      clear: () =>
        set({
          items: [],
        }),

      toggleWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter(
                (id) => id !== productId,
              )
            : [
                ...state.wishlist,
                productId,
              ],
        })),
    }),

    {
      name: 'karta-cart',

      /**
       * Persist only the actual cart/wishlist state.
       * Keeping this explicit makes future store expansion safer.
       */
      partialize: (state) => ({
        items: state.items,
        wishlist: state.wishlist,
      }),
    },
  ),
)

/* -------------------------------------------------------------------------- */
/* Derived Selectors                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Total number of physical pieces currently in the cart.
 *
 * Example:
 * 2 × Chair + 3 × Table = 5
 */
export const useCartCount = () =>
  useCartStore((state) =>
    state.items.reduce(
      (total, item) => total + item.qty,
      0,
    ),
  )

/**
 * Number of distinct products in the cart.
 *
 * Example:
 * 2 × Chair + 3 × Table = 2
 */
export const useCartItemCount = () =>
  useCartStore((state) => state.items.length)

/**
 * Whether a specific product is currently wishlisted.
 */
export const useIsWishlisted = (productId: string) =>
  useCartStore((state) =>
    state.wishlist.includes(productId),
  )
