'use client'
import { useState } from "react";
import PriceCard from "./PriceCard";
import PriceSwitchBtn from "./PriceSwitchBtn";
import TitleDesc from "./TitleDesc";
import { PriceCardMonthlyInfo, PrcingCardYearlyInfo } from "@/lib/PricingCardInfo";


export default function PricingSection() {

    const [isActive, setIsActive] = useState(false);


    const toggleBtn = () => {
        setIsActive(!isActive);

    }


    return (
        <section className="px-[10%] flex flex-col gap-10 md:gap-15 lg:gap-[80px]">
            <div className="flex flex-col items-center md:flex-row justify-between gap-5 ">
                <TitleDesc title={"Choose the plan that's right for you"} desc={"Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"} />
                <PriceSwitchBtn isActive={isActive} toggle={toggleBtn} />
            </div>


            {isActive ?
                <div className="flex gap-3 flex-col md:flex-row ">
                    {
                        PriceCardMonthlyInfo.map((Info) => (
                            <PriceCard key={Info.id} title={Info.title} desc={Info.desc} price={Info.price} plan={Info.plan} btn1={Info.btn1} btn2={Info.btn2} />
                        ))
                    }

                </div>
                :

                <div className="flex gap-3 flex-col md:flex-row ">
                    {
                        PrcingCardYearlyInfo.map((Info) => (
                            <PriceCard id={Info.id} title={Info.title} desc={Info.desc} price={Info.price} plan={Info.plan} btn1={Info.btn1} btn2={Info.btn2} />
                        ))
                    }

                </div>
            }



        </section>
    )
}
