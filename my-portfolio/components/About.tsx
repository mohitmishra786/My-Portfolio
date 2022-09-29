import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
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
      src='https://www.kibrispdr.org/data/50/cool-anime-pictures-22.jpg'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> Background
        </h4>
        <p className='text-sm xl:text-lg'>
          I'm Mohit.❤️ You can also call me as Chessman. I'm a Machine learning Developer and a competitive programmer. Most of my time is spent staring at a computer screen. During the day, I am usually programming, working to derive insight from large datasets. My skills include Data Analysis, Data Visualization, Machine learning and Deep Learning. I have developed a strong acumen for problem solving, and I enjoy an occasional challenge. I am able to handle multiple task on daily basis.I always use a creative approach to solve problems.I am always energetic and eager to learn new skills.Even though, i take my work seriously, I do have a good sense of humour. I have done some good projects which uses machine learning, deep learning.  I have completed all my projects in a timely fashion. I have a good hands on experience working with NLP. I believe that words and data are the two most powerful tools to change the world.I love to work with data.
        </p>
      </div>
    </motion.div>
  )
}

export default About