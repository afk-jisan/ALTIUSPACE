import { useState } from "react";
import { plans } from "../data/plan";

export default function InvestmentTiers() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (idx) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="px-4 bg-white text-center py-20 sm:py-35">
      <div className="mb-6 text-lg font-medium tracking-wide uppercase">
        <div className="shadow-[0px_4px_4px_#00000040] font-kameron inline-block px-12 py-3 mb-3 bg-[linear-gradient(271.94deg,_rgba(101,78,177,0.74)_58.66%,_rgba(187,164,215,0.444)_117.97%)] rounded-[26px] text-[rgba(255,255,255,0.6)] backdrop-blur-[32px] font-bold text-2xl sm:text-[40px] tracking-wider">
          INVESTMENT TIERS
        </div>
      </div>
      <p className="mx-auto font-[400] text-[18px] sm:text-[20px] text-[rgba(0,0,0,0.67)] mb-15">
        Choose the engagement model that aligns with your growth stage and ambitions.<br />
        Every investment is designed to deliver measurable ROI within 90 days.
      </p>

      <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-5 nav:gap-10 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="relative mt-8 xsm:mt-0 rounded-2xl h-fit p-6 shadow-[0px_8px_32px_rgba(88,120,223,1)] bg-white border text-black  border-white/10 backdrop-blur-2xl text-left"
            style={{
              boxShadow: "0px 0px 30px rgba(135, 100, 255, 0.4)",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            {plan.tag && (
              <div className="absolute w-[125px] -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#9F8DFC] to-[#56A6EC] text-white px-5 py-3 rounded-full text-[14px]">
                {plan.tag}
              </div>
            )}

            <h3 className="text-2xl font-bold mb-1 pt-2 text-black text-center">{plan.title}</h3>
            <p className="text-[36px] font-extrabold text-[rgba(41,150,11,1)] mb-1 text-center">{plan.price}</p>
            <p className="text-[16px] text-black mb-8 text-center">{plan.duration}</p>

            <p className="text-[16px] mb-5 text-black">{plan.description}</p>

            <ul className="mb-12 space-y-2 text-[16px]">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-black">
                  <img src="./tick.svg" className="pt-1" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {expandedIndex === idx && (
              <div className="text-black text-[16px] space-y-4 mb-8">
                <div>
                  <h4 className="text-[16px] mx-auto text-black mb-2 w-fit px-3 py-1 bg-[linear-gradient(-82deg,_#A9CAF2,_#CBD5F7)] border border-[rgba(148,175,209,1)] rounded-[16px] shadow-[0px_8px_32px_rgba(31,38,135,0.37)]">LMS Specific Features</h4>
                  <ul className="space-y-2 pt-3">
                    {plan.lmsFeatures.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <img src="./tick.svg" className="pt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mt-12 text-[16px] mx-auto text-black mb-2 w-fit px-5 py-1 bg-[linear-gradient(-82deg,_#A9CAF2,_#CBD5F7)] border border-[rgba(148,175,209,1)] backdrop-blur-sm shadow-[0px_8px_32px_rgba(31,38,135,0.37)] rounded-[16px]">Add-ons</h4>
                  <ul className="space-y-2 pt-3">
                    {plan.addOns.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <img src="./tick.svg" className="pt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2 ">
              
              <button className="w-full py-4 relative cursor-pointer bg-[linear-gradient(-78deg,_rgba(187,164,215,0.6)_0%,_rgba(242,242,242,0.8)_100%)]  text-black rounded-[12px] hover:bg-gray-100 transition">
                
                <div className="absolute bg-[rgba(31,38,135,0.37)] inset-0 pointer-events-none z-0 blur-[24px] rounded-[12px] "></div>
                <span className="relative z-10  font-semibold">Get Started</span>
              </button>
              <button
                onClick={() => toggleDetails(idx)}
                className="mt-2 cursor-pointer font-semibold text-[16px] text-black hover:text-gray-500"
              >
                {expandedIndex === idx ? "Hide Details" : "View Details"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
