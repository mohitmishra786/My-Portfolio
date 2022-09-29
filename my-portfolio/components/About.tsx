import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
        About
      </h3>
      <motion.img 
      initial={{
        x: -200,
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{
        once: true,
      }}

      className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] " 
      src='https://www.kibrispdr.org/data/50/cool-anime-pictures-22.jpg'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'>Little</span> Background
        </h4>
        <p>
          I'm Mohit.❤️ You can also call me as Chessman, here's a little bit about me... I've been coding for over 4 years now.
        </p>
      </div>
    </div>
  )
}

export default About