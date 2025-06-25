import Hero from "../components/Hero";
import Project from "../components/Projects";
import Service from "../components/Service";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import InvestmentTiers from "../components/InvestmentTiers";
function Home() {
  return (
    <>
      <div className='bg-transparent py-5 sm:px-8 md:px-30 lgc:px-20 xl:px-50 sticky top-0 z-100 px-5'>
        <Navbar/> 
      </div>
      <Hero/>
      <Project/>
      <Service/>
      <Pricing />
      <Contact/>
      <div className="border border-[#303030]"></div>
      <Footer/>
    </>
  );
}

export default Home;

