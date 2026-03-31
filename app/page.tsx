import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AAIF — Africa AI Fellowship",
  description:
    "A selective, fully funded applied fellowship by CADER for AI, social impact, and venture execution in Abuja, Nigeria.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-canvas">
          <svg
            viewBox="0 0 1400 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="rg1" cx="70%" cy="40%">
                <stop offset="0%" stopColor="#355f43" stopOpacity="0.48" />
                <stop offset="100%" stopColor="#0c0c0b" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="rg2" cx="20%" cy="80%">
                <stop offset="0%" stopColor="#c9a45b" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#0c0c0b" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="1400" height="900" fill="#0c0c0b" />
            <rect width="1400" height="900" fill="url(#rg1)" />
            <rect width="1400" height="900" fill="url(#rg2)" />

            <text
              x="680"
              y="780"
              fontFamily="Cormorant Garamond, serif"
              fontSize="660"
              fill="rgba(205, 171, 97, 0.08)"
              fontWeight="300"
              textAnchor="middle"
            >
              A
            </text>
          </svg>
        </div>

        <div className="hero-left fade-in">
          <div className="hero-overline">
            Est. 2025 • Abuja, Nigeria • Cohort 1 — June 2026
          </div>

          <h1 className="hero-h1">
            Africa
            <br />
            <span className="hero-italic">AI</span>
            <br />
            Fellowship
          </h1>

          <p className="hero-tagline">
            A selective, fully funded fellowship where fellows deploy AI in
            live environments across government, private sector, and civil
            society.
          </p>

          <div className="hero-actions">
            <Link href="/apply" className="btn-gold">
              Apply now (priority deadline: April 1, 2026)
            </Link>

            <Link href="/fellowship" className="btn-ghost">
              Explore the Fellowship
            </Link>
          </div>

          <div className="quick-glance">
            <div className="glance-card">
              <strong>Tracks</strong>
              <span>Associate (3 months) and Full (6 months)</span>
            </div>
            <div className="glance-card">
              <strong>Support</strong>
              <span>Stipend, housing, flights, meals, and visa covered</span>
            </div>
            <div className="glance-card">
              <strong>Host</strong>
              <span>CADER, Center for AI, Digital Justice and Economic Rights</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-wrap">
          <div className="eyebrow fade-in">Fellowship At A Glance</div>
          <div className="home-facts-grid">
            {[
              ["Start Date", "June 1, 2026"],
              ["Location", "Abuja, Nigeria (fully residential)"],
              ["Format", "In-person"],
              ["Focus", "AI, Social Impact, Ventures"],
              ["Application", "Resume + cover letter to fellowship@caderafrica.org"],
              ["Primary Contact", "Emmanuel Orjih, Founding Director"],
            ].map(([key, value]) => (
              <article className="fact-card fade-in" key={key}>
                <h3>{key}</h3>
                <p>{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="alt-surface">
        <div className="section-wrap">
          <div className="eyebrow fade-in">For University Partners</div>
          <div className="split-panel">
            <div className="fade-in">
              <h2 className="display-title">
                Frontier experience
                <br />
                for the AI era.
              </h2>
              <p className="body-text">
                The program gives students applied work at the intersection of AI
                governance, digital justice, and economic development in
                fast-moving, resource-constrained environments.
              </p>
            </div>
            <ul className="bullet-list fade-in">
              <li>Portfolio-grade outputs: policy briefs, prototypes, and tools</li>
              <li>Field exposure across public, civic, and commercial institutions</li>
              <li>Access to cross-country networks and emerging talent pipelines</li>
              <li>Professional signaling for policy, tech, and development careers</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
