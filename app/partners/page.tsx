import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | AAIF — Africa AI Fellowship",
  description:
    "Partner categories and strategic value of AAIF for universities, government, civil society, and private sector collaborators.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="partners-hero">
        <div className="section-wrap">
          <div className="eyebrow fade-in">Partner Ecosystem</div>
          <h1 className="display-title fade-in">
            Every layer of the
            <br />
            institutional environment
            <br />
            <em>where AI will be deployed</em>
          </h1>

          <p className="body-text fade-in">
            AAIF is designed as a networked operating model. Fellows execute
            inside university, government, civil society, regional, and private
            sector contexts.
          </p>
        </div>
      </section>

      <section>
        <div className="section-wrap">
          <div className="partner-tiers">
            {[
              ["Tier 1 Nigerian Universities", "Talent pipelines and co-supervision partners"],
              ["Civil Society & iNGOs", "Citizen-facing deployment environments"],
              ["National Government", "Federal innovation and public service deployments"],
              ["Subnational Government", "State and local implementation contexts"],
              ["Continental & Regional Bodies", "Pan-African and West African strategy channels"],
              ["Private Sector", "Commercial deployment and product adoption partners"],
            ].map(([label, title]) => (
              <div key={label} className="partner-tier fade-in">
                <div>
                  <div className="pt-tier-label">{label}</div>
                  <div className="pt-tier-title">{title}</div>
                  <div className="pt-tier-role">
                    Institutional collaboration for live deployment, skills
                    transfer, and long-term capacity building.
                  </div>
                </div>

                <div className="pt-tier-cards">
                  <div className="pt-card">
                    <div className="pt-card-name">Active engagement pipeline</div>
                    <div className="pt-card-type">Cohort-linked deployment model</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="university-value-grid">
            <div className="fade-in">
              <div className="eyebrow">University Value</div>
              <h2 className="display-title">
                A practical partner model
                <br />
                for career services and faculty.
              </h2>
            </div>
            <ul className="bullet-list fade-in">
              <li>Career pathways in AI governance and responsible technology</li>
              <li>Field data and project contexts for applied research</li>
              <li>High-signal global experience for student talent</li>
              <li>Low curriculum risk with strong institutional supervision</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
