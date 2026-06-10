import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.',
      'We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect to provide, maintain, and improve our services; to process transactions and send related information; to send technical notices, updates, and support messages; to respond to your comments and questions; and to communicate with you about products, services, offers, and events.',
      'We may also use your information to monitor and analyze trends, usage, and activities in connection with our services; to detect, investigate, and prevent fraudulent transactions and other illegal activities; and to protect the rights and property of Excelsis Softworks and others.',
    ],
  },
  {
    title: '3. Sharing of Information',
    content: [
      'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.',
      'We may also disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations, protect and defend our rights or property, or protect the personal safety of users or the public.',
    ],
  },
  {
    title: '4. Data Security',
    content: [
      'We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and security protocols to safeguard your data.',
      'However, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.',
    ],
  },
  {
    title: '5. Cookies & Tracking Technologies',
    content: [
      'We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.',
      'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.',
    ],
  },
  {
    title: '6. Your Rights & Choices',
    content: [
      'You may update, correct, or delete your account information at any time by logging into your online account or contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those messages.',
      'If you are a resident of the European Economic Area, you have certain data protection rights including the right to access, update, or delete the information we have on you.',
    ],
  },
  {
    title: '7. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites and services that are not owned or controlled by Excelsis Softworks. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.',
      'We strongly advise you to review the privacy policy of every site you visit.',
    ],
  },
  {
    title: '8. Children\'s Privacy',
    content: [
      'Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.',
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      'If you have any questions about this Privacy Policy, please contact us at hello@excelsissoftworks.com or through the contact form on our website.',
    ],
  },
];

export default function PrivacyPolicy() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-obsidian">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-azure/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
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
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-azure/10 flex items-center justify-center">
              <Shield size={28} className="text-azure" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-azure">
                Legal
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-light">
                Privacy Policy
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-silver-dark leading-relaxed max-w-2xl"
          >
            Excelsis Softworks is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you
            visit our website or use our services.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs text-silver-dark/60 mt-4"
          >
            Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: '-40px' });
              return (
                <motion.div
                  key={section.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.05 }}
                >
                  <h2 className="text-xl font-semibold text-silver-light mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm text-silver-dark leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 p-8 rounded-2xl bg-white border border-slate-200 text-center"
          >
            <h3 className="text-lg font-semibold text-silver-light mb-2">
              Have Questions?
            </h3>
            <p className="text-sm text-silver-dark mb-6">
              If you have any concerns about your privacy or this policy, we're here to help.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-obsidian bg-azure hover:bg-azure-light transition-all duration-300 rounded-xl"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
