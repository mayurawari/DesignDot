"use client";

import Image from "next/image";

const items = [
  {
    title: "Pre-market Entry",
    content: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
    top: "top-[56px]",
    contentTop: "top-[84px]",
    lineTop: "top-[133px]",
    titleColor: "text-[#00338D]",
    lineColor: "bg-[#00338D]"
  },
  {
    title: "Market Entry",
    content: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
    top: "top-[166px]",
    contentTop: "top-[192px]",
    lineTop: "top-[241px]",
    titleColor: "text-black",
    lineColor: "bg-[#BABABA]"
  },
  {
    title: "Operations",
    content: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
    top: "top-[276px]",
    contentTop: "top-[302px]",
    lineTop: "top-[353px]",
    titleColor: "text-black",
    lineColor: "bg-[#BABABA]"
  },
  {
    title: "Growth & Expansion",
    content: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
    top: "top-[390px]",
    contentTop: "top-[412px]",
    lineTop: "top-[464px]",
    titleColor: "text-black",
    lineColor: "bg-[#BABABA]"
  }
];

export default function Insights() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-white box-border"
      style={{ height: "calc(600px * var(--slider-scale, 1))" }}
    >
      {/* 1920px Base Container with Scaling */}
      <div 
        className="absolute left-1/2 top-0 w-[1920px] h-full ml-[-960px] origin-top box-border"
        style={{ transform: "scale(var(--slider-scale, 1))" }}
      >
        
        {/* Left Block: INSPIRATION & INSIGHTS */}
        <div className="absolute w-[224px] h-[218px] top-[55px] left-[90px] bg-[#EEEEEE] rounded-[20px] flex items-end p-[30px] box-border">
          <div className="font-poppins font-semibold text-[24px] leading-none text-black uppercase">
            INSPIRATION & INSIGHTS
          </div>
        </div>

        {/* Middle Part: List Items */}
        {items.map((item, idx) => (
          <div key={idx}>
            <div className={`absolute ${item.top} left-[384px] w-[567px] font-poppins font-semibold text-[16px] ${item.titleColor}`}>
              {item.title}
            </div>
            <div className={`absolute ${item.contentTop} left-[384px] w-[567px] font-poppins font-normal text-[14px] leading-[1.2] text-[#333333]`}>
              {item.content}
            </div>
            <div 
              className={`absolute ${item.lineTop} w-[567px] h-[2px] ${item.lineColor}`}
              style={{ left: idx === 1 || idx === 3 ? "382px" : "384px" }}
            />
          </div>
        ))}

        {/* Right Part: Image Gallery */}
        
        {/* Image 1: Wide (Pre-Market) */}
        <div className="absolute w-[374px] h-[498px] top-[62px] left-[1118px] rounded-[20px] overflow-hidden">
          <Image src="/assets/building.png" alt="Pre-Market" fill style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0C1B36CA] flex flex-col justify-end p-[40px_35px] box-border">
            <div className="font-poppins font-semibold text-[20px] text-white mb-[8px]">Pre-Market</div>
            <div className="font-poppins font-normal text-[16px] leading-[1.3] text-white">
              Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets
            </div>
          </div>
        </div>

        {/* Image 2: Narrow (Operations - Vertical) */}
        <div className="absolute w-[138px] h-[498px] top-[62px] left-[1524px] rounded-[20px] overflow-hidden">
          <Image src="/assets/building.png" alt="Operations" fill style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0C1B36CA] flex items-center justify-end pb-[100px] box-border">
             <div className="font-poppins font-semibold text-[20px] text-white -rotate-90 whitespace-nowrap origin-center">
                Operations
             </div>
          </div>
        </div>

        {/* Image 3: Narrow (Growth & Expansion - Vertical) */}
        <div className="absolute w-[138px] h-[498px] top-[62px] left-[1694px] rounded-[20px] overflow-hidden">
          <Image src="/assets/building.png" alt="Growth & Expansion" fill style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0C1B36CA] flex items-center justify-end pb-[130px] box-border">
             <div className="font-poppins font-semibold text-[20px] text-white -rotate-90 whitespace-nowrap origin-center">
                Growth & Expansion
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
