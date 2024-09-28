"use client"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
    className?: string;
}

const items = [
    { title: "LinkedIn", icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/qasim-k-23b7081b9/' },
    { title: "Github", icon: <Github size={20} />, href: 'https://github.com/qasim-k' },
    { title: "Gmail", icon: <Mail size={20} />, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=iamqasimk@gmail.com' },
];

const SocialsBox: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <div className='absolute inset-0 bg-white opacity-20 rounded-2xl' />
            <div className='flex justify-center items-center relative gap-10'>
                {items.map((item, index) => (
                    <Link key={index} href={item.href} target='_blank' className='text-white text-sm flex gap-1 flex-col justify-center items-center font-bold hover:text-purple-500'>
                        {item.icon}
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SocialsBox;
