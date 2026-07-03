import { SKILLS } from "@/lib/data";

export default function Stack() {
  return (
    <section className="px-[var(--pad-x)] stack" id="stack">
      <span className="eyebrow reveal">Capabilities</span>
      <h2 className="reveal my-5 mb-12 max-w-[16ch] font-display text-[clamp(2rem,5vw,4rem)] font-[340] leading-[1.05] tracking-[-0.015em]">
        The tools I reach for to ship{" "}
        <em className="not-italic text-[#ff5b35]">distinctive</em> interfaces.
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-0 border-t border-white/10">
        {SKILLS.map(([idx, name, sub]) => (
          <div
            className="skill reveal flex items-baseline gap-4 border-b border-white/10 px-1 py-6"
            key={idx}
          >
            <span className="font-mono text-xs text-[#8c8378]">{idx}</span>
            <span className="font-display text-2xl font-[360]">
              {name}{" "}
              <em className="text-base not-italic text-[#cfc6b8]">{sub}</em>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
