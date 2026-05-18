import React, { Component } from "react";
import "./index.css";

const certItems = [
  {
    id: 6,
    item: "GitHub Copilot Certification Program (GH-300)",
    itemId: "copilot",
  },
  {
    id: 5,
    item: "Scrum Foundation Professional Certification (SFPC)",
    itemId: "scrum",
  },
  {
    id: 1,
    item: "Google Analytics Certification",
    itemId: "ga",
  },
  {
    id: 2,
    item: "Microsoft 365: Fundamentals",
    itemId: "ms365",
  },
  {
    id: 3,
    item: "Microsoft Azure: Fundamentals",
    itemId: "azure",
  },
  {
    id: 4,
    item: "Programming in HTML5 with JavaScript and CSS3",
    itemId: "html",
  },
];

class Achievements extends Component {
  render() {
    return (
      <section
        className="achievements-section odd"
        id={this.props.elId}
        aria-labelledby="achievements-heading"
      >
        <div className="achievements-section__inner">
          <h1 className="section-heading" id="achievements-heading">
            My <span className="signature">Achievements</span>
          </h1>
          <p className="achievements-intro">
            Certifications and credentials — this grid grows as new ones are added.
          </p>
          <ul className="achievement-grid">
            {certItems.map((item) => (
              <li
                key={item.id}
                className={`achievement-card-wrap achievement-card-wrap--${item.itemId}`}
              >
                <article className="achievement-card">
                  <div className="achievement-card__badge" aria-hidden="true">
                    <span
                      className={`achievement-card__img achievement-card__img--${item.itemId}`}
                    />
                  </div>
                  <h3 className="achievement-card__title" id={`cert-title-${item.id}`}>
                    {item.item}
                  </h3>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Achievements;
