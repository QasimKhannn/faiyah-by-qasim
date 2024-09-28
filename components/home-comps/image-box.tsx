"use client";
import Image from "next/image";
import React from "react";
import myImage from "../../public/my-image.jpg";

interface props {
    className?: string
}

const ImageBox: React.FC<props> = ({ className }: props) => {
    return (
        <div className={className}>
            <Image
                src={myImage}
                alt="qasim-khan"
                layout="responsive"
                className="object-cover w-full h-full rounded-2xl"
                priority={true}
            />
        </div>
    );
};

export default ImageBox;
