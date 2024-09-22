"use client"

import React, { useState } from 'react';
import { helix } from 'ldrs';
import Link from 'next/link';

helix.register();

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('about');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div className='flex h-16 rounded-2xl bg-transparent mx-5 opacity-95 justify-between p-5 items-center'>
            <div>
                <p className='text-2xl font-bold flex items-center text-white'>QASIM
                    <span className='mx-2 flex justify-center items-center'>
                        <l-helix size="20" speed="2.5" color="orange" />
                    </span>
                    KHAN
                </p>
            </div>
            <div className='flex gap-10'>
                <Link
                    href="/"
                    className={`font-bold transition-transform duration-200 ${activeLink === 'about' ? 'text-orange-500' : 'text-white'} hover:scale-105`}
                    onClick={() => handleLinkClick('about')}
                >
                    About
                </Link>
                <Link
                    href="/projects"
                    className={`font-bold transition-transform duration-200 ${activeLink === 'projects' ? 'text-orange-500' : 'text-white'} hover:scale-105`}
                    onClick={() => handleLinkClick('projects')}
                >
                    Projects
                </Link>
                <Link
                    href="/contact"
                    className={`font-bold transition-transform duration-200 ${activeLink === 'contact' ? 'text-orange-500' : 'text-white'} hover:scale-105`}
                    onClick={() => handleLinkClick('contact')}
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
