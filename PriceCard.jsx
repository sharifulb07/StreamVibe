import WatchBtn from "./WatchBtn";



export default function PriceCard({id,  title, desc, price, plan, btn1, btn2 }) {
    return (
        <div key={id} className="  gap-[40px] lg:gap-[50px] rounded-[12px] flex flex-col p-[50px] bg-black-shade-10 border-2 border-black-shade-15">
            <div className="flex flex-col gap-4">
                <h2 className="text-[24px] font-bold text-white">{title}</h2>
                <p className="text-grey-shade-60 font-normal text-[18px]">{desc}</p>
            </div>
            <div className="flex items-center justify-start">

            <h2 className="text-white text-[48px] font-semibold">{price} </h2>
            <span className="text-grey-shade-60 font-medium text-[18px] leading-3">/ {plan} </span>
            </div>
            <div className="flex gap-5">
                <h1 className="px-[24px] py-[18px] cursor-pointer text-white bg-black-shade-08 rounded-[8px] border-2 border-black-shade-15">{btn1} </h1>
                <WatchBtn title={btn2} />
            </div>


        </div>
    )
}
