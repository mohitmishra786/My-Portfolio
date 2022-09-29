import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    
    className='h-screen'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
    </h3>
    </motion.div>
  )
}

export default Skills