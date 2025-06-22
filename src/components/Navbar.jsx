import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar-container fixed top-6 left-1/2 -translate-x-1/2 nav:w-[1049px] w-[90vw] h-[82px] z-50 rounded-full px-5 lgc:px-10 py-2 flex items-center justify-between pointer-events-none overflow-hidden">

      {/* SVG Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="blotty-filter">
          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="2" seed="0" result="turbulence">
            <animate attributeName="seed" from="0" to="100" dur="1s" repeatCount="" />
          </feTurbulence>
          <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="12" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Transparent Overlay Container for Blotting */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <foreignObject width="100%" height="100%">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="w-full h-full rounded-full"
              style={{ filter: 'url(#blotty-filter)', backdropFilter: 'blur(3.5px)', backgroundColor: 'transparent', WebkitBackdropFilter: 'blur(3.5px)', maskImage: 'linear-gradient(white, white)', WebkitMaskImage: 'linear-gradient(white, white)' }}
            ></div>
          </foreignObject>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex justify-between gap-5 items-center pointer-events-auto bg-transparent">
        {/* Logo/Brand */}
        <Link to="hero" duration={1000} smooth={true} className="mb-1 cursor-pointer">
          <span className="text-3xl lgc:text-3xl font-extrabold bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent">ALTIUSPACE</span>
        </Link>

        {/* Navigation Links */}
        <ul className="space-x-6 text-white text-lg hidden lgc:flex">
          <li>
            <Link to="service" duration={1000} smooth={true} className="hover:text-blue-400 font-light transition-colors duration-200 cursor-pointer">Services</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} className="hover:text-blue-400 font-light transition-colors duration-200 cursor-pointer">Projects</Link>
          </li>
          <li>
            <Link to="pricing" duration={1000} smooth={true} className="hover:text-blue-400 font-light transition-colors duration-200 cursor-pointer">Pricing</Link>
          </li>
          <li>
            <Link to="contact" duration={1000} smooth={true} className="hover:text-blue-400 font-light transition-colors duration-200 cursor-pointer">Contact</Link>
          </li>
        </ul>

        <Link to="contact" smooth={true} duration={1000} className="px-8 py-4 rounded-[26px] text-white font-medium bg-gradient-to-tl from-[#1991EB] to-[#8764FF] shadow-inner transform hover:scale-105 transition-transform duration-200 cursor-pointer">
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
