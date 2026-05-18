import React, { Component } from "react";

/**
 * Interactive resume control inspired by MarioD’s hippo button:
 * https://codepen.io/MarioD/pen/LYYwojj
 */
class BannerResumeHippo extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
    this.leftPupilRef = React.createRef();
    this.rightPupilRef = React.createRef();
    this.leftInnerRef = React.createRef();
    this.updateEyes = this.updateEyes.bind(this);
    this.measurePupils = this.measurePupils.bind(this);
    this._xMovement = 3;
    this._yMovement = 2;
    this._reducedMotion = false;
  }

  componentDidMount() {
    this._reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (this._reducedMotion) return;

    window.addEventListener("mousemove", this.updateEyes, { passive: true });
    window.addEventListener("resize", this.measurePupils);
    requestAnimationFrame(() => this.measurePupils());
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.updateEyes);
    window.removeEventListener("resize", this.measurePupils);
  }

  measurePupils() {
    const inner = this.leftInnerRef.current;
    const pupil = this.leftPupilRef.current;
    if (!inner || !pupil) return;
    const iw = inner.getBoundingClientRect().width;
    const ih = inner.getBoundingClientRect().height;
    const pw = pupil.getBoundingClientRect().width;
    const ph = pupil.getBoundingClientRect().height;
    this._xMovement = Math.max(0.5, (iw - pw) / 2);
    this._yMovement = Math.max(0.5, (ih - ph) / 2);
  }

  updateEyes(event) {
    if (this._reducedMotion) return;
    const lp = this.leftPupilRef.current;
    const rp = this.rightPupilRef.current;
    if (!lp || !rp) return;

    const w = window.innerWidth || 1;
    const h = window.innerHeight || 1;
    const posX = ((event.clientX / w) * 2 - 1) * this._xMovement;
    const posY = ((event.clientY / h) * 2 - 1) * this._yMovement;

    const t = `translate(${posX}px, ${posY}px)`;
    lp.style.transform = t;
    rp.style.transform = t;
  }

  render() {
    const { href, download, className } = this.props;

    return (
      <a
        ref={this.buttonRef}
        href={href}
        download={download}
        className={`resume-hippo-btn ${className || ""}`}
      >
        <span className="resume-hippo-btn__svg-wrap" aria-hidden="true">
          <svg
            className="resume-hippo-btn__svg"
            viewBox="0 0 242 109"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="resume-hippo__ears">
              <g className="resume-hippo__ear-left">
                <ellipse
                  className="resume-hippo__ear-left-outer"
                  transform="matrix(0.9391 -0.3436 0.3436 0.9391 -3.6062 17.8444)"
                  cx="48.5"
                  cy="19.1"
                  rx="11.4"
                  ry="13.8"
                />
                <ellipse
                  className="resume-hippo__ear-left-inner"
                  transform="matrix(0.9391 -0.3436 0.3436 0.9391 -3.8876 17.4659)"
                  cx="47.3"
                  cy="19.7"
                  rx="7.3"
                  ry="11.2"
                />
              </g>
              <g className="resume-hippo__ear-right">
                <ellipse
                  className="resume-hippo__ear-right-outer"
                  transform="matrix(0.3436 -0.9391 0.9391 0.3436 106.5379 189.869)"
                  cx="189.1"
                  cy="18.7"
                  rx="14.4"
                  ry="11.9"
                />
                <ellipse
                  className="resume-hippo__ear-right-inner"
                  transform="matrix(0.3436 -0.9391 0.9391 0.3436 106.8522 191.5127)"
                  cx="190.4"
                  cy="19.3"
                  rx="11.7"
                  ry="7.7"
                />
              </g>
            </g>
            <g className="resume-hippo__eyes">
              <defs>
                <clipPath id="resumeHippoEyeRightClip">
                  <path d="M175,25c0-11-7.8-20-17.5-20S140,14,140,25c0,0.7,0,1.3,0.1,2h34.8 C175,26.3,175,25.7,175,25z" />
                </clipPath>
              </defs>
              <g className="resume-hippo__eye-right">
                <path
                  className="resume-hippo__eye-right-outer"
                  d="M174.9,27H186c0-0.3,0-0.7,0-1c0-14.4-11.6-26-26-26c-14.4,0-26,11.6-26,26 c0,0.3,0,0.7,0,1h6.1H174.9z"
                />
                <path
                  className="resume-hippo__eye-right-inner"
                  d="M175,25c0-11-7.8-20-17.5-20S140,14,140,25c0,0.7,0,1.3,0.1,2h34.8 C175,26.3,175,25.7,175,25z"
                />
                <g clipPath="url(#resumeHippoEyeRightClip)">
                  <circle
                    ref={this.rightPupilRef}
                    className="resume-hippo__eye-right-pupil"
                    cx="158"
                    cy="18"
                    r="5"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="resumeHippoEyeLeftClip">
                  <path d="M97,25c0-11-7.8-20-17.5-20S62,14,62,25c0,0.7,0,1.3,0.1,2h34.8C97,26.3,97,25.7,97,25z" />
                </clipPath>
              </defs>
              <g className="resume-hippo__eye-left">
                <path
                  className="resume-hippo__eye-left-outer"
                  d="M96.9,27h6.1c0-0.3,0-0.7,0-1c0-14.4-11.6-26-26-26C62.6,0,51,11.6,51,26 c0,0.3,0,0.7,0,1h11.1H96.9z"
                />
                <path
                  ref={this.leftInnerRef}
                  className="resume-hippo__eye-left-inner"
                  d="M97,25c0-11-7.8-20-17.5-20S62,14,62,25c0,0.7,0,1.3,0.1,2h34.8C97,26.3,97,25.7,97,25z"
                />
                <g clipPath="url(#resumeHippoEyeLeftClip)">
                  <circle
                    ref={this.leftPupilRef}
                    className="resume-hippo__eye-left-pupil"
                    cx="80"
                    cy="17.7"
                    r="5"
                  />
                </g>
              </g>
            </g>
            <g className="resume-hippo__nostrils">
              <g className="resume-hippo__nostril-right">
                <ellipse
                  className="resume-hippo__nostril-right-outer"
                  cx="130.5"
                  cy="27.5"
                  rx="6.5"
                  ry="5.5"
                />
                <circle
                  className="resume-hippo__nostril-right-inner"
                  cx="130"
                  cy="28"
                  r="4"
                />
              </g>
              <g className="resume-hippo__nostril-left">
                <ellipse
                  className="resume-hippo__nostril-left-outer"
                  cx="106.5"
                  cy="27.5"
                  rx="6.5"
                  ry="5.5"
                />
                <circle
                  className="resume-hippo__nostril-left-inner"
                  cx="107"
                  cy="28"
                  r="4"
                />
              </g>
            </g>
            <path
              className="resume-hippo__body"
              d="M218,98H24C10.8,98,0,87.2,0,74V51c0-13.2,10.8-24,24-24h194c13.2,0,24,10.8,24,24v23 C242,87.2,231.2,98,218,98z"
            />
            <g className="resume-hippo__freckles">
              <circle className="resume-hippo__freckle" cx="13.7" cy="41.4" r="1.6" />
              <circle className="resume-hippo__freckle" cx="20.1" cy="44.7" r="1.6" />
              <circle className="resume-hippo__freckle" cx="19.6" cy="37.8" r="1.6" />
            </g>
            <defs>
              <clipPath id="resumeHippoMouthClip">
                <path d="M218,98H24C10.8,98,0,87.2,0,74V51c0-13.2,10.8-24,24-24h194c13.2,0,24,10.8,24,24v23 C242,87.2,231.2,98,218,98z" />
              </clipPath>
            </defs>
            <g className="resume-hippo__mouth" clipPath="url(#resumeHippoMouthClip)">
              <g className="resume-hippo__mouth-pieces">
                <path
                  className="resume-hippo__mouth-back"
                  d="M23.6,168.2l-3-56.1c0-7.8,6.4-14.1,14.1-14.1h172.4c7.8,0,14.1,6.4,14.1,14.1l-3,56.1"
                />
                <path
                  className="resume-hippo__tongue"
                  d="M174.9,168.2c-7.3-5-24.5-9.9-54.8-9.9s-48,5.1-54.8,9.9"
                />
              </g>
            </g>
            <g className="resume-hippo__teeth">
              <path
                className="resume-hippo__tooth-left"
                d="M115,97.9v7.5c0,2-1.7,3.6-3.6,3.6H89.7c-2,0-3.6-1.7-3.6-3.6v-7.5H115z"
              />
              <path
                className="resume-hippo__tooth-right"
                d="M154,97.9v7.5c0,2-1.7,3.6-3.6,3.6h-21.7c-2,0-3.6-1.7-3.6-3.6v-7.5H154z"
              />
            </g>
          </svg>
        </span>
        <span className="resume-hippo-btn__label">Download resume</span>
      </a>
    );
  }
}

export default BannerResumeHippo;
