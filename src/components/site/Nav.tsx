import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[color-mix(in_oklab,var(--cream)_75%,transparent)] border-b border-[color-mix(in_oklab,var(--brand)_10%,transparent)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--brand-deep)]/80 transition hover:text-[var(--brand-deep)] hover:bg-white/60"
              activeProps={{
                className:
                  "rounded-full px-4 py-2 text-sm font-medium text-[var(--brand-deep)] bg-white/70 shadow-sm",
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:4094551963" className="btn-primary text-sm">
            <Phone className="h-4 w-4" aria-hidden /> 409-455-1963
          </a>
        </div>
        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 backdrop-blur border border-[color-mix(in_oklab,var(--brand)_15%,transparent)]"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5 text-[var(--brand-deep)]" />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-[60] bg-[var(--brand-deep)]/95 backdrop-blur-2xl lg:hidden animate-fadein">
          <div className="container-luxe flex h-20 items-center justify-between">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-luxe mt-6 flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-5 py-4 text-2xl font-display text-white/90 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:4094551963" className="btn-primary mt-6 self-start">
              <Phone className="h-4 w-4" /> Call 409-455-1963
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function StickyCall() {
  return (
    <a
      href="tel:4094551963"
      className="fixed bottom-5 right-5 z-40 lg:hidden inline-flex items-center gap-2 rounded-full bg-[var(--ember)] px-5 py-3.5 text-white font-medium shadow-[0_18px_40px_-12px_color-mix(in_oklab,var(--ember)_65%,transparent)]"
      aria-label="Call Roadrunner Express"
    >
      <Phone className="h-4 w-4" /> Call Now
    </a>
  );
}
