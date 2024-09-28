"use client"
import React from 'react'

const ContactUs: React.FC = () => {
    return (
        <div className="md:h-[33rem] h-full w-full flex flex-col justify-center items-center">
            <div className='flex flex-col items-center'>
                <div className="w-full flex justify-center items-center mt-5">
                    <span className="font-bold text-[#fff] text-5xl">
                        Get in
                    </span>
                    <span className="font-bold text-5xl text-[rgba(255,255,255,0.3)]">
                        touch
                    </span>
                </div>
                <span className="text-[#fff] text-sm font-bold">
                    Reach out, and let's create a universe of possibilities together!
                </span>
            </div>
            <div className='w-[95%] h-[90%] flex justify-center items-center'>
                <div className='flex w-[95%] h-[90%] flex-row items-center bg-[rgba(255,255,255,0.04)] rounded-[20px] border-solid border-2 border-[rgba(9,12,23,0.05)]'>
                    <div className='w-[50%]'>
                        <div className=''>
                            <span className="flex justify-start items-start text-[#fff]">
                                Let’s connect constellations
                            </span>
                            <span className="flex justify-start items-start text-[#fff]">
                                Let's align our constellations! Reach out and let the magic of
                                collaboration illuminate our skies.
                            </span>
                        </div>
                        <div className='flex flex-col items-start'>
                            <input className='w-full h-12 rounded-md text-white bg-[rgba(255,255,255,0.05)] border-solid border border-[rgba(255,255,255,0.2)]' placeholder='Email' />
                            <textarea className='w-full h-28 rounded-md text-white bg-[rgba(255,255,255,0.05)] border-solid border border-[rgba(255,255,255,0.2)]' placeholder='Message' />
                            <button className='text-white'>
                                Send it to the moon
                            </button>
                        </div>
                    </div>
                    <div className='flex w-[50%] justify-center items-center'>
                        <div className='flex flex-col gap-[6px] items-start'>
                            <span className="flex justify-start items-start text-[#fff]">
                                “Two lunar months revealed Earth's fragile beauty against vast
                                silence, transforming my view of our place in the universe.
                            </span>
                            <span className="text-[#fff]">
                                Irinel Traista
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs