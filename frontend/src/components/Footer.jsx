import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
       
       <div>
       <img src="/assets/ADS.png" style={{ width: '80px', height: 'auto' }} alt='' />
        <p className='w-full md:w-2/3 text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at dolorem maiores architecto minima fugit perspiciatis, eius exercitationem sunt adipisci debitis minus culpa consequuntur, error ad, tempore iure facilis. Consequatur?
        </p>
       </div>

       <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li> Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
       </div>
        
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-8824454873</li>
                <li>taracollection766@gmail.com</li>
            </ul>
        </div>

        </div>

        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright2024@Gaurav Jain - All Right Reserved.</p>
        </div>

    </div>
    
  )
}

export default Footer
