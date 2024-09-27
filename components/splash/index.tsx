"use client"; // Mark this as a client component

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import LdrLoader from "@/components/ldr-loader"; // Import your loader

const SplashScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulating splash screen duration

        return () => clearTimeout(timer);
    }, []);

    // Define Framer Motion path animation variants
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)" // Invisible
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)", // Visible with white fill
            transition: {
                duration: 2, // Match this with the splash screen duration
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            {loading ? (
                <div className="absolute inset-0 flex justify-center items-center z-50 bg-black">
                    {/* SVG with Framer Motion path animation */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className="h-24 w-24" // Adjust size as needed
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
                children // Render children once splash is done
            )}
        </>
    );
};

export default SplashScreen;
