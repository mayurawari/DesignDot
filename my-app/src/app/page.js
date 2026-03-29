import HeroSlider from "@/components/HeroSlider";
import HotTopics from "@/components/HotTopics";
import AboutFirm from "@/components/AboutFirm";
import Insights from "@/components/Insights";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSlider />
      <HotTopics />
      <AboutFirm />
      <Insights />
      {/* Additional sections can go here */}
    </div>
  );
}
