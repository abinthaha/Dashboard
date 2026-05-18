import React, { Component } from 'react';

class ScrollWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      domSections: []
    };
    this.myRef = React.createRef();
    this.setvalObj = this.setvalObj.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      screenHeight: window.innerHeight
    });
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    setTimeout(() => {
      this.setvalObj(this.props.elements);
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.state.domSections.forEach((eachSection) => {
      const val = eachSection.topVal - (this.state.screenHeight / 2);
      if (!eachSection.alreadyFound && scrollTop > val) {
        eachSection.alreadyFound = true;
        this.props.setCompOnView(eachSection);
      }
    });
  }

  setvalObj(arr) {
    const sectionArr = [];
    arr.forEach((item) => {
      const el = document.getElementById(item);
      if (el && el.offsetTop !== undefined) {
        sectionArr.push({
          id: item,
          alreadyFound: false,
          topVal: el.offsetTop
        });
      }
    });
    this.setState({
      ...this.state,
      domSections: sectionArr
    });
  }

  render() {
    return <span ref={this.myRef} className="scroll-wrapper-sentinel" aria-hidden="true" />;
  }
}

export default ScrollWrapper;
