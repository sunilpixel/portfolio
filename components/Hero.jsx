export default function Hero() {
  return (
    <section
      className="hero relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-[var(--pad-x)] pb-12 pt-24"
      id="top"
    >
      {/* drifting aurora blobs (animated in page.js) */}
      <div className="hero-bg" id="heroBg">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <div className="mb-6 flex flex-wrap items-end justify-between gap-8">
        <span className="eyebrow reveal">Frontend Developer — Est. 2025</span>
      </div>

      <h1
        id="heroTitle"
        className="font-display text-[clamp(3rem,11.5vw,11rem)] font-[360] leading-[0.92] tracking-[-0.02em]"
      >
        <span className="word inline-block overflow-hidden align-top">
          Building
        </span>{" "}
        <span className="word accent inline-block overflow-hidden align-top font-[500] italic text-[#ff5b35]">
          fluid
        </span>{" "}
        <span className="word inline-block overflow-hidden align-top">web</span>
        <br />
        <span className="word inline-block overflow-hidden align-top">
          experiences.
        </span>
      </h1>

      <div className="hero-meta mt-10 flex flex-wrap items-end justify-between gap-8 border-t border-white/10 pt-6">
        <p className="reveal max-w-[42ch] text-base text-[#cfc6b8]">
          I&apos;m a frontend developer turning ambitious designs into fast,
          accessible, motion-rich interfaces — built with Next.js, React &amp;
          GSAP across SaaS, luxury, healthcare &amp; commerce.
        </p>
        <span className="avail reveal flex items-center gap-2.5 whitespace-nowrap font-mono text-xs uppercase tracking-[0.1em] text-[#8c8378]">
          <span className="pulse" /> Available for new work
        </span>
      </div>
    </section>
  );
}
