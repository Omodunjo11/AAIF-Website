import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | AAIF — Africa AI Fellowship",
  description:
    "Review the full 13-track project pool used by AAIF cohorts across governance, finance, health, trade, and civic innovation.",
};

const projectTracks = [
  {
    number: "01",
    title: "AI, Digital Justice and Economic Rights",
    sector: "Governance / Rights",
    description:
      "Decision-support tools, transparency systems, and operational workflows that reduce exclusion and arbitrariness in public systems.",
  },
  {
    number: "02",
    title: "Civic Venture Building",
    sector: "Civic Tech / Ventures",
    description:
      "Public problem-solving with startup discipline, producing MVPs, institutional pilots, and fundable pathways.",
  },
  {
    number: "03",
    title: "Public-Interest Information",
    sector: "Media / Information",
    description:
      "Verification workflows, misinformation countermeasures, and trust infrastructure tools for the information commons.",
  },
  {
    number: "04",
    title: "Remittance Integrity",
    sector: "Finance / Fintech",
    description:
      "Tools layered on remittance rails to improve pricing visibility, trace losses, and monitor downstream fund use.",
  },
  {
    number: "05",
    title: "Public Accountability",
    sector: "Governance / Finance",
    description:
      "Dashboards and protocols that make public and citizen-facing funds more traceable and contestable.",
  },
  {
    number: "06",
    title: "Economic Visibility and Opportunity",
    sector: "Economic Inclusion",
    description:
      "Identity-linked systems, training pathways, and scam protection tools that increase opportunity access.",
  },
  {
    number: "07",
    title: "Regulatory Intelligence",
    sector: "Regulation",
    description:
      "AI-enabled dashboards for oversight, anomaly detection, case triage, and compliance analytics.",
  },
  {
    number: "08",
    title: "Creator Economy Inclusion",
    sector: "Youth / Creative",
    description:
      "Shared AI tools and creator training models that lower entry barriers and support income generation.",
  },
  {
    number: "09",
    title: "Regional AI Strategy",
    sector: "Policy / Strategy",
    description:
      "Execution-ready regional strategy covering adoption priorities, governance, investment, and delivery roadmaps.",
  },
  {
    number: "10",
    title: "Continental Implementation Strategy",
    sector: "Continental / Institutional",
    description:
      "Africa-wide implementation agenda across informal sector structuring, health systems, and distributed manufacturing.",
  },
  {
    number: "11",
    title: "Primary Healthcare",
    sector: "Health",
    description:
      "Frontline healthcare tools including triage support, workflow optimization, reporting, and surveillance capabilities.",
  },
  {
    number: "12",
    title: "Trade Intelligence and Market Access",
    sector: "Trade / Logistics",
    description:
      "Solutions across sourcing, customs, logistics, storage, financing, and market access to reduce leakage and friction.",
  },
  {
    number: "13",
    title: "Women's Civic Leadership and Capacity",
    sector: "Gender / Civil Society",
    description:
      "AI-enabled capacity tools for women-led organizations to increase operational resilience, reach, and leadership.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="projects-hero">
        <div className="section-wrap">
          <div className="eyebrow fade-in">Applied Work</div>
          <h1 className="display-title fade-in">
            13 project tracks.
            <br />
            <em>Real problems.</em>
            <br />
            Live institutions.
          </h1>

          <div className="projects-intro-grid">
            <div className="fade-in">
              <p className="body-text">
                Fellows work in sectors where AI adoption is already underway. The
                program prioritizes deployment and institutional execution rather
                than foundational model research.
              </p>
            </div>

            <div className="activation-note fade-in">
              <strong>On activation:</strong> not all tracks run every cohort.
              Selection depends on fellow profile mix, host readiness, funding,
              data/tool access, and compliance requirements.
            </div>
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="section-wrap">
          <div className="eyebrow fade-in">The Project Pool</div>

          <div className="projects-all">
            {projectTracks.map((track) => (
              <article key={track.number} className="project-row fade-in">
                <div className="pr-number">{track.number}</div>
                <div className="pr-name">{track.title}</div>
                <div className="pr-description">{track.description}</div>
                <div className="pr-sector">{track.sector}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
