
import {
  useEffect,
  useState,
  type ReactNode,
} from 'react'

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

interface SafeImageProps {
  src?: string
  alt: string
  fallback?: string
  className?: string
  children?: ReactNode
  objectPosition?: string
  priority?: boolean
  overlay?: boolean
}

/* -------------------------------------------------------------------------- */
/* SafeImage                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Premium image container for Karta.
 *
 * Designed for:
 * - Product imagery
 * - Editorial room photography
 * - Hero sections
 * - Category cards
 * - Vendor imagery
 *
 * Images are loaded from /public and gracefully transition into the
 * surrounding fallback surface when unavailable.
 *
 * The component intentionally owns only image presentation. It does not
 * impose fixed dimensions, allowing the parent to control aspect ratio,
 * height, and responsive layout.
 */
export default function SafeImage({
  src,
  alt,
  fallback = 'bg-paper-deep',
  className = '',
  children,
  objectPosition = 'center',
  priority = false,
  overlay = false,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  /* ------------------------------------------------------------------------ */
  /* Reset image lifecycle when source changes                                */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    setFailed(false)
    setLoaded(false)
  }, [src])

  const showImage = Boolean(src) && !failed

  return (
    <div
      className={[
        'group relative isolate overflow-hidden',
        fallback,
        className,
      ].join(' ')}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Fallback atmosphere                                                 */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.12),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.045),transparent_58%)]
        "
      />

      {/* ------------------------------------------------------------------ */}
      {/* Loading surface                                                     */}
      {/* ------------------------------------------------------------------ */}

      {showImage && !loaded && (
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.08)_45%,transparent_70%)]
            bg-[length:200%_100%]
            animate-[karta-shimmer_1.8s_ease-in-out_infinite]
          "
        />
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Image                                                               */}
      {/* ------------------------------------------------------------------ */}

      {showImage && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => {
            setLoaded(true)
          }}
          onError={() => {
            setFailed(true)
            setLoaded(false)
          }}
          style={{
            objectPosition,
          }}
          className={[
            'absolute inset-0 h-full w-full object-cover',
            'transition-[opacity,transform,filter]',
            'duration-[1200ms]',
            'ease-[cubic-bezier(0.22,1,0.36,1)]',
            loaded
              ? 'scale-100 opacity-100 blur-0'
              : 'scale-[1.025] opacity-0 blur-[2px]',
            'group-hover:scale-[1.045]',
          ].join(' ')}
        />
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Editorial image wash                                                */}
      {/* ------------------------------------------------------------------ */}

      {overlay && showImage && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t
            from-black/35
            via-black/[0.025]
            to-black/[0.035]
            opacity-65
            transition-opacity duration-700
            group-hover:opacity-85
          "
        />
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Fine image texture                                                  */}
      {/* ------------------------------------------------------------------ */}

      {showImage && loaded && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            opacity-0
            transition-opacity duration-700
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_42%)]
          "
        />
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Edge treatment                                                      */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          ring-1 ring-inset ring-black/[0.045]
          transition-[box-shadow,ring-color] duration-700
          group-hover:ring-white/[0.08]
          group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]
        "
      />

      {/* ------------------------------------------------------------------ */}
      {/* Overlay content                                                     */}
      {/* ------------------------------------------------------------------ */}

      {children && (
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      )}
    </div>
  )
}