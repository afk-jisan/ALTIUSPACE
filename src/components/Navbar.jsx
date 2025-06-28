import { Link } from 'react-scroll';
import SideMenu from './SideMenu';
import { useState } from 'react';
import useBreakpoint from "../hooks/useBreakpoint";
import SVGfilter from './SvgFilter';
function Navbar( { theme }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { isXsm } = useBreakpoint();

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen)
  }
  // console.log(theme);
  return (
    <>
    { isSideNavOpen && <SideMenu toggleSideNav={toggleSideNav} theme={theme} /> }
    
    <nav className="navbar-container  xsm:fixed xsm:left-1/2  -translate-x-0 xsm:-translate-x-1/2 w-full xsm:w-[80vw] h-[82px] z-50 rounded-full px-5 lgc:px-10 flex items-center justify-between pointer-events-none overflow-hidden border border-solid border-white/10">

      { isXsm && <SVGfilter /> }

      {/* Main Content */}
      <div className="relative z-10 w-full flex justify-between gap-5 items-center pointer-events-auto bg-transparent">
        {/* Logo/Brand */}
        <Link to="hero" duration={1000} smooth={true} className="xsm:mb-1 cursor-pointer">
          <span className="text-xl xsm:text-2xl lgc:text-3xl font-extrabold bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent">ALTIUSPACE</span>
        </Link>

        {/* Navigation Links */}
        <div className={`space-x-5 lg:space-x-8 xl:space-x-20  text-lg hidden lgc:flex justify-around ${theme === "light" ? "text-black" : "text-white" }`}>
         
            <Link to="service" duration={1000} smooth={true} className="hover:text-blue-400 font-light transition-colors duration-200 cursor-pointer">Services</Link>
          
            <Link to="projects" smooth={true} className="hover:text-blue-400 font-light transition-colors duration-200 cursor-pointer">Projects</Link>
          
            <Link to="pricing" duration={1000} smooth={true} className="hover:text-blue-400 font-light transition-colors duration-200 cursor-pointer">Pricing</Link>
          
            <Link to="contact" duration={1000} smooth={true} className="hover:text-blue-400 font-light transition-colors duration-200 cursor-pointer">Contact</Link>
        </div>
        <div className='flex flex-row gap-5'>
        

        <Link to="contact" smooth={true} duration={1000} className="hidden sm:block px-8 py-4 rounded-[26px] text-white font-medium bg-gradient-to-tl from-[#1991EB] to-[#8764FF] shadow-inner transform hover:scale-105 transition-transform duration-200 cursor-pointer">
          Get Started
        </Link>
        <img className={`lgc:hidden flex cursor-pointer text-blue-400 w-[46px] ${theme === "light" ? "invert" : ""}`} src='./iconsax-align-left-2.svg' onClick={toggleSideNav}></img>
      </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
