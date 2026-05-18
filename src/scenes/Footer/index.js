import React, { Component } from "react";
import "./index.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { id: "01", icon: "fab fa-github", link: "https://github.com/abinthaha", label: "GitHub" },
        {
          id: "02",
          icon: "fab fa-stack-overflow",
          link: "https://stackoverflow.com/users/3315333/abinthaha",
          label: "Stack Overflow",
        },
        { id: "03", icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/abinthaha", label: "LinkedIn" },
        { id: "04", icon: "fab fa-instagram", link: "https://www.instagram.com/abinthaha", label: "Instagram" },
        { id: "05", icon: "fab fa-codepen", link: "https://codepen.io/abinthaha", label: "CodePen" },
      ],
    };
  }

  render() {
    const links = this.state.links.map((item) => (
      <li key={item.id}>
        <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
          <i className={item.icon} aria-hidden="true" />
        </a>
      </li>
    ));

    return (
      <section id={this.props.elId}>
        <div className="footer">
          <div className="notification">
            Built with React. See the{" "}
            <a
              href="https://github.com/abinthaha/Dashboard/blob/master/package.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              dependency list on GitHub
            </a>
            .
          </div>

          <div className="footer__main">
            <h2 className="footer-tagline">
              Get a website that <span className="footer-tagline__accent">looks amazing</span>{" "}
              and <span className="footer-tagline__accent">actually works</span>
            </h2>

            <div className="footer-contact">
              <div className="footer-contact__location">
                <p className="footer-contact__line">Kochi, Ernakulam, Kerala, India</p>
                <p className="footer-contact__line footer-contact__line--muted">
                  Open to remote-friendly roles worldwide
                </p>
              </div>

              <div className="footer-contact__divider" aria-hidden="true" />

              <div className="footer-contact__panel">
                <p className="footer-contact__hint">
                  <a href="#contactMe">Email &amp; phone — Get in touch</a>
                </p>
                <ul className="footer-contact__social">{links}</ul>
              </div>
            </div>
          </div>
        </div>

        <footer className="copyright-footer">
          Copyright © {new Date().getFullYear()} · Hosted by abinthaha
        </footer>
      </section>
    );
  }
}

export default Footer;
