import { data } from './data'
import React from 'react'
import { motion } from 'framer-motion'
import { framer_desc, framer_title } from '../hero/framer'
import { Benefit } from '../../components'

export const Showcase = () => {
  return (
    <div>
      <motion.h1
          {...framer_title}
          className=" text-lg w-auto font-bold mx-auto text-center md:text-4xl md:text-center gap-5 font-serif"
        >
        Efficiency & Cost Savings with Our SMM Panels
        <motion.p {...framer_desc} className="container text-sm flex flex-col items-center justify-center  p-5 m-auto lg:flex-row lg:gap-5 lg:justify-between max-w-[40rem]">
    Discover the Exquisite Simplicity: Unveiling Our Intuitive Dashboard and Empowering System Tools! 
        </motion.p>
        </motion.h1>
       
    <ul
      id="showcase"
      className="container flex flex-col items-center justify-center gap-20 p-5 m-auto lg:flex-row lg:gap-5 lg:justify-between max-w-[70rem]"
    >
      {data.map((item, idx) => {
        const isEven = idx % 2 === 0 ? true : false
        return (
          <li
            key={item.title}
            className={
              isEven
                ? 'md:ml-[5rem] lg:ml-0 lg:mt-[2rem]'
                : 'md:mr-[5rem] lg:mr-0 lg:mb-[2rem]'
            }
          >
            <Benefit info={item} idx={idx} />
          </li>
        )
      })}
    </ul>
    </div>
  )
}
