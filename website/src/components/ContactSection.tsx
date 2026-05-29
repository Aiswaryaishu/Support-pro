import { Mail, MapPin, MessageSquareText, Phone, Send, User } from 'lucide-react';

const ContactSection = () => (
  <section className="relative overflow-hidden bg-white py-18 lg:py-24">
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(circle at 78% 42%, rgba(255,237,213,0.38) 0%, rgba(255,247,237,0.26) 24%, transparent 50%), linear-gradient(180deg, #ffffff 0%, #fffdfb 100%)',
      }}
      aria-hidden="true"
    />
    <svg
      className="absolute inset-y-0 left-[26%] hidden h-full w-[92%] -translate-x-1/2 lg:block"
      viewBox="0 0 960 540"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="contactMapLand" x1="120" y1="80" x2="830" y2="430" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fed7aa" stopOpacity="0.30" />
          <stop offset="1" stopColor="#f97316" stopOpacity="0.10" />
        </linearGradient>
        <filter id="contactMapGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <g opacity="0.52">
        <path
          d="M108 178L140 148L184 132L230 142L254 166L296 164L326 188L318 220L286 232L254 218L224 244L182 234L154 252L128 230L88 222L76 196L108 178Z"
          fill="url(#contactMapLand)"
          stroke="rgba(249,115,22,0.12)"
        />
        <path
          d="M278 258L316 286L332 330L314 382L286 424L250 406L262 360L240 326L252 286L278 258Z"
          fill="url(#contactMapLand)"
          stroke="rgba(249,115,22,0.11)"
        />
        <path
          d="M430 162L466 134L522 144L556 166L534 196L480 198L434 188L430 162Z"
          fill="url(#contactMapLand)"
          stroke="rgba(249,115,22,0.11)"
        />
        <path
          d="M500 218L548 210L586 242L608 300L588 362L542 384L506 346L486 288L500 218Z"
          fill="url(#contactMapLand)"
          stroke="rgba(249,115,22,0.11)"
        />
        <path
          d="M572 144L660 116L760 134L840 178L870 226L840 270L760 264L704 300L650 270L610 232L548 206L572 144Z"
          fill="url(#contactMapLand)"
          stroke="rgba(249,115,22,0.12)"
        />
        <path
          d="M762 344L816 326L860 352L846 394L796 400L760 376L762 344Z"
          fill="url(#contactMapLand)"
          stroke="rgba(249,115,22,0.11)"
        />
      </g>

      <g stroke="rgba(249,115,22,0.22)" strokeWidth="1.2" strokeLinecap="round" opacity="0.48">
        <path d="M176 188C280 112 410 100 494 170" />
        <path d="M494 170C590 92 718 102 804 210" />
        <path d="M494 170C438 230 392 296 304 342" />
        <path d="M494 170C548 236 620 278 760 364" />
        <path d="M304 342C410 296 536 300 760 364" />
        <path d="M176 188C264 260 346 288 494 170" />
      </g>

      <g filter="url(#contactMapGlow)" opacity="0.12">
        <circle cx="176" cy="188" r="12" fill="#f97316" />
        <circle cx="494" cy="170" r="12" fill="#f97316" />
        <circle cx="804" cy="210" r="12" fill="#f97316" />
        <circle cx="304" cy="342" r="12" fill="#f97316" />
        <circle cx="760" cy="364" r="12" fill="#f97316" />
      </g>

      {[
        [176, 188],
        [494, 170],
        [804, 210],
        [304, 342],
        [760, 364],
        [612, 250],
        [416, 236],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="8" fill="white" stroke="rgba(249,115,22,0.28)" strokeWidth="1.4" />
          <circle cx={cx} cy={cy} r="3" fill="#f97316" opacity="0.38" />
        </g>
      ))}
    </svg>
    <div
      className="absolute inset-0 bg-white/72 backdrop-blur-[0.2px]"
      aria-hidden="true"
    />
    <div className="relative mx-auto grid max-w-[1240px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.68fr_1.32fr] lg:px-8 xl:px-0">
      <div>
        <span className="type-eyebrow text-[10px] text-orange-500">
          Contact Us
        </span>
        <h2
          className="type-heading mt-4 max-w-[430px] text-[34px] text-gray-950 sm:text-[48px]"
        >
          Have questions?
          <br />
          Get in touch!
        </h2>
        <p className="type-body mt-6 max-w-[440px] text-[14px] text-gray-600">
          Talk to our team about outsourced technical support, server administration, cloud
          management, or emergency assistance.
        </p>

        <div className="mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <MapPin size={17} strokeWidth={2} />
            </span>
            <span className="type-card-body flex-1 text-[14px] text-gray-600">
              1020 Milwaukee Ave, #245, Deerfield, IL-60015, USA
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <Phone size={17} strokeWidth={2} />
            </span>
            <a href="tel:18476076123" className="type-button text-[15px] text-gray-950">
              1-(847)-607-6123
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <Mail size={17} strokeWidth={2} />
            </span>
            <a href="mailto:sales@supportpro.com" className="type-card-body text-[14px] text-gray-600">
              sales@supportpro.com
            </a>
          </div>
        </div>
      </div>

      <form className="relative overflow-hidden rounded-[32px] border border-orange-100 bg-white/90 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-7 lg:ml-auto lg:mr-[-28px] lg:w-full lg:max-w-[760px] lg:p-8 xl:mr-[-48px]" aria-label="Contact SupportPRO">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" aria-hidden="true" />
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-50 blur-2xl" aria-hidden="true" />
        <div className="relative mb-7 flex items-center justify-between gap-4">
          <div>
            <span className="type-eyebrow text-[9px] text-orange-500">Start a conversation</span>
            <h3 className="type-card-title mt-2 text-[22px] text-gray-950">Tell us what you need</h3>
          </div>
          <span className="hidden rounded-full border border-orange-100 bg-orange-50 px-3 py-2 text-orange-500 sm:inline-flex">
            <Send size={16} />
          </span>
        </div>

        <div className="relative grid gap-5 sm:grid-cols-2">
          <label className="group flex min-h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 transition focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100">
            <User size={17} className="text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="type-card-body w-full bg-transparent text-[13px] text-gray-900 outline-none placeholder:text-gray-400"
              aria-label="Name"
            />
          </label>
          <label className="group flex min-h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 transition focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100">
            <Mail size={17} className="text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="type-card-body w-full bg-transparent text-[13px] text-gray-900 outline-none placeholder:text-gray-400"
              aria-label="Email Address"
            />
          </label>
          <label className="group flex min-h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 transition focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100">
            <Phone size={17} className="text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="type-card-body w-full bg-transparent text-[13px] text-gray-900 outline-none placeholder:text-gray-400"
              aria-label="Phone"
            />
          </label>
          <label className="group flex min-h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 transition focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100">
            <MessageSquareText size={17} className="text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="type-card-body w-full bg-transparent text-[13px] text-gray-900 outline-none placeholder:text-gray-400"
              aria-label="Subject"
            />
          </label>
        </div>

        <label className="group relative mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 transition focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100">
          <MessageSquareText size={17} className="mt-1 text-gray-400 group-focus-within:text-orange-500" />
          <textarea
            name="message"
            placeholder="How can we help you? Feel free to get in touch!"
            className="type-card-body min-h-28 w-full resize-none bg-transparent text-[13px] text-gray-900 outline-none placeholder:text-gray-400"
            aria-label="Message"
          />
        </label>

        <div className="relative mt-7 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="type-button inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-[13px] text-white shadow-[0_16px_38px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:from-orange-600 hover:to-orange-500 hover:shadow-[0_20px_48px_rgba(249,115,22,0.35)] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 sm:w-[210px]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/18">
              <Send size={15} />
            </span>
            Get In Touch
          </button>
          <label className="type-card-body flex items-center gap-3 text-[11px] text-gray-500 sm:justify-end">
            <input type="checkbox" className="h-4 w-4 flex-shrink-0 rounded border-gray-300 accent-orange-500" />
            I agree that my data is collected.
          </label>
        </div>
      </form>
    </div>
  </section>
);

export default ContactSection;
