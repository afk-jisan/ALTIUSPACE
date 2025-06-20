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
    <div id='projects' className="bg-[#1A1A1A] mb-50">
      <div className="bg-white flex flex-col justify-between items-center rounded-t-[130px] pt-20">
        <p className="px-5 text-[48px] font-extrabold bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent text-center">Making <span className="font-pattaya font-normal">waves</span> across all <span className="font-pattaya font-normal">industries</span></p>
        <p className="px-5 text-[28px] text-[rgba(0,0,0,0.37)] pt-[50px] text-center">Every engagement is crafted with surgical precision to deliver measurable results that transform your SaaS business.</p>
        <div ref={container} className=" ">
          {
            projectsData.map( (project, i) => {
              const targetScale = 1 - ((projectsData.length - i) * 0.05);
              return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale}/>
            })
          }
        </div>
        <div className="">
          <p className="text-[48px] text-center">Why choose us?</p>
          <p className="px-5 text-[48px] font-bold bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent text-center">Because your <span className="font-pattaya font-normal">growth</span> deserves <span className="font-pattaya font-normal">excellence</span></p>
          <div className="bg-[#D9D9D9] rounded-[24px] w-[90%] h-[583px] flex justify-center items-center mt-15 mx-auto text-[23px] text-center"><p>Existing design/websites video will apprear here</p></div>
        </div>
      </div>
      
    </div>
  );
}

export default Project;