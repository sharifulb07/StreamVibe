"use client";

import Image from "next/image";
import logo from '@/public/logo.svg'
import { useEffect, useState } from "react";



export default function Logo({ size }) {



    return (
        <Image src={logo} width={size.width} height={size.height} alt="streamvibe logo" />
    )

}
