import Image from "next/image";


export default function Hero(){
    return(
        
            <div className="bg-[#F5F5F5]">
    {/* Right side */}
    <Image
      src="/hero1.jpg"
      width={1430}
      height={802}
      alt="hero image"
      className="w-full h-auto max-w-[1440px] max-h-[500px] mx-auto"
    />
  
   </div>
  
    )
  }
  Hero();
  