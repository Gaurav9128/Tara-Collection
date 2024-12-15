import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
    <img src="/assets/ADS.png" style={{ width: '280px', height: 'auto' }} alt='' />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'> Oure Store</p>
        <p className='text-gray-500'>Jaipur <br/> Rajasthan.</p>
        <p className='text-gray-500'> Tel : (+91) 8824454873 <br /> Email: taracollection766@gmail.com</p>
        <p className='font-semibold text-xl text-gray-600'>Careers at Tara Collection</p>
        <p className='text-gray-500'>Learn more about our teams.</p>
      </div>
    </div>

    
    </div>
  )
}

export default Contact
