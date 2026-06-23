import { Shield } from 'lucide-react'
import { COMPANY } from '../data/site'

const sections = [
  {
    h: '1. Information We Collect',
    p: 'We collect information you provide directly — such as your name, email address, company and message when you complete our contact form. We also collect limited technical data automatically, including IP address, browser type and pages visited, through cookies and similar technologies.',
  },
  {
    h: '2. How We Use Your Information',
    p: 'We use your information to respond to inquiries, deliver and improve our services, send project-related communications, and operate our business. We may use aggregated, non-identifying data for analytics and service improvement.',
  },
  {
    h: '3. Cookies',
    p: 'Our website uses cookies to understand usage and improve experience. You can control cookies through your browser settings. Disabling cookies may affect some functionality.',
  },
  {
    h: '4. Information Sharing',
    p: 'We do not sell your personal information. We share data only with service providers who help us operate (such as hosting and analytics providers) under contractual confidentiality obligations, or when required by law.',
  },
  {
    h: '5. Data Security',
    p: 'We implement appropriate technical and organizational measures — including encryption in transit, access controls and regular reviews — to protect your information. No method of transmission is 100% secure, but we work to protect your data.',
  },
  {
    h: '6. Data Retention',
    p: 'We retain personal information only as long as necessary to fulfill the purposes described here, comply with legal obligations, resolve disputes and enforce our agreements.',
  },
  {
    h: '7. Your Rights',
    p: 'You may request access to, correction of, or deletion of your personal information. To exercise these rights, contact us using the details below. We will respond within 30 days.',
  },
  {
    h: '8. Third-Party Links',
    p: 'Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites and encourage you to review their policies.',
  },
  {
    h: '9. Children’s Privacy',
    p: 'Our services are not directed to individuals under 16, and we do not knowingly collect personal information from children.',
  },
  {
    h: '10. Changes to This Policy',
    p: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the revised policy.',
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 lg:py-28">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400"><Shield size={24} /></span>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Legal</span>
      </div>
      <h1 className="mt-5 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-3 text-sm text-slate-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p className="mt-6 leading-relaxed text-slate-300">
        {COMPANY.legalName} (“we”, “us”, “our”) respects your privacy. This policy explains what information we collect,
        how we use it, and the choices you have. By using our website and services, you agree to the practices described here.
      </p>

      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-semibold text-white">{s.h}</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{s.p}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">Contact Us</h2>
        <p className="mt-2 text-sm text-slate-400">Questions about this Privacy Policy? Reach us at:</p>
        <p className="mt-2 text-sm text-slate-300">{COMPANY.legalName}</p>
        <p className="text-sm text-slate-300">{COMPANY.address}</p>
        <p className="text-sm text-slate-300">Email: <a href={`mailto:${COMPANY.email}`} className="text-cyan-300 hover:underline">{COMPANY.email}</a></p>
        <p className="text-sm text-slate-300">Phone: {COMPANY.phone}</p>
      </div>
    </div>
  )
}
