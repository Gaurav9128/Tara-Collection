import React, { useState } from 'react';

const NewsletterBox = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const message = encodeURIComponent(`Hello! I would like to subscribe to your newsletter. My phone number is: ${phoneNumber}`);
    const whatsappNumber = "919119129138"; // Replace with your WhatsApp number (without '+' and country code, e.g., 919876543210 for India).
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(whatsappLink, '_blank'); // Open the WhatsApp chat in a new tab/window.
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="number"
          placeholder="Enter your Phone Number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
