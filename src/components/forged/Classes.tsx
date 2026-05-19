import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import trxVid from "@/assets/clip-trx.mp4.asset.json";
import liftVid from "@/assets/clip-lift.mp4.asset.json";
import boxVid from "@/assets/clip-box.mp4.asset.json";

const categories = [
  {
    cat: "Exclusive Studio",
    vid: trxVid.url,
    classes: [
      { name: "TRX", dur: "45 MIN", desc: "Suspension training that hits every fiber. Build strength, balance, and raw control." },
      { name: "Fly-Yoga", dur: "60 MIN", desc: "Aerial yoga that decompresses your spine and rewires your nervous system." },
      { name: "Cycle", dur: "45 MIN", desc: "Beat-driven indoor cycling. Lights low, watts high." },
      { name: "Mind Body", dur: "60 MIN", desc: "Controlled movement, breath, and intention. Strength without the noise." },
    ],
  },
  {
    cat: "Group Fitness",
    vid: liftVid.url,
    classes: [
      { name: "Stretching", dur: "30 MIN", desc: "Active mobility work that unlocks every joint." },
      { name: "Body Shape", dur: "55 MIN", desc: "Full-body sculpting with weights, bands, and zero shortcuts." },
      { name: "Yoga", dur: "60 MIN", desc: "Vinyasa flow that meets you wherever you are." },
      { name: "Pilates", dur: "50 MIN", desc: "Core-first conditioning rooted in classical reformer principles." },
      { name: "Dance Mix", dur: "55 MIN", desc: "High-energy choreography. Cardio that doesn't feel like cardio." },
    ],
  },
  {
    cat: "Spa",
    vid: boxVid.url,
    classes: [
      { name: "Massage", dur: "60 MIN", desc: "Sports and deep tissue recovery from certified therapists." },
      { name: "Swimming", dur: "OPEN", desc: "25m heated lap pool. Open hours, lane reservation, lessons." },
      { name: "Bath", dur: "OPEN", desc: "Hammam, sauna, and ice bath circuit. Pure ritual." },
    ],
  },
];

export function Classes() {
  const [openCat, setOpenCat] = useState<string | null>("Exclusive Studio");
  const [openClass, setOpenClass] = useState<string | null>(null);

  return (
    <section id="classes" className="py-32 md:py-44 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
          <h2 className="font-display text-5xl md:text-7xl leading-[1] uppercase tracking-tight">Our Classes</h2>
          <p className="md:max-w-xs text-muted-foreground text-sm md:text-base md:mt-4">
            Workouts that work for you. Flexible, strong, and bold. Train the way you live.
          </p>
        </div>

        <div className="border-t border-border">
          {categories.map((c) => {
            const isOpen = openCat === c.cat;
            return (
              <div key={c.cat} className="border-b border-border relative group/cat">
                <button
                  onClick={() => { setOpenCat(isOpen ? null : c.cat); setOpenClass(null); }}
                  className="w-full flex items-center justify-between py-6 md:py-8 group relative z-10"
                >
                  <span className="font-display text-3xl md:text-4xl uppercase tracking-wide group-hover:text-ember transition-colors">{c.cat}</span>
                  <Plus className={`w-6 h-6 text-ember transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="pb-8 flex flex-col lg:flex-row gap-8">
                        <div className="flex-1 order-2 lg:order-1">
                          {c.classes.map((cl) => {
                            const active = openClass === cl.name;
                            return (
                              <div key={cl.name} className="border-t border-border/50 first:border-t-0">
                                <button
                                  onClick={() => setOpenClass(active ? null : cl.name)}
                                  className="group/row relative w-full flex items-center justify-between py-5 px-2 md:px-4 hover:bg-surface transition-colors"
                                >
                                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-ember scale-y-0 group-hover/row:scale-y-100 transition-transform origin-top" />
                                  <span className="font-display text-2xl md:text-3xl group-hover/row:translate-x-2 transition-transform duration-300">{cl.name}</span>
                                  <span className="font-accent text-xs text-muted-foreground">{cl.dur}</span>
                                </button>
                                <AnimatePresence>
                                  {active && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden bg-surface"
                                    >
                                      <div className="px-2 md:px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <p className="text-muted-foreground max-w-2xl">{cl.desc}</p>
                                        <button className="group/btn inline-flex items-center gap-2 font-accent text-xs text-ember">
                                          Book a Class <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </button>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                        
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="lg:w-1/3 h-64 lg:h-auto order-1 lg:order-2 rounded-sm overflow-hidden relative group/vid shadow-2xl"
                        >
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source src={c.vid} type="video/mp4" />
                          </video>
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                          <div className="absolute bottom-4 left-4 font-accent text-[10px] tracking-widest text-white/70">PREVIEW / {c.cat}</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
