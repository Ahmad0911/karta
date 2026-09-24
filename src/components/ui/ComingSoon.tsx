
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ComingSoonProps {
  title: string
  note: string
}

export default function ComingSoon({
  title,
  note,
}: ComingSoonProps) {
  return (
    <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-[#f8f6f1] text-[#151b1c]">
      {/* ------------------------------------------------------------------ */}
      {/* Ambient architecture                                               */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Soft central glow */}
        <div className="absolute left-[42%] top-[42%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9d0c1]/20 blur-[100px]" />

        {/* Architectural vertical line */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-black/[0.035]" />

        <div className="absolute right-[12%] top-0 h-full w-px bg-black/[0.025]" />

        {/* Horizontal editorial rule */}
        <div className="absolute inset-x-0 top-0 h-px bg-black/[0.07]" />

        <div className="absolute inset-x-0 bottom-[12%] h-px bg-black/[0.025]" />

        {/* Large decorative circle */}
        <div className="absolute -right-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full border border-black/[0.035]" />

        <div className="absolute -right-24 top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 rounded-full border border-black/[0.025]" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Content                                                             */}
      {/* ------------------------------------------------------------------ */}

      <div className="container-x flex min-h-[calc(100vh-5rem)] items-center py-20 sm:py-24 lg:py-28">
        <div className="w-full max-w-4xl">
          {/* Editorial eyebrow */}
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-12 bg-[#151b1c]/35"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#151b1c]/45">
              Karta / Experience
            </span>

            <span
              aria-hidden="true"
              className="h-px w-12 bg-[#151b1c]/10"
            />
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-3xl font-display text-[3.25rem] font-medium leading-[0.94] tracking-[-0.045em] text-[#151b1c] sm:text-6xl lg:text-[5.75rem]">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-[15px] leading-7 text-[#151b1c]/55 sm:text-lg sm:leading-8">
            {note}
          </p>

          {/* ---------------------------------------------------------------- */}
          {/* Status card                                                      */}
          {/* ---------------------------------------------------------------- */}

          <div className="mt-12 max-w-2xl rounded-[1.5rem] border border-black/[0.07] bg-white/60 p-5 shadow-[0_20px_70px_rgba(20,25,25,0.045)] backdrop-blur-sm sm:p-6">
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Status indicator */}
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-[#f8f6f1]">
                <span className="absolute h-2.5 w-2.5 animate-pulse rounded-full bg-[#151b1c]/55" />

                <span className="h-5 w-5 rounded-full border border-black/[0.08]" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#151b1c]/40">
                  Currently in development
                </p>

                <p className="mt-2 max-w-lg text-sm leading-6 text-[#151b1c]/60">
                  We’re carefully preparing this experience so it meets the
                  same Karta standard as the rest of the collection.
                </p>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Navigation                                                        */}
          {/* ---------------------------------------------------------------- */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#151b1c] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(21,27,28,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#222a2b] hover:shadow-[0_16px_36px_rgba(21,27,28,0.16)]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />

              <span>Return to Karta</span>
            </Link>

            <Link
              to="/shop"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/[0.1] bg-white/55 px-6 text-sm font-medium text-[#151b1c]/70 backdrop-blur-sm transition-all duration-300 hover:border-black/[0.2] hover:bg-white hover:text-[#151b1c]"
            >
              Explore the collection

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Brand footer                                                     */}
          {/* ---------------------------------------------------------------- */}

          <div className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-medium uppercase tracking-[0.25em] text-[#151b1c]/30">
            <span>Karta</span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-[#151b1c]/15"
            />

            <span>Furniture</span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-[#151b1c]/15"
            />

            <span>Living</span>

            <span
              aria-hidden="true"
              className="h-px w-7 bg-[#151b1c]/15"
            />

            <span>Design</span>
          </div>
        </div>
      </div>
    </section>
  )
}
