"use client";

import Image from "next/image";

export default function HeroSlider() {
  return (
    <section 
      className="relative w-full overflow-hidden box-border bg-[#003399]"
      style={{ height: "calc(997px * var(--slider-scale, 1))" }}
    >
      {/* 1920px Base Container with Scaling */}
      <div 
        className="absolute left-1/2 top-0 w-[1920px] h-full ml-[-960px] origin-top box-border"
        style={{ transform: "scale(var(--slider-scale, 1))" }}
      >
        
        {/* Tilted Image Container */}
        <div 
          className="absolute w-[1279.99px] h-[1084.30px] top-[-675.47px] left-[522px] rotate-[40.03deg] rounded-[167px] bg-[#D9D9D9] overflow-hidden z-[1] box-border"
        >
          <div className="absolute w-full h-full rotate-[-40.03deg] scale-[1.3] flex items-center justify-center">
            <Image
              src="/assets/building.png"
              alt="Office Building"
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-[10] w-full h-full box-border">
          
          {/* First Heading */}
          <div className="absolute w-[345px] h-[20px] top-[270px] left-[102px] text-white font-bold text-[16px] uppercase font-['Source_Sans_Pro']">
            Accountants and Global Business Advisors
          </div>

          {/* Second Heading */}
          <div className="absolute w-[459px] h-[120px] top-[310px] left-[100px] text-white font-bold text-[64px] leading-[60px] font-poppins">
            EMPOWERED <br /> WORKPLACES
          </div>

          {/* Divider line in image */}
          <div className="absolute w-[323px] h-[2px] bg-white top-[442px] left-[101.5px]" />

          {/* Third Line */}
          <div className="absolute w-[480px] h-[65px] top-[467px] left-[102px] text-white font-light text-[16px] leading-[135%] font-poppins">
            by fostering inclusivity, encouraging growth, promoting collaboration, valuing diversity, supporting innovation, and building trust for shared success.
          </div>

          {/* Button */}
          <div className="absolute w-[206px] h-[49px] top-[612px] left-[104px] border-[3px] border-[#100F0F] bg-[#FF7300] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] flex items-center pl-[20px] cursor-pointer group">
            <div className="flex items-center gap-[10px]">
               <svg width="34" height="10" viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H30M30 5L26 1M30 5L26 9" stroke="#100F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
               <span className="text-[#1B1B1B] font-semibold text-[12px] uppercase font-poppins">LETS CONNECT</span>
            </div>
          </div>

          {/* Last Heading */}
          <div className="absolute w-[604px] h-[21px] top-[779px] left-[101px] text-white font-semibold text-[14px] uppercase font-poppins">
            Accounting, Taxation, & Business Advisory between India, Japan, and the World
          </div>

          {/* Bottom Right Avatar Group */}
          {/* Person 1 */}
          <div className="absolute top-[757.69px] left-[1585.26px] w-[64.068px] h-[64.068px] rounded-full border-2 border-[#4B4B4B] overflow-hidden">
            <Image src="/assets/person1.png" alt="Team" fill style={{ objectFit: "cover" }} />
          </div>
          {/* Person 2 */}
          <div className="absolute top-[757.69px] left-[1615.49px] w-[64.068px] h-[64.068px] rounded-full border-2 border-[#4B4B4B] overflow-hidden">
            <Image src="/assets/person2.png" alt="Team" fill style={{ objectFit: "cover" }} />
          </div>
          {/* Person 3 */}
          <div className="absolute top-[757.69px] left-[1650.04px] w-[64.068px] h-[64.068px] rounded-full border-2 border-[#4B4B4B] overflow-hidden text-center">
            <Image src="/assets/person3.png" alt="Team" fill style={{ objectFit: "cover" }} />
          </div>
          {/* MORE block */}
          <div className="absolute top-[756.97px] left-[1676.68px] w-[64.068px] h-[64.068px] rounded-full bg-[#FF7300] border-2 border-white flex items-center justify-center text-white font-poppins font-semibold text-[10px]">
            MORE
          </div>
          
          {/* 250+ Text Group */}
          <div className="absolute top-[755px] left-[1755.96px] font-poppins text-white">
            <div className="w-[104.488px] h-[40.563px] font-semibold text-[32px] leading-none uppercase whitespace-nowrap">
              250 +
            </div>
            <div className="absolute top-[38.66px] w-[87.041px] h-[30.422px] font-normal text-[10px] leading-[12px] whitespace-nowrap">
              Enjoy Working with us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
