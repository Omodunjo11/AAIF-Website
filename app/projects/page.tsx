export default function ProjectsPage() {
  return (
    <>
      {/* ================= PROJECTS PAGE ================= */}
      <section className="projects-hero">
        <div className="section-wrap">
          <div className="eyebrow">Applied Work</div>
          <h1 className="display-title">
            13 project tracks.
            <br />
            <em>Real problems.</em>
            <br />
            Live institutions.
          </h1>

          <div className="projects-intro-grid">
            <div>
              <p className="body-text">
                Fellows engage in hands-on work across sectors where AI is actively being deployed.
                The focus is applied deployment, not foundational research.
              </p>
            </div>

            <div className="activation-note">
              <strong>On Activation:</strong> Not all tracks activate every cohort.
              Selection depends on fellow skills, funding, deployment feasibility,
              and compliance readiness.
            </div>
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="section-wrap">
          <div className="eyebrow">The Project Pool</div>

          <div className="projects-all">
            {[
              ["01", "AI, Digital Justice and Economic Rights", "Governance / Rights"],
              ["02", "Civic Venture Building", "Civic Tech / Ventures"],
              ["03", "Public-Interest Information", "Media / Information"],
              ["04", "Remittance Integrity", "Finance / Fintech"],
              ["05", "Public Accountability", "Governance / Finance"],
              ["06", "Economic Visibility and Opportunity", "Economic Rights"],
              ["07", "Regulatory Intelligence", "Regulation / Governance"],
              ["08", "Creator Economy Inclusion", "Youth / Creative Economy"],
              ["09", "Regional AI Strategy", "Policy / Strategy"],
              ["10", "Continental Implementation Strategy", "Continental / Policy"],
              ["11", "Primary Healthcare", "Health"],
              ["12", "Trade Intelligence and Market Access", "Trade / Logistics"],
              ["13", "Women's Civic Leadership and Capacity", "Gender / Civil Society"],
            ].map(([num, title, sector]) => (
              <div key={num} className="project-row">
                <div className="pr-number">{num}</div>

                <div className="pr-name">{title}</div>

                <div className="pr-description">
                  Live institutional deployment using AI tools to address structural
                  constraints and unlock sector-level improvements across Africa.
                </div>

                <div className="pr-sector">{sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

