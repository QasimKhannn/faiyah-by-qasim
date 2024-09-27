"use client";
import Image from "next/image";
import React from "react";
import myImage from "../../public/my-image.jpg";

const ImageBox: React.FC = () => {
    return (
        <div className="relative h-full w-full flex rounded-2xl md:col-span-1">
            <Image
                src={myImage}
                alt="qasim-khan"
                layout="responsive"
                width={500}
                height={300}
                className="rounded-2xl object-cover"
                priority
            />
        </div>
    );
};

export default ImageBox;
