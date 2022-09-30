import React from 'react'
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}


function ContactMe({}: Props) {
    const { register, handleSubmit,} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = 'mailto:dukechessman@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}.${formData.message}(${formData.email})';
    };
  return (
    <div className='h-screen flex relative text-center md:text-left md:flex-row max-w-7xl justify-evenly px-10 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Me</h3>
    
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Let&apos;s have some Coffee and {" "}
                <span className='decoration-[#F7AB0A]/50 underline '>Talk</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>+91 1234567897</p>
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

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>

                <input {...register('message')} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button 
                type='submit'
                className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  );
}

export default ContactMe