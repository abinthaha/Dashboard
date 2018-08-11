import React, { Component } from 'react';
import './index.css';
import resumePdf from '../../assets/Abinthaha Azeez Resume.pdf'

class Banner extends Component {
	constructor(props) {
		super();
		this.state = {
			shouldNotify: false,
			isGhPages: false
		}
		this.handleCloseClick = this.handleCloseClick.bind(this);		
	}

	componentDidMount() {
		if(window.location.href.indexOf("github") > 0) {
			this.setState({
				...this.state,
				isGhPages: true
			})
		}
		setTimeout(function() {
	        this.setState({shouldNotify: true})
	    }.bind(this),500);
        
        setTimeout(function() {
	        this.setState({shouldNotify: false})
	    }.bind(this),10000);

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
	}

	handleCloseClick() {
		this.setState({shouldNotify: false})
	}
  	
  	render() {
    	return (
    		<section className='even banner-wrapper' id={this.props.elId}>
    			{
    				this.state.isGhPages ? (
    					<span className={'notification ' + (this.state.shouldNotify ? 'active' : '')}>
		    				<span className='close-btn' onClick={ev => this.handleCloseClick()}>
		    					<i className='fa fa-times'></i>
		    				</span>
		    				<span className='content'>Yeah, I know! This is in gh-pages. Still looking for a nice domain. :)</span>
		    			</span>
					) : ''
    			}
    			
		    	<header className='page-header'>
					<span className="signature">
						Abinthaha
					</span>
		      	</header>
		      	<div className='banner asyncImage'>
		      		<span className='user-image asyncImage'></span>
		      		<h1><span className='title'>Hey, I'm</span> Abin Thaha Azeez</h1>
		      		<h2>FRONT-END ENGINEER</h2>
		      		<a href={resumePdf} className='download-resume-btn' download="Abin Thaha Azeez Resume.pdf">Download Resume</a>
		      		<span className='quote'>"Yes, I'm the CSS to your HTML"</span>
		      		<span className='small-desc'>Specializing in building everything from small business sites to rich interactive web apps.</span>
		      	</div>
	      	</section>
    	);
  	}
}

export default Banner;
