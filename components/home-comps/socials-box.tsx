"use client"
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { IconBrandWhatsapp } from '@tabler/icons-react';

interface Props {
    className?: string;
}

const items = [
    { title: "LinkedIn", icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/qasim-k-23b7081b9/' },
    { title: "Github", icon: <Github size={20} />, href: 'https://github.com/QasimKhannn' },
    { title: "Whatsapp", icon: <IconBrandWhatsapp size={20} />, href: 'https://wa.me/923494471667' },
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
