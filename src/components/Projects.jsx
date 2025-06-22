import { projectsData } from "../data/data";
import Card from "../components/Card";
import { motion, useScroll } from "framer-motion"
import { useRef } from "react";


const Project = () => {
 const container = useRef(null);
 const { scrollYProgress } = useScroll({
  target: container,
  offset: ['start start', 'end end']
 })

  return (
    <div id='projects' className="bg-white">
      <div className=" flex flex-col justify-between items-center rounded-t-[30px] sm:rounded-t-[45px] md:rounded-t-[130px] pt-20 sm:pt-30 custom:w-[1200px] mx-auto">
        <p className="px-5 text-[38px] md:text-[48px] font-extrabold bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent text-center">Making <span className="font-pattaya font-normal">waves</span> across all <span className="font-pattaya font-normal">industries</span></p>
        <p className="px-5 text-[18px] md:text-[28px] text-[rgba(0,0,0,0.37)] pt-[50px] text-center mb-30 sm:mb-0">Every engagement is crafted with surgical precision to deliver measurable results that transform your SaaS business.</p>
        <div ref={container} className=" ">
          {
            projectsData.map( (project, i) => {
              const targetScale = 1 - ((projectsData.length - i) * 0.05);
              return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale}/>
            })
          }
        </div>
        <div className="">
          <p className="text-[38px] sm:text-[48px] text-center mt-30 sm:mt-0">Why choose us?</p>
          <p className="px-5 text-[38px] sm:text-[48px] font-bold bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent text-center">Because your <span className="font-pattaya font-normal">growth</span> deserves <span className="font-pattaya font-normal">excellence</span></p>
          <div className="bg-[#D9D9D9] rounded-[24px] w-[90%] h-[583px] flex justify-center items-center mt-15 mx-auto text-[23px] text-center mb-20"><p>Existing design/websites video will apprear here</p></div>
        </div>
      </div>
      
    </div>
  );
}

export default Project;