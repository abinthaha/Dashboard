import React, { Component } from 'react';
import './index.css';

class Introduction extends Component {
  render() {
    return (
      <section className="about-me odd">
        <div className='each-section'>
        	<h2>Hi! I'm <span className="signature">Abin Thaha</span></h2>
        	<div className='content'>
        		<span className='highlight'>Creative web developer</span> offering about 
        		<span className='highlight'> 3 years</span> of experience in designing and developing user interfaces, 
        		and integration with backend. Proven ability in optimising web functionality that improve
        		 data retrieval and workflow effeciancies. 
        		 Expert in interdepartmental coordination and communication. 
        		 Works with <span className='highlight'>full integrity and zest</span> and <span className='highlight'>enthusiastic</span> about the work and upcoming technologies.
        	</div>
        </div>
        <div className='each-section experience'>
        	<h2>Experience</h2>
        	<ul>
        		<li className='company-name'>QBurst Technologies Pvt. Ltd. (2015 - Present)</li>
        		<ol>
        			<li>3 years work experience in React + Redux projects using best development practices.</li>
        			<li>Designing, coding and modifying SEO friendly responsive web applications from layout to function and according to clients specifications.</li>
        			<li>Integrate data from various back-end services and databases.</li>
        			<li>Stay plugged into emerging technologies/industry trends and apply them into operations and activities.</li>
        		</ol>
        	</ul>
        </div>
      </section>
    );
  }
}

export default Introduction;
