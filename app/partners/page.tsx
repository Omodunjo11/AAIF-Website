export default function PartnersPage() {
  return (
    <>
      {/* ================= PARTNERS PAGE ================= */}
      <section className="partners-hero">
        <div className="section-wrap">
          <div className="eyebrow">Partner Ecosystem</div>
          <h1 className="display-title">
            Every layer of the
            <br />
            institutional environment
            <br />
            <em>where AI will be deployed</em>
          </h1>

          <p className="body-text" style={{ maxWidth: "680px", marginTop: "2rem" }}>
            The programme operates through a broad partner network across
            universities, federal institutions, civil society, continental bodies,
            and private sector actors.
          </p>
        </div>
      </section>

      <section>
        <div className="section-wrap">
          <div className="partner-tiers">
            {[
              ["Academic Partners", "Universities and Research Institutions"],
              ["Government Partners", "Federal and Subnational Government"],
              ["Civil Society Partners", "NGOs and Public-Interest Organisations"],
              ["Continental Bodies", "Pan-African Institutions"],
              ["Private Sector", "Technology and Commercial Partners"],
            ].map(([label, title]) => (
              <div key={label} className="partner-tier">
                <div>
                  <div className="pt-tier-label">{label}</div>
                  <div className="pt-tier-title">{title}</div>
                  <div className="pt-tier-role">
                    Institutional collaboration enabling live AI deployment
                    and long-term capacity building.
                  </div>
                </div>

                <div className="pt-tier-cards">
                  <div className="pt-card">
                    <div className="pt-card-name">Partnerships forming</div>
                    <div className="pt-card-type">Engagement ongoing</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

