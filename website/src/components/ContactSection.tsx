import { Mail, MapPin, MessageSquareText, Phone, Send, User } from 'lucide-react';

const ContactSection = () => (
  <section className="relative overflow-hidden bg-white py-18 lg:py-24">
    <div
      className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-orange-100/45 blur-3xl"
      aria-hidden="true"
    />
    <div
      className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl"
      aria-hidden="true"
    />

    <div className="relative mx-auto grid max-w-[1120px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 xl:px-0">
      <div>
        <span className="font-['Manrope'] text-[10px] font-black uppercase tracking-[0.26em] text-orange-500">
          Contact Us
        </span>
        <h2
          className="mt-4 max-w-[430px] text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-gray-950 sm:text-[48px]"
          style={{ fontFamily: '"Lucida Sans", "Lucida Grande", "Trebuchet MS", Arial, sans-serif' }}
        >
          Have questions?
          <br />
          Get in touch!
        </h2>
        <p className="mt-6 max-w-[440px] text-[14px] leading-7 text-gray-600">
          Talk to our team about outsourced technical support, server administration, cloud
          management, or emergency assistance.
        </p>

        <div className="mt-8 space-y-5">
          <div className="flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <MapPin size={17} strokeWidth={2} />
            </span>
            <span className="text-[14px] font-medium text-gray-600">
              1020 Milwaukee Ave, #245, Deerfield, IL-60015, USA
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <Phone size={17} strokeWidth={2} />
            </span>
            <a href="tel:18476076123" className="text-[15px] font-black text-gray-950">
              1-(847)-607-6123
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <Mail size={17} strokeWidth={2} />
            </span>
            <a href="mailto:sales@supportpro.com" className="text-[14px] font-medium text-gray-600">
              sales@supportpro.com
            </a>
          </div>
        </div>
      </div>

      <form className="grid gap-x-8 gap-y-8" aria-label="Contact SupportPRO">
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          <label className="group flex items-center gap-3 border-b border-gray-200 pb-3 transition focus-within:border-orange-400">
            <User size={17} className="text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent text-[13px] font-medium text-gray-900 outline-none placeholder:text-gray-400"
              aria-label="Name"
            />
          </label>
          <label className="group flex items-center gap-3 border-b border-gray-200 pb-3 transition focus-within:border-orange-400">
            <Mail size={17} className="text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-transparent text-[13px] font-medium text-gray-900 outline-none placeholder:text-gray-400"
              aria-label="Email Address"
            />
          </label>
          <label className="group flex items-center gap-3 border-b border-gray-200 pb-3 transition focus-within:border-orange-400">
            <Phone size={17} className="text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full bg-transparent text-[13px] font-medium text-gray-900 outline-none placeholder:text-gray-400"
              aria-label="Phone"
            />
          </label>
          <label className="group flex items-center gap-3 border-b border-gray-200 pb-3 transition focus-within:border-orange-400">
            <MessageSquareText size={17} className="text-gray-400 group-focus-within:text-orange-500" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-transparent text-[13px] font-medium text-gray-900 outline-none placeholder:text-gray-400"
              aria-label="Subject"
            />
          </label>
        </div>

        <label className="group flex items-start gap-3 border-b border-gray-200 pb-10 transition focus-within:border-orange-400">
          <MessageSquareText size={17} className="mt-1 text-gray-400 group-focus-within:text-orange-500" />
          <textarea
            name="message"
            placeholder="How can we help you? Feel free to get in touch!"
            className="min-h-24 w-full resize-none bg-transparent text-[13px] font-medium text-gray-900 outline-none placeholder:text-gray-400"
            aria-label="Message"
          />
        </label>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-[13px] font-black text-white shadow-[0_14px_34px_rgba(249,115,22,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(249,115,22,0.32)] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            <Send size={15} />
            Get In Touch
          </button>
          <label className="flex items-center gap-3 text-[11px] font-medium text-gray-500">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-orange-500" />
            I agree that my data is collected.
          </label>
        </div>
      </form>
    </div>
  </section>
);

export default ContactSection;
