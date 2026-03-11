"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export default function EventCard({
  title,
  description,
  href,
  image = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
}: EventCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={href} className="block">
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-burgundy/15 transition-all duration-300 bg-blush-50 border border-transparent group-hover:border-burgundy/20">
          <div className="aspect-[4/3] relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* Red-tinted gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/85 via-charcoal/30 to-transparent group-hover:from-burgundy/80 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-playfair text-2xl text-ivory">{title}</h3>
            </div>
          </div>
          <div className="p-6 bg-ivory">
            <p className="text-charcoal/90 text-sm leading-relaxed">{description}</p>
            <span className="inline-flex items-center gap-1.5 mt-4 text-burgundy font-semibold text-sm group-hover:gap-3 transition-all duration-200">
              Learn more
              <span aria-hidden className="text-base">→</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
