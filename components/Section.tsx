"use client";

import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  centered?: boolean;
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  id,
  centered = true,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 px-5 sm:px-6 md:px-10 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.header
          className={`mb-14 md:mb-20 ${centered ? "text-center" : ""}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
        >
          {/* Eyebrow ornament */}
          <div className={`flex items-center gap-4 mb-6 ${centered ? "justify-center" : ""}`}>
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4A96A]/50" />
            <span className="text-[#D4A96A]/60 text-xs">✦</span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4A96A]/50" />
          </div>

          <h2 className="font-playfair text-3xl md:text-4xl font-light text-[#2C1A0E] tracking-tight leading-snug">
            {title}
          </h2>

          {subtitle && (
            <p className={`mt-3 text-[10px] text-[#2C1A0E]/50 tracking-[0.2em] uppercase ${centered ? "mx-auto" : ""} max-w-lg`}>
              {subtitle}
            </p>
          )}
        </motion.header>

        {children}
      </div>
    </section>
  );
}
