"use client"
import React from 'react'

interface props {
    className?: string
}

const SideMenu: React.FC<props> = ({ className }: props) => {
    return (
        <div className={className}>
            <div className='absolute inset-0 bg-white opacity-25 rounded-2xl' />
            <div className='flex justify-start items-center relative'>
                <p className='text-xs font-bold text-white'>Have a question?</p>
            </div>
            <div className='flex justify-start items-end h-full'>
                <p className='text-4xl text-white font-bold pb-5'>Contact me</p>
            </div>
        </div>
    )
}

export default SideMenu