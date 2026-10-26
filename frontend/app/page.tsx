import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import Architecture from "@/components/sections/Architecture";
import TechStack from "@/components/sections/TechStack";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Expertise />
      <Architecture />
      <TechStack />
      <Stats />
      <About />
      <Experience />
      <Achievements />
      <Services />
      <Footer />
    </main>
  );
}