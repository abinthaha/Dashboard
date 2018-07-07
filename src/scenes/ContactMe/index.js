import React, { Component } from 'react';
import './index.css';

class ContactMe extends Component {
  render() {
    return (
      <section className="contact-me even" id={this.props.elId}>
        <div className='wrapper'>
            <div className='each-section experience'>
	        	<h2>My <span className="signature">Experience</span></h2>
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
        </div>
      </section>
    );
  }
}

export default ContactMe;
