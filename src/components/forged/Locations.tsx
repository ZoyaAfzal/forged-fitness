import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import trxVid from "@/assets/clip-trx.mp4.asset.json";

const locs = [
  { name: "Balham", addr: "279-291 Balham High Rd, London SW17 7BA", phone: "+44 20 7946 0101", mail: "balham@forged.com", mapUrl: "https://www.google.com/maps/search/?api=1&query=Forged+Fitness+Balham+London" },
  { name: "Shoreditch", addr: "12 Curtain Rd, London EC2A 3PT", phone: "+44 20 7946 0202", mail: "shoreditch@forged.com", mapUrl: "https://www.google.com/maps/search/?api=1&query=Forged+Fitness+Shoreditch+London" },
  { name: "Camden", addr: "44 Chalk Farm Rd, London NW1 8AJ", phone: "+44 20 7946 0303", mail: "camden@forged.com", mapUrl: "https://www.google.com/maps/search/?api=1&query=Forged+Fitness+Camden+London" },
  { name: "Hackney", addr: "210 Mare St, London E8 3RD", phone: "+44 20 7946 0404", mail: "hackney@forged.com", mapUrl: "https://www.google.com/maps/search/?api=1&query=Forged+Fitness+Hackney+London" },
];

export function Locations() {
  return (
    <section id="locations" className="py-32 md:py-44 px-6 md:px-10 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-end">
          <h2 className="font-display text-[14vw] md:text-[7vw] leading-[0.9]">
            Find Your <span className="text-ember italic">Nearest</span> Gym
          </h2>
          <div className="relative aspect-[5/4] md:aspect-video bg-background rounded-sm overflow-hidden border border-border group/map">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src={trxVid.url} type="video/mp4" />
              </video>
            </div>
            <svg viewBox="0 0 400 300" className="relative w-full h-full z-10">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="oklch(1 0 0 / 0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#grid)" />
              <path d="M0,180 Q100,140 200,180 T400,160" stroke="oklch(1 0 0 / 0.15)" strokeWidth="1.5" fill="none" />
              <path d="M50,0 L80,300" stroke="oklch(1 0 0 / 0.1)" strokeWidth="1" />
              <path d="M250,0 L280,300" stroke="oklch(1 0 0 / 0.1)" strokeWidth="1" />
              {[{x:90,y:120},{x:200,y:90},{x:280,y:170},{x:320,y:220}].map((p,i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="14" fill="oklch(0.6 0.2 250 / 0.2)">
                    <animate attributeName="r" values="14;22;14" dur="2.5s" repeatCount="indefinite" begin={`${i*0.4}s`} />
                  </circle>
                  <circle cx={p.x} cy={p.y} r="5" fill="oklch(0.6 0.2 250)" />
                </g>
              ))}
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {locs.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-card border border-border p-6 rounded-sm relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-ember scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="font-accent text-xs text-ember mb-3">FORGED // {l.name}</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 mt-1 shrink-0 text-muted-foreground" /><span>{l.addr}</span></div>
                <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-muted-foreground" /><span>{l.phone}</span></div>
                <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-muted-foreground" /><span className="text-muted-foreground">{l.mail}</span></div>
              </div>
              <a href={l.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 font-accent text-xs text-ember">
                Get Directions <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
