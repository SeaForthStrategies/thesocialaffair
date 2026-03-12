import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  venue: [
    { href: "/venue",    label: "The Venue"   },
    { href: "/events",   label: "Events"      },
    { href: "/catering", label: "Catering"    },
  ],
  services: [
    { href: "/catering", label: "Catering"        },
    { href: "/about",    label: "About"           },
    { href: "/contact",  label: "Contact"         },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1C0A00] text-[#FAF7F2]/75">
      {/* Thin top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4A96A]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10 py-14 md:py-16">
        {/* 2-col on mobile, 4-col on md */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 space-y-5">
            <Link href="/" className="block w-fit">
              <div className="bg-white rounded-lg px-3 py-2 inline-flex">
                <Image
                  src="/images/logo.jpg"
                  alt="The Social Affair Events Venue"
                  width={150}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-[#FAF7F2]/55 leading-relaxed max-w-xs">
              East Troy's rooftop events venue. Intimate by design, unforgettable by experience.
            </p>
            <div className="flex gap-5 pt-1">
              <a
                href="https://www.facebook.com/TheSocialAffairEastTroy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.18em] uppercase text-[#D4A96A]/50 hover:text-[#D4A96A] transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/socialaffairvenue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.18em] uppercase text-[#D4A96A]/50 hover:text-[#D4A96A] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[9px] tracking-[0.22em] uppercase text-[#D4A96A]/50 mb-5 font-semibold">Explore</p>
            <ul className="space-y-3">
              {footerLinks.venue.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#FAF7F2]/55 hover:text-[#FAF7F2] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="text-[9px] tracking-[0.22em] uppercase text-[#D4A96A]/50 mb-5 font-semibold">Visit</p>
            <address className="not-italic text-sm text-[#FAF7F2]/55 leading-relaxed space-y-1">
              <p>2919 Main Street</p>
              <p>East Troy, WI 53120</p>
              <a
                href="tel:2623702994"
                className="block mt-3 text-[#D4A96A]/80 hover:text-[#D4A96A] transition-colors font-medium"
              >
                (262) 370-2994
              </a>
              <a
                href="sms:2623702994"
                className="block text-[#FAF7F2]/40 hover:text-[#FAF7F2] transition-colors text-[9px] tracking-[0.2em] uppercase mt-1"
              >
                Text us
              </a>
              <a
                href="mailto:toothpicks_catering@yahoo.com"
                className="block text-[#FAF7F2]/35 hover:text-[#FAF7F2]/70 transition-colors text-xs mt-2 break-all"
              >
                toothpicks_catering@yahoo.com
              </a>
            </address>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-6 rounded-full border border-[#D4A96A]/25 text-[#D4A96A]/65 px-5 py-2 text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#D4A96A]/10 hover:border-[#D4A96A]/50 hover:text-[#D4A96A] transition-all"
            >
              Book a Tour
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#D4A96A]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#FAF7F2]/30 tracking-wide">
            © {new Date().getFullYear()} The Social Affair Events Venue. East Troy, WI.
          </p>
          <div className="flex gap-6">
            {footerLinks.services.map((link) => (
              <Link key={link.href} href={link.href} className="text-[9px] text-[#FAF7F2]/30 hover:text-[#FAF7F2]/60 tracking-[0.18em] uppercase transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
