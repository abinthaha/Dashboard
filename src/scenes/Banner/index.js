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
		      		<h1>Hi! I'm Abin Thaha Azeez</h1>
		      		<h2>Web Developer</h2>
		      		<span className='download-resume-btn'>Download Resume</span>
		      	</div>
	      	</section>
    	);
  	}
}

export default Banner;
