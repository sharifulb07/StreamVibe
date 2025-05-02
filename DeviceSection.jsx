import DeviceCard from "./DeviceCard";
import TitleDesc from "./TitleDesc";


export default function DeviceSection() {
  return (
    <div className="px-[10%] flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
     
      <TitleDesc desc={'With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'} title={'We Provide you streaming experience across various devices.'} />

      <DeviceCard />

    </div>
  )
}
