import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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
    <section className="relative overflow-hidden bg-[#fffaf5] py-18 lg:py-24">
      <div
        className="absolute left-[-8%] top-12 h-72 w-72 rounded-full bg-orange-200/35 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-10%] bottom-10 h-80 w-80 rounded-full bg-amber-100/45 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="font-['Manrope'] text-[10px] font-black uppercase tracking-[0.26em] text-orange-500">
            Your Feedback
          </span>
          <h2
            className="mx-auto mt-4 max-w-2xl text-[34px] font-semibold leading-[1.12] tracking-[-0.04em] text-gray-950 sm:text-[44px] lg:text-[50px]"
            style={{ fontFamily: '"Lucida Sans", "Lucida Grande", "Trebuchet MS", Arial, sans-serif' }}
          >
            Testimonials from customers, who use our support
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1120px] justify-end gap-3 px-6">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft size={20} strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            aria-label="Scroll testimonials right"
          >
            <ChevronRight size={20} strokeWidth={2.4} />
          </button>
        </div>

        <div className="relative mt-8">
          <div
            ref={sliderRef}
            className="cursor-grab overflow-x-auto scroll-smooth px-6 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div className="flex w-max gap-10">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className="flex min-h-[310px] w-[300px] flex-shrink-0 flex-col justify-between rounded-[24px] border border-orange-100 bg-white px-8 py-10 shadow-[0_18px_60px_rgba(249,115,22,0.10)] sm:w-[330px]"
                >
                  <div>
                    <div className="mb-7 flex items-center gap-0.5" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={14}
                          className="fill-orange-400 text-orange-400"
                          strokeWidth={1.8}
                        />
                      ))}
                    </div>
                    <p className="text-[14px] leading-7 text-gray-600">{testimonial.quote}</p>
                  </div>

                  <div className="mt-9">
                    <h3 className="text-[15px] font-black text-gray-950">{testimonial.name}</h3>
                    <p className="mt-2 text-[11px] font-medium text-gray-500">{testimonial.role}</p>
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
