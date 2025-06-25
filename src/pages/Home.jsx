import { useState } from "react";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Project from "../components/Projects";
import Service from "../components/Service";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import InvestmentTiers from "../components/InvestmentTiers";
function Home() {
  const sectionThemes = {
    hero: "dark",
    project: "light",
    service: "dark",
    pricing: "light",
    contact: "dark",

  };
  const [activeSection, setActiveSection] = useState("hero");
  return (
    <>
      <div className="bg-transparent py-5 sm:px-8 md:px-30 lgc:px-20 xl:px-50 xsm:sticky top-0 z-100 px-5">
        <Navbar theme={sectionThemes[activeSection]}/> 
      </div>
      <Section id="hero" setActiveSection={setActiveSection}>
        <Hero />
      </Section>
      <Section id="project" setActiveSection={setActiveSection}>
        <Project />
      </Section>
      <Section id="service" setActiveSection={setActiveSection}>
        <Service />
      </Section>
      <Section id="pricing" setActiveSection={setActiveSection}>
        <Pricing />
      </Section>
      <Section id="contact" setActiveSection={setActiveSection}>
        <Contact />
      </Section>
      
      <div className="border border-[#303030]"></div>
      <Footer/>
    </>
  );
}

export default Home;

