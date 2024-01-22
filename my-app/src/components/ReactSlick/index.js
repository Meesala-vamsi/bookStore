import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

class ReactSlick extends Component {
    render() {
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          autoplay:true,
          dotsClass: "slick-dots",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slider-image-container">
                <img src='https://res.cloudinary.com/db0f83m76/image/upload/v1705758901/6905290_aptjz5.jpg' alt='' className="slick-image"/>
              </div>
              <div className="slider-image-container">
                <img src='https://res.cloudinary.com/db0f83m76/image/upload/v1705758410/6884830_oas8g0.jpg' alt='' className="slick-image"/>
              </div>
              <div className="slider-image-container">
                <img src='https://res.cloudinary.com/db0f83m76/image/upload/v1705808657/opened-book-near-leaves-box_si1cok.jpg' alt='' className="slick-image"/>
              </div>
            </Slider>
          </div>
        );
    }
}

export default ReactSlick