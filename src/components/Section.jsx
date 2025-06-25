import { useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Section = ({ id, setActiveSection, children }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'], 
  });
 
  useEffect(()=> {
      scrollYProgress.on("change", e => console.log(scrollYProgress.current))
  }, [])
  

  // When top of the section crosses under the navbar
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!(progress > 0.98 && progress < 1)) {
      setActiveSection(id);
    }
  });
 

  return (
    <section
      ref={container}
      id={id}
      className=""
    >
      {children}
    </section>
  );
};

export default Section;


/*

| Scroll Position | What Happens | Explanation                                                                        
| start start     | progress = 0 | The TOP of the section touches the TOP of the screen → beginning of scroll 
| end start       | progress = 1 | The Bottom of the section touches the Bottom of the screen → end of scroll 


to check the values use this:
useEffect(()=> {
    scrollYProgress.on("change", e => console.log(scrollYProgress.current))
}, [])


*/