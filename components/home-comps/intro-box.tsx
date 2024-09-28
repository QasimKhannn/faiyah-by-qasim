"use client"
import React from 'react'
import { mirage } from 'ldrs'

interface props {
    className?: string
}

mirage.register()

const IntroBox: React.FC<props> = ({ className }: props) => {
    return (
        <div className={className}>
            <div className='absolute inset-0 bg-white opacity-15 rounded-2xl' />
            <div className='flex md:justify-end justify-center items-center relative my-6 md:my-0'>
                <l-mirage
                    size="80"
                    speed="2.5"
                    color="#a65aff"
                ></l-mirage>
            </div>
            <div className='flex justify-center items-end h-full'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center'>
                    Developing the Future with Full Stack Innovation
                </h1>
            </div>
        </div>
    )
}

export default IntroBox
