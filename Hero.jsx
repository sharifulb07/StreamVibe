import HeroScroll from "./HeroScroll";
import Logo from "./Logo";
import { PlayIcon } from "@heroicons/react/24/solid";
import WatchBtn from "./WatchBtn";
import Image from "next/image";

import play from '@/public/abstract.svg'


export default function Hero() {
    return (
        <div>
            <HeroScroll />

            <div className=" flex justify-center items-center absolute z-10 top-[0px] h-[550px] md:h-[480px] lg:h-[680px] opacity-100 w-full max-w-full bg-gradient-to-b from-black-shade-06 via-white/20 to-black-shade-06">
            <Image src={play} alt="play button" />
            </div>
            <section className=" top-[110px] md:top-[150px] lg:top-[550px]  absolute z-20 gap-[40px] flex flex-col justify-center items-center ">
                <div className="flex flex-col gap-[10px] justify-center items-center">
                    <h1 className="text-white text-[48px] font-bold text-center"> The Best Streaming Experience</h1>
                    <p className=" font-semibold text-[18px] text-center text-grey-shade-60 px-5 lg:px-[150px] xl:px-[412px]">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                </div>
                <WatchBtn photo={<PlayIcon height={24} color="white" />} title={'Start Watching Now'} />

            </section>



        </div>

    )
}
