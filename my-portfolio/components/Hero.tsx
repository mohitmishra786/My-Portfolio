import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: [
            "Hi, My name is Mohit Mishra",
            "Guy Who Love Coffee with ML", 
            "But Loves to Code Alot",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    
  
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover' 
        src="https://media-exp1.licdn.com/dms/image/C4D03AQG3ezW14WyKhQ/profile-displayphoto-shrink_200_200/0/1662836126839?e=1669852800&v=beta&t=UOmovv1TESmdfv8VigmHIiC4tduLsl4JhCF-eSIyF5Q" 
        alt="" 
        />

        <div>
            <h2 className='text-sm text-gray-500 uppercase pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div>
                <button>

                </button>
                <button>

                </button>
                <button>
                    
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero