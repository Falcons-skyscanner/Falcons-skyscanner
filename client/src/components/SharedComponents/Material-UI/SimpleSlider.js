import React, { Component } from "react"
import Slider from "react-slick"


class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000
    };
    
    return (
      <div>
        
        <Slider {...settings}>
          <div className='img_container'>
          </div>
          <div className='img_container1'>
          </div>
          <div className='img_container2' >
          </div>
          <div className='img_container3' >
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider