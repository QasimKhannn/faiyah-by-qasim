"use client"

import React from 'react'

interface props {
    children: React.ReactNode
}

const AnimatedBorder: React.FC<props> = ({ children }: props) => {
    return (
        <div className="relative z-10 flex w-full items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
            <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#a65aff_20deg,transparent_120deg)]">
            </div>
            {children}
        </div>
    )
}

export default AnimatedBorder