import React, { Component } from 'react';
import './App.css';
import Banner from './scenes/Banner';
import Introduction from './scenes/Intro1';
import Skills from './scenes/Skills';
import Services from './scenes/Services';
import ContactMe from './scenes/ContactMe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Introduction />
        <Skills />
        <Services />
        <ContactMe />
      </div>
    );
  }
}

export default App;
