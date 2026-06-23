import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-r from-cyan-600 to-cyan-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-14 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Ready to build something exceptional?</h2>
          <p className="mt-2 text-slate-900/80">Book a free 30-minute discovery call with our solutions architects.</p>
        </div>
        <Link to="/#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-slate-800">
          Get in touch <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
