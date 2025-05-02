
import one from '@/public/heroslide/slide1.svg';
import two from '@/public/heroslide/slide2.svg';
import three from '@/public/heroslide/slide3.svg';
import four from '@/public/heroslide/slide4.svg';

import Image from 'next/image';
import Slider from './Slider';

export default function HeroScroll() {
  return (
    <div className='flex flex-col gap-1  lg:gap-5  '>
            <div className="relative h-[50px]  lg:h-[150px] flex flex-col overflow-hidden ">
                <Slider top={0} one={one} two={two} three={three} four={four} anim={'img-anim-left'} />
            </div>
            <div className="relative h-[50px]  lg:h-[150px] flex flex-col overflow-hidden ">

                <Slider top={500} one={four} two={three} three={two} four={one} anim={'img-anim-right'} />
            </div>
            <div className="relative h-[50px]  lg:h-[150px] flex flex-col overflow-hidden ">
                <Slider top={0} one={two} two={three} three={one} four={four} anim={'img-anim-left'} />
            </div>
            <div className="relative h-[50px]  lg:h-[150px] flex flex-col overflow-hidden ">

                <Slider top={500} one={three} two={two} three={four} four={one} anim={'img-anim-right'} />
            </div>
        </div>
  )
}
