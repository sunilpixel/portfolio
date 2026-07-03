export default function About() {
  return (
    <section
      className="px-[var(--pad-x)] py-[clamp(5rem,12vh,10rem)]"
      id="about"
    >
      <div className="about-grid grid items-start gap-[clamp(2rem,6vw,6rem)] max-[820px]:grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <span className="eyebrow reveal">About</span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3.4rem)] font-[340] leading-[1.08] tracking-[-0.01em]">
            <span className="line">
              <span>
                I build the{" "}
                <em className="not-italic text-[#e7b75a]">front of</em>
              </span>
            </span>
            <span className="line">
              <span>
                <em className="not-italic text-[#e7b75a]">the internet</em> —
                pixel-precise,
              </span>
            </span>
            <span className="line">
              <span>performant &amp; alive with motion.</span>
            </span>
          </h2>
        </div>

        <div className="about-copy">
          <p className="reveal mb-4 text-base text-[#cfc6b8]">
            I&apos;ve delivered <strong>120+ projects</strong> — production
            sites and web apps for contractors, hypercar dealers, telemedicine
            platforms, drink brands and real-estate marketplaces. My focus is
            the craft layer: clean component architecture, buttery scroll &amp;
            transition design, and Lighthouse scores that actually hold up.
          </p>
          <p className="reveal mb-4 text-base text-[#cfc6b8]">
            I translate Figma into responsive, accessible code, then bring it to
            life with considered animation that supports the story instead of
            fighting it.
          </p>

          <div className="stats mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
            <div className="stat reveal">
              <div className="num font-display text-[clamp(2.4rem,5vw,3.6rem)] font-[400] leading-[1] text-[#f3ece1]">
                <span data-count="120">0</span>
                <span className="text-[#ff5b35]">+</span>
              </div>
              <div className="lbl mt-2 font-mono text-xs uppercase tracking-[0.1em] text-[#8c8378]">
                Projects delivered
              </div>
            </div>
            <div className="stat reveal">
              <div className="num font-display text-[clamp(2.4rem,5vw,3.6rem)] font-[400] leading-[1] text-[#f3ece1]">
                <span data-count="7">0</span>
                <span className="text-[#ff5b35]">+</span>
              </div>
              <div className="lbl mt-2 font-mono text-xs uppercase tracking-[0.1em] text-[#8c8378]">
                Industries served
              </div>
            </div>
            <div className="stat reveal">
              <div className="num font-display text-[clamp(2.4rem,5vw,3.6rem)] font-[400] leading-[1] text-[#f3ece1]">
                <span data-count="100">0</span>
                <span className="text-[#ff5b35]">%</span>
              </div>
              <div className="lbl mt-2 font-mono text-xs uppercase tracking-[0.1em] text-[#8c8378]">
                Hand-coded UI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
