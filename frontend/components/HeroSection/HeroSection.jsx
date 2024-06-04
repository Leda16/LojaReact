import React from 'react';
import Slider from 'react-slick';
import { HeroContainer, Slide, SlideImage } from './HeroSection.styles';
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
    <HeroContainer>
      <Slider {...settings}>
        <Slide>
          <SlideImage src="/images/banner1.jpg" alt="Banner 1" />
        </Slide>
        <Slide>
          <SlideImage src="/images/banner2.jpg" alt="Banner 2" />
        </Slide>
        <Slide>
          <SlideImage src="/images/banner3.jpg" alt="Banner 3" />
        </Slide>
      </Slider>
    </HeroContainer>
  );
};

export default HeroSection;
