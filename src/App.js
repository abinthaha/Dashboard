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
import Achievements from './scenes/Achievements';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      elements: ['banner', 'intro', 'experience', 'skills', 'achievements', 'services', 'portfolio', 'contactMe', 'footer'],
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
        <a href="#main" className="skip-link">Skip to main content</a>
        <ScrollWrapper elements={this.state.elements} setCompOnView={this.setCompOnView} />
        <main id="main">
          <Banner elId='banner' isViewed={this.state.viewedComponents.banner} />
          <Introduction elId='intro' isViewed={this.state.viewedComponents.intro} />
          <Experience elId='experience' isViewed={this.state.viewedComponents.experience} />
          <Skills elId='skills' isViewed={this.state.viewedComponents.skills} />
          <Achievements elId='achievements' isViewed={this.state.viewedComponents.achievements} />
          <Services elId='services' isViewed={this.state.viewedComponents.services} />
          <Portfolio elId='portfolio' isViewed={this.state.viewedComponents.portfolio} />
          <ContactMe elId='contactMe' isViewed={this.state.viewedComponents.contactMe} />
          <Footer elId='footer' isViewed={this.state.viewedComponents.footer} />
        </main>
      </div>
    );
  }
}

export default App;
