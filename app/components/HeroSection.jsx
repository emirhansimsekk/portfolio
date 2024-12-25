"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const HeroSection = () => {
  const handleDownload = () => {

    const downloadLink = '/download/Emirhan-Şimşek-Resume-20241225.pdf';


    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = 'Emirhan-Şimşek-Resume.pdf';


    document.body.appendChild(link);
    link.click();


    document.body.removeChild(link);
  };

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7  text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200'>{`Hello, I'm`} </span>
            <br></br>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Emirhan',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Mobile Developer',
                  1000,
                  'Backend Developer',
                  1000
                ]}
                wrapper="span"
                speed={10}
                
                repeat={Infinity}
              />
          </h1>

          <div>
            <Link href="https://linktr.ee/emirhansimsekk" className='px-3 sm:px-10 py-3 w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 text-white hover:bg-slate-200'>Hire Me</Link>
            <button onClick={handleDownload} className='px-1 py-1 w-fit rounded-full bg-gradient-to-br from-blue-500 via-blue-300 to-blue-500 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 '>Download CV </span>
            </button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt=4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h[400px] relative'>
            <Image src="/images/avatar.png"
            alt="hero image"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            width={300}
            height={300}
            />
          </div>

        </div>
      </div>

    </section>
  )
}

export default HeroSection