import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ShoppingBag, Pill, Car, PawPrint, FileText, HomeIcon, Phone, ArrowRight,
  ShieldCheck, HeartHandshake, MapPin, PhoneCall, Sparkles, Users,
  BadgeCheck, CalendarClock, Smile,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Senior Concierge & Errand Services | Roadrunner Express Houston, TX" },
      { name: "description", content: "Roadrunner Express provides trusted concierge and errand services for seniors in Houston, Texas including grocery shopping, prescription pickups, transportation, companionship and everyday assistance." },
      { name: "keywords", content: "Senior Concierge Houston, Senior Errand Service Houston, Concierge Service Houston, Senior Transportation Houston, Elder Assistance Houston, Grocery Shopping for Seniors, Prescription Pickup Houston, Companion Services Houston" },
      { property: "og:title", content: "Senior Concierge & Errand Services | Roadrunner Express Houston, TX" },
      { property: "og:description", content: "Trusted concierge and errand services for seniors in Houston, Texas. One phone call — no apps required." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Roadrunner Express",
          description: "Trusted senior concierge and errand services in Houston, Texas — grocery shopping, prescription pickups, transportation, companionship and everyday assistance.",
          telephone: "+1-409-455-1963",
          email: "roadrunnerexpresinc@gmail.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3707 Cypress Creek Pkwy, Suite 310",
            addressLocality: "Houston",
            addressRegion: "TX",
            postalCode: "77068",
            addressCountry: "US",
          },
          openingHours: "Mo-Su 06:00-18:00",
          areaServed: ["Houston", "North Houston", "Cypress", "Spring"],
        }),
      },
    ],
  }),
  component: Index,
});

const trustBadges = [
  { icon: ShieldCheck, label: "Vetted & Insured" },
  { icon: HeartHandshake, label: "Compassionate Team" },
  { icon: MapPin, label: "Locally Owned" },
  { icon: PhoneCall, label: "Book by Phone" },
  { icon: Sparkles, label: "Predictable Pricing" },
  { icon: Users, label: "Trusted by Families" },
];

const whyChoose = [
  { icon: BadgeCheck, t: "Background Checked Team", d: "Every driver is vetted, trained and personally trusted with your loved ones." },
  { icon: Smile, t: "Friendly Local Service", d: "A small, familiar Houston team — the neighbor you always wished you had." },
  { icon: CalendarClock, t: "Reliable Scheduling", d: "On time, every time. We show up when we say we will." },
  { icon: ShieldCheck, t: "Insured & Dependable", d: "Fully insured service, so families can breathe easier." },
  { icon: PhoneCall, t: "Simple Phone Booking", d: "No apps, no downloads. One friendly number does it all." },
  { icon: MapPin, t: "Serving Houston Seniors", d: "Locally owned, proudly serving Houston and surrounding communities." },
];

const services = [
  { icon: ShoppingBag, title: "Grocery & Household", body: "Weekly shopping, curated to your list — put away in the pantry if you'd like." },
  { icon: Pill, title: "Pharmacy Pickup", body: "Prescriptions collected from your pharmacy and delivered discreetly to your door." },
  { icon: Car, title: "Personal Transportation", body: "Door-through-door rides to appointments, salons, church and family visits." },
  { icon: PawPrint, title: "Pet Care & Vet Visits", body: "Companion transport for your beloved pets — grooming and veterinary trips included." },
  { icon: FileText, title: "Documents & Post Office", body: "Bank runs, notary drop-offs, dry cleaning, packages and the post office." },
  { icon: HomeIcon, title: "Home Management", body: "A trusted hand for the little things around the house that make a home feel cared for." },
];

const reasons = [
  { title: "No smartphone required", body: "One friendly phone number. A real person answers, every time." },
  { title: "Predictable, transparent pricing", body: "Simple flat rates and monthly plans — no surge fees, ever." },
  { title: "Familiar faces, every visit", body: "A small, dedicated team you'll actually get to know by name." },
  { title: "Locally owned in Houston", body: "Based in North Houston, serving Cypress, Spring and greater Houston." },
];

const steps = [
  { n: "01", t: "Call us", d: "Dial 409-455-1963. A friendly team member picks up in seconds." },
  { n: "02", t: "Tell us what you need", d: "Groceries, a ride, a prescription — whatever life is asking for today." },
  { n: "03", t: "We handle everything", d: "A courteous, insured driver takes care of it door-through-door." },
  { n: "04", t: "Relax", d: "You get a text or a call when it's done. That's it." },
];

