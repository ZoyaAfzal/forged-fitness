import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/bonuses/$id")({
  component: BonusDetail,
});

const bonusData: Record<string, { title: string; description: string; fullContent: string }> = {
  "01": {
    title: "Free Recovery Session",
    description: "Every new member gets a full hour in the spa.",
    fullContent: "Unlock your body's full potential with our premium recovery suite. As a new member, you're entitled to a complimentary 60-minute session featuring infrared saunas, cryotherapy, and advanced compression technology. It's the perfect way to reset, reduce inflammation, and accelerate your progress."
  },
  "02": {
    title: "Bring a Friend Free",
    description: "Train together for the first month. No catch.",
    fullContent: "Everything is better with a partner. For your first 30 days, bring a workout buddy along on every visit for free. Keep each other motivated, track your progress together, and experience the Forged community side-by-side. No hidden fees, just shared gains."
  },
  "03": {
    title: "Nutrition Audit",
    description: "1:1 session with our in-house nutrition coach.",
    fullContent: "Training is only half the battle. Sit down with our certified nutritionist for a 1:1 audit of your current habits, macro requirements, and lifestyle goals. You'll leave with a personalized plan that turns your kitchen into your most powerful tool for performance."
  },
  "04": {
    title: "Anniversary Reward",
    description: "One free month of training for every year you stay.",
    fullContent: "Loyalty deserves recognition. At the completion of every 12-month membership cycle, we gift you a full month of training on the house. It's our way of saying thanks for choosing to forge yourself with us, year after year."
  },
};

function BonusDetail() {
  const { id } = Route.useParams();
  const data = bonusData[id];

  if (!data) return <div className="p-20 text-center">Bonus not found.</div>;

  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-ember hover:opacity-80 transition-opacity mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </a>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <span className="font-accent text-sm text-ember tracking-widest uppercase">Bonus {id}</span>
          <h1 className="font-display text-6xl md:text-8xl leading-tight">{data.title}</h1>
          <p className="text-xl text-muted-foreground">{data.description}</p>
          <div className="h-px bg-border my-8" />
          <p className="text-lg leading-relaxed text-foreground/90">{data.fullContent}</p>
          <a href="/#join" className="inline-block bg-ember text-white px-8 py-4 rounded-full font-accent">
            Claim This Bonus
          </a>
        </motion.div>
      </div>
    </main>
  );
}
