import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import useBreakpoint from "../hooks/useBreakpoint";

export default function Card( { title, description, src, subtitle, color, i, progress, range, targetScale} ) {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale])

    const { isMd } = useBreakpoint();

    return (
        <div ref={container} className="h-[100vh] flex justify-center items-center sticky top-0 xl:w-[1200px]">
            <motion.div style={{scale, backgroundColor: color, top: `calc(-10% + ${i * 35}px)`, left: isMd ? `calc(-1% + ${i * 40}px)` : 0, width: isMd ? '75%' : '90%' }} className= "h-fit sm:h-[466px] relative top-[-10%] rounded-[35px] ">
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div className="sm:w-[50%] h-[350px] sm:h-[466px] p-10 ">
                        <div className=" rounded-[16px] relative overflow-hidden w-full h-full ">
                            <motion.div style={{scale: imageScale}} className="w-full ">
                                <img className="h-[466px] w-full object-fill" src={src}></img>
                            </motion.div>                    
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start flex-1/2 p-11 pt-0 sm:p-5">
                        <p className="text-[30px] font-pattaya font-normal">{title}</p>
                        <p className="text-[30px] font-medium">{subtitle}</p>
                        <p className="text-[18px]">{description}</p>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}


//relative top-[-10%] diye upore shift 
// use relative top-[-10%] to shift upwards
//left: `calc(-1% + ${i * 55}px) remove it later if needed

// first animation: image has bigger scale, as we scroll it scale to original
// second: cards get scaled down the more we scroll //cards parallax
// thrid : smooth scroll
/* 
const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'start start'] "cardContainer window"
    })

*/



/*
 <div ref={container} className="h-[100vh] flex justify-center items-center sticky top-0">
            <motion.div style={{scale, backgroundColor: color, top: `calc(-10% + ${i * 35}px)`, left: `calc(-1% + ${i * 40}px)`}} className= "w-[75%] h-[466px] relative top-[-10%] rounded-[35px] ">
                <div className="flex flex-row justify-center items-center">
                    <div className="w-[50%] h-[466px] flex flex-col justify-center items-center border-2">
                        <div className=" rounded-[16px] relative overflow-hidden ">
                            <motion.div style={{scale: imageScale}} className="w-full ">
                                <img className="h-[395px] w-[389px] object-fill" src={src}></img>
                            </motion.div>                        
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start flex-1/2 p-5">
                        <p className="text-[30px] font-pattaya font-normal">{title}</p>
                        <p className="text-[30px] font-medium">{subtitle}</p>
                        <p className="text-[18px]">{description}</p>
                    </div>

                </div>
            </motion.div>
        </div>
*/