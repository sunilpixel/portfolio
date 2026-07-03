import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-[var(--pad-x)] py-6 mix-blend-difference">
      <Link
        href="#top"
        className="magnetic flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em]"
      >
        <span className="h-[9px] w-[9px] rounded-full bg-[#ff5b35]" />
        SUNIL.DEV
      </Link>
      <nav className="hidden gap-9 md:flex">
        <Link
          href="#work"
          className="nav-link magnetic font-mono text-xs uppercase tracking-[0.12em]"
          data-cursor
        >
          Work
        </Link>
        <Link
          href="#about"
          className="nav-link magnetic font-mono text-xs uppercase tracking-[0.12em]"
          data-cursor
        >
          About
        </Link>
        <Link
          href="#stack"
          className="nav-link magnetic font-mono text-xs uppercase tracking-[0.12em]"
          data-cursor
        >
          Stack
        </Link>
        <Link
          href="#contact"
          className="nav-link magnetic font-mono text-xs uppercase tracking-[0.12em]"
          data-cursor
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
