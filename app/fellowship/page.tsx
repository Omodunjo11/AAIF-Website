export default function FellowshipPage() {
  return (
    <>
      {/* ================= FELLOWSHIP PAGE ================= */}
      <section className="fellow-hero">
        <div className="section-wrap">
          <div className="eyebrow">The Fellowship Experience</div>
          <h1 className="display-title">
            A structured, applied
            <br />
            leadership platform.
            <br />
            <em>Not a course.</em>
          </h1>

          <p className="body-text" style={{ maxWidth: "620px", marginTop: "2rem" }}>
            Fellows work on live deployments inside real institutional environments,
            producing outputs designed for immediate adoption.
          </p>
        </div>
      </section>

      {/* TRACKS */}
      <section style={{ background: "var(--ink)" }}>
        <div className="section-wrap">
          <div className="eyebrow">Two Tracks</div>
          <h2 className="display-title">
            Choose your
            <br />
            <em>commitment level</em>
          </h2>

          <div className="fellow-tracks-grid" style={{ marginTop: "3rem" }}>
            <div className="track-panel">
              <div className="track-months">
                3 <span>months</span>
              </div>

              <div className="track-name">Associate Fellowship</div>

              <div className="track-desc">
                A focused, intensive placement embedded in a working project team.
                Associates contribute to defined deliverables within their assigned track.
              </div>

              <ul className="track-features">
                <li>Live institutional project team</li>
                <li>Monthly stipend + accommodation</li>
                <li>All flights and visa covered</li>
                <li>Africa AI Fellow title</li>
                <li>Induction into Fellows Network</li>
              </ul>
            </div>

            <div className="track-panel featured">
              <div className="track-months">
                6 <span>months</span>
              </div>

              <div className="track-name">Full Fellowship</div>

              <div className="track-desc">
                The flagship track combining preparation, embedded deployment,
                and applied delivery across a complete project cycle.
              </div>

              <ul className="track-features">
                <li>Full project ownership</li>
                <li>Team leadership responsibility</li>
                <li>Venture formation pathways</li>
                <li>Investor introductions</li>
                <li>Priority access to partner roles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey-section">
        <div className="section-wrap">
          <div className="eyebrow">Fellowship Arc</div>
          <h2 className="display-title">
            Defined execution
            <br />
            <em>from start to finish</em>
          </h2>

          <div className="journey-phases">
            <div className="phase">
              <div className="phase-left">
                <div className="phase-badge">Phase I</div>
                <div className="phase-title">Induction</div>
                <div className="phase-timing">Weeks 1–3</div>
              </div>
              <div className="phase-right">
                <div className="phase-desc">
                  Institutional briefings, sector deep dives,
                  project assignment, governance alignment.
                </div>
              </div>
            </div>

            <div className="phase">
              <div className="phase-left">
                <div className="phase-badge">Phase II</div>
                <div className="phase-title">Embedded Deployment</div>
                <div className="phase-timing">Core Programme</div>
              </div>
              <div className="phase-right">
                <div className="phase-desc">
                  Weekly sprint reviews, stakeholder alignment,
                  iterative product development, institutional testing.
                </div>
              </div>
            </div>

            <div className="phase">
              <div className="phase-left">
                <div className="phase-badge">Phase III</div>
                <div className="phase-title">Delivery & Handover</div>
                <div className="phase-timing">Final Weeks</div>
              </div>
              <div className="phase-right">
                <div className="phase-desc">
                  Tool finalisation, documentation,
                  institutional adoption, public convening.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTPUTS */}
      <section className="outputs-section">
        <div className="section-wrap">
          <div className="eyebrow">What Fellows Produce</div>
          <h2 className="display-title">
            Deployment
            <br />
            <em>is the standard</em>
          </h2>

          <div className="outputs-grid">
            <div className="output-card">
              <div className="oc-type">Technical</div>
              <div className="oc-title">AI Decision-Support Systems</div>
              <div className="oc-desc">
                Working tools adopted inside real institutions.
              </div>
            </div>

            <div className="output-card">
              <div className="oc-type">Regulatory</div>
              <div className="oc-title">Monitoring Dashboards</div>
              <div className="oc-desc">
                AI-enabled oversight tools for regulators.
              </div>
            </div>

            <div className="output-card">
              <div className="oc-type">Venture</div>
              <div className="oc-title">AI-Enabled Ventures</div>
              <div className="oc-desc">
                Commercial pathways for high-potential outputs.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

