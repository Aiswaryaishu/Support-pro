// ─── TrustStrip ──────────────────────────────────────────────────────────────
// Premium centered certification bar — white glassmorphic, bold badge cards.

// ─── AWS ─────────────────────────────────────────────────────────────────────
const AwsLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <svg viewBox="0 0 72 28" width="72" height="28" aria-label="AWS">
      <text x="0" y="24" fontFamily="'Arial Black',Impact,sans-serif" fontSize="26" fontWeight="900" fill="#FF9900" letterSpacing="-1">aws</text>
    </svg>
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest leading-tight">Partner Network</span>
      <span className="text-[7.5px] font-semibold text-orange-500 tracking-wide">Premier Consulting</span>
    </div>
  </div>
);

// ─── Red Hat ──────────────────────────────────────────────────────────────────
const RedHatLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <svg viewBox="0 0 60 28" width="60" height="28" aria-label="Red Hat">
      {/* Hat shape */}
      <ellipse cx="18" cy="14" rx="14" ry="14" fill="#EE0000"/>
      <polygon points="8,18 28,18 23,10 13,10" fill="#CC0000"/>
      {/* Brim */}
      <ellipse cx="18" cy="18" rx="14" ry="4" fill="#CC0000"/>
      <text x="35" y="19" fontFamily="'Arial Black',sans-serif" fontSize="11" fontWeight="900" fill="#EE0000">HAT</text>
    </svg>
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Ready Partner</span>
    </div>
  </div>
);

// ─── cPanel ───────────────────────────────────────────────────────────────────
const CpanelLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <svg viewBox="0 0 56 28" width="56" height="28" aria-label="cPanel">
      <circle cx="14" cy="14" r="13" fill="#FF6C2C"/>
      <text x="5" y="19" fontFamily="'Arial Black',sans-serif" fontSize="13" fontWeight="900" fill="white">cP</text>
      <text x="30" y="19" fontFamily="'Arial Black',sans-serif" fontSize="13" fontWeight="900" fill="#FF6C2C">anel</text>
    </svg>
    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Certified Partner</span>
  </div>
);

// ─── BBB A+ ───────────────────────────────────────────────────────────────────
const BbbLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <svg viewBox="0 0 52 28" width="52" height="28" aria-label="BBB A+ Rating">
      <rect x="0" y="1" width="24" height="26" rx="4" fill="#003F87"/>
      <text x="3" y="21" fontFamily="'Arial Black',sans-serif" fontSize="18" fontWeight="900" fill="white">B</text>
      <text x="28" y="14" fontFamily="'Arial Black',sans-serif" fontSize="9" fontWeight="900" fill="#003F87">BBB</text>
      <text x="28" y="26" fontFamily="'Arial Black',sans-serif" fontSize="13" fontWeight="900" fill="#E67E00">A+</text>
    </svg>
    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Accredited Business</span>
  </div>
);

// ─── ISO 9001 ─────────────────────────────────────────────────────────────────
const Iso9001Logo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <svg viewBox="0 0 38 36" width="38" height="36" aria-label="ISO 9001:2015">
      <circle cx="19" cy="18" r="17" fill="none" stroke="#003F87" strokeWidth="3"/>
      <circle cx="19" cy="18" r="12" fill="#003F87"/>
      <text x="10" y="16" fontFamily="'Arial Black',sans-serif" fontSize="6" fontWeight="700" fill="white">ISO</text>
      <text x="8" y="24" fontFamily="'Arial Black',sans-serif" fontSize="9" fontWeight="900" fill="white">9001</text>
    </svg>
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-bold text-[#003F87] uppercase tracking-widest">ISO 9001:2015</span>
      <span className="text-[7px] text-gray-500 tracking-wide">Quality Management</span>
    </div>
  </div>
);

// ─── AICPA SOC ────────────────────────────────────────────────────────────────
const AicpaLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <svg viewBox="0 0 38 36" width="38" height="36" aria-label="AICPA SOC">
      <circle cx="19" cy="18" r="17" fill="#003F87" stroke="#0050A0" strokeWidth="1.5"/>
      <text x="7" y="14" fontFamily="'Arial Black',sans-serif" fontSize="5.5" fontWeight="700" fill="rgba(255,255,255,0.75)">AICPA</text>
      <text x="5" y="25" fontFamily="'Arial Black',sans-serif" fontSize="12" fontWeight="900" fill="white">SOC</text>
    </svg>
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-bold text-[#003F87] uppercase tracking-widest">AICPA SOC</span>
      <span className="text-[7px] text-gray-500">Service Organization</span>
    </div>
  </div>
);

// ─── ISO 27001 ────────────────────────────────────────────────────────────────
const Iso27001Logo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <svg viewBox="0 0 38 36" width="38" height="36" aria-label="ISO 27001">
      <circle cx="19" cy="18" r="17" fill="none" stroke="#1A3A5C" strokeWidth="3"/>
      <circle cx="19" cy="18" r="12" fill="#1A3A5C"/>
      <text x="9" y="16" fontFamily="'Arial Black',sans-serif" fontSize="5.5" fontWeight="700" fill="white">ISO</text>
      <text x="5" y="25" fontFamily="'Arial Black',sans-serif" fontSize="8" fontWeight="900" fill="white">27001</text>
    </svg>
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-bold text-[#1A3A5C] uppercase tracking-widest">ISO 27001</span>
      <span className="text-[7px] text-gray-500">Information Security</span>
    </div>
  </div>
);

