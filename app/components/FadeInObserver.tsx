"use client";

import { useEffect } from "react";

export default function FadeInObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const timeout = setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 60);

            timeouts.push(timeout);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return null;
}

