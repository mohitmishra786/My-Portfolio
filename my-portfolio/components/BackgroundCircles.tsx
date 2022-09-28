import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className= "absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping " />
        <div className= "rounded-full border border-[#333333]  h-[300px] w-[300px] absolute mt-52 "/>
        <div className= "rounded-full border border-[#333333]  h-[500px] w-[500px] absolute mt-52 "/>
        <div className= "rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse"/>
        <div className= "rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52"/>
    </div>
  )
}

export default BackgroundCircles