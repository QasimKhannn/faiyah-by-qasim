"use client"
import React from 'react'
import { mirage } from 'ldrs'

mirage.register()

const IntroBox: React.FC = () => {
    return (
        <div className='relative h-full w-full flex flex-col rounded-2xl col-span-3 p-5 overflow-hidden row-span-1'>
            <div className='absolute inset-0 bg-white opacity-15 rounded-2xl' />
            <div className='flex justify-end items-center relative z-10'>
                <l-mirage
                    size="80"
                    speed="2.5"
                    color="orange"
                ></l-mirage>
            </div>
            <div className='flex justify-center items-end h-full z-10'>
                <h1 className='text-5xl text-white font-bold'>Developing the Future with Full Stack Innovation</h1>
            </div>
        </div>
    )
}

export default IntroBox
