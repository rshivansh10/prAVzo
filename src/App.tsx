import "./index.css";

function App() {
  const REVIEW_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSeUjwvF1dyOfPmKl2gvZq2L_4agIUsroWn9PYpk7sRMr85bkg/viewform?usp=publish-editor";

  return (
    <div className="site">
      {/* Global glow layer for the black + gold ambiance */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* Top navigation for single-page section jumps */}
      <header className="topbar">
        <a className="brand" href="#home">
          prAVzo
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact Us</a>
        </nav>

        {/* Decorative scooter-rider animation across the top bar */}
        <div className="scooter-track" aria-hidden="true">
          <svg
            className="scooter-rider"
            viewBox="0 0 120 60"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <circle cx="18" cy="48" r="10" />
            <circle cx="82" cy="48" r="10" />
            <path d="M18 48h28l13-20h20l3 10h12" />
            <path d="M44 46l7-12h16" />
            <circle cx="58" cy="12" r="6" />
            <path d="M58 18l-6 12m6-12l10 7m-14 5l-6 16m20-21l10 5" />
            <path d="M79 20h9l4 8" />
          </svg>
        </div>
      </header>

      {/* Hero section with strong headline and visual identity */}
      <section id="home" className="section hero">
        <div className="hero-copy">
          <p className="eyebrow">Future Mobility. Cleaner Planet.</p>
          <h1>prAVzo builds smart, green urban movement.</h1>
          <p>
            A tech-forward EV mobility brand blending convenience, sustainability, and modern urban
            design. We help people move smarter while caring for the Earth.
          </p>
          <a
            className="cta"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNmgUrIkaL7e00l_mmwSyLXZc57fK7bW5EIqvg5EMTPUc4nw/viewform?usp=sharing&ouid=112961196311195388274"
            target="_blank"
            rel="noreferrer"
          >
            Get Started
          </a>
        </div>

        {/* Logo panel with green outline and gold highlight */}
        <figure className="hero-logo-wrap">
          <div className="logo-mask">
            <img src="/pravzo-logo.png" alt="prAVzo logo" className="hero-logo" />
          </div>
          <figcaption>The Pulse of Urban Velocity</figcaption>
        </figure>
      </section>

      {/* About section: tech-savvy, pro-green, earth-saving narrative */}
      <section id="about" className="section block">
        <h2>About</h2>
        <p>
          prAVzo is a tech-savvy, planet-first mobility initiative. We combine intelligent EV thinking,
          digital-first operations, and sustainability principles to reduce emissions and create a cleaner
          urban future. Our mission is simple: make daily transportation greener, smarter, and genuinely
          better for Earth.
        </p>
      </section>

      {/* Reviews section with three strong sample testimonials */}
      <section id="reviews" className="section">
        <h2>Reviews</h2>
        <div className="cards">
          <article className="card">
            <p>
              prAVzo feels like a next-gen brand. The website is sleek, and their green mobility vision
              is both practical and inspiring.
            </p>
            <span>- Aarav S.</span>
          </article>
          <article className="card">
            <p>
              Loved the clean design and clear messaging. You can see the team is serious about
              technology and sustainability.
            </p>
            <span>- Neha V.</span>
          </article>
          <article className="card">
            <p>
              Strong EV concept, modern execution, and a professional vibe overall. prAVzo has a clear
              eco-focused direction.
            </p>
            <span>- Rohit M.</span>
          </article>
        </div>
        <a className="cta review-cta" href={REVIEW_FORM_LINK} target="_blank" rel="noreferrer">
          Submit a Review
        </a>
      </section>

      {/* Contact section with direct details + form link */}
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>
        <p>Email: helpdesk@pravzo.com</p>
        <p>Phone: +91 99999 00000</p>
        <p>Location: Noida, India</p>
        <a
          className="cta"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfNmgUrIkaL7e00l_mmwSyLXZc57fK7bW5EIqvg5EMTPUc4nw/viewform?usp=sharing&ouid=112961196311195388274"
          target="_blank"
          rel="noreferrer"
        >
          Open Google Form
        </a>
      </section>
    </div>
  );
}

export default App;
