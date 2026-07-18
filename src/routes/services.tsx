import { createFileRoute } from "@tanstack/react-router";
import {
  ShoppingBag, Pill, Shirt, Mail as MailIcon, Home, ShoppingCart,
  FileText, PawPrint, Stethoscope, Car, Wrench, CalendarCheck,
  ClipboardList, MapPin, Phone,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/assets";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Senior Concierge Services in Houston, TX | Roadrunner Express" },
      { name: "description", content: "Professional senior concierge and errand services in Houston — grocery shopping, prescription pickups, transportation, dry cleaning and everyday assistance for older adults." },
      { property: "og:title", content: "Senior Concierge Services in Houston, TX | Roadrunner Express" },
      { property: "og:description", content: "Grocery shopping, pharmacy pickup, personal transportation and more — professional concierge services for Houston seniors." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: ShoppingBag, t: "Grocery Shopping", d: "We shop your list, at your store, exactly the way you'd choose. Put away in the pantry on request." },
  { icon: Pill, t: "Pharmacy Pickup", d: "Prescriptions collected discreetly and delivered to your door — never a delay when it matters." },
  { icon: Shirt, t: "Dry Cleaning", d: "Drop-off, pick-up, and gently returned on the hanger." },
  { icon: MailIcon, t: "Post Office Runs", d: "Packages, certified mail and stamps — handled without the wait in line." },
  { icon: Home, t: "Household Shopping", d: "Everything from batteries to birthday gifts, sourced with care." },
  { icon: ShoppingCart, t: "Shopping Assistance", d: "Prefer to come along? We'll drive, park, and stay by your side." },
  { icon: FileText, t: "Document Delivery", d: "Bank runs, notary drops, legal paperwork — quiet, discreet, on time." },
  { icon: PawPrint, t: "Pet Transportation", d: "Grooming and boarding trips for the four-legged family members." },
  { icon: Stethoscope, t: "Vet Visits", d: "Companion transport to and from the vet, gently and unhurried." },
  { icon: Car, t: "Personal Transportation", d: "Door-through-door rides for appointments, salons, church and visits." },
  { icon: Wrench, t: "Home Management", d: "A trusted hand for the little tasks that keep home feeling like home." },
  { icon: CalendarCheck, t: "Appointments", d: "We wait, we listen, and we bring you home safely." },
  { icon: ClipboardList, t: "Errands", d: "One list, one call. We take care of it all." },
  { icon: MapPin, t: "Local Trips", d: "Familiar drivers for a Sunday drive, a family visit, or lunch across town." },
];

function Services() {
  return (
    <PageShell>
      <section className="pt-40 pb-20">
        <div className="container-luxe">
          <p className="eyebrow animate-rise">Services</p>
          <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.98] text-[var(--brand-deep)] max-w-4xl animate-rise delay-1">
            The everyday, taken care of — with a <em className="italic text-[var(--ember)]">quiet grace.</em>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[var(--brand-deep)]/75 max-w-2xl animate-rise delay-2">
            Roadrunner Express provides professional concierge and errand services for seniors throughout Houston. Whether you need grocery shopping, prescription pickups, transportation to appointments, dry cleaning, or assistance with everyday tasks, our friendly team is here to help older adults maintain their independence.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 70}>
              <article className="group h-full rounded-[1.4rem] bg-white p-8 border border-[color-mix(in_oklab,var(--brand)_8%,transparent)] hover-lift flex flex-col">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-deep)] transition group-hover:bg-[var(--ember)] group-hover:text-white">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>
                <h2 className="mt-6 font-display text-2xl text-[var(--brand-deep)]">{s.t}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--brand-deep)]/70 flex-1">{s.d}</p>
                <a href="tel:4094551963" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ember)] hover:text-[var(--brand-deep)] transition">
                  <Phone className="h-4 w-4" /> Call to book
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={IMG.transport} alt="A Roadrunner Express driver assisting a senior client into a vehicle." className="w-full aspect-[16/7] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-deep)]/85 via-[var(--brand-deep)]/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="container-luxe">
                  <div className="max-w-lg text-white">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--ember-soft)]">Not sure where to start?</p>
                    <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">We'll walk you through it, over the phone.</h2>
                    <a href="tel:4094551963" className="btn-primary mt-8"><Phone className="h-4 w-4" /> 409-455-1963</a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}