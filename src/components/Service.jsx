const Service = () => {  
    return (
        <div id='service' className="bg-gradient-to-b from-white to-[#EBE9E9]">
        <div className="bg-[#1A1A1A] rounded-[73px]">
        <div className="bg-[#1A1A1A] rounded-[30px] sm:rounded-[73px] py-30 smc:px-20 custom:w-[1200px] mx-auto flex flex-col gap-10 sm:gap-0">
            <p className="px-5 md:px-30 text-[38px] sm:text-[48px] text-center font-bold bg-gradient-to-r from-[#9F83FF] to-[#9F83FF] bg-clip-text text-transparent leading-15 md:leading-18 mb-5">We craft brand <span className="font-pattaya font-normal">identities</span> that don't just speak they <span className="font-pattaya font-normal">captivate.</span></p>
            
            {/* part - 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <div className="">
                    <img src="./webdev.svg" className="w-fit sm:w-[608px] sm:h-[534px] h-fit"></img>
                </div>
                <div className="pl-10">
                    <p className="font-bold text-[#E3E3E3] text-[48px] mb-3 leading-12">Web <span className="font-pattaya font-normal">Development</span></p>
                    <p className="text-[#E3E3E3] text-[18px] pr-3">Modern Frontend Interfaces, Scalable Backend Systems, End-to-End Full Stack Solutions, Native & Cross-Platform Mobile Apps, Tailored Web Platforms, and Seamless API Integrations.</p>
                </div>
            </div>

            {/* part - 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <div className="">
                    <img src="./uiuxdesign.svg" className="w-fit sm:scale-120 sm:w-[777px] sm:h-[622px] h-fit"></img>
                </div>
                <div className="pl-10">
                    <p className="font-bold text-[#E3E3E3] text-[48px] mb-3 leading-12">UI/UX <span className="font-pattaya font-normal">Design</span></p>
                    <p className="text-[#E3E3E3] text-[18px] pr-3">Crafting seamless user journeys through product design, app and web experiences, interactive dashboards, and prototypes that bring ideas to life.</p>
                </div>
            </div>

            {/* part - 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <div className="">
                    <img src="./logonbranding.svg" className="w-fit sm:w-[608px] sm:h-[534px] h-fit"></img>
                </div>
                <div className="pl-10 pb-15">
                    <p className="font-bold text-[#E3E3E3] text-[48px] mb-3 leading-12">Logo & <span className="font-pattaya font-normal">Branding</span></p>
                    <p className="text-[#E3E3E3] text-[18px] pr-3">We create logos and full branding packages, including custom and 3D logos, visual identities, brand strategies, social media branding, and brand guidelines.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Service;
/* */