import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply | AAIF — Africa AI Fellowship",
  description:
    "Apply to the Africa AI Fellowship 2026 cohort in Abuja, with fully covered stipend, accommodation, flights, and visa.",
};

export default function ApplyPage() {
  return (
    <>
      {/* ================= APPLY PAGE ================= */}
      <section className="apply-hero">
        <div className="section-wrap">
          <div className="eyebrow">Applications — 2026 Cohort</div>
          <h1 className="display-title">
            This is the standard.
            <br />
            If you are capable,
            <br />
            <em>apply.</em>
          </h1>

          <p className="body-text" style={{ maxWidth: "560px", marginTop: "2rem" }}>
            Applications are reviewed on a rolling basis.
            Women and candidates from underrepresented backgrounds
            are strongly encouraged to apply.
          </p>
        </div>
      </section>

      <section>
        <div className="section-wrap">
          <div className="apply-info-grid">
            <div>
              <div className="apply-table">
                <div className="apply-row">
                  <span className="ar-key">Start Date</span>
                  <span className="ar-val">June 1, 2026</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Location</span>
                  <span className="ar-val">Abuja, Nigeria</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Duration</span>
                  <span className="ar-val">3 or 6 Months</span>
                </div>
              </div>
            </div>

            <div>
              <div className="apply-table">
                <div className="apply-row">
                  <span className="ar-key">Stipend</span>
                  <span className="ar-val">Monthly stipend provided</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Accommodation</span>
                  <span className="ar-val">Fully covered</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Flights & Visa</span>
                  <span className="ar-val">Fully covered</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <a
              href="mailto:fellowship@caderafrica.org"
              className="btn-gold"
            >
              Email Application
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

