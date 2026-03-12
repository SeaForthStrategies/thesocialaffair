import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Photos | The Social Affair",
  description:
    "Photos of The Social Affair events venue in East Troy, WI — the rooftop, indoor dining, live music, cocktails, and private events.",
};

const photos = [
  { src: "/images/rooftop-setup.jpg",         alt: "Rooftop set for a private event",          tall: true  },
  { src: "/images/dinner-setting.jpg",         alt: "Indoor candlelit dinner setting",           tall: false },
  { src: "/images/drinks-rooftop.jpg",         alt: "Craft cocktails on the rooftop",            tall: false },
  { src: "/images/outside.jpg",               alt: "The Social Affair lit up at night",          tall: false },
  { src: "/images/food-salmon.jpg",            alt: "Plated salmon by Toothpicks Catering",      tall: true  },
  { src: "/images/live-music-1.jpg",           alt: "Live music performance",                    tall: false },
  { src: "/images/bloody-mary.jpg",            alt: "Signature bloody mary",                     tall: false },
  { src: "/images/dinner-popup.jpg",           alt: "Pop-up dinner table",                       tall: true  },
  { src: "/images/social-affair-exterior.jpg", alt: "Exterior during a community event",         tall: false },
  { src: "/images/front.jpg",                  alt: "The Social Affair front entrance",          tall: false },
  { src: "/images/live-music-2.jpg",           alt: "Live musician on stage",                    tall: false },
  { src: "/images/catering-boxed.jpg",         alt: "Toothpicks charcuterie board",              tall: false },
  { src: "/images/catering-train.jpg",         alt: "Toothpicks on the East Troy Railroad",      tall: true  },
  { src: "/images/door.jpg",                   alt: "The Social Affair entrance",                tall: false },
  { src: "/images/team-1.jpg",                 alt: "The team at The Social Affair",             tall: false },
  { src: "/images/team-2.jpg",                 alt: "Toothpicks Catering team",                  tall: false },
];

export default function PhotosPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1C0A00] text-[#FAF7F2] py-16 md:py-24 px-5 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4A96A]/50" />
          <span className="text-[#D4A96A]/65 text-xs">✦</span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4A96A]/50" />
        </div>
        <h1 className="font-playfair text-4xl md:text-5xl font-light text-[#FAF7F2] mb-3">
          The Social Affair
        </h1>
        <p className="text-[10px] tracking-[0.25em] uppercase text-[#FAF7F2]/50">
          East Troy, Wisconsin
        </p>
      </div>

      {/* Masonry photo wall */}
      <div className="bg-[#1C0A00] px-1 pb-1">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-1 space-y-1">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`break-inside-avoid overflow-hidden ${photo.tall ? "aspect-[3/4]" : "aspect-square"} relative`}
            >
              <div
                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url(${photo.src})` }}
                role="img"
                aria-label={photo.alt}
              />
            </div>
          ))}
        </div>
      </div>

      <CTASection
        title="Host your next event here"
        subtitle="Schedule a tour and see the rooftop for yourself."
        primaryCta={{ label: "Schedule a Tour", href: "/contact" }}
        secondaryCta={{ label: "View Venue", href: "/venue" }}
      />
    </>
  );
}
