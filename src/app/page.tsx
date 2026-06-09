import HookSection from "@/components/sections/HookSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhyGroupteaSection from "@/components/sections/WhyGroupteaSection";
import TargetSection from "@/components/sections/TargetSection";
import RSVPSection from "@/components/sections/RSVPSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HookSection />
      <ProblemSection />
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <HowItWorksSection />
      <WhyGroupteaSection />
      <TargetSection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
