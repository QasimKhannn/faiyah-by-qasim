"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface props {
    className?: string
}

const IntroBox: React.FC<props> = ({ className }: props) => {
    const lottie = {
        hidden: { scale: 1.2, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className={className}>
            <div className='absolute inset-0 rounded-2xl' />
            <div className='flex justify-center gap-8 flex-col md:items-start items-center h-full md:col-span-2 col-span-3 md:order-1 order-2'>
                <h1 className='md:text-7xl text-white font-bold text-center'>
                    Full Stack Engineer
                </h1>
            </div>
            <div className='flex md:justify-end justify-center items-center relative md:my-0 md:col-span-1 col-span-3 md:order-2 order-1'>
                <motion.div
                    variants={lottie}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="h-44 w-44 relative flex justify-center items-center flex-col"
                >
                    <svg
                        id="logosandtypes_com"
                        data-name="logosandtypes com"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 150 150"
                        className="h-56 w-h-56"
                    >
                        <motion.path
                            d="M140.39,93.45A25,25,0,0,0,134,89.07a62.22,62.22,0,1,0-92,38.79c20.38,12.07,46.54,10.8,62.79.17.49.56,1,1.09,1.55,1.61a24.85,24.85,0,0,0,34.06-36.19ZM94.47,86.54a24.26,24.26,0,0,1-33.2,8.65l-.05,0a24.29,24.29,0,1,1,33.25-8.62Z"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            fill="#8401ff"
                            strokeWidth="2"
                            stroke="white"
                        />
                    </svg>
                </motion.div>
            </div>
        </div>
    )
}

export default IntroBox
