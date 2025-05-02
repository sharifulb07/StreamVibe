import FooterSectionCard from "./FooterSectionCard"
import { menuInfo, moviesInfo, showsInfo, supportInfo, subscriptionsInfo } from "@/lib/FooterInfo"
import { socialInfo } from "@/lib/SocialInfo"
import SocialIcon from "./SocialIcon"

export default function Footer() {
    return (
        <div className="w-full max-w-full grid grid-cols-2 md:grid-cols-6 justify-between md:flex-row gap-[30px] px-[10%] py-[100px]">
            <FooterSectionCard title={'Home'} menuList={menuInfo} />
            <FooterSectionCard title={'Movies'} menuList={moviesInfo} />
            <FooterSectionCard title={'Shows'} menuList={showsInfo} />
            <FooterSectionCard title={'Support'} menuList={supportInfo} />
            <FooterSectionCard title={'Subscriptions'} menuList={subscriptionsInfo} />
            <div className="flex flex-col">
                <FooterSectionCard title={'Connect With Us'} />
                <div className="flex gap-[14px]">

                    {
                        socialInfo.map((list) => (
                            <SocialIcon key={list.id} link={list} />
                        ))
                    }
                </div>

            </div>


        </div>
    )
}
