"use client"
import React from 'react'
import { quantum } from 'ldrs'

quantum.register()

function LdrLoader() {
    return (
        <div className='relative transition-opacity duration-500 hover:opacity-50'>
            <l-quantum
                size="300"
                speed="4"
                color="orange"
            ></l-quantum>
        </div>
    )
}

export default LdrLoader