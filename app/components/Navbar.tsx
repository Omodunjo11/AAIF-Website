"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let ticking = false;

    const updateScrollState = () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Correct initial state
    updateScrollState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Fellowship", href: "/fellowship" },
    { name: "Projects", href: "/projects" },
    { name: "Partners", href: "/partners" },
    { name: "Leadership", href: "/leadership" },
  ];

  return (
    <nav ref={navRef}>
      <Link href="/" className="nav-wordmark">
        AAIF <span>/</span> CADER
      </Link>

      <ul className="nav-links">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" &&
              pathname.startsWith(item.href + "/"));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive ? "active" : undefined}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link href="/apply" className="nav-apply-btn">
        Apply
      </Link>
    </nav>
  );
}

