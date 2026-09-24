
import { useEffect, type ReactNode } from 'react'
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import PublicLayout from '@/layouts/PublicLayout'
import AuthLayout from '@/layouts/AuthLayout'

import RequireAuth from '@/components/layout/RequireAuth'
import ComingSoon from '@/components/ui/ComingSoon'

import HomePage from '@/pages/public/HomePage'
import ShopPage from '@/pages/public/ShopPage'
import ProductPage from '@/pages/public/ProductPage'
import CartPage from '@/pages/public/CartPage'
import NotFoundPage from '@/pages/public/NotFoundPage'

import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'

import type { Role } from '@/types'

/* -------------------------------------------------------------------------- */
/* Scroll restoration                                                         */
/* -------------------------------------------------------------------------- */

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}

/* -------------------------------------------------------------------------- */
/* Protected route helper                                                     */
/* -------------------------------------------------------------------------- */

interface GuardOptions {
  title: string
  note: string
  roles?: Role[]
}

/**
 * Temporary protected-route shell.
 *
 * This keeps authentication and role authorization centralized while the
 * individual dashboard modules are being implemented.
 *
 * Once a real page exists, replace only the `ComingSoon` element — the route
 * protection itself can remain unchanged.
 */
function ProtectedPage({
  title,
  note,
  roles,
}: GuardOptions): ReactNode {
  return (
    <RequireAuth roles={roles}>
      <ComingSoon
        title={title}
        note={note}
      />
    </RequireAuth>
  )
}

/* -------------------------------------------------------------------------- */
/* Application                                                                */
/* -------------------------------------------------------------------------- */

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* ---------------------------------------------------------------- */}
        {/* Public storefront                                                 */}
        {/* ---------------------------------------------------------------- */}

        <Route element={<PublicLayout />}>
          <Route
            index
            element={<HomePage />}
          />

          <Route
            path="shop"
            element={<ShopPage />}
          />

          <Route
            path="product/:id"
            element={<ProductPage />}
          />

          <Route
            path="cart"
            element={<CartPage />}
          />

          {/* -------------------------------------------------------------- */}
          {/* Customer                                                         */}
          {/* -------------------------------------------------------------- */}

          <Route
            path="checkout"
            element={
              <ProtectedPage
                title="Checkout"
                note="Address, delivery method, assembly, Paystack/Flutterwave payment and order review (FR-CHECK, FR-PAY)."
              />
            }
          />

          <Route
            path="account/*"
            element={
              <ProtectedPage
                title="My account"
                note="Orders, live tracking, wishlist, returns and support tickets (BRD §12)."
              />
            }
          />

          {/* -------------------------------------------------------------- */}
          {/* Vendor                                                           */}
          {/* -------------------------------------------------------------- */}

          <Route
            path="vendor/*"
            element={
              <ProtectedPage
                title="Vendor portal"
                note="Onboarding, products, inventory, orders, analytics and settlements (BRD §13)."
                roles={[
                  'vendor',
                  'admin',
                ]}
              />
            }
          />

          {/* -------------------------------------------------------------- */}
          {/* Administration                                                   */}
          {/* -------------------------------------------------------------- */}

          <Route
            path="admin/*"
            element={
              <ProtectedPage
                title="Admin control center"
                note="Vendor approval, product moderation, orders, finance, support and audit logs (BRD §16)."
                roles={[
                  'admin',
                ]}
              />
            }
          />

          {/* -------------------------------------------------------------- */}
          {/* Logistics                                                        */}
          {/* -------------------------------------------------------------- */}

          <Route
            path="logistics/*"
            element={
              <ProtectedPage
                title="Logistics"
                note="Delivery assignment, status updates and proof of delivery (BRD §14)."
                roles={[
                  'logistics',
                  'admin',
                ]}
              />
            }
          />

          {/* -------------------------------------------------------------- */}
          {/* Public fallback                                                  */}
          {/* -------------------------------------------------------------- */}

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>

        {/* ---------------------------------------------------------------- */}
        {/* Authentication                                                    */}
        {/* ---------------------------------------------------------------- */}

        <Route element={<AuthLayout />}>
          <Route
            path="login"
            element={<LoginPage />}
          />

          <Route
            path="register"
            element={<RegisterPage />}
          />
        </Route>
      </Routes>
    </>
  )
}
