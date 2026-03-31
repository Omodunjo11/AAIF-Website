import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AAIF — Africa AI Fellowship",
  description:
    "Learn about CADER, the institutional foundation of the Africa AI Fellowship, and its mission across AI, digital justice, and economic rights.",
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="section-wrap">
          <div className="eyebrow fade-in">About CADER & AAIF</div>
          <h1 className="display-title fade-in">
            Building institutional
            <br />
            capacity for Africa&apos;s
            <br />
            digital transformation.
          </h1>

          <p className="body-text fade-in">
            CADER is an independent, public-interest platform founded in 2025 to
            ensure Africa&apos;s transition into the AI economy is equitable,
            rights-respecting, and economically inclusive.
          </p>
        </div>
      </section>

      <section>
        <div className="section-wrap">
          <div className="about-mission-grid">
            <div className="fade-in">
              <div className="eyebrow">Mission</div>
              <h2 className="display-title">
                Applied AI leadership
                <br />
                grounded in justice
                <br />
                and economic rights.
              </h2>

              <p className="body-text">
                CADER bridges policy and execution. The organization supports
                governments, civil society, and markets with tools, systems, and
                capabilities that reduce inequality rather than deepen it.
              </p>
            </div>

            <div className="fade-in">
              <div className="eyebrow">Core Focus Areas</div>
              <div className="cader-pillars">
                <div className="cader-pillar">
                  <div className="cp-num">01</div>
                  <div>
                    <div className="cp-title">Artificial Intelligence</div>
                    <div className="cp-text">
                      Applied systems that improve institutional decision quality.
                    </div>
                  </div>
                </div>

                <div className="cader-pillar">
                  <div className="cp-num">02</div>
                  <div>
                    <div className="cp-title">Digital Justice</div>
                    <div className="cp-text">
                      Rights-aware design for digital public infrastructure.
                    </div>
                  </div>
                </div>

                <div className="cader-pillar">
                  <div className="cp-num">03</div>
                  <div>
                    <div className="cp-title">Economic Rights</div>
                    <div className="cp-text">
                      Inclusion-focused economic systems for emerging digital
                      economies.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lineage-section">
        <div className="section-wrap">
          <div className="eyebrow fade-in">Institutional Lineage</div>
          <h2 className="display-title fade-in">
            Built from seven years of
            <br />
            policy and institutional work.
          </h2>

          <div className="lineage-timeline">
            {[
              [
                "2017",
                "Abuja School of Social and Political Thought founded",
                "An independent policy institution convening scholars, regulators, and civic leaders.",
              ],
              [
                "2025",
                "CADER established",
                "A permanent platform focused on AI, digital justice, and economic rights.",
              ],
              [
                "2026",
                "AAIF Cohort 1 launches in Nigeria",
                "The first fully residential cohort begins in Abuja as a proof of concept for continental scale.",
              ],
              [
                "Next",
                "Continental expansion model",
                "Future cohorts extend to additional countries with local hubs linked to one network.",
              ],
            ].map(([year, title, text]) => (
              <article key={title} className="timeline-item fade-in">
                <div className="ti-year">{year}</div>
                <div>
                  <div className="ti-title">{title}</div>
                  <div className="ti-text">{text}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
