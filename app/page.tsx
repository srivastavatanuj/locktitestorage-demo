import { HeroSection } from "@/components/hero-section";
import { WelcomeSection } from "@/components/welcome-section";
import { FeaturesSection } from "@/components/features-section";
import { InfoSection } from "@/components/info-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
    </div>
  );
}
