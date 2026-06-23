import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Mail, Phone, Quote, Star } from 'lucide-react'
import { COMPANY, SERVICES, TESTIMONIALS, EXECUTIVES, STATS } from '../data/site'
import ContactForm from '../components/ContactForm'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-cyan-950/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              {COMPANY.tagline}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              We Build, <span className="text-cyan-400"> The Future!</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {COMPANY.legalName} designs, builds and integrates websites, mobile apps, enterprise systems and AI agents —
              all engineered to the same standard: reliable, scalable and a pleasure to use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/#services" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:scale-105 hover:bg-cyan-400">
                Explore our services <ArrowRight size={16} />
              </Link>
              <Link to="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5">
                Talk to us
              </Link>
            </div>
            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-bold text-cyan-400">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 border-b border-white/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">About Us</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">A craft-driven studio with an enterprise backbone</h2>
            <p className="mt-5 leading-relaxed text-slate-300">
              Founded in {COMPANY.founded}, {COMPANY.name} was born from a simple conviction: world-class software
              shouldn't be reserved for the Fortune 500. We pair the rigor of large-scale engineering with the speed
              and care of a boutique studio.
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              Our cross-functional teams of designers, engineers, integration specialists and AI researchers work as one
              unit alongside your people. We measure success not by lines shipped, but by the outcomes your business
              achieves long after launch.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { t: 'Outcomes first', d: 'We tie every decision to your business goals.' },
                { t: 'Built to last', d: 'Clean architecture, tested code, zero shortcuts.' },
                { t: 'True partnership', d: 'Transparent communication, no black boxes.' },
              ].map((v) => (
                <div key={v.t} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                  <h3 className="text-sm font-semibold text-cyan-300">{v.t}</h3>
                  <p className="mt-2 text-sm text-slate-400">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img src="/images/hero.jpg" alt="Our team at work" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-cyan-500/30 bg-slate-900/90 px-6 py-5 shadow-xl backdrop-blur sm:block">
              <p className="text-2xl font-bold text-cyan-400">11 yrs</p>
              <p className="text-xs text-slate-400">of shipping software</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 border-b border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Our Services</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Everything you need to build and scale</h2>
            <p className="mt-4 text-slate-300">Four practices, one accountable team. Pick a single service or let us own the full journey.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 transition hover:-translate-y-1 hover:border-cyan-500/40"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-slate-950">
                    <s.icon size={22} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400">
                    Learn more <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-white/10 bg-slate-900/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Testimonials</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Trusted by teams who ship</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="relative rounded-3xl border border-white/10 bg-slate-950/60 p-8">
                <Quote className="absolute right-6 top-6 text-cyan-500/20" size={48} />
                <div className="flex gap-1 text-cyan-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed text-slate-200">“{t.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}, {t.company}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* EXECUTIVES */}
      <section id="executives" className="scroll-mt-20 border-b border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Executives</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Leadership that has been there</h2>
            <p className="mt-4 text-slate-300">The people accountable for your success.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXECUTIVES.map((e) => (
              <div key={e.name} className="group rounded-3xl border border-white/10 bg-slate-900/50 p-6 text-center transition hover:border-cyan-500/40">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-cyan-700 text-xl font-bold text-slate-950">
                  {e.initials}
                </div>
                <h3 className="mt-4 font-bold text-white">{e.name}</h3>
                <p className="text-sm font-medium text-cyan-400">{e.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{e.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + CONTACT */}
      <section id="contact" className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Location & Contact</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let's build something together</h2>
            <p className="mt-4 text-slate-300">Tell us about your project and we'll respond within one business day.</p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title="Excelsis Softworks location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.43%2C37.77%2C-122.39%2C37.79&layer=mapnik&marker=37.78%2C-122.41"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400"><MapPin size={18} /></span>
                  <div>
                    <p className="text-sm font-semibold text-white">Headquarters</p>
                    <p className="text-sm text-slate-400">{COMPANY.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400"><Phone size={18} /></span>
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <a href={`tel:${COMPANY.phone}`} className="text-sm text-slate-400 hover:text-cyan-300">{COMPANY.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400"><Mail size={18} /></span>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-sm text-slate-400 hover:text-cyan-300">{COMPANY.email}</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
