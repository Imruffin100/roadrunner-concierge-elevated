import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Shield, Users, Sparkles, Phone } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/assets";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Roadrunner Express | Locally Owned Senior Concierge in Houston, TX" },
      { name: "description", content: "Roadrunner Express is a locally owned Houston senior concierge service helping older adults stay independent — with peace of mind for the families who love them." },
      { property: "og:title", content: "About Roadrunner Express | Senior Concierge in Houston, TX" },
      { property: "og:description", content: "Locally owned Houston senior concierge service dedicated to independence, dignity and reliable everyday care." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: HeartHandshake, t: "Compassion", d: "We move at your pace. Every visit is unhurried, patient and kind." },
  { icon: Shield, t: "Trust", d: "Vetted, insured, background-checked drivers. Familiar faces every time." },
  { icon: Users, t: "Community", d: "Locally owned in North Houston. We show up like the neighbor you always wanted." },
  { icon: Sparkles, t: "Excellence", d: "A quiet standard of care in every detail — from the phone call to the doorstep." },
];

function About() {
  return (
    <PageShell>
      <section className="pt-40 pb-20">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.1fr] gap-16 items-end">
          <div>
            <p className="eyebrow animate-rise">Our story</p>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.98] text-[var(--brand-deep)] animate-rise delay-1">
              A concierge service<br/>built on <em className="italic text-[var(--ember)]">respect.</em>
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-[var(--brand-deep)]/75 max-w-xl animate-rise delay-2">
            Roadrunner Express was founded on a simple idea — that seniors deserve a way to keep the rhythm of their lives without ever needing an app to do it. A phone call. A friendly voice. A capable hand.
          </p>
        </div>
      </section>

      <section>
        <div className="container-luxe">
          <Reveal>
            <div className="aspect-[16/8] rounded-[2rem] overflow-hidden">
              <img src={IMG.van} alt="A Roadrunner Express delivery vehicle parked in a Houston neighborhood." className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28">
        <div className="container-luxe grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-[var(--brand-deep)]">To help seniors remain independent — safely, gracefully, and on their own terms.</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-[17px] leading-relaxed text-[var(--brand-deep)]/75">
              <p>We treat every client with dignity, patience, and respect. It's the standard our founder learned watching her grandmother — and the standard we hold every driver to today.</p>
              <p>Unlike technology-based delivery companies, our services are available with nothing more than a simple phone call. That's not a limitation. That's the point.</p>
              <p>From grocery runs and pharmacy pickups to companion transportation and gentle home management, we handle the everyday so families can enjoy the extraordinary.</p>
              <p>Roadrunner Express is a locally owned Houston concierge service dedicated to helping seniors throughout Houston, North Houston, Cypress and Spring remain independent at home — while giving their families the peace of mind of knowing a trusted local team is only a phone call away.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-[color-mix(in_oklab,var(--brand-soft)_50%,var(--cream))]">
        <div className="container-luxe">
          <Reveal><p className="eyebrow">What we stand for</p></Reveal>
          <Reveal delay={80}><h2 className="mt-4 font-display text-4xl lg:text-5xl text-[var(--brand-deep)] max-w-2xl">Values you can hear in every phone call.</h2></Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 70}>
                <div className="h-full rounded-[1.4rem] bg-white p-8 border border-[color-mix(in_oklab,var(--brand)_8%,transparent)]">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-deep)]"><v.icon className="h-6 w-6" aria-hidden /></div>
                  <h3 className="mt-6 font-display text-2xl text-[var(--brand-deep)]">{v.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--brand-deep)]/70">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-luxe grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img src={IMG.companion} alt="A Roadrunner Express team member visiting a senior at home." className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Community</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.05] text-[var(--brand-deep)]">Rooted in North Houston. Committed to the neighbors who raised it.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--brand-deep)]/75 max-w-xl">
              We proudly serve Houston, Cypress, Spring and the surrounding 77068 area — with the same quiet care whether we're delivering a prescription or driving you to your grandson's baseball game.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:4094551963" className="btn-primary"><Phone className="h-4 w-4" /> 409-455-1963</a>
              <Link to="/services" className="btn-ghost">See what we do <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}