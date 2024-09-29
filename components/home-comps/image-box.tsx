"use client";
import Image from "next/image";
import React from "react";
import myImage from "../../public/my-image.jpg";
import AnimatedBorder from "../anim-border";

interface props {
    className?: string;
}

const ImageBox: React.FC<props> = ({ className }: props) => {
    return (
        <div className={`${className} relative w-full h-64 sm:h-80 md:h-full`}>
            <AnimatedBorder>
                <Image
                    src={myImage}
                    alt="qasim-khan"
                    fill
                    className="object-cover w-full h-full rounded-2xl z-20 p-[0.14rem]"
                    priority={true}
                />
            </AnimatedBorder>
        </div>
    );
};

export default ImageBox;
