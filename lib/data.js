/* =====================================================================
   PORTFOLIO DATA
   ---------------------------------------------------------------------
   Screenshots: by default each card shows a LIVE thumbnail captured by
   thum.io. The `wait` value tells the service how many seconds to wait
   so the site's loader / intro animation finishes BEFORE the capture.

   ✅ Best quality: drop your own screenshot into /public/screenshots/
      and set `shot` on that project, e.g. shot: "/screenshots/zona.jpg".
      Local images are served through next/image (optimised).
   ===================================================================== */

export const PROJECTS = [
  {
    title: "Contractor+",
    cat: "SaaS Platform",
    year: "2025",
    url: "https://contractorplus.app/",
    desc: "The operating system for build & service contractors — AI estimates, smart scheduling, crew management and auto-invoicing unified into one platform.",
    tags: ["Next.js", "React", "Framer Motion", "S3 Media", "SaaS"],
    theme: "linear-gradient(135deg,#0b2447,#14538b 60%,#1f6fb2)",
    wait: 8,
    // shot: "/screenshots/contractor-plus.jpg",
  },
  {
    title: "Starworks Studio",
    cat: "Creative Agency",
    year: "2026",
    url: "https://star-works-iota.vercel.app/",
    desc: "A design-driven studio site built around immersive scroll storytelling, fluid section transitions and a kinetic project showcase.",
    tags: ["Next.js", "GSAP", "Sanity CMS", "Tailwind"],
    theme: "linear-gradient(135deg,#1a1a1a,#3a2a18 55%,#ff6a2b)",
    wait: 13, // heavy intro / webm loader
    // shot: "/screenshots/starworks.jpg",
  },
  {
    title: "Elite Group Holdings",
    cat: "Luxury · Corporate",
    year: "2024",
    url: "https://elite-cars-eight.vercel.app/",
    desc: "A UAE holding group spanning automotive, real estate, healthcare & investments — a cinematic, video-led corporate experience.",
    tags: ["Next.js", "GSAP", "Video Hero", "Swiper"],
    theme: "linear-gradient(135deg,#0a0a0a,#1c1c1c 50%,#b89456)",
    wait: 13, // video hero needs time
    // shot: "/screenshots/elite.jpg",
  },
  {
    title: "Zona Seltzer",
    cat: "Beverage Brand",
    year: "2025",
    url: "https://zona-drink-1.vercel.app/",
    desc: "Angola's first hard-seltzer brand — a vibrant product landing page with playful splash motion and a punchy, fizzy art direction.",
    tags: ["Next.js", "GSAP", "Lenis", "Product"],
    theme: "linear-gradient(135deg,#063b3a,#0d8f7e 55%,#aef05a)",
    wait: 14, // loader video on entry
    // shot: "/screenshots/zona.jpg",
  },
  {
    title: "CertifyMed",
    cat: "Telemedicine",
    year: "2025",
    url: "https://certifymed-ecru.vercel.app/",
    desc: "A telemedicine platform connecting patients with verified doctors over chat, audio and video — with separate doctor & patient dashboards.",
    tags: ["Next.js", "React", "Tailwind", "Dashboards"],
    theme: "linear-gradient(135deg,#0a2e2a,#13796b 55%,#36c9b0)",
    wait: 10,
    // shot: "/screenshots/certifymed.jpg",
  },
  {
    title: "NichtraucherHelden",
    cat: "Health App",
    year: "2025",
    url: "https://nrh-nine.vercel.app/",
    desc: "A CE-certified German 'app auf Rezept' guiding users to a smoke-free life through coaching videos — clinical, trustworthy and warm.",
    tags: ["Next.js", "Swiper", "i18n", "Responsive"],
    theme: "linear-gradient(135deg,#08234a,#1d62c4 55%,#6fb6ff)",
    wait: 9,
    // shot: "/screenshots/nrh.jpg",
  },
  {
    title: "Empire Render",
    cat: "3D Visualisation",
    year: "2026",
    url: "https://empire-render.vercel.app/",
    desc: "A premium 3D product & architectural visualisation platform featuring an interactive 360° gallery and scroll-synced frame sequences.",
    tags: ["Next.js", "GSAP", "Canvas", "WebGL"],
    theme: "linear-gradient(135deg,#0c0f12,#13343b 55%,#2fd4c9)",
    wait: 14, // "Loading frames..." sequence
    // shot: "/screenshots/empire-render.jpg",
  },
  {
    title: "Bill Fairies",
    cat: "Fintech Dashboard",
    year: "2024",
    url: "https://bill-fairies.vercel.app/",
    desc: "A bill-payment & voucher-management dashboard with rich data tables, transaction states and balance analytics for finance teams.",
    tags: ["Next.js", "React", "Data Tables", "Charts"],
    theme: "linear-gradient(135deg,#171033,#4a2db0 55%,#9d7bff)",
    wait: 11, // dashboard data loads async
    // shot: "/screenshots/bill-fairies.jpg",
  },
  {
    title: "BariDekho",
    cat: "Real Estate",
    year: "2026",
    url: "https://baridekho-development.vercel.app/",
    desc: "A property marketplace to buy, sell & rent homes — with neighbourhood discovery, smart filtering and a free property-listing flow.",
    tags: ["Next.js", "React", "Tailwind", "Marketplace"],
    theme: "linear-gradient(135deg,#10231a,#1f7a4d 55%,#62d98a)",
    wait: 11,
    // shot: "/screenshots/baridekho.jpg",
  },
];

export const SKILLS = [
  ["01", "HTML5", "semantic"],
  ["02", "CSS3", "modern"],
  ["03", "JavaScript", "ES2024"],
  ["04", "React", "components"],
  ["05", "Next.js", "app router"],
  ["06", "Tailwind CSS", "utility"],
  ["07", "GSAP", "scrolltrigger"],
  ["08", "Framer Motion", "react"],
  ["09", "Webflow", "no-code"],
  ["10", "GitHub", "ci / cd"],
];

export const MARQUEE_ITEMS = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Webflow",
  "GitHub",
];

/* Build a screenshot URL: prefer a local image, else a waited live capture. */
export function getShot(p) {
  if (p.shot) return p.shot;
  const wait = p.wait ?? 8;
  return `https://image.thum.io/get/wait/${wait}/width/1280/${p.url}`;
}
