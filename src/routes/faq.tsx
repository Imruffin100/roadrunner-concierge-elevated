import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, Phone, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

const faqs = [
  { q: "How do I book a service?", a: "Just pick up the phone and dial 409-455-1963. A real member of our team will answer, walk you through options, and get you scheduled — no forms or downloads required." },
  { q: "Do I need an app or a smartphone?", a: "Not at all. Roadrunner Express is intentionally phone-based. If you can dial a number, you can book anything we offer." },
  { q: "What areas do you serve?", a: "We proudly serve Houston, North Houston, Cypress, Spring, and the surrounding 77068 area." },
  { q: "How far will you travel for an errand?", a: "Our base transportation rate covers a round trip of up to 10 miles. Additional miles are billed at a flat $3 per mile." },
  { q: "Can family members book on my behalf?", a: "Absolutely. Adult children and caregivers can call us directly to set up recurring service or one-time visits." },
  { q: "How do I pay?", a: "We accept cash, card, check, Apple Pay, Cash App, and Zelle. Members are billed monthly for convenience." },
  { q: "Do you offer memberships?", a: "Yes — our VIP Membership discounts every errand to $25. We also offer monthly and weekly plans for regular help." },
  { q: "Do you transport pets?", a: "We do. Pet transportation is $45 and includes grooming, boarding, and veterinary trips." },
  { q: "Do you shop with me, or shop for me?", a: "Both. If you'd like to come along, we drive, park, and stay by your side. If you'd rather rest, we shop your list and put things away." },
  { q: "Are your drivers insured and background-checked?", a: "Every driver is fully insured, background-checked, and personally trained to work with older adults." },
  { q: "Can I request the same driver every time?", a: "Yes. Consistency matters — we do everything we can to send a familiar face." },
  { q: "How much notice do you need?", a: "Same-day service is often available. For guaranteed scheduling we recommend 24 hours' notice." },
  { q: "What if I have heavy items?", a: "Heavy items add a flat $5 to your errand. Our drivers do the lifting so you don't have to." },
  { q: "Do you help around the house?", a: "Yes — our Home Management service is $30 per hour for small tasks like tidying, light organizing, and appointment setup." },
  { q: "Do you visit senior living communities?", a: "We do, and we work respectfully with community staff and check-in procedures." },
  { q: "Can I cancel or reschedule?", a: "Of course. Life happens — just give us a call as far ahead as you can and there's no fee to reschedule." },
  { q: "Do you provide medical services?", a: "No. Roadrunner Express is a non-medical concierge service. We can, however, transport you to medical appointments." },
  { q: "How is Roadrunner different from a delivery app?", a: "You'll speak with the same small, local team every time. No algorithms, no strangers, no rush — just human care." },
  { q: "Are gift cards or gifting available?", a: "Yes. Many families gift monthly plans to parents or grandparents. Call us and we'll set it up gracefully." },
  { q: "What are your hours?", a: "We're available every day from 6 AM to 6 PM. Voicemails outside those hours are returned the next morning." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Senior Concierge & Errand Services Houston | Roadrunner Express" },
      { name: "description", content: "Answers about Roadrunner Express senior concierge and errand services in Houston — booking by phone, pricing, service area, drivers and more." },
      { property: "og:title", content: "FAQ | Roadrunner Express Senior Concierge · Houston" },
      { property: "og:description", content: "Common questions about Houston's trusted senior concierge and errand service." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <section className="pt-40 pb-16">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow animate-rise">Frequently asked</p>
          <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.98] text-[var(--brand-deep)] animate-rise delay-1">
            Answers, without the <em className="italic text-[var(--ember)]">fine print.</em>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[var(--brand-deep)]/75 animate-rise delay-2">
            If you can't find what you're looking for, call us at 409-455-1963. We'd love to hear from you.
          </p>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-luxe max-w-3xl">
          <div className="rounded-[1.5rem] bg-white border border-[color-mix(in_oklab,var(--brand)_10%,transparent)] divide-y divide-[color-mix(in_oklab,var(--brand)_8%,transparent)] overflow-hidden">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={(i % 6) * 40}>
                  <div>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 px-6 md:px-8 py-6 text-left"
                    >
                      <span className="font-display text-lg md:text-xl text-[var(--brand-deep)]">{f.q}</span>
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-[var(--ember)] text-white" : "bg-[var(--brand-soft)] text-[var(--brand-deep)]"}`}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 md:px-8 pb-7 text-[15px] leading-relaxed text-[var(--brand-deep)]/75 max-w-2xl">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pb-32">
        <div className="container-luxe">
          <div className="rounded-[2rem] bg-[var(--brand-deep)] text-white p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--ember-soft)]">Still have questions?</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">We'd love to talk it through.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:4094551963" className="btn-primary"><Phone className="h-4 w-4" /> 409-455-1963</a>
              <Link to="/contact" className="btn-ghost bg-white/10 border-white/25 text-white hover:bg-white/20">Send a message <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}