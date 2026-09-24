
import { ShieldCheck } from 'lucide-react';
import {
  trustCategoryFromScore,
  type TrustCategory,
} from '@/types';

const META: Record<
  TrustCategory,
  {
    label: string;
    tone: string;
    accent: string;
    background: string;
  }
> = {
  excellent: {
    label: 'Highly trusted',
    tone: 'text-[#315d4b]',
    accent: 'border-[#315d4b]/15',
    background: 'bg-[#315d4b]/[0.06]',
  },

  good: {
    label: 'Reliable vendor',
    tone: 'text-[#8a642f]',
    accent: 'border-[#9a7338]/15',
    background: 'bg-[#9a7338]/[0.06]',
  },

  fair: {
    label: 'Moderate monitoring',
    tone: 'text-[#8a642f]',
    accent: 'border-[#9a7338]/15',
    background: 'bg-[#9a7338]/[0.06]',
  },

  watchlist: {
    label: 'Watchlist',
    tone: 'text-[#a45b25]',
    accent: 'border-[#a45b25]/15',
    background: 'bg-[#a45b25]/[0.06]',
  },

  'high-risk': {
    label: 'High risk',
    tone: 'text-[#9b302d]',
    accent: 'border-[#9b302d]/15',
    background: 'bg-[#9b302d]/[0.06]',
  },
};

/**
 * Surfaces the BRD §11 vendor trust score wherever a vendor is named.
 *
 * Visual treatment:
 * - compact mode: discreet provenance marker
 * - default mode: premium trust certification pill
 *
 * Trust logic and category mapping remain unchanged.
 */
export default function TrustBadge({
  vendorName,
  score,
  compact = false,
}: {
  vendorName: string;
  score: number;
  compact?: boolean;
}) {
  const category = trustCategoryFromScore(score);
  const { label, tone, accent, background } = META[category];

  return (
    <span
      title={`${vendorName} · ${label} · Trust score ${score}/100`}
      className={`
        group/trust
        inline-flex
        max-w-full
        items-center
        gap-2
        rounded-full
        border
        ${accent}
        ${background}
        ${tone}
        transition-all
        duration-300
        hover:border-current/25
      `}
    >
      {/* ============================================================ */}
      {/* Trust seal                                                     */}
      {/* ============================================================ */}

      <span
        className="
          flex
          h-6
          w-6
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-current/15
          bg-white/70
          shadow-[0_2px_8px_rgba(16,30,33,0.04)]
          backdrop-blur-sm
        "
      >
        <ShieldCheck
          className="
            h-3.5
            w-3.5
            transition-transform
            duration-300
            group-hover/trust:scale-105
          "
          strokeWidth={2}
        />
      </span>

      {/* ============================================================ */}
      {/* Vendor identity                                                */}
      {/* ============================================================ */}

      <span
        className="
          min-w-0
          truncate
          text-[10px]
          font-semibold
          tracking-[0.01em]
          text-[#101E21]/75
        "
      >
        {vendorName}
      </span>

      {!compact && (
        <>
          {/* Elegant separator */}
          <span
            className="
              h-3
              w-px
              shrink-0
              bg-current/15
            "
          />

          {/* Trust category */}
          <span
            className="
              shrink-0
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              opacity-75
            "
          >
            {label}
          </span>

          {/* Score */}
          <span
            className="
              shrink-0
              border-l
              border-current/10
              pl-2
              text-[10px]
              font-semibold
              tabular-nums
              opacity-60
            "
          >
            {score}
            <span className="ml-0.5 text-[8px] opacity-60">
              /100
            </span>
          </span>
        </>
      )}
    </span>
  );
}