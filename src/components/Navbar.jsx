import React from 'react';
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-[rgba(47,49,69,1)] to-[rgba(40,43,74,1)] shadow-md rounded-[9999px] px-5 lgc:px-10 py-2 h-[82px] flex justify-between items-center">
      <div className="container flex flex-row justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="mb-1">
          <span className='text-3xl lgc:text-3xl font-extrabold bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent'>ALTIUSPACE</span>
        </Link>

        {/* Navigation Links */}
        <ul className=" space-x-6 text-white text-lg hidden lgc:flex">
          <li>
            <Link to="service" duration={3000} smooth={true} className="hover:text-blue-400 font-medium transition-colors duration-200">Services</Link>
          </li>
          <li>
            <Link to="projects" smooth={true}  className="hover:text-blue-400 font-medium transition-colors duration-200">Projects</Link>
          </li>
          <li>
            <Link to="pricing" duration={3000} smooth={true} className="hover:text-blue-400 font-medium transition-colors duration-200">Pricing</Link>
          </li>
          <li>
            <Link to="contact" duration={3000} smooth={true} className="hover:text-blue-400 font-medium transition-colors duration-200">Contact</Link>
          </li>
        </ul>


        <Link to="/" className="px-8 py-4 rounded-[26px] text-white font-medium bg-gradient-to-tl from-[#1991EB] to-[#8764FF] shadow-inner transform hover:scale-105 transition-transform duration-200">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;