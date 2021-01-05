import React, { Component } from 'react';
import './index.css';
import resumePdf from '../../assets/Abin Thaha Azees - Resume.pdf';

class Banner extends Component {

	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
	    (() => {
		  	'use strict';
		  	// Page is loaded
		  	const objects = document.getElementsByClassName('asyncImage');
		  	Array.from(objects).map((item) => {
		    	// Start loading image
			    const img = new Image();
			    img.src = item.dataset.src;
			    // Once image is loaded replace the src of the HTML element
		    	img.onload = () => {
		      		item.classList.remove('asyncImage');
		      		return item.nodeName === 'IMG' ? 
		        		item.src = item.dataset.src :        
		        		item.style.backgroundImage = `url(${item.dataset.src})`;
		    		};
		  		});
		})();

		// this.showPositionTextChange();
	}

	showPositionTextChange() {
		const that = this;
		let index = 1;
		setInterval(function() {
			const { position } = that.state;
			const trimText = position.slice(0, index);
			if(index < position.length) {
				index = index + 1;
			} else {
				index = index - 1;
			}
			that.setState({
				...that.state,
				showPosition: trimText
			})
		}, 200)
	}

  	render() {
    	return (
    		<section className='even banner-wrapper' id={this.props.elId}>
		    	<header className='page-header'>
					<span className="signature">
						Abinthaha
					</span>
		      	</header>
		      	<div className='banner asyncImage'>
		      		<span className='user-image asyncImage'></span>
		      		<h1><div className='title'>Hey, I'm</div> ABIN THAHA AZEES</h1>
		      		<h2 className='position'></h2>
		      		<a href={resumePdf} className='download-resume-btn' download="Abin Thaha Azees - Resume.pdf">Download Resume</a>
		      		<span className='quote'>"I'm the CSS to your HTML"</span>
		      		<span className='small-desc'>Specializing in building everything from small business sites to rich interactive web apps.</span>
		      	</div>
	      	</section>
    	);
  	}
}

export default Banner;
