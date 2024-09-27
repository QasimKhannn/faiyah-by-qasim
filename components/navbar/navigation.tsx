import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const menuItems = [
    { id: 0, link: '/', label: 'About' },
    { id: 1, link: '/projects', label: 'Projects' },
    { id: 2, link: '/contact', label: 'Contact' },
];

interface props {
    toggle: any
}

export const Navigation: React.FC<props> = ({ toggle }: props) => (
    <motion.ul variants={variants}>
        {menuItems.map(i => (
            <MenuItem i={i.id} key={i.id} label={i.label} link={i.link} handle={toggle} />
        ))}
    </motion.ul>
);
