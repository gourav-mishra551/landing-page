import React from 'react'
import { motion } from 'framer-motion'
import { framer_desc, framer_icon, framer_title } from './framer'
import scrollAnimation from './lottie_scroll.json'
import Lottie from 'lottie-react'

export const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center flex-1 gap-8">
      <div className="absolute bg-contain w-[100%] top-0 -z-10 opacity-40 h-60 bg-hero-pattern-mobile md:hidden">
        <div className=" w-[100%] h-[100%]"></div>
      </div>
      <div className="absolute hidden bg-cover md:block -left-44 h-80 w-80 bg-illustration-hero-left lg:-left-20">
        <div className=" w-[100%] h-[100%]"></div>
      </div>
      <div className="absolute hidden bg-cover md:block -right-44 h-80 w-80 bg-illustration-hero-right lg:-right-20">
        <div className="bg-gradient-to-l from-midnight w-[100%] h-[100%]"></div>
      </div>
      <div className="flex flex-col items-center gap-8 p-5 md:max-w-[70%] md:m-auto md:bg-bg-hero-squiggle md:bg-contain bg-no-repeat ">
        <motion.h1
          {...framer_title}
          className=" text-3xl mx-5 font-bold text-centre md:text-7xl md:text-center gap-5 font-serif"
        >
         Ignite Your SMM Business with the Ultimate Solution!
        </motion.h1>
        <motion.p {...framer_desc} className="text-center text-lg text-slate-500 hover:from-indigo-500 hover:to-indigo-400 font-bold">
        Unleash Your Entrepreneurial Spirit: Create Your Thriving Digital Empire with Global SMM Services!
        </motion.p>
        <div className='flex md:w-3/5'>
          <button className='mx-2 rounded-full  h-12 w-4/6 md:w-4/6  bg-gradient-to-r from-indigo-500  hover:from-indigo-600 hover:to-black-100'>Get your $2 first month </button>
          <button className='rounded-full  h-12 w-4/6 bg-gradient-to-r from-indigo-500 hover:from-indigo-600 hover:to-black-100 '> See Pricing </button>
        </div>
        <motion.p {...framer_desc} className="text-center text-sm  text-gray-200 md:flex font-bold">
        ☆ ☆ ☆ ☆ ☆ <p className='mx-5'>Years of Exceptional 5-Star Service</p> 
        </motion.p>
        <motion.a href="#showcase" className="max-w-[5rem]" {...framer_icon}>
          <Lottie animationData={scrollAnimation} loop={true} />
        </motion.a>
      </div>
    </section>
  )
}
