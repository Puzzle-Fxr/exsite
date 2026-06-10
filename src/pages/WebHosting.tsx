import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  Globe,
  Shield,
  Zap,
  Clock,
  HardDrive,
  Headphones,
  ChevronRight,
  Check,
  ArrowLeft,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'SSD-powered servers with global CDN for sub-second load times anywhere in the world.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Free SSL certificates, DDoS protection, daily backups, and advanced firewall rules.',
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Redundant infrastructure with automatic failover ensures your site stays online.',
  },
  {
    icon: HardDrive,
    title: 'Unlimited Bandwidth',
    description: 'No traffic limits or overage charges. Scale without worrying about bandwidth costs.',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Our technical team is available around the clock to resolve any hosting issues.',
  },
  {
    icon: Globe,
    title: 'Global Data Centers',
    description: 'Choose from 12 worldwide locations to place your servers closest to your audience.',
  },
];

const plans = [
  {
    name: 'Starter',
    price: 9,
    description: 'Perfect for personal projects and small websites.',
    features: [
      '10 GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      '1 Website',
      'Email Accounts',
      'Daily Backups',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Business',
    price: 29,
    description: 'Ideal for growing businesses and e-commerce.',
    features: [
      '50 GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      '10 Websites',
      'Priority Support',
      'Staging Environment',
      'Advanced Caching',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'Dedicated resources for high-traffic applications.',
    features: [
      '200 GB SSD Storage',
      'Unlimited Bandwidth',
      'Wildcard SSL Certificate',
      'Unlimited Websites',
      'Dedicated IP',
      '24/7 Phone Support',
      'Load Balancing',
      'Custom SLA',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-200 hover:border-azure/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-azure/10 flex items-center justify-center flex-shrink-0">
        <Icon size={22} className="text-azure" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-silver-light mb-1">{feature.title}</h3>
        <p className="text-sm text-silver-dark leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function WebHosting() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const plansRef = useRef(null);
  const plansInView = useInView(plansRef, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-obsidian">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-azure/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-azure-dark/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-silver-dark hover:text-azure transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Server size={16} className="text-azure" />
              <span className="text-sm font-medium text-silver-dark">Hosting Services</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-silver-light mb-6">
              Reliable Hosting for
              <span className="gradient-text"> Every Scale</span>
            </h1>
            <p className="text-lg text-silver-dark leading-relaxed mb-8 max-w-2xl">
              From simple blogs to enterprise-grade applications, our hosting infrastructure
              delivers speed, security, and scalability you can count on.
            </p>
            <a
              href="#plans"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-obsidian bg-azure hover:bg-azure-light transition-all duration-300 rounded-xl"
            >
              View Plans
              <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-light mb-4">
              Why Host With <span className="gradient-text">Excelsis</span>
            </h2>
            <p className="text-silver-dark">
              Built on enterprise-grade infrastructure with the features that matter most.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="relative py-20 lg:py-28 bg-obsidian-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={plansRef}
            initial={{ opacity: 0, y: 20 }}
            animate={plansInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-azure bg-azure/10 rounded-full mb-6">
              Pricing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-light mb-4">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-silver-dark">
              No hidden fees. No surprises. Choose the plan that fits your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={plansInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white border-azure/40 shadow-lg shadow-azure/10 scale-105 z-10'
                    : 'bg-white border-slate-200 hover:border-azure/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-azure text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-silver-light mb-2">{plan.name}</h3>
                <p className="text-sm text-silver-dark mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-silver-light">${plan.price}</span>
                  <span className="text-silver-dark">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-silver-dark">
                      <Check size={16} className="text-azure flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-azure text-obsidian hover:bg-azure-light'
                      : 'bg-slate-100 text-silver-light hover:bg-azure/10 hover:text-azure'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-silver-light mb-4">
              Need a <span className="gradient-text">Custom</span> Solution?
            </h2>
            <p className="text-silver-dark mb-8 max-w-xl mx-auto">
              For large-scale deployments, dedicated servers, or specialized infrastructure
              requirements, our team will design a tailored hosting architecture.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-obsidian bg-azure hover:bg-azure-light transition-all duration-300 rounded-xl"
            >
              Contact Us
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
