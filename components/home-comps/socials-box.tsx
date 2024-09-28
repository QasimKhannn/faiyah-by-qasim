"use client"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface props {
    className?: string
}

const SocialsBox: React.FC<props> = ({ className }: props) => {
    return (
        <div className={className}>
            <div className='absolute inset-0 bg-white opacity-20 rounded-2xl' />
            <div className='flex justify-center items-center relative gap-10'>
                <Link href={'https://www.linkedin.com/in/qasim-k-23b7081b9/'} target='_blank' className='text-white text-sm flex gap-1 flex-col justify-center items-center'><Linkedin size={20} />LinkedIn</Link>
                <Link href={'https://www.linkedin.com/in/qasim-k-23b7081b9/'} target='_blank' className='text-white text-sm flex gap-1 flex-col justify-center items-center'><Github size={20} />Github</Link>
                <Link href='https://mail.google.com/mail/?view=cm&fs=1&to=iamqasimk@gmail.com'
                    target='_blank'
                    className='text-white text-sm flex gap-1 flex-col justify-center items-center'><Mail size={20} />Gmail</Link>
            </div>
        </div>
    )
}

export default SocialsBox