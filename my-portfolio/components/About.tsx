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
      className="img" 
      src='https://media-exp1.licdn.com/dms/image/C4D03AQG3ezW14WyKhQ/profile-displayphoto-shrink_200_200/0/1662836126839?e=1669852800&v=beta&t=UOmovv1TESmdfv8VigmHIiC4tduLsl4JhCF-eSIyF5Q'
      />
    </div>
  )
}

export default About