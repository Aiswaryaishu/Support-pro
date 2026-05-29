import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const footerColumns = [
  {
    title: 'Industry Solutions',
    links: ['Web Hosting Services', 'Service Providers', 'E-Commerce Companies', 'Software Vendors', 'Web Developers', 'ISPs'],
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
    name: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path
          d="M21 12s0-3.2-.4-4.6c-.2-.8-.8-1.4-1.6-1.6C17.6 5.4 12 5.4 12 5.4s-5.6 0-7 .4c-.8.2-1.4.8-1.6 1.6C3 8.8 3 12 3 12s0 3.2.4 4.6c.2.8.8 1.4 1.6 1.6 1.4.4 7 .4 7 .4s5.6 0 7-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.6.4-4.6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="m10.4 9.4 4.2 2.6-4.2 2.6V9.4Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M14 8.2h2.2V5.1c-.4-.1-1.7-.2-3.2-.2-3.1 0-5.2 1.9-5.2 5.4v3H4.4v3.5h3.4V24H12v-7.2h3.3l.5-3.5H12v-2.6c0-1 .3-2.5 2-2.5Z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M18.2 2.6h3.4l-7.5 8.6L23 21.8h-7l-5.5-6.6-6.3 6.6H.8l8-8.5L.3 2.6h7.2l5 6.2 5.7-6.2Zm-1.2 17.3h1.9L6.5 4.4h-2L17 19.9Z" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-[#0d1723] text-white">
    <div
      className="absolute inset-0 opacity-[0.16]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(249,115,22,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.07) 1px, transparent 1px)',
        backgroundSize: '42px 42px',
        maskImage: 'radial-gradient(ellipse at center, black 0%, black 48%, transparent 82%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, black 48%, transparent 82%)',
      }}
      aria-hidden="true"
    />
    <div
      className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"
      aria-hidden="true"
    />

    <div className="relative mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 xl:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1.05fr_3fr]">
        <div>
          <a href="/" aria-label="SupportPRO home" className="inline-flex">
            <img
              src="/logo-header.png"
              alt="SupportPRO"
              className="h-14 w-auto object-contain"
              draggable={false}
            />
          </a>
          <p className="type-card-body mt-5 max-w-[270px] text-[13px] text-slate-300">
            Managed cloud, server &amp; helpdesk solutions that keep your business secure,
            optimized, and always running.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href="/"
                aria-label={item.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-orange-400/60 hover:text-orange-400"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="type-eyebrow text-[11px] text-orange-400">
            Contact Us
          </h3>
          <div className="mt-5 h-px w-10 bg-orange-500" />
          <div className="mt-6 space-y-5">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-400">
                <Phone size={17} />
              </span>
              <div className="type-card-body text-[13px] text-slate-300">
                <p className="type-button text-white">Sales &amp; Support</p>
                <a href="tel:18476076123">1-(847)-607-6123</a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-400">
                <Mail size={17} />
              </span>
              <div className="type-card-body text-[13px] text-slate-300">
                <p>Sales: sales@supportpro.com</p>
                <p>Support: support@supportpro.com</p>
                <p>MS Team: support@supportpro.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-400">
                <MapPin size={17} />
              </span>
              <div className="type-card-body text-[13px] text-slate-300">
                <p className="type-button text-white">Postal Address</p>
                <p>
                  1020 Milwaukee Ave, #245,
                  <br />
                  Deerfield, IL-60015, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="type-eyebrow text-[11px] text-orange-400">
                {column.title}
              </h3>
              <div className="mt-5 h-px w-10 bg-orange-500" />
              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="type-card-body group flex items-center justify-between gap-3 text-[13px] text-slate-300 transition hover:text-orange-400"
                    >
                      <span>{link}</span>
                      <ChevronRight size={14} className="opacity-60 transition group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="type-card-body text-[12px] text-slate-400">© 2026 SupportPRO.com. All Rights Reserved.</p>
        <div className="type-card-body flex items-center gap-5 text-[12px] text-slate-400">
          <a href="/" className="transition hover:text-orange-400">Privacy Statement</a>
          <a href="/" className="transition hover:text-orange-400">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
