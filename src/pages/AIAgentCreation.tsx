import { Bot, MessageSquare, BrainCircuit, ShieldCheck, Zap, LineChart } from 'lucide-react'
import ServiceHero from '../components/ServiceHero'
import CTA from '../components/CTA'

const useCases = [
  { icon: MessageSquare, title: 'Support Agents', desc: 'Resolve tier-one tickets instantly with brand-aware, knowledge-grounded assistants.' },
  { icon: BrainCircuit, title: 'Workflow Copilots', desc: 'Internal copilots that draft, summarize and act inside your tools — Slack, Salesforce, Jira.' },
  { icon: Zap, title: 'Process Automation', desc: 'Agents that execute multi-step tasks across systems with human-in-the-loop checkpoints.' },
  { icon: LineChart, title: 'Data & Analytics', desc: 'Ask-your-data agents that turn natural language into queries, charts and insight.' },
  { icon: Bot, title: 'Custom Assistants', desc: 'Domain-trained assistants fine-tuned on your knowledge base and tone of voice.' },
  { icon: ShieldCheck, title: 'Guardrails & Safety', desc: 'Eval suites, red-teaming, PII redaction and observability baked into every agent.' },
]

const stack = ['OpenAI', 'Anthropic', 'LangChain', 'LlamaIndex', 'Pinecone', 'pgvector', 'AWS Bedrock', 'Vercel AI SDK']

export default function AIAgentCreation() {
  return (
    <>
      <ServiceHero
        eyebrow="AI Agent Creation"
        title="AI agents that actually do the work"
        description="We design, build and deploy custom AI agents and copilots — grounded in your data, wrapped in guardrails, and integrated into the tools your team already uses."
        image="/images/ai-agents.jpg"
        features={['RAG over your data', 'Tool & API calling', 'Human-in-the-loop', 'Full observability']}
      />

      <section className="border-b border-blue-200 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What agents can do for you</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((c) => (
              <div key={c.title} className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 transition hover:border-blue-400">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-cyan-500"><c.icon size={20} /></div>
                <h3 className="mt-4 font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Built responsibly, deployed confidently</h2>
              <p className="mt-4 text-slate-700">Every agent we ship is grounded in retrieval over your verified data, wrapped in policy guardrails, and monitored in production with traces, evals and rollback controls.</p>
              <ul className="mt-6 space-y-3">
                {['Retrieval-augmented generation over your knowledge base', 'Tool calling with scoped, audited permissions', 'Continuous eval suites and red-teaming', 'Cost, latency and quality dashboards'].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-700">
                    <ShieldCheck size={18} className="mt-0.5 shrink-0 text-cyan-500" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-blue-200 bg-linear-to-br from-blue-50 to-blue-100 p-10">
              <h3 className="text-lg font-bold text-slate-900">Our AI stack</h3>
              <p className="mt-2 text-sm text-slate-700">Model-agnostic — we pick the right tool for each job.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {stack.map((s) => (
                  <span key={s} className="rounded-full border border-blue-300 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
