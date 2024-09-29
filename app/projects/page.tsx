"use client"
import React from 'react';
import Image from 'next/image';
import theImage from "../../public/logo-spiral.png";
import { motion } from 'framer-motion';
import { zoomOutVariants } from '@/lib/framer';

const ProjectsPage: React.FC = () => {
    return (
        <motion.div
            className="md:h-[33rem] h-full w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 px-5 md:mt-0 mb-10 md:mb-0 py-3 bg-transparent"
            variants={zoomOutVariants}
            initial="hidden"
            animate="visible"
        >
            {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className='p-10 rounded-md relative border border-neutral-800 bg-stone-900 dark:border-neutral-800'>
                    <div className="bg-lime-50 rounded-md">
                        <Image
                            src={theImage}
                            alt={`project-image-${index}`}
                            width={320}
                            height={192}
                            className="object-cover rounded-md"
                            loading="lazy"
                        />
                    </div>
                    <p className='text-lg text-white font-bold mt-2'>Framer Portfolio</p>
                    <p className='text-white text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, quis veniam aliquam, sed id fugiat ipsa odio</p>
                    {/* <p className='text-white my-3'>Tools</p>
                    <div className='flex items-end justify-end gap-3 flex-row'>
                    <div className='p-1 rounded-2xl bg-purple-500 flex justify-center items-center'>
                    <Eye size={20} color='white' />
                    </div>
                    <div className='p-1 rounded-2xl bg-white flex justify-center items-center'>
                    <Github size={20} color='black' />
                    </div>
                    </div> */}
                </div>
            ))}
        </motion.div>
    );
}

export default ProjectsPage;
