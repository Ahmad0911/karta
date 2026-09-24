import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#171717] antialiased selection:bg-[#171717] selection:text-white">
      {/* ------------------------------------------------------------------ */}
      {/* Global shell                                                        */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        {/* Subtle ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,197,170,0.12),transparent_34%),radial-gradient(circle_at_20%_35%,rgba(255,255,255,0.9),transparent_38%)]" />
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Header                                                            */}
        {/* ---------------------------------------------------------------- */}

        <Header />

        {/* ---------------------------------------------------------------- */}
        {/* Main content                                                      */}
        {/* ---------------------------------------------------------------- */}

        <main className="relative flex-1">
          <Outlet />
        </main>

        {/* ---------------------------------------------------------------- */}
        {/* Footer                                                            */}
        {/* ---------------------------------------------------------------- */}

        <Footer />

        {/* ---------------------------------------------------------------- */}
        {/* Floating support                                                   */}
        {/* ---------------------------------------------------------------- */}

        <WhatsAppButton />
      </div>
    </div>
  )
}