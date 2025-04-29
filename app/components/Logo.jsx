"use client";

import Image from "next/image";
import logo from '@/public/logo.svg'
import { useEffect, useState } from "react";
import { headers } from "next/headers";


export default function Logo({ device }) {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {

        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth)
        }
        const handleSize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleSize);
        return () => window.removeEventListener('resize', handleSize);
    }, [])

    const LogoSize = () => {
        if (windowWidth < 640) return { width: 116, height: 35 };
        if (windowWidth < 1024) return { width: 166, height: 50 };
        return { width: 199, height: 60 }
    }


    return (
        <Image src={logo} width={LogoSize.width} height={LogoSize.height} alt="streamvibe logo" />
    )

}
