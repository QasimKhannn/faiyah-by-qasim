"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { zoomOutVariants } from '@/lib/framer';
import data from '../../data/projects.json'
import { useRouter } from 'next/navigation';

const ProjectsPage: React.FC = () => {
    const router = useRouter()
    return (
        <motion.div
            className="md:h-[33rem] h-full w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 px-5 md:mt-0 mb-10 md:mb-0 py-3 bg-transparent"
            variants={zoomOutVariants}
            initial="hidden"
            animate="visible"
        >
            {data.map((item, index) => (
                <div key={index} className='rounded-md h-80 cursor-pointer relative border border-neutral-800 bg-stone-900 dark:border-neutral-800 flex flex-col' onClick={() => window.open(`${item.route}`, "_blank")}>
                    <div className="bg-lime-50 rounded-t-md">
                        <Image
                            src={item.image}
                            alt={`project-image-${index}`}
                            width={320}
                            height={192}
                            className="object-cover rounded-t-md"
                            loading="lazy"
                        />
                    </div>
                    <div className='flex-1 h-full flex flex-col justify-center items-center p-4'>
                        <p className='text-lg text-white font-bold mb-2'>{item.title}</p>
                        <p className='text-white text-xs'>{item.description}</p>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default ProjectsPage;
