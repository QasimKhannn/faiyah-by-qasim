"use client"
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface props {
    className?: string
}

const ContactBox: React.FC<props> = ({ className }: props) => {
    return (
        <div className={className}>
            <div className='absolute inset-0 bg-white opacity-80 rounded-2xl' />
            <div className='flex justify-between items-center relative z-50'>
                <p className='text-xs md:text-sm font-bold text-black'>Have a question or need a service?</p>
                <Link href='/contact'>
                    <ArrowUpRight size={40} className='text-black' />
                </Link>
            </div>
            <div className='flex justify-start items-end h-full z-50 relative bottom-0'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-black font-bold pb-5'>Contact me</p>
            </div>
        </div>
    )
}

export default ContactBox
