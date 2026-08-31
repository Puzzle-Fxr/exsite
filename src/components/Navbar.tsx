import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { SERVICES } from '../data/site'

const anchorMap: Record<string, string> = {
  'website-solutions': '/#about',
  'app-creation': '/#services',
  'it-integration': '/#testimonials',
  'ai-agent-creation': '/#executives',
}

const anchorLabelMap: Record<string, string> = {
  'website-solutions': 'About',
  'app-creation': 'Our Services',
  'it-integration': 'Testimonials',
  'ai-agent-creation': 'Executives',
}

const navLinks = [
  { to: '/', label: 'Home' },
  ...SERVICES.map((s) => ({
    to: anchorMap[s.slug] ?? `/${s.slug}`,
    label: anchorLabelMap[s.slug] ?? s.title,
  })),
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActiveLink = (to: string) => {
    if (to.startsWith('/#')) {
      const parts = to.split('#')
      const hash = parts[1] ? `#${parts[1]}` : ''
      return (location.pathname === '/' || location.pathname === '') && location.hash === hash
    }
    return location.pathname === to
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blue-200 bg-white/80 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Excelsis Softworks" className="h-11 w-auto" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold tracking-wide text-slate-900">EXCELSIS SOFTWORKS</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-600">Tech Solutions Ltd</span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActiveLink(l.to) ? 'bg-blue-100 text-cyan-500' : 'text-slate-700 hover:bg-blue-50 hover:text-cyan-500'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            className="ml-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-blue-200 bg-blue-50/95 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  isActiveLink(l.to) ? 'bg-blue-100 text-cyan-500' : 'text-slate-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
