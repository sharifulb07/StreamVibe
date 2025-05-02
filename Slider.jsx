import Image from "next/image"

export default function Slider({one, two, three, four, anim, top}) {
  return (
    <div className={`absolute  top-${top} flex gap-5 ${anim}`}>
                <Image
                    src={one}
                    alt="Background"
                  
                    
                    className="object-cover " // or object-contain
                    quality={80}
                    priority
                    sizes="100vw"
                />
                <Image
                    src={two}
                    alt="Background"
                 
                    className="object-cover " // or object-contain
                    quality={80}
              
                    sizes="100vw"
                />
                <Image
                    src={three}
                    alt="Background"
                 
                    className="object-cover " // or object-contain
                    quality={80}
                
                    sizes="100vw"
                />
                <Image
                    src={four}
                    alt="Background"
                   
                    className="object-cover " // or object-contain
                    quality={80}
                    priority
                    sizes="100vw"
                />
            </div>
  )
}
