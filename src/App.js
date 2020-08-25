import React, { Component } from 'react';
import './App.css';
import Banner from './scenes/Banner';
import Introduction from './scenes/Intro1';
import Skills from './scenes/Skills';
import Services from './scenes/Services';
import ContactMe from './scenes/ContactMe';
import Footer from './scenes/Footer';
import Portfolio from './scenes/Portfolio';

import ScrollWrapper from './common/scrollWrapper';
import Experience from './scenes/Experience';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      elements: ['banner', 'intro', 'skills', 'portfolio', 'services', 'contactMe', 'footer'],
      viewedComponents: {}
    }
    this.setCompOnView = this.setCompOnView.bind(this);
  }
  setCompOnView(item) {
    this.setState({
      ...this.state,
      viewedComponents: {
        ...this.state.viewedComponents,
        [item.id]: true
      }
    }, () => {
    })
  }
  render() {
    return (
      <div className="App">
        <ScrollWrapper elements={this.state.elements} setCompOnView={this.setCompOnView} />
        <Banner elId='banner' isViewed={this.state.viewedComponents.banner} />
        <Introduction elId='intro' isViewed={this.state.viewedComponents.intro} />
        <Experience elId='experience' isViewed={this.state.viewedComponents.intro} />
        <Skills elId='skills' isViewed={this.state.viewedComponents.skills} />
        <Services elId='services' isViewed={this.state.viewedComponents.services} />
        <Portfolio elId='portfolio' isViewed={this.state.viewedComponents.portfolio} />
        <ContactMe elId='contactMe' isViewed={this.state.viewedComponents.contactMe} />
        <Footer elId='footer' isViewed={this.state.viewedComponents.footer} />
      </div>
    );
  }
}

export default App;
