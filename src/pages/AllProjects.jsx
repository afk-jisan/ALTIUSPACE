import SearchNFilters from "../components/SearchNFilters";
import CardModule from "../components/CardModule";
const AllProjects = () => {
  return (
    <div className="bg-[#1A1A1A] pt-10 w-[1200px] mx-auto">
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
          <div className="flex flex-row  gap-4">
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
        <div className="grid grid-cols-3 mb-10 justify-center items-center ml-10">
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
            heightClass="h-[557px]"
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
            heightClass="h-[557px]"
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
        <div className="grid grid-cols-3 mb-10 justify-center items-center ml-10">
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
            heightClass="h-[557px]"
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
            heightClass="h-[557px]"
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
        
        <div className="grid grid-cols-3 mb-10 justify-center items-center ml-10">
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
            heightClass="h-[557px]"
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
            heightClass="h-[557px]"
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
    </div>
  );
};

export default AllProjects;
