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

export default function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  backgroundImage = "/images/dinner-setting.jpg",
}: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background — slow zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-[#110300]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#110300]/90 via-[#2A0800]/25 to-[#110300]/45" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(17,3,0,0.55) 100%)" }}
      />

      {/* Ambient glow — top-left warm amber */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "8%", left: "5%",
          width: 420, height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,169,106,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 18, -8, 0], y: [0, -14, 10, 0], opacity: [0.7, 1, 0.6, 0.7] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ambient glow — bottom-right deep rose */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "12%", right: "8%",
          width: 380, height: 380,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,5,5,0.22) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ x: [0, -20, 10, 0], y: [0, 12, -16, 0], opacity: [0.6, 0.9, 0.5, 0.6] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Ambient glow — center-top soft rose (desktop only) */}
      <motion.div
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: "15%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 260,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(180,60,40,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ opacity: [0.5, 0.85, 0.5], scaleX: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Ambient glow — bottom-left warm */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "20%", left: "10%",
          width: 300, height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,169,106,0.12) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
        animate={{ x: [0, 14, -6, 0], y: [0, -10, 8, 0], opacity: [0.5, 0.8, 0.45, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-10 py-24 text-center">

        {/* Location badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 mb-10 px-5 py-2 rounded-full bg-white/6 backdrop-blur-sm border border-[#D4A96A]/25"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="w-1 h-1 rounded-full bg-[#D4A96A]" />
          <span className="text-[10px] tracking-[0.28em] uppercase text-[#D4A96A]/85 font-medium">
            East Troy, Wisconsin
          </span>
          <div className="w-1 h-1 rounded-full bg-[#D4A96A]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-playfair font-light text-white leading-[1.05] mb-7"
          style={{
            textShadow: "0 2px 50px rgba(0,0,0,0.85)",
            fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
            letterSpacing: "-0.015em",
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {headline}
        </motion.h1>

        {/* Gold ornament */}
        <motion.div
          className="flex items-center justify-center gap-5 my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.38 }}
        >
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#D4A96A]/60" />
          <span className="text-[#D4A96A]/75 text-base">✦</span>
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#D4A96A]/60" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg text-white/68 max-w-md mx-auto mb-14 leading-relaxed font-light tracking-wide"
          style={{ textShadow: "0 1px 14px rgba(0,0,0,0.85)" }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38 }}
        >
          {subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="flex items-center justify-center rounded-full bg-[#B8935A] text-white px-10 py-4 text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#D4A96A] active:scale-95 transition-all shadow-xl shadow-black/35"
            >
              {primaryCta.label}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="flex items-center justify-center rounded-full border border-white/25 text-white/85 px-10 py-4 text-xs font-semibold tracking-[0.22em] uppercase hover:bg-white/10 hover:border-white/45 active:scale-95 transition-all backdrop-blur-sm"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>

        {/* Mobile quick-call */}
        <motion.a
          href="tel:2623702994"
          className="inline-flex items-center gap-2 mt-12 text-white/38 text-xs tracking-wider sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (262) 370-2994
        </motion.a>
      </div>

      {/* Bottom fade to warm ivory */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
    </section>
  );
}
