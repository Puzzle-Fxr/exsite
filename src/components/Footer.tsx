import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '/#services', isPage: false },
    { label: 'App Creation', href: '/#services', isPage: false },
    { label: 'AI Automation', href: '/#services', isPage: false },
    { label: 'Web Hosting', href: '/hosting', isPage: true },
  ],
  company: [
    { label: 'About Us', href: '/#about', isPage: false },
    { label: 'Our Process', href: '/#about', isPage: false },
    { label: 'Careers', href: '/#contact', isPage: false },
    { label: 'Contact', href: '/#contact', isPage: false },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/uploads/upload_1.png"
                alt="Excelsis Softworks"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-silver-dark text-sm leading-relaxed max-w-md mb-6">
              Excelsis Softworks is a technology solutions company dedicated to building
              innovative digital products. From web development to AI automation, we turn
              ambitious ideas into reality.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-azure/10 flex items-center justify-center text-silver-dark hover:text-azure transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-silver-light uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  {link.isPage ? (
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-silver-dark hover:text-azure transition-colors duration-300"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-silver-dark hover:text-azure transition-colors duration-300"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-silver-light uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-silver-dark hover:text-azure transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-silver-dark/60">
            &copy; {new Date().getFullYear()} Excelsis Softworks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs text-silver-dark/60 hover:text-silver transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="#"
              className="text-xs text-silver-dark/60 hover:text-silver transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
