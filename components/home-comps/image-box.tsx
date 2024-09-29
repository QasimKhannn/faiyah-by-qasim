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
        <div className={`${className} relative w-full h-80 md:h-full`}>
            <AnimatedBorder>
                <Image
                    src={myImage}
                    alt="A description of the image for accessibility"
                    fill
                    className="object-cover rounded-2xl z-20 p-[0.14rem]"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
            </AnimatedBorder>
        </div>
    );
};

export default ImageBox;
