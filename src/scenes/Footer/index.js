import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="footer">
        <h1>Get a website that <span className='highlight'>looks amazing</span> and <span className='highlight'>actually works</span></h1>
        <div className='mail-phone'>
        	<div className='address'>
        		<span>Kalaripparambil (H),</span>
        		<span>Maniyarankudy P.O,</span>
        		<span>Vazhathoppe,</span>
        		<span>Idukki, Kerala</span>
        		<span>PIN: 685602</span>
        	</div>
        	<div className='connect'>
	        	<a href="mailto:iamabinthaha@gmail.com" className='item'>
		        	<span><i className='far fa-envelope'></i></span>
		        	<span>iamabinthaha@gmail.com</span>
	        	</a>
	        	<a href="tel:+91 9447621294" className='item'>
		        	<span><i className='fas fa-mobile-alt'></i></span>
		        	<span>+91 9447621294</span>
	        	</a>
        		<ul>
        			<li><a href='https://github.com/abinthaha'><i className='fab fa-github'></i></a></li>
        			<li><a href='https://stackoverflow.com/users/3315333/abinthaha'><i className="fab fa-stack-overflow"></i></a></li>
        			<li><a href='https://www.linkedin.com/in/abinthaha'><i className='fab fa-linkedin'></i></a></li>
        			<li><a href='https://www.instagram.com/abinthaha/'><i className='fab fa-instagram'></i></a></li>
        		</ul>
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
