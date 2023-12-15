// Importing Packages
import React from 'react'
import Navbar from './Pages/Navbar'
import BannerHeading from './Pages/BannerHeading'
import FormField from './Pages/FormField'
import Footer from './Pages/Footer'
import 'animate.css'

const App = () => {
  return (
    <>

      {/* Main Section */}
      <div className='bg-white'>

        {/* Navigation Bar */}
        <Navbar />

        {/* Banner Heading */}
        <BannerHeading />

        {/* Form Field */}
        <FormField />

        {/* Footer  */}
        <Footer />

      </div>
    </>
  )
}

export default App