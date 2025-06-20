import Hero from "../components/Hero";
import Project from "../components/Projects";
import Service from "../components/Service";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Hero/>
      <Project/>
      <Service/>
      <Pricing/>
      <Contact/>
      <div className="border border-[#303030]"></div>
      <Footer/>
    </>
  );
}

export default Home;

