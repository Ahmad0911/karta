import { MessageCircle } from 'lucide-react'
import { whatsappEnabled, whatsappLink } from '@/lib/whatsapp'

export default function WhatsAppButton() {
  if (!whatsappEnabled) return null

  return (
    <a
      href={whatsappLink(
        "Hello Karta, I'd like some help choosing a piece."
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Karta on WhatsApp"
      className="
        group fixed bottom-6 right-6 z-40
        flex items-center
        rounded-full
        border border-white/10
        bg-ink/95
        px-3.5 py-3.5
        text-paper
        shadow-[0_20px_55px_-18px_rgba(0,0,0,0.75)]
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-ink
        hover:shadow-[0_24px_65px_-18px_rgba(0,0,0,0.85)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/30
      "
    >
      {/* Icon container */}
      <span
        className="
          flex h-10 w-10 items-center justify-center
          rounded-full
          border border-white/10
          bg-white/[0.06]
          transition-all duration-500
          group-hover:bg-white/[0.10]
          group-hover:border-white/20
        "
      >
        <MessageCircle
          className="
            h-[18px] w-[18px]
            stroke-[1.7]
            text-paper
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </span>

      {/* Label */}
      <span
        className="
          max-w-0 overflow-hidden whitespace-nowrap
          text-[13px] font-medium tracking-[0.01em]
          opacity-0
          transition-all duration-500
          group-hover:ml-2.5
          group-hover:max-w-[100px]
          group-hover:opacity-100
        "
      >
        Chat with us
      </span>

      {/* Subtle ambient glow */}
      <span
        className="
          pointer-events-none absolute inset-0 -z-10
          rounded-full
          bg-white/[0.03]
          blur-xl
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />
    </a>
  )
}