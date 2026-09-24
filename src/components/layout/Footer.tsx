import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react'
import Logo from '@/components/brand/Logo'

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

const GROUPS = [
  {
    title: 'Shop',
    links: [
      ['Living room', '/shop?room=living'],
      ['Bedroom', '/shop?room=bedroom'],
      ['Dining room', '/shop?room=dining'],
      ['Office', '/shop?room=office'],
    ],
  },
  {
    title: 'Support',
    links: [
      ['Track an order', '/account/orders'],
      ['Returns & refunds', '/account/returns'],
      ['Help centre', '/account/support'],
      ['Contact us', '/account/support'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About Karta', '/'],
      ['Become a vendor', '/register'],
      ['Careers', '/'],
    ],
  },
] as const

const SOCIALS = [
  {
    label: 'Instagram',
    icon: Instagram,
    href: '#',
  },
  {
    label: 'Facebook',
    icon: Facebook,
    href: '#',
  },
  {
    label: 'YouTube',
    icon: Youtube,
    href: '#',
  },
] as const

/* -------------------------------------------------------------------------- */
/* Newsletter                                                                 */
/* -------------------------------------------------------------------------- */

function Newsletter() {
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <div className="mt-7 rounded-2xl border border-paper/10 bg-paper/[0.035] px-5 py-4">
        <p className="text-sm leading-6 text-paper/70">
          Thank you. You&apos;ll be among the first to discover new pieces,
          collections and arrivals.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setDone(true)
      }}
      className="
        group mt-7 flex max-w-md
        overflow-hidden rounded-full
        border border-paper/10
        bg-paper/[0.035]
        p-1
        transition-all duration-300
        focus-within:border-paper/25
        focus-within:bg-paper/[0.055]
      "
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>

      <input
        id="footer-email"
        type="email"
        required
        placeholder="Your email address"
        aria-label="Email address"
        className="
          min-w-0 flex-1
          bg-transparent
          px-5 py-3
          text-sm text-paper
          outline-none
          placeholder:text-paper/30
        "
      />

      <button
        type="submit"
        aria-label="Subscribe to Karta"
        className="
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-full
          bg-paper text-ink
          transition-all duration-300
          hover:scale-105
          hover:bg-brass-500
        "
      >
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-focus-within:rotate-45" />
      </button>
    </form>
  )
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* Subtle atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 -top-40
          h-[28rem] w-[28rem]
          rounded-full
          bg-brass-500/[0.035]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-48 -left-48
          h-[30rem] w-[30rem]
          rounded-full
          bg-paper/[0.025]
          blur-3xl
        "
      />

      <div className="container-x relative">
        {/* ------------------------------------------------------------------ */}
        {/* Editorial CTA                                                      */}
        {/* ------------------------------------------------------------------ */}

        <section className="border-b border-paper/10 py-20 sm:py-24 lg:py-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-4xl">
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-brass-500">
                The Karta collection
              </p>

              <h2
                className="
                  max-w-4xl
                  font-display
                  text-5xl
                  font-medium
                  leading-[0.92]
                  tracking-[-0.035em]
                  text-paper
                  sm:text-6xl
                  lg:text-8xl
                "
              >
                Make space for
                <span className="mt-2 block italic text-paper/40">
                  better living.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-paper/45 sm:text-base">
                Thoughtfully selected furniture, distinctive makers and pieces
                designed to make the spaces you live in feel considered.
              </p>
            </div>

            <Link
              to="/shop"
              className="
                group inline-flex w-fit shrink-0
                items-center gap-4
                rounded-full
                border border-paper/15
                bg-paper/[0.025]
                px-5 py-3
                text-sm font-medium
                text-paper/85
                transition-all duration-300
                hover:border-paper/30
                hover:bg-paper/[0.07]
                hover:text-paper
              "
            >
              <span>Explore the collection</span>

              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  bg-paper text-ink
                  transition-all duration-300
                  group-hover:rotate-45
                  group-hover:bg-brass-500
                "
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Main footer                                                        */}
        {/* ------------------------------------------------------------------ */}

        <section className="grid gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo tone="light" />

            <p className="mt-6 max-w-md text-sm leading-7 text-paper/45">
              A curated marketplace for furniture and home living — connecting
              you with distinctive makers, considered pieces and a more
              thoughtful way to furnish your space.
            </p>

            {/* Newsletter */}
            <div className="mt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-paper/35">
                Private access
              </p>

              <h3 className="mt-3 font-display text-xl tracking-tight text-paper/85">
                First look at what&apos;s new.
              </h3>

              <Newsletter />
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-paper/10
                    bg-paper/[0.02]
                    text-paper/40
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-paper/25
                    hover:bg-paper/[0.06]
                    hover:text-paper
                  "
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:col-span-7 lg:pl-10">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brass-500">
                  {group.title}
                </p>

                <ul className="mt-6 space-y-4">
                  {group.links.map(([label, to]) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="
                          group/link
                          inline-flex items-center
                          text-sm text-paper/50
                          transition-colors duration-300
                          hover:text-paper
                        "
                      >
                        <span>{label}</span>

                        <ArrowUpRight
                          className="
                            ml-1.5 h-3 w-3
                            -translate-y-0.5
                            opacity-0
                            transition-all duration-300
                            group-hover/link:translate-x-0.5
                            group-hover/link:opacity-50
                          "
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Brand statement                                                    */}
        {/* ------------------------------------------------------------------ */}

        <div className="border-t border-paper/10 py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-xl text-[10px] uppercase leading-5 tracking-[0.16em] text-paper/25">
              Furniture · Interiors · Makers · Living
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-paper/30
                  transition-colors
                  hover:text-paper/70
                "
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-paper/30
                  transition-colors
                  hover:text-paper/70
                "
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Copyright                                                           */}
        {/* ------------------------------------------------------------------ */}

        <div
          className="
            flex flex-col gap-3
            border-t border-paper/[0.06]
            py-6
            text-[10px]
            uppercase
            tracking-[0.14em]
            text-paper/20
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Karta. All rights reserved.
          </p>

          <p>Crafted for considered living.</p>
        </div>
      </div>
    </footer>
  )
}