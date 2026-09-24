
import type { InputHTMLAttributes } from 'react'

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type FieldProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function createFieldId(label: string) {
  const slug = label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return `field-${slug || 'input'}`
}

/* -------------------------------------------------------------------------- */
/* Field                                                                      */
/* -------------------------------------------------------------------------- */

export default function Field({
  label,
  id,
  className = '',
  ...props
}: FieldProps) {
  const inputId = id ?? createFieldId(label)

  return (
    <label
      htmlFor={inputId}
      className="group block w-full"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Label                                                               */}
      {/* ------------------------------------------------------------------ */}

      <span
        className={[
          'mb-2.5 block pl-0.5',
          'text-[10px] font-semibold uppercase',
          'tracking-[0.2em] text-[#151b1c]/45',
          'transition-colors duration-200 ease-out',
          'group-focus-within:text-[#151b1c]/75',
        ].join(' ')}
      >
        {label}
      </span>

      {/* ------------------------------------------------------------------ */}
      {/* Input                                                               */}
      {/* ------------------------------------------------------------------ */}

      <input
        {...props}
        id={inputId}
        className={[
          'h-[54px] w-full rounded-[0.9rem]',
          'border border-[#151b1c]/[0.09]',
          'bg-white/65',
          'px-4 text-[14px] font-medium',
          'tracking-[-0.005em] text-[#151b1c]',
          'placeholder:text-[#151b1c]/25',
          'shadow-[0_1px_2px_rgba(21,27,28,0.025)]',
          'outline-none',
          'backdrop-blur-sm',
          'transition-all duration-250 ease-out',

          /* Hover */
          'hover:border-[#151b1c]/[0.16]',
          'hover:bg-white/85',

          /* Focus */
          'focus:border-[#151b1c]/[0.28]',
          'focus:bg-white',
          'focus:ring-4',
          'focus:ring-[#151b1c]/[0.035]',

          /* Disabled */
          'disabled:cursor-not-allowed',
          'disabled:bg-[#151b1c]/[0.025]',
          'disabled:opacity-50',

          className,
        ].join(' ')}
      />
    </label>
  )
}