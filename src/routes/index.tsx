import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/forged/Navbar";
import { Hero } from "@/components/forged/Hero";
import { Benefits } from "@/components/forged/Benefits";
import { FloatingClips } from "@/components/forged/FloatingClips";
import { Marquee } from "@/components/forged/Marquee";
import { Classes } from "@/components/forged/Classes";
import { StatsBand } from "@/components/forged/StatsBand";
import { Bonuses } from "@/components/forged/Bonuses";
import { Pricing } from "@/components/forged/Pricing";
import { Locations } from "@/components/forged/Locations";
import { JoinCTA } from "@/components/forged/JoinCTA";
import { Footer } from "@/components/forged/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FORGED — It's Not Fitness. It's Life." },
      { name: "description", content: "FORGED is a premium gym and fitness club. Dark, raw, and built for those who refuse to coast. Classes, memberships, and four London locations." },
      { property: "og:title", content: "FORGED — It's Not Fitness. It's Life." },
      { property: "og:description", content: "Premium gym & fitness club. Train at four London locations." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Benefits />
      <FloatingClips />
      <Marquee />
      <Classes />
      <StatsBand />
      <Bonuses />
      <Pricing />
      <Locations />
      <JoinCTA />
      <Footer />
    </main>
  );
}
