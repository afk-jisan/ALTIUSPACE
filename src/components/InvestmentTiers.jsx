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
        <div className="shadow-custom-blue font-kameron inline-block px-12 py-2 rounded-full bg-gradient-to-b from-[#A8B9EE] to-[#6C88E3] text-[rgba(255,255,255,0.6)] backdrop-blur-[32px] font-bold text-2xl sm:text-[40px] tracking-wider">
          INVESTMENT TIERS
        </div>
      </div>
      <p className="mx-auto text-[18px] sm:text-[20px] mb-12">
        Choose the engagement model that aligns with your growth stage and ambitions.<br />
        Every investment is designed to deliver measurable ROI within 90 days.
      </p>

      <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-5 nav:gap-10 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="relative mt-8 xsm:mt-0 rounded-2xl h-fit p-6 shadow-[0px_8px_32px_rgba(88,120,223,1)] bg-[linear-gradient(-27deg,_#1A91EB,_#8167FE)] border border-white/10 backdrop-blur-2xl text-left"
            style={{
              boxShadow: "0px 0px 30px rgba(135, 100, 255, 0.4)",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            {plan.tag && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,_rgba(135,100,255,0.94)_0%,_rgba(25,145,235,0.94)_100%)] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-3 py-3 rounded-full text-[14px]">
                {plan.tag}
              </div>
            )}

            <h3 className="text-2xl font-bold mb-1 pt-2 text-center">{plan.title}</h3>
            <p className="text-[36px] font-extrabold mb-1 text-center">{plan.price}</p>
            <p className="text-[16px] text-white mb-8 text-center">{plan.duration}</p>

            <p className="text-[16px] mb-5">{plan.description}</p>

            <ul className="mb-12 space-y-2 text-[16px] text-white">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img src="./tick.svg" className="pt-1" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {expandedIndex === idx && (
              <div className="text-white text-[16px] space-y-4 mb-8">
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

            <div className="flex flex-col gap-2">
              <button className="w-full cursor-pointer bg-[linear-gradient(135deg,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0.6)_70.71%)] text-black font-semibold py-2 rounded-lg backdrop-blur-md filter  shadow-[0px_8px_32px_rgba(31,38,135,0.37)] hover:bg-gray-100 transition">
                Get Started
              </button>
              <button
                onClick={() => toggleDetails(idx)}
                className="mt-2 cursor-pointer font-semibold text-[16px] text-[#FFE8E8] hover:text-white"
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
