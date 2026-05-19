const items = ["4 Clubs", "45 Min Workout", "500+ Members", "12+ Classes", "Est. 2018", "4 Clubs", "Open 24/7"];

export function StatsBand() {
  const row = [...items, ...items, ...items];
  return (
    <div className="bg-ember overflow-hidden py-4 border-y border-ember">
      <div className="flex animate-marquee-reverse whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl px-8 inline-flex items-center gap-8 text-black">
            {t} <span className="text-black/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
