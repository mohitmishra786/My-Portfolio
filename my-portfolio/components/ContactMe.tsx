import React from 'react'
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Me</h3>
    
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Let's have some Coffee and {" "}
                <span className='decoration-[#F7AB0A]/50 underline '>Talk</span>
            </h4>

            <div>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>+91 7023215632</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>dukechessman@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>Dream</p>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default ContactMe