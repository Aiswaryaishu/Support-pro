import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote:
      'SupportPRO has done an excellent job of providing first line support to our customers. Their team goes the extra mile and even has walked our customers through importing data into a MySQL database.',
    name: 'Toby Wolf',
    role: 'Customer',
  },
  {
    quote:
      'We use SupportPRO for all of our Systems Administration for 11 servers, and they handle all of our tickets as well. We have had ZERO problems with them, and I highly recommend them to anyone.',
    name: 'Eric W',
    role: 'Customer',
  },
  {
    quote:
      'Our customer base is growing every day because of their great service and support. We always count on their knowledge and expertise. Whenever we need, they always give us immediate support 24/7 around the clock.',
    name: 'TYWITSolutions Group',
    role: 'Customer',
  },
  {
    quote:
      'The team is responsive, knowledgeable, and dependable whenever we need help with support operations.',
    name: 'SupportPRO Client',
    role: 'Business Owner',
  },
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const TestimonialsSection = () => {
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-18 lg:py-24">
      <style>{`
        .swiper-pagination-container .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: #FED7AA; /* bg-orange-200 */
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
          margin: 0 4px !important;
          display: inline-block;
        }
        .swiper-pagination-container .swiper-pagination-bullet-active {
          background-color: #F97316; /* bg-orange-500 */
        }
        /* Padding to prevent hovering scale/translation effects from clipping */
        .testimonials-swiper {
          padding: 12px 4px 20px 4px !important;
          margin-top: -12px !important;
        }
      `}</style>

      <div
        className="absolute inset-0 opacity-[0.58]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 18%, rgba(248,250,252,0.90) 0%, transparent 28%), radial-gradient(circle at 84% 24%, rgba(248,250,252,0.72) 0%, transparent 30%), radial-gradient(circle at 50% 78%, rgba(255,255,255,0.82) 0%, transparent 36%), linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)',
          backgroundSize: 'auto, auto, auto, 56px 56px, 56px 56px',
        }}
        aria-hidden="true"
      />
      <svg
        className="absolute inset-x-0 top-0 h-full w-full opacity-[0.42]"
        viewBox="0 0 1440 780"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-120 190 C170 86 342 218 614 130 C878 44 1018 122 1195 72 C1318 38 1395 38 1530 88"
          fill="none"
          stroke="rgba(249,115,22,0.09)"
          strokeWidth="1.25"
        />
        <path
          d="M-150 590 C158 490 406 625 716 522 C970 438 1138 514 1326 466 C1436 438 1500 448 1588 486"
          fill="none"
          stroke="rgba(15,23,42,0.045)"
          strokeWidth="1.15"
        />
        <path
          d="M-90 374 C230 292 414 414 704 342 C978 274 1152 344 1512 292"
          fill="none"
          stroke="rgba(249,115,22,0.07)"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-slate-100/70 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[-8%] bottom-6 h-96 w-96 rounded-full bg-slate-50/90 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-7 px-4 text-center sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="type-eyebrow text-[10px] text-orange-500">
              Customer Stories
            </span>
            <h2 className="type-heading mx-auto mt-4 max-w-3xl text-[34px] text-gray-950 sm:text-[44px] lg:text-[52px]">
              Trusted by teams who rely on fast support
            </h2>
            <p className="type-body mx-auto mt-5 max-w-2xl text-[15px] text-slate-600">
              Real feedback from businesses using SupportPRO for helpdesk, server administration,
              and always-on technical operations.
            </p>
          </div>

          <div className="flex w-full max-w-3xl items-center justify-center">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                aria-label="Scroll testimonials left"
              >
                <ChevronLeft size={20} strokeWidth={2.4} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                aria-label="Scroll testimonials right"
              >
                <ChevronRight size={20} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-[1240px] px-4 sm:px-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            grabCursor={true}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            pagination={{
              el: '.swiper-pagination-container',
              clickable: true,
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.name}-${index}`}>
                <article
                  className="group relative flex min-h-[330px] w-full flex-col justify-between overflow-hidden rounded-[30px] border border-orange-100 bg-white px-7 py-8 transition duration-300 hover:-translate-y-1 hover:border-orange-300"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 opacity-80" aria-hidden="true" />
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-50 transition duration-300 group-hover:scale-125" aria-hidden="true" />
                  <Quote size={42} className="absolute right-7 top-8 text-orange-100" strokeWidth={1.4} aria-hidden="true" />

                  <div>
                    <div className="relative mb-7 flex items-center gap-0.5" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={14}
                          className="fill-orange-400 text-orange-400"
                          strokeWidth={1.8}
                        />
                      ))}
                    </div>
                    <p className="type-card-body relative text-[14px] text-gray-600">{testimonial.quote}</p>
                  </div>

                  <div className="relative mt-9 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-[0_12px_26px_rgba(249,115,22,0.22)]">
                      <span className="type-button text-[12px]">{getInitials(testimonial.name)}</span>
                    </div>
                    <div>
                      <h3 className="type-card-title text-[15px] text-gray-950">{testimonial.name}</h3>
                      <p className="type-card-body mt-1 text-[11px] text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom connected pagination dots container */}
        <div className="swiper-pagination-container mt-12 flex justify-center gap-2" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
