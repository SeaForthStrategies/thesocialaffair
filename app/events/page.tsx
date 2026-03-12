import type { Metadata } from "next";
import EventsClient from "./EventsClient";
import { upcomingEvents } from "./data";

export const metadata: Metadata = {
  title: "Events | The Social Affair",
  description:
    "Upcoming events at The Social Affair in East Troy, WI — pop-up dinners, live music, seasonal gatherings, and private event bookings.",
};

export default function EventsPage() {
  return <EventsClient events={upcomingEvents} />;
}
