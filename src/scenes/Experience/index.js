import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./index.css";
import { CAREER_JOURNEY } from "../../data/careerExperience";

const CAREER_START = new Date("2015-07-13T00:00:00");

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewed: false,
      experience: {
        year: 0,
        month: 0,
        days: 0,
      },
      modalRoleIndex: null,
    };
    this.modalCloseRef = React.createRef();
    this._lastFocusEl = null;
    this.onModalKeyDown = this.onModalKeyDown.bind(this);
    this.closeRoleModal = this.closeRoleModal.bind(this);
  }

  componentDidMount() {
    if (this.props.isViewed) {
      this.setState({ isViewed: this.props.isViewed });
    }
    this.updateTenure(CAREER_START, new Date());
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isViewed !== this.props.isViewed) {
      this.setState({ isViewed: this.props.isViewed });
    }

    const opened =
      prevState.modalRoleIndex === null && this.state.modalRoleIndex !== null;
    const closed =
      prevState.modalRoleIndex !== null && this.state.modalRoleIndex === null;

    if (opened) {
      this._lastFocusEl =
        typeof document !== "undefined" ? document.activeElement : null;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", this.onModalKeyDown);
      requestAnimationFrame(() => {
        if (this.modalCloseRef.current) {
          this.modalCloseRef.current.focus();
        }
      });
    }
    if (closed) {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", this.onModalKeyDown);
      if (this._lastFocusEl && typeof this._lastFocusEl.focus === "function") {
        this._lastFocusEl.focus();
      }
      this._lastFocusEl = null;
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onModalKeyDown);
    document.body.style.overflow = "";
  }

  onModalKeyDown(e) {
    if (e.key === "Escape") {
      this.closeRoleModal();
    }
  }

  closeRoleModal() {
    this.setState({ modalRoleIndex: null });
  }

  openRoleModal(index) {
    this.setState({ modalRoleIndex: index });
  }

  updateTenure(from, to) {
    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();
    let days = to.getDate() - from.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonthEnd = new Date(to.getFullYear(), to.getMonth(), 0);
      days += prevMonthEnd.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    this.setState({
      experience: {
        year: Math.max(0, years),
        month: Math.max(0, months),
        days: Math.max(0, days),
      },
    });
  }

  renderRoleModal() {
    const { modalRoleIndex } = this.state;
    if (modalRoleIndex === null) return null;

    const role = CAREER_JOURNEY[modalRoleIndex];
    if (!role) return null;

    const titleId = "experience-role-modal-title";

    const modal = (
      <div className="experience-modal" role="presentation">
        <button
          type="button"
          className="experience-modal__backdrop"
          aria-label="Close role details"
          onClick={this.closeRoleModal}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="experience-modal__dialog"
        >
          <div className="experience-modal__header">
            <div className="experience-modal__titles">
              <h2 className="experience-modal__role" id={titleId}>
                {role.jobRole}
              </h2>
              <p className="experience-modal__company">
                <a
                  href={role.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {role.companyName}
                </a>
              </p>
              <p className="experience-modal__duration">{role.duration}</p>
            </div>
            <button
              type="button"
              ref={this.modalCloseRef}
              className="experience-modal__close"
              onClick={this.closeRoleModal}
            >
              Close
            </button>
          </div>

          <p className="experience-modal__summary">{role.summary}</p>

          <h3 className="experience-modal__subheading">Responsibilities</h3>
          <ol className="experience-modal__list">
            {role.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>

          <h3 className="experience-modal__subheading">Technologies</h3>
          <ul className="experience-modal__tech" aria-label="Technologies">
            {role.technologies.map((tech) => (
              <li key={tech}>
                <span className="experience-modal__chip">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    return createPortal(modal, document.body);
  }

  render() {
    const { experience, modalRoleIndex } = this.state;
    const viewed = this.state.isViewed ? "viewed" : "";
    const lastIndex = CAREER_JOURNEY.length - 1;

    return (
      <section
        className={`experience odd ${viewed}`}
        id={this.props.elId}
        aria-labelledby="experience-heading"
      >
        <div className="experience__inner">
          <h1 className="section-heading" id="experience-heading">
            My <span className="signature">Experience</span>
          </h1>

          <div className="experience-map" aria-describedby="experience-map-desc">
            <p id="experience-map-desc" className="visually-hidden">
              Vertical path with four stops from present to earliest role; each stop
              opens role details in a dialog.
            </p>

            <div className="experience-map__decor" aria-hidden="true">
              <span className="experience-map__cloud experience-map__cloud--1" />
              <span className="experience-map__cloud experience-map__cloud--2" />
              <span className="experience-map__cloud experience-map__cloud--3" />
            </div>

            <div className="experience-map__legend">
              <div className="experience-map__legend-map-icon" aria-hidden="true">
                <span className="experience-map__legend-fold" />
              </div>
              <div className="experience-map__legend-body">
                <p className="experience-map__legend-title">Expedition stats</p>
                <p className="experience-map__legend-line">
                  <strong>{experience.year}</strong> years,{" "}
                  <strong>
                    {experience.month} mo · {experience.days} d
                  </strong>{" "}
                  since <time dateTime="2015-07-13">13 July 2015</time>
                </p>
                {/* <ul className="experience-map__legend-stats" role="list">
                  {stats.map((s) => (
                    <li
                      key={s.label}
                      className="experience-map__legend-stat"
                      style={{ "--stat-delay": s.delay }}
                    >
                      <span className="experience-map__legend-stat-value">
                        {s.value}
                      </span>
                      <span className="experience-map__legend-stat-label">
                        {s.label}
                      </span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>

            <div className="experience-map__route-wrap">
              <div className="experience-map__rail" aria-hidden="true" />
              <ol className="experience-map__route">
                {CAREER_JOURNEY.map((stop, index) => {
                  const isCurrent = index === 0;
                  const isStart = index === lastIndex;
                  const side = index % 2 === 0 ? "right" : "left";
                  const expanded = modalRoleIndex === index;

                  return (
                    <li
                      key={stop.id}
                      className={`experience-map__stop experience-map__stop--${side} ${
                        isStart ? "experience-map__stop--start" : ""
                      } ${isCurrent ? "experience-map__stop--current" : ""}`}
                      style={{ "--stop-i": index }}
                      aria-current={isCurrent ? "step" : undefined}
                    >
                      <button
                        type="button"
                        className="experience-map__card"
                        onClick={() => this.openRoleModal(index)}
                        aria-expanded={expanded}
                        aria-haspopup="dialog"
                      >
                        <span className="experience-map__card-hint">
                          View responsibilities
                        </span>
                        <span className="experience-map__card-body">
                          <span className="experience-map__card-head">
                            <span className="experience-map__role">{stop.jobRole}</span>
                            <span className="experience-map__company">
                              {stop.companyName}
                            </span>
                            <span className="experience-map__period">
                              {stop.mapPeriod}
                            </span>
                          </span>
                          <span className="experience-map__blurb">{stop.summary}</span>
                        </span>
                      </button>

                      <div className="experience-map__node-column">
                        <div className="experience-map__node-ring">
                          {isStart && (
                            <span className="experience-map__flag" title="Start">
                              <span className="visually-hidden">Journey start</span>
                            </span>
                          )}
                          {isCurrent && (
                            <div className="experience-map__you-are-here">
                              <span className="experience-map__mascot" aria-hidden="true">
                                <span className="experience-map__mascot-face">
                                  <span className="experience-map__mascot-eye" />
                                  <span className="experience-map__mascot-eye" />
                                  <span className="experience-map__mascot-smile" />
                                </span>
                              </span>
                              <span className="experience-map__you-label">
                                I&apos;m here
                              </span>
                            </div>
                          )}
                          {!isStart && !isCurrent && (
                            <span className="experience-map__pin" aria-hidden="true" />
                          )}
                        </div>
                      </div>

                      <div className="experience-map__spacer" aria-hidden="true" />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
        {this.renderRoleModal()}
      </section>
    );
  }
}

export default Experience;
