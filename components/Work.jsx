import Image from "next/image";
import Link from "next/link";
import { PROJECTS, getShot } from "@/lib/data";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 11L11 3M11 3H5M11 3V9"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Work() {
  return (
    <section className="px-[var(--pad-x)] py-[clamp(3rem,8vh,6rem)]" id="work">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="eyebrow reveal">Selected Work</span>
          <h2 className="reveal font-display text-[clamp(2.4rem,6vw,5rem)] font-[340] leading-[1] tracking-[-0.02em]">
            Recent projects
          </h2>
        </div>
        <span className="reveal font-mono text-xs uppercase tracking-[0.12em] text-[#8c8378]">
          [ 09 — Case studies ]
        </span>
      </div>

      <div className="flex flex-col gap-[clamp(4rem,9vh,8rem)]">
        {PROJECTS.map((p) => {
          const cleanUrl = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
          return (
            <article
              className="project group grid items-center gap-[clamp(1.5rem,4vw,4rem)] max-[820px]:grid-cols-1 lg:grid-cols-2"
              key={p.title}
            >
              <Link
                className="project-media relative aspect-[16/11] overflow-hidden rounded-[14px] border border-white/10 bg-[var(--proj)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-view
                style={{ "--proj": p.theme }}
              >
                <div className="browserbar">
                  <i />
                  <i />
                  <i />
                  <span className="url">{cleanUrl}</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden">
                  <Image
                    className="project-shot h-full w-full scale-[1.04] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.12]"
                    src={getShot(p)}
                    alt={`${p.title} website preview`}
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                    unoptimized={!p.shot}
                  />
                </div>

                <div className="glow" />
              </Link>

              <div className="project-info py-4">
                <div className="row mb-4 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.12em] text-[#8c8378]">
                  <span className="text-[#ff5b35]">{p.cat}</span>
                  <span>/</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="mb-4 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-[360] leading-[1.02] tracking-[-0.015em]">
                  {p.title}
                </h3>
                <p className="mb-6 max-w-[46ch] text-[#cfc6b8]">{p.desc}</p>
                <div className="mb-7 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.04em] text-[#cfc6b8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  className="visit magnetic inline-flex items-center gap-2.5 border-b border-[#ff5b35] pb-1 font-mono text-xs uppercase tracking-[0.08em] text-[#f3ece1] transition-[gap,color] duration-300 hover:gap-4 hover:text-[#ff5b35]"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                >
                  View live site
                  <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
