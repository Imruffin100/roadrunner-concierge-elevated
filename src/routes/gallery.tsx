import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/assets";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Roadrunner Express" },
      { name: "description", content: "A look at the everyday moments — deliveries, rides and companionship — that define our senior concierge service in Houston." },
      { property: "og:title", content: "Roadrunner Express Gallery" },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: IMG.van, alt: "The Roadrunner Express service vehicle parked outside a Houston home.", span: "md:col-span-2 md:row-span-2 aspect-[4/3]" },
  { src: IMG.delivery, alt: "A friendly courier delivering a package to a senior client.", span: "aspect-[3/4]" },
  { src: IMG.companion, alt: "A senior client and her dog visiting with a Roadrunner team member.", span: "aspect-[3/4]" },
  { src: IMG.transport, alt: "A Roadrunner driver helping a senior into a car for an appointment.", span: "md:col-span-2 aspect-[16/9]" },
  { src: IMG.delivery, alt: "A doorstep delivery captured mid-smile.", span: "aspect-[4/5]" },
  { src: IMG.companion, alt: "In-home companionship for a client and her pet.", span: "aspect-[4/5]" },
];

function Gallery() {
  return (
    <PageShell>
      <section className="pt-40 pb-16">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow animate-rise">Gallery</p>
          <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.98] text-[var(--brand-deep)] animate-rise delay-1">
            The <em className="italic text-[var(--ember)]">everyday</em>, delivered with dignity.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[var(--brand-deep)]/75 animate-rise delay-2">
            A glimpse of the small, meaningful moments that make up a Roadrunner Express day.
          </p>
        </div>
      </section>
      <section className="pb-32">
        <div className="container-luxe">
          <div className="grid md:grid-cols-3 gap-5">
            {items.map((it, i) => (
              <Reveal key={i} delay={(i % 3) * 80} className={it.span}>
                <div className="group relative h-full w-full overflow-hidden rounded-[1.6rem]">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}