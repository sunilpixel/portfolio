"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Page() {
  const root = useRef(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const noHover = window.matchMedia("(hover: none)").matches;

      /* ---- Split hero words into characters ---- */
      gsap.utils.toArray("#heroTitle .word").forEach((word) => {
        const text = word.textContent;
        word.textContent = "";
        [...text].forEach((ch) => {
          const span = document.createElement("span");
          span.className = "char";
          span.textContent = ch;
          word.appendChild(span);
        });
      });

      /* ---- Master timeline: preloader -> hero intro ---- */
      const master = gsap.timeline();
      const counter = { v: 0 };
      const countEl = document.getElementById("loaderCount");

      master
        .to(counter, {
          v: 100,
          duration: reduce ? 0 : 1.6,
          ease: "power2.inOut",
          onUpdate: () => {
            if (countEl) countEl.textContent = Math.round(counter.v);
          },
        })
        .to("#loaderBar", { width: "100%", duration: reduce ? 0 : 1.6, ease: "power2.inOut" }, 0)
        .to("#loader", { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, ">-0.1")
        .from("#heroTitle .char", { yPercent: 120, duration: 1.05, stagger: 0.028, ease: "power4.out" }, "-=0.45")
        .from(".hero .eyebrow", { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.8")
        .from(".hero-meta p", { y: 24, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from(".hero-meta .avail", { y: 24, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.7")
        .from("header", { y: -30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.9")
        .from(".hero .blob", { scale: 0, opacity: 0, duration: 1.4, stagger: 0.15, ease: "power3.out" }, 0.4);

      /* ---- Drifting blobs ---- */
      gsap.to(".blob.b1", { x: 60, y: 40, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".blob.b2", { x: -50, y: -30, duration: 11, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".blob.b3", { x: 40, y: -50, duration: 13, repeat: -1, yoyo: true, ease: "sine.inOut" });

      /* ---- Hero mouse-parallax ---- */
      if (!noHover) {
        const bg = document.getElementById("heroBg");
        const title = document.getElementById("heroTitle");
        const onMove = (e) => {
          const dx = e.clientX / window.innerWidth - 0.5;
          const dy = e.clientY / window.innerHeight - 0.5;
          gsap.to(bg, { x: dx * 60, y: dy * 60, duration: 1, ease: "power2.out" });
          gsap.to(title, { x: dx * 22, y: dy * 16, duration: 1, ease: "power2.out" });
        };
        window.addEventListener("mousemove", onMove);
      }

      /* ---- Magnetic buttons ---- */
      if (!noHover) {
        gsap.utils.toArray(".magnetic").forEach((el) => {
          const strength = 22;
          el.addEventListener("mousemove", (e) => {
            const r = el.getBoundingClientRect();
            const x = ((e.clientX - r.left - r.width / 2) / r.width) * strength;
            const y = ((e.clientY - r.top - r.height / 2) / r.height) * strength;
            gsap.to(el, { x, y, duration: 0.5, ease: "power3.out" });
          });
          el.addEventListener("mouseleave", () =>
            gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,.4)" })
          );
        });
      }

      /* ---- Scroll progress bar ---- */
      gsap.to("#scrollProgress", {
        width: "100%",
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
      });

      /* ---- Generic scroll reveals ---- */
      gsap.utils.toArray(".reveal").forEach((el) => {
        if (el.closest(".hero")) return;
        gsap.from(el, {
          y: 40, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      /* ---- About heading: line-by-line mask reveal ---- */
      gsap.from(".about-grid h2 .line > span", {
        yPercent: 110, duration: 1, stagger: 0.12, ease: "power4.out",
        scrollTrigger: { trigger: ".about-grid h2", start: "top 85%" },
      });

      /* ---- Project info reveal + image clip-path wipe ---- */
      gsap.utils.toArray(".project").forEach((card) => {
        const media = card.querySelector(".project-media");
        gsap.set(media, { clipPath: "inset(0% 0% 100% 0%)" });
        gsap.to(media, {
          clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: card, start: "top 80%" },
        });
        gsap.from(card.querySelector(".project-info"), {
          y: 40, opacity: 0, duration: 1, delay: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 80%" },
        });
      });

      /* ---- Screenshot parallax ---- */
      gsap.utils.toArray(".project-shot").forEach((img) => {
        gsap.to(img, {
          yPercent: -8, ease: "none",
          scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      /* ---- Skew project media by scroll velocity ---- */
      const proxy = { skew: 0 };
      const setter = gsap.quickSetter(".project-media", "skewY", "deg");
      const clamp = gsap.utils.clamp(-7, 7);
      ScrollTrigger.create({
        onUpdate: (self) => {
          const sk = clamp(self.getVelocity() / -320);
          if (Math.abs(sk) > Math.abs(proxy.skew)) {
            proxy.skew = sk;
            gsap.to(proxy, { skew: 0, duration: 0.7, ease: "power3", onUpdate: () => setter(proxy.skew) });
          }
        },
      });

      /* ---- Count-up stats ---- */
      gsap.utils.toArray("[data-count]").forEach((el) => {
        const end = +el.getAttribute("data-count");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end, duration: 1.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => { el.textContent = Math.round(obj.v); },
        });
      });

      /* ---- Tech marquee: infinite loop, direction follows scroll ---- */
      const track = document.getElementById("marquee");
      if (track) {
        const loop = gsap.to(track, { xPercent: -50, repeat: -1, ease: "none", duration: 22 });
        ScrollTrigger.create({
          trigger: ".marquee", start: "top bottom", end: "bottom top",
          onUpdate: (self) =>
            gsap.to(loop, { timeScale: self.direction, overwrite: true, duration: 0.4 }),
        });
      }

      /* thum.io waits server-side for each page's loader/animation to finish
         before capturing, so no client-side thumbnail retry is needed. */
      ScrollTrigger.refresh();
    },
    { scope: root }
  );

  return (
    <main ref={root}>
      <Loader />
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Stack />
      <Contact />
    </main>
  );
}
