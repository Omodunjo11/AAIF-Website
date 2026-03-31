import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply | AAIF — Africa AI Fellowship",
  description:
    "Application details for AAIF Cohort 1: deadline, documents, visa support, and recruiting contact.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="apply-hero">
        <div className="section-wrap">
          <div className="eyebrow fade-in">Applications - 2026 Cohort</div>
          <h1 className="display-title fade-in">
            Ready to build in
            <br />
            live AI environments?
            <br />
            <em>Apply now.</em>
          </h1>

          <p className="body-text fade-in">
            Applications are reviewed on a rolling basis. Priority consideration
            was for April 1, 2026, and late applications may be considered based
            on remaining cohort capacity. Women and candidates from
            underrepresented backgrounds are strongly encouraged to apply.
          </p>
        </div>
      </section>

      <section>
        <div className="section-wrap">
          <div className="apply-info-grid">
            <div className="fade-in">
              <div className="apply-table">
                <div className="apply-row">
                  <span className="ar-key">Fellowship</span>
                  <span className="ar-val">Africa AI Fellowship (AAIF)</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Job Type</span>
                  <span className="ar-val">Fellowship (in-person)</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Start Date</span>
                  <span className="ar-val">June 1, 2026</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Location</span>
                  <span className="ar-val">Abuja, Nigeria</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Tracks</span>
                  <span className="ar-val">3 or 6 Months</span>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <div className="apply-table">
                <div className="apply-row">
                  <span className="ar-key">Priority Deadline</span>
                  <span className="ar-val">April 1, 2026 (rolling review continues)</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Required Documents</span>
                  <span className="ar-val">Resume + cover letter</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Stipend</span>
                  <span className="ar-val">Monthly stipend provided</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Accommodation</span>
                  <span className="ar-val">Fully covered</span>
                </div>
                <div className="apply-row">
                  <span className="ar-key">Flights, Visa, Work Authorization</span>
                  <span className="ar-val">
                    Education/academic exchange visa arranged and funded by CADER
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="apply-cta-row fade-in">
            <a
              href="mailto:fellowship@caderafrica.org"
              className="btn-gold"
            >
              Send Application
            </a>

            <a href="https://caderafrica.org" className="btn-ghost" target="_blank" rel="noreferrer">
              Visit caderafrica.org
            </a>
          </div>

          <div className="posting-meta fade-in">
            <div>
              <strong>Company:</strong> Center for AI, Digital Justice and Economic Rights (CADER)
            </div>
            <div>
              <strong>Primary Contact:</strong> Emmanuel Orjih, Founding Director -
              <a href="mailto:emmanuel@caderafrica.org"> emmanuel@caderafrica.org</a>
            </div>
            <div>
              <strong>Contact Visible To Students:</strong> Yes
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
