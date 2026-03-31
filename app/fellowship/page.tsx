import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fellowship | AAIF — Africa AI Fellowship",
  description:
    "Explore AAIF structure, tracks, support, eligibility, and the applied deployment model in Abuja, Nigeria.",
};

export default function FellowshipPage() {
  return (
    <>
      <section className="fellow-hero">
        <div className="section-wrap">
          <div className="eyebrow fade-in">The Fellowship Experience</div>
          <h1 className="display-title fade-in">
            A structured, applied
            <br />
            leadership platform.
            <br />
            <em>Built for execution.</em>
          </h1>

          <p className="body-text fade-in">
            AAIF brings together African and international talent to build and
            deploy AI systems in real institutional contexts across sectors.
          </p>
        </div>
      </section>

      <section>
        <div className="section-wrap">
          <div className="eyebrow fade-in">Two Tracks</div>
          <h2 className="display-title fade-in">
            Choose your
            <br />
            <em>commitment level</em>
          </h2>

          <div className="fellow-tracks-grid">
            <div className="track-panel fade-in">
              <div className="track-months">
                3 <span>months</span>
              </div>

              <div className="track-name">Associate Fellowship</div>

              <div className="track-desc">
                A focused placement for fellows with shorter availability.
                Associates are embedded in live project teams and contribute to
                specific deliverables.
              </div>

              <ul className="track-features">
                <li>In-person residency in Abuja</li>
                <li>Monthly stipend and housing</li>
                <li>Meals, flights, and visa covered</li>
                <li>Project transfer into alumni network</li>
              </ul>
            </div>

            <div className="track-panel featured fade-in">
              <div className="track-months">
                6 <span>months</span>
              </div>

              <div className="track-name">Full Fellowship</div>

              <div className="track-desc">
                The flagship track combining preparation, embedded deployment,
                and complete cycle delivery with stronger team leadership
                expectations.
              </div>

              <ul className="track-features">
                <li>Greater ownership across project lifecycle</li>
                <li>Execution leadership responsibilities</li>
                <li>Venture and partner adoption pathways</li>
                <li>Priority opportunity flow in AAIF network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="section-wrap">
          <div className="eyebrow fade-in">Fellowship Arc</div>
          <h2 className="display-title fade-in">
            Defined execution
            <br />
            <em>from start to finish</em>
          </h2>

          <div className="journey-phases">
            <div className="phase fade-in">
              <div className="phase-left">
                <div className="phase-badge">Phase I</div>
                <div className="phase-title">Induction</div>
                <div className="phase-timing">Opening stage</div>
              </div>
              <div className="phase-right">
                <div className="phase-desc">
                  Institutional orientation, partner briefings, and project team
                  matching.
                </div>
              </div>
            </div>

            <div className="phase fade-in">
              <div className="phase-left">
                <div className="phase-badge">Phase II</div>
                <div className="phase-title">Embedded Deployment</div>
                <div className="phase-timing">Core program</div>
              </div>
              <div className="phase-right">
                <div className="phase-desc">
                  Team sprints, stakeholder reviews, iterative build cycles, and
                  live deployment testing.
                </div>
              </div>
            </div>

            <div className="phase fade-in">
              <div className="phase-left">
                <div className="phase-badge">Phase III</div>
                <div className="phase-title">Delivery & Handover</div>
                <div className="phase-timing">Final stage</div>
              </div>
              <div className="phase-right">
                <div className="phase-desc">
                  Finalization, documentation, partner handover, and transition to
                  alumni or continuation pathways.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="outputs-section">
        <div className="section-wrap">
          <div className="eyebrow fade-in">What Fellows Produce</div>
          <h2 className="display-title fade-in">
            Deployment
            <br />
            <em>is the standard</em>
          </h2>

          <div className="outputs-grid">
            <div className="output-card fade-in">
              <div className="oc-type">Technical</div>
              <div className="oc-title">Working AI Tools</div>
              <div className="oc-desc">
                Decision-support utilities and operational systems deployed in
                partner environments.
              </div>
            </div>

            <div className="output-card fade-in">
              <div className="oc-type">Policy</div>
              <div className="oc-title">Frameworks and Briefs</div>
              <div className="oc-desc">
                Governance frameworks, institutional designs, and policy products
                suitable for real adoption.
              </div>
            </div>

            <div className="output-card fade-in">
              <div className="oc-type">Venture</div>
              <div className="oc-title">MVPs and Venture Pathways</div>
              <div className="oc-desc">
                Pilot products and civic ventures with potential for continuation
                after the cohort.
              </div>
            </div>
          </div>

          <div className="fellow-bottom-cta fade-in">
            <p>
              Fellows who complete either track are conferred the title
              <strong> Africa AI Fellow</strong> and inducted into the Africa AI
              Fellows Network.
            </p>
            <Link href="/apply" className="btn-gold">
              View Application Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
