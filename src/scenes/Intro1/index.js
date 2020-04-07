import React, { Component } from 'react';
import './index.css';

class Introduction extends Component {
    constructor(props) {
        super();
        this.state = {
            isViewed: false
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
    return (
      <section className={'about-me odd ' + (this.state.isViewed ? 'viewed' : '')} id={this.props.elId}>
        <div className='each-section'>
        	<h2>Hi! I'm <span className="signature">Abin Thaha</span></h2>
        	<div className='content'>
        		<span className='highlight'>Creative web developer</span> offering 
        		<span className='highlight'> 4+ years</span> of experience in designing and developing user interfaces, 
        		and integration with backend. Proven ability in optimising web functionality that improve
        		 data retrieval and workflow effeciancies. 
        		 Expert in interdepartmental coordination and communication. 
        		 Works with <span className='highlight'>full integrity and zest</span> and <span className='highlight'>enthusiastic</span> about the work and upcoming technologies.
        	</div>
        </div>
        <div className='each-section focus'>
        	<h2>My <span className="signature">Focus</span></h2>
            <div className='content'>
                Let's be honest and cut through the marketing fluff. You need a website that
                <span className='highlight'> looks amazing </span>and
                <span className='highlight'> actually works</span>. Bottom line, that's what
                <span className='highlight'> I do</span>. And if you want to learn more about working with me, pick up the phone and give me a call (or email).
            </div>
        </div>
    </section>
    );
  }
}

export default Introduction;
