import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | AAIF — Africa AI Fellowship",
  description:
    "Meet the leadership behind CADER and AAIF, including Dr. Sam Amadi and Emmanuel Orjih.",
};

export default function LeadershipPage() {
  return (
    <>
      <section className="leadership-hero">
        <div className="section-wrap">
          <div className="eyebrow fade-in">Programme Leadership</div>
          <h1 className="display-title fade-in">
            Institutional builders.
            <br />
            Policy practitioners.
            <br />
            <em>Continent-scale thinkers.</em>
          </h1>
        </div>
      </section>

      <section>
        <div className="section-wrap">
          <div className="leader-full fade-in">
            <div className="lf-header">
              <div>
                <div className="lf-name">Dr. Sam Amadi</div>
                <div className="lf-title">Chair, CADER</div>
              </div>
              <div className="lf-credentials">
                <div className="lf-cred">Harvard Law School</div>
                <div className="lf-cred">Harvard Kennedy School</div>
              </div>
            </div>

            <div className="lf-body">
              <div className="lf-bio">
                Visiting Professor at the University of Port Harcourt with LL.M.
                and S.J.D. degrees from Harvard Law School and an MPA from
                Harvard Kennedy School. Former Chairman and CEO of the Nigerian
                Electricity Regulatory Commission and Director of the Abuja School
                of Social and Political Thought.
              </div>
            </div>
          </div>

          <div className="leader-full fade-in">
            <div className="lf-header">
              <div>
                <div className="lf-name">Emmanuel (Emeka) Orjih</div>
                <div className="lf-title">Founding Director</div>
              </div>
              <div className="lf-credentials">
                <div className="lf-cred">Wharton MBA</div>
                <div className="lf-cred">AI Researcher</div>
              </div>
            </div>

            <div className="lf-body">
              <div className="lf-bio">
                Serial entrepreneur and policy systems builder with work spanning
                26 countries across Africa, Asia, and North America. Former World
                Bank and US Government official, and former Senior Technical
                Advisor to Nigeria&apos;s Minister of Innovation and Technology.
                Built over 18,000 social enterprises across Africa.
              </div>
            </div>
          </div>

          <div className="leadership-note fade-in">
            Primary recruiting contact for AAIF: Emmanuel Orjih, Founding
            Director, <a href="mailto:emmanuel@caderafrica.org">emmanuel@caderafrica.org</a>
          </div>
        </div>
      </section>
    </>
  );
}
