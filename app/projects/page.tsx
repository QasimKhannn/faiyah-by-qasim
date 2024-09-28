import React from 'react';
import Image from 'next/image';
import { Eye, Github } from 'lucide-react';
import theImage from "../../public/logo-spiral.png";
import CardSpotlight from '@/components/aceternity/card-spotlight';

const ProjectsPage: React.FC = () => {
    return (
        <div className="md:h-[33rem] h-full w-full grid grid-cols-1 lg:grid-cols-4 gap-6 px-10 md:mt-0 mb-10 md:mb-0 py-3 bg-transparent">
            {[1, 2, 3, 4].map((_, index) => (
                <CardSpotlight key={index} className='p-4 max-h-96'>
                    <div className='bg-lime-50 rounded-md'>
                        <Image
                            src={theImage}
                            alt={`project-image-${index}`}
                            className='h-48 w-80 object-cover'
                        />
                    </div>
                    <p className='text-lg text-white font-bold mt-2'>Framer Portfolio</p>
                    <p className='text-white text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, quis veniam aliquam, sed id fugiat ipsa odio</p>
                    <p className='text-white my-3'>Tools</p>
                    <div className='flex items-end justify-end gap-3 flex-row'>
                        <div className='p-1 rounded-2xl bg-purple-500 flex justify-center items-center'>
                            <Eye size={20} color='white' />
                        </div>
                        <div className='p-1 rounded-2xl bg-white flex justify-center items-center'>
                            <Github size={20} color='black' />
                        </div>
                    </div>
                </CardSpotlight>
            ))}
        </div>
    );
}

export default ProjectsPage;
