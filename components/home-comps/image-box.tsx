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
                width={500}
                height={300}
                className="rounded-2xl object-cover"
                priority
            />
        </div>
    );
};

export default ImageBox;
