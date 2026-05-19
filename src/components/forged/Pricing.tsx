import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plus, Check, Star } from "lucide-react";
import boxVid from "@/assets/clip-box.mp4.asset.json";

const plans = [
  { name: "Middle", price: 50, feats: ["Gym without trainer", "Unlimited access", "Access to all clubs"] },
  { name: "Super", price: 90, feats: ["Everything in Middle", "Training for some classes", "Locker included"] },
  { name: "All Inclusive", price: 120, feats: ["Everything in Super", "Training for all classes", "Spa access"], featured: true },
  { name: "Exclusive", price: 150, feats: ["Everything in All Inclusive", "Exclusive studios", "Personal coach hour"] },
];

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="memberships" className="relative py-32 md:py-44 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-10 blur-3xl scale-125"
        >
          <source src={boxVid.url} type="video/mp4" />
        </video>
      </div>

      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-5xl md:text-7xl leading-[1] mb-16 uppercase tracking-tight">
          Choose Your <span className="text-ember italic">Plan</span>
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {plans.map((p, i) => {
            const featured = p.featured;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 80 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, transition: { type: "spring", stiffness: 200 } }}
                className={`relative p-8 rounded-sm flex flex-col ${
                  featured ? "bg-foreground text-background animate-border-pulse border-2" : "bg-card border border-border hover:shadow-[0_20px_60px_-20px_var(--ember-glow)] transition-shadow"
                }`}
              >
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ember text-white text-xs font-accent px-3 py-1 rounded-full inline-flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> Most Popular
                  </div>
                )}
                <div className="font-accent text-xs opacity-70 mb-2">{p.name}</div>
                <div className="font-display text-6xl mb-1">${p.price}</div>
                <div className={`text-xs mb-8 ${featured ? "opacity-60" : "text-muted-foreground"}`}>per month</div>

                <ul className="space-y-3 mb-10 flex-1">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? "text-background" : "text-ember"}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href="/#join" className={`group inline-flex items-center justify-between gap-2 font-accent text-xs px-5 py-3 rounded-full transition-shadow ${
                  featured ? "bg-background text-foreground hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "bg-ember text-white hover:shadow-[0_0_30px_var(--ember-glow)]"
                }`}>
                  Buy Now <Plus className="w-4 h-4 plus-rotate" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
