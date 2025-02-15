import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import ShopCategories from '../components/ShopCategories';
import ShopVideo from '../components/ShopVideo';
import Testimonials from '../components/Testimonials';
import { ShopContext } from '../context/ShopContext';

const Home = () => {
  const navigate = useNavigate();
  const { token } = useContext(ShopContext);

  useEffect(() => {
    if (!token) {
      // Auto-redirect after 2 minutes if user is not logged in
      const timer = setTimeout(() => {
        navigate('/login');
      }, 120000); // 120000ms = 2 minutes

      return () => clearTimeout(timer); // Cleanup function to clear timeout when component unmounts
    }
  }, [token, navigate]);

  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <ShopCategories />
      <ShopVideo />
      <Testimonials />
      <OurPolicy />
      {/* <NewsletterBox/> */}
    </div>
  );
};

export default Home;
