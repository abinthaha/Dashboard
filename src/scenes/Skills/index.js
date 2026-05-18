import React, { PureComponent } from "react";
import "./index.css";

const SKILL_CATEGORIES = [
  {
    name: "Frameworks & libraries",
    items: [
      "Angular 2+",
      "React & Redux",
      "Next.js",
      "Redux Toolkit",
      "Node.js & Express",
      "Vue & Vuex",
      "Underscore.js",
      "Bootstrap 3/4",
      "Material UI",
      "RxJS",
    ],
  },
  {
    name: "Languages",
    items: [
      "HTML5",
      "CSS3",
      "ES5 & ES6+",
      "Sass / SCSS",
      "TypeScript",
      "JSX / TSX",
      "MongoDB & SQL",
    ],
  },
  {
    name: "Integrations & analytics",
    items: ["Facebook", "Google", "Twitter", "Microsoft", "Google Analytics"],
  },
  {
    name: "Version control",
    items: ["Git", "TFS"],
  },
  {
    name: "Package managers",
    items: ["npm", "Yarn"],
  },
  {
    name: "Platforms",
    items: ["Ubuntu", "Windows"],
  },
  {
    name: "Delivery & collaboration",
    items: ["Azure DevOps", "Jira"],
  },
  {
    name: "Deployment",
    items: [
      "GitHub",
      "Azure",
      "AWS",
      "AWS Lambda",
      "API Gateway",
      "Serverless Framework",
      "Heroku",
      "Netlify",
      "Vercel",
    ],
  },
  {
    name: "Build tooling",
    items: ["Webpack", "Gulp", "Grunt"],
  },
];

class Skills extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isViewed: false,
    };
  }

  componentDidMount() {
    if (this.props.isViewed) {
      this.setState({ isViewed: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isViewed !== this.props.isViewed) {
      this.setState({ isViewed: this.props.isViewed });
    }
  }

  render() {
    const skills = SKILL_CATEGORIES.map((category, index) => (
      <div
        key={category.name || index}
        className="skill-category-card"
        style={{ "--card-delay": `${index * 45}ms` }}
      >
        <div className="skill-category-card__shine" aria-hidden="true" />
        <header className="skill-category-card__header">
          <span className="skill-category-card__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="skill-category-card__title">{category.name}</h2>
        </header>
        <ul className="skill-chip-list" aria-label={category.name}>
          {category.items.map((name) => (
            <li key={name}>
              <span className="skill-chip">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    ));

    return (
      <section
        className={"skills even " + (this.state.isViewed ? "viewed" : "")}
        id={this.props.elId}
        aria-labelledby="skills-heading"
      >
        <h1 className="section-heading" id="skills-heading">
          My <span className="signature">Skills</span>
        </h1>
        <p className="skills-intro">
          Tools and stacks I use regularly across products and teams.
        </p>
        <div className="skill-wrapper">{skills}</div>
      </section>
    );
  }
}

export default Skills;
