import { useState, useRef } from 'react';
import {
  ArrowUpRight,
  Bolt,
  Cloud,
  Code2,
  Headphones,
  Server,
  ShieldCheck,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    title: 'Cloud Management',
    description: 'Scalable, secure, and cost-effective cloud solutions to drive your business forward.',
    icon: <Cloud size={26} strokeWidth={1.8} />,
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Full Time or Part Time Dedicated Tech',
    description: 'Skilled professionals dedicated to your success, on your terms.',
    icon: <Users size={26} strokeWidth={1.8} />,
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '24x7 Server Support',
    description: 'Round-the-clock monitoring and support to ensure zero downtime and peak performance.',
    icon: <Headphones size={26} strokeWidth={1.8} />,
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Outsourced Hosting Support',
    description: 'Reliable hosting support that keeps your websites and applications running smoothly.',
    icon: <Server size={26} strokeWidth={1.8} />,
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Emergency Server / Cloud Support',
    description: 'Rapid response for critical issues when you need it the most.',
    icon: <Bolt size={26} strokeWidth={1.8} />,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Application Development',
    description: 'Custom applications built to streamline operations and accelerate growth.',
    icon: <Code2 size={26} strokeWidth={1.8} />,
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
  },
];

const metrics = [
  {
    title: '24/7 Support',
    description: 'We are here anytime you need us.',
    icon: <ShieldCheck size={30} strokeWidth={1.8} />,
  },
  {
    title: 'Quick Response',
    description: 'Average response time under 15 min.',
    icon: <Zap size={30} strokeWidth={1.8} />,
  },
  {
    title: '99.9% Uptime',
    description: 'Maximum reliability you can count on.',
    icon: <Bolt size={30} strokeWidth={1.8} />,
  },
  {
    title: 'Trusted by 1000+ Clients',
    description: 'Businesses worldwide trust our expertise.',
    icon: <Users size={30} strokeWidth={1.8} />,
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 text-white lg:py-24"
      style={{
        background:
          'radial-gradient(circle at 82% 0%, rgba(255,255,255,0.05) 0%, transparent 30%), radial-gradient(circle at 16% 100%, rgba(255,255,255,0.04) 0%, transparent 34%), linear-gradient(135deg, #050505 0%, #080808 42%, #0D0D0D 76%, #020202 100%)',
      }}
    >
      <style>{`
        /* Swiper slide scale and opacity styling for center prominence */
        .services-swiper .swiper-slide {
          opacity: 0.55;
          transform: scale(0.92);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          height: auto;
          display: flex;
        }
        .services-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1.02);
        }
        .services-swiper .swiper-slide > * {
          width: 100%;
        }
        .services-swiper {
          width: 100%;
          overflow: visible;
          padding: 24px 0 32px 0 !important;
          margin-top: -12px !important;
        }
        .services-swiper .swiper-wrapper {
          align-items: stretch;
        }
        /* Custom Pagination Bullets styling */
        .services-swiper-pagination .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          margin: 0 5px !important;
        }
        .services-swiper-pagination .swiper-pagination-bullet-active {
          background: #ff7a1a !important;
          width: 28px;
        }
        /* Repositioned Arrow Buttons */
        .services-header {
          position: relative;
        }
        .services-arrows {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 12px;
          z-index: 20;
        }
        .services-arrow {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(255, 122, 26, 0.55);
          background: rgba(255, 122, 26, 0.08);
          color: #ff7a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .services-arrow:hover {
          background: #ff7a1a;
          color: #ffffff;
          box-shadow: 0 0 24px rgba(255, 122, 26, 0.35);
        }
        .services-arrow.swiper-button-disabled {
          opacity: 0.35;
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .services-arrows {
            position: static;
            transform: none;
            justify-content: center;
            margin-top: 24px;
          }
        }
        /* Fade mask overlay wrapper */
        .services-slider-wrapper {
          position: relative;
          overflow: hidden;
        }
        .services-slider-wrapper::before,
        .services-slider-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          width: 120px;
          height: 100%;
          z-index: 5;
          pointer-events: none;
        }
        .services-slider-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #050505 0%, transparent 100%);
        }
        .services-slider-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #050505 0%, transparent 100%);
        }
        @media (max-width: 768px) {
          .services-slider-wrapper::before,
          .services-slider-wrapper::after {
            width: 40px;
          }
        }
      `}</style>

      <div
        className="absolute right-[-12%] top-[-22%] h-[720px] w-[720px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 38%, transparent 68%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-22%] left-[-14%] h-[700px] w-[700px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 42%, transparent 72%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute left-[26%] top-[18%] h-[420px] w-[620px] -rotate-12 rounded-full blur-3xl"
        style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(249,115,22,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.07) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse at center, black 0%, black 48%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, black 48%, transparent 82%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(249,115,22,0.14) 0px, rgba(249,115,22,0.14) 1px, transparent 1px, transparent 18px)',
          maskImage: 'linear-gradient(90deg, transparent 0%, black 16%, black 84%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 16%, black 84%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-55"
        viewBox="0 0 1440 780"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-80 160 C220 80 380 230 650 140 C930 48 1110 145 1520 72"
          fill="none"
          stroke="rgba(249,115,22,0.16)"
          strokeWidth="1.2"
        />
        <path
          d="M120 258 C330 208 520 310 750 248 C940 196 1080 236 1290 188"
          fill="none"
          stroke="rgba(251,146,60,0.12)"
          strokeDasharray="10 16"
          strokeWidth="1"
        />
        <path
          d="M-120 590 C210 470 430 650 740 520 C990 415 1160 510 1540 430"
          fill="none"
          stroke="rgba(234,88,12,0.12)"
          strokeWidth="1"
        />
        <path
          d="M108 672 H356 M108 672 V604 M1168 116 H1326 M1326 116 V184"
          fill="none"
          stroke="rgba(249,115,22,0.18)"
          strokeLinecap="round"
          strokeWidth="1.1"
        />
        <path
          d="M1124 620 H1288 M1288 620 V566 M194 116 H326 M194 116 V164"
          fill="none"
          stroke="rgba(251,146,60,0.10)"
          strokeLinecap="round"
          strokeWidth="1"
        />
      </svg>
      <div
        className="absolute left-[8%] top-[34%] h-px w-52 bg-gradient-to-r from-orange-500/0 via-orange-400/20 to-orange-500/0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[24%] right-[9%] h-px w-64 bg-gradient-to-r from-orange-500/0 via-orange-400/18 to-orange-500/0"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/22 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-400/16 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header wrapper for absolute arrows placement */}
        <div className="services-header relative mb-10 md:mb-14">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500" />
              <span className="type-eyebrow text-[11px] text-orange-400 sm:text-[12px]">
                What We Do
              </span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500" />
            </div>
            <h2 className="type-heading text-[32px] text-white sm:text-[40px]">
              Our Services
            </h2>
            <p className="type-body mx-auto mt-5 max-w-xl text-[15px] text-slate-300">
              Comprehensive IT solutions tailored to keep your business secure, optimized, and always running.
            </p>
          </div>

          {/* Repositioned Arrow Buttons */}
          <div className="services-arrows">
            <button
              type="button"
              className="services-prev services-arrow"
              aria-label="Previous service"
            >
              <ChevronLeft size={18} strokeWidth={2.4} />
            </button>
            <button
              type="button"
              className="services-next services-arrow"
              aria-label="Next service"
            >
              <ChevronRight size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* Carousel container wrapper */}
        <div className="relative mt-10 md:mt-14 services-slider-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(Math.floor((swiper.realIndex % 6) / 2));
            }}
            centeredSlides={true}
            grabCursor={true}
            watchSlidesProgress={true}
            loop={true}
            rewind={false}
            speed={700}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.services-prev',
              nextEl: '.services-next',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.08,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 1.4,
                spaceBetween: 22,
              },
              768: {
                slidesPerView: 2.1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1440: {
                slidesPerView: 3.2,
                spaceBetween: 32,
              },
            }}
            className="services-swiper"
          >
            {[...services, ...services].map((service, index) => (
              <SwiperSlide key={`${service.title}-${index}`}>
                <article
                  className="group relative min-h-[330px] w-full overflow-hidden rounded-[30px] border border-orange-400/25 bg-zinc-950/80 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.48)] transition duration-300 hover:border-orange-400/70 hover:shadow-[0_34px_100px_rgba(249,115,22,0.20)] focus-within:border-orange-400/70"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 saturate-[1.14] contrast-[1.06] brightness-[0.78] transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                    style={{ backgroundImage: `url(${service.image})` }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(5,5,5,0.18) 0%, rgba(8,8,8,0.30) 46%, rgba(5,5,5,0.90) 100%)',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" aria-hidden="true" />
                  <div
                    className="absolute inset-y-0 left-0 w-[76%] opacity-0 transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100 md:opacity-0"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(8,8,8,0.98) 0%, rgba(17,10,5,0.94) 60%, rgba(17,10,5,0.46) 88%, transparent 100%)',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 rounded-[30px] ring-1 ring-inset ring-orange-300/20" aria-hidden="true" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-8 bottom-0 h-1 rounded-t-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden="true" />

                  <div className="absolute inset-x-7 bottom-7 max-w-[310px]">
                    {/* Default: icon + title */}
                    <div className="hidden rounded-3xl border border-orange-400/25 bg-black/68 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.38)] backdrop-blur-md transition duration-300 md:block md:group-hover:-translate-y-3 md:group-hover:opacity-0 md:group-focus-within:-translate-y-3 md:group-focus-within:opacity-0">
                      <h3 className="type-card-title text-[21px] text-white">
                        {service.title}
                      </h3>
                      <div className="mt-3 h-1 w-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
                    </div>

                    {/* Hover: description replaces title */}
                    <div className="mt-0 rounded-2xl border border-orange-400/25 bg-black/78 p-5 opacity-100 shadow-[0_18px_50px_rgba(0,0,0,0.42)] backdrop-blur-lg transition duration-300 md:absolute md:inset-x-0 md:bottom-0 md:translate-y-5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
                      <h3 className="type-eyebrow mb-3 text-[12px] text-orange-300">
                        {service.title}
                      </h3>
                      <p className="type-card-body text-[14px] text-slate-200">
                        {service.description}
                      </p>
                      <a
                        href="/request-for-quote"
                        aria-label={`Learn more about ${service.title}`}
                        className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-400/35 bg-orange-500/12 text-orange-300 shadow-[0_10px_24px_rgba(249,115,22,0.12)] transition hover:bg-orange-500 hover:text-white group-hover:border-orange-300 group-hover:shadow-[0_14px_34px_rgba(249,115,22,0.28)]"
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom connected pagination dots container centered below */}
        <div className="services-swiper-pagination mt-8 flex justify-center items-center gap-2">
          <span 
            onClick={() => swiperRef.current?.slideToLoop(0)}
            className={`swiper-pagination-bullet ${activeIndex === 0 ? 'swiper-pagination-bullet-active' : ''}`}
            role="button"
            aria-label="Go to service slide 1"
          />
          <span 
            onClick={() => swiperRef.current?.slideToLoop(2)}
            className={`swiper-pagination-bullet ${activeIndex === 1 ? 'swiper-pagination-bullet-active' : ''}`}
            role="button"
            aria-label="Go to service slide 3"
          />
          <span 
            onClick={() => swiperRef.current?.slideToLoop(4)}
            className={`swiper-pagination-bullet ${activeIndex === 2 ? 'swiper-pagination-bullet-active' : ''}`}
            role="button"
            aria-label="Go to service slide 5"
          />
        </div>

        {/* Metrics Grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 rounded-[28px] border border-orange-400/20 bg-black/45 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:gap-4 sm:p-5 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              className={`group relative overflow-hidden rounded-2xl border border-orange-400/15 bg-white/[0.035] p-4 transition hover:border-orange-400/35 hover:bg-orange-500/10 ${
                index !== metrics.length - 1 ? 'lg:border-r lg:border-orange-400/15' : ''
              }`}
            >
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/20" aria-hidden="true" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-300/35 bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-[0_12px_28px_rgba(249,115,22,0.26)] sm:h-14 sm:w-14">
                {metric.icon}
              </div>
              <div className="relative mt-4">
                <h3 className="type-card-title text-[13px] text-white sm:text-base">{metric.title}</h3>
                <p className="type-card-body mt-2 text-[11px] text-slate-400 sm:text-[13px]">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
