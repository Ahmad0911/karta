
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Role, User } from '@/types'

/* -------------------------------------------------------------------------- */
/* Karta Authentication State                                                 */
/* -------------------------------------------------------------------------- */
/**
 * MOCK AUTH
 *
 * Replace the implementation with the NestJS authentication API when the
 * backend is connected:
 *
 * - JWT authentication
 * - OTP verification
 * - Email verification
 * - Session refresh
 * - Password recovery
 *
 * BRD / FR reference: FR-AUTH-001..007
 */

interface RegisterData {
  name: string
  email: string
  phone: string
}

interface AuthState {
  user: User | null

  /** Whether a user is currently authenticated. */
  isAuthenticated: boolean

  /** Mock login — replace with API authentication later. */
  login: (email: string, role?: Role) => void

  /** Mock registration — replace with API registration later. */
  register: (data: RegisterData) => void

  /** Clear the current authenticated session. */
  logout: () => void
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const createMockUser = (
  data: Omit<User, 'id'>,
): User => ({
  id: crypto.randomUUID(),
  ...data,
})

const getNameFromEmail = (email: string) => {
  const localPart = email.split('@')[0]?.trim()

  if (!localPart) {
    return 'Karta Customer'
  }

  return localPart
    .replace(/[._-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

/* -------------------------------------------------------------------------- */
/* Store                                                                      */
/* -------------------------------------------------------------------------- */

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (email, role = 'customer') => {
        const normalizedEmail = email.trim().toLowerCase()

        const user = createMockUser({
          name: getNameFromEmail(normalizedEmail),
          email: normalizedEmail,
          role,
        })

        set({
          user,
          isAuthenticated: true,
        })
      },

      register: (data) => {
        const user = createMockUser({
          name: data.name.trim(),
          email: data.email.trim().toLowerCase(),
          phone: data.phone.trim(),
          role: 'customer',
        })

        set({
          user,
          isAuthenticated: true,
        })
      },

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'karta-auth',
    },
  ),
)
