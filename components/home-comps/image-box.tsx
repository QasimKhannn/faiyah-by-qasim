"use client";
import Image from "next/image";
import React from "react";
import myImage from "../../public/my-image.webp";
import AnimatedBorder from "../anim-border";

interface props {
    className?: string;
}

const ImageBox: React.FC<props> = ({ className }: props) => {
    return (
        <div className={`${className} relative w-full min-h-[230px] md:h-full`}>
            <AnimatedBorder>
                <Image
                    src={myImage}
                    alt="A description of the image for accessibility"
                    height={100}
                    width={1000}
                    className="object-cover h-full rounded-2xl z-20 p-[0.14rem]"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
            </AnimatedBorder>
        </div>
    );
};

export default ImageBox;
