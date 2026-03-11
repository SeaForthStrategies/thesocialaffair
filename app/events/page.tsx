import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events | The Social Affair",
  description:
    "Upcoming events at The Social Affair in East Troy, WI — pop-up dinners, live music, seasonal gatherings, and private event bookings.",
};

// ─── EDIT THIS ARRAY TO ADD / REMOVE EVENTS ───────────────────────────────────
export const upcomingEvents = [
  {
    id: 1,
    date: "2026-03-22",
    time: "6:00 PM – 9:00 PM",
    title: "Spring Pop-Up Dinner",
    description:
      "A four-course seasonal dinner crafted by Toothpicks Catering. Limited seating. Rooftop and indoor tables available.",
    image: "/images/dinner-popup.jpg",
    tag: "Dining",
    ticketUrl: "/contact",
  },
  {
    id: 2,
    date: "2026-03-29",
    time: "7:00 PM – 10:00 PM",
    title: "Live Music Night",
    description:
      "Join us on the rooftop for an evening of live acoustic music, craft cocktails, and small bites from Toothpicks.",
    image: "/images/live-music-1.jpg",
    tag: "Music",
    ticketUrl: "/contact",
  },
  {
    id: 3,
    date: "2026-04-12",
    time: "11:00 AM – 2:00 PM",
    title: "Rooftop Brunch",
    description:
      "Weekend brunch on the rooftop — seasonal menu, mimosas, bloody marys, and all the good vibes East Troy has to offer.",
    image: "/images/bloody-mary.jpg",
    tag: "Brunch",
    ticketUrl: "/contact",
  },
  {
    id: 4,
    date: "2026-04-25",
    time: "6:30 PM – 9:30 PM",
    title: "Wine & Bites Evening",
    description:
      "A curated wine flight paired with seasonal small plates by Toothpicks. Perfect for date night or a girls' night out.",
    image: "/images/drinks-rooftop.jpg",
    tag: "Dining",
    ticketUrl: "/contact",
  },
  {
    id: 5,
    date: "2026-05-10",
    time: "5:00 PM – 8:00 PM",
    title: "Live Music on the Rooftop",
    description:
      "Kick off summer early with live music, rooftop cocktails, and the best views in East Troy.",
    image: "/images/rooftop-setup.jpg",
    tag: "Music",
    ticketUrl: "/contact",
  },
];
// ──────────────────────────────────────────────────────────────────────────────

export default function EventsPage() {
  return <EventsClient events={upcomingEvents} />;
}
