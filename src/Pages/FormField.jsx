// Importing Packages
import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { FaShoppingBag } from 'react-icons/fa'
import * as style from '../Common/Styles/CommonStyles'

const FormField = () => {

    // Input box desing
    const inputBoxDesign = (element, index) => {
        return (
            <div key={index} className='w-full md:w-52 relative'>
                <input type='text' className='w-full md:w-52 pl-11 border border-zinc-400 p-4 rounded-2xl relative focus:outline-none focus:shadow-md text-sm placeholder:text-sm' placeholder={element?.placeholder} />
                <span className='bg-white text-zinc-400 text-sm font-semibold px-1 absolute -top-3 left-4 z-0'>{element?.label}</span>
                <span className='text-blue/100 absolute top-[22px] left-5'>{element?.icon}</span>
            </div>
        )
    }

    // Input fields label and icon json
    const fields = [
        { label: "Origin", placeholder: "Enter Location", icon: <IoLocationSharp /> },
        { label: "Destination", placeholder: "Enter Location", icon: <IoLocationSharp /> },
        { label: "Weight", placeholder: "Weight(KG)", icon: <FaShoppingBag size={14} /> },
    ]

    return (
        <>

            {/* section */}
            <div className='w-full flex md:flex-row flex-col justify-center md:m-0 m-2'>

                {/* Form card */}
                <div className="flex md:flex-row flex-col md:my-0 my-6 gap-4 items-center bg-white p-4 pt-8 pb-6 shadow-[0_5px_20px_5px_rgba(0,0,0,0.3)] rounded-2xl">

                    {/* Fields map here */}
                    {
                        fields?.map((elem, index) => inputBoxDesign(elem, index))
                    }

                    {/* Button */}
                    <button className={`${style.fillButton} text-sm w-full md:w-52 hover:shadow-lg`}>
                        Check Price
                    </button>

                </div>

            </div>
        </>
    )
}

export default FormField