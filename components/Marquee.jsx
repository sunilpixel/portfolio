import { MARQUEE_ITEMS } from "@/lib/data";

export default function Marquee() {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-white/10 py-6">
      <div
        className="marquee-track inline-flex gap-14 will-change-transform"
        id="marquee"
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-14 font-display text-[clamp(1.6rem,4vw,3rem)] font-[340] not-italic text-[#cfc6b8]"
          >
            {item}
            <span
              aria-hidden="true"
              className="text-[0.7em] not-italic text-[#ff5b35]"
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
