export default function HomePage() {
  return (
    <>
      {/* ================= HOME PAGE ================= */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* SVG BACKGROUND */}
        <div className="hero-canvas">
          <svg
            viewBox="0 0 1400 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="rg1" cx="70%" cy="40%">
                <stop offset="0%" stopColor="#1f4a28" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0c0c0b" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="rg2" cx="20%" cy="80%">
                <stop offset="0%" stopColor="#b8963c" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0c0c0b" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="1400" height="900" fill="#0c0c0b" />
            <rect width="1400" height="900" fill="url(#rg1)" />
            <rect width="1400" height="900" fill="url(#rg2)" />

            <text
              x="680"
              y="780"
              fontFamily="Cormorant Garamond, serif"
              fontSize="700"
              fill="rgba(31,74,40,0.07)"
              fontWeight="300"
              textAnchor="middle"
            >
              A
            </text>
          </svg>
        </div>

        <div className="hero-left">
          <div className="hero-overline">
            Est. 2025 • Abuja, Nigeria • Cohort 1 — June 2026
          </div>

          <h1 className="hero-h1">
            Africa
            <br />
            <span className="italic">AI</span>
            <br />
            Fellowship
          </h1>

          <p className="hero-tagline">
            A continental platform for applied AI leadership.
            Fellows deploy artificial intelligence inside live institutions
            across Africa's most consequential sectors.
          </p>

          <div className="hero-actions">
            <a href="/apply" className="btn-gold">
              Apply — April 1, 2026
            </a>

            <a href="/fellowship" className="btn-ghost">
              The Fellowship
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
