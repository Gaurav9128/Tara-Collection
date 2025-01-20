import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

   import T from '../assets/C7.png';
   import T2 from '../assets/C2.png';
   import T3 from '../assets/C3.png';
   import T4 from '../assets/C4.png';
   import T5 from '../assets/C5.png';
   import T6 from '../assets/C6.png';

const Hero = () => {
  const carouselImages = [T,T2,T3,T4,T5,T6];

  const settings = {
    dots: false, // Disable dots
    infinite: true, // Loop the slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Duration for each slide
    arrows: false, // Hide navigation arrows
    pauseOnHover: false, // Prevent pausing on hover
  };

  return (
    <div className="w-full h-full">
      {/* Add padding/margin to create a gap */}
      <div className="mt-12">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="h-full">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
