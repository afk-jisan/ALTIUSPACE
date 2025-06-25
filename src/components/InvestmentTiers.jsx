const plans = [
  {
    title: "Basic Plan",
    price: "$15,000",
    duration: "3-4 weeks",
    description: "Perfect for SaaS startups ready to validate and launch their GTM strategy.",
    features: [
      "Market analysis & competitive research",
      "Customer persona development",
      "Go-to-market strategy document",
      "Sales process framework",
      "2 strategy sessions",
      "30-day email support",
    ],
  },
  {
    title: "Standard Plan",
    price: "$35,000",
    duration: "8-9 weeks",
    description: "Comprehensive engagement for scaling SaaS businesses seeking rapid growth.",
    features: [
      "Complete GTM strategy overhaul",
      "Sales engineering implementation",
      "Revenue optimization audit",
      "Technical demo framework",
      "Team training & playbooks",
      "90-day implementation support",
      "Monthly strategy reviews",
    ],
    tag: "Most Popular",
  },
  {
    title: "Elite Plan",
    price: "Custom",
    duration: "16-18 weeks",
    description: "Strategic partnership for enterprise SaaS requiring ongoing optimization.",
    features: [
      "Dedicated strategic advisor",
      "Ongoing sales engineering support",
      "Quarterly business reviews",
      "Custom integration development",
      "Executive team training",
      "Unlimited consultation",
      "Success guarantee",
    ],
  },
];

export default function InvestmentTiers() {
  return (
    <section className="px-4 bg-white text-center py-20 sm:py-35">
      <div className="mb-6 text-lg font-medium tracking-wide uppercase">
        <div className="shadow-custom-blue font-kameron inline-block px-12 py-2 rounded-full bg-gradient-to-b from-[#A8B9EE] to-[#6C88E3] text-[rgba(255,255,255,0.6)] backdrop-blur-[32px] font-bold text-2xl sm:text-[40px] tracking-wider">
          INVESTMENT TIERS
        </div>
      </div>
      <p className="mx-auto text-[18px] sm:text-[20px] mb-12">
        Choose the engagement model that aligns with your growth stage and ambitions.<br/>
        Every investment is designed to deliver measurable ROI within 90 days.
      </p>

      <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 nav:px-20 gap-10 xsm:gap-4 smc:gap-6  max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl p-6 shadow-[0px_8px_32px_rgba(88,120,223,1)] bg-[linear-gradient(-27deg,_#1A91EB,_#8167FE)] border border-white/10 backdrop-blur-2xl text-left"
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
            <p className="text-[16px] text-white mb-4 text-center">{plan.duration}</p>

            <p className="text-[16px] mb-2">{plan.description}</p>

            <ul className="mb-6 space-y-2 text-[16px] text-white">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img src="./tick.svg" className="pt-1"></img>                  
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              <button className="w-full bg-[linear-gradient(135deg,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0.6)_70.71%)] text-black font-semibold py-2 rounded-lg shadow hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="text-sm text-[#FFE8E8] hover:text-white">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
