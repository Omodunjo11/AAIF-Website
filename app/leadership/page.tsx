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
                <div className="lf-cred">Wharton MBA &rsquo;26 | Columbia M.S.</div>
              </div>
            </div>

            <div className="lf-body">
              <div className="lf-bio">
                Product and platform leader focused on deploying AI systems at
                enterprise scale across Amazon, Capital One, TD Bank, and
                Kinage. Known for translating complex data and machine learning
                capabilities into scalable products that drive adoption and
                operational impact. Co-founder of Kova and builder of
                enterprise platforms from inception to deployment. His work sits
                at the intersection of AI, product strategy, and enterprise
                transformation.
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
              </div>
            </div>

            <div className="lf-body">
              <div className="lf-bio">
                Operator focused on building high-performing organizations and
                mission-driven systems across global institutions. Experience
                spans the Gates Foundation, World Bank, and MIT J-PAL, with
                work across Africa, Latin America, and the Caribbean. Most
                recently supported change management and inclusive leadership
                initiatives at the Rockefeller Foundation. Focused on
                strengthening institutions and delivering measurable social
                impact.
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
