"use client"
import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100, duration: 0.9 }, // Increase duration for slower transition
            opacity: { duration: 0.9 } // Add opacity transition for smoother effect
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000, duration: 0.9 }, // Increase duration for slower transition
            opacity: { duration: 0.9 } // Add opacity transition for smoother effect
        }
    },
};

interface Props {
    label: string;
    link: string;
    i: number;
    handle: any;
    isActive: boolean;
}

export const MenuItem: React.FC<Props> = ({ i, label, link, handle, isActive }: Props) => {
    return (
        <motion.li
            variants={variants}
            initial="closed"
            animate="open"
            custom={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                href={link}
                onClick={handle}
                className={`text-black md:text-8xl text-7xl font-bold my-2 text-transition ${isActive ? 'text-white' : ''}`} // Apply active class
            >
                {label}
            </Link>
        </motion.li>
    );
};
