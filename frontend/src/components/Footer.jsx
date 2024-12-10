import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Main Footer Content */}
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src="/assets/ADS.png" style={{ width: '80px', height: 'auto' }} alt='' /> <br />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Tara Collection was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li className="hover:text-blue-600 hover:underline cursor-pointer"><a href="/">Home</a></li>
                        <li className="hover:text-blue-600 hover:underline cursor-pointer"><a href="/about">About Us</a></li>
                        <li className="hover:text-blue-600 hover:underline cursor-pointer"><a href="/contact">Contact Us</a></li>
                        <li className="hover:text-blue-600 hover:underline cursor-pointer"><a href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>
                            <a
                                href="https://wa.me/918824454873"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:underline"
                            >
                                +91-8824454873
                            </a>
                        </li>
                        <li>
                            <a href="mailto:taracollection766@gmail.com" className="text-blue-600 hover:underline">
                                taracollection766@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright2024@Gaurav Jain - All Right Reserved.</p>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/918824454873"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    width="24"
                    height="24"
                >
                    <path d="M13.568 2.432A7.957 7.957 0 008 0C3.589 0 0 3.589 0 8c0 1.4.366 2.707.998 3.846L.027 16l4.223-1.096A7.963 7.963 0 008 16c4.411 0 8-3.589 8-8 0-2.122-.847-4.133-2.432-5.568zM8 14.4a6.366 6.366 0 01-3.304-.896l-.235-.141-2.505.65.669-2.579-.155-.248A6.379 6.379 0 011.6 8c0-3.525 2.875-6.4 6.4-6.4 1.71 0 3.319.668 4.527 1.873A6.383 6.383 0 0114.4 8c0 3.525-2.875 6.4-6.4 6.4z"></path>
                    <path d="M11.07 9.383c-.15-.075-.882-.436-1.019-.486-.135-.052-.232-.075-.33.075-.099.15-.38.485-.465.586-.084.1-.173.113-.322.037-.15-.075-.633-.233-1.207-.743-.447-.398-.748-.89-.836-1.04-.087-.15-.009-.23.065-.305.067-.067.15-.173.225-.262.075-.086.099-.15.15-.25.05-.1.025-.187-.012-.262-.037-.075-.33-.796-.452-1.096-.119-.296-.24-.257-.33-.262l-.28-.005c-.1 0-.262.038-.4.187-.135.15-.528.515-.528 1.257 0 .742.54 1.459.617 1.557.075.1 1.062 1.617 2.578 2.27.361.156.643.249.863.319.363.113.693.097.956.059.292-.043.882-.36 1.007-.706.124-.345.124-.643.087-.706-.037-.062-.135-.1-.284-.174z"></path>
                </svg>
            </a>
        </div>
    );
};

export default Footer;
