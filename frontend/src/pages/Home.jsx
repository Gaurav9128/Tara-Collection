import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ShopCategories from '../components/ShopCategories'
import ShopVideo from '../components/ShopVideo'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <ShopCategories />
      <ShopVideo />
      <OurPolicy/>
      {/* <NewsletterBox/> */}
    </div>
  )
}

export default Home
