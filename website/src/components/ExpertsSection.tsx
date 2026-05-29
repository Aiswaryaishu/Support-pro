import {
  BadgeCheck,
  Headset,
  MonitorCog,
  ServerCog,
} from 'lucide-react';

const supportCards = [
  {
    title: 'Transparent Technical Support',
    icon: <MonitorCog size={34} className="text-white" strokeWidth={1.9} />,
    description:
      "White-labeled technical support for your business means your clients wouldn’t know somebody outside your company handles the support queries. As far as your clients are concerned, the responses are coming from your organization. Our techs would be your techs.",
  },
  {
    title: '24/7 Customer Support',
    icon: <Headset size={34} className="text-white" strokeWidth={1.9} />,
    description:
      'Our brilliant support engineers are always at your service, 24 hours a day, seven days a week, 365 days a year. We listen to all your server problems and give you the perfect solution every time.',
  },
  {
    title: 'Proactive Server Management',
    icon: <ServerCog size={34} className="text-white" strokeWidth={1.9} />,
    description:
      "We take care of the most crucial and fragile part of every business operation, i.e. infrastructure. We don’t wait for you to tell us that your infrastructure has gone haywire; we take preventive measures to keep your infrastructure secure and updated.",
  },
];

const platforms = [
  {
    name: 'redhat.',
    mark: (
      <span className="flex items-center gap-2">
        <span className="h-7 w-7 rounded-full bg-red-600 shadow-sm shadow-red-500/30" />
        <span className="font-['Arial_Black'] text-2xl tracking-[-0.06em] text-gray-800">redhat.</span>
      </span>
    ),
  },
  {
    name: 'Windows',
    mark: (
      <span className="flex items-center gap-2">
        <span className="grid h-6 w-6 grid-cols-2 gap-0.5">
          <span className="bg-sky-500" />
          <span className="bg-sky-500" />
          <span className="bg-sky-400" />
          <span className="bg-sky-400" />
        </span>
        <span className="text-2xl font-medium text-sky-500">Windows</span>
      </span>
    ),
  },
  {
    name: 'openstack',
    mark: (
      <span className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-red-600 text-xs font-black text-white">
          OS
        </span>
        <span className="text-2xl font-semibold text-gray-700">openstack</span>
      </span>
    ),
  },
  {
    name: 'vmware',
    mark: <span className="text-3xl font-bold tracking-[-0.08em] text-gray-500">vmware</span>,
  },
];

