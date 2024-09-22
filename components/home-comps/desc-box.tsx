"use client"
import React from 'react'
import { jellyTriangle } from 'ldrs'

jellyTriangle.register()

// Default values shown


const DescBox: React.FC = () => {
    return (
        <div className='relative h-full w-full flex flex-col rounded-2xl col-span-2 p-5 overflow-hidden row-span-1'>
            <div className='absolute inset-0 bg-white opacity-15 rounded-2xl' />
            <div className='flex justify-start items-center relative z-10 pl-5 py-5'>
                <l-jelly-triangle
                    size="30"
                    speed="1.75"
                    color="orange"
                ></l-jelly-triangle>
            </div>
            <div className='flex justify-center items-center h-full z-10'>
                <p className='text-xs text-white'>Qasim is a full stack software engineer dedicated to developing scalable web applications. With a strong focus on delivering high-quality solutions, he excels in both frontend and backend development. Passionate about technology and problem-solving, Qasim is committed to meeting client needs and driving team success.</p>
            </div>
        </div>
    )
}

export default DescBox