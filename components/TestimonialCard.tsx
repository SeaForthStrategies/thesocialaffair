"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <motion.blockquote
      className="relative flex flex-col justify-between bg-white border border-charcoal/8 rounded-2xl p-8 shadow-sm hover:shadow-md hover:shadow-burgundy/8 transition-shadow duration-300 overflow-hidden"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      {/* Watermark quote */}
      <div
        className="absolute -top-2 -right-1 font-playfair text-[7rem] leading-none text-charcoal/5 select-none pointer-events-none"
        aria-hidden
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 fill-burgundy" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="font-playfair text-base text-charcoal/80 italic leading-relaxed relative z-10 flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      <footer className="mt-7 pt-5 border-t border-charcoal/8 relative z-10">
        <cite className="not-italic font-semibold text-sm text-charcoal tracking-wide">{author}</cite>
        {role && (
          <span className="block text-xs text-charcoal/40 tracking-widest uppercase mt-0.5">{role}</span>
        )}
      </footer>
    </motion.blockquote>
  );
}
