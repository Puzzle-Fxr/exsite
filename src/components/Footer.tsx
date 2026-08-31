import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY, SERVICES } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-linear-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Excelsis Softworks" className="h-12 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-700">
              {COMPANY.legalName}. We design, build and integrate software that moves businesses forward.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-sm text-slate-700 transition hover:text-cyan-500">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Company</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/#about" className="text-sm text-slate-700 hover:text-cyan-500">About Us</Link></li>
              <li><Link to="/#services" className="text-sm text-slate-700 hover:text-cyan-500">Our Services</Link></li>
              <li><Link to="/#executives" className="text-sm text-slate-700 hover:text-cyan-500">Executives</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-slate-700 hover:text-cyan-500">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-slate-700 hover:text-cyan-500">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-blue-200 pt-6 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </footer>
  )
}
