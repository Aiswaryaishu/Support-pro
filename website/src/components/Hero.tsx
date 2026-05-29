import { Cloud, ShieldCheck, Activity, ArrowRight, Clock } from 'lucide-react';

// ─── Floating icon card ───────────────────────────────────────────────────────
type FloatCardProps = {
  icon: React.ReactNode;
  label: string;
  gradient: string;
  className?: string;
  animDelay?: string;
};
const FloatCard = ({ icon, label, gradient, className = '', animDelay = '0s' }: FloatCardProps) => (
  <div
    className={`absolute animate-float ${className}`}
    style={{ animationDelay: animDelay }}
    aria-hidden="true"
  >
    <div
      className="flex flex-col items-center gap-2 px-3.5 pt-3.5 pb-3 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)',
        minWidth: '82px',
      }}
    >
      {/* Gradient icon container */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{ background: gradient, boxShadow: '0 6px 18px rgba(249,115,22,0.35)' }}
      >
        {icon}
      </div>
      {/* Label */}
      <span className="text-[10px] font-bold text-gray-600 tracking-wide whitespace-nowrap">{label}</span>
    </div>
  </div>
);

// ─── 24/7 badge ──────────────────────────────────────────────────────────────
const Badge247 = ({ className = '', animDelay = '0s' }: { className?: string; animDelay?: string }) => (
  <div
    className={`absolute animate-float ${className}`}
    style={{ animationDelay: animDelay }}
    aria-hidden="true"
  >
    {/* Soft availability glow */}
    <span className="absolute -inset-3 rounded-[28px] bg-orange-400/15 blur-2xl" />

    {/* Badge body */}
    <div
      className="relative w-[126px] overflow-hidden rounded-[26px] px-4 py-3.5"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(255,248,241,0.94) 100%)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,1)',
        boxShadow: '0 12px 34px rgba(0,0,0,0.12), 0 4px 14px rgba(249,115,22,0.16), inset 0 1px 0 rgba(255,255,255,1)',
      }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
      <div className="flex items-center justify-between mb-2">
        <div
          className="w-9 h-9 rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
            boxShadow: '0 6px 16px rgba(249,115,22,0.35)',
          }}
        >
          <Clock size={17} className="text-white" strokeWidth={2.7} />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[8px] font-black text-emerald-600 uppercase tracking-[0.16em]">Live</span>
        </div>
      </div>

      <div className="flex items-end gap-1">
        <span className="text-[31px] font-black text-gray-900 leading-none tracking-tight">24/7</span>
        <span className="mb-1 text-[8px] font-black text-orange-500 uppercase tracking-[0.18em]">Desk</span>
      </div>
      <div className="mt-1.5 h-px w-full bg-gradient-to-r from-orange-400/60 via-amber-300/60 to-transparent" />
      <p className="mt-1.5 text-[9px] font-bold text-gray-500 leading-tight">Rapid response, always online</p>
    </div>
  </div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: '84px' }}
    >
      {/* ── Premium warm background base ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #FFF4EA 0%, #FFD8B8 38%, #FFC99D 68%, #FFE2C8 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Soft brand glow layers ── */}
      <div
        className="absolute -top-28 left-[8%] h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'rgba(255,255,255,0.34)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-8 right-[8%] h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'rgba(249,115,22,0.16)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-120px] left-[35%] h-72 w-[520px] rounded-full blur-3xl"
        style={{ background: 'rgba(255,255,255,0.24)' }}
        aria-hidden="true"
      />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.58) 1.2px, transparent 1.2px)',
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 70%, rgba(0,0,0,0.45) 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 70%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* ── Warm vignette for depth ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, transparent 0%, transparent 52%, rgba(202,94,24,0.08) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 2xl:px-6">
        <div className="flex items-center">

          {/* Left: headline + CTA ──────────────────────────── */}
          <div className="flex-none w-full sm:w-[56%] lg:w-[48%] pt-12 pb-8 lg:pt-16 lg:pb-10">

            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-white/70 rounded-full px-4 py-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
              <span className="font-['Manrope'] text-[11px] font-extrabold text-gray-700 uppercase tracking-[0.18em]">
                Trusted by 5,000+ Businesses Worldwide
              </span>
            </div>

            {/* Headline */}
            <h1
              className="max-w-[640px] text-[44px] sm:text-[52px] lg:text-[62px] xl:text-[68px] font-semibold text-gray-950 leading-[1.05] tracking-[-0.03em]"
              style={{ fontFamily: '"Lucida Sans", "Lucida Grande", "Trebuchet MS", Arial, sans-serif' }}
            >
              Expert IT Support<br />
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                You Can Rely On
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-[15px] sm:text-[16px] text-gray-700/85 leading-relaxed max-w-[430px]">
              Managed cloud, server &amp; helpdesk solutions — proactive, secure, and available around the clock.
            </p>

            {/* Orange underline accent */}
            <div className="w-10 h-[5px] bg-orange-500 rounded-full mt-5 mb-7" />

            {/* CTA row */}
            <div className="flex items-center gap-4">
              <a
                href="/request-for-quote"
                className="inline-flex items-center h-12 bg-orange-500 rounded-full pl-1.5 pr-6 gap-3 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-300/40 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                aria-label="Request a quote from SupportPRO"
              >
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ArrowRight size={16} className="text-orange-500" strokeWidth={2.8} />
                </span>
                <span className="text-white font-semibold text-[14px]">Request for Quote</span>
              </a>
            </div>
          </div>

          {/* Right: floating illustration ──────────────────── */}
          <div className="hidden sm:block flex-1 relative translate-x-8 translate-y-8 lg:translate-x-14 lg:translate-y-10 xl:translate-x-20" style={{ minHeight: '360px' }} aria-hidden="true">

            {/* Cloud card — top center, moved higher */}
            <FloatCard
              icon={<Cloud size={28} className="text-white" strokeWidth={2} />}
              label="Cloud Support"
              gradient="linear-gradient(135deg, #F97316 0%, #FB923C 100%)"
              className="top-[-20%] left-[32%]"
              animDelay="0s"
            />

            {/* Shield card — top right */}
            <FloatCard
              icon={<ShieldCheck size={28} className="text-white" strokeWidth={2} />}
              label="Secure & Safe"
              gradient="linear-gradient(135deg, #EA580C 0%, #F97316 100%)"
              className="top-[4%] right-[4%]"
              animDelay="0.8s"
            />

            {/* Pulse card — middle left */}
            <FloatCard
              icon={<Activity size={28} className="text-white" strokeWidth={2} />}
              label="Live Monitoring"
              gradient="linear-gradient(135deg, #FBBF24 0%, #F97316 100%)"
              className="top-[44%] left-[6%]"
              animDelay="1.4s"
            />

            {/* 24/7 badge — middle right */}
            <Badge247 className="top-[58%] right-[4%]" animDelay="0.5s" />

            {/* Headset image — center bottom */}
            <div className="absolute bottom-0 left-[50%] -translate-x-1/2">
              <img
                src="/help.png"
                alt="3D headset support agent on glowing platform"
                className="w-[220px] sm:w-[240px] lg:w-[260px] xl:w-[290px] object-contain drop-shadow-2xl select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Soft wave transition into trust section ── */}
      <div className="relative -mt-3 -mb-px" aria-hidden="true">
        <svg viewBox="0 0 1440 96" className="block w-full" fill="none" preserveAspectRatio="none" style={{ height: '96px' }}>
          <path
            d="M0 96V25C150 45 315 58 500 46C704 33 842 14 1042 25C1202 34 1325 47 1440 31V96H0Z"
            fill="#FFFAF5"
          />
          <path
            d="M0 28C150 48 315 61 500 49C704 36 842 17 1042 28C1202 37 1325 50 1440 34"
            stroke="rgba(255,255,255,0.82)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M0 26C150 46 315 59 500 47C704 34 842 15 1042 26C1202 35 1325 48 1440 32"
            stroke="rgba(249,115,22,0.20)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M0 41C180 55 336 65 535 54C722 44 878 28 1054 39C1228 50 1348 58 1440 45"
            stroke="rgba(249,115,22,0.10)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M0 53C200 64 372 70 578 61C774 52 908 41 1098 52C1258 62 1368 66 1440 58"
            stroke="rgba(251,146,60,0.07)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
