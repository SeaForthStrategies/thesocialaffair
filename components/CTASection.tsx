import Link from "next/link";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
  backgroundImage?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className = "",
  backgroundImage = "/images/rooftop-setup.jpg",
}: CTASectionProps) {
  return (
    <section className={`relative py-20 md:py-36 px-5 sm:px-6 overflow-hidden ${className}`}>
      {/* Photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Rich dark overlay */}
      <div className="absolute inset-0 bg-charcoal/80" />
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/40 via-transparent to-black/30" />

      {/* Corner ornaments — desktop only */}
      <div className="hidden sm:block absolute top-8 left-8 w-14 h-14 border-t border-l border-white/15 rounded-tl-sm" />
      <div className="hidden sm:block absolute top-8 right-8 w-14 h-14 border-t border-r border-white/15 rounded-tr-sm" />
      <div className="hidden sm:block absolute bottom-8 left-8 w-14 h-14 border-b border-l border-white/15 rounded-bl-sm" />
      <div className="hidden sm:block absolute bottom-8 right-8 w-14 h-14 border-b border-r border-white/15 rounded-br-sm" />

      <div className="relative mx-auto max-w-2xl text-center text-white px-2">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div className="h-px w-10 bg-burgundy/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-burgundy" />
          <div className="h-px w-10 bg-burgundy/70" />
        </div>

        <h2 className="font-playfair text-3xl md:text-5xl font-light leading-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/80 text-sm tracking-widest uppercase max-w-md mx-auto mb-10">
            {subtitle}
          </p>
        )}

        {/* Full-width on mobile, inline on sm+ */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link
            href={primaryCta.href}
            className="flex items-center justify-center rounded-full bg-burgundy text-white px-9 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-burgundy-700 active:scale-95 transition-all shadow-xl shadow-burgundy/40"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="flex items-center justify-center rounded-full border-2 border-white/50 text-white px-9 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-white/15 hover:border-white/80 active:scale-95 transition-all"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
