"use client"
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import LottieAnimation from "../lottie-animation";
import fireData from "../../public/lottie/fire.json";
import { usePathname } from "next/navigation";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const lottie = {
    open: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8 }
    },
    closed: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3 }
    }
};

const menuItems = [
    { id: 0, link: '/', label: 'About' },
    { id: 1, link: '/projects', label: 'Projects' },
    { id: 2, link: '/contact', label: 'Contact' },
];

interface Props {
    toggle: () => void;
}

export const Navigation: React.FC<Props> = ({ toggle }: Props) => {
    const currentPath = usePathname()

    return (
        <motion.ul
            variants={variants}
            className="flex flex-col md:flex-row md:justify-between w-full h-full"
        >
            <div className="flex justify-start items-start flex-col">
                {menuItems.map(i => (
                    <MenuItem
                        i={i.id}
                        key={i.id}
                        label={i.label}
                        link={i.link}
                        handle={toggle}
                        isActive={currentPath === i.link}
                    />
                ))}
            </div>
            <motion.div
                variants={lottie}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex justify-center items-center flex-col md:ml-4"
            >
                <LottieAnimation animationData={fireData} />
            </motion.div>
        </motion.ul>
    )
}
