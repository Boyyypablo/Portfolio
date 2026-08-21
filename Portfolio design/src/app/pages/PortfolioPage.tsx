import { useEffect } from "react";
import { useLocation } from "react-router";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { CtaBanner } from "../components/CtaBanner";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function PortfolioPage() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      requestAnimationFrame(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.state]);

  return (
    <div className="portfolio-page min-h-screen bg-gradient-to-b from-[#FBF7F4] to-[#E5DED2]">
      <Navbar />
      <Hero />
      <CtaBanner />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
