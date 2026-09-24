import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#f7f5f0]">
      {/* Ambient architectural detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-black/[0.06]" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-black/[0.05]" />

        <div className="absolute left-[8%] top-0 h-full w-px bg-black/[0.035]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-black/[0.035]" />

        <div className="absolute bottom-[14%] left-0 h-px w-full bg-black/[0.035]" />
      </div>

      <div className="container-x relative flex min-h-[calc(100vh-5rem)] items-center py-20">
        <div className="w-full max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-black/30" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/50">
              Karta · Page Not Found
            </p>
          </div>

          {/* Main content */}
          <div className="mt-10">
            <p className="font-display text-[clamp(7rem,18vw,15rem)] font-light leading-[0.72] tracking-[-0.07em] text-black/[0.07]">
              404
            </p>

            <div className="relative -mt-6 ml-1 max-w-2xl sm:-mt-10">
              <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#151515] sm:text-6xl lg:text-7xl">
                A room that
                <br />
                <span className="italic font-light">doesn’t exist.</span>
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-black/55 sm:text-base">
                It looks like this space has moved on. Return to Karta and
                continue exploring considered furniture, refined interiors,
                and pieces made for living beautifully.
              </p>

              {/* Actions */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="group inline-flex h-12 items-center justify-center gap-3 bg-[#151515] px-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-black sm:h-14"
                >
                  <ArrowLeft
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />

                  Back to Karta
                </Link>

                <Link
                  to="/products"
                  className="group inline-flex h-12 items-center justify-center gap-3 border border-black/10 bg-white/60 px-6 text-[11px] font-medium uppercase tracking-[0.18em] text-black/70 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white hover:text-black sm:h-14"
                >
                  Explore collection

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom signature */}
          <div className="mt-20 flex items-center gap-4 border-t border-black/[0.08] pt-5">
            <span className="font-display text-sm tracking-wide text-black/70">
              KARTA
            </span>

            <span className="h-px w-8 bg-black/15" />

            <span className="text-[9px] uppercase tracking-[0.28em] text-black/35">
              Furniture · Interiors · Living
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}