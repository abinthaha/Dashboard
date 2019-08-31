import React, { Component } from 'react';
import './index.css';

class ContactMe extends Component {
  render() {
    return (
      <section className="contact-me odd" id={this.props.elId}>
        <div className='wrapper'>
            <div className='each-section experience'>
	        	<h2>My <span className="signature">Experience</span></h2>
	            <ul>
	        		<li>
                <h4 className='company-name'>
                  <span>Senior Software Engineer - EY Global</span>
                  <span className='time-period'>(2019 February - Present)</span>
                </h4>
                <ol>
                  <li>Designing highly efficient architecture and workflows for projects.</li>
                  <li>Choosing the best frameworks/libraries according to the client requirement.</li>
                  <li>Extending my service to multiple projects and mentoring junior developers with best industrial methods.</li>
                  <li>Helping colleagues to solve blockers by providing efficient solution.</li>
                  <li>Reviewing the code of colleagues before deploying and make sure the codes are using best industrial methods.</li>
                  <li>Stay plugged into the emerging technologies/industry trends and apply them into operations and activities</li>
                </ol>
              </li>
              <li>
                <h4 className='company-name'>
                  <span>Senior Software Engineer - QBurst Technologies Pvt. Ltd.</span>
                  <span className='time-period'>(2015 July - 2019 January)</span>
                </h4>
                <ol>
                  <li>Designing, coding and modifying SEO friendly responsive web applications from layout to function and according to clients specifications.</li>
                  <li>Integrate data from various back-end services and databases.</li>
                  <li>End to end testing the application, creating dev test reports before delivering any tasks to the client to ensure that the application is bug free.</li>
                  <li>Peer to peer code review of colleagues, share best industrial practices. </li>
                </ol>
              </li>
	        	</ul>
            </div>
        </div>
      </section>
    );
  }
}

export default ContactMe;
