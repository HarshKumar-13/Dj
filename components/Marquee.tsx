"use client";

export default function Marquee() {
  const items = [
    "Handcrafted Excellence",
    "Bespoke Footwear",
    "Italian Leather",
    "Goodyear Welted",
    "Tailored Apparel",
    "Custom Lasts",
    "Master Craftsmen",
    "Timeless Design",
  ];

  return (
    <section className="bg-navy-500 py-5 overflow-hidden">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 font-body text-[0.65rem] font-medium tracking-[0.3em] uppercase text-white/40 whitespace-nowrap"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </span>
        ))}
      </div>
    </section>
  );
}
