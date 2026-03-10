export default function AboutPage() {
  return (
    <>
        {/* ================= ABOUT HERO ================= */}
        <section className="about-hero">
          <div className="section-wrap">
            <div className="eyebrow">About CADER & AAIF</div>
            <h1 className="display-title">
              Building the institutional
              <br />
              foundations for Africa&apos;s
              <br />
              <em>digital future</em>
            </h1>
  
            <p
              className="body-text"
              style={{ maxWidth: "620px", marginTop: "2rem" }}
            >
              The Center for AI, Digital Justice, and Economic Rights is a
              permanent, public-interest institution. AAIF is one expression of
              its broader mandate.
            </p>
          </div>
        </section>
  
        {/* ================= MISSION ================= */}
        <section style={{ background: "var(--ink)" }}>
          <div className="section-wrap">
            <div className="about-mission-grid">
              <div>
                <div className="eyebrow">Mission</div>
                <h2 className="display-title">
                  Equitable,
                  <br />
                  rights-respecting,
                  <br />
                  <em>economically inclusive</em>
                </h2>
  
                <p className="body-text" style={{ marginTop: "2rem" }}>
                  CADER exists to ensure that Africa&apos;s transition into the
                  digital and AI-driven global economy is not extractive or
                  destabilising.
                </p>
  
                <p className="body-text">
                  The rapid advancement of AI and digital systems must not
                  entrench inequality, exclude vulnerable populations, or
                  undermine long-term prosperity in emerging economies.
                </p>
  
                <p className="body-text">
                  CADER bridges the gap between how technology is built and how it
                  affects people&apos;s lives at scale.
                </p>
              </div>
  
              <div>
                <div className="eyebrow">Core Focus Areas</div>
  
                <div className="cader-pillars">
                  <div className="cader-pillar">
                    <div className="cp-num">01</div>
                    <div>
                      <div className="cp-title">
                        Artificial Intelligence
                      </div>
                      <div className="cp-text">
                        Ensuring AI systems used in public life are transparent,
                        accountable, and aligned with democratic values.
                      </div>
                    </div>
                  </div>
  
                  <div className="cader-pillar">
                    <div className="cp-num">02</div>
                    <div>
                      <div className="cp-title">Digital Justice</div>
                      <div className="cp-text">
                        Protecting citizens as states digitise services,
                        decision-making, and administrative control.
                      </div>
                    </div>
                  </div>
  
                  <div className="cader-pillar">
                    <div className="cp-num">03</div>
                    <div>
                      <div className="cp-title">Economic Rights</div>
                      <div className="cp-text">
                        Safeguarding livelihoods and inclusion as taxation,
                        welfare, labour, and markets become digitally mediated.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* ================= LINEAGE ================= */}
        <section className="lineage-section">
          <div className="section-wrap">
            <div className="eyebrow">Institutional Lineage</div>
            <h2 className="display-title">
              Built on seven years of
              <br />
              <em>serious policy work</em>
            </h2>
  
            <div className="lineage-timeline">
              <div className="timeline-item">
                <div className="ti-year">2017</div>
                <div>
                  <div className="ti-title">
                    Abuja School of Social and Political Thought Founded
                  </div>
                  <div className="ti-text">
                    Established as one of Nigeria&apos;s most respected
                    independent policy institutions convening senior scholars,
                    policymakers, and regulators.
                  </div>
                </div>
              </div>
  
              <div className="timeline-item">
                <div className="ti-year">2024</div>
                <div>
                  <div className="ti-title">
                    Recognition of the AI Governance Gap
                  </div>
                  <div className="ti-text">
                    Identified a growing institutional vacuum in AI governance
                    across Africa&apos;s digital infrastructure transition.
                  </div>
                </div>
              </div>
  
              <div className="timeline-item">
                <div className="ti-year">2025</div>
                <div>
                  <div className="ti-title">CADER Founded</div>
                  <div className="ti-text">
                    The Center for AI, Digital Justice, and Economic Rights
                    established as a permanent institutional platform.
                  </div>
                </div>
              </div>
  
              <div className="timeline-item">
                <div className="ti-year">2026</div>
                <div>
                  <div className="ti-title">
                    Africa AI Fellowship Cohort 1 Launches
                  </div>
                  <div className="ti-text">
                    First cohort of fellows begin deployment inside live
                    institutions in Abuja, Nigeria.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
