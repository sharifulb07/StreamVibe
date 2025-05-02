 import { policyInfo } from "@/lib/FooterInfo"

export default function PolicySection() {
  return (
    <section className=" border-t-2 border-t-black-shade-15 mx-[10%] pb-[50px] pt-[24px] flex flex-col justify-between md:flex-row items-center">
        <p className="text-grey-shade-60 text-[18px] font-normal">@2023 streamvib, All Rights Reserved</p>
        <div className="flex gap-5  items-center">
            {
                policyInfo.map((list)=>(
                    <div key={list.id} className="flex items-center gap-5">
                        <p  className="text-grey-shade-60 text-[18px] font-normal">{list.name}</p> 
                    {list.id<3 &&    <div className="divide-y-2 h-4 w-[2px] divide-grey-shade-60 bg-grey-shade-60"></div>}
                    </div>

                ))
            }
        </div>

      
    </section>
  )
}
