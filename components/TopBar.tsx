export default function TopBar() {
  return (
    <div className="w-full bg-charcoal text-ivory py-2 px-4 md:px-6 text-[11px] tracking-widest">
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-3">

        {/* Address — hide on mobile */}
        <p className="hidden sm:block uppercase font-medium text-ivory/55 whitespace-nowrap">
          2919 Main Street · East Troy, WI 53120
        </p>

        {/* Mobile: show venue name */}
        <p className="sm:hidden uppercase font-medium text-ivory/55">
          The Social Affair · East Troy, WI
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-6 ml-auto sm:ml-0">
          {/* Call — always visible, prominent on mobile */}
          <a
            href="tel:2623702994"
            className="flex items-center gap-1.5 text-white font-semibold sm:text-ivory/70 sm:font-medium sm:hover:text-white transition-colors uppercase"
          >
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">(262) 370-2994</span>
            <span className="sm:hidden">Call Now</span>
          </a>

          {/* Text — hidden on mobile */}
          <a
            href="sms:2623702994"
            className="hidden sm:flex items-center gap-1.5 text-ivory/55 hover:text-white transition-colors uppercase font-medium"
          >
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Text Us
          </a>

          {/* Email — hidden on mobile */}
          <a
            href="mailto:toothpicks_catering@yahoo.com"
            className="hidden sm:flex items-center gap-1.5 text-ivory/55 hover:text-white transition-colors uppercase font-medium"
          >
            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
