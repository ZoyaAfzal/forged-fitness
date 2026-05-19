import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import b1 from "@/assets/bonus-1.jpg";
import b2 from "@/assets/bonus-2.jpg";
import b3 from "@/assets/bonus-3.jpg";
import b4 from "@/assets/bonus-4.jpg";

const clips = [
  { img: b1, label: "Strength", w: "w-40 md:w-60", h: "h-64 md:h-80", x: "left-[5%]", y: "top-[10%]", rot: -6, delay: 0 },
  { img: b2, label: "Mobility", w: "w-36 md:w-52", h: "h-56 md:h-72", x: "right-[10%]", y: "top-[5%]", rot: 5, delay: 0.15 },
  { img: b3, label: "Combat", w: "w-44 md:w-60", h: "h-44 md:h-60", x: "left-[15%]", y: "bottom-[5%]", rot: 4, delay: 0.3 },
  { img: b4, label: "Endurance", w: "w-36 md:w-48", h: "h-56 md:h-72", x: "right-[15%]", y: "bottom-[10%]", rot: -3, delay: 0.45 },
];

export function FloatingClips() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16">
          <div className="font-accent text-xs text-ember mb-4 tracking-[0.2em] uppercase">In Motion</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight">
            Raw. Unfiltered. Forged.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {clips.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-sm overflow-hidden border border-white/10 bg-card aspect-[3/4] relative"
            >
              <img
                src={c.img}
                alt={c.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 font-accent text-xs text-white tracking-[0.2em] uppercase">
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
