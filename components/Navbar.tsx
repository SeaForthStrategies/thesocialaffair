"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/venue",    label: "Venue"    },
  { href: "/events",   label: "Events"   },
  { href: "/catering", label: "Catering" },
  { href: "/about",    label: "About"    },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF7F2]/97 backdrop-blur-lg border-b border-[#D4A96A]/15 shadow-sm shadow-[#2C1A0E]/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10 py-3.5 md:py-4" aria-label="Main">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="The Social Affair Events Venue"
            width={160}
            height={54}
            className="h-10 sm:h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-xs tracking-[0.18em] uppercase font-medium transition-colors pb-1 group ${
                    isActive ? "text-[#7D0A1E]" : "text-[#2C1A0E]/55 hover:text-[#2C1A0E]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#B8935A] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/contact"
            className={`relative text-xs tracking-[0.18em] uppercase font-medium transition-colors pb-1 group ${
              pathname === "/contact" ? "text-[#7D0A1E]" : "text-[#2C1A0E]/55 hover:text-[#2C1A0E]"
            }`}
          >
            Contact
            <span
              className={`absolute -bottom-0.5 left-0 h-px bg-[#B8935A] transition-all duration-300 ${
                pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#B8935A] text-white px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#D4A96A] transition-colors shadow-md shadow-[#B8935A]/25"
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile: phone icon + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          {/* Quick-call button */}
          <a
            href="tel:2623702994"
            aria-label="Call The Social Affair"
            className="p-2.5 text-[#B8935A] hover:bg-[#B8935A]/10 rounded-full transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 text-[#2C1A0E]/60 hover:text-[#7D0A1E] hover:bg-[#B8935A]/10 rounded-full transition-colors"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-[#D4A96A]/15 bg-[#FAF7F2]"
          >
            <ul className="flex flex-col px-5 py-4 gap-0">
              {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center py-4 text-sm tracking-[0.18em] uppercase font-medium transition-colors border-b border-[#D4A96A]/12 min-h-[52px] ${
                        isActive ? "text-[#7D0A1E]" : "text-[#2C1A0E]/65 hover:text-[#7D0A1E]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4 pb-2 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-full bg-[#B8935A] text-white px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#D4A96A] transition-colors"
                >
                  Book a Tour
                </Link>
                <a
                  href="sms:2623702994"
                  className="flex items-center justify-center gap-2 rounded-full border border-[#2C1A0E]/15 text-[#2C1A0E]/60 px-6 py-3 text-xs font-medium tracking-[0.18em] uppercase hover:bg-[#F2EAE0] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Text Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
