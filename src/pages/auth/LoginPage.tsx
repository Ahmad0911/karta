import { useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Field from '@/components/ui/Field';
import { useAuthStore } from '@/store/auth.store';
import type { Role } from '@/types';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();
  const from = (useLocation().state as { from?: string } | null)?.from ?? '/';
  const go = (role: Role = 'customer') => { login(email || `${role}@karta.test`, role); navigate(from, { replace: true }); };
  const submit = (e: FormEvent) => { e.preventDefault(); go(); };

  return (
    <>
      <h1 className="font-display text-5xl font-medium tracking-tight">Welcome back.</h1>
      <p className="mt-2 text-sm text-ink/55">Sign in to continue to checkout and your orders.</p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <Field label="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        <Field label="Password" type="password" required autoComplete="current-password" />
        <button className="btn-dark w-full">Sign in</button>
      </form>
      <p className="mt-6 text-center text-sm text-ink/55">New to Karta? <Link to="/register" state={{ from }} className="font-semibold text-ink underline underline-offset-4">Create an account</Link></p>
      {import.meta.env.DEV && (
        <div className="mt-10 border-t border-ink/10 pt-5 text-xs text-ink/45">
          Dev only: sign in as{' '}
          {(['vendor', 'admin', 'logistics'] as Role[]).map((r) => <button key={r} type="button" onClick={() => go(r)} className="mr-2 underline">{r}</button>)}
        </div>
      )}
    </>
  );
}
