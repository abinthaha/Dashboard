import React, { Component } from "react";
import "./index.css";

const workExperience = [
  {
    companyName: "Ernst & Young",
    companyUrl: "https://www.ey.com/en_in",
    jobRole: "Senior Technical Lead",
    duration: "Feb, 2022 - Present",
    technologies: [
      "HTML5", "CSS3", "SCSS", "JavaScript", "Angular 7", "React", "Redux", "Redux-toolkit", "Axios", "TypeScript", "React-router"
    ],
    responsibilities: [
      "Providing expertise and direction in front-end technologies and best practices.",
      "Leading and mentoring front-end developers, setting standards, and fostering collaboration.",
      "Collaborating with stakeholders to define project scope, timelines, and deliverables.",
      "Ensuring code quality, performance, and adherence to coding standards.",
      "Assessing new tools, frameworks, and technologies for implementation.",
      "Resolving technical challenges, optimizing processes, and improving workflows.",
      "Working with design, back-end, and QA teams for seamless project execution.",
      "Engaging with clients for requirements gathering, updates, and feedback",
      "Keeping up-to-date with industry trends, best practices, and emerging technologies.",
      "Conduct interviews as part of organizational activities, assessing candidates for their suitability and alignment with company goals"
    ],
  },
  {
    companyName: "Kloud9",
    companyUrl: "http://kloud9.nyc/",
    jobRole: "Senior Software Engineer",
    duration: "May, 2021 - Jan, 2022",
    technologies: [
      "HTML5", "CSS3", "SCSS", "JavaScript", "Angular 4", "Angular 7", "React", "Redux", "TypeScript"
    ],
    responsibilities: [
      "Develops software solutions by studying information needs, conferring with users, studying systems flow, data usage, and work processes; investigating problem areas; and following the software development lifecycle.",
      "Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.",
      "Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments, and clear code.",
      "Prepares and installs solutions by determining and designing system specifications, standards, and programming.",
      "Improves operations by conducting systems analysis and recommending changes in policies and procedures.",
      "Updates job knowledge by studying state-of-the-art development tools, programming techniques, and computing equipment, and by participating in educational opportunities, reading professional publications, maintaining personal networks, and participating in professional organizations.",
      "Protects operations by keeping information confidential.",
      "Provides information by collecting, analyzing, and summarizing development and service issues.",
      "Accomplishes engineering and organization mission by completing related results as needed.",
      "Supports and develops software engineers by providing advice, coaching, and educational opportunities.",
    ],
  },
  {
    companyName: "Ernst & Young",
    companyUrl: "https://www.ey.com/en_in",
    jobRole: "Senior Software Engineer",
    duration: "February, 2019 - May, 2021",
    technologies: [
      "HTML5", "CSS3", "SCSS", "JavaScript", "Angular 7", "React", "Redux", "TypeScript", "React-router"
    ],
    responsibilities: [
      "Designing highly efficient architecture and workflows for projects.",
      "Choosing the best frameworks/libraries according to the client requirement.",
      "Extending my service to multiple projects and mentoring junior developers with best industrial methods.",
      "Helping colleagues to solve blockers by providing efficient solution.",
      "Reviewing the code of colleagues before deploying and make sure the codes are using best industrial methods.",
      "Stay plugged into the emerging technologies/industry trends and apply them into operations and activities",
    ],
  },
  {
    companyName: "QBurst Technologies",
    companyUrl: "https://www.qburst.com/",
    jobRole: "Senior Software Developer",
    duration: "July, 2015 - January, 2019",
    technologies: [
      "HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript", "React", "Redux", "Redux-toolkit", "Reach-router"
    ],
    responsibilities: [
      "Designing, coding and modifying SEO friendly responsive web applications from layout to function and according to clients specifications.",
      "Integrate data from various back-end services and databases.",
      "End to end testing the application, creating dev test reports before delivering any tasks to the client to ensure that the application is bug free.",
      "Peer to peer code review of colleagues, share best industrial practices",
    ],
  },
];
class ContactMe extends Component {
  render() {
    return (
      <section className="contact-me odd" id={this.props.elId}>
        <div className="wrapper">
          <div className="each-section experience">
            <h2>
              My <span className="signature">Experience</span>
            </h2>
            <ul>
              {workExperience.map((work, index) => {
                return (
                  <li key={index}>
                    <h4 className="company-name">
                      <span>
                        {work.jobRole} - <a target="_blank" href={work.companyUrl}>{work.companyName}</a>
                      </span>
                      <span className="time-period">({work.duration})</span>
                    </h4>
                    <ol>
                      {work.responsibilities.map((responsibility, index) => {
                        return <li key={index}>{responsibility}</li>;
                      })}
                    </ol>
                    <h4 className='technologies'>Technologies used: {work.technologies.map(tech => <span>{tech}</span>)}</h4>

                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactMe;
