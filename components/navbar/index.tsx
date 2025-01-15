"use client";
import { helix } from 'ldrs';
import { Navigation } from './navigation';
import { MenuToggle } from './menu-toggle';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import React, { useEffect, useRef, useState } from 'react';

const Navbar: React.FC = () => {
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [zIndex, setZIndex] = useState('z-50');

    useEffect(() => {
        helix.register();
    }, []);

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(24px at calc(100% - 40px) 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setZIndex('z-0');
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            setZIndex('z-50');
        }
    }, [isOpen]);


    return (
        <div className='flex h-16 w-full bg-black justify-between p-5 items-center'>
            <div className="flex justify-center items-center pt-5">
                <p className='text-3xl font-bold flex items-center text-white'>
                    QASIM
                    <span className='mx-2 flex justify-center items-center'>
                        <l-helix size="20" speed="2.5" color="#a65aff" />
                    </span>
                    KHAN
                </p>
            </div>

            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className={`fixed top-0 left-0 bottom-0 w-full ${zIndex}`}
            >
                <motion.div
                    className="fixed top-0 right-[20px] bottom-0 w-full bg-white overflow-x-hidden
               bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400 to-purple-400"
                    variants={sidebar}
                />
                <MenuToggle toggle={() => toggleOpen()} />

                {isOpen && <Navigation toggle={() => toggleOpen()} />}
            </motion.nav>
        </div>
    );
};

export default Navbar;
