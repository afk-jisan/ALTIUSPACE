import React from "react";
import { NavLink } from "react-router-dom";
import Form from "../components/Form";
function Contact() {
  return (
    <div id='contact' className="flex flex-col justify-center items-center bg-[rgba(26,26,26,1)] rounded-t-[73px] p-15 pt-30">
      <div className="">
        <h1 className="text-[30px] font-[700px] text-white text-center pb-5">Ready to Transform Your SaaS?</h1>
        <p className="text-[rgba(218,220,224,1)] text-[20px] text-center mb-10">Join the elite group of SaaS founders who have unlocked exponential growth <br/> with our precision-engineered strategies.</p>
        <div className="flex flex-row mx-auto justify-center items-center gap-2 bg-gradient-to-tl from-[#1991EB] to-[#8764FF] h-[76px] w-[260px] rounded-[16px] cursor-pointer transform hover:scale-105 transition-transform duration-200">
          <NavLink to="/projects" className="text-white font-semibold">Schedule a Session</NavLink>
          <img src="./arrowFrame.svg"></img>
        </div>
      </div>

      {/* 2nd half */}
      <div className="grid sm:grid-cols-2 w-full h-full grid-cols-1 mt-20">
        {/* Grid - 1 */}
        <div className="pt-20">
          <p className="bg-[linear-gradient(to_right,#1991EB_0%,#278BEE_0%,#278BEE_7%,#F1F3F4_100%,#84A7ED_100%)] bg-clip-text text-transparent text-[48px] font-bold leading-[0.8]">Let's Craft</p>
          <p className="bg-[linear-gradient(to_right,#1991EB_0%,#278BEE_0%,#278BEE_7%,#F1F3F4_100%,#84A7ED_100%)] bg-clip-text text-transparent text-[48px] font-bold">Your Success</p>
          <p className="text-[rgba(154,154,154,1)] text-[20px] font-normal">Every great SaaS transformation starts with a conversation. Let's discuss how we can architect your path to market leadership.</p>

          <div className="flex flex-row gap-2 items-center mt-12 ml-5 mb-2">
            <div className="h-[48px] w-[48px] rounded-full border-1 border-[#3B3B3B] bg-[#262626] flex justify-center items-center shadow-lg">
              <img className="h-[20px] w-[20px] pointer-events-none" src="./Email.svg"></img>
            </div>
            <span className="text-white text-[18px]">contact@altiuspace</span>
          </div>
          <div className="flex flex-row gap-2 items-center ml-5 mb-2">
            <div className="h-[48px] w-[48px] rounded-full border-1 border-[#3B3B3B] bg-[#262626] flex justify-center items-center shadow-lg">
              <img className="h-[20px] w-[20px] pointer-events-none" src="./phone.svg"></img>
            </div>
            <span className="text-white text-[18px]">+88 017 030 28 626</span>
          </div>
          <div className="flex flex-row gap-2 items-center ml-5">
            <div className="h-[48px] w-[48px] rounded-full border-1 border-[#3B3B3B] bg-[#262626] flex justify-center items-center shadow-lg">
              <img className="h-[20px] w-[20px] pointer-events-none" src="./linkedin.svg"></img>
            </div>
            <span className="text-white text-[18px]">@altiuspace</span>
          </div>

        </div>
        {/* Grid - 2 */}
        <div className="">
          <Form/>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
