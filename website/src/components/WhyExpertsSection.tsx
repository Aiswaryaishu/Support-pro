import {
  BadgeCheck,
  Clock3,
  Headphones,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Trophy,
} from 'lucide-react';

const expertise = [
  { label: 'Cloud Infrastructure Management', value: 96 },
  { label: 'Linux Administration', value: 94 },
  { label: 'Windows Administration', value: 88 },
  { label: 'Data Center and NOC Operations', value: 92 },
  { label: 'End User Tech Support', value: 90 },
];

const highlights = [
  '23 years of outsourced technical support experience',
  'Stringent Quality and Assurance process',
  'Every ticket handled with 100% assurance',
  'ISO 9001:2015 certified support operations',
];

const metrics = [
  {
    value: '965422',
    label: 'Helpdesk Tickets Handled',
    icon: <Headphones size={30} strokeWidth={1.8} />,
  },
  {
    value: '456343',
    label: 'Live Chats Attended',
    icon: <MessageSquareText size={30} strokeWidth={1.8} />,
  },
  {
    value: '1',
    label: 'Average Resolution Hours',
    icon: <Clock3 size={30} strokeWidth={1.8} />,
  },
  {
    value: '15',
    label: 'Average Response Minutes',
    icon: <Trophy size={30} strokeWidth={1.8} />,
  },
];

const WhyExpertsSection = () => (
  <section className="relative overflow-hidden bg-[#f4f7fb] py-18 lg:py-24">
    <div
      className="absolute left-[-12%] top-[-18%] h-[520px] w-[520px] rounded-full blur-3xl"
      style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
      aria-hidden="true"
    />
    <div
      className="absolute right-[-10%] bottom-[-18%] h-[560px] w-[560px] rounded-full blur-3xl"
      style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 72%)' }}
      aria-hidden="true"
    />

    <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div className="relative">
          <div className="overflow-hidden rounded-[28px] shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"
              alt="Support professionals discussing technical operations"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-6 right-6 rounded-[26px] border border-white/35 bg-black/55 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.34)] backdrop-blur-2xl sm:left-10 sm:right-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm">
                <Sparkles size={22} strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-xl font-black tracking-[-0.03em] text-white drop-shadow-sm">Our Expertise</h3>
              </div>
            </div>

            <div className="space-y-4">
              {expertise.slice(0, 3).map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm font-black text-white">
                    <span className="drop-shadow-sm">{item.label}</span>
                    <span className="text-orange-400 drop-shadow-sm">{item.value}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/75 shadow-inner">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[620px] pt-12 lg:pt-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
            <ShieldCheck size={15} className="text-orange-500" strokeWidth={2.4} />
            <span className="font-['Manrope'] text-[11px] font-black uppercase tracking-[0.22em] text-orange-600">
              Why Choose Us
            </span>
          </div>

          <h2
            className="max-w-[560px] text-[34px] font-semibold leading-[1.12] tracking-[-0.035em] text-gray-950 sm:text-[42px] lg:text-[48px]"
            style={{ fontFamily: '"Lucida Sans", "Lucida Grande", "Trebuchet MS", Arial, sans-serif' }}
          >
            Why we call Ourselves the Experts
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />

          <p className="mt-6 max-w-[590px] text-[15px] leading-8 text-gray-600">
            SupportPRO from its inception 23 years ago has been learning and pioneering in the field
            of Outsourced Technical Support. We measure the matrices and key process indicators to
            ensure that the service remains consistent time after time.
          </p>

          <p className="mt-4 max-w-[590px] text-[15px] leading-8 text-gray-600">
            We regard every ticket with the utmost importance and ensure each ticket is addressed with
            100% assurance. Our pledge to quality and process has earned us an ISO 9001 2015 certification.
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex min-h-[52px] items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-[0_10px_26px_rgba(249,115,22,0.22)]">
                  <BadgeCheck size={17} strokeWidth={2.4} />
                </span>
                <span className="text-[14px] font-semibold leading-6 text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="/request-for-quote"
            className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/35"
          >
            Talk to an Expert
          </a>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden rounded-[34px] bg-[#fffaf5] px-4 py-12 shadow-[0_24px_90px_rgba(249,115,22,0.08)] sm:px-8 lg:px-12">
        <div className="absolute left-5 top-8 h-16 w-24 opacity-40 [background-image:radial-gradient(circle,rgba(249,115,22,0.22)_1.2px,transparent_1.2px)] [background-size:10px_10px]" aria-hidden="true" />
        <div className="absolute bottom-8 right-12 h-16 w-24 opacity-35 [background-image:radial-gradient(circle,rgba(249,115,22,0.20)_1.2px,transparent_1.2px)] [background-size:10px_10px]" aria-hidden="true" />
        <div className="absolute -bottom-20 -right-14 h-56 w-56 rounded-full bg-orange-100/55" aria-hidden="true" />
        <div className="absolute bottom-2 left-0 h-28 w-72 rounded-[100%] border-t border-orange-200/50" aria-hidden="true" />
        <span className="absolute left-10 top-28 text-2xl font-black text-orange-300/80" aria-hidden="true">+</span>
        <span className="absolute right-10 top-16 text-2xl font-black text-orange-300/80" aria-hidden="true">+</span>

        <div className="relative mb-8 text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-orange-100 bg-white/90 px-5 py-2.5 font-['Manrope'] text-[10px] font-black uppercase tracking-[0.24em] text-orange-500 shadow-[0_12px_35px_rgba(249,115,22,0.12)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Our number game - Starts from January 2015 to May 2026
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          </span>
        </div>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group relative overflow-hidden rounded-[24px] border border-orange-100 bg-white p-5 shadow-[0_18px_50px_rgba(249,115,22,0.12)] transition duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_26px_70px_rgba(249,115,22,0.18)]"
            >
              <div
                className="absolute -bottom-9 -right-9 h-24 w-24 rounded-full border border-orange-200/70"
                aria-hidden="true"
              />
              <div
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-50/80 blur-xl transition duration-300 group-hover:scale-125"
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 text-white shadow-[0_14px_34px_rgba(249,115,22,0.26)] transition duration-300 group-hover:scale-105">
                  {metric.icon}
                </div>
                <div className="min-w-0 text-left">
                  <div className="font-['Outfit'] text-[32px] font-semibold leading-none tracking-[-0.035em] text-gray-950">
                    {metric.value}
                  </div>
                  <p className="mt-2 max-w-[120px] text-[12px] font-bold leading-5 text-gray-600">{metric.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyExpertsSection;