const ExpertsSection = () => (
  <section
    className="relative overflow-hidden py-18 lg:py-24"
    style={{
      background:
        'linear-gradient(180deg, #ffffff 0%, #ffffff 48%, #f8fafc 82%, #ffffff 100%)',
    }}
  >
    <div
      className="absolute left-[-14%] top-[-16%] h-[620px] w-[620px] rounded-full blur-3xl"
      style={{ background: 'radial-gradient(circle, rgba(248,250,252,0.92) 0%, rgba(248,250,252,0.42) 42%, transparent 72%)' }}
      aria-hidden="true"
    />
    <div
      className="absolute right-[-12%] top-[6%] h-[620px] w-[620px] rounded-full blur-3xl"
      style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.54) 44%, transparent 72%)' }}
      aria-hidden="true"
    />
    <div
      className="absolute left-1/2 top-[42%] h-[420px] w-[1120px] -translate-x-1/2 rounded-full blur-3xl"
      style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.62) 48%, transparent 74%)' }}
      aria-hidden="true"
    />
    <div
      className="absolute bottom-[-18%] left-[10%] h-[420px] w-[720px] rounded-full blur-3xl"
      style={{ background: 'radial-gradient(ellipse, rgba(248,250,252,0.72) 0%, transparent 70%)' }}
      aria-hidden="true"
    />

    {/* Clean abstract surface lines */}
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          'radial-gradient(circle at 18% 18%, rgba(248,250,252,0.90) 0%, transparent 28%), radial-gradient(circle at 84% 24%, rgba(248,250,252,0.72) 0%, transparent 30%), radial-gradient(circle at 50% 78%, rgba(255,255,255,0.82) 0%, transparent 36%)',
      }}
      aria-hidden="true"
    />
    <div
      className="absolute inset-0 opacity-[0.16]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse at center, black 0%, black 42%, transparent 76%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, black 42%, transparent 76%)',
      }}
      aria-hidden="true"
    />
    <svg
      className="absolute inset-x-0 top-0 h-full w-full opacity-[0.52]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M-120 230 C180 110 330 250 610 145 C870 50 1040 120 1190 70 C1310 30 1390 26 1520 70"
        fill="none"
        stroke="rgba(249,115,22,0.10)"
        strokeWidth="1.4"
      />
      <path
        d="M-160 650 C180 540 420 690 720 575 C980 475 1140 560 1320 500 C1420 466 1490 470 1580 510"
        fill="none"
        stroke="rgba(15,23,42,0.05)"
        strokeWidth="1.2"
      />
      <path
        d="M-80 420 C240 330 420 465 700 380 C980 295 1140 380 1510 320"
        fill="none"
        stroke="rgba(249,115,22,0.08)"
        strokeWidth="1"
      />
    </svg>

    <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-2 shadow-[0_10px_30px_rgba(249,115,22,0.08)] backdrop-blur">
          <BadgeCheck size={14} className="text-orange-500" strokeWidth={2.4} />
          <span className="font-['Manrope'] text-[11px] font-extrabold uppercase tracking-[0.22em] text-orange-600">
            Experts You Can Trust
          </span>
        </div>

        <h2
          className="mx-auto max-w-3xl text-[34px] font-semibold leading-tight tracking-[-0.035em] text-gray-950 sm:text-[42px] lg:text-[50px]"
          style={{ fontFamily: '"Lucida Sans", "Lucida Grande", "Trebuchet MS", Arial, sans-serif' }}
        >
          The Outsourced Technical Support Experts
        </h2>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-gray-600 sm:text-base">
          We provide 24/7 transparent technical support for web hosting companies, data centers,
          server management companies, and MSPs.
        </p>
      </div>

      <div className="relative mt-14">
        <div
          className="absolute left-1/2 top-1/2 hidden h-24 w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/35 blur-3xl lg:block"
          aria-hidden="true"
        />
        <div className="relative grid items-stretch gap-7 lg:grid-cols-3">
        {supportCards.map((card) => (
          <article
            key={card.title}
            className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[28px] border border-orange-100/70 bg-white px-8 pb-8 pt-12 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_26px_75px_rgba(249,115,22,0.14)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-50 blur-2xl transition duration-300 group-hover:scale-125" />
            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[28px] border border-orange-100 bg-orange-50 shadow-[0_14px_34px_rgba(249,115,22,0.12)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-orange-500 to-amber-400 shadow-[0_10px_24px_rgba(249,115,22,0.28)]">
                {card.icon}
              </div>
            </div>
            <h3 className="relative text-center text-[19px] font-black tracking-[-0.025em] text-gray-950">{card.title}</h3>
            <p className="relative mt-5 text-center text-[14px] leading-7 text-gray-600">{card.description}</p>
            <div className="absolute inset-x-8 bottom-0 h-1 rounded-t-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 opacity-90" />
          </article>
        ))}
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-[1120px]">
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="font-['Manrope'] text-[11px] font-black uppercase tracking-[0.26em] text-orange-500">
            Technologies We Support
          </span>
          <h3
            className="mt-3 text-[32px] font-semibold tracking-[-0.035em] text-gray-950 sm:text-[40px]"
            style={{ fontFamily: '"Lucida Sans", "Lucida Grande", "Trebuchet MS", Arial, sans-serif' }}
          >
            Supported Platforms
          </h3>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
          <p className="mt-4 text-[15px] leading-7 text-gray-500">
            Covering all major technology platforms to bring you excellent outsourced support.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden py-2">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
            style={{ background: 'linear-gradient(90deg, #fffaf7 0%, transparent 100%)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
            style={{ background: 'linear-gradient(270deg, #fffaf7 0%, transparent 100%)' }}
            aria-hidden="true"
          />

          <div className="flex w-max items-center gap-5 animate-marquee hover:[animation-play-state:paused]">
            {[...platforms, ...platforms].map((platform, index) => (
              <div
                key={`${platform.name}-${index}`}
                className="flex min-h-[82px] min-w-[210px] items-center justify-center rounded-[24px] border border-white/80 bg-white/75 px-7 shadow-[0_14px_38px_rgba(15,23,42,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-[0_20px_54px_rgba(249,115,22,0.14)]"
              >
                {platform.mark}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex justify-center" aria-hidden="true">
          <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
        </div>
      </div>
    </div>
  </section>
);

export default ExpertsSection;
