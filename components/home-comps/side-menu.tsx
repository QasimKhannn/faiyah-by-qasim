"use client"
import React from 'react'

const SideMenu: React.FC = () => {
    return (
        <div className='relative h-full w-full flex flex-col rounded-2xl p-5 overflow-hidden row-span-9'>
            <div className='absolute inset-0 bg-white opacity-25 rounded-2xl' />
            <div className='flex justify-start items-center relative z-10'>
                <p className='text-xs font-bold text-white'>Have a question?</p>
            </div>
            <div className='flex justify-start items-end h-full z-10'>
                <p className='text-4xl text-white font-bold pb-5'>Contact me</p>
            </div>
        </div>
    )
}

export default SideMenu