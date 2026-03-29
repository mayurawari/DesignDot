"use client";

import Image from "next/image";

export default function AboutFirm() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-white box-border"
      style={{ height: "calc(700px * var(--slider-scale, 1))" }}
    >
      {/* World Map Background (Subtle) */}
      <div className="absolute w-full h-full opacity-[0.05] pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M150 100 Q 160 80, 200 90 T 250 110 T 300 100 T 350 120 T 400 110" stroke="#000" strokeWidth="1" fill="none"/>
          </svg>
      </div>

      {/* 1920px Base Container with Scaling */}
      <div 
        className="absolute left-1/2 top-0 w-[1920px] h-full ml-[-960px] origin-top box-border z-[1]"
        style={{ transform: "scale(var(--slider-scale, 1))" }}
      >
        
        {/* Left Block: ABOUT FIRM */}
        <div className="absolute w-[224px] h-[218px] top-[28px] left-[90px] bg-[#F2F2F2] rounded-[20px] flex flex-col justify-end p-[30px] box-border">
          <div className="font-poppins font-semibold text-[24px] leading-none text-black">
            ABOUT <br /> FIRM
          </div>
        </div>

        {/* Middle Part: Title & Description */}
        <div className="absolute top-[22px] left-[384px] w-[567px]">
            <h2 className="font-poppins font-normal text-[24px] leading-none text-[#333333] mb-[20px] text-justify">
                HLS Global Group
            </h2>
            <p className="font-poppins font-normal text-[16px] leading-[160%] text-[#333333] text-justify w-[567px]">
                is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
            </p>
        </div>

        {/* Stats Grid */}
        <div className="relative w-full h-full">
            
            {/* Stat 1: 250+ */}
            <div className="absolute top-[372px] left-[384px]">
                <div className="font-poppins font-semibold text-[36px] leading-none text-[#333333]">250+</div>
                <div className="mt-[10px] font-poppins font-normal text-[16px] leading-[120%] text-[#333333] w-[165px]">
                  Professional Staff Members Globally
                </div>
            </div>

            {/* Stat 2: 1000+ */}
            <div className="absolute top-[372px] left-[733px]">
                <div className="font-poppins font-semibold text-[36px] leading-none text-[#333333]">1000+</div>
                <div className="mt-[10px] font-poppins font-normal text-[16px] leading-[120%] text-[#333333] w-[165px]">
                  Clients in the HLS Global Network
                </div>
            </div>

            {/* Blue Divider Line */}
            <div className="absolute w-[567px] h-[2px] top-[504px] left-[384px] bg-[#00338D]" />

            {/* Stat 3: 35+ */}
            <div className="absolute top-[523px] left-[384px]">
                <div className="font-poppins font-semibold text-[36px] leading-none text-[#333333]">35+</div>
                <div className="mt-[10px] font-poppins font-normal text-[16px] leading-[120%] text-[#333333] w-[200px]">
                  Years of Experience Connecting Japan and the World
                </div>
            </div>

            {/* Stat 4: 15+ */}
            <div className="absolute top-[523px] left-[733px]">
                <div className="font-poppins font-semibold text-[36px] leading-none text-[#333333]">15+</div>
                <div className="mt-[10px] font-poppins font-normal text-[16px] leading-[120%] text-[#333333] w-[165px]">
                  Countries Covered With Our Alliance Network
                </div>
            </div>
        </div>

        {/* Right Part: Location Badge & Building Image */}
        
        {/* WE ARE LOCATED Badge */}
        <div className="absolute w-[331.79px] h-[35px] top-[24.09px] left-[1501.21px] bg-[#FF7300] rounded-[20px] flex items-center px-[20px] box-border gap-[10px]">
            <span className="font-poppins font-semibold text-[12px] text-white uppercase whitespace-nowrap">
              WE ARE LOCATED
            </span>
            <span className="font-poppins font-bold text-[15px] text-white ml-auto">
              INDIA
            </span>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6.5 6.5L12 1" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>

        {/* Building Image */}
        <div className="absolute w-[712px] h-[569px] top-[83px] left-[1121px] rounded-[25px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          <Image
            src="/assets/building.png"
            alt="HLS Global Building"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

      </div>
    </section>
  );
}
