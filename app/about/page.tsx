"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Cover } from "@/components/aceternity/cover/cover";
import { imageBoxVariants, introBoxVariants, sideMenuVariants, socialsBoxVariants, zoomOutVariants } from "@/lib/framer";

const ContactBox = dynamic(() => import("@/components/home-comps/contact-box"), { ssr: false });
const DescBox = dynamic(() => import("@/components/home-comps/desc-box"), { ssr: false });
const ImageBox = dynamic(() => import("@/components/home-comps/image-box"), { ssr: false });
const IntroBox = dynamic(() => import("@/components/home-comps/intro-box"), { ssr: false });
const SideMenu = dynamic(() => import("@/components/home-comps/side-menu"), { ssr: false });
const SocialsBox = dynamic(() => import("@/components/home-comps/socials-box"), { ssr: false });

const HomePage: React.FC = () => {
    return (
        <motion.div
            className="md:h-[33rem] h-full w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 px-5 md:mt-0 mb-10 md:mb-0 py-3 bg-transparent"
            variants={zoomOutVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Main content section */}
            <motion.div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full" variants={zoomOutVariants}>
                <motion.div
                    variants={introBoxVariants}
                    className='relative h-full w-full flex flex-col rounded-2xl md:col-span-3'
                >
                    <Cover className="h-full w-full">
                        <IntroBox className="relative h-full w-full flex-col rounded-2xl md:col-span-3 px-5 grid grid-cols-3 mt-5 md:mt-0" />
                    </Cover>
                </motion.div>
                <motion.div
                    variants={imageBoxVariants}
                    className="relative h-full w-full flex rounded-2xl md:col-span-1"
                >
                    <ImageBox className="relative h-full w-full flex rounded-2xl" />
                </motion.div>
                <motion.div
                    variants={introBoxVariants}
                    className='relative h-full w-full flex flex-col rounded-2xl md:col-span-2'
                >
                    <DescBox className='relative h-full w-full flex flex-col rounded-2xl md:col-span-2 p-5 justify-start items-start' />
                </motion.div>
                <motion.div
                    variants={socialsBoxVariants}
                    initial="hidden"
                    animate="visible"
                    className='relative h-full w-full flex flex-col rounded-2xl md:col-span-2 z-0'
                >
                    <ContactBox className="relative h-full w-full flex flex-col rounded-2xl md:col-span-2 p-5 z-0" />
                </motion.div>
            </motion.div>

            {/* Sidebar section */}
            <motion.div className="col-span-1 grid flex-col gap-4 h-full" variants={zoomOutVariants}>
                <motion.div
                    variants={sideMenuVariants}
                    initial="hidden"
                    animate="visible"
                    className='relative h-full w-full flex flex-col rounded-2xl row-span-12'
                >
                    <SideMenu className="relative h-full w-full flex flex-col rounded-2xl row-span-12" />
                </motion.div>
                <motion.div
                    variants={socialsBoxVariants}
                    initial="hidden"
                    animate="visible"
                    className='relative h-full w-full flex flex-col rounded-2xl p-5 justify-center items-center row-span-1'
                >
                    <SocialsBox />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HomePage;
