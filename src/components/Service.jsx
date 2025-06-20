const Service = () => {
    return (
        <div id='service' className="border-5 bg-[#1A1A1A] rounded-[73px] py-20">
            <p className="px-20 text-[48px] text-center font-bold bg-gradient-to-r from-[#9F83FF] to-[#9F83FF] bg-clip-text text-transparent">We craft brand <span className="font-pattaya font-normal">identities</span> that don't just speak they <span className="font-pattaya font-normal">captivate.</span></p>
            
            {/* part - 1 */}
            <div className="items-center gap-20 flex flex-row py-20 pl-20 pr-5">
                <div>
                    <div className="relative w-[200px] h-[200px]">
                        <img src="" className="absolute top-0 left-0 w-[200px] h-[200px] rounded-lg bg-[#E38181]"></img>
                        <img src="" className="absolute top-[40%] left-[40%] w-[200px] h-[200px] rounded-lg bg-[#E0EC60]"></img>
                    </div>
                </div>
                <div className="px-10">
                    <p className="font-bold text-[#E3E3E3] text-[48px]">Web <span className="font-pattaya font-normal">Development</span></p>
                    <p className="text-[#E3E3E3] text-[18px]">Modern Frontend Interfaces, Scalable Backend Systems, End-to-End Full Stack Solutions, Native & Cross-Platform Mobile Apps, Tailored Web Platforms, and Seamless API Integrations.</p>
                </div>
            </div>

            {/* part - 2 */}
            <div className="items-center gap-20 flex flex-row py-20 pl-20 pr-5">
                <div>
                    <div className="relative w-[200px] h-[200px]">
                        <img src="" className="absolute top-0 left-0 w-[200px] h-[200px] rounded-lg bg-[#B781E3]"></img>
                        <img src="" className="absolute top-[40%] left-[40%] w-[200px] h-[200px] rounded-lg bg-[#7EEC60]"></img>
                    </div>
                </div>
                <div className="px-10">
                    <p className="font-bold text-[#E3E3E3] text-[48px]">UI/UX <span className="font-pattaya font-normal">Design</span></p>
                    <p className="text-[#E3E3E3] text-[18px]">Crafting seamless user journeys through product design, app and web experiences, interactive dashboards, and prototypes that bring ideas to life.</p>
                </div>
            </div>


            {/* part - 3 */}
            <div className="items-center gap-20 flex flex-row py-20 pl-20 pr-5">
                <div>
                    <div className="relative w-[200px] h-[200px]">
                        <img src="" className="absolute top-0 left-0 w-[200px] h-[200px] rounded-lg bg-[#CEE381]"></img>
                        <img src="" className="absolute top-[40%] left-[40%] w-[200px] h-[200px] rounded-lg bg-[#BF60EC]"></img>
                    </div>
                </div>
                <div className="px-10">
                    <p className="font-bold text-[#E3E3E3] text-[48px]">Logo & <span className="font-pattaya font-normal">Branding</span></p>
                    <p className="text-[#E3E3E3] text-[18px]">We create logos and full branding packages, including custom and 3D logos, visual identities, brand strategies, social media branding, and brand guidelines.</p>
                </div>
            </div>

        </div>
    )
}

export default Service;
/* */