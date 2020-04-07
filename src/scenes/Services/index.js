import React, { Component } from 'react';
import './index.css';

class Services extends Component {
  constructor(props) {
    super();
    this.state={
      isViewed: false,
      services: [{
        name: 'Web Development',
        icon: 'fas fa-code',
        description: 'I can start the work of a website from scratch, building structure, integrating with any backend services or working and maintaining the existing ones.'
      }, {
        name: 'Web Design',
        icon: 'fas fa-laptop',
        description: 'In the absense of designs, I came up with the best designs that suits the buisiness logic.'
      }, {
        name: 'Fully Responsive',
        icon: 'fas fa-mobile-alt',
        description: 'Each and every site including hobby projects are made in a way that fully responsive in Mobile, Tablet, Desktop and other large devices.'
      }, {
        name: 'Well Documented',
        icon: 'far fa-file-alt',
        description: "The code is maintained in a way where anyone else can easily understand what's written and the work flow."
      }, {
        name: 'Clean Code',
        icon: 'far fa-copy',
        description: 'Well defined and clean code which is self explanatory in a very reusable manner.'
      }, {
        name: 'Video Training',
        icon: 'far fa-file-video',
        description: 'The training will go over some great insights to help users understand how to get the most out of their site.'
      }]
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
    const services = this.state.services.map((service, index) => {
      return(
        <div key={index} className='each-service'>
          <span className='icon-wrapper'><i className={service.icon} aria-hidden="true"></i></span>
          <h2 className='service-name'>{service.name}</h2>
          <p className='desc'>{service.description}</p>
        </div>
      )
    })
    return (
      <section className={'services odd ' + (this.state.isViewed ? 'viewed' : '')} id={this.props.elId}>
        <h1 className='section-heading'>My <span className='signature'>Services</span></h1>
        <div className='service-wrapper'>
          {services}
        </div>
      </section>
    );
  }
}

export default Services;
