import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, Clock, Mail, MapPin, Phone, AlertCircle } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Senior Concierge Services in Houston | Roadrunner Express" },
      { name: "description", content: "Contact Roadrunner Express in Houston, TX. Call 409-455-1963 or send a message — we serve Houston and surrounding communities and reply within one business day." },
      { property: "og:title", content: "Contact Roadrunner Express · Houston Senior Concierge" },
      { property: "og:description", content: "Serving Houston and surrounding communities. Call 409-455-1963 to schedule concierge service." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type FormState = {
  fullName: string; phone: string; email: string; address: string;
  service: string; date: string; time: string;
  transportation: string; notes: string; emergencyContact: string; contactMethod: string;
};

const initial: FormState = {
  fullName: "", phone: "", email: "", address: "",
  service: "", date: "", time: "",
  transportation: "No", notes: "", emergencyContact: "", contactMethod: "Phone",
};

function Contact() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const total = 4;

  const update = (k: keyof FormState, v: string) => setData((d) => ({ ...d, [k]: v }));
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://formspree.io/f/xnjejzyy", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          phone: data.phone,
          email: data.email,
          address: data.address,
          service: data.service,
          date: data.date,
          time: data.time,
          transportation: data.transportation,
          notes: data.notes,
          emergencyContact: data.emergencyContact,
          contactMethod: data.contactMethod,
          _subject: `New inquiry from ${data.fullName || "website"}`,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      setData(initial);
    } catch (err) {
      setError("Something went wrong. Please try again or call us at 409-455-1963.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell>
      <section className="pt-40 pb-16">
        <div className="container-luxe grid lg:grid-cols-[1.05fr_1fr] gap-14 items-end">
          <div>
            <p className="eyebrow animate-rise">Contact</p>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.98] text-[var(--brand-deep)] animate-rise delay-1">
              We're a phone call <em className="italic text-[var(--ember)]">away.</em>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[var(--brand-deep)]/75 max-w-xl animate-rise delay-2">
              Serving Houston and surrounding communities. Prefer a form? Fill in a few details and we'll follow up personally within one business day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 animate-rise delay-3">
            <a href="tel:4094551963" className="rounded-2xl bg-white p-6 border border-[color-mix(in_oklab,var(--brand)_10%,transparent)] hover-lift">
              <Phone className="h-5 w-5 text-[var(--ember)]" />
              <p className="mt-4 text-xs uppercase tracking-widest text-[var(--brand-deep)]/60">Call</p>
              <p className="mt-1 font-display text-2xl text-[var(--brand-deep)]">409-455-1963</p>
            </a>
            <a href="mailto:roadrunnerexpresinc@gmail.com" className="rounded-2xl bg-white p-6 border border-[color-mix(in_oklab,var(--brand)_10%,transparent)] hover-lift">
              <Mail className="h-5 w-5 text-[var(--ember)]" />
              <p className="mt-4 text-xs uppercase tracking-widest text-[var(--brand-deep)]/60">Email</p>
              <p className="mt-1 font-display text-lg text-[var(--brand-deep)] break-all">roadrunnerexpresinc@gmail.com</p>
            </a>
            <div className="rounded-2xl bg-white p-6 border border-[color-mix(in_oklab,var(--brand)_10%,transparent)]">
              <MapPin className="h-5 w-5 text-[var(--ember)]" />
              <p className="mt-4 text-xs uppercase tracking-widest text-[var(--brand-deep)]/60">Visit</p>
              <p className="mt-1 text-sm text-[var(--brand-deep)]">3707 Cypress Creek Pkwy, Suite 310<br/>Houston, TX 77068</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-[color-mix(in_oklab,var(--brand)_10%,transparent)]">
              <Clock className="h-5 w-5 text-[var(--ember)]" />
              <p className="mt-4 text-xs uppercase tracking-widest text-[var(--brand-deep)]/60">Hours</p>
              <p className="mt-1 text-sm text-[var(--brand-deep)]">Every day · 6 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-luxe">
          <Reveal>
            <div className="rounded-[2rem] overflow-hidden border border-[color-mix(in_oklab,var(--brand)_10%,transparent)] aspect-[16/7]">
              <iframe
                title="Roadrunner Express office location on Google Maps"
                src="https://www.google.com/maps?q=3707+Cypress+Creek+Pkwy+Suite+310+Houston+TX+77068&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-luxe max-w-3xl">
          <Reveal>
            <div className="rounded-[2rem] bg-white border border-[color-mix(in_oklab,var(--brand)_10%,transparent)] p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--ember-soft)] text-[var(--ember)]"><Check className="h-8 w-8" /></div>
                  <h2 className="mt-6 font-display text-4xl text-[var(--brand-deep)]">Thank you!</h2>
                  <p className="mt-4 text-[var(--brand-deep)]/70 max-w-md mx-auto leading-relaxed">
                    Your request has been received. We'll be in touch shortly.
                  </p>
                  <a href="tel:4094551963" className="btn-primary mt-8"><Phone className="h-4 w-4" /> Call 409-455-1963</a>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-8">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow">Client intake · Step {step + 1} of {total}</p>
                    <div className="flex gap-1.5">
                      {Array.from({ length: total }).map((_, i) => (
                        <span key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i <= step ? "bg-[var(--ember)]" : "bg-[var(--brand-soft)]"}`} />
                      ))}
                    </div>
                  </div>

                  {step === 0 && (
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Full name" required>
                        <input required name="fullName" value={data.fullName} onChange={(e) => update("fullName", e.target.value)} className={inputCls} placeholder="Margaret Alvarez" />
                      </Field>
                      <Field label="Phone" required>
                        <input required name="phone" type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls} placeholder="(281) 555-0134" />
                      </Field>
                      <Field label="Email">
                        <input name="email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className={inputCls} placeholder="you@example.com" />
                      </Field>
                      <Field label="Home address" required>
                        <input required name="address" value={data.address} onChange={(e) => update("address", e.target.value)} className={inputCls} placeholder="1234 Cypress Ln, Houston, TX" />
                      </Field>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Service needed" required className="sm:col-span-2">
                        <select required name="service" value={data.service} onChange={(e) => update("service", e.target.value)} className={inputCls}>
                          <option value="">Select a service…</option>
                          {["Grocery Shopping","Pharmacy Pickup","Personal Transportation","Pet Transportation","Dry Cleaning","Post Office","Home Management","Errand Bundle","Other"].map(o => <option key={o}>{o}</option>)}
                        </select>
                      </Field>
                      <Field label="Preferred date">
                        <input name="date" type="date" value={data.date} onChange={(e) => update("date", e.target.value)} className={inputCls} />
                      </Field>
                      <Field label="Preferred time">
                        <input name="time" type="time" value={data.time} onChange={(e) => update("time", e.target.value)} className={inputCls} />
                      </Field>
                      <Field label="Transportation needed?" className="sm:col-span-2">
                        <div className="flex gap-3">
                          {["Yes","No"].map((v) => (
                            <label key={v} className={`flex-1 cursor-pointer rounded-2xl border px-5 py-3 text-center font-medium transition ${data.transportation === v ? "border-[var(--ember)] bg-[var(--ember-soft)] text-[var(--brand-deep)]" : "border-[color-mix(in_oklab,var(--brand)_12%,transparent)] text-[var(--brand-deep)]/70"}`}>
                              <input type="radio" name="transportation" value={v} checked={data.transportation === v} onChange={(e) => update("transportation", e.target.value)} className="sr-only" />
                              {v}
                            </label>
                          ))}
                        </div>
                      </Field>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid gap-5">
                      <Field label="Additional notes">
                        <textarea name="notes" rows={5} value={data.notes} onChange={(e) => update("notes", e.target.value)} className={inputCls} placeholder="Tell us anything that will help us take great care of you." />
                      </Field>
                      <Field label="Emergency contact">
                        <input name="emergencyContact" value={data.emergencyContact} onChange={(e) => update("emergencyContact", e.target.value)} className={inputCls} placeholder="Name and phone number" />
                      </Field>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="grid gap-5">
                      <Field label="Preferred contact method">
                        <div className="grid grid-cols-3 gap-3">
                          {["Phone","Text","Email"].map((v) => (
                            <label key={v} className={`cursor-pointer rounded-2xl border px-5 py-3 text-center font-medium transition ${data.contactMethod === v ? "border-[var(--ember)] bg-[var(--ember-soft)] text-[var(--brand-deep)]" : "border-[color-mix(in_oklab,var(--brand)_12%,transparent)] text-[var(--brand-deep)]/70"}`}>
                              <input type="radio" name="contactMethod" value={v} checked={data.contactMethod === v} onChange={(e) => update("contactMethod", e.target.value)} className="sr-only" />
                              {v}
                            </label>
                          ))}
                        </div>
                      </Field>
                      <div className="rounded-2xl bg-[color-mix(in_oklab,var(--brand-soft)_60%,var(--cream))] p-6">
                        <p className="font-display text-lg text-[var(--brand-deep)]">Ready to send?</p>
                        <p className="mt-2 text-sm text-[var(--brand-deep)]/70">By submitting, you'll hear from a real member of our team — usually within a few hours.</p>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                      disabled={step === 0 || submitting}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[var(--brand-deep)] disabled:opacity-30"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    {step < total - 1 ? (
                      <button type="button" onClick={() => setStep((s) => Math.min(total - 1, s + 1))} className="btn-primary">
                        Continue <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
                        {submitting ? "Sending…" : <>Submit request <Check className="h-4 w-4" /></>}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

const inputCls =
  "w-full rounded-2xl border border-[color-mix(in_oklab,var(--brand)_14%,transparent)] bg-white px-4 py-3.5 text-[15px] text-[var(--brand-deep)] placeholder:text-[var(--brand-deep)]/40 outline-none transition focus:border-[var(--ember)] focus:ring-4 focus:ring-[var(--ember)]/15";

function Field({ label, children, required, className = "" }: { label: string; children: React.ReactNode; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-[var(--brand-deep)]/60">
        {label}{required && <span className="text-[var(--ember)]"> *</span>}
      </span>
      {children}
    </label>
  );
}