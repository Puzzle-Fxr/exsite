import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Smartphone, Brain, Code2, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with modern frameworks. From sleek marketing sites to complex SaaS platforms, we craft performant, scalable solutions.',
    features: ['React & Next.js', 'Responsive Design', 'SEO Optimized', 'Cloud Deployed'],
  },
  {
    icon: Smartphone,
    title: 'App Creation',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps that users love to open every day.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'UI/UX Design'],
  },
  {
    icon: Brain,
    title: 'AI Automation',
    description:
      'Intelligent automation solutions that streamline operations and unlock new capabilities. Leverage machine learning to work smarter, not harder.',
    features: ['Machine Learning', 'Process Automation', 'NLP & Chatbots', 'Data Analytics'],
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description:
      'Bespoke software solutions tailored to your unique business needs. We architect and build systems that grow with your organization.',
    features: ['Enterprise Apps', 'API Development', 'System Integration', 'Legacy Modernization'],
  },
  {
    icon: Database,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and DevOps practices that ensure reliability, security, and cost-efficiency for your digital operations.',
    features: ['AWS & Azure', 'Serverless', 'CI/CD Pipelines', 'Monitoring'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security assessments and implementations to protect your digital assets, data, and user privacy from evolving threats.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-obsidian-light border border-slate-200 hover:border-azure/30 transition-all duration-500 hover:glow-azure"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-azure/10 flex items-center justify-center mb-6 group-hover:bg-azure/20 transition-colors duration-300">
        <Icon size={28} className="text-azure" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-silver-light mb-3 group-hover:text-azure transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-silver-dark text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {service.features.map((feature) => (
          <span
            key={feature}
            className="px-3 py-1 text-xs font-medium text-azure bg-azure/10 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-azure/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-azure/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-azure bg-azure/10 rounded-full mb-6">
            Our Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-light mb-6">
            Solutions for Every
            <span className="gradient-text"> Digital Challenge</span>
          </h2>
          <p className="text-silver-dark text-lg leading-relaxed">
            We bring together expertise across the full technology stack to deliver
            comprehensive solutions that drive real business results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
