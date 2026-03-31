"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FadeInObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-in")
    );

    // Assign deterministic DOM-based delay
    elements.forEach((el, i) => {
      el.style.setProperty("--stagger-delay", `${i * 60}ms`);
      el.dataset.animated = "false";
      el.classList.remove("visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (!entry.isIntersecting) return;
          if (el.dataset.animated === "true") return;

          el.classList.add("visible");
          el.dataset.animated = "true";
          observer.unobserve(el);
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
