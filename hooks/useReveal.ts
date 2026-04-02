"use client";

import { useEffect, RefObject } from "react";

export default function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal all animated children
            const targets = entry.target.querySelectorAll(
              ".reveal, .reveal-left, .reveal-right, .reveal-scale, .text-clip"
            );
            targets.forEach((target) => target.classList.add("visible"));
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe the section itself and all child reveal elements
    const revealElements = el.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .text-clip"
    );

    // Also observe the section as a whole
    observer.observe(el);

    // Observe individual elements for staggered reveals
    revealElements.forEach((child) => {
      const childObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      childObserver.observe(child);
    });

    return () => observer.disconnect();
  }, [ref]);
}
