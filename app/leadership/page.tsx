import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | AAIF — Africa AI Fellowship",
  description:
    "Meet the leadership behind CADER and the Africa AI Fellowship, including regulatory scholars and institutional reform practitioners.",
};

export default function LeadershipPage() {
  return (
    <>
      {/* ================= LEADERSHIP PAGE ================= */}
      <section className="leadership-hero">
        <div className="section-wrap">
          <div className="eyebrow">Programme Leadership</div>
          <h1 className="display-title">
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
          <div className="leader-full">
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
                A leading regulatory scholar and institutional reform practitioner.
                Former Chairman and CEO of the Nigerian Electricity Regulatory Commission.
              </div>
            </div>
          </div>

          <div className="leader-full">
            <div className="lf-header">
              <div>
                <div className="lf-name">Emmanuel Orjih</div>
                <div className="lf-title">Founding Director</div>
              </div>
              <div className="lf-credentials">
                <div className="lf-cred">Wharton MBA</div>
              </div>
            </div>

            <div className="lf-body">
              <div className="lf-bio">
                Former World Bank and US Government official.
                Senior Technical Advisor to Nigeria’s Minister of Innovation.
                Built 18,000+ enterprises across Africa.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

