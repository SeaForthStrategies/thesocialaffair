"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
}

// Only show a few floating items on mobile, all on desktop
const floatingItems = [
  { emoji: "🍷", top: "14%",  left: "7%",   size: "text-3xl", delay: 0,    dur: 6,   y: -16, mobile: false },
  { emoji: "🍸", top: "22%",  right: "9%",  size: "text-2xl", delay: 1,    dur: 7,   y: 14,  mobile: true  },
  { emoji: "♪",  top: "60%",  left: "5%",   size: "text-4xl", delay: 1.5,  dur: 8,   y: -12, mobile: false },
  { emoji: "♫",  top: "70%",  right: "6%",  size: "text-3xl", delay: 0.5,  dur: 5.5, y: 16,  mobile: false },
  { emoji: "🍹", top: "40%",  left: "2%",   size: "text-2xl", delay: 2.2,  dur: 6.5, y: -18, mobile: false },
  { emoji: "🥂", top: "28%",  right: "3%",  size: "text-3xl", delay: 1.8,  dur: 5,   y: 10,  mobile: true  },
  { emoji: "🎸", top: "78%",  left: "12%",  size: "text-2xl", delay: 0.7,  dur: 9,   y: -14, mobile: false },
  { emoji: "🎤", top: "16%",  right: "22%", size: "text-2xl", delay: 2,    dur: 5.5, y: 12,  mobile: false },
  { emoji: "🍾", top: "84%",  right: "17%", size: "text-2xl", delay: 3,    dur: 6,   y: -10, mobile: false },
  { emoji: "♩",  top: "46%",  right: "11%", size: "text-xl",  delay: 2.5,  dur: 7.5, y: -8,  mobile: false },
];

export default function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundImage = "/images/dinner-setting.jpg",
}: HeroProps) {
  return (
    <section className="relative min-h-[92vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background — slow zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      {/* Layered overlays — strong enough for text readability */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/45" />
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/25 via-transparent to-transparent" />

      {/* Floating icons — hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {floatingItems.map((item, i) => (
          <motion.span
            key={i}
            className={`absolute ${item.size} ${item.mobile ? "block" : "hidden md:block"}`}
            style={{
              top: item.top,
              left: "left" in item ? item.left : undefined,
              right: "right" in item ? item.right : undefined,
              opacity: 0.15,
              filter: "drop-shadow(0 0 6px rgba(196,30,58,0.5))",
            }}
            animate={{ y: [0, item.y, 0], rotate: [0, item.y > 0 ? 5 : -5, 0] }}
            transition={{ duration: item.dur, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {item.emoji}
          </motion.span>
        ))}
        {/* Pulsing rings — desktop only */}
        <motion.div
          className="hidden md:block absolute top-[20%] left-[15%] w-40 h-40 rounded-full border border-white/8"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.04, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden md:block absolute bottom-[18%] right-[18%] w-24 h-24 rounded-full border border-burgundy/15"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 6, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 py-16 md:py-24 text-center">

        {/* Location badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-burgundy shrink-0" />
          <span className="text-xs tracking-widest uppercase text-white/90 font-medium">
            East Troy, Wisconsin
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-playfair font-light text-white leading-tight mb-4"
          style={{
            textShadow: "0 2px 24px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.5)",
            fontSize: "clamp(2.6rem, 8vw, 5.5rem)",
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {headline}
        </motion.h1>

        {/* Divider line */}
        <motion.div
          className="flex items-center justify-center gap-3 my-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-px w-10 bg-burgundy/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-burgundy" />
          <div className="h-px w-10 bg-burgundy/80" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg text-white/90 max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {subheadline}
        </motion.p>

        {/* CTAs — stack on mobile */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="flex items-center justify-center rounded-full bg-burgundy text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-burgundy-700 active:scale-95 transition-all shadow-xl shadow-burgundy/40"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="flex items-center justify-center rounded-full border-2 border-white/60 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-white/15 active:scale-95 transition-all backdrop-blur-sm"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>

        {/* Mobile quick-call nudge */}
        <motion.a
          href="tel:2623702994"
          className="inline-flex items-center gap-2 mt-8 text-white/60 text-xs tracking-wider sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (262) 370-2994
        </motion.a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
