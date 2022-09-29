import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
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
        viewport={{
            once: true,
        }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center ' 
        src="https://omdena.com/wp-content/uploads/2021/10/logo.png" 
        alt="" 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>ML Engineer</h4>
            <p className='font-bold text-2xl mt-1'>Omdena</p>
            <div className='flex space-x-2 my-2'>
                <img
                    className='h-10 w-10 rounded-full' 
                    src="https://img.icons8.com/color/2x/python.png" 
                    alt="" 
                />
                <img
                    className='h-10 w-10 rounded-full' 
                    src="https://cdn-icons-png.flaticon.com/128/4248/4248443.png" 
                    alt="" 
                />
                <img
                    className='h-10 w-10 rounded-full' 
                    src="data:image/png;base64,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" 
                    alt="" 
                />
            </div>
            
            <p className='uppercase py-5 text-gray-300'>Started Work... - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>Improved accuracy of the model from 82 percent to 91 percent in the career recommendation model.</li>
                <li>Formulated an AutoML pipeline to automatically search for the best neural model for Natural Language Processing tasks.</li>
                <li>Took the charge of developing an image augmentation pipeline for school image datasets.</li>
                <li>Led the team of 4 engineers, guiding them towards the successful creation of the ML prediction model for resource allocation purpose.</li>
                <li>Analyzed factors contributing to homelessness in Texas and proposed a solution for homelessness.</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard