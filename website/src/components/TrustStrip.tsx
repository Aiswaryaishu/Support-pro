// ─── TrustStrip ──────────────────────────────────────────────────────────────
// Premium centered certification bar — white glassmorphic, bold badge cards.

// ─── AWS ─────────────────────────────────────────────────────────────────────
const AwsLogo = () => (
  <div className="flex flex-col items-center gap-1.5">
    <svg viewBox="0 0 72 28" width="72" height="28" aria-label="AWS">
      <text x="0" y="24" fontFamily="'Arial Black',Impact,sans-serif" fontSize="26" fontWeight="900" fill="#FF9900" letterSpacing="-1">aws</text>
    </svg>
    <div className="flex flex-col items-center">
      <span className="type-eyebrow text-[8px] text-gray-500">Partner Network</span>
      <span className="type-card-body text-[7.5px] text-orange-500">Premier Consulting</span>
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
      <span className="type-eyebrow text-[8px] text-gray-500">Ready Partner</span>
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
    <span className="type-eyebrow text-[8px] text-gray-500">Certified Partner</span>
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
    <span className="type-eyebrow text-[8px] text-gray-500">Accredited Business</span>
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
      <span className="type-eyebrow text-[8px] text-[#003F87]">ISO 9001:2015</span>
      <span className="type-card-body text-[7px] text-gray-500">Quality Management</span>
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
      <span className="type-eyebrow text-[8px] text-[#003F87]">AICPA SOC</span>
      <span className="type-card-body text-[7px] text-gray-500">Service Organization</span>
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
      <span className="type-eyebrow text-[8px] text-[#1A3A5C]">ISO 27001</span>
      <span className="type-card-body text-[7px] text-gray-500">Information Security</span>
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
      el.style.transform = 'translateY(-4px) scale(1.025)';
      el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1)';
      el.style.borderColor = 'rgba(249,115,22,0.46)';
      el.style.background = 'rgba(255,255,255,0.96)';
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.transform = 'translateY(0)';
      el.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)';
      el.style.borderColor = 'rgba(255,255,255,0.95)';
      el.style.background = 'rgba(255,255,255,0.85)';
    }}
  >
    {children}
  </div>
);

// ─── 23 Years featured seal ───────────────────────────────────────────────────
const YearsSeal = () => (
  <div
    className="flex-shrink-0 relative flex flex-col items-center justify-center w-[128px] min-h-[104px] rounded-2xl px-4 py-4 cursor-default select-none"
    style={{
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(249,115,22,0.22)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)',
    }}
  >
    {/* Starburst ring */}
    <svg className="absolute inset-0 w-full h-full rounded-2xl pointer-events-none" viewBox="0 0 128 104" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="sealGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.05)"/>
          <stop offset="100%" stopColor="rgba(245,158,11,0)"/>
        </radialGradient>
      </defs>
      <rect width="128" height="104" rx="16" fill="url(#sealGlow)"/>
    </svg>

    <div className="relative flex flex-col items-center gap-0.5">
      {/* Top accent */}
      <div className="mb-1.5 h-[2px] w-10 rounded-full bg-gradient-to-r from-orange-400 to-amber-300" />
      {/* Number */}
      <div className="flex items-end justify-center gap-1">
        <span className="type-display text-[39px] text-slate-900">24</span>
        <span className="type-button mb-1 text-[10px] uppercase tracking-[0.08em] text-orange-500">Yrs</span>
      </div>
      {/* Label */}
      <div className="mt-1 flex flex-col items-center">
        <span className="type-eyebrow text-[7.5px] tracking-[0.16em] text-slate-500">Industry</span>
        <span className="type-eyebrow mt-0.5 text-[7.5px] tracking-[0.16em] text-slate-500">Experience</span>
      </div>
      {/* Bottom accent */}
      <div className="mt-2 h-px w-8 rounded-full bg-orange-300/70" />
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
    <svg
      className="trust-globe absolute -right-20 top-6 h-72 w-72 text-orange-200/45"
      viewBox="0 0 240 240"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="120" cy="120" r="88" fill="rgba(255,247,237,0.56)" />
      <circle cx="120" cy="120" r="88" stroke="currentColor" strokeWidth="1.2" />
      <g className="trust-globe-lines">
        <ellipse cx="120" cy="120" rx="38" ry="88" stroke="currentColor" strokeWidth="0.85" opacity="0.48" />
        <ellipse cx="120" cy="120" rx="68" ry="88" stroke="currentColor" strokeWidth="0.75" opacity="0.34" />
      </g>
      <path d="M42 90H198" stroke="currentColor" strokeWidth="0.75" opacity="0.38" />
      <path d="M32 120H208" stroke="currentColor" strokeWidth="0.9" opacity="0.48" />
      <path d="M42 150H198" stroke="currentColor" strokeWidth="0.75" opacity="0.38" />
      <path
        d="M58 61C78 74 99 80 120 80C141 80 162 74 182 61"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.34"
      />
      <path
        d="M58 179C78 166 99 160 120 160C141 160 162 166 182 179"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.34"
      />
    </svg>
    <svg
      className="trust-globe absolute -left-24 bottom-[-70px] h-64 w-64 text-orange-200/35"
      viewBox="0 0 240 240"
      fill="none"
      aria-hidden="true"
      style={{ animationDelay: '-3s' }}
    >
      <circle cx="120" cy="120" r="86" fill="rgba(255,247,237,0.42)" />
      <circle cx="120" cy="120" r="86" stroke="currentColor" strokeWidth="1.1" />
      <g className="trust-globe-lines" style={{ animationDirection: 'reverse' }}>
        <ellipse cx="120" cy="120" rx="36" ry="86" stroke="currentColor" strokeWidth="0.75" opacity="0.42" />
        <ellipse cx="120" cy="120" rx="64" ry="86" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      </g>
      <path d="M44 92H196" stroke="currentColor" strokeWidth="0.7" opacity="0.36" />
      <path d="M34 120H206" stroke="currentColor" strokeWidth="0.85" opacity="0.45" />
      <path d="M44 148H196" stroke="currentColor" strokeWidth="0.7" opacity="0.36" />
      <path
        d="M60 64C80 76 99 82 120 82C141 82 160 76 180 64"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.32"
      />
      <path
        d="M60 176C80 164 99 158 120 158C141 158 160 164 180 176"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.32"
      />
    </svg>
    <span className="absolute right-[8%] top-[22%] text-2xl font-black text-orange-300/70" aria-hidden="true">+</span>

    <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

      {/* Section header */}
      <div className="mb-8 text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-orange-300" aria-hidden="true" />
          <span className="type-eyebrow text-[10px] text-orange-500">
            Trusted by thousands
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-orange-300" aria-hidden="true" />
        </div>
        <h2
          className="type-heading text-[24px] text-slate-800 sm:text-[30px]"
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
      <p className="type-card-body mt-7 text-center text-[11px] tracking-wide text-gray-500">
        Trusted by <span className="type-button text-orange-500">5,000+</span> businesses in 30+ countries since 2002
      </p>
    </div>
  </section>
);

export default TrustStrip;
