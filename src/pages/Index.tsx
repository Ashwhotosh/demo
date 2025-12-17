
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ExperienceSection from "@/components/ExperienceSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isBusinessProfile, setIsBusinessProfile] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (checked: boolean) => {
    console.log("Toggle clicked, checked:", checked);
    setIsBusinessProfile(checked);
    if (checked) {
      console.log("Navigating to business profile");
      navigate("/business-profile");
    }
  };

  return (
    <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
      {/* Toggle Switch - Styled for modern look */}
      <div className="fixed top-4 left-4 z-[60] flex items-center gap-3 bg-card/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 shadow-lg hover:border-primary/30 transition-colors">
        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Tech</span>
        <Switch
          checked={isBusinessProfile}
          onCheckedChange={handleToggle}
          aria-label="Switch between tech and business profile"
          className="data-[state=checked]:bg-primary"
        />
        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Business</span>
      </div>

      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="education">
        <EducationSection />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
