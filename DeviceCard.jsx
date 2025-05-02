import { DeviceCardInfo } from "@/lib/DeviceCardInfo";
import Image from "next/image";

export default function DeviceCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                DeviceCardInfo.map((link) => (
                    <div key={link.id} className="flex cursor-pointer flex-col gap-[30px] shadow-lg rounded-[12px]  p-[50px] bg-gradient-to-tr from-[#0F0F0F] via-[#0F0F0F] to-[#1F0E0E] ">

                        <div className="flex gap-4 items-center">
                            <div className="p-4 bg-black-shade-08 border-2 rounded-[12px] border-black-shade-12">

                            <Image src={link.icon}  alt="card Icon"  className=""/>
                            </div>
                            <h2 className="text-white leading-6 text-[24px] font-semibold">{link.name}</h2>
                        </div>
                        <p className="text-[#999999] font-normal text-[18px] leading-6">{link.desc}</p>
                    </div>
                ))
            }

        </div>
    )
}
