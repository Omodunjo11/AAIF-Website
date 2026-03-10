import Link from "next/link";

export default function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Fellowship", href: "/fellowship" },
    { name: "Projects", href: "/projects" },
    { name: "Partners", href: "/partners" },
    { name: "Leadership", href: "/leadership" },
    { name: "Apply", href: "/apply" },
  ];

  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">AAIF / CADER</div>
          <div className="footer-sub">
            Africa AI Fellowship
            <br />
            Center for AI, Digital Justice, and Economic Rights
            <br />
            2 Mwanza Close, Wuse Zone 3, Abuja
          </div>
        </div>

        <div>
          <div className="footer-links-title">Navigation</div>
          <ul className="footer-links-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-contact-title">Contact</div>
          <div className="footer-contact-item">
            fellowship@caderafrica.org
          </div>
          <div className="footer-contact-item">
            partnerships@caderafrica.org
          </div>
          <div className="footer-contact-item">
            emmanuel@caderafrica.org
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        Africa AI Fellowship — Cohort 1, 2026
      </div>
    </footer>
  );
}

