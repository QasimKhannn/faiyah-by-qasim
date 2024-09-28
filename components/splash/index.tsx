"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SplashScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            {loading ? (
                <div className="absolute inset-0 flex justify-center items-center bg-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className="h-24 w-24"
                    >
                        <motion.path
                            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
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
