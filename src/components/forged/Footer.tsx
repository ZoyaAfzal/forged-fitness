import { Zap, ArrowUp, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-background border-t-2 border-ember">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-1 font-display text-3xl">
            <span>FOR</span><Zap className="w-6 h-6 text-ember fill-ember" /><span>GED</span>
          </div>
          <p className="text-xs text-muted-foreground max-w-xs">
            © 2026 Forged. All rights reserved. Built for those who refuse to coast.
          </p>
        </div>

        <div className="space-y-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {["Classes", "Bonuses", "Memberships", "Locations", "Contact"].map((l) => (
              <a key={l} href={l === "Contact" ? "/#join" : `/#${l.toLowerCase()}`} className="font-accent text-xs underline-slide">{l}</a>
            ))}
          </nav>
          <p className="font-display text-3xl md:text-4xl leading-tight">
            You Are In <span className="text-ember italic">Control.</span>
          </p>
        </div>

        <div className="md:text-right space-y-6 md:flex md:flex-col md:items-end">
          <div className="flex gap-3 md:justify-end">
            {[Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 grid place-items-center border border-border rounded-full hover:border-ember hover:text-ember transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 grid place-items-center bg-ember rounded-full hover:shadow-[0_0_24px_var(--ember-glow)] transition-shadow"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
          <a 
            href="https://axistechgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-muted-foreground hover:text-ember focus:text-ember focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2 focus:ring-offset-background rounded transition-all"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}
