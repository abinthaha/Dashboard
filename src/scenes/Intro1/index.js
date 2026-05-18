import React, { Component } from "react";
import "./index.css";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewed: false,
    };
  }

  componentDidMount() {
    if (this.props.isViewed) {
      this.setState({ isViewed: this.props.isViewed });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isViewed !== this.props.isViewed) {
      this.setState({ isViewed: this.props.isViewed });
    }
  }

  render() {
    const viewed = this.state.isViewed ? "viewed" : "";

    return (
      <div className="about-me-wrapper">
        <section
          className={`about-me odd ${viewed}`}
          id={this.props.elId}
          aria-labelledby="intro-heading focus-heading"
        >
          <div className="about-me__inner">
            <p className="about-me__kicker">
              Associate Project Manager · technically fluent
            </p>
            <div className="about-me__grid">
              <article
                className="about-panel"
                style={{ "--about-delay": "0ms" }}
              >
                <h2 id="intro-heading" className="about-panel__title">
                  Hi! I&apos;m <span className="signature">Abin Thaha</span>
                </h2>
                <div className="about-panel__content">
                  <span className="highlight">Associate Project Manager</span> with a
                  strong front-end engineering and web development background—I connect delivery, people, and
                  technology. I help teams turn ambiguous goals into{" "}
                  <span className="highlight">actionable plans</span>, keep{" "}
                  <span className="highlight">stakeholders informed</span>, and steer work
                  so increments ship without losing sight of quality. I&apos;m at home in
                  ceremonies,{" "}
                  <span className="highlight">dependency conversations</span>, and the
                  details of UX and implementation when teams need depth.
                </div>
              </article>
              <article
                className="about-panel about-panel--accent"
                style={{ "--about-delay": "90ms" }}
              >
                <h2 id="focus-heading" className="about-panel__title">
                  My <span className="signature">Focus</span>
                </h2>
                <div className="about-panel__content">
                  I care about outcomes, not buzzwords. Whether you are launching a product
                  or modernising a platform, you need{" "}
                  <span className="highlight">predictable delivery</span>,{" "}
                  <span className="highlight">honest trade-offs</span>, and partners who
                  follow through—that is how I work. If that resonates,{" "}
                  <span className="highlight">get in touch</span>; email is the easiest
                  way to start a conversation.
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Introduction;
