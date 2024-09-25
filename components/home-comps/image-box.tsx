"use client";
import Image from "next/image";
import React from "react";
import myImage from "../../public/my-image.jpg";

const ImageBox: React.FC = () => {
    return (
        <div className="relative h-full w-full flex rounded-2xl md:col-span-1 overflow-hidden">
            <Image
                src={myImage}
                alt="qasim-khan"
                layout="responsive" // Responsive layout
                width={500} // Set a width to control the aspect ratio
                height={300} // Set a height to control the aspect ratio
                className="rounded-2xl object-cover" // Ensure the image covers the container
                priority // Optional: load the image with higher priority
            />
        </div>
    );
};

export default ImageBox;
