import React, { Component } from "react";
import "./index.css";

const SERVICES = [
  {
    name: "Web development",
    icon: "fas fa-code",
    description:
      "Take a site from scratch—structure, UI, and backend integration—or maintain and evolve an existing codebase with confidence.",
  },
  {
    name: "Web design",
    icon: "fas fa-laptop",
    description:
      "When designs are thin, I help shape layouts and components that fit the product, brand, and business goals.",
  },
  {
    name: "Fully responsive",
    icon: "fas fa-mobile-alt",
    description:
      "Layouts are exercised across breakpoints so the experience stays consistent on phones, tablets, desktops, and large screens.",
  },
  {
    name: "Documented, maintainable code",
    icon: "far fa-file-alt",
    description:
      "Code structured for teammates to onboard quickly: clear naming, sensible boundaries, and notes where they earn their keep.",
  },
  {
    name: "UX-aware performance",
    icon: "fas fa-tachometer-alt",
    description:
      "Balance polish with practical performance—lazy loading, bundle awareness, and measurable improvements where users feel them.",
  },
  {
    name: "Team leadership & mentoring",
    icon: "fas fa-users",
    description:
      "Lead cross-functional work, mentor engineers, set sensible standards, and keep delivery predictable through reviews and pairing.",
  },
  {
    name: "Project delivery & milestones",
    icon: "fas fa-tasks",
    description:
      "Plan and track scope, dependencies, and releases so teams know what “done” means and risks surface early—not at the deadline.",
  },
  {
    name: "Stakeholder communication",
    icon: "fas fa-comments",
    description:
      "Translate between business, design, and engineering with crisp updates, honest trade-offs, and decisions everyone can follow.",
  },
  {
    name: "Agile, iterative delivery",
    icon: "fas fa-sync-alt",
    description:
      "Facilitate iterative delivery—backlog refinement, predictable increments, and adapting the plan when priorities or context shift.",
  },
];

class Services extends Component {
  constructor(props) {
    super();
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
    const services = SERVICES.map((service, index) => (
      <div
        key={service.name}
        className="each-service"
        style={{ "--service-delay": `${index * 70}ms` }}
      >
        <span className="icon-wrapper">
          <i className={service.icon} aria-hidden="true" />
        </span>
        <h2 className="service-name">{service.name}</h2>
        <p className="desc">{service.description}</p>
      </div>
    ));

    return (
      <section
        className={"services odd " + (this.state.isViewed ? "viewed" : "")}
        id={this.props.elId}
      >
        <div className="services__inner">
          <h1 className="section-heading">
            My <span className="signature">Services</span>
          </h1>
          <p className="services-intro">
            Technical delivery, people leadership, and project execution—pick what your initiative needs.
          </p>
          <div className="service-wrapper">{services}</div>
        </div>
      </section>
    );
  }
}

export default Services;
