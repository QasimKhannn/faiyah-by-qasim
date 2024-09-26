"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import CanvasRevealEffect from "./canvas-reveal-effect";
import { cn } from "@/lib/utils";

const CardSpotlight = ({
    children,
    radius = 350,
    color = "#262626",
    className,
    ...props
}: {
    radius?: number;
    color?: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: ReactMouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div
            className={cn(
                "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-stone-900 dark:border-neutral-800",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                style={{
                    backgroundColor: color,
                    maskImage: useMotionTemplate`
                        radial-gradient(
                            ${radius}px circle at ${mouseX}px ${mouseY}px,
                            white,
                            transparent 80%
                        )
                    `,
                    zIndex: 0,
                }}
            >
                {isHovering && (
                    <CanvasRevealEffect
                        animationSpeed={5}
                        containerClassName="bg-transparent absolute inset-0 pointer-events-none"
                        colors={[
                            [255, 165, 0],
                            [255, 69, 0],
                            [255, 0, 0],
                        ]}
                        dotSize={3}
                    />
                )}
            </motion.div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default CardSpotlight;