// ─── Badge card ───────────────────────────────────────────────────────────────
const BadgeCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`
      group relative flex-shrink-0 flex flex-col items-center justify-center
      w-[128px] min-h-[104px] rounded-2xl px-4 py-4
      transition-all duration-300 cursor-default select-none
      ${className}
    `}
    style={{
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.95)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.transform = 'translateY(-4px)';
      el.style.boxShadow = '0 8px 32px rgba(249,115,22,0.15), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)';
      el.style.borderColor = 'rgba(249,115,22,0.30)';
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.transform = 'translateY(0)';
      el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)';
      el.style.borderColor = 'rgba(255,255,255,0.95)';
    }}
  >
    {children}
  </div>
);

// ─── 23 Years featured seal ───────────────────────────────────────────────────
const YearsSeal = () => (
  <div
    className="flex-shrink-0 relative flex flex-col items-center justify-center w-[130px] min-h-[96px] rounded-2xl px-4 py-4 cursor-default select-none"
    style={{
      background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,248,235,0.98) 100%)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1.5px solid rgba(245,158,11,0.5)',
      boxShadow: '0 4px 24px rgba(245,158,11,0.20), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)',
    }}
  >
    {/* Starburst ring */}
    <svg className="absolute inset-0 w-full h-full rounded-2xl pointer-events-none" viewBox="0 0 130 96" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="sealGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(245,158,11,0.12)"/>
          <stop offset="100%" stopColor="rgba(245,158,11,0)"/>
        </radialGradient>
      </defs>
      <rect width="130" height="96" rx="16" fill="url(#sealGlow)"/>
    </svg>

    <div className="relative flex flex-col items-center gap-0.5">
      {/* Top accent */}
      <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mb-1" />
      {/* Number */}
      <span
        className="text-[44px] font-black text-amber-500 leading-none"
        style={{ textShadow: '0 2px 16px rgba(245,158,11,0.40)' }}
      >23</span>
      {/* Label */}
      <div className="flex flex-col items-center mt-0.5">
        <span className="text-[8px] font-black text-amber-700 uppercase tracking-[0.2em] leading-tight">Years of</span>
        <span className="text-[8px] font-black text-amber-700 uppercase tracking-[0.2em] leading-tight">Experience</span>
      </div>
      {/* Bottom accent */}
      <div className="w-6 h-[2px] rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mt-1" />
    </div>
  </div>
);

// ─── TrustStrip ──────────────────────────────────────────────────────────────
const CERTS = [
  { key: 'aws',      logo: <AwsLogo /> },
  { key: 'redhat',   logo: <RedHatLogo /> },
  { key: 'cpanel',   logo: <CpanelLogo /> },
  { key: 'bbb',      logo: <BbbLogo /> },
  { key: 'iso9001',  logo: <Iso9001Logo /> },
  { key: 'aicpa',    logo: <AicpaLogo /> },
  { key: 'iso27001', logo: <Iso27001Logo /> },
];

const TrustStrip = () => (
  <section
    className="relative overflow-hidden bg-[#fffaf5] py-14 lg:py-16"
    aria-label="Certifications and partnerships"
  >
    <div className="absolute left-6 top-6 h-24 w-32 opacity-35 [background-image:radial-gradient(circle,rgba(249,115,22,0.22)_1.2px,transparent_1.2px)] [background-size:10px_10px]" aria-hidden="true" />
    <div className="absolute bottom-8 right-10 h-24 w-32 opacity-30 [background-image:radial-gradient(circle,rgba(249,115,22,0.18)_1.2px,transparent_1.2px)] [background-size:10px_10px]" aria-hidden="true" />
    <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-orange-100/55" aria-hidden="true" />
    <div className="absolute -left-16 bottom-0 h-44 w-[420px] rounded-[100%] border-t border-orange-200/55" aria-hidden="true" />
    <span className="absolute right-[8%] top-[22%] text-2xl font-black text-orange-300/70" aria-hidden="true">+</span>
    <span className="absolute left-[7%] bottom-[28%] text-2xl font-black text-orange-300/70" aria-hidden="true">+</span>

    <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

      {/* Section header */}
      <div className="mb-8 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-orange-300" aria-hidden="true" />
          <span className="font-['Manrope'] text-[10px] font-black uppercase tracking-[0.28em] text-orange-500">
            Trusted by thousands
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-orange-300" aria-hidden="true" />
        </div>
        <h2
          className="text-[24px] font-semibold tracking-[-0.03em] text-slate-800 sm:text-[30px]"
          style={{ fontFamily: '"Lucida Sans", "Lucida Grande", "Trebuchet MS", Arial, sans-serif' }}
        >
          Certified. Secure. Trusted Worldwide.
        </h2>
        <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
      </div>

      {/* Badge grid — scrollable on mobile */}
      <div className="flex items-center justify-center gap-3 flex-wrap lg:flex-nowrap">
        {CERTS.map(({ key, logo }) => (
          <BadgeCard key={key}>{logo}</BadgeCard>
        ))}

        {/* Thin separator */}
        <div className="hidden lg:block h-16 w-px flex-shrink-0"
          style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.10) 50%, transparent)' }}
          aria-hidden="true"
        />

        {/* Featured 23 Years */}
        <YearsSeal />
      </div>

      {/* Footer caption */}
      <p className="text-center text-[11px] text-gray-500 font-medium mt-7 tracking-wide">
        Trusted by <span className="text-orange-500 font-bold">5,000+</span> businesses in 30+ countries since 2002
      </p>
    </div>
  </section>
);

export default TrustStrip;
