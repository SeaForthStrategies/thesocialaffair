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
    <section id={id} className={`py-14 md:py-24 px-5 sm:px-6 md:px-10 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.header
          className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
        >
          {/* Eyebrow ornament */}
          <div className={`flex items-center gap-3 mb-5 ${centered ? "justify-center" : ""}`}>
            <div className="h-px w-8 bg-burgundy/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-burgundy" />
            <div className="h-px w-8 bg-burgundy/60" />
          </div>

          <h2 className="font-playfair text-3xl md:text-4xl font-light text-charcoal tracking-tight leading-snug">
            {title}
          </h2>

          {subtitle && (
            <p className={`mt-3 text-sm text-charcoal/65 tracking-wider uppercase ${centered ? "mx-auto" : ""} max-w-lg`}>
              {subtitle}
            </p>
          )}
        </motion.header>

        {children}
      </div>
    </section>
  );
}
