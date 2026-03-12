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
      {/* Warm dark overlay */}
      <div className="absolute inset-0 bg-[#1C0A00]/78" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B2000]/30 via-transparent to-[#1C0A00]/30" />

      {/* Corner ornaments — desktop only */}
      <div className="hidden sm:block absolute top-8 left-8 w-14 h-14 border-t border-l border-[#D4A96A]/20 rounded-tl-sm" />
      <div className="hidden sm:block absolute top-8 right-8 w-14 h-14 border-t border-r border-[#D4A96A]/20 rounded-tr-sm" />
      <div className="hidden sm:block absolute bottom-8 left-8 w-14 h-14 border-b border-l border-[#D4A96A]/20 rounded-bl-sm" />
      <div className="hidden sm:block absolute bottom-8 right-8 w-14 h-14 border-b border-r border-[#D4A96A]/20 rounded-br-sm" />

      <div className="relative mx-auto max-w-2xl text-center text-white px-2">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4A96A]/60" />
          <span className="text-[#D4A96A]/70 text-sm">✦</span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4A96A]/60" />
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
            className="flex items-center justify-center rounded-full bg-[#B8935A] text-white px-9 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4A96A] active:scale-95 transition-all shadow-xl shadow-black/30"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="flex items-center justify-center rounded-full border border-white/30 text-white/85 px-9 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/50 active:scale-95 transition-all"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
