import React, { Component } from "react";
import "./index.css";

class ContactMe extends Component {
  render() {
    return (
      <section
        className="contact-section odd"
        id={this.props.elId}
        aria-labelledby="contact-heading"
      >
        <div className="contact-section__inner">
          <h1 className="section-heading" id="contact-heading">
            Get in <span className="signature">touch</span>
          </h1>
          <p className="contact-section__intro">
            For collaboration or opportunities, reach out directly. Role histories and
            responsibilities live on the{" "}
            <a href="#experience" className="contact-section__link">
              career map
            </a>{" "}
            above — open any stop for the full detail.
          </p>
          <ul className="contact-section__actions">
            <li>
              <a
                href="mailto:iamabinthaha@gmail.com"
                className="contact-section__card contact-section__card--primary"
              >
                <span className="contact-section__card-icon" aria-hidden="true">
                  <i className="far fa-envelope" />
                </span>
                <span className="contact-section__card-label">Email</span>
                <span className="contact-section__card-value">
                  iamabinthaha@gmail.com
                </span>
              </a>
            </li>
            <li>
              <a href="tel:+919447621294" className="contact-section__card">
                <span className="contact-section__card-icon" aria-hidden="true">
                  <i className="fas fa-mobile-alt" />
                </span>
                <span className="contact-section__card-label">Phone</span>
                <span className="contact-section__card-value">+91 94476 21294</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abinthaha"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-section__card"
              >
                <span className="contact-section__card-icon" aria-hidden="true">
                  <i className="fab fa-linkedin-in" />
                </span>
                <span className="contact-section__card-label">LinkedIn</span>
                <span className="contact-section__card-value">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ContactMe;
