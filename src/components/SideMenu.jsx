import { useEffect } from "react";
import { Link } from 'react-scroll';
import useBreakpoint from "../hooks/useBreakpoint";

const SideMenu = ({ toggleSideNav, theme }) => {

  const { isLgc } = useBreakpoint();

  // Automatically close the side nav when screen is lgc (≥950px)
  useEffect(() => {
    if (isLgc) {
      toggleSideNav();
      console.log('SideNav closed due to reaching ≥950px');
    }
  }, [isLgc]);

  return (
    <>
    {/* Full screen overlay (using this to close the sidenav when clicked from anywhere but sidenav) */}
    <div className="fixed inset-0 backdrop-blur-[3px] z-40" onClick={toggleSideNav}></div>

    <div className="lgc:hidden flex bg-transparent  h-full w-64 fixed right-0 top-0 z-50 p-8  flex-col justify-between mt-30">
     <div className=" h-full relative">
      <img
        src="null"
        alt=""
        className="pointer-events-none absolute w-[350px] h-[280px] blur-[35px] top-[0px] right-[-50px] -translate-y-[10%] rounded-full bg-[linear-gradient(-135deg,#1991EB,#8764FF)] opacity-40"
      />
      
      {/* Top */}
      <div className={`text-[20px] flex flex-col justify-end gap-4 p-4 font-medium ${theme === "light" ? "text-black" : "text-white" }`}>
        <Link to="service" duration={1000} smooth={true} onClick={toggleSideNav} className="cursor-pointer self-end">Services</Link>
        <Link to="projects" smooth={true} onClick={toggleSideNav} className="cursor-pointer self-end">Projects</Link>
        <Link to="pricing" duration={1000} onClick={toggleSideNav} smooth={true} className=" cursor-pointer self-end">Pricing</Link>
        <Link to="contact" duration={1000} onClick={toggleSideNav} smooth={true} className="cursor-pointer self-end">Contact</Link>
      </div>

      <div className="flex flex-row justify-end py-3 pr-3 text-[18px]">
        <button className="text-red-600 text-3xl border-2 border-[#3A7CF3] rounded-[5px]" onClick={toggleSideNav}>❌</button>
      </div>
      </div>

      
    </div>
    </>
  );
};

export default SideMenu;