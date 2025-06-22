import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from 'react-scroll';
function Hero() {
  return (
    <div id="hero" className=" bg-[#1A1A1A] pl-5 pr-5 sm:pl-0 sm:h-screen relative overflow-hidden mt-15">

      

      <img
        src=""
        alt=""
        className="pointer-events-none absolute w-[384px] h-[384px] blur-[35px] top-[60px] -translate-x-1/2 rounded-full bg-[linear-gradient(135deg,#1991EB,#8764FF)] opacity-30 "
      />

      <img
        src=""
        alt=""
        className="pointer-events-none absolute w-[256px] h-[256px]  blur-[35px] top-[100px] right-0 -translate-x-[-50%] rounded-full bg-[linear-gradient(-135deg,#1991EB,#8764FF)] opacity-30"
      />

      <img
        src=""
        alt=""
        className="pointer-events-none absolute w-[300px] h-[300px] blur-[50px] top-[55%] left-1/2 -translate-x-[100%]  rounded-full bg-[linear-gradient(-135deg,#1991EB,#8764FF)] opacity-30 -translate-y-1/2"
      />
      
      <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-8 mb-10 text-[14px] font-medium px-4 py-3 text-[#AAABB5] rounded-full border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.37)] bg-gradient-to-b from-[rgba(47,49,69,1)] to-[rgba(40,43,74,1)]">
          Pioneers in SaaS Product Innovation
        </h1>
        <p className="text-white text-[72px] font-bold leading-18">We Create SaaS
          <br/><span className="bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent text-[72px] font-bold">That Sells Itself</span>
        </p>
        <p className="mt-10 text-[rgba(101,101,101,100)] text-[18px] font-normal">We partner with visionary SaaS founders to architect go-to-market strategies<br/>that scale. From technical sales engineering to revenue acceleration.</p>
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap gap-3 my-20"> 
        
          <Link to="contact" smooth={true} duration={3000} className="text-white font-semibold flex flex-row justify-center items-center gap-2 bg-gradient-to-tl from-[#1991EB] to-[#8764FF] h-[76px] w-[260px] rounded-[16px] cursor-pointer transform hover:scale-105 transition-transform duration-200">Launch My SaaS<img src="./arrowFrame.svg"></img></Link>

       
        <NavLink to="/projects" smooth={true} className="font-medium text-white h-[76px] w-[203px] flex justify-center items-center bg-gradient-to-b from-[rgba(47,49,69,1)] to-[rgba(40,43,74,1)] rounded-[16px] transform hover:scale-105 transition-transform duration-200"><span>View Our Projects</span></NavLink>
      </div>
      
    </div>
    </div>
  );
}

export default Hero;

/*
<div className="flex justify-center items-center bg-[#1A1A1A]">
  <h1 className="text-[14px] font-medium  bg-gradient-to-br from-[#6A70A1] to-[#27293B]">Pioneers in SaaS Product Innovation</h1>
</div>


opacity-50 add in the blur
top-10 left-1/2 -translate-x-1/2

blurry img's are breaking responsiveness



<div className='bg-[#1A1A1A] py-5 sm:px-8 md:px-30 lgc:px-20 xl:px-50 border-2'>
        <Navbar/> 
      </div>
*/
