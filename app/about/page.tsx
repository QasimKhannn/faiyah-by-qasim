"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const ContactBox = dynamic(() => import('@/components/home-comps/contact-box'), { ssr: false })
const DescBox = dynamic(() => import('@/components/home-comps/desc-box'), { ssr: false })
const ImageBox = dynamic(() => import('@/components/home-comps/image-box'), { ssr: false })
const IntroBox = dynamic(() => import('@/components/home-comps/intro-box'), { ssr: false })
const SideMenu = dynamic(() => import('@/components/home-comps/side-menu'), { ssr: false })
const SocialsBox = dynamic(() => import('@/components/home-comps/socials-box'), { ssr: false })

const HomePage: React.FC = () => {
    return (
        <div className="h-full w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-3 px-10 md:mt-0 mb-10 md:mb-0">
            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <IntroBox />
                <ImageBox />
                <DescBox />
                <ContactBox />
            </div>

            <div className="col-span-1 grid grid-cols-1 gap-3 h-[82vh]">
                <SideMenu />
                <SocialsBox />
            </div>
        </div>
    )
}

export default HomePage