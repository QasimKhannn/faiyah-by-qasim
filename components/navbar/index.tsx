"use client";
import "./styles.css"
import { helix } from 'ldrs';
import { Navigation } from './navigation';
import { MenuToggle } from './menu-toggle';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import React, { useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);

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
            clipPath: "circle(30px at calc(100% - 40px) 40px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };


    return (
        <div className='flex h-16 w-full rounded-2xl bg-black justify-between p-5 items-center py-3 px-5 mb-5'>
            <div className="flex justify-center items-center pt-5">
                <p className='text-3xl font-bold flex items-center text-white'>
                    QASIM
                    <span className='mx-2 flex justify-center items-center'>
                        <l-helix size="20" speed="2.5" color="orange" />
                    </span>
                    KHAN
                </p>
            </div>

            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className='w-full'
            >
                <motion.div className="background absolute inset-0" variants={sidebar} />
                <MenuToggle toggle={() => toggleOpen()} />

                {isOpen && <Navigation toggle={() => toggleOpen()} />}
            </motion.nav>
        </div>
    );
};

export default Navbar;
