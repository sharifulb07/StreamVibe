'use client'
import Image from "next/image"
export default function WatchBtn({photo, title}) {
  return (
    <button className="cursor-pointer items-center justify-center px-6 rounded-[8px] py-[18px] bg-red-shade-45 flex gap-1">

      {photo && <div >
        {photo}
      </div> }
     <p className="text-white ">
     {title}
        </p>
    </button>
  )
}
