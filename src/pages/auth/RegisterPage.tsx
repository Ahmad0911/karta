import { useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Field from '@/components/ui/Field';
import { useAuthStore } from '@/store/auth.store';

export default function RegisterPage() {
  const [f, setF] = useState({ name: '', email: '', phone: '' });
  const register = useAuthStore((s) => s.register);
  const navigate = useNavigate();
  const from = (useLocation().state as { from?: string } | null)?.from ?? '/';
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: FormEvent) => { e.preventDefault(); register(f); navigate(from, { replace: true }); };

  return (
    <>
      <h1 className="font-display text-5xl font-medium tracking-tight">Create your account.</h1>
      <p className="mt-2 text-sm text-ink/55">Basic verification: name, phone and email (BRD §10.1).</p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <Field label="Full name" required value={f.name} onChange={set('name')} autoComplete="name" />
        <Field label="Email" type="email" required value={f.email} onChange={set('email')} autoComplete="email" />
        <Field label="Phone number" type="tel" required value={f.phone} onChange={set('phone')} autoComplete="tel" />
        <Field label="Password" type="password" required minLength={8} autoComplete="new-password" />
        <button className="btn-dark w-full">Create account</button>
      </form>
      <p className="mt-6 text-center text-sm text-ink/55">Already registered? <Link to="/login" state={{ from }} className="font-semibold text-ink underline underline-offset-4">Sign in</Link></p>
    </>
  );
}
