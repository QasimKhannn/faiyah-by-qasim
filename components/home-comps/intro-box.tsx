"use client"
import React from 'react'
import { mirage } from 'ldrs'

mirage.register()

const IntroBox: React.FC = () => {
    return (
        <div className='relative h-full w-full flex flex-col rounded-2xl md:col-span-3 p-5 row-span-1'>
            <div className='absolute inset-0 bg-white opacity-15 rounded-2xl' />
            <div className='flex md:justify-end justify-center items-center relative z-0 my-6 md:my-0'>
                <l-mirage
                    size="80"
                    speed="2.5"
                    color="orange"
                ></l-mirage>
            </div>
            <div className='flex justify-center items-end h-full z-0'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center'>
                    Developing the Future with Full Stack Innovation
                </h1>
            </div>
        </div>
    )
}

export default IntroBox
