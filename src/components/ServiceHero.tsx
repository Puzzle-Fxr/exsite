import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

type Props = {
  eyebrow: string
  title: string
  description: string
  image: string
  features: string[]
}

export default function ServiceHero({ eyebrow, title, description, image, features }: Props) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-cyan-950/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/#contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 hover:scale-105">
              Start a project <ArrowRight size={16} />
            </Link>
            <Link to="/#services" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Explore services
            </Link>
          </div>
          <ul className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-slate-200">
                <Check size={16} className="text-cyan-400" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
