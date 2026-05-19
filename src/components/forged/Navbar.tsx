import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Plus } from "lucide-react";

const links = ["Classes", "Bonuses", "Memberships", "Locations", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getLink = (l: string) => {
    if (l === "Contact") return "/#join";
    return `/#${l.toLowerCase()}`;
  };

  return (
    <motion.header
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-1 font-display text-3xl tracking-wider">
          <span>FOR</span>
          <Zap className="w-6 h-6 text-ember fill-ember" strokeWidth={1.5} />
          <span>GED</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l} href={getLink(l)} className="font-accent text-xs underline-slide text-foreground/80 hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>

        <a href="/#join" className="hidden md:inline-flex group items-center gap-2 bg-ember text-white font-accent text-xs px-5 py-3 rounded-full hover:shadow-[0_0_30px_var(--ember-glow)] transition-shadow">
          Join Now <Plus className="w-4 h-4 plus-rotate" />
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a key={l} href={getLink(l)} onClick={() => setOpen(false)} className="font-accent text-sm">{l}</a>
              ))}
              <a href="/#join" className="inline-flex items-center gap-2 bg-ember text-white font-accent text-xs px-5 py-3 rounded-full w-fit">
                Join Now <Plus className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
