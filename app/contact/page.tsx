import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Social Affair Events Venue in East Troy, WI. Call or text (262) 370-2994 or email toothpicks_catering@yahoo.com. Located at 2919 Main Street, East Troy, WI 53120.",
};

const contactActions = [
  {
    label: "Call Us",
    sublabel: "(262) 370-2994",
    detail: "Mon – Sat, anytime",
    href: "tel:2623702994",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    style: "bg-burgundy text-white hover:bg-burgundy-700 shadow-lg shadow-burgundy/30",
  },
  {
    label: "Text Us",
    sublabel: "(262) 370-2994",
    detail: "Quick response via SMS",
    href: "sms:2623702994",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    style: "bg-charcoal text-white hover:bg-charcoal/80 shadow-lg shadow-charcoal/20",
  },
  {
    label: "Email Us",
    sublabel: "toothpicks_catering@yahoo.com",
    detail: "For catering & event inquiries",
    href: "mailto:toothpicks_catering@yahoo.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    style: "bg-white text-charcoal border border-charcoal/12 hover:bg-cream hover:border-burgundy/30 shadow-md",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Action cards */}
      <div className="bg-cream pt-20 pb-0 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-burgundy/50" />
              <div className="w-1 h-1 rounded-full bg-burgundy" />
              <div className="h-px w-8 bg-burgundy/50" />
            </div>
            <h1 className="font-playfair text-3xl md:text-4xl font-light text-charcoal mb-3">
              Get in Touch
            </h1>
            <p className="text-xs tracking-widest uppercase text-charcoal/55">
              Schedule a tour · Catering inquiry · General questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
            {contactActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={`flex flex-col items-center text-center gap-3 rounded-2xl px-6 py-8 transition-all duration-200 group ${action.style}`}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/15 group-hover:bg-white/25 transition-colors">
                  {action.icon}
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-semibold mb-1 opacity-60">{action.label}</p>
                  <p className="font-playfair text-xl font-light leading-tight">{action.sublabel}</p>
                  <p className="text-xs mt-1.5 opacity-50">{action.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Form + info */}
      <Section
        title="Send us a message"
        subtitle="Or fill out the form and we'll get back to you"
        className="bg-cream"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">

          {/* Info column */}
          <div className="space-y-8 text-sm">
            <div>
              <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-2 font-semibold">Address</p>
              <address className="not-italic text-charcoal/70 leading-relaxed">
                2919 Main Street<br />
                East Troy, WI 53120
              </address>
              <a
                href="https://maps.google.com/?q=2919+Main+Street+East+Troy+WI+53120"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-xs tracking-widest uppercase text-burgundy hover:text-burgundy-700 transition-colors font-medium"
              >
                Get directions
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-2 font-semibold">Phone & Text</p>
              <a href="tel:2623702994" className="text-charcoal/70 hover:text-burgundy transition-colors">(262) 370-2994</a>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-2 font-semibold">Email</p>
              <a href="mailto:toothpicks_catering@yahoo.com" className="text-charcoal/70 hover:text-burgundy transition-colors break-all">
                toothpicks_catering@yahoo.com
              </a>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-2 font-semibold">Follow us</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/TheSocialAffairEastTroy"
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-charcoal/60 hover:text-burgundy transition-colors font-medium"
                >Facebook</a>
                <a
                  href="https://www.instagram.com/thesocialaffairevents"
                  target="_blank" rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-charcoal/60 hover:text-burgundy transition-colors font-medium"
                >Instagram</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
