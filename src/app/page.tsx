import ContactForm from "@/components/contact-form";
import SiteEffects from "@/components/site-effects";
import SiteHeader from "@/components/site-header";

const services = [
  {
    title: "Social Media Marketing",
    description: "Content planning, account management, brand consistency, and audience engagement that keeps your brand active and relevant.",
    tag: "Build community",
  },
  {
    title: "Paid Advertising",
    description: "Campaign strategy, advertising creative, audience targeting, and performance optimisation designed around clear objectives.",
    tag: "Reach with intent",
  },
  {
    title: "Content Creation",
    description: "Engaging visual content, promotional graphics, campaign concepts, and brand storytelling made to stop the scroll.",
    tag: "Create attention",
  },
  {
    title: "Brand Strategy",
    description: "Brand positioning, messaging, identity direction, and audience-focused marketing that gives every idea a purpose.",
    tag: "Find your edge",
  },
  {
    title: "Website Design",
    description: "Modern, responsive websites designed to communicate your value clearly and turn attention into genuine enquiries.",
    tag: "Convert clicks",
  },
  {
    title: "Digital Growth Strategy",
    description: "Marketing planning, campaign analysis, and practical recommendations that give your next move a clear direction.",
    tag: "Plan what’s next",
  },
];

const principles = [
  ["Ideas with intent", "Creative thinking is tied to a strategic purpose — not just made to fill a feed."],
  ["Business-first thinking", "Marketing decisions start with your objectives, audience, and the outcomes that matter."],
  ["One clear voice", "Every touchpoint works together to build recognition, trust, and a consistent brand experience."],
  ["Progress you can see", "We focus on meaningful signals and measurable outcomes, then learn and improve."],
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function ServiceIcon({ index }: { index: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const icons = [
    <g key="social" {...common}><path d="M7 6.5h18a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H15l-7 5v-5H7a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4Z"/><path d="M12 14.5h8M12 18h5"/><path d="M23.7 13.1c1-1.2 3.1-.4 3.1 1.1 0 2.2-3.1 3.8-3.1 3.8s-3.1-1.6-3.1-3.8c0-1.5 2.1-2.3 3.1-1.1Z"/></g>,
    <g key="paid" {...common}><circle cx="16" cy="16" r="12"/><circle cx="16" cy="16" r="7"/><circle cx="16" cy="16" r="2"/><path d="m21 11 7-7M23 4h5v5"/></g>,
    <g key="content" {...common}><rect x="4" y="5" width="24" height="22" rx="3"/><path d="m8 22 6-7 5 5 3-3 6 7M10 11h.01"/></g>,
    <g key="brand" {...common}><circle cx="16" cy="16" r="12"/><path d="m20.5 11.5-3 6-6 3 3-6 6-3Z"/><circle cx="16" cy="16" r="1"/></g>,
    <g key="web" {...common}><rect x="3" y="5" width="26" height="22" rx="3"/><path d="M3 11h26M8 8h.01M12 8h.01M7 16h8v7H7zM19 16h6M19 20h6"/></g>,
    <g key="growth" {...common}><path d="M5 26V8M5 26h23"/><path d="m9 21 5-6 4 3 9-11M22 7h5v5"/><circle cx="9" cy="21" r="1"/><circle cx="14" cy="15" r="1"/><circle cx="18" cy="18" r="1"/></g>,
  ];

  return <svg viewBox="0 0 32 32" aria-hidden="true">{icons[index]}</svg>;
}

function FooterBrand() {
  return (
    <a className="footer-brand" href="#home" aria-label="MrBrooksDigital Marketing home">
      <span>MB</span>
      <strong>MrBrooks<em>Digital Marketing</em></strong>
    </a>
  );
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <SiteEffects />
      <SiteHeader />
      <main>
        <section className="hero" id="home">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="section-shell hero-layout">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow">
                <span className="status-dot" /> Digital marketing with direction
              </div>
              <h1>
                <span>Good marketing.</span>
                <span>Big energy.</span>
                <span className="outline-text">Real growth.</span>
              </h1>
              <p className="hero-intro">
                We help brands stand out, connect with the right audience, and turn digital attention into meaningful business growth.
              </p>
              <div className="hero-actions">
                <a className="button button-blue" href="#contact">Let&apos;s Grow Your Brand <ArrowIcon /></a>
                <a className="text-link" href="#services">Explore Our Services <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true"><i>V</i><i>N</i><i>C</i><i>+</i></div>
                <p><strong>Creative + strategy</strong><span>Built around your next move.</span></p>
              </div>
            </div>

            <div className="hero-stage" aria-label="Abstract digital campaign dashboard illustration">
              <div className="stage-halo" aria-hidden="true" />
              <div className="campaign-card">
                <div className="campaign-topline">
                  <span className="mini-brand">MB</span>
                  <span className="campaign-status"><i /> Campaign live</span>
                  <span className="dots">•••</span>
                </div>
                <div className="campaign-visual">
                  <div className="visual-star">✦</div>
                  <span>MAKE</span>
                  <strong>NOISE.</strong>
                  <div className="visual-pill">Own your space ↗</div>
                </div>
                <div className="campaign-footer"><span>Built to get noticed</span><div>♡ &nbsp; ◇ &nbsp; ↗</div></div>
              </div>
              <div className="floating-card reach-card">
                <span>Campaign signal</span>
                <strong>Attention → Action</strong>
                <div className="signal-bars"><i/><i/><i/><i/><i/></div>
              </div>
              <div className="floating-card idea-card"><span>New idea</span><strong>GOOD<br/>THINKING.</strong><i>↗</i></div>
              <div className="floating-tag tag-one">#standout</div>
              <div className="floating-tag tag-two">PLAY<br/>BOLD</div>
              <svg className="scribble-arrow" viewBox="0 0 120 90" aria-hidden="true">
                <path d="M8 73c30 8 61-4 82-34"/><path d="m77 43 16-7-1 17"/>
              </svg>
            </div>
          </div>
          <a href="#trusted" className="scroll-cue" aria-label="Scroll to trusted brands"><span /> Scroll to explore</a>
        </section>

        <section className="trusted" id="trusted" aria-labelledby="trusted-title">
          <div className="section-shell">
            <div className="trusted-heading" data-reveal>
              <p className="eyebrow eyebrow-dark">In good company</p>
              <h2 id="trusted-title">Good people. <span>Great brands.</span></h2>
              <p>Names we&apos;re proud to feature. Official brand assets can be added here as they become available.</p>
            </div>
            <div className="logo-wall" data-reveal>
              <div className="client-wordmark vitallink"><i>V</i>VitalLink<span>Capital</span></div>
              <div className="client-wordmark nextera">NEXTERA <span>AI</span></div>
              <div className="client-wordmark credit"><span className="cross">+</span>TheCredit<strong>Surgeon</strong></div>
              <div className="client-wordmark cjrossi"><i>CJ</i>rossi</div>
            </div>
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="section-shell">
            <div className="section-heading services-heading" data-reveal>
              <div>
                <p className="eyebrow eyebrow-blue">What we bring</p>
                <h2 id="services-title">We make your brand<br/><span>hard to ignore.</span></h2>
              </div>
              <p>From your first idea to your next campaign, every service is shaped to make the brand clearer, louder, and more useful to your audience.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title} data-reveal style={{ "--delay": `${(index % 3) * 90}ms` } as React.CSSProperties}>
                  <div className="service-top">
                    <span className="service-number">0{index + 1}</span>
                    <div className="service-icon"><ServiceIcon index={index} /></div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" aria-label={`Enquire about ${service.title}`}>
                    {service.tag} <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <div className="about-copy-inner" data-reveal>
              <p className="eyebrow eyebrow-light">Behind the thinking</p>
              <h2 id="about-title">Creative minds.<br/><span>Strategic moves.</span></h2>
              <p className="about-lead">MrBrooksDigital Marketing combines creative thinking with strategic digital marketing to help brands show up with confidence.</p>
              <p>We believe great marketing should do more than look good — it should help businesses build connections, earn attention, and create opportunities.</p>
              <a className="button button-white" href="#contact">Build Something Better <ArrowIcon /></a>
            </div>
          </div>
          <div className="about-art" aria-hidden="true">
            <div className="about-grid" />
            <div className="strategy-wheel">
              <span>Think</span><span>Create</span><span>Connect</span><span>Grow</span>
              <strong>MB<em>↗</em></strong>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <p className="rotating-copy">STRATEGY • CREATIVITY • DIRECTION • </p>
            <div className="art-note">Big ideas.<br/><strong>Clear purpose.</strong></div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-shell">
            <div className="section-heading work-heading" data-reveal>
              <div>
                <p className="eyebrow eyebrow-light">Selected directions</p>
                <h2 id="work-title">Ideas that make<br/><span>an impact.</span></h2>
              </div>
              <p>Creative spaces built to hold real campaigns. These are clearly labelled sample concepts — ready to be replaced by verified client work.</p>
            </div>

            <div className="portfolio-grid">
              <article className="project-card project-one" data-reveal>
                <div className="project-art">
                  <span className="sample-label">Sample concept</span>
                  <div className="poster poster-one"><small>THE NEXT MOVE</small><strong>GO<br/>BOLD.</strong><i>↗</i></div>
                  <div className="poster-shadow" />
                  <p>MAKE THEM<br/>LOOK TWICE.</p>
                </div>
                <div className="project-meta">
                  <div><p>Campaign direction</p><h3>Bold Launch Concept</h3></div>
                  <span>Content · Paid creative</span>
                </div>
              </article>

              <article className="project-card project-two" data-reveal>
                <div className="project-art">
                  <span className="sample-label">Sample concept</span>
                  <div className="phone-frame"><div className="phone-notch"/><small>Daily focus</small><strong>MOVE<br/>WITH<br/>PURPOSE.</strong><button tabIndex={-1}>Start today →</button></div>
                  <div className="sun-shape" />
                  <p className="vertical-word">SOCIAL</p>
                </div>
                <div className="project-meta">
                  <div><p>Social direction</p><h3>Momentum Content System</h3></div>
                  <span>Social · Brand strategy</span>
                </div>
              </article>

              <article className="project-card project-three" data-reveal>
                <div className="project-art">
                  <span className="sample-label">Sample concept</span>
                  <div className="browser-frame">
                    <div className="browser-bar"><i/><i/><i/><span>yourbrand.co</span></div>
                    <div className="browser-content"><small>Digital-first</small><strong>DESIGNED<br/>TO MOVE.</strong><div><span>Explore the idea</span><b>↗</b></div></div>
                  </div>
                  <div className="cursor-shape">↖</div>
                </div>
                <div className="project-meta">
                  <div><p>Digital experience</p><h3>Growth Website Concept</h3></div>
                  <span>Web design · Strategy</span>
                </div>
              </article>
            </div>
            <div className="portfolio-note" data-reveal>
              <span>Have real work ready to share?</span>
              <p>Project imagery, approved descriptions, and verified results can be added to these modular cards.</p>
              <a href="#contact">Start a conversation <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="principles-section" aria-labelledby="principles-title">
          <div className="section-shell principles-layout">
            <div className="principles-title" data-reveal>
              <p className="eyebrow eyebrow-dark">Why work with us</p>
              <h2 id="principles-title">Not just posts.<br/><span>A plan.</span></h2>
              <p>Strong marketing needs more than activity. It needs a reason, a rhythm, and a route forward.</p>
              <div className="marker-line"><i/><i/><i/><i/><span>Direction over noise</span></div>
            </div>
            <div className="principles-list">
              {principles.map(([title, description], index) => (
                <article key={title} data-reveal style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <i aria-hidden="true">↗</i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-marquee" aria-hidden="true"><span>LET&apos;S MAKE SOMETHING MOVE • LET&apos;S MAKE SOMETHING MOVE • </span></div>
          <div className="section-shell contact-layout">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow eyebrow-light">Your next move starts here</p>
              <h2 id="contact-title">Ready to make<br/><span>some noise?</span></h2>
              <p>Tell us about your brand, your goals, and where you want to go next. Let&apos;s build a marketing strategy that makes sense for your business.</p>
              <div className="contact-promise">
                <div><span>01</span><p><strong>Share the brief</strong>Tell us what you&apos;re building.</p></div>
                <div><span>02</span><p><strong>Shape the plan</strong>We&apos;ll explore the right direction.</p></div>
                <div><span>03</span><p><strong>Make it move</strong>Turn thinking into action.</p></div>
              </div>
              <div className="contact-config">
                <span>Contact details</span>
                <p>Email and social links are ready to configure with official business details.</p>
              </div>
            </div>
            <div className="form-panel" data-reveal>
              <div className="form-panel-heading">
                <span>Project enquiry</span><i>↗</i>
                <h3>Tell us what&apos;s next.</h3>
                <p>A few details now will help make the first conversation count.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <div className="footer-top">
            <div className="footer-intro">
              <FooterBrand />
              <p>Creative digital marketing made to build attention, connection, and real momentum.</p>
            </div>
            <div className="footer-column">
              <h2>Explore</h2>
              <a href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#work">Our Work</a><a href="#contact">Contact</a>
            </div>
            <div className="footer-column footer-services">
              <h2>Services</h2>
              {services.map((service) => <a href="#services" key={service.title}>{service.title}</a>)}
            </div>
            <div className="footer-column footer-connect">
              <h2>Connect</h2>
              <span>Email — to be configured</span>
              <span>Phone — to be configured</span>
              <div className="social-placeholder"><span>Social links</span><i>Awaiting official URLs</i></div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {year} MrBrooksDigital Marketing. All rights reserved.</p>
            <div><a href="/privacy">Privacy Policy</a><a href="#home">Back to top ↑</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}
