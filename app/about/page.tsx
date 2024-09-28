"use client";
import React from "react";
import dynamic from "next/dynamic";

const ContactBox = dynamic(() => import("@/components/home-comps/contact-box"), { ssr: false });
const DescBox = dynamic(() => import("@/components/home-comps/desc-box"), { ssr: false });
const ImageBox = dynamic(() => import("@/components/home-comps/image-box"), { ssr: false });
const IntroBox = dynamic(() => import("@/components/home-comps/intro-box"), { ssr: false });
const SideMenu = dynamic(() => import("@/components/home-comps/side-menu"), { ssr: false });
const SocialsBox = dynamic(() => import("@/components/home-comps/socials-box"), { ssr: false });

const HomePage: React.FC = () => {
    return (
        <div className="md:h-[33rem] h-full w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 px-10 md:mt-0 mb-10 md:mb-0 py-3 bg-transparent">
            {/* Main content section */}
            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                <IntroBox className='relative h-full w-full flex flex-col rounded-2xl md:col-span-3 md:row-span-2 p-5' />
                <ImageBox className="relative h-full w-full flex rounded-2xl md:col-span-1 md:row-span-2" />
                <DescBox className='relative h-full w-full flex flex-col rounded-2xl md:col-span-2 p-5' />
                <ContactBox className='relative h-full w-full flex flex-col rounded-2xl md:col-span-2 p-5 z-0' />
            </div>


            {/* Sidebar section */}
            <div className="col-span-1 grid flex-col gap-4 h-full">
                <SideMenu className='relative h-full w-full flex flex-col rounded-2xl p-5 row-span-12' />
                <SocialsBox className='relative h-full w-full flex flex-col rounded-2xl p-5 justify-center items-center row-span-1' />
            </div>
        </div>
    );
};

export default HomePage;
