import { Plug, Cloud, Database, Webhook, Lock, Workflow } from 'lucide-react'
import ServiceHero from '../components/ServiceHero'
import CTA from '../components/CTA'

const integrations = [
  { name: 'Salesforce', desc: 'Sales Cloud, Service Cloud, Marketing Cloud & custom objects synced in real time.' },
  { name: 'HubSpot', desc: 'CRM, marketing automation and deal pipelines connected to your stack.' },
  { name: 'SAP / Oracle ERP', desc: 'Order-to-cash, inventory and finance data flowing where it is needed.' },
  { name: 'Microsoft 365', desc: 'SharePoint, Teams, Dynamics and Power Platform integrations.' },
  { name: 'Stripe & Payments', desc: 'Billing, subscriptions and reconciliation across providers.' },
  { name: 'Custom APIs', desc: 'Legacy systems, internal tools and bespoke APIs modernized and connected.' },
]

const capabilities = [
  { icon: Cloud, title: 'iPaaS & Middleware', desc: 'MuleSoft, Boomi or custom middleware that orchestrates your systems.' },
  { icon: Webhook, title: 'Event-Driven Sync', desc: 'Real-time webhooks and message queues for instant data movement.' },
  { icon: Database, title: 'Data Migration', desc: 'Clean, audited migrations with zero downtime and full rollback plans.' },
  { icon: Workflow, title: 'Process Automation', desc: 'Eliminate manual handoffs with automated, monitored workflows.' },
  { icon: Lock, title: 'Security & Governance', desc: 'OAuth, encryption, audit logs and least-privilege access by design.' },
  { icon: Plug, title: 'API Design', desc: 'REST and GraphQL APIs documented, versioned and built to last.' },
]

export default function ITIntegration() {
  return (
    <>
      <ServiceHero
        eyebrow="IT Solution Integration"
        title="Connect every system your business runs on"
        description="We integrate Salesforce, HubSpot, ERPs and the rest of your stack so data flows, teams stay in sync, and manual work disappears."
        image="/images/it-integration.jpg"
        features={['Salesforce certified', 'Real-time & batch sync', 'Zero-downtime migration', '24/7 monitoring']}
      />

      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Systems we connect</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((i) => (
              <div key={i.name} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-cyan-500/40">
                <h3 className="text-lg font-bold text-cyan-300">{i.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Our integration capabilities</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400"><c.icon size={20} /></div>
                <h3 className="mt-4 font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
