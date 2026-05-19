const items = ["TRX", "Fly-Yoga", "Cycle", "Mind Body", "Stretching", "Body Shape", "Yoga", "Pilates", "Dance Mix", "Massage", "Swimming", "Bath"];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative py-10 border-y border-border overflow-hidden bg-background">
      <div className="flex animate-marquee whitespace-nowrap mb-4">
        {row.map((t, i) => (
          <span key={i} className="font-display text-6xl md:text-8xl px-8 inline-flex items-center gap-8 text-foreground">
            {t} <span className="w-3 h-3 rounded-full bg-ember" />
          </span>
        ))}
      </div>
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-6xl md:text-8xl px-8 inline-flex items-center gap-8 text-foreground/30">
            {t} <span className="w-3 h-3 rounded-full bg-ember/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
