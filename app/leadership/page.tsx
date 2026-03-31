import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | AAIF — Africa AI Fellowship",
  description:
    "Meet the leadership and featured profiles supporting CADER and AAIF, including Dr. Sam Amadi, Emmanuel Orjih, Onaolapo Odunjo, and Gaelle Conille.",
};

export default function LeadershipPage() {
  return (
    <>
      <section className="leadership-hero">
        <div className="section-wrap">
          <div className="eyebrow fade-in">Leadership & Featured Profiles</div>
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

            <div className="profile-meta">
              Philadelphia / New York · AI systems, platform infrastructure, monetization
            </div>

            <div className="lf-body">
              <div className="lf-bio">
                Product and platform leader focused on turning complex AI and
                data systems into measurable enterprise outcomes. Experience
                across Amazon, Capital One, TD Bank, and venture-backed builds,
                with repeated success leading monetization, adoption, and
                compliance-ready scale in regulated environments.
              </div>
            </div>

            <ul className="profile-highlights">
              <li>
                Amazon: identified a <strong>$148M ARR</strong> opportunity across
                1.17M+ subscribers and translated insights into pricing,
                onboarding, and retention strategy.
              </li>
              <li>
                Kinage: built commercial model and GTM from zero to 12 enterprise
                clients, reducing cost-to-serve by <strong>62%</strong> while
                improving first-pass resolution by <strong>41%</strong>.
              </li>
              <li>
                Capital One: owned roadmap and pricing strategy for a
                <strong> $270M</strong> analytics/API platform serving 200+ teams;
                improved retention and unlocked major financial impact.
              </li>
              <li>
                TD Bank: led AI-enabled enterprise transformation across 15+
                business units with governance at VP/SVP level and full audit
                traceability.
              </li>
            </ul>

            <div className="profile-links">
              <a href="mailto:omodunjo@wharton.upenn.edu">omodunjo@wharton.upenn.edu</a>
              <a href="https://www.linkedin.com/in/onaolapomichaelodunjo" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Omodunjo11" target="_blank" rel="noreferrer">
                GitHub
              </a>
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

            <div className="profile-meta">
              Washington, DC · Gates Foundation · World Bank · J-PAL alum
            </div>

            <div className="lf-body">
              <div className="lf-bio">
                Operator focused on organizational effectiveness and mission
                execution. Works at the intersection of people strategy,
                institutional performance, and social impact, with experience
                advising senior leaders and translating evidence into action.
              </div>
            </div>

            <ul className="profile-highlights">
              <li>
                Nearly a decade across high-impact institutions including the
                Gates Foundation, World Bank, and MIT&apos;s J-PAL.
              </li>
              <li>
                Wharton MBA with a focus on organizational effectiveness and
                institution-building for lasting outcomes.
              </li>
              <li>
                Summer Associate, Rockefeller Foundation (Communities, Partners
                & Impact), supporting change management and inclusive leadership
                strategy.
              </li>
              <li>
                Strong regional connection to Latin America, the Caribbean, and
                Africa, with a systems-first approach to mission delivery.
              </li>
            </ul>
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
