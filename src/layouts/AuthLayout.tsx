import { Outlet } from 'react-router-dom'
import Logo from '@/components/brand/Logo'
import { IMAGES } from '@/data/images'

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-paper text-ink lg:grid lg:grid-cols-[1.08fr_0.92fr]">
      {/* ------------------------------------------------------------------ */}
      {/* Editorial Brand Panel                                               */}
      {/* ------------------------------------------------------------------ */}

      <aside className="relative hidden min-h-screen overflow-hidden bg-ink text-paper lg:flex lg:flex-col lg:justify-between">
        {/* Background photography */}
        <img
          src={IMAGES.products.karta01}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.28]"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-ink/80 to-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        {/* Subtle architectural lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="absolute left-[12%] top-0 h-full w-px bg-paper" />
          <div className="absolute left-[24%] top-0 h-full w-px bg-paper" />
          <div className="absolute right-[14%] top-0 h-full w-px bg-paper" />
          <div className="absolute left-0 top-[22%] h-px w-full bg-paper" />
          <div className="absolute left-0 bottom-[18%] h-px w-full bg-paper" />
        </div>

        {/* Oversized decorative mark */}
        <img
          src="/brand/karta-mark-light.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 w-[34rem] opacity-[0.045]"
        />

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-screen flex-col justify-between p-10 xl:p-14">
          {/* Top */}
          <div className="flex items-start justify-between">
            <Logo tone="light" />

            <div className="hidden items-center gap-2 text-[9px] font-medium uppercase tracking-[0.28em] text-paper/35 xl:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-500" />
              Curated Living
            </div>
          </div>

          {/* Editorial statement */}
          <div className="max-w-xl pb-4">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-brass-500" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brass-500">
                Trust-first marketplace
              </p>
            </div>

            <h1 className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-paper xl:text-6xl 2xl:text-7xl">
              Furniture
              <br />
              <span className="italic text-paper/55">
                worth coming home to.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-paper/55">
              Discover exceptional furniture from verified makers and
              thoughtfully curated collections — with confidence from
              selection to delivery.
            </p>

            {/* Trust points */}
            <div className="mt-10 grid max-w-lg grid-cols-3 border-y border-paper/10 py-5">
              <div className="pr-5">
                <p className="font-display text-xl text-paper">01</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-paper/35">
                  Verified
                </p>
              </div>

              <div className="border-l border-paper/10 px-5">
                <p className="font-display text-xl text-paper">02</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-paper/35">
                  Tracked
                </p>
              </div>

              <div className="border-l border-paper/10 pl-5">
                <p className="font-display text-xl text-paper">03</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-paper/35">
                  Delivered
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-end justify-between border-t border-paper/10 pt-5">
            <p className="text-[9px] uppercase tracking-[0.22em] text-paper/25">
              © {new Date().getFullYear()} Hamd Tech Ltd
            </p>

            <p className="text-[9px] uppercase tracking-[0.22em] text-paper/25">
              Karta
            </p>
          </div>
        </div>
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/* Authentication Panel                                                */}
      {/* ------------------------------------------------------------------ */}

      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-paper px-5 py-12 sm:px-10 lg:px-14 xl:px-20">
        {/* Soft ambient decoration */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brass-500/[0.035] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-ink/[0.025] blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-[410px]">
          {/* Mobile brand */}
          <div className="mb-14 flex items-center justify-between lg:hidden">
            <Logo />

            <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-ink/35">
              <span className="h-1.5 w-1.5 rounded-full bg-brass-500" />
              Karta
            </div>
          </div>

          {/* Auth content */}
          <Outlet />

          {/* Security reassurance */}
          <div className="mt-12 flex items-center justify-center gap-2 border-t border-ink/[0.07] pt-5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 text-ink/30"
              aria-hidden="true"
            >
              <path
                d="M7 10V8a5 5 0 0 1 10 0v2M6 10h12v9H6v-9Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-[9px] uppercase tracking-[0.18em] text-ink/30">
              Secure & private
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}