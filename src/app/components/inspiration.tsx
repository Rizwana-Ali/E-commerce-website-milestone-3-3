import Image from "next/image"

export default function Inspiration() {
    return (
        <div className="bg-[#FCF8F3] flex flex-col mt-24 md:flex-row items-center md:items-start">
            {/* Right Side */}
            <div className="ml-6 md:ml-20 mt-12 md:mt-44 text-center md:text-left">
                <h1 className="font-bold text-2xl md:text-4xl">
                    50+ Beautiful rooms <br />
                    inspiration
                </h1>
                <p className="mt-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rerum.
                </p>
                <button className="bg-[#B88E2F] font-bold px-4 py-2 mt-4 text-white">
                    Explore More
                </button>
            </div>

            {/* Left Side */}
            <div className="flex flex-col md:flex-row gap-3 mt-8 md:mt-0 items-center">
                <Image
                    src={"/Image.png"}
                    width={381}
                    height={480}
                    alt="img1"
                    className="w-full md:w-auto"
                />
                <Image
                    src={"/Rectangle 25.png"}
                    width={281}
                    height={480}
                    alt="img2"
                    className="w-full md:w-auto"
                />
               
            </div>
        </div>
    );
}
Inspiration();







