import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Plus } from "lucide-react";
import lift from "@/assets/clip-lift.mp4.asset.json";
import ctaImg from "@/assets/cta-bg.jpg";

export function JoinCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="join" ref={ref} className="relative overflow-hidden bg-background py-32 md:py-44">
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={ctaImg}
          className="w-full h-full object-cover opacity-20"
        >
          <source src={lift.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <motion.div
        style={{ x }}
        className="font-display text-[20vw] md:text-[16vw] leading-none whitespace-nowrap text-foreground/[0.04] select-none pointer-events-none absolute inset-y-0 flex items-center"
      >
        Put Your Fitness First Today •
      </motion.div>

      <div className="relative mx-auto max-w-3xl px-6 md:px-10 text-center">
        <div className="font-accent text-xs text-ember mb-4">Join Now</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-12">
          Put your fitness <span className="text-ember italic">first</span> today.
        </h2>

        <form
          onSubmit={(e) => { e.preventDefault(); }}
          className="space-y-8 max-w-xl mx-auto"
        >
          {[
            { k: "name", p: "Your Name" },
            { k: "email", p: "Email Address" },
            { k: "phone", p: "Phone Number" },
          ].map((f) => (
            <div key={f.k} className="group relative">
              <input
                type={f.k === "email" ? "email" : "text"}
                placeholder={f.p}
                value={form[f.k as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                className="w-full bg-transparent border-b border-border py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ember transition-colors"
              />
            </div>
          ))}

          <div className="pt-12 flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group relative grid place-items-center w-40 h-40 md:w-52 md:h-52 rounded-full bg-ember text-white animate-pulse-glow"
            >
              <span className="absolute inset-0 rounded-full border border-dashed border-white/40 animate-spin-slow" />
              <span className="font-accent text-sm">Join Now</span>
              <Plus className="absolute bottom-8 right-8 w-5 h-5 plus-rotate" />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
