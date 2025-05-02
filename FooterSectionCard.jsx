import Link from "next/link";


export default function FooterSectionCard({ title, menuList }) {
    return (
        <div  className="flex flex-col gap-6 ">
            <h2 className="font-semibold text-[20px] text-white">{title}</h2>
            <div className="flex flex-col gap-[14px]">
                {menuList&& menuList.map((list) => (
                    <Link key={list.id} href={list.href} className="font-medium text-[18px] text-grey-shade-60">

                       {list.name}
                    </Link>
                ))}
            </div>

        </div>
    )
}
