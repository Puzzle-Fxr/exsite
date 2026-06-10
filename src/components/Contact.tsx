import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-obsidian">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-azure/3 rounded-full blur-3xl" />
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
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-silver-light mb-6">
            Let's Build Something
            <span className="gradient-text"> Extraordinary</span>
          </h2>
          <p className="text-silver-dark text-lg leading-relaxed">
            Have a project in mind? We'd love to hear about it. Reach out and let's
            discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-silver-light mb-6">
                Contact Information
              </h3>
              <p className="text-silver-dark leading-relaxed mb-8">
                Ready to start your next project? Our team is here to answer your
                questions and discuss how we can help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-azure/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-azure" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-silver-light mb-1">Email</h4>
                  <p className="text-silver-dark text-sm">hello@excelsissoftworks.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-azure/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-azure" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-silver-light mb-1">Phone</h4>
                  <p className="text-silver-dark text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-azure/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-azure" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-silver-light mb-1">Location</h4>
                  <p className="text-silver-dark text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-sm font-semibold text-silver-light mb-4">
                Working Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-silver-dark">Monday – Friday</span>
                  <span className="text-silver-light">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-silver-dark">Saturday</span>
                  <span className="text-silver-light">10:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-silver-dark">Sunday</span>
                  <span className="text-silver-light">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-azure/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-azure" />
                  </div>
                  <h3 className="text-2xl font-semibold text-silver-light mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-silver-dark">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-silver-light mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-silver-light placeholder-silver/50 focus:outline-none focus:border-azure/50 focus:ring-1 focus:ring-azure/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-silver-light mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-silver-light placeholder-silver/50 focus:outline-none focus:border-azure/50 focus:ring-1 focus:ring-azure/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-silver-light mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-silver-light placeholder-silver/50 focus:outline-none focus:border-azure/50 focus:ring-1 focus:ring-azure/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-silver-light mb-2">
                      Service Interest
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-silver-light focus:outline-none focus:border-azure/50 focus:ring-1 focus:ring-azure/50 transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Creation</option>
                      <option value="ai">AI Automation</option>
                      <option value="custom">Custom Software</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="security">Cybersecurity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-silver-light mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-silver-light placeholder-silver/50 focus:outline-none focus:border-azure/50 focus:ring-1 focus:ring-azure/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-obsidian bg-azure hover:bg-azure-light disabled:opacity-70 transition-all duration-300 rounded-xl"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
