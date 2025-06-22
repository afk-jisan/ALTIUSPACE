import SearchNFilters from "../components/SearchNFilters";
import CardModule from "../components/CardModule";
import { Link } from "react-router-dom";
const AllProjects = () => {
  return (
    <div className="bg-[#1A1A1A] py-20 w-[1200px] mx-auto">
      {/* part - 1 */}
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <p className="font-inter font-bold text-6xl leading-[60px] tracking-[-1.5px] text-center bg-clip-text text-transparent bg-gradient-to-br from-[#BDC1C6] to-[#F8F9FA] mb-8">
            Our Projects
          </p>
          <p className="text-white">
            Explore our portfolio of successful SaaS transformations. Each
            project represents innovation, technical excellence, and measurable
            business impact.
          </p>
          <div className="flex flex-row gap-8">
            <div className="flex flex-row  gap-2">
              <img src="./tick.svg"></img>
              <p className="text-white">6 Completed Projects</p>
            </div>
            <div className="flex flex-row  gap-2">
              <img src="./star.svg"></img>
              <p className="text-white">3 Featured</p>
            </div>
            <div className="flex flex-row  gap-2">
              <img src="./human.svg"></img>
              <p className="text-white">200K+ Users Impacted</p>
            </div>
          </div>
        </div>

        {/* Search & filters */}
        <div className="">
          <div>
            <SearchNFilters />
          </div>
        </div>
      </div>

      {/* part - 2 */}
      <div className=" ">
        <div className="flex flex-row gap-2 ml-10">
          <img src="./star.svg"></img>
          <p className="text-white">Featured Projects</p>
        </div>
        <div className="grid grid-cols-3 mb-10 justify-center items-start ml-10">
          <CardModule
            title="ZenFlow Analytics"
            category="Analytics"
            description="AI-powered data visualization platform that makes complex analytics simple and beautiful."
            stat1Value="400%"
            stat1Label="Growth"
            stat2Value="50K+"
            stat2Label="Users"
            stat3Value="4.9"
            stat3Label="Rating"
            heightClass="h-[532px]"
            imageHeightClass="h-32"
          ></CardModule>
          <CardModule
            title="FundTech Pro"
            category="Fintech"
            description="Investment platform that democratizes wealth building with intelligent portfolio management."
            stat1Value="$10M ARR"
            stat1Label="Growth"
            stat2Value="25K+"
            stat2Label="Users"
            stat3Value="4.8"
            stat3Label="Rating"
            heightClass="h-[532px]"
            imageHeightClass="h-[144px]" // Adjust image height proportionally or as needed
          ></CardModule>

          <CardModule
            title="AI Insights Platform"
            category="AI/ML"
            description="No-code AI platform that transforms business data into predictive insights automatically."
            stat1Value="450%"
            stat1Label="Growth"
            stat2Value="40K+"
            stat2Label="Users"
            stat3Value="4.9"
            stat3Label="Rating"
            heightClass="h-[585px]"
            imageHeightClass="h-32"
          ></CardModule>
        </div>
      </div>
      {/* part - 3 */}
      <div className=" ">
        <div className="flex flex-row gap-2 ml-10">
          
          <p className="text-white">All Projects</p>
          <p className="text-white">(6)</p>
        </div>
        <div className="grid grid-cols-3 mb-10 justify-center items-start ml-10">
          <CardModule
            title="ZenFlow Analytics"
            category="Analytics"
            description="AI-powered data visualization platform that makes complex analytics simple and beautiful."
            stat1Value="400%"
            stat1Label="Growth"
            stat2Value="50K+"
            stat2Label="Users"
            stat3Value="4.9"
            stat3Label="Rating"
            heightClass="h-[532px]"
            imageHeightClass="h-32"
          ></CardModule>
          <CardModule
            title="FundTech Pro"
            category="Fintech"
            description="Investment platform that democratizes wealth building with intelligent portfolio management."
            stat1Value="$10M ARR"
            stat1Label="Growth"
            stat2Value="25K+"
            stat2Label="Users"
            stat3Value="4.8"
            stat3Label="Rating"
            heightClass="h-[532px]"
            imageHeightClass="h-[144px]" // Adjust image height proportionally or as needed
          ></CardModule>

          <CardModule
            title="AI Insights Platform"
            category="AI/ML"
            description="No-code AI platform that transforms business data into predictive insights automatically."
            stat1Value="450%"
            stat1Label="Growth"
            stat2Value="40K+"
            stat2Label="Users"
            stat3Value="4.9"
            stat3Label="Rating"
            heightClass="h-[585px]"
            imageHeightClass="h-32"
          ></CardModule>
        </div>
      </div>


      {/* part - 4 */}
      <div className=" ">
        
        <div className="grid grid-cols-3 mb-10 justify-center items-start ml-10">
          <CardModule
            title="ZenFlow Analytics"
            category="Analytics"
            description="AI-powered data visualization platform that makes complex analytics simple and beautiful."
            stat1Value="400%"
            stat1Label="Growth"
            stat2Value="50K+"
            stat2Label="Users"
            stat3Value="4.9"
            stat3Label="Rating"
            heightClass="h-[532px]"
            imageHeightClass="h-32"
          ></CardModule>
          <CardModule
            title="FundTech Pro"
            category="Fintech"
            description="Investment platform that democratizes wealth building with intelligent portfolio management."
            stat1Value="$10M ARR"
            stat1Label="Growth"
            stat2Value="25K+"
            stat2Label="Users"
            stat3Value="4.8"
            stat3Label="Rating"
            heightClass="h-[532px]"
            imageHeightClass="h-[144px]" // Adjust image height proportionally or as needed
          ></CardModule>

          <CardModule
            title="AI Insights Platform"
            category="AI/ML"
            description="No-code AI platform that transforms business data into predictive insights automatically."
            stat1Value="450%"
            stat1Label="Growth"
            stat2Value="40K+"
            stat2Label="Users"
            stat3Value="4.9"
            stat3Label="Rating"
            heightClass="h-[585px]"
            imageHeightClass="h-32"
          ></CardModule>
        </div>
      </div>

      {/* part - 5 */}
      <div className="flex flex-col justify-center items-center mx-auto mt-30 gap-8 w-[896px] h-[283px] rounded-[24px] shadow-[0px_8px_32px_0px_#1F26875E] [background-image:linear-gradient(-32deg,_#282A43,_#222544)] backdrop-blur-xl border border-[#FFFFFF1A]">
        <p className="text-white font-inter font-bold text-[30px] leading-[36px] tracking-[-0.75px] text-center">Ready to Start Your Project?</p>
        <p className="text-white font-inter font-[300] text-[20px] leading-[28px] tracking-normal text-center">Let's discuss how we can help you achieve similar results with your SaaS product.</p>
        <Link to="contact" smooth={true} duration={1000} className="px-8 py-4 rounded-[16px] text-white text-[18px] font-medium bg-gradient-to-tl from-[#1991EB] to-[#8764FF] hover:from-[#8764FF] hover:to-[#1991EB] shadow-inner transform hover:scale-105 transition-transform duration-200 cursor-pointer">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default AllProjects;
