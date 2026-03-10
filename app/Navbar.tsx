"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.getElementById("nav");

    const handleScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    nav?.classList.add("scrolled");

    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav id="nav">
      <Link href="/" className="nav-wordmark">
        AAIF <span>/</span> CADER
      </Link>

      <ul className="nav-links">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive ? "active" : ""}
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
