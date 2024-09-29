"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShootingStars } from "../aceternity/shooting-starts";
import { StarsBackground } from "../aceternity/stars-background";

const SplashScreen = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <>
            {loading ? (
                <div className="absolute inset-0 flex justify-center items-center bg-transparent">
                    <ShootingStars />
                    <StarsBackground />
                    <svg
                        id="logosandtypes_com"
                        data-name="logosandtypes com"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 150 150"
                        className="h-56 w-h-56"
                    >
                        <motion.path
                            d="M140.39,93.45A25,25,0,0,0,134,89.07a62.22,62.22,0,1,0-92,38.79c20.38,12.07,46.54,10.8,62.79.17.49.56,1,1.09,1.55,1.61a24.85,24.85,0,0,0,34.06-36.19ZM94.47,86.54a24.26,24.26,0,0,1-33.2,8.65l-.05,0a24.29,24.29,0,1,1,33.25-8.62Z"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            fill="#8401ff"
                            strokeWidth="2"
                            stroke="white"
                        />
                    </svg>
                </div>
            ) : (
                children
            )}
        </>
    );
};

export default SplashScreen;