const testimonials = [
  { quote: "They picked up my prescription, my groceries, and even walked my little Bella. It felt like family stopped by.", name: "Margaret A.", meta: "Client · Spring, TX" },
  { quote: "Mom won't use an app, and she doesn't have to. One call and everything is taken care of — from Dallas, that's priceless.", name: "David R.", meta: "Adult son · Dallas, TX" },
  { quote: "The drivers are kind, patient and always on time. I finally feel independent again.", name: "Eleanor J.", meta: "Client · North Houston" },
];

function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[color-mix(in_oklab,var(--brand-soft)_70%,var(--cream))] to-[var(--cream)]" />
          <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[color-mix(in_oklab,var(--ember)_18%,transparent)] blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-[color-mix(in_oklab,var(--brand)_16%,transparent)] blur-3xl" />
        </div>
        <div className="container-luxe grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
          <div>
            <p className="eyebrow animate-rise">Trusted Senior Concierge Services · Houston, Texas</p>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-[4.6rem] leading-[1.02] font-light text-[var(--brand-deep)] animate-rise delay-1">
              Trusted Senior Concierge &amp; Errand Services in <em className="font-normal italic text-[var(--ember)]">Houston, TX.</em>
            </h1>
            <p className="mt-6 font-display text-2xl sm:text-3xl text-[var(--brand-deep)]/85 animate-rise delay-2">
              Delivering more than packages.
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--brand-deep)]/75 animate-rise delay-2">
              Roadrunner Express helps seniors throughout Houston maintain their independence with trusted concierge and errand services including grocery shopping, prescription pickups, transportation, dry cleaning, personal errands, and everyday assistance. One phone call connects you with a friendly local team — no apps or downloads required.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise delay-3">
              <a href="tel:4094551963" aria-label="Call Roadrunner Express at 409-455-1963" className="btn-primary">
                <Phone className="h-4 w-4" /> Call 409-455-1963
              </a>
              <Link to="/contact" className="btn-ghost">
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-5 animate-rise delay-4">
              <div className="flex -space-x-3">
                {[IMG.delivery, IMG.companion, IMG.transport].map((src, i) => (
                  <img key={i} src={src} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-[var(--cream)]" />
                ))}
              </div>
              <div className="text-sm text-[var(--brand-deep)]/70 leading-tight">
                <div className="font-medium text-[var(--brand-deep)]">Trusted by Houston seniors</div>
                <div>and the families who love them.</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fadein delay-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_oklch(0.22_0.08_258/0.45)]">
              <img src={IMG.delivery} alt="A Roadrunner Express courier hands a package to a smiling senior at her front door." className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)]/40 via-transparent to-transparent" />
            </div>
            {/* floating trust cards */}
            <div className="absolute -left-4 sm:-left-10 top-8 rounded-2xl bg-white/90 backdrop-blur-xl p-4 shadow-xl border border-white animate-rise delay-3 max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand-deep)]"><ShieldCheck className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--ember)]">Insured</p>
                  <p className="text-sm font-medium text-[var(--brand-deep)]">Every driver, every ride</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-3 sm:-right-8 bottom-10 rounded-2xl bg-white/90 backdrop-blur-xl p-4 shadow-xl border border-white animate-rise delay-4 max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--ember-soft)] text-[var(--ember)]"><PhoneCall className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--ember)]">One call</p>
                  <p className="text-sm font-medium text-[var(--brand-deep)]">Real people, every time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section aria-label="Why families trust Roadrunner" className="border-y border-[color-mix(in_oklab,var(--brand)_10%,transparent)] bg-white/50 backdrop-blur">
        <div className="container-luxe py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            {trustBadges.map((b) => (
              <Reveal key={b.label} className="flex items-center gap-3 text-[var(--brand-deep)]">
                <b.icon className="h-5 w-5 text-[var(--ember)]" aria-hidden />
                <span className="text-sm font-medium tracking-tight">{b.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 lg:py-40">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
                <img src={IMG.companion} alt="A senior woman laughs with her Roadrunner companion and her dog in her living room." className="h-full w-full object-cover hover-lift" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-[var(--brand-deep)] text-white p-6 max-w-[220px] shadow-2xl">
                <p className="font-display text-2xl leading-tight">Delivering more than packages.</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-[var(--ember-soft)]">Our promise</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Why we exist</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.05] text-[var(--brand-deep)]">
              Independence, delivered with patience and grace.
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-[var(--brand-deep)]/75 max-w-xl">
              <p>
                Roadrunner Express was built for the parents, grandparents and neighbors who keep our communities warm. The ones who prefer a phone call over a push notification — and deserve to be treated like family.
              </p>
              <p>
                We handle the grocery lists, prescriptions, appointments and small trips that used to feel effortless. We do it with the patience of a good friend and the reliability of a great neighbor.
              </p>
              <p>
                No apps. No confusion. Just a familiar voice on the other end of the line — and a friendly face at the door.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/about" className="btn-ghost">Read our story <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-[color-mix(in_oklab,var(--brand-soft)_50%,var(--cream))]">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Reveal><p className="eyebrow">What we do</p></Reveal>
              <Reveal delay={80}><h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-deep)] max-w-2xl leading-[1.05]">Everyday care, thoughtfully handled.</h2></Reveal>
            </div>
            <Reveal delay={120}><Link to="/services" className="btn-ghost self-start md:self-auto">All services <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group h-full rounded-[1.4rem] bg-white p-8 border border-[color-mix(in_oklab,var(--brand)_8%,transparent)] hover-lift">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-deep)] transition group-hover:bg-[var(--ember)] group-hover:text-white">
                    <s.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-[var(--brand-deep)]">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--brand-deep)]/70">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-28 lg:py-36">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Why choose Roadrunner</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.05] text-[var(--brand-deep)]">A concierge experience — priced like a neighbor.</h2>
            <ul className="mt-10 space-y-6">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--ember-soft)] text-[var(--ember)]">
                    <HeartHandshake className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[var(--brand-deep)]">{r.title}</h3>
                    <p className="mt-1 text-[15px] text-[var(--brand-deep)]/70 max-w-md leading-relaxed">{r.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_oklch(0.22_0.08_258/0.35)]">
              <img src={IMG.transport} alt="A Roadrunner Express driver helps a senior woman into the passenger seat of a car." className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[var(--brand-deep)] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--ember)]/10 blur-3xl" />
        <div className="container-luxe relative">
          <div className="max-w-2xl">
            <Reveal><p className="text-xs font-medium tracking-[0.22em] uppercase text-[var(--ember-soft)]">How it works</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">Four calm steps. That's the whole thing.</h2></Reveal>
          </div>
          <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <li className="relative rounded-[1.4rem] border border-white/10 bg-white/[0.04] backdrop-blur p-8 h-full">
                  <div className="font-display text-6xl text-[var(--ember)]/70 leading-none">{s.n}</div>
                  <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                  <p className="mt-3 text-[15px] text-white/70 leading-relaxed">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-14">
            <a href="tel:4094551963" className="btn-primary"><Phone className="h-4 w-4" /> Call 409-455-1963</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28">
        <div className="container-luxe">
          <div className="max-w-2xl">
            <Reveal><p className="eyebrow">Kind words</p></Reveal>
            <Reveal delay={80}><h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05] text-[var(--brand-deep)]">Families who feel a little lighter.</h2></Reveal>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="h-full rounded-[1.4rem] bg-white p-8 border border-[color-mix(in_oklab,var(--brand)_10%,transparent)] hover-lift">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" aria-hidden><path d="M0 24V15C0 6.7 4.3 1.3 12.9 0L14 3.5C9.3 4.9 6.8 7.8 6.4 12H12V24H0ZM17 24V15C17 6.7 21.3 1.3 29.9 0L31 3.5C26.3 4.9 23.8 7.8 23.4 12H29V24H17Z" fill="var(--ember)"/></svg>
                  <blockquote className="mt-5 font-display text-[1.35rem] leading-snug text-[var(--brand-deep)]">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 text-sm">
                    <div className="font-medium text-[var(--brand-deep)]">{t.name}</div>
                    <div className="text-[var(--brand-deep)]/60">{t.meta}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24">
        <div className="container-luxe">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 lg:p-20 bg-gradient-to-br from-[var(--brand-deep)] via-[var(--brand)] to-[var(--brand-deep)] text-white">
              <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[var(--ember)]/25 blur-3xl" />
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
                <div>
                  <p className="text-xs font-medium tracking-[0.22em] uppercase text-[var(--ember-soft)]">Ready when you are</p>
                  <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.02] max-w-2xl">One call — and the day gets easier.</h2>
                  <p className="mt-6 max-w-lg text-white/75 leading-relaxed text-lg">Our team is standing by every day from 6 AM to 6 PM. We'll answer your questions, walk you through pricing, and get you scheduled — no rush, no pressure.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="tel:4094551963" className="btn-primary text-base"><Phone className="h-5 w-5" /> 409-455-1963</a>
                  <Link to="/contact" className="btn-ghost text-base bg-white/10 border-white/25 text-white hover:bg-white/20">Get started online <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
