import { Smartphone, Apple, Bot, RefreshCw, Cloud, Layers } from 'lucide-react'
import ServiceHero from '../components/ServiceHero'
import CTA from '../components/CTA'

const platforms = [
  { icon: Apple, title: 'iOS Native', desc: 'Swift & SwiftUI apps tuned for the latest Apple platforms and App Store guidelines.' },
  { icon: Smartphone, title: 'Android Native', desc: 'Kotlin & Jetpack Compose apps that feel native on every device and form factor.' },
  { icon: Layers, title: 'Cross-Platform', desc: 'React Native and Flutter codebases that ship to both stores from one source.' },
  { icon: Cloud, title: 'Backend & APIs', desc: 'Scalable backend services, real-time sync and offline-first data layers.' },
  { icon: Bot, title: 'In-App AI', desc: 'On-device and cloud AI features — recommendations, vision and assistants.' },
  { icon: RefreshCw, title: 'DevOps & Release', desc: 'CI/CD pipelines, store submissions, crash monitoring and phased rollouts.' },
]

const stack = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'AWS', 'Fastlane']

export default function AppCreation() {
  return (
    <>
      <ServiceHero
        eyebrow="App Creation"
        title="Mobile apps people open every day"
        description="We design, engineer and launch native and cross-platform mobile apps with delightful UX, rock-solid performance and the backend muscle to scale."
        image="/images/app-creation.jpg"
        features={['iOS & Android', 'Offline-first architecture', 'App Store & Play launch', 'Crash-free 99.5%+']}
      />

      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Platforms & capabilities</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-cyan-500/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400"><c.icon size={20} /></div>
                <h3 className="mt-4 font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-cyan-950/30 p-10">
            <h2 className="text-2xl font-bold text-white">Our mobile stack</h2>
            <p className="mt-2 text-slate-400">Battle-tested technologies we trust in production.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {stack.map((s) => (
                <span key={s} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
