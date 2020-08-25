import React, { Component } from 'react';
import './index.css'

class Portfolio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			projectList: [
				{
					id: 1,
					projectName: 'KTM Challenge',
					type: 'Assessment, Hobby',
					hostedUrl: 'https://abinthaha.github.io/Dashboard',
					codeUrl: 'https://github.com/abinthaha/KTM-Client',
					isHosted: false
				}, {
					id: 2,
					projectName: 'Upcomer Replication',
					type: 'Hobby',
					hostedUrl: 'https://abinthaha.github.io/Upcomer/',
					codeUrl: 'https://github.com/abinthaha/Upcomer',
					isHosted: true
				}, {
					id: 3,
					projectName: 'Movie Listing',
					type: 'Movies, Hobby',
					hostedUrl: 'https://abinthaha.github.io/Movie-Listing/',
					codeUrl: 'https://github.com/abinthaha/Movie-Listing-Code',
					isHosted: true
				}, {
					id: 4,
					projectName: 'Why So Serious',
					type: 'Game, Hobby',
					hostedUrl: 'https://abinthaha.github.io/Movie-Listing/',
					codeUrl: 'https://github.com/abinthaha/whySoSerious',
					isHosted: true
				}, {
					id: 5,
					projectName: 'Scroll Parallax',
					type: 'Hobby',
					hostedUrl: 'https://abinthaha.github.io/Scroll-Parallax/',
					codeUrl: 'https://github.com/abinthaha/Scroll-Parallax',
					isHosted: true
				}, {
					id: 6,
					projectName: 'Random Balls',
					type: 'Hobby',
					hostedUrl: 'https://abinthaha.github.io/Balls-Random/',
					codeUrl: 'https://github.com/abinthaha/Balls-Random',
					isHosted: true
				}
			]
		}
	}
	
	componentDidMount() {
	}

  	render() {

		const projectList = this.state.projectList.map(projectItem => {
			return (
				<li key={projectItem.id} className='flip-card'>
					<div className="flip-card-inner">
						<div className="flip-card-front"></div>
						<div className="flip-card-back">
							<span className='project-name'>
								{projectItem.projectName}
							</span>
							<span className='type'>
								{projectItem.type}
							</span>
							<span className='links'>
								{
									projectItem.isHosted ? (
										<a className='card-label' title='Website' target='_blank' href={projectItem.hostedUrl}>
											<span className='icon-wrapper'><i className="fas fa-laptop" aria-hidden="true"></i></span>
										</a>
									) : ''
								}
								
								<a className='card-label' title='Code' target='_blank' href={projectItem.codeUrl}>
									<span className='icon-wrapper'><i className="far fa-file-alt"></i></span>
								</a>
							</span>
						</div>
					</div>
				</li>
			)
		})

    	return (
    		<section className='even portfolio-wrapper' id={this.props.elId}>
		    	<h2>My <span className="signature">Portfolio</span></h2>
				<ul className='project-list-wrapper flip-wrapper'>
					{projectList}
				</ul>
	      	</section>
    	);
  	}
}

export default Portfolio;
