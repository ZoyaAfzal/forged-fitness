import { motion } from "framer-motion";
import { Check, Shield, Zap, Trophy, Users, Clock } from "lucide-react";

const details = [
  {
    icon: Shield,
    title: "Premium Security",
    desc: "24/7 biometric access and secure locker rooms with digital locks. Your focus remains on the iron, ours on your safety.",
  },
  {
    icon: Zap,
    title: "High-Performance Gear",
    desc: "Outfitted with the latest from Hammer Strength, Eleiko, and Keiser. No queues, just pure performance.",
  },
  {
    icon: Trophy,
    title: "Elite Coaching",
    desc: "Access to world-class trainers specializing in powerlifting, mobility, and metabolic conditioning.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    desc: "Join a network of high-achievers. Monthly member events, workshops, and private social groups.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    desc: "Life doesn't stop, and neither do we. Full access 24 hours a day, 365 days a year.",
  },
  {
    icon: Check,
    title: "Recovery Suite",
    desc: "Infrared saunas, cryotherapy, and compression boots available to all premium tier members.",
  },
];

export function MembershipDetails() {
  return (
    <section id="membership-details" className="py-32 md:py-44 px-6 md:px-10 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="font-accent text-xs text-ember mb-4 tracking-[0.3em]">Deep Dive</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8 uppercase">
              The Forged <span className="text-ember">Standard</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl">
              We've stripped away the fluff of commercial gyms to create a high-performance sanctuary. 
              Every detail is engineered for those who demand more from their training.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {details.map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-ember" />
                    <h4 className="font-display text-xl uppercase tracking-wide">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
                alt="Gym Interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl p-8 border border-white/10 rounded-sm">
                <div className="font-display text-4xl mb-2 italic text-ember">"Results aren't given, they're forged."</div>
                <div className="font-accent text-[10px] tracking-widest opacity-60">— FOUNDER'S NOTE</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-ember/20 -z-10 animate-spin-slow" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-ember/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
