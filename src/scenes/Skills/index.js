import React, { Component } from 'react';
import './index.css';
class Skills extends Component {
	constructor(props) {
		super();
		this.state = {
			isViewed: false,
			skills: [
				{
					name: 'Frameworks/Library',
					items: [
						{
							name: 'Angular 2+',
							rating: 8
						}, {
							name: 'React + Redux',
							rating: 8.5
						}, {
							name: 'NodeJS + ExpressJS',
							rating: 6
						}, {
							name: 'VueJS',
							rating: 6
						}, {
							name: 'UnderscoreJS',
							rating: 7
						}, {
							name: 'Bootstrap 3/4',
							rating: 8
						}, {
							name: 'MaterialUI',
							rating: 8
						}, {
							name: 'RxJS',
							rating: 7.5
						}
					]
				}, {
					name: 'Languages',
					items: [
						{
							name: 'HTML5',
							rating: 9
						}, {
							name: 'CSS3',
							rating: 9
						}, {
							name: 'ES5',
							rating: 8
						}, {
							name: 'ES6',
							rating: 8
						}, {
							name: 'SASS/SCSS',
							rating: 9.5
						}, {
							name: 'TypeScript',
							rating: 7
						}, {
							name: 'JSX',
							rating: 8
						}, {
							name: 'Mongo DB',
							rating: 6
						}
					]
				}, {
					name: 'Social Media Integration',
					items: [
						{
							name: 'Facebook',
							rating: 7
						}, {
							name: 'Google',
							rating: 8
						}, {
							name: 'Twitter',
							rating: 6
						}, {
							name: 'Microsoft',
							rating: 7
						}
					]
				}, {
					name: 'Build Tools/Task Manager',
					items: [
						{
							name: 'Webpack',
							rating: 8
						}, {
							name: 'Gulp',
							rating: 7
						}, {
							name: 'Grunt',
							rating: 6
						}
					]
				}, {
					name: 'Version Control',
					items: [
						{
							name: 'Git',
							rating: 8
						}, {
							name: 'TFS',
							rating: 7
						}
					]
				}, {
					name: 'Package Managers',
					items: [
						{
							name: 'NPM',
							rating: 8
						}, {
							name: 'Yarn',
							rating: 6
						}
					]
				}
			]
		}
	}
	componentWillReceiveProps(nextProps) {
	    const { isViewed } = nextProps;
	    this.setState({
	        ...this.state,
	        isViewed
	    })
	}
	render() {
		const skills = this.state.skills.map((category, index) => {
			return(
				<div key={index} className='each-skill-category'>
					<h2>{category.name}</h2>
					<ul>
						{category.items.map((skill, skillIndex) =>{
							return(
								<li key={'item'+skillIndex} className='each-skill'>
									<span className='skill-name'>{skill.name}</span>
									<span className='rate-slider'>
										<span style={{ width: this.state.isViewed ? skill.rating * 10+"%" : 0 }} className='rate-bar'></span>
									</span>
								</li>
							)
						})}
					</ul>
				</div>
			)
		})
		return (
		  	<section className={'skills even ' + (this.state.isViewed ? 'viewed' : '')} id={this.props.elId}>
		  		<h1 className='section-heading'>My <span className='signature'>Skills</span></h1>
		  		<div className='skill-wrapper'>
		  			{skills}
		  		</div>
		  	</section>
		);
	}
}

export default Skills;