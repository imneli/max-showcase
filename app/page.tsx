import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AppFeaturesSection from "./components/AppFeaturesSection";
import DashboardSection from "./components/DashboardSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AppFeaturesSection />
        <DashboardSection />
      </main>
      <Footer />
    </div>
  );
}
