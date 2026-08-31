import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null) // State for error block
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', botcheck: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg(null) // Reset any previous errors

    // 1. HONEYPOT CHECK: If a bot filled this out, silently block it
    if (form.botcheck) {
      console.warn("Bot detected.")
      setSent(true) // Trick the bot into thinking it worked
      setLoading(false)
      return
    }

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "9c879c01-2db9-43cf-a29c-1f87161aac41")
    
    // Remove the honeypot field from email data so it doesn't look messy in your inbox
    formData.delete("botcheck") 

    try {
      const response = await fetch("https://web3forms.com", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setSent(true)
        setForm({ name: '', email: '', company: '', message: '', botcheck: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        // 2. Set error message from API response
        setErrorMsg(data.message || 'Something went wrong. Please check your details and try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setErrorMsg('Network error. Please check your internet connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const field =
    'w-full rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* 3. HONEYPOT ELEMENT (Hidden from human users using utility classes and absolute positioning) */}
      <div className="opacity-0 absolute -z-50 pointer-events-none size-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="botcheck">Do not fill this field if you are human</label>
        <input 
          id="botcheck"
          type="text" 
          name="botcheck" 
          tabIndex={-1} 
          autoComplete="off"
          value={form.botcheck}
          onChange={(e) => setForm({ ...form, botcheck: e.target.value })}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-700">Full name</label>
          <input 
            required 
            name="name" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            className={field} 
            placeholder="Jane Doe" 
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-700">Email</label>
          <input 
            required 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
            className={field} 
            placeholder="jane@company.com" 
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-700">Company</label>
        <input 
          name="company" 
          value={form.company} 
          onChange={(e) => setForm({ ...form, company: e.target.value })} 
          className={field} 
          placeholder="Acme Inc." 
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-700">How can we help?</label>
        <textarea 
          required 
          rows={5} 
          name="message" 
          value={form.message} 
          onChange={(e) => setForm({ ...form, message: e.target.value })} 
          className={field} 
          placeholder="Tell us about your project…" 
        />
      </div>

      {/* 4. ERROR DISPLAY BLOCK */}
      {errorMsg && (
        <div className="flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} className="shrink-0 mt-0.5" />
          <div>{errorMsg}</div>
        </div>
      )}

      <button
        type="submit"
        disabled={loading || sent}
        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-blue-700 hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none"
      >
        {sent ? (
          <><CheckCircle2 size={18} /> Message sent</>
        ) : loading ? (
          <>Sending...</>
        ) : (
          <>Send message <Send size={16} /></>
        )}
      </button>

      {sent && <p className="text-sm text-cyan-500">Thanks — we'll be in touch within one business day.</p>}
    </form>
  )
}

