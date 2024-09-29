"use client"
import { Input, TextArea } from '@/components/aceternity/form/input'
import { Label } from '@/components/aceternity/form/label'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'
import { zoomOutVariants } from '@/lib/framer'

const ContactUs: React.FC = () => {
    const handleSubmit = () => {
        console.log("HEHEHE")
    }

    return (
        <motion.div
            className="md:h-[33rem] h-full w-full mx-auto grid grid-cols-2 gap-4 px-5 md:mt-0 mb-10 md:mb-0 py-3 bg-transparent"
            variants={zoomOutVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="md:h-[31rem] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black md:col-span-1 col-span-2">
                <h2 className="font-bold text-2xl text-neutral-200">
                    Get In Touch
                </h2>
                <p className="text-xs max-w-sm mt-2 font-bold text-neutral-300">
                    Reach out, and let's create a universe of possibilities together!
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Qasim" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Khan" type="text" />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="message">Message</Label>
                        <TextArea id="password" placeholder="Your Message" />
                    </LabelInputContainer>

                    <button
                        className="bg-gradient-to-br font-bold relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                        type="submit"
                    >
                        Send it to the Space &rarr;
                        <BottomGradient />
                    </button>
                </form>
            </div>
            <div className="relative w-full md:h-[31rem] object-cover mx-auto rounded-none md:rounded-2xl shadow-input bg-black md:col-span-1 col-span-2 overflow-hidden">
                <Image
                    src="https://img.freepik.com/free-photo/view-astronaut-spacesuit-snowboarding-moon_23-2151294776.jpg?t=st=1727597361~exp=1727600961~hmac=887fc045d0e0f073c434e9ea909ed8613e90a9d9f24a119e3a952a99e1e33cec&w=1060"
                    alt="qasim-khan"
                    fill
                    className="object-cover rounded-2xl"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 
               (max-width: 1024px) 50vw, 
               33vw"
                />
            </div>


        </motion.div>
    )
}

export default ContactUs

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
