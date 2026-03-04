import { clientLogos } from "@/lib/data/testimonials";

export default function ClientLogos() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 bg-linen dark:bg-[#1a1a1a] border-y border-harvest/10 overflow-hidden">
      <div className="mb-8 text-center">
        <p className="font-montserrat text-stone text-xs uppercase tracking-[0.3em]">
          Trusted By
        </p>
      </div>

      <div
        className="marquee-track"
        style={{ animationDuration: "25s" }}
      >
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex items-center justify-center mx-10 group"
          >
            <span className="font-montserrat text-sm uppercase tracking-widest text-stone/40 group-hover:text-harvest transition-colors duration-300 whitespace-nowrap">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
