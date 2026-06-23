import { FileText } from 'lucide-react'
import { COMPANY } from '../data/site'

const sections = [
  { h: '1. Acceptance of Terms', p: 'By accessing or using the website and services of ' + COMPANY.legalName + ' (“we”, “us”, “our”), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.' },
  { h: '2. Services', p: 'We provide software design, development, integration and AI services as described on our website. Specific deliverables, timelines and fees for any engagement will be governed by a separate written agreement between you and us.' },
  { h: '3. Intellectual Property', p: 'All content, branding, code and materials we create remain our intellectual property until full payment is received and rights are transferred per your engagement agreement. You retain ownership of all content and data you provide to us.' },
  { h: '4. Client Responsibilities', p: 'You agree to provide accurate information, timely feedback, and necessary access required for us to deliver services. You are responsible for the legality and accuracy of all content you supply.' },
  { h: '5. Payment Terms', p: 'Fees, invoicing schedules and payment terms are defined in your engagement agreement. Invoices are due within the timeframe stated on each invoice. Late payments may incur interest and suspension of services.' },
  { h: '6. Confidentiality', p: 'Both parties agree to keep confidential any non-public information shared during an engagement. We handle your data in accordance with our Privacy Policy.' },
  { h: '7. Warranties & Disclaimers', p: 'We warrant that services will be performed in a professional manner consistent with industry standards. To the fullest extent permitted by law, all other warranties are disclaimed. Our website is provided “as is” without warranty of any kind.' },
  { h: '8. Limitation of Liability', p: 'To the maximum extent permitted by law, ' + COMPANY.legalName + ' shall not be liable for any indirect, incidental, special or consequential damages, or for any loss of profits or data, arising from your use of our services.' },
  { h: '9. Indemnification', p: 'You agree to indemnify and hold us harmless from claims arising from your content, your breach of these terms, or your misuse of our services.' },
  { h: '10. Third-Party Services', p: 'Our solutions may integrate with third-party services (e.g., Salesforce, cloud providers). We are not responsible for the availability or behavior of third-party services, and their terms apply to your use of them.' },
  { h: '11. Termination', p: 'Either party may terminate an engagement per the terms of the engagement agreement. We may suspend or terminate access to our website if you breach these Terms.' },
  { h: '12. Governing Law', p: 'These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes will be resolved in the courts located in San Francisco, California.' },
  { h: '13. Changes to Terms', p: 'We may update these Terms at any time. Updated terms will be posted on this page with a revised date. Continued use of our services constitutes acceptance of the updated Terms.' },
]

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-20 lg:py-28">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400"><FileText size={24} /></span>
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Legal</span>
      </div>
      <h1 className="mt-5 text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mt-3 text-sm text-slate-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p className="mt-6 leading-relaxed text-slate-300">
        Please read these Terms of Service carefully before using the website and services of {COMPANY.legalName}.
        These terms govern your access to and use of our website and form the baseline for any project engagement.
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
        <h2 className="text-lg font-semibold text-white">Questions?</h2>
        <p className="mt-2 text-sm text-slate-400">For any questions about these Terms, contact us:</p>
        <p className="mt-2 text-sm text-slate-300">{COMPANY.legalName}</p>
        <p className="text-sm text-slate-300">{COMPANY.address}</p>
        <p className="text-sm text-slate-300">Email: <a href={`mailto:${COMPANY.email}`} className="text-cyan-300 hover:underline">{COMPANY.email}</a></p>
      </div>
    </div>
  )
}
