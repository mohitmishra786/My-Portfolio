import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from '../typing';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

function About({pageInfo}: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    
      className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
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
        once: false,
      }}

      className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] " 
      src={urlFor(pageInfo?.profilePic).url()}
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> Background
        </h4>
        <p className='text-sm xl:text-lg'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  )
}

export default About