import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | AAIF — Africa AI Fellowship",
  description:
    "Meet the leadership behind CADER and AAIF, including Dr. Sam Amadi, Emmanuel Orjih, Onaolapo Odunjo, and Gaelle Conille.",
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
            <em>People, systems, and impact leaders.</em>
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

          <div className="leader-full fade-in">
            <div className="lf-header">
              <div>
                <div className="lf-name">Onaolapo (Lapo) Odunjo</div>
                <div className="lf-title">Senior Product Manager, AI Systems & Enterprise Adoption</div>
              </div>
              <div className="lf-credentials">
                <div className="lf-cred">Wharton MBA &apos;26</div>
                <div className="lf-cred">Columbia M.S.</div>
                <div className="lf-cred">Product & GTM</div>
              </div>
            </div>

            <div className="lf-body">
              <div className="lf-bio">
                Product and platform leader focused on turning complex AI and
                data systems into measurable enterprise outcomes across Amazon,
                Kinage, Capital One, and TD Bank. Identified a $148M ARR
                opportunity across 1.17M+ subscribers at Amazon, built Kinage
                from zero to 12 enterprise clients while reducing cost-to-serve
                by 62% and improving first-pass resolution by 41%, owned pricing
                and roadmap strategy for a $270M analytics/API platform serving
                200+ teams at Capital One, and led AI-enabled enterprise
                transformation across 15+ business units at TD Bank with VP/SVP
                governance and full audit traceability.
              </div>
            </div>
          </div>

          <div className="leader-full fade-in">
            <div className="lf-header">
              <div>
                <div className="lf-name">Gaelle Conille</div>
                <div className="lf-title">People, Systems & Impact</div>
              </div>
              <div className="lf-credentials">
                <div className="lf-cred">Wharton MBA</div>
                <div className="lf-cred">Org Effectiveness</div>
                <div className="lf-cred">Mission-Driven Systems</div>
              </div>
            </div>

            <div className="lf-body">
              <div className="lf-bio">
                Operator focused on organizational effectiveness and mission
                execution at the intersection of people strategy, institutional
                performance, and social impact. Nearly a decade of experience
                across the Gates Foundation, World Bank, and MIT&apos;s J-PAL,
                with a Wharton MBA focus on organizational effectiveness and
                institution-building. Former Summer Associate at the Rockefeller
                Foundation (Communities, Partners & Impact) supporting change
                management and inclusive leadership strategy, with strong
                regional grounding in Latin America, the Caribbean, and Africa.
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
