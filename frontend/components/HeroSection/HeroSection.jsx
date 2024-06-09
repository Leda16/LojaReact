import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: dots => <ul style={{ bottom: '-15px' }}>{dots}</ul>,
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <Slider {...settings}>
        <div className="relative">
          <img src="/images/banner1.jpg" alt="Banner 1" className="w-full h-auto rounded-lg" />
        </div>
        <div className="relative">
          <img src="/images/banner2.jpg" alt="Banner 2" className="w-full h-auto rounded-lg" />
        </div>
        <div className="relative">
          <img src="/images/banner3.jpg" alt="Banner 3" className="w-full h-auto rounded-lg" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
