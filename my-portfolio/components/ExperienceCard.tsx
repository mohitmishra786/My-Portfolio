import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
        transition={{
            duration: 1.2,
        }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center ' 
        src="https://omdena.com/wp-content/uploads/2021/10/logo.png" 
        alt="" />
    </article>
  )
}

export default ExperienceCard