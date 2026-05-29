import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

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
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    isPausedRef.current = true;

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    sliderRef.current?.scrollBy({
      left: direction === 'left' ? -360 : 360,
      behavior: 'smooth',
    });

    resumeTimerRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, 1400);
  };

  useEffect(() => {
    const autoSlide = () => {
      const slider = sliderRef.current;

      if (slider && !isPausedRef.current && !isDraggingRef.current) {
        const halfwayPoint = slider.scrollWidth / 2;
        slider.scrollLeft += 0.7;

        if (slider.scrollLeft >= halfwayPoint) {
          slider.scrollLeft = 0;
        }
      }

      animationFrameRef.current = window.requestAnimationFrame(autoSlide);
    };

    animationFrameRef.current = window.requestAnimationFrame(autoSlide);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    isDraggingRef.current = true;
    isPausedRef.current = true;
    dragStartXRef.current = event.clientX;
    scrollStartRef.current = slider.scrollLeft;
    slider.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;

    if (!slider || !isDraggingRef.current) {
      return;
    }

    const dragDistance = event.clientX - dragStartXRef.current;
    slider.scrollLeft = scrollStartRef.current - dragDistance;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;

    if (slider?.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }

    isDraggingRef.current = false;
    window.setTimeout(() => {
      isPausedRef.current = false;
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden bg-white py-18 lg:py-24">
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
                onClick={() => handleScroll('left')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                aria-label="Scroll testimonials left"
              >
                <ChevronLeft size={20} strokeWidth={2.4} />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('right')}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                aria-label="Scroll testimonials right"
              >
                <ChevronRight size={20} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-[1240px]">
          <div
            ref={sliderRef}
            className="cursor-grab overflow-x-auto scroll-smooth px-4 active:cursor-grabbing sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div className="flex w-max gap-5 sm:gap-7">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className="group relative flex min-h-[330px] w-[300px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-[30px] border border-orange-100 bg-white px-7 py-8 transition duration-300 hover:-translate-y-1 hover:border-orange-300 sm:w-[360px]"
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
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          <span className="h-2 w-2 rounded-full bg-orange-200" />
          <span className="h-2 w-2 rounded-full bg-orange-200" />
          <span className="h-2 w-2 rounded-full bg-orange-200" />
          <span className="h-2 w-2 rounded-full bg-orange-200" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
