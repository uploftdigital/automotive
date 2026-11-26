"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove("awaiting-reveal");
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -32px", threshold: 0.04 });

    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("awaiting-reveal");
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("awaiting-reveal"));
    };
  }, []);

  return null;
}
