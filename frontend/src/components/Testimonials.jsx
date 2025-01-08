import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    image: "/assets/Gaurav.jpg",
    name: "Gaurav Jain",
    product: "The Svana Diamond Earrings",
    feedback: "Recently I purchased an earring from Tara Collection...",
  },
  {
    id: 2,
    image: "/assets/BRACELETS.jpg",
    name: "Priyanka",
    product: "The Pualani Diamond Bracelet",
    feedback: "The products are very nice and designs are very unique...",
  },
  {
    id: 3,
    image: "/assets/EARRINGS.jpg",
    name: "Mukesh Gupta",
    product: "The Shemariah Diamond Ring",
    feedback: "Very best, good diamond, good gold & excellent...",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-12 bg-gray-100"> {/* Added background color */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Customers ❤ Us</h2>
        <p className="text-black-600">✨</p>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="text-center p-6 bg-red-100 rounded-lg shadow-md"> {/* Added padding, background, and shadow */}
            <p className="text-black-500 text-xl mb-4">“{testimonial.feedback}”</p>
            {/* Increased image size */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-48 h-48 object-cover mb-4 mx-auto rounded-full" // Increased size to 48x48 and added rounded full for a circular image
            />
            <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-black-500">{testimonial.product}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
