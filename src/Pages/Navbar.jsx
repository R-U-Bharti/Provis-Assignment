// Importing Packages
import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import logo2 from '../assets/logo2.svg'
import * as style from '../Common/Styles/CommonStyles'
import { IoChevronDownOutline } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    // State to toggle Menu
    const [toggle, setToggle] = useState(false)

    const [mobileMenu, setMobileMenu] = useState(false)

    // Navigation List Objects
    const navList = [
        {
            label: "Company", path: "", subMenu: [
                { label: 'Provis', path: '/' }
            ]
        },
        { label: "Services", path: "/", subMenu: [] },
        { label: "Solutions", path: "/", subMenu: [] },
        { label: "Industries", path: "/", subMenu: [] },
        { label: "Insights", path: "/", subMenu: [] },
        { label: "News and Media", path: "/", subMenu: [] },
    ]

    // Function to check Menu have submenu
    const checkSubMenu = (elem) => {
        return elem?.subMenu?.length > 0;
    }

    return (
        <>

            {/* Header */}
            <header>

                {/* Navigation */}
                <nav>

                    {/* Listing menus */}
                    <ul className='flex justify-center items-center gap-10 pt-6 relative'>

                        {/* Logo */}
                        <li className='pl-2 md:pl-0 mr-4 flex items-center gap-2'>

                            {/* Bar to toggle menu */}
                            <span className='md:hidden block cursor-pointer' onClick={() => setMobileMenu(!mobileMenu)}><FaBars /></span>

                            {/* Logo */}
                            <img src={logo} alt="" srcset="" />

                        </li>

                        {
                            navList?.map((elem, index) =>
                                <>
                                    <li key={index} className=' cursor-pointer group relative hidden md:flex items-center gap-1' onMouseEnter={() => checkSubMenu(elem) && setToggle(!toggle)} onMouseLeave={() => checkSubMenu(elem) && setToggle(!toggle)}>

                                        {/* Menu List */}
                                        <span>{elem?.label}</span>
                                        {
                                            checkSubMenu(elem) &&
                                            <span className='group-hover:rotate-180 transition-all duration-200'>
                                                <IoChevronDownOutline />
                                            </span>
                                        }

                                        {/* Submenu List */}
                                        {
                                            toggle && elem?.subMenu?.map((elem2, index) =>
                                                <ul className='absolute top-6'>
                                                    <li key={index} className='cursor-pointer flex items-center gap-1 relative font-semibold'>{elem2?.label}</li>
                                                </ul>
                                            )
                                        }

                                    </li>
                                </>)
                        }

                        {/* Right Menus */}
                        <li className='flex gap-6 items-center ml-4'>
                            <button className={style.hollowButton}>Request Note</button>
                            <button className={style.fillButton}>Join Now</button>
                        </li>

                        {/* Mobile Menus */}
                      {mobileMenu &&
                       <div className='absolute bg-blue h-[100ch] w-1/2 top-0 left-0 z-50 text-white animate__animated animate__slideInLeft animate__faster'>

                            {/* Logo & close button */}
                            <span className='w-full flex justify-center items-center p-6 border-b mb-4'>

                                {/* Logo */}
                                <img src={logo2} alt="" srcset="" />

                                {/* Close button */}
                                <span className='text-xl absolute top-0 right-1' onClick={() => setMobileMenu(false)}>&times;</span>

                            </span>

                            {/* Menu list */}
                            {
                                navList?.map((elem, index) =>
                                    <>
                                        <span key={index} className='cursor-pointer p-2 group relative md:hidden flex flex-col justify-center gap-2' onClick={() => checkSubMenu(elem) && setToggle(!toggle)}>

                                            {/* Menu List */}
                                            <div className='flex items-center gap-1'>
                                                <span>{elem?.label}</span>
                                                {
                                                    checkSubMenu(elem) &&
                                                    <span className={`${toggle ? "rotate-180" : ""} transition-all duration-200`}>
                                                        <IoChevronDownOutline />
                                                    </span>
                                                }
                                            </div>

                                            {/* Submenu List */}
                                            {
                                                toggle && elem?.subMenu?.map((elem2, index) =>
                                                    <ul className=' top-6'>
                                                        <li key={index} className='cursor-pointer flex items-center gap-1 relative font-semibold'>{elem2?.label}</li>
                                                    </ul>
                                                )
                                            }

                                        </span>
                                    </>)
                            }
                        </div>}

                    </ul>

                </nav>

            </header>
        </>
    )
}

export default Navbar