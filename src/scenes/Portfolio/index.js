import React, { Component } from "react";
import "./index.css";

class Portfolio extends Component {
  constructor(props) {
    super();
    this.state = {
      flippedId: null,
      projectList: [
        {
          id: 1,
          projectName: "KTM Challenge",
          type: "Assessment · hobby",
          hostedUrl: "https://abinthaha.github.io/Dashboard",
          codeUrl: "https://github.com/abinthaha/KTM-Client",
          isHosted: false,
        },
        {
          id: 2,
          projectName: "Upcomer replication",
          type: "UI clone · hobby",
          hostedUrl: "https://abinthaha.github.io/Upcomer/",
          codeUrl: "https://github.com/abinthaha/Upcomer",
          isHosted: true,
        },
        {
          id: 3,
          projectName: "Movie listing",
          type: "Movies · hobby",
          hostedUrl: "https://abinthaha.github.io/Movie-Listing/",
          codeUrl: "https://github.com/abinthaha/Movie-Listing-Code",
          isHosted: true,
        },
        {
          id: 4,
          projectName: "Why So Serious",
          type: "Game · hobby",
          hostedUrl: "https://abinthaha.github.io/whySoSerious/",
          codeUrl: "https://github.com/abinthaha/whySoSerious",
          isHosted: true,
        },
        {
          id: 5,
          projectName: "Scroll parallax",
          type: "Motion · hobby",
          hostedUrl: "https://abinthaha.github.io/Scroll-Parallax/",
          codeUrl: "https://github.com/abinthaha/Scroll-Parallax",
          isHosted: true,
        },
        {
          id: 6,
          projectName: "Random balls",
          type: "Canvas · hobby",
          hostedUrl: "https://abinthaha.github.io/Balls-Random/",
          codeUrl: "https://github.com/abinthaha/Balls-Random",
          isHosted: true,
        },
      ],
    };
  }

  toggleCard = (id, event) => {
    if (event && event.target.closest("a")) {
      return;
    }
    this.setState((prev) => ({
      flippedId: prev.flippedId === id ? null : id,
    }));
  };

  onCardKeyDown = (id, event) => {
    if (event.key === "Enter" || event.key === " ") {
      const target = event.target;
      if (target && target.closest && target.closest("a")) {
        return;
      }
      event.preventDefault();
      this.toggleCard(id, event);
    }
  };

  render() {
    const { flippedId, projectList } = this.state;

    const projectListMarkup = projectList.map((projectItem, index) => {
      const flipped = flippedId === projectItem.id;
      const cardLabel = `${projectItem.projectName}. ${
        flipped ? "Showing links" : "Press Enter or click to show links"
      }`;

      return (
        <li
          key={projectItem.id}
          className={`flip-card flip-card--project-${projectItem.id} ${
            flipped ? "is-flipped" : ""
          }`}
          style={{ "--portfolio-stagger": `${index * 75}ms` }}
          tabIndex={0}
          role="button"
          aria-expanded={flipped}
          aria-label={cardLabel}
          onClick={(e) => this.toggleCard(projectItem.id, e)}
          onKeyDown={(e) => this.onCardKeyDown(projectItem.id, e)}
        >
          <div className="flip-card-inner" role="presentation">
            <div className="flip-card-front">
              <div className="flip-card-front__scrim" aria-hidden="true" />
              <div className="flip-card-front__content">
                <span className="flip-card-front__label">{projectItem.projectName}</span>
                <span className="flip-card-front__meta">{projectItem.type}</span>
                <span className="flip-card-front__hint" aria-hidden="true">
                  <span className="flip-card-front__hint-text">View links</span>
                  <i className="fas fa-arrow-right flip-card-front__hint-icon" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="flip-card-back__header">
                <span className="flip-card-back__title">{projectItem.projectName}</span>
                <span className="flip-card-back__meta">{projectItem.type}</span>
              </div>
              <div className="flip-card-back__links links">
                {projectItem.isHosted ? (
                  <a
                    className="card-label"
                    title="Open live site"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projectItem.hostedUrl}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="icon-wrapper">
                      <i className="fas fa-laptop" aria-hidden="true" />
                    </span>
                    <span className="visually-hidden">Live site</span>
                  </a>
                ) : null}

                <a
                  className="card-label"
                  title="View source"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={projectItem.codeUrl}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="icon-wrapper">
                    <i className="far fa-file-alt" aria-hidden="true" />
                  </span>
                  <span className="visually-hidden">Source code</span>
                </a>
              </div>
              <span className="flip-card-back__dismiss" aria-hidden="true">
                Click or Enter to flip back
              </span>
            </div>
          </div>
        </li>
      );
    });

    return (
      <section className="even portfolio-wrapper" id={this.props.elId}>
        <div className="portfolio-wrapper__inner">
          <h2 className="section-heading portfolio-heading">
            My <span className="signature">Portfolio</span>
          </h2>
          <p className="portfolio-intro">
            Selected builds and experiments — flip a card for live demo and source links.
          </p>
          <ul className="project-list-wrapper flip-wrapper">{projectListMarkup}</ul>
        </div>
      </section>
    );
  }
}

export default Portfolio;
