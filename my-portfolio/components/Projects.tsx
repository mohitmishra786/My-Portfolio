import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
        
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project , i) => (
                <div 
                    className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    viewport={{
                        once: true,
                    }}
                    src="https://image.freepik.com/vector-gratis/dibujos-animados-personas-hogar-planas-hombre-yace-banco-calle-tiene-frio_1284-33044.jpg" 
                    alt="" />
                   <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7Ab0A]/50'>Project {i + 1} of {projects.length} :</span> Homelessness in Texas 
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            This project was made under the Omdena organization. This project focuses mainly on the root causes of the increasing Homelessness in Texas.The data has been collected from Texas Homeless Network, Joint Centre for Housing Studies Harvard, Texas Government, Homelessness Information System, GitHub, and Kaggle. We were able to compare how COVID-19 has affected Texas and how the effects of COVID-19 have attributed to the other socio-economic factors of homelessness and homelessness rates.
                        </p>
                    </div> 
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}

export default Projects