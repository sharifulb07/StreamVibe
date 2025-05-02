"use client"
import { useState } from "react"

export default function PriceSwitchBtn({isActive, toggle}) {
  

    return (
        <div className=" max-w-[250px] flex  rounded-[10px] items-center justify-center px-2.5 py-0 bg-black-shade-06 border-2 border-black-shade-15 h-[80px]">
            <button onClick={toggle} className={` px-6 py-[14px] font-medium text-[18px]  rounded-[10px]  ${isActive? "bg-black-shade-12 text-white" : "text-grey-shade-60"}`}>Monthly</button>
            <button onClick={toggle} className={` px-6 py-[14px] font-medium text-[18px]  rounded-[10px] ${isActive?"text-grey-shade-60": "bg-black-shade-12 text-white" }`}>Yearly</button>

        </div>
    )
}
