const items = [
  "Afrad Corporation",
  "Premium Interiors",
  "Sustainable Spaces",
  "Farm & Nature Design",
  "Est. 2010",
  "Dhaka, Bangladesh",
  "Award-Winning Team",
  "Bespoke Solutions",
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    <section className="bg-soil py-4 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 mx-6 font-montserrat text-xs uppercase tracking-[0.2em] whitespace-nowrap"
          >
            <span className="text-harvest">{item}</span>
            <span className="text-harvest/40">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
