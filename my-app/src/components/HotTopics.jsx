"use client";

import Image from "next/image";

const topics = [
  {
    text: "Parliament Introduces Income Tax Bill to Reshape India’s Direct Tax Landscape",
    left: "387px",
    arrowLeft: "624.85px"
  },
  {
    text: "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
    left: "782px",
    arrowLeft: "1019.85px"
  },
  {
    text: "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
    left: "1176px",
    arrowLeft: "1413.85px"
  },
  {
    text: "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025",
    left: "1560px",
    arrowLeft: "1797.85px"
  }
];

export default function HotTopics() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-white border-b border-[#E5E7EB] box-border"
      style={{ height: "calc(150px * var(--slider-scale, 1))" }}
    >
      {/* 1920px Base Container with Scaling */}
      <div 
        className="absolute left-1/2 top-0 w-[1920px] h-full ml-[-960px] origin-top box-border"
        style={{ transform: "scale(var(--slider-scale, 1))" }}
      >
        
        {/* HOT TOPICS Badge */}
        <div 
          className="absolute w-[206px] h-[49px] top-[5px] left-[93px] bg-[#FF7300] rounded-tr-[25px] flex items-center justify-center [clip-path:polygon(0_0,85%_0,100%_100%,0%_100%)]"
        >
          <span className="font-poppins font-semibold text-[12px] text-[#1B1B1B] uppercase whitespace-nowrap">
            HOT TOPICS
          </span>
        </div>

        {/* Content Blocks */}
        {topics.map((topic, i) => (
          <div key={i} className="absolute top-0 left-0 w-full h-full">
            
            {/* Blue Line */}
            <div 
              className="absolute h-[2.38px] top-[10.07px] bg-[#00338D] rounded-[30px]"
              style={{ width: "273px", left: topic.left }}
            />

            {/* Content Text */}
            <div 
              className="absolute w-[274px] h-[78px] top-[21px] text-[#333333] font-poppins font-normal text-[16px] leading-[1.2]"
              style={{ left: topic.left }}
            >
              {topic.text}
            </div>

            {/* Arrow */}
            <div 
              className="absolute w-[32.97px] h-[9.43px] top-[131.92px]"
              style={{ left: topic.arrowLeft }}
            >
              <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5H30M30 5L26 1M30 5L26 9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
