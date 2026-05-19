import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plus } from "lucide-react";
import b1 from "@/assets/bonus-1.jpg";
import b2 from "@/assets/bonus-2.jpg";
import b3 from "@/assets/bonus-3.jpg";
import b4 from "@/assets/bonus-4.jpg";

const bonuses = [
  { n: "01", t: "Free Recovery Session", d: "Every new member gets a full hour in the spa.", img: b1, r: -6 },
  { n: "02", t: "Bring a Friend Free", d: "Train together for the first month. No catch.", img: b2, r: 4 },
  { n: "03", t: "Nutrition Audit", d: "1:1 session with our in-house nutrition coach.", img: b3, r: -3 },
  { n: "04", t: "Anniversary Reward", d: "One free month of training for every year you stay.", img: b4, r: 7 },
];

export function Bonuses() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="bonuses" className="py-32 md:py-44 px-6 md:px-10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-[18vw] md:text-[12vw] leading-[0.85] mb-20">
          <span className="block text-ember italic">Bonuses</span>
          <span className="block text-foreground -mt-4">For You</span>
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 80, rotate: b.r }}
              animate={inView ? { opacity: 1, y: 0, rotate: b.r } : {}}
              transition={{ type: "spring", stiffness: 60, damping: 14, delay: i * 0.15 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -8, transition: { type: "spring", stiffness: 200, damping: 15 } }}
              className="group bg-card-elevated text-foreground p-6 rounded-sm shadow-2xl cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-accent text-xs text-muted-foreground">{b.n}</span>
                <div className="relative">
                  <div className="absolute inset-0 bg-ember rounded-full scale-110" />
                  <img src={b.img} alt={b.t} loading="lazy" width={120} height={140}
                    className="relative w-20 h-24 object-cover rounded-full" />
                </div>
              </div>
              <h3 className="font-display text-2xl mb-3 leading-tight">{b.t}</h3>
              <p className="text-sm text-muted-foreground mb-6">{b.d}</p>
              <a href={`/bonuses/${b.n}`} className="inline-flex items-center gap-2 font-accent text-xs text-ember">
                More Details <Plus className="w-4 h-4 plus-rotate" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
