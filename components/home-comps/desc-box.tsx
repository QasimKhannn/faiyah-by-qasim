"use client"
import React from 'react'
import { jellyTriangle } from 'ldrs'

interface props {
    className?: string
}

jellyTriangle.register()

const DescBox: React.FC<props> = ({ className }: props) => {
    return (
        <div className={className}>
            <div className='absolute inset-0 bg-white opacity-15 rounded-2xl' />
            <div className='flex md:justify-start justify-center items-end relative gap-3'>
                <l-jelly-triangle
                    size="25"
                    speed="1.75"
                    color="#a65aff"
                ></l-jelly-triangle>
                <p className='text-3xl font-bold text-white'>About Me</p>
            </div>
            <div className='flex justify-center flex-col mt-5 md:mt-0 items-center h-full'>
                <p className='text-xs text-white'>Qasim is a full stack software engineer dedicated to developing scalable web applications. With a strong focus on delivering high-quality solutions, he excels in both frontend and backend development. Passionate about technology and problem-solving, Qasim is committed to meeting client needs and driving team success.</p>
            </div>
        </div>
    )
}

export default DescBox
