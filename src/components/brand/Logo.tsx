import { Link } from 'react-router-dom';

export default function Logo({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const light = tone === 'light';
  return (
    <Link to="/" aria-label="Karta home" className={`group inline-flex items-center gap-3 ${className}`}>
      <img src={`/brand/karta-mark${light ? '-light' : ''}.png`} alt="" className="h-8 w-auto transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className={`font-display text-[1.6rem] font-semibold uppercase leading-none tracking-[0.3em] ${light ? 'text-paper' : 'text-ink'}`}>Karta</span>
    </Link>
  );
}
