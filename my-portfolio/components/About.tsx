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
        initial={{
          x: -200,
          opacity: 0,
        }} 
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x:0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src= "https://media-exp1.licdn.com/dms/image/C4D03AQG3ezW14WyKhQ/profile-displayphoto-shrink_200_200/0/1662836126839?e=1669852800&v=beta&t=UOmovv1TESmdfv8VigmHIiC4tduLsl4JhCF-eSIyF5Q"
        className="rounded-full -mb-20 md:mb-0 flex-shrink-0 w-56 h-56  object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
    </div>
  )
}

export default About