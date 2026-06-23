import { Globe, Code, ShoppingBag, Search, Gauge, ShieldCheck } from 'lucide-react'
import ServiceHero from '../components/ServiceHero'
import CTA from '../components/CTA'

const capabilities = [
  { icon: Code, title: 'Custom Web Apps', desc: 'SPAs, dashboards and portals built on React, Next.js and modern TypeScript.' },
  { icon: ShoppingBag, title: 'E-commerce', desc: 'Headless storefronts on Shopify, Medusa or custom — fast, SEO-ready and conversion-tuned.' },
  { icon: Gauge, title: 'Performance', desc: 'Core Web Vitals in the green, edge caching and sub-second loads by default.' },
  { icon: Search, title: 'SEO & Analytics', desc: 'Technical SEO, structured data and analytics instrumentation that actually informs decisions.' },
  { icon: ShieldCheck, title: 'Security & Compliance', desc: 'OWASP best practices, SSL, WAF and SOC 2-aligned delivery.' },
  { icon: Globe, title: 'CMS & Content', desc: 'Sanity, Contentful or WordPress headless — content your team can actually manage.' },
]

const process = [
  { step: '01', title: 'Discover', desc: 'Workshops to map goals, users and success metrics.' },
  { step: '02', title: 'Design', desc: 'Information architecture, wireframes and a polished design system.' },
  { step: '03', title: 'Build', desc: 'Iterative sprints with weekly demos and staging access.' },
  { step: '04', title: 'Launch & Optimize', desc: 'Launch, monitor and continuously improve with data.' },
]

export default function WebsiteSolutions() {
  return (
    <>
      <ServiceHero
        eyebrow="Website Solutions"
        title="Websites that work as hard as your team"
        description="From marketing sites to complex web platforms, we design and build fast, accessible, conversion-focused experiences backed by a CMS your team controls."
        image="/images/web-solutions.jpg"
        features={['Lighthouse 95+ by default', 'Headless CMS integration', 'Accessibility (WCAG 2.1 AA)', 'Ongoing care plans']}
      />

      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">What we build</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-cyan-500/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400"><c.icon size={20} /></div>
                <h3 className="mt-4 font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">How we deliver</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <span className="text-3xl font-bold text-cyan-500/40">{p.step}</span>
                <h3 className="mt-2 font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
