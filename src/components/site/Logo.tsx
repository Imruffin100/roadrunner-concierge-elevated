import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="Roadrunner Express home">
      <svg width="42" height="42" viewBox="0 0 64 64" fill="none" aria-hidden>
        <circle cx="32" cy="32" r="30" stroke="var(--brand)" strokeWidth="2.5" fill="color-mix(in oklab, var(--brand-soft) 60%, white)" />
        <path d="M14 40 C 18 34, 24 30, 30 30 L 34 26 L 38 30 C 42 30, 46 32, 48 36 L 46 40 L 42 40 L 40 44 L 36 44 L 34 40 L 22 40 L 20 44 L 16 44 Z" fill="var(--brand)"/>
        <circle cx="36" cy="28" r="1.6" fill="white"/>
        <rect x="42" y="24" width="10" height="10" rx="1.5" fill="var(--ember)" stroke="var(--brand)" strokeWidth="1.2"/>
        <path d="M4 42 L 14 42 M 6 46 L 16 46" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-[1.05rem] font-semibold tracking-tight text-[var(--brand-deep)]">Roadrunner</span>
        <span className="block text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[var(--ember)]">Express</span>
      </span>
    </Link>
  );
}