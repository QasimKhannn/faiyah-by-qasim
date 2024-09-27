"use client"
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ContactBox: React.FC = () => {
    return (
        <div className='relative h-full w-full flex flex-col rounded-2xl md:col-span-2 p-5 row-span-1'>
            <div className='absolute inset-0 bg-white opacity-80 rounded-2xl' />
            <div className='flex justify-between items-center relative z-50'>
                <p className='text-xs md:text-sm font-bold text-black'>Have a question?</p>
                <Link href='https://mail.google.com/mail/?view=cm&fs=1&to=iamqasimk@gmail.com'
                    target='_blank'>
                    <ArrowUpRight size={40} className='text-black' />
                </Link>
            </div>
            <div className='flex justify-start items-end h-full z-0'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-black font-bold pb-5'>Contact me</p>
            </div>
        </div>
    )
}

export default ContactBox
