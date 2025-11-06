import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AppFeaturesSection from "./components/AppFeaturesSection";
import DashboardSection from "./components/DashboardSection";
import DasaSection from "./components/DasaSection";
import PricingSection from "./components/PricingSection";
import FoundersSection from "./components/FoundersSection";
import EndSection from "./components/EndSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AppFeaturesSection />
        <DashboardSection />
        <DasaSection />
        <PricingSection />
        <FoundersSection />
        <EndSection />
      </main>
      <Footer />
    </div>
  );
}
