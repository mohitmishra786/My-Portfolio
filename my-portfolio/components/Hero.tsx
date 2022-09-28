import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: [
            "Hi, My name is Mohit Mishra",
            "Guy Who Love Coffee with ML", 
            "Who Loves to Code Alot",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    
  
    return (
    <div>
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>
    </div>
  )
}

export default Hero