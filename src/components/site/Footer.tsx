import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 bg-[var(--brand-deep)] text-white/80">
      <div className="container-luxe py-20 grid gap-14 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <Logo />
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            A senior concierge service built on dignity, patience and human connection. Delivering more than packages across greater Houston since day one.
          </p>
          <a href="tel:4094551963" className="btn-primary mt-8">
            <Phone className="h-4 w-4" /> 409-455-1963
          </a>
        </div>
        <div>
          <h3 className="text-xs font-medium tracking-[0.22em] uppercase text-[var(--ember-soft)]">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/pricing", "Pricing"],
              ["/gallery", "Gallery"],
              ["/faq", "FAQ"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white transition">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-medium tracking-[0.22em] uppercase text-[var(--ember-soft)]">Visit</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[var(--ember-soft)]" /><span>3707 Cypress Creek Pkwy, Suite 310<br/>Houston, TX 77068</span></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-[var(--ember-soft)]" /><span>Every day · 6 AM – 6 PM</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-[var(--ember-soft)]" /><a href="tel:4094551963" className="hover:text-white">409-455-1963</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-[var(--ember-soft)]" /><a href="mailto:roadrunnerexpresinc@gmail.com" className="hover:text-white break-all">roadrunnerexpresinc@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-luxe py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Roadrunner Express. Senior concierge service · Houston, TX.</p>
          <p>Non-medical concierge · Locally owned · Community focused</p>
        </div>
      </div>
    </footer>
  );
}