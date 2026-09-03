// import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Architecture from "@/components/sections/Architecture";
import TechStack from "@/components/sections/TechStack";
import Stats from "@/components/sections/Stats";
import Lab from "@/components/sections/Lab";
import ProjectsLibrary from "@/components/sections/ProjectsLibrary";
import CaseStudies from "@/components/sections/CaseStudies";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <Navbar /> */}

      <Hero />
      <Expertise />
      <FeaturedProjects />
      <Architecture />
      <TechStack />
      <Stats />
      <Lab />
      <ProjectsLibrary />
      <CaseStudies />
      <About />
      <Experience />
      <Achievements />
      <Services />
      <Contact />

      <Footer />
    </main>
  );
}