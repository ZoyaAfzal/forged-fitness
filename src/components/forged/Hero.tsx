import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Counter } from "./Counter";

import heroImg1 from "@/assets/hero-gym.jpg";
import heroImg2 from "@/assets/bonus-1.jpg";
import heroImg3 from "@/assets/bonus-2.jpg";
import heroImg4 from "@/assets/bonus-3.jpg";
import heroImg5 from "@/assets/bonus-4.jpg";

const images = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

const line1 = ["IT'S", "NOT", "FITNESS."];
const line2 = ["IT'S", "LIFE."];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } } as const;
const item = {
  hidden: { y: 120, opacity: 0, skewY: 7 },
  visible: { y: 0, opacity: 1, skewY: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden isolate">
      {/* Background Slider */}
      <div className="absolute inset-0 -z-10" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 h-full relative">
              <img src={img} alt="Gym" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/10" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-40 md:pt-48 pb-32">
        <motion.div variants={container} initial="hidden" animate="visible" className="space-y-1 md:space-y-2">
          <div className="flex flex-wrap gap-x-4 md:gap-x-6">
            {line1.map((w, i) => (
              <div key={`${w}-${i}`} className="overflow-hidden">
                <motion.span 
                  variants={item} 
                  whileHover={{ scale: 0.95, color: "var(--color-ember)" }}
                  className="block font-display text-[12vw] md:text-[8vw] leading-[0.9] text-foreground uppercase tracking-tight cursor-default transition-colors duration-300"
                >
                  {w}
                </motion.span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 md:gap-x-6">
            {line2.map((w, i) => (
              <div key={`${w}-${i}`} className="overflow-hidden">
                <motion.span 
                  variants={item} 
                  whileHover={{ scale: 0.95, color: "var(--color-foreground)" }}
                  className="block font-display text-[12vw] md:text-[8vw] leading-[0.9] text-ember uppercase tracking-tight relative cursor-default transition-colors duration-300"
                >
                  {w}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>
        {/* ... rest of hero content */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-6 md:right-16 top-32 md:top-48"
        >
          <motion.a
            href="#join"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="group relative grid place-items-center w-32 h-32 md:w-44 md:h-44 rounded-full bg-ember text-white animate-pulse-glow"
          >
            <span className="font-accent text-xs md:text-sm z-10">Join Now</span>
            <Plus className="absolute bottom-6 right-6 w-5 h-5 plus-rotate z-10" />
            <div className="absolute inset-0 rounded-full border border-white/20 scale-110 group-hover:scale-125 transition-transform duration-500" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border"
        >
          {[
            { n: 4, s: "", l: "Clubs" },
            { n: 45, s: "min", l: "Workout" },
            { n: 500, s: "+", l: "Members" },
            { n: 12, s: "+", l: "Classes" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + (i * 0.1) }}
              className="bg-background p-6 md:p-8 flex flex-col gap-2 hover:bg-surface transition-colors"
            >
              <div className="font-display text-5xl md:text-6xl text-foreground">
                <Counter to={stat.n} suffix={stat.s} />
              </div>
              <div className="font-accent text-xs text-muted-foreground">{stat.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="relative h-16 w-px bg-border overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-ember animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
