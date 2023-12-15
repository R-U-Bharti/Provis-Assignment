// Importing Packages
import React, { useState } from 'react'
import circle from '../assets/circle.svg'
import image from '../assets/image.svg'
import video from '../assets/video.svg'
import * as style from '../Common/Styles/CommonStyles'
import Modal from 'react-modal'

const BannerHeading = () => {

    // State for modal
    const [modalOpen, setModalOpen] = useState(false)
    const closeModal = () => setModalOpen(false)

    return (
        <>
            {/* Banner Heading section */}
            <div className="relative flex flex-wrap-reverse md:p-0 px-4">

                {/* Logo in circle */}
                <img src={circle} className='w-full md:w-[28%] -top-[50px] left-[80px]  absolute md:block hidden' alt="" srcset="" />

                {/* Left Section */}
                <aside className='w-full md:w-1/2 flex flex-col items-end justify-center gap-4 md:pl-16 z-0'>

                    {/* Heading */}
                    <h1 className='text-2xl md:text-[45px] flex flex-col gap-2 md:gap-6 mb-4'>
                        <span>Quick & Reliable <span className='text-[#F67366] font-semibold'> Warehousing </span></span>
                        <span><span className='text-[#F67366] font-semibold'> and Logistics </span> Solution.</span>
                    </h1>

                    {/* Description */}
                    <p>
                        ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint
                    </p>

                    {/* Buttons */}
                    <div className='self-start mt-4 flex justify-start items-center gap-10'>
                        <button className={style.fillButton}>Join Now</button>
                        <div className='flex items-center gap-4 cursor-pointer' onClick={() => setModalOpen(true)}>
                            <img src={video} alt="" srcset="" className='bg-white shadow-[0_5px_10px_5px_rgba(0,0,0,0.3)] p-4 rounded-full' />
                            <span className='text-blue font-bold'>Play Demo</span>
                        </div>
                    </div>

                </aside>

                {/* Right Section */}
                <aside className='w-full md:w-1/2 py-20'>
                    <img src={image} className='w-full md:w-[80%]' alt="" srcset="" />
                </aside>

            </div>

            {/* Dialog or PopUp for video */}
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                className={'h-screen w-screen flex justify-center items-center backdrop-brightness-50 z-50'}
            >

                <div className='bg-white p-4 flex flex-col items-center md:w-[50vw] md:h-[70vh] z-50 animate__animated animate__zoomIn amimate__faster'>

                    <iframe className='w-full h-full' src="https://www.youtube.com/embed/SkU_Rn9c5q8?si=lcipOBA89s57Q9jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <button onClick={() => setModalOpen(!modalOpen)} className='text-sm px-3 py-1 border border-red-400 cursor-pointer bg-red-100 hover:bg-red-500 hover:text-white mt-4'>Close</button>

                </div>

            </Modal>
        </>
    )
}

export default BannerHeading