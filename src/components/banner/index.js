import React from "react";
import  './styles.css'
import Slider from "react-slick";
import bannerImg from '../../assets/img/banner.png'
import bannerFull from '../../assets/img/Fullbanner.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
           <div>
      <picture>
                        <source media="(min-width: 1200px)" srcset={bannerFull} sizes="100vw" />
                        <source srcset={bannerImg} sizes="100vw" /><img src={bannerImg} />
                    </picture>
      </div>

      <div>
      <picture>
                        <source media="(min-width: 1200px)" srcset={bannerFull} sizes="100vw" />
                        <source srcset={bannerImg} sizes="100vw" /><img src={bannerImg} alt="Lotus" />
                    </picture>
      </div>
      
    </Slider>
  );
}