import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Slider from 'react-slick'

class CategSlider extends Component {
	
	constructor(props) {
      super(props);
      this.state = {
      	beSticky:false
      };
      this.handleScroll = this.handleScroll.bind(this);
  	}

  	componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

    handleScroll(event) {
	    if (window.scrollY > 700 && this.state.beSticky === false) {
	        this.setState({
	          beSticky:true
	        });
	    }else if(window.scrollY < 700 && this.state.beSticky === true){
	    	this.setState({
	          beSticky:false
	        });
	    }
	}

	render(){
		const settings = {
	      dots: false,
	      infinite: false, //true
	      speed: 500,
	      slidesToShow: 8,
	      slidesToScroll: 1, //4
	      initialSlide: 0,
	      responsive: [{
	        breakpoint: 1024,
	        settings: {
	          //slidesToShow: 7,
	          slidesToScroll: 1, //3
	          infinite: false, //true
	          dots: true
	        }
	      }, {
	        breakpoint: 600,
	        settings: {
	          slidesToShow: 4,
	          slidesToScroll: 1, //2
	          initialSlide: 1 //2
	        }
	      }, {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 2.6,
	          slidesToScroll: 1
	        }
	      }]
   		 };

   		 let section;
   		 if (this.state.beSticky && this.props.direction) {
   		 	section = (
   		 		<section className="CategSlider stickywM">
	   		 		<div className="Layout-width">
						<Slider {...settings}>
					        <div><Link to="/news">All news</Link></div>
					        <div><Link to="/news/categpage">Leadership</Link></div>
					        <div><Link to="/news/categpage">Diversity &amp; Inclusion</Link></div>
					        <div><Link to="/news/categpage">Laws & Regulation</Link></div>
					        <div><Link to="/news/categpage">Science &amp; Tech</Link></div>
					        <div><Link to="/news/categpage">Culture</Link></div>
					        <div><Link to="/news/categpage">UNLEASH News</Link></div>
					     </Slider>
					</div>
				</section>
   		 	)
   		 }else if(this.state.beSticky && !this.props.direction){
   		 	section = (
   		 		<section className="CategSlider sticky">
	   		 		<div className="Layout-width">
						<Slider {...settings}>
					        <div><Link to="/news">All news</Link></div>
					        <div><Link to="/news/categpage">Leadership</Link></div>
					        <div><Link to="/news/categpage">Diversity &amp; Inclusion</Link></div>
					        <div><Link to="/news/categpage">Laws & Regulation</Link></div>
					        <div><Link to="/news/categpage">Science &amp; Tech</Link></div>
					        <div><Link to="/news/categpage">Culture</Link></div>
					        <div><Link to="/news/categpage">UNLEASH News</Link></div>
					     </Slider>
					</div>
				</section>
   		 	)
   		 }else{
   		 	section = (
   		 		<section className={this.props.className ? "CategSlider " + this.props.className : "CategSlider"}>
	   		 		<div className="Layout-width">
						<Slider {...settings}>
					        <div><Link to="/news">All news</Link></div>
					        <div><Link to="/news/categpage">Leadership</Link></div>
					        <div><Link to="/news/categpage">Diversity &amp; Inclusion</Link></div>
					        <div><Link to="/news/categpage">Laws & Regulation</Link></div>
					        <div><Link to="/news/categpage">Science &amp; Tech</Link></div>
					        <div><Link to="/news/categpage">Culture</Link></div>
					        <div><Link to="/news/categpage">UNLEASH News</Link></div>
					     </Slider>
					</div>
				</section>
   		 	)
   		 }

		return(
			<div>{section}</div>
		)
	}
}

export default CategSlider