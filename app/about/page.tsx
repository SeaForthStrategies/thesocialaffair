"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="Our Story"
        subheadline="East Troy's gathering place — where good food, great company, and unforgettable moments happen."
        backgroundImage="/images/front.jpg"
      />

      <Section title="Bringing people together" subtitle="How it all started" className="bg-[#F2EAE0]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-5 text-[15px] text-[#3B2012]/85 leading-relaxed">
            <p>
              The Social Affair was founded with a simple belief: some of
              life's greatest moments happen when we gather. Located at{" "}
              <strong className="text-[#7D0A1E]">2919 Main Street</strong> in
              East Troy, Wisconsin — just west of the Historic East Troy Square —
              we're a boutique two-story events venue with an open rooftop, right
              in the heart of our small-town community.
            </p>
            <p>
              From intimate pop-up dinners and rooftop cocktail evenings to
              weddings, Brunch &amp; Bingo, and private celebrations, The
              Social Affair is where East Troy comes together for life's best
              moments.
            </p>
            <p>
              Our in-house catering partner,{" "}
              <strong className="text-[#7D0A1E]">Toothpicks Catering</strong>,
              handles every event with custom menus, seasonal ingredients, and
              genuine hospitality — from bruschetta and ahi poke bowls to
              five-course pop-up dinners.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-[#2C1A0E]/10 aspect-[4/3]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(/images/social-affair-exterior.jpg)` }}
            />
          </div>
        </motion.div>
      </Section>

      <Section title="The Team" subtitle="The people behind the experience" className="bg-[#FAF7F2]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            {
              src: "/images/team-1.jpg",
              alt: "Sarah and Erica at The Social Affair",
              name: "The Crew",
              desc: "Our team is here to make your event seamless, warm, and memorable — from the first inquiry to the last toast.",
            },
            {
              src: "/images/team-2.jpg",
              alt: "The Social Affair and Toothpicks Catering team",
              name: "Toothpicks Catering",
              desc: "Our culinary team brings creativity and heart to every menu, catering everything from casual gatherings to multi-course dinners.",
            },
          ].map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-5 shadow-md shadow-[#2C1A0E]/8">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.src})` }}
                />
              </div>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-6 bg-[#D4A96A]/50" />
                <span className="text-[#D4A96A]/70 text-xs">✦</span>
                <div className="h-px w-6 bg-[#D4A96A]/50" />
              </div>
              <h3 className="font-playfair text-xl text-[#7D0A1E] mb-2">{member.name}</h3>
              <p className="text-[#3B2012]/75 text-sm leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="What we do" subtitle="Year-round events for the East Troy community" className="bg-[#F2EAE0]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Your vision",
              body: "We work with you to create exactly the event you have in mind — whether that's an intimate rooftop dinner for 20 or a full venue buy-out for 80.",
            },
            {
              title: "Community events",
              body: "We host Rooftop Rendezvous evenings, pop-up dinners, Brunch & Bingo, and live music nights — open to the East Troy community throughout the year.",
            },
            {
              title: "Artisanal bar",
              body: "Craft cocktails, happy hour specials, fine wine, and local pours — served with the same care we put into every event.",
            },
          ].map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-[#D4A96A]/18 bg-[#FAF7F2] hover:border-[#B8935A]/35 hover:shadow-md hover:shadow-[#B8935A]/8 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-6 bg-[#D4A96A]/45" />
                <span className="text-[#D4A96A]/65 text-xs">✦</span>
                <div className="h-px w-6 bg-[#D4A96A]/45" />
              </div>
              <h3 className="font-playfair text-xl text-[#7D0A1E] mb-3">{block.title}</h3>
              <p className="text-[#3B2012]/75 text-sm leading-relaxed">{block.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Come see us"
        subtitle="Visit The Social Affair at 2919 Main Street, East Troy, WI."
        primaryCta={{ label: "Schedule a Tour", href: "/contact" }}
        secondaryCta={{ label: "View Venue", href: "/venue" }}
      />
    </>
  );
}
