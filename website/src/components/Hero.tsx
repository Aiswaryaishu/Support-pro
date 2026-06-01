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
      <span className="type-button whitespace-nowrap text-[10px] text-gray-600">{label}</span>
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
          <span className="type-eyebrow text-[8px] text-emerald-600">Live</span>
        </div>
      </div>

      <div className="flex items-end gap-1">
        <span className="type-display text-[31px] text-gray-900">24/7</span>
        <span className="type-eyebrow mb-1 text-[8px] text-orange-500">Desk</span>
      </div>
      <div className="mt-1.5 h-px w-full bg-gradient-to-r from-orange-400/60 via-amber-300/60 to-transparent" />
      <p className="type-card-body mt-1.5 text-[9px] text-gray-500">Rapid response, always online</p>
    </div>
  </div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden pt-[96px] lg:pt-[112px]"
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
          <div className="flex-none w-full sm:w-[56%] lg:w-[48%] pt-10 pb-8 text-left lg:pt-16 lg:pb-10">

            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-white/70 rounded-full px-4 py-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
              <span className="type-eyebrow text-[10px] text-gray-700 sm:text-[11px]">
                Trusted by 5,000+ Businesses Worldwide
              </span>
            </div>

            {/* Headline */}
            <h1
              className="type-display max-w-[640px] text-[38px] text-gray-950 sm:text-[52px] lg:text-[62px] xl:text-[68px]"
            >
              Expert IT Support<br />
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                You Can Rely On
              </span>
            </h1>

            {/* Subtitle */}
            <p className="type-body mt-5 max-w-[430px] text-[15px] text-gray-700/85 sm:text-[16px]">
              Managed cloud, server &amp; helpdesk solutions — proactive, secure, and available around the clock.
            </p>

            {/* Orange underline accent */}
            <div className="w-10 h-[5px] bg-orange-500 rounded-full mt-5 mb-7" />

            {/* CTA row */}
            <div className="flex flex-wrap items-center justify-start gap-4">
              <a
                href="/request-for-quote"
                className="inline-flex items-center h-12 bg-orange-500 rounded-full pl-1.5 pr-6 gap-3 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-300/40 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                aria-label="Request a quote from SupportPRO"
              >
                <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ArrowRight size={16} className="text-orange-500" strokeWidth={2.8} />
                </span>
                <span className="type-button text-[14px] text-white">Request for Quote</span>
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
      <div className="relative -mt-3 -mb-8" aria-hidden="true">
        <svg viewBox="0 0 1440 124" className="block w-full" fill="none" preserveAspectRatio="none" style={{ height: '124px' }}>
          <path
            d="M0 124V30C150 53 315 68 500 54C704 39 842 18 1042 31C1202 41 1325 55 1440 37V124H0Z"
            fill="#FFFAF5"
          />
          <path
            d="M0 33C150 56 315 71 500 57C704 42 842 21 1042 34C1202 44 1325 58 1440 40"
            stroke="rgba(255,255,255,0.82)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M0 31C150 54 315 69 500 55C704 40 842 19 1042 32C1202 42 1325 56 1440 38"
            stroke="rgba(249,115,22,0.20)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M0 51C180 67 336 79 535 66C722 54 878 36 1054 49C1228 62 1348 72 1440 56"
            stroke="rgba(249,115,22,0.10)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M0 65C200 78 372 85 578 74C774 63 908 51 1098 64C1258 75 1368 80 1440 70"
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
