import {
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const footerColumns = [
  {
    title: 'Industry Solutions',
    links: [
      'Web Hosting Services',
      'Service Providers',
      'E-Commerce Companies',
      'Software Vendors',
      'Web Developers',
      'ISPs',
    ],
  },
  {
    title: 'About Us',
    links: ['Company', 'Technical Blog', 'Careers', 'FAQ', 'Partners', 'Site Map'],
  },
  {
    title: 'Popular Plans',
    links: ['Dedicated Team Support', 'Helpdesk Support', 'Hourly Administration'],
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-[#080808] text-white border-t border-slate-900">
    {/* Premium top gradient line */}
    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" aria-hidden="true" />

    {/* Soft brand glow layers */}
    <div
      className="absolute -right-36 -bottom-36 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl"
      aria-hidden="true"
    />
    <div
      className="absolute -left-36 -top-36 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl"
      aria-hidden="true"
    />

    {/* Tech grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
      aria-hidden="true"
    />

    <div className="relative mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 xl:px-12">
      {/* Sleek, balanced 5-column grid */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        
        {/* Column 1: Logo & Socials */}
        <div className="flex flex-col gap-6 sm:col-span-2 md:col-span-1">
          <a href="/" aria-label="SupportPRO home" className="inline-flex">
            <img
              src="/logo-header.png"
              alt="SupportPRO Logo"
              className="h-12 w-auto object-contain"
              draggable={false}
            />
          </a>
          <p className="type-card-body max-w-[270px] text-[13px] leading-relaxed text-slate-400">
            Managed cloud, server &amp; helpdesk solutions that keep your business secure,
            optimized, and always running.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href="/"
                aria-label={item.name}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:-translate-y-0.5 shadow-sm"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="type-eyebrow text-[11px] font-bold uppercase tracking-wider text-orange-400">
            Contact Us
          </h3>
          <div className="mt-4 h-1 w-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          
          <div className="mt-6 space-y-5 text-[13px] text-slate-300">
            <div className="flex items-start gap-2.5">
              <Phone size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[11.5px] font-bold text-white uppercase tracking-wider">Phone</p>
                <a href="tel:18476076123" className="hover:text-orange-400 transition-colors text-[12.5px] font-medium mt-0.5 block">
                  1-(847)-607-6123
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-[11.5px] font-bold text-white uppercase tracking-wider mb-1">Email</p>
                <p className="text-[12px] leading-tight">
                  <span className="text-orange-400/80 font-medium">Sales:</span>{" "}
                  <a href="mailto:sales@supportpro.com" className="hover:text-orange-400 transition-colors">
                    sales@supportpro.com
                  </a>
                </p>
                <p className="text-[12px] leading-tight">
                  <span className="text-orange-400/80 font-medium">Support:</span>{" "}
                  <a href="mailto:support@supportpro.com" className="hover:text-orange-400 transition-colors">
                    support@supportpro.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-2 border-t border-white/5">
              <MapPin size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[11.5px] font-bold text-white uppercase tracking-wider">Address</p>
                <p className="text-[12px] leading-relaxed text-slate-400 mt-0.5">
                  1020 Milwaukee Ave, #245,
                  <br />
                  Deerfield, IL-60015
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columns 3, 4, 5: Resource Links */}
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="type-eyebrow text-[11px] font-bold uppercase tracking-wider text-orange-400">
              {column.title}
            </h3>
            <div className="mt-4 h-1 w-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
            
            <ul className="mt-6 space-y-4">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="/"
                    className="type-card-body group flex items-center justify-between text-[13px] text-slate-300 transition-all duration-300 hover:translate-x-1.5 hover:text-orange-400"
                  >
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="type-card-body text-[12px] text-slate-400">
          © 2026 SupportPRO.com. All Rights Reserved.
        </p>
        <div className="type-card-body flex items-center gap-6 text-[12px] text-slate-400">
          <a href="/" className="transition-colors duration-300 hover:text-orange-400">
            Privacy Statement
          </a>
          <span className="text-slate-800" aria-hidden="true">|</span>
          <a href="/" className="transition-colors duration-300 hover:text-orange-400">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
