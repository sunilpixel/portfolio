import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section
        className="border-t border-white/10 px-[var(--pad-x)] py-[clamp(5rem,14vh,11rem)] text-center"
        id="contact"
      >
        <span className="eyebrow reveal flex justify-center">
          Let&apos;s talk
        </span>
        <h2 className="reveal my-6 mb-10 font-display text-[clamp(2.6rem,9vw,8rem)] font-[340] leading-[0.98] tracking-[-0.02em]">
          Have a project <em className="not-italic text-[#ff5b35]">in mind?</em>
        </h2>
        <a
          href="mailto:kumarsuneel162@gmail.com"
          className="mail magnetic inline-block border-b-2 border-[#ff5b35] pb-1 font-display text-[clamp(1.3rem,3.5vw,2.4rem)] font-[400] italic text-[#f3ece1] transition-colors duration-300 hover:text-[#ff5b35]"
          data-cursor
        >
          kumarsuneel162@gmail.com
        </a>
        <div className="socials reveal mt-12 flex flex-wrap justify-center gap-8">
          <Link
            href="https://github.com/sunilpixel"
            className="magnetic font-mono text-xs uppercase tracking-[0.12em] text-[#8c8378] transition-colors duration-300 hover:text-[#f3ece1]"
            data-cursor
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/sunil-kumar-b49716285"
            className="magnetic font-mono text-xs uppercase tracking-[0.12em] text-[#8c8378] transition-colors duration-300 hover:text-[#f3ece1]"
            data-cursor
          >
            LinkedIn
          </Link>
          <Link
            href="tel:8628071510"
            className="magnetic font-mono text-xs uppercase tracking-[0.12em] text-[#8c8378] transition-colors duration-300 hover:text-[#f3ece1]"
            data-cursor
          >
            Call Us
          </Link>
        </div>
      </section>

      <footer className="flex flex-wrap justify-between gap-4 border-t border-white/10 px-[var(--pad-x)] py-10 font-mono text-xs uppercase tracking-[0.08em] text-[#8c8378]">
        <span>© 2026 Sunil — Frontend Developer</span>
        <span>Built with Next.js &amp; GSAP · Punjab, IN</span>
      </footer>
    </>
  );
}
