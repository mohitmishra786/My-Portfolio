import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
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
            opacity: 1,
            x: 0,  
          }}
          viewport={{
            once: true,
          }}
          src="https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
          className='-mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
    </div>
  );
}

