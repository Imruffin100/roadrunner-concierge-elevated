import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Roadrunner Express Senior Concierge" },
      { name: "description", content: "Simple, transparent pricing for senior errand, transportation and concierge services in Houston. VIP membership and monthly plans available." },
      { property: "og:title", content: "Simple, Transparent Pricing" },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Single Errand",
    price: "$30",
    unit: "per errand",
    tag: "Pay as you go",
    perks: ["One stop, one price", "No membership required", "Book any day, 6 AM – 6 PM"],
  },
  {
    name: "VIP Membership",
    price: "$25",
    unit: "per errand",
    tag: "Most popular",
    featured: true,
    perks: ["Discounted errand rate", "Priority scheduling", "Familiar drivers", "Monthly billing available"],
  },
  {
    name: "Monthly Plan",
    price: "$110",
    unit: "for 4 errands",
    tag: "Great value",
    perks: ["Four errands per month", "Roll into a routine", "Cancel anytime"],
  },
  {
    name: "Weekly Plan",
    price: "$220",
    unit: "for 8 errands",
    tag: "Full support",
    perks: ["Eight errands per month", "Best for busy households", "Priority scheduling"],
  },
];

const addons = [
  ["Longer Errands", "$40"],
  ["Store + Longer Trips", "$40"],
  ["Waiting Time", "$10 / 30 min"],
  ["Heavy Items", "+$5"],
  ["Pet Transportation", "$45"],
  ["Home Management", "$30 / hour"],
  ["Personal Transportation — Base", "$40"],
  ["Round Trip (up to 10 mi)", "Included"],
  ["Additional Miles", "$3 / mile"],
];

function Pricing() {
  return (
    <PageShell>
      <section className="pt-40 pb-16">
        <div className="container-luxe max-w-4xl">
          <p className="eyebrow animate-rise">Pricing</p>
          <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.98] text-[var(--brand-deep)] animate-rise delay-1">
            Kind, transparent, and always <em className="italic text-[var(--ember)]">predictable.</em>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[var(--brand-deep)]/75 max-w-2xl animate-rise delay-2">
            No surge fees. No hidden charges. Just clear, flat pricing designed to feel fair — every single time.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <div className={`h-full rounded-[1.5rem] p-8 flex flex-col border ${p.featured ? "bg-[var(--brand-deep)] text-white border-[var(--brand-deep)] shadow-[0_30px_60px_-30px_oklch(0.22_0.08_258/0.6)]" : "bg-white border-[color-mix(in_oklab,var(--brand)_10%,transparent)]"} hover-lift`}>
                <div className={`text-xs font-medium tracking-[0.22em] uppercase ${p.featured ? "text-[var(--ember-soft)]" : "text-[var(--ember)]"}`}>{p.tag}</div>
                <h2 className={`mt-4 font-display text-3xl ${p.featured ? "text-white" : "text-[var(--brand-deep)]"}`}>{p.name}</h2>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className={`font-display text-6xl ${p.featured ? "text-white" : "text-[var(--brand-deep)]"}`}>{p.price}</span>
                  <span className={`text-sm ${p.featured ? "text-white/70" : "text-[var(--brand-deep)]/60"}`}>{p.unit}</span>
                </div>
                <ul className={`mt-8 space-y-3 text-[15px] flex-1 ${p.featured ? "text-white/80" : "text-[var(--brand-deep)]/75"}`}>
                  {p.perks.map((k) => (
                    <li key={k} className="flex gap-3"><Check className={`h-5 w-5 shrink-0 ${p.featured ? "text-[var(--ember-soft)]" : "text-[var(--ember)]"}`} /> {k}</li>
                  ))}
                </ul>
                <a href="tel:4094551963" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium ${p.featured ? "bg-[var(--ember)] text-white" : "bg-[var(--brand-soft)] text-[var(--brand-deep)] hover:bg-[var(--brand)] hover:text-white transition"}`}>
                  <Phone className="h-4 w-4" /> Call to enroll
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-luxe grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          <Reveal>
            <p className="eyebrow">Add-ons & rates</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-[var(--brand-deep)] leading-tight">Additional options, priced clearly.</h2>
            <p className="mt-6 text-[var(--brand-deep)]/70 max-w-lg leading-relaxed">Every add-on is optional. Every rate is flat. If you'd rather talk through it, we're a phone call away.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:4094551963" className="btn-primary"><Phone className="h-4 w-4" /> 409-455-1963</a>
              <Link to="/contact" className="btn-ghost">Get a written quote <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[1.5rem] bg-white border border-[color-mix(in_oklab,var(--brand)_10%,transparent)] p-2">
              <dl className="divide-y divide-[color-mix(in_oklab,var(--brand)_8%,transparent)]">
                {addons.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between px-6 py-4">
                    <dt className="text-[15px] text-[var(--brand-deep)]/80">{k}</dt>
                    <dd className="font-display text-xl text-[var(--brand-deep)]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxe">
          <Reveal>
            <div className="rounded-[2rem] bg-[color-mix(in_oklab,var(--brand-soft)_60%,var(--cream))] p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="eyebrow">Payment</p>
                <h3 className="mt-3 font-display text-3xl text-[var(--brand-deep)]">Pay whichever way is easiest for you.</h3>
                <p className="mt-3 text-[var(--brand-deep)]/70">Cash · Card · Check · Apple Pay · Cash App · Zelle</p>
              </div>
              <a href="tel:4094551963" className="btn-primary"><Phone className="h-4 w-4" /> Call to book</a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}