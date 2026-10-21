"use client";

import { useEffect, useState } from "react";

const links = [
  ["Home", "/#home"],
  ["Services", "/#services"],
  ["About", "/#about"],
  ["Our Work", "/#work"],
  ["Contact", "/#contact"],
];

function BrandMark() {
  return (
    <span className="brand-lockup" aria-label="MrBrooksDigital Marketing">
      <span className="brand-monogram" aria-hidden="true">MB</span>
      <span className="brand-name">
        <strong>MrBrooks</strong>
        <span>Digital Marketing</span>
      </span>
    </span>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="/#home" className="brand-link" onClick={() => setOpen(false)}>
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>

        <a className="button button-small button-blue desktop-cta" href="/#contact">
          Let&apos;s Talk <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu">
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
          <a className="button button-blue" href="/#contact" onClick={() => setOpen(false)}>
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
