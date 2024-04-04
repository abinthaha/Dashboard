import React, { Component } from "react";
import "./index.css";

const certItems = [
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
      <section className="contact-me odd" id={this.props.elId}>
        <div className="wrapper">
          <div className="each-section experience">
            <h2>
              My <span className="signature">Achievements</span>
            </h2>
          </div>
          <ul className="achievement-wrapper">
            {certItems.map((item) => {
              return (
                <li className={`cert-item ${item.itemId}`}>
                  <span className="img-wrapper"></span>
                  <span className="item-name">{item.item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Achievements;
