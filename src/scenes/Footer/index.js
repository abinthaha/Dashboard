import React, { Component } from 'react';
import './index.css';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            links: [
                {
                    id: '01',
                    icon: 'fab fa-github',
                    link: 'https://github.com/abinthaha'
                }, {
                    id: '02',
                    icon: 'fab fa-stack-overflow',
                    link: 'https://stackoverflow.com/users/3315333/abinthaha'
                }, {
                    id: '03',
                    icon: 'fab fa-linkedin',
                    link: 'https://www.linkedin.com/in/abinthaha'
                }, {
                    id: '04',
                    icon: 'fab fa-instagram',
                    link: 'https://www.instagram.com/abinthaha'
                }, {
                    id: '05',
                    icon: 'fab fa-codepen',
                    link: 'https://codepen.io/abinthaha'
                }
            ]
        }
    }
  render() {
    const links = this.state.links.map((item, index) => {
        return (
            <li key={item.id}><a href={item.link} target="_blank"><i className={item.icon}></i></a></li>
        );
    })
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
                    {links}
        		</ul>
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
