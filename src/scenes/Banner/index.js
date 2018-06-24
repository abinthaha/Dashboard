import React, { Component } from 'react';
import './index.css';

class Banner extends Component {
  	render() {
    	return (
    		<section className='even'>
		    	<header className='page-header'>
					<span className="signature">
						Abinthaha
					</span>
		      	</header>
		      	<div className='banner'>
		      		<span className='user-image'></span>
		      		<h1><span className='title'>Hey, I'm</span> Abin Thaha Azeez</h1>
		      		<h2>FRONT-END ENGINEER</h2>
		      		<a href="../../assets/Abinthaha_resume.pdf" download="Abin Thaha Azeez.pdf" className='download-resume-btn'>Download Resume</a>
		      		<span className='quote'>"Yes, I'm the CSS to your HTML"</span>
		      		<span className='small-desc'>Specializing in building everything from small business sites to rich interactive web apps.</span>
		      	</div>
	      	</section>
    	);
  	}
}

export default Banner;
