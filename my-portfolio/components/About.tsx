import React from 'react'
import { motion } from "framer-motion";

// https://avatars.githubusercontent.com/u/71754779?v=4

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          About
        </h3>
        <motion.img 
        src= "https://avatars.githubusercontent.com/u/71754779?v=4"
        />
    </div>
  )
}

export default About