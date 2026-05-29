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

const supportTeamImages = [
  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=80',
];

const WhyExpertsSection = () => (
  <section className="relative overflow-hidden bg-white pt-18 pb-0 lg:pt-24 lg:pb-0">
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
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />
          </div>

          <div className="relative mt-4 rounded-[26px] border border-white/35 bg-black/55 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.34)] backdrop-blur-2xl sm:absolute sm:-bottom-8 sm:left-10 sm:right-10 sm:mt-0 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm">
                <Sparkles size={22} strokeWidth={2} />
              </span>
              <div>
                <h3 className="type-card-title text-xl text-white drop-shadow-sm">Our Expertise</h3>
              </div>
            </div>

            <div className="space-y-4">
              {expertise.slice(0, 3).map((item) => (
                <div key={item.label}>
                  <div className="type-button mb-2 flex items-center justify-between gap-3 text-xs text-white sm:text-sm">
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

        <div className="max-w-[620px] pt-6 sm:pt-12 lg:pt-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
            <ShieldCheck size={15} className="text-orange-500" strokeWidth={2.4} />
            <span className="type-eyebrow text-[11px] text-orange-600">
              Why Choose Us
            </span>
          </div>

          <h2
            className="type-heading max-w-[560px] text-[34px] text-gray-950 sm:text-[42px] lg:text-[48px]"
          >
            Why we call Ourselves the Experts
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />

          <p className="type-body mt-6 max-w-[590px] text-[15px] text-gray-600">
            SupportPRO from its inception 23 years ago has been learning and pioneering in the field
            of Outsourced Technical Support. We measure the matrices and key process indicators to
            ensure that the service remains consistent time after time.
          </p>

          <p className="type-body mt-4 max-w-[590px] text-[15px] text-gray-600">
            We regard every ticket with the utmost importance and ensure each ticket is addressed with
            100% assurance. Our pledge to quality and process has earned us an ISO 9001 2015 certification.
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex min-h-[52px] items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-[0_10px_26px_rgba(249,115,22,0.22)]">
                  <BadgeCheck size={17} strokeWidth={2.4} />
                </span>
                <span className="type-card-body text-[14px] text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="/request-for-quote"
            className="type-button mt-9 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-sm text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:shadow-orange-500/35"
          >
            Talk to an Expert
          </a>
        </div>
      </div>

      <div className="relative left-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden bg-[#f4f1eb] py-16 sm:py-20">
        <div
          className="absolute inset-0 opacity-[0.42]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[38px] border border-white/70 bg-[#ebe7de] p-4 shadow-[0_28px_90px_rgba(15,23,42,0.10)] sm:p-6 lg:p-8">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="type-eyebrow text-[10px] text-orange-500">
              Performance Snapshot
            </span>
            <h3 className="type-heading mt-2 text-[30px] text-slate-950 sm:text-[38px]">
              Scaling Reliable Support Operations
            </h3>
          </div>
          <span className="type-card-body w-fit rounded-full border border-white bg-white/80 px-4 py-2 text-[11px] text-slate-600 shadow-sm">
            January 2015 to May 2026
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr_1.15fr]">
          <div className="rounded-[26px] border border-white bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <div className="grid grid-cols-4 gap-3 rounded-[22px] bg-slate-50 p-3">
              {Array.from({ length: 12 }).map((_, index) => {
                const image = supportTeamImages[index % supportTeamImages.length];
                const showImage = [1, 5, 7, 10].includes(index);

                return (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-2xl border border-white bg-white shadow-sm"
                >
                  {showImage && (
                    <img
                      src={image}
                      alt="SupportPRO support specialist"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                );
              })}
            </div>
            <h4 className="type-card-title mt-6 text-[18px] text-slate-950">Meet the operations behind the numbers</h4>
            <p className="type-card-body mt-3 text-[13px] text-slate-600">
              Transparent technical support, server administration, NOC monitoring, and helpdesk operations delivered with consistent process control.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {expertise.slice(0, 3).map((item) => (
                <span key={item.label} className="type-button rounded-full border border-orange-100 bg-orange-50 px-3 py-2 text-[10px] text-orange-700">
                  {item.value}% {item.label.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-white bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <div className="type-display text-[56px] text-slate-950 sm:text-[64px]">965k+</div>
            <p className="type-card-body mt-2 text-[14px] text-slate-500">Helpdesk tickets handled</p>
            <div className="mt-12 space-y-3">
              {metrics.slice(1).map((metric) => (
                <div key={metric.label} className="flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="type-card-body text-[12px] text-slate-500">{metric.label}</span>
                  <span className="type-card-title text-[15px] text-slate-950">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[26px] border border-white bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
              <div className="pointer-events-none absolute right-5 top-5 grid grid-cols-4 gap-1.5 opacity-80" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={index}
                    className={[
                      'h-9 w-9 rounded-xl border',
                      [
                        'border-orange-200/70 bg-orange-100/75',
                        'border-amber-200/70 bg-amber-100/75',
                        'border-yellow-200/70 bg-yellow-50/80',
                        'border-orange-100/70 bg-orange-50/80',
                      ][index % 4],
                    ].join(' ')}
                  />
                ))}
              </div>
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-48 bg-gradient-to-l from-white/55 via-white/45 to-transparent" aria-hidden="true" />

              <span className="type-eyebrow relative text-[10px] text-orange-500">Support Standard</span>
              <h4 className="type-card-title relative mt-3 max-w-[240px] text-[21px] text-slate-950">Fast response, measured outcomes.</h4>
              <p className="type-card-body relative mt-4 max-w-[270px] text-[13px] text-slate-600">
                Average response in 15 minutes and average resolution in 1 hour, backed by ISO-certified support operations.
              </p>
              <p className="type-button relative mt-5 text-[12px] text-slate-950">SupportPRO Operations Team</p>
            </div>

            <div className="rounded-[22px] border border-white bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="type-card-body mr-auto text-[12px] text-slate-500">Operations covered</span>
                {['Helpdesk', 'Cloud', 'Servers', 'NOC'].map((item) => (
                  <span key={item} className="type-button rounded-full border border-slate-100 bg-slate-50 px-3 py-2 text-[11px] text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyExpertsSection;
