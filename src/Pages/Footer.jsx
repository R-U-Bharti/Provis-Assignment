// Importing Packages
import React from 'react'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import whatsapp from '../assets/whatsapp.svg'

const Footer = () => {
    return (
        <>

            {/* Footer Section */}
            <footer className='bg-[#2C2D5B] mt-16 flex flex-col justify-center items-center py-10 pt-16'>

                {/* container */}
                <div className='w-full p-2 md:w-[80%] flex flex-wrap md:flex-nowrap justify-between gap-6 md:gap-[80px] border-b border-gray-400 pb-10'>

                    {/* Section 1 */}
                    <div className='w-full md:w-[30%] flex flex-col gap-4'>

                        {/* Logo */}
                        <img src={logo2} alt="" srcset="" className='w-[30%]' />

                        {/* Description */}
                        <p className='text-sm text-white'>
                            ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint
                        </p>

                    </div>

                    {/* Section 2 */}
                    <div className='w-full md:w-[20%] flex flex-col gap-4'>

                        {/* Heading */}
                        <h5 className='text-xl font-semibold text-white'>Explore</h5>

                        {/* list */}
                        <ul className='text-sm text-white flex flex-col gap-2'>
                            <li>About Us</li>
                            <li>Our Warehouses</li>
                            <li>Blog</li>
                            <li>News and Media</li>
                        </ul>

                    </div>

                    {/* Section 3 */}
                    <div className='w-full md:w-[20%] flex flex-col gap-4'>

                        {/* Heading */}
                        <h5 className='text-xl font-semibold text-white'>Legal</h5>

                        {/* List */}
                        <ul className='text-sm text-white flex flex-col gap-2'>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>

                    </div>

                    {/* Section 4 */}
                    <div className='w-full md:w-1/4 flex flex-col gap-4'>

                        {/* Heading */}
                        <h5 className='text-xl font-semibold text-white'>Social Media</h5>

                        {/* Social Icons */}
                        <ul className='text-sm text-white flex gap-4'>
                            <li className='cursor-pointer hover:shadow-lg bg-white w-max p-4 px-5 rounded-full'><img src={facebook} alt="" srcset="" /></li>
                            <li className='cursor-pointer hover:shadow-lg bg-white w-max p-4 pt-5 rounded-full'><img src={twitter} alt="" srcset="" /></li>
                            <li className='cursor-pointer hover:shadow-lg bg-white w-max p-4 rounded-full'><img src={whatsapp} alt="" srcset="" /></li>
                            <li className='cursor-pointer hover:shadow-lg bg-white w-max p-4 rounded-full'><img src={instagram} alt="" srcset="" /></li>
                        </ul>

                    </div>


                </div>

                {/* Bottom Logo */}
                <div className="w-full md:w-[80%] pt-8 flex justify-center">
                    <img src={logo3} alt="" srcset="" />
                </div>

            </footer>
        </>
    )
}

export default Footer