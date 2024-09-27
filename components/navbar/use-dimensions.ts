"use client";
import { useEffect, useRef, useState } from "react";

// The magical hook to measure the dimensions
export const useDimensions = (ref: any) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Only measure when the element is mounted
        if (ref.current) {
            setDimensions({
                width: ref.current.offsetWidth,
                height: ref.current.offsetHeight,
            });
        }
    }, [ref]);

    return dimensions;
};
