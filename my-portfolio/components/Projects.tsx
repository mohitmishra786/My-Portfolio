import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project , i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <img 
                    src="https://thumbs.dreamstime.com/b/homeless-man-bench-pop-art-vector-homeless-man-sleeps-bench-newspapers-pop-art-retro-vector-illustration-color-114550623.jpg" 
                    alt="" />
                   <div>
                        <h4>
                            Project {i + 1} of {projects.length} : Homelessness in Texas 
                        </h4>
                    </div> 
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  );
}

export default Projects