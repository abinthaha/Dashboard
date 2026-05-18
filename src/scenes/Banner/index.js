import React, { Component } from "react";
import "./index.css";
import resumePdf from "../../assets/Abin Thaha Azees - Resume.pdf";
import ThemeToggle from "../../common/ThemeToggle/ThemeToggle";

const NAV_LINKS = [
  { href: "#intro", label: "About" },
  { href: "#experience", label: "Timeline" },
  { href: "#skills", label: "Skills" },
  { href: "#contactMe", label: "Contact" },
  { href: "#portfolio", label: "Projects" },
  { href: "#footer", label: "Social" },
];

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false,
    };
    this.bannerRef = React.createRef();
    this._moveRaf = null;
    this._docKey = null;
    this.onBannerMouseMove = this.onBannerMouseMove.bind(this);
    this.onBannerMouseLeave = this.onBannerMouseLeave.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
    this.onMobileNavClick = this.onMobileNavClick.bind(this);
  }

  componentDidUpdate(_, prevState) {
    if (this.state.mobileNavOpen && !prevState.mobileNavOpen) {
      this._docKey = (e) => {
        if (e.key === "Escape") this.closeMobileNav();
      };
      document.addEventListener("keydown", this._docKey);
      document.body.style.overflow = "hidden";
    }
    if (!this.state.mobileNavOpen && prevState.mobileNavOpen) {
      if (this._docKey) {
        document.removeEventListener("keydown", this._docKey);
        this._docKey = null;
      }
      document.body.style.overflow = "";
    }
  }

  componentDidMount() {
    this._reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = this.bannerRef.current;
    if (!node || this._reducedMotion) return;
    node.addEventListener("mousemove", this.onBannerMouseMove, { passive: true });
    node.addEventListener("mouseleave", this.onBannerMouseLeave);
  }

  componentWillUnmount() {
    const node = this.bannerRef.current;
    if (node) {
      node.removeEventListener("mousemove", this.onBannerMouseMove);
      node.removeEventListener("mouseleave", this.onBannerMouseLeave);
    }
    if (this._moveRaf != null) {
      cancelAnimationFrame(this._moveRaf);
      this._moveRaf = null;
    }
    if (this._docKey) {
      document.removeEventListener("keydown", this._docKey);
      this._docKey = null;
    }
    document.body.style.overflow = "";
  }

  toggleMobileNav() {
    this.setState((s) => ({ mobileNavOpen: !s.mobileNavOpen }));
  }

  closeMobileNav() {
    this.setState({ mobileNavOpen: false });
  }

  onMobileNavClick() {
    this.closeMobileNav();
  }

  onBannerMouseMove(e) {
    const node = this.bannerRef.current;
    if (!node) return;
    if (this._moveRaf != null) cancelAnimationFrame(this._moveRaf);
    this._moveRaf = requestAnimationFrame(() => {
      const r = node.getBoundingClientRect();
      const mx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      const my = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      node.style.setProperty("--mx", mx.toFixed(4));
      node.style.setProperty("--my", my.toFixed(4));
      node.classList.add("banner--pointer-active");
      this._moveRaf = null;
    });
  }

  onBannerMouseLeave() {
    const node = this.bannerRef.current;
    if (!node) return;
    node.style.setProperty("--mx", "0.5");
    node.style.setProperty("--my", "0.45");
    node.classList.remove("banner--pointer-active");
  }

  render() {
    const { mobileNavOpen } = this.state;

    return (
      <section className="even banner-wrapper" id={this.props.elId}>
        <header
          className={`page-header${mobileNavOpen ? " page-header--nav-open" : ""}`}
        >
          <div className="page-header__bar">
            <a href="#banner" className="brand-link" aria-label="Abinthaha — home">
              <span className="signature">Abinthaha</span>
            </a>
            <div className="page-header__end">
              <div className="page-header__desktop">
                <nav className="site-nav site-nav--desktop" aria-label="Primary">
                  {NAV_LINKS.map(({ href, label }) => (
                    <a key={href} href={href}>
                      {label}
                    </a>
                  ))}
                </nav>
                <ThemeToggle className="theme-toggle--desktop-only" />
              </div>
              <button
                type="button"
                className={`page-header__menu-btn${mobileNavOpen ? " page-header__menu-btn--open" : ""}`}
                aria-expanded={mobileNavOpen}
                aria-controls="banner-mobile-nav"
                aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
                onClick={this.toggleMobileNav}
              >
                <span className="page-header__menu-btn-bar" aria-hidden="true" />
                <span className="page-header__menu-btn-bar" aria-hidden="true" />
                <span className="page-header__menu-btn-bar" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            className="page-header__backdrop"
            aria-hidden={!mobileNavOpen}
            onClick={this.closeMobileNav}
          />

          <div
            id="banner-mobile-nav"
            className={`page-header__drawer${mobileNavOpen ? " page-header__drawer--open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            aria-hidden={!mobileNavOpen}
          >
            <nav className="site-nav site-nav--mobile" aria-label="Primary">
              {NAV_LINKS.map(({ href, label }) => (
                <a key={href} href={href} onClick={this.onMobileNavClick}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="page-header__drawer-footer">
              <ThemeToggle className="theme-toggle--mobile-drawer" />
            </div>
          </div>
        </header>
        <div
          className="banner"
          ref={this.bannerRef}
        >
          <div className="banner__cursor-layer" aria-hidden="true">
            <span className="banner__orb banner__orb--1" />
            <span className="banner__orb banner__orb--2" />
            <span className="banner__orb banner__orb--3" />
            <div className="banner__cursor-sheen" />
          </div>
          <section className="contentWrapper banner-hero banner-hero--panel">
            <div className="banner-hero__foreground">
              <div className="banner-hero__intro">
                <p className="banner-hero__job-title">
                  Associate Project Manager at Ernst &amp; Young
                </p>
                <p className="banner-hero__job-focus">Delivery &amp; stakeholder alignment</p>
              </div>
              <h1 className="banner-hero__title">
                <span className="banner-hero__name">Abin Thaha Azees</span>
              </h1>
              <p className="banner-hero__role">
                Programs, roadmaps, and cross-functional execution—with a strong technical
                background when teams need depth.
              </p>
              <a
                href={resumePdf}
                download="Abin Thaha Azees - Resume.pdf"
                className="banner-resume-btn banner-hero__cta"
              >
                Download Resume
              </a>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Banner;
