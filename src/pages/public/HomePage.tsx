import Hero from '@/modules/marketing/components/Hero'
import CategoryShowcase from '@/modules/marketing/components/CategoryShowcase'
import FeaturedCollection from '@/modules/marketing/components/FeaturedCollection'
import PromiseSection from '@/modules/marketing/components/PromiseSection'
import VendorStrip from '@/modules/marketing/components/VendorStrip'

import { useDocumentTitle } from '@/lib/useDocumentTitle'

export default function HomePage() {
  useDocumentTitle()

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f6f1] text-[#151b1c] selection:bg-[#b79a6b]/20 selection:text-[#151b1c]">
      {/* ------------------------------------------------------------------ */}
      {/* Hero — immersive brand introduction                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden">
        {/* Soft ambient background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_20%,rgba(183,154,107,0.10),transparent_32%),radial-gradient(circle_at_15%_75%,rgba(16,30,33,0.045),transparent_30%)]"
        />

        <Hero />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Category Discovery — curated rooms                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden border-t border-[#151b1c]/[0.06] bg-[#f8f6f1]">
        {/* Editorial top rule */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-[#b79a6b]/45"
        />

        <CategoryShowcase />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Featured Collection — statement pieces                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#eeebe4]">
        {/* Large atmospheric shape */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[#b79a6b]/[0.045] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[#151b1c]/[0.025] blur-3xl"
        />

        <div className="relative">
          <FeaturedCollection />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Karta Promise — brand philosophy                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden border-y border-[#151b1c]/[0.06] bg-[#151e20] text-white">
        {/* Subtle luxury texture / lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(183,154,107,0.13),transparent_28%),radial-gradient(circle_at_82%_70%,rgba(255,255,255,0.035),transparent_30%)]"
        />

        {/* Fine architectural lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.045] lg:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-0 hidden h-full w-px bg-white/[0.045] lg:block"
        />

        <div className="relative">
          <PromiseSection />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Curated Vendor Network — makers & partners                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#f8f6f1]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b79a6b]/35 to-transparent"
        />

        <VendorStrip />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Closing brand space                                                  */}
      {/* ------------------------------------------------------------------ */}
      <div
        aria-hidden="true"
        className="h-8 bg-[#f8f6f1] sm:h-12 lg:h-16"
      />
    </main>
  )
}