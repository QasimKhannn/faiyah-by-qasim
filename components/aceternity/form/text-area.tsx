"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

// Similarly adjust TextArea
const TextArea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className, rows = 4, ...props }, ref) => {
        const radius = 100; // Change this to increase the radius of the hover effect
        const [visible, setVisible] = React.useState(false);
        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        const handleMouseMove = (event: React.MouseEvent) => {
            const { currentTarget, clientX, clientY } = event;
            const { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        };

        return (
            <motion.div
                style={{
                    background: useMotionTemplate`
        radial-gradient(
          ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--purple-500),
          transparent 80%
        )
      `,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-[2px] rounded-lg transition duration-300 group/textarea"
            >
                <textarea
                    rows={rows}
                    className={cn(
                        `flex w-full border-none bg-zinc-800 text-white rounded-md px-3 py-2 text-sm 
          file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-text-neutral-600 
          placeholder:font-bold font-bold focus-visible:outline-none 
          focus-visible:ring-[2px] focus-visible:ring-neutral-600
          disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_var(--neutral-700)]
          group-hover/input:shadow-none transition duration-400`,
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </motion.div>
        );
    }
);
TextArea.displayName = "TextArea";

export default TextArea