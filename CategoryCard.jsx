
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
export default function CategoryCard({photo, title}) {
  return (
    <div className=" relative w-full max-w-[296px] p-[30px]  flex flex-col gap-3 rounded-[8px] bg-black/10 border-black/15 border-2 cursor-pointer">
        <Image src={photo}  alt="card photo" />

        <div className=" flex justify-between items-center ">
            <h2 className="font-semibold text-[18px] text-white">{title}</h2>
            <ArrowRightIcon  className="h-[18px]  " color="white"/>

        </div>
      
    </div>
  )
}
