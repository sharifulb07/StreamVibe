
import Image from 'next/image';
import ctaback from '@/public/ctaback.svg';
import TitleDesc from './TitleDesc';
import WatchBtn from './WatchBtn';


export default function CTA() {
  return (
  
    <div className=" ml-[10%] mr-[10%] backimg rounded-[10px]
             h-[250px] w-[80%] flex items-center justify-center">
     
     
     <div className='px-[5%] flex justify-between items-start w-full max-w-full '>
      <TitleDesc title={'Start your free trial today!'} desc={'This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.'} />
      <WatchBtn title={'Start a Free Trial'} />
     </div>

    </div>
  
  )
}
