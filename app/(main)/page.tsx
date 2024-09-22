"use client"
import ContactBox from '@/components/home-comps/contact-box'
import DescBox from '@/components/home-comps/desc-box'
import ImageBox from '@/components/home-comps/image-box'
import IntroBox from '@/components/home-comps/intro-box'
import SideMenu from '@/components/home-comps/side-menu'
import SocialsBox from '@/components/home-comps/socials-box'
import React from 'react'

const HomePage: React.FC = () => {
    return (
        <div className="h-full w-full mx-auto grid grid-cols-4 gap-3 px-10 pt-20">
            <div className="col-span-3 grid grid-cols-4 grid-rows-2 gap-3 h-[82vh]">
                <IntroBox />
                <ImageBox />
                <DescBox />
                <ContactBox />
            </div>

            {/* Sidebar content taking 1 column */}
            <div className="col-span-1 grid grid-cols-1 gap-3 h-[82vh]">
                <SideMenu />
                <SocialsBox />
            </div>
        </div>
    )
}

export default HomePage