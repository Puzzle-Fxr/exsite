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
      <section className="relative overflow-hidden border-b border-blue-200">
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-linear-to-br from-white via-blue-50/80 to-blue-100" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <span className="inline-block rounded-full border border-blue-300 bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/#contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 hover:scale-105">
              Start a project <ArrowRight size={16} />
            </Link>
            <Link to="/#services" className="inline-flex items-center gap-2 rounded-full border border-blue-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-100">
              Explore services
            </Link>
          </div>
          <ul className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                <Check size={16} className="text-cyan-500" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
