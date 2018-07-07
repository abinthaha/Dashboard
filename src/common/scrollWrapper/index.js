import React, { Component } from 'react';

class ScrollWrapper extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	screenHeight: 0,
	    	domSections: []
	    }
	    this.myRef = React.createRef();
	    this.setvalObj = this.setvalObj.bind(this);
  	}
	componentDidMount() {
		setTimeout(function() {
			this.setvalObj(this.props.elements);
		}.bind(this), 500)
		this.setState({
			...this.state,
			screenHeight: window.screen.height
		}, () => {
			window.onscroll = function() {
				this.state.domSections.map((eachSection) => {
					let val = eachSection.topVal - (this.state.screenHeight / 2);
					if(!eachSection.alreadyFound && (document.body.scrollTop > val || document.documentElement.scrollTop > val)) {
						eachSection.alreadyFound = true;
						this.props.setCompOnView(eachSection);
					}
				})
			}.bind(this);
		})
	}
	setvalObj(arr) {
		let sectionArr = [];
		arr.map((item) => {
			if (document.getElementById(item) && document.getElementById(item).offsetTop) {
				let itemObj = {
					id: item,
					alreadyFound: false,
					topVal: document.getElementById(item).offsetTop
				}				
				sectionArr.push(itemObj);
			}
		})
		this.setState({
			...this.state,
			domSections: sectionArr
		});
	}
	render() {
		return(
			<span ref='myRef'></span>
		)
	}
}

export default ScrollWrapper;
