"use client"
import Lottie from 'lottie-react';
import React from 'react';

interface LottieAnimationProps {
    animationData: any;
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, loop = true, autoplay = true, className }) => {
    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            className={className}
        />
    );
};

export default LottieAnimation;
