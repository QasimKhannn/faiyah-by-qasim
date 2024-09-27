import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

interface props {
    label: string
    link: string
    i: number
    handle: any
}

export const MenuItem: React.FC<props> = ({ i, label, link, handle }: props) => {
    return (
        <motion.li
            variants={variants}
            initial="closed"
            animate="open"
            custom={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={link} onClick={handle} className="text-black md:text-8xl text-7xl font-bold my-2 md:ml-5 text-transition">
                {label}
            </Link>
        </motion.li>
    );
};
