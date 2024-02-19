import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class='container mx-auto px-12 py-10'>
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
      </div>
      
    </main>
  );
}
