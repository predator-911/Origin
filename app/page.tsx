import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import AILab from "@/components/sections/AILab";
import Projects from "@/components/sections/Projects";
import ExperienceTable from "@/components/sections/ExperienceTable";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import CertificationVault from "@/components/sections/CertificationVault";
import GithubDashboard from "@/components/sections/GithubDashboard";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <AILab />
        <Projects />
        <ExperienceTable />
        <Skills />
        <Achievements />
        <CertificationVault />
        <GithubDashboard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
