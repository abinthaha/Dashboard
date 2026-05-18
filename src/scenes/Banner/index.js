import React, { Component } from "react";
import "./index.css";
import resumePdf from "../../assets/Abin Thaha Azees - Resume.pdf";
import ThemeToggle from "../../common/ThemeToggle/ThemeToggle";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.bannerRef = React.createRef();
    this._moveRaf = null;
    this.onBannerMouseMove = this.onBannerMouseMove.bind(this);
    this.onBannerMouseLeave = this.onBannerMouseLeave.bind(this);
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
    return (
      <section className="even banner-wrapper" id={this.props.elId}>
        <header className="page-header">
          <a href="#banner" className="brand-link" aria-label="Abinthaha — home">
            <span className="signature">Abinthaha</span>
          </a>
          <div className="page-header__end">
            <nav className="site-nav" aria-label="Primary">
              <a href="#intro">About</a>
              <a href="#experience">Timeline</a>
              <a href="#skills">Skills</a>
              <a href="#contactMe">Contact</a>
              <a href="#portfolio">Projects</a>
              <a href="#footer">Contact</a>
            </nav>
            <ThemeToggle />
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
            <p className="banner-hero__eyebrow">
              Associate Project Manager · delivery &amp; stakeholder alignment
            </p>
            <h1 className="banner-hero__title">
              <span className="banner-hero__name">Abin Thaha Azees</span>
            </h1>
            <p className="banner-hero__role">
              Programs, roadmaps, and cross-functional execution—with a strong technical
              background when teams need depth.
            </p>
            <a
              href={resumePdf}
              className="download-resume-btn banner-hero__cta"
              download="Abin Thaha Azees - Resume.pdf"
            >
              Download resume
            </a>
            <p className="banner-hero__note">
              Based in Kochi, Kerala · open to remote-friendly roles worldwide.
            </p>
          </section>
        </div>
      </section>
    );
  }
}

export default Banner;
