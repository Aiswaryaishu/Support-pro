import { useState, useEffect, useRef } from 'react';
import {
  Cloud, Server, Headphones, Package, Code2,
  MessageCircle, Bell, User, ArrowRight, FileText,
  ChevronDown, Menu, X, Siren,
} from 'lucide-react';

// ─── Nav data ─────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: 'Cloud Support',
    icon: <Cloud size={17} strokeWidth={1.6} />,
    links: [
      { label: 'Cloud Management', href: '/cloud-management' },
      { label: 'AWS Support', href: '/aws-support' },
      { label: 'Google Cloud Support', href: '/google-cloud-support' },
      { label: 'Azure Support', href: '/azure-support' },
      { label: 'DevOps Support', href: '/devops-support' },
    ],
  },
  {
    label: 'Server Admin',
    icon: <Server size={17} strokeWidth={1.6} />,
    links: [
      { label: 'Node Management', href: '/node-management' },
      { label: 'Dedicated Server Support', href: '/dedicated-server-support' },
      { label: 'Free Server Checkup', href: '/free-server-checkup' },
    ],
  },
  {
    label: 'Outsourced Support',
    icon: <Headphones size={17} strokeWidth={1.6} />,
    links: [
      { label: 'Dedicated Tech Support', href: '/dedicated-tech-support' },
      { label: 'Semi-Dedicated Tech Support', href: '/semi-dedicated-tech-support' },
      { label: 'Dedicated Team Support', href: '/dedicated-team-support' },
      { label: 'Helpdesk Support', href: '/helpdesk-support' },
      { label: 'Live Chat Support', href: '/live-chat-support' },
    ],
  },
  {
    label: 'Products & Services',
    icon: <Package size={17} strokeWidth={1.6} />,
    links: [
      { label: 'Hourly Administration', href: '/hourly-administration' },
      { label: 'Server Migration', href: '/server-migration' },
      { label: 'Server Abuse Handling', href: '/server-abuse-handling' },
      { label: 'Server Manager Addon', href: '/server-manager-addon' },
      { label: 'Server Scanner', href: '/server-scanner' },
    ],
  },
  {
    label: 'Development',
    icon: <Code2 size={17} strokeWidth={1.6} />,
    links: [
      { label: 'Hire a Developer', href: '/hire-a-developer' },
      { label: 'Hire a Development Team', href: '/hire-a-development-team' },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktop(label);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 120);
  };
  const handleKeyDown = (e: React.KeyboardEvent, label: string) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenDesktop(p => p === label ? null : label); }
    if (e.key === 'Escape') setOpenDesktop(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F] transition-shadow duration-300 ${
        scrolled ? 'shadow-2xl shadow-black/40' : 'border-b border-white/[0.07]'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 h-[76px] lg:h-[84px] lg:gap-6">

          {/* ── Logo ─────────────────────────────── */}
          <a href="/" aria-label="SupportPRO home" className="flex w-[130px] items-center justify-start sm:w-[150px] lg:w-[170px] lg:-translate-x-8">
            <img
              src="/logo-header.png"
              alt="SupportPRO Transparent Technical Support"
              className="h-14 w-auto object-contain sm:h-16 lg:h-[70px]"
              draggable={false}
            />
          </a>

          {/* ── Desktop Nav ──────────────────────── */}
          <nav ref={navRef} className="hidden lg:flex items-center justify-center gap-1 translate-y-1.5" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`type-nav flex items-center gap-1.5 px-3 py-2 rounded-lg min-h-[42px] transition-colors text-[12px] xl:text-[13px] whitespace-nowrap ${
                    openDesktop === item.label ? 'text-orange-400' : 'text-white hover:text-orange-400'
                  }`}
                  aria-expanded={openDesktop === item.label}
                  aria-haspopup="true"
                  onKeyDown={(e) => handleKeyDown(e, item.label)}
                  tabIndex={0}
                >
                  {item.label}
                  <ChevronDown
                    size={11}
                    className={`transition-transform duration-200 ${openDesktop === item.label ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown */}
                {openDesktop === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1.5 w-56 bg-[#1A1A1A] rounded-xl shadow-2xl shadow-black/50 border border-white/10 py-2 z-50"
                    role="menu"
                    onMouseEnter={() => handleEnter(item.label)}
                    onMouseLeave={handleLeave}
                  >
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        role="menuitem"
                        className="type-card-body block px-4 py-2.5 text-[13px] text-gray-400 hover:bg-white/5 hover:text-orange-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── Right actions ────────────────────── */}
          <div className="hidden lg:flex items-center justify-end gap-2.5">
            {/* Emergency outlined pill */}
            <a
              href="/emergency-support"
              className="type-button group relative flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/70 bg-orange-500/[0.06] text-orange-300 text-[12px] hover:bg-orange-500/15 hover:border-orange-300 hover:text-orange-200 transition-all duration-200 whitespace-nowrap min-h-[38px] shadow-sm shadow-orange-950/20"
              aria-label="Emergency Support"
            >
              <span className="w-5 h-5 rounded-full bg-orange-500/15 flex items-center justify-center">
                <Siren size={12} strokeWidth={2.4} />
              </span>
              Emergency
              <span className="type-card-body pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-lg border border-white/10 bg-[#181818] px-3 py-1.5 text-[11px] text-white opacity-0 shadow-xl shadow-black/30 transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                Urgent server or cloud issue
              </span>
            </a>

            {/* Icon buttons */}
            {[
              { icon: <MessageCircle size={18} strokeWidth={1.5} />, label: 'Open chat', href: undefined },
              { icon: <Bell size={18} strokeWidth={1.5} />, label: 'Notifications', href: undefined },
              { icon: <User size={18} strokeWidth={1.5} />, label: 'Login to account', href: '/login' },
            ].map(({ icon, label, href }) =>
              href ? (
                <div key={label} className="group relative">
                  <a href={href} aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 hover:text-orange-300 hover:bg-orange-500/10 hover:border-orange-400/30 transition-all duration-200">
                    {icon}
                  </a>
                  <span className="type-card-body pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#181818] px-3 py-1.5 text-[11px] text-white opacity-0 shadow-xl shadow-black/30 transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                    {label}
                  </span>
                </div>
              ) : (
                <div key={label} className="group relative">
                  <button aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 hover:text-orange-300 hover:bg-orange-500/10 hover:border-orange-400/30 transition-all duration-200">
                    {icon}
                  </button>
                  <span className="type-card-body pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#181818] px-3 py-1.5 text-[11px] text-white opacity-0 shadow-xl shadow-black/30 transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                    {label}
                  </span>
                </div>
              )
            )}

            {/* Quote CTA */}
            <a
              href="/request-for-quote"
              aria-label="Request a quote"
              className="type-button group relative flex items-center gap-2 h-10 px-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white text-[12px] transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/45 flex-shrink-0"
            >
              <FileText size={15} className="text-white" strokeWidth={2.4} />
              <span>Quote</span>
              <span className="type-card-body pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#181818] px-3 py-1.5 text-[11px] text-white opacity-0 shadow-xl shadow-black/30 transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                Request for Quote
              </span>
            </a>
          </div>

          {/* ── Mobile hamburger ─────────────────── */}
          <button
            className="lg:hidden col-start-3 justify-self-end w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] bg-[#0F0F0F] z-40 overflow-y-auto border-t border-white/10">
          <div className="px-5 py-5">
            <div className="flex gap-2 mb-5">
              <a href="/emergency-support" onClick={() => setMobileOpen(false)}
                className="type-button flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-orange-500/70 text-orange-400 text-sm">
                <Siren size={15} /> Emergency
              </a>
              <a href="/request-for-quote" onClick={() => setMobileOpen(false)}
                className="type-button flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 text-white text-sm">
                <ArrowRight size={15} /> Get a Quote
              </a>
            </div>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-white/10">
                <button
                  className="type-nav w-full flex items-center justify-between py-4 text-sm text-gray-200"
                  onClick={() => setOpenMobile(p => p === item.label ? null : item.label)}
                  aria-expanded={openMobile === item.label}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-orange-400">{item.icon}</span>
                    {item.label}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-500 transition-transform duration-200 ${openMobile === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
                {openMobile === item.label && (
                  <div className="pl-8 pb-3 space-y-1">
                    {item.links.map((link) => (
                      <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
