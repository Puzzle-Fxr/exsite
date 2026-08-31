import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="border-y border-blue-200 bg-linear-to-r from-cyan-400 to-blue-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-14 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to build something exceptional?</h2>
          <p className="mt-2 text-blue-50">Book a free 30-minute discovery call with our solutions architects.</p>
        </div>
        <Link to="/#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-cyan-500 transition hover:scale-105 hover:bg-blue-50">
          Get in touch <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
