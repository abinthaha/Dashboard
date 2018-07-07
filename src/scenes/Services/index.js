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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.'
      }, {
        name: 'Web Design',
        icon: 'fas fa-laptop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.'
      }, {
        name: 'Fully Responsive',
        icon: 'fas fa-mobile-alt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.'
      }, {
        name: 'Well Documented',
        icon: 'far fa-file-alt',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.'
      }, {
        name: 'Clean Code',
        icon: 'far fa-copy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.'
      }, {
        name: 'Video Training',
        icon: 'far fa-file-video',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula quis lectus rhoncus porttitor ac ut quam.'
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
          <span><i className={service.icon}></i></span>
          <h2 className='service-name'>{service.name}</h2>
          <p>{service.description}</p>
        </div>
      )
    })
    return (
      <div className={'services odd ' + (this.state.isViewed ? 'viewed' : '')} id={this.props.elId}>
        <h1 className='section-heading'>My <span className='signature'>Services</span></h1>
        <div className='service-wrapper'>
          {services}
        </div>
      </div>
    );
  }
}

export default Services;
