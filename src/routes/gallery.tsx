import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { IMG } from "@/lib/assets";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Senior Concierge Services in Houston | Roadrunner Express" },
      {
        name: "description",
        content:
          "See Roadrunner Express in action — senior grocery assistance, prescription pickups, companionship and transportation for seniors across Houston, Texas.",
      },
      { property: "og:title", content: "Gallery | Roadrunner Express Senior Concierge · Houston" },
      {
        property: "og:description",
        content: "Moments of care from Houston's trusted senior concierge team.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  {
    src: IMG.van,
    alt: "Roadrunner Express service vehicle in Houston, Texas",
    caption: "Roadrunner Express service vehicle in Houston",
    span: "md:col-span-2 md:row-span-2 aspect-[4/3]",
  },
  {
    src: IMG.delivery,
    alt: "Senior concierge delivering prescription medication to an elderly client",
    caption: "Prescription pickup services",
    span: "aspect-[3/4]",
  },
  {
    src: IMG.companion,
    alt: "Friendly concierge assisting elderly client at home with her dog",
    caption: "Friendly concierge assistance",
    span: "aspect-[3/4]",
  },
  {
    src: IMG.transport,
    alt: "Houston senior transportation — helping a senior into the vehicle for a medical appointment",
    caption: "Transportation for medical appointments",
    span: "md:col-span-2 aspect-[16/9]",
  },
  {
    src: IMG.delivery,
    alt: "Roadrunner Express employee helping senior with groceries at the front door",
    caption: "Senior grocery assistance in Houston",
    span: "aspect-[4/5]",
  },
  {
    src: IMG.companion,
    alt: "In-home companion visit helping a senior remain independent in Houston",
    caption: "Helping seniors remain independent",
    span: "aspect-[4/5]",
  },
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
                <figure className="h-full w-full">
                  <div className="group relative h-full w-full overflow-hidden rounded-[1.6rem]">
                    <img
                      src={it.src}
                      alt={it.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <figcaption className="mt-3 text-sm text-[var(--brand-deep)]/70 tracking-tight">
                    {it.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
