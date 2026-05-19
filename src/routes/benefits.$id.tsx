import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/benefits/$id")({
  component: BenefitDetail,
});

const benefitData: Record<string, { title: string; description: string; fullContent: string }> = {
  "01": {
    title: "Annual Club Card in Installments",
    description: "Spread your investment. Full access, flexible payments.",
    fullContent: "The Annual Club Card provides unlimited access to all four London locations. We've made it easier than ever to commit to your health with our flexible installment plan, ensuring premium fitness is accessible without a heavy upfront cost. You'll also receive complimentary guest passes and priority booking for all classes."
  },
  "02": {
    title: "Loyal System for Regular Customers",
    description: "The more you train, the more you earn. Stack rewards.",
    fullContent: "Our loyalty program rewards consistency. Every workout logged earns you Forged Points, which can be redeemed for personal training sessions, apparel, or even membership months. The higher your tier, the faster you earn, unlocking exclusive perks like advanced recovery access and private events."
  },
  "03": {
    title: "50% Off Trial Personal Training",
    description: "Test-drive a coach. Push past plateaus from day one.",
    fullContent: "Get 50% off your first three personal training sessions. This introductory package is designed to help you align with a coach who understands your goals, baseline fitness, and potential. Whether you're powerlifting, rehabbing, or conditioning, we'll find your perfect match."
  },
  "04": {
    title: "Installment Classes Subscription",
    description: "Lock in classes monthly without committing your year.",
    fullContent: "Not ready to commit to an annual membership? Our class subscription gives you access to all our exclusive studios-TRX, Fly-Yoga, Cycle, and more—on a month-to-month basis. Perfect for those who value flexibility while still maintaining a high-performance training routine."
  },
};

function BenefitDetail() {
  const { id } = Route.useParams();
  const data = benefitData[id];

  if (!data) return <div className="p-20 text-center">Benefit not found.</div>;

  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-ember hover:opacity-80 transition-opacity mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </a>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <span className="font-accent text-sm text-ember tracking-widest uppercase">Benefit {id}</span>
          <h1 className="font-display text-6xl md:text-8xl leading-tight">{data.title}</h1>
          <p className="text-xl text-muted-foreground">{data.description}</p>
          <div className="h-px bg-border my-8" />
          <p className="text-lg leading-relaxed text-foreground/90">{data.fullContent}</p>
          <a href="/#join" className="inline-block bg-ember text-white px-8 py-4 rounded-full font-accent">
            Apply For This Benefit
          </a>
        </motion.div>
      </div>
    </main>
  );
}
