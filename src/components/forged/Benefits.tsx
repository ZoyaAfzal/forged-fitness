import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import b1 from "@/assets/bonus-1.jpg";
import b2 from "@/assets/bonus-2.jpg";
import b3 from "@/assets/bonus-3.jpg";
import b4 from "@/assets/bonus-4.jpg";

const benefits = [
  { n: "01", t: "Annual Club Card in Installments", d: "Spread your investment. Full access, flexible payments.", img: b1 },
  { n: "02", t: "Loyal System for Regular Customers", d: "The more you train, the more you earn. Stack rewards.", img: b2 },
  { n: "03", t: "50% Off Trial Personal Training", d: "Test-drive a coach. Push past plateaus from day one.", img: b3 },
  { n: "04", t: "Installment Classes Subscription", d: "Lock in classes monthly without committing your year.", img: b4 },
];

export function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="relative py-32 md:py-44 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 md:mb-24">
          <h2 className="font-display text-5xl md:text-7xl leading-[1] uppercase tracking-tight">
            <span className="block text-foreground">Membership</span>
            <span className="block text-ember">With ✕ Best Benefits</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {benefits.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative bg-card p-8 md:p-10 min-h-[400px] flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-all duration-700 pointer-events-none">
                <img src={b.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute top-0 left-0 h-px w-full bg-ember scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              
              <div className="relative z-10">
                <span className="font-accent text-xs text-ember">{b.n} / 04</span>
                <h3 className="mt-6 font-display text-3xl md:text-4xl leading-tight group-hover:text-ember transition-colors">{b.t}</h3>
              </div>
              
              <div className="relative z-10">
                <p className="text-sm text-muted-foreground mb-6 group-hover:text-foreground transition-colors line-clamp-2">{b.d}</p>
                <a 
                  href={`/benefits/${b.n}`}
                  className="inline-flex items-center gap-2 font-accent text-xs text-white bg-ember/10 hover:bg-ember px-4 py-2 rounded-full transition-all duration-300 group/link"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 text-ember group-hover/link:text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
