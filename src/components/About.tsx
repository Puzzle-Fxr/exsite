import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every line of code is crafted with meticulous attention to detail and quality.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work alongside you as true collaborators, invested in your success.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly explore emerging technologies to keep you ahead of the curve.',
  },
  {
    icon: Rocket,
    title: 'Execution',
    description: 'Ideas are nothing without delivery. We ship fast and iterate continuously.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your goals, users, and constraints to build a solid foundation.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We architect the optimal solution, selecting the right technologies and approach.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile sprints with transparent progress updates and continuous collaboration.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Rigorous testing, smooth deployment, and ongoing support for lasting success.',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian-light">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-azure/3 rounded-full blur-3xl" />
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-azure bg-azure/10 rounded-full mb-6">
            About Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-light mb-6">
            Built on a Foundation of
            <span className="gradient-text"> Excellence</span>
          </h2>
          <p className="text-silver-dark text-lg leading-relaxed">
            Excelsis Softworks is a team of passionate engineers, designers, and strategists
            dedicated to building technology that makes a difference. We believe great software
            is born from the intersection of technical mastery and creative vision.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-azure/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={28} className="text-azure" />
                </div>
                <h3 className="text-lg font-semibold text-silver-light mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-silver-dark leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-center text-2xl font-semibold text-silver-light mb-12">
            Our Process
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-azure/20 transition-colors duration-300">
                <span className="text-4xl font-bold text-azure/20 font-display">
                  {item.step}
                </span>
                <h4 className="text-lg font-semibold text-silver-light mt-4 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-silver-dark leading-relaxed">
                  {item.description}
                </p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-azure/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
