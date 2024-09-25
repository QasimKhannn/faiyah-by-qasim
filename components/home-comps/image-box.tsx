"use client";
import Image from "next/image";
import React from "react";
import myImage from "../../public/my-image.jpg"

const ImageBox: React.FC = () => {
    return (
        <div className="bg-white opacity-75 h-full w-full flex rounded-2xl col-span-1 relative row-span-1">
            <Image
                src={myImage}
                alt="qasim-khan"
                layout="fill"
                objectFit="cover"
                unoptimized
                className="rounded-2xl"
            />
        </div>
    );
};

export default ImageBox;
