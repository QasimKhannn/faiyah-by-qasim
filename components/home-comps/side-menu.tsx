"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const ImagesSlider = dynamic(() => import("@/components/aceternity/image-slider"), { ssr: false });


interface props {
    className?: string
}

const images = [
    'https://img.freepik.com/free-photo/anime-style-galaxy-background_23-2151133978.jpg?t=st=1727591455~exp=1727595055~hmac=b5832992a600d9380eccf1290b8f48361513eb1fe43a639a2b4f8e2fc2896272&w=826',
    'https://img.freepik.com/free-photo/cyberpunk-urban-scenery_23-2150712464.jpg?t=st=1727591491~exp=1727595091~hmac=e03a82aff8852de2096853300a2ead265d65db30b9009dfb646d9891965f3dd2&w=1060',
    'https://img.freepik.com/free-photo/cyberpunk-illustration-with-neon-colors-futuristic-technology_23-2151672034.jpg?t=st=1727591504~exp=1727595104~hmac=3cff4959063e82b7df1bbd7cad57d0db94189f59e20e39397d47e9a2357cdcc5&w=826',
    'https://img.freepik.com/free-photo/anime-style-galaxy-background_23-2151133886.jpg?t=st=1727591568~exp=1727595168~hmac=37290fedd22aaec29b8ba1a9ecf77c87af0864f52ae5778eca06496c260c3120&w=826',
    'https://img.freepik.com/premium-photo/meteor-shower-aesthetic-wallpaper-ar-169-job-id-f0d0340826cb4834a576892cfc447aa6_1134901-199721.jpg?w=1060'
];

const SideMenu: React.FC<props> = ({ className }: props) => {
    return (
        <div className={className}>
            <ImagesSlider images={images} className='rounded-2xl'>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="z-50 flex flex-col justify-center items-center"
                >
                    <motion.p className="font-bold text-xl md:text-1xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                        May the code <br /> be with you
                    </motion.p>
                </motion.div>
            </ImagesSlider>
        </div >
    )
}

export default SideMenu