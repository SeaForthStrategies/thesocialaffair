import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind The Social Affair — East Troy, Wisconsin's rooftop events venue, owned by Sarah Lehr and dedicated to bringing the community together.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="Our Story"
        subheadline="East Troy's gathering place — where good food, great company, and unforgettable moments happen."
        backgroundImage="/images/front.jpg"
      />

      <Section
        title="Bringing people together"
        subtitle="How it all started"
        className="bg-cream"
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-5 text-lg text-charcoal/90">
            <p>
              The Social Affair was founded with a simple belief: some of
              life's greatest moments happen when we gather. Located at{" "}
              <strong className="text-burgundy">2919 Main Street</strong> in
              East Troy, Wisconsin, we're a boutique two-story events venue
              with an open rooftop — right in the heart of our small-town
              community.
            </p>
            <p>
              From intimate pop-up dinners and rooftop cocktail evenings to
              weddings, brunch &amp; bingo, and private celebrations, The
              Social Affair is where East Troy comes together for life's best
              moments.
            </p>
            <p>
              Our in-house catering partner,{" "}
              <strong className="text-burgundy">Toothpicks Catering</strong>,
              handles every event with custom menus, seasonal ingredients, and
              genuine hospitality — from bruschetta and poke bowls to
              five-course pop-up dinners.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(/images/social-affair-exterior.jpg)` }}
            />
          </div>
        </motion.div>
      </Section>

      <Section
        title="The Team"
        subtitle="The people behind the experience"
        className="bg-ivory"
      >
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
              <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-5 shadow-md">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.src})` }}
                />
              </div>
              <div className="w-8 h-1 bg-burgundy mx-auto mb-3 rounded-full" />
              <h3 className="font-playfair text-xl text-burgundy mb-2">{member.name}</h3>
              <p className="text-charcoal/80">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="What we do"
        subtitle="Year-round events for the East Troy community"
        className="bg-cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Your vision",
              body: "We work with you to create exactly the event you have in mind — whether that's an intimate rooftop dinner or a full venue reception.",
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
              className="text-center p-8 rounded-2xl border border-blush-200 bg-ivory"
            >
              <div className="w-8 h-1 bg-burgundy mx-auto mb-4 rounded-full" />
              <h3 className="font-playfair text-xl text-burgundy mb-3">
                {block.title}
              </h3>
              <p className="text-charcoal/90">{block.body}</p>
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
