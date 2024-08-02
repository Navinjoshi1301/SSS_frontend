import React from 'react'
import homeIllustration from "../assets/hero.png"
import ContactButton from '../components/ContactButton/ContactButton'

const HomeScreen = () => {
  return (
<>
<div className="flex flex-col-reverse md:flex-row items-center py-16 md:px-8 lg:px-16 bg-slate-50">
<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left px-4">
          <div className="inline-block bg-white text-sm uppercase tracking-wide font-normal px-4 py-3 rounded-full mb-4 shadow-md">
            IT Solutions for the Future
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-10">
            We Bring Ideas To Life.
          </h1>
           <ContactButton contactText={ 'Contact Us +' }/>
        </div>
        <div className="px-4 md:px-0">
          <img src={homeIllustration} alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </div>
</>
  )
}

export default HomeScreen