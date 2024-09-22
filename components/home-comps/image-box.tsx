"use client";
import Image from "next/image";
import React from "react";

const ImageBox: React.FC = () => {
    return (
        <div className="bg-white opacity-75 h-full w-full flex rounded-2xl col-span-1 relative row-span-1">
            <Image
                src={require("../../public/my-image.jpg")}
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
