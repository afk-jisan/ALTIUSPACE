const CardModule = ( { title, category, description, stat1Value, stat1Label, stat2Value, stat2Label, stat3Value, stat3Label, heightClass, imageHeightClass}) => {
  return (
    <div class={`mt-4 flex-grow flex flex-col w-[350px] ${heightClass} shadow-[0px_8px_32px_0px_#1F26875E] [background-image:linear-gradient(-32deg,_#282A43,_#222544)] backdrop-blur-xl border border-[#FFFFFF1A] rounded-[24px] p-8`}>
      <div className="">
        <div className="w-[284px] h-[192px] bg-[#D9D9D9] mb-3"></div>
        <h3 class="text-white text-xl font-semibold -bg">{ title }</h3>
        <p class="text-sm text-[rgba(159,131,255,1)] mt-1">{ category }</p>
        <p class="text-gray-300 text-sm mt-3 leading-relaxed">
          { description }
        </p>
      </div>


      <div className="border border-[rgba(255,255,255,0.2)] mt-6"> </div>
      <div class="flex justify-around items-center mt-3">
        <div class="text-center">
          <p class="text-[14px] bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent font-bold text-lg">{ stat1Value }</p>
          <p class="text-[12px text-white">{ stat1Label }</p>
        </div>
        <div class="text-center">
          <p class="text-[14px] bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent font-bold text-lg">{ stat2Value }</p>
          <p class="text-[12px] text-white">{ stat2Label }</p>
        </div>
        <div class="text-center">
          <p class="text-[14px] font-normal text-white ">
            { stat3Value } <span class="">&#9733;</span>
          </p>
          <p class="text-[14px] font-normal text-white">{ stat3Label }</p>
        </div>
      </div>
    </div>
  );
};

export default CardModule;

//  props: {
//     title: String,
//     category: String,
//     description: String,
//     stat1Value: String,
//     stat1Label: String,
//     stat2Value: String,
//     stat2Label: String,
//     stat3Value: String,
//     stat3Label: String,
//     // Prop for controlling overall card height
//     heightClass: {
//       type: String,
//       default: 'h-[360px]' // Default height if not specified
//     },
//     // Prop for controlling image placeholder height
//     imageHeightClass: {
//       type: String,
//       default: 'h-32' // Default image height if not specified
//     }
//   },
//   template: `... (the HTML above) ...`
// });

// Example usage to create the three cards:

// Card 1 (ZenFlow Analytics)
{/* <project-card
  title="ZenFlow Analytics"
  category="Analytics"
  description="AI-powered data visualization platform that makes complex analytics simple and beautiful."
  stat1Value="400%"
  stat1Label="Growth"
  stat2Value="50K+"
  stat2Label="Users"
  stat3Value="4.9"
  stat3Label="Rating"
  heightClass="h-[360px]" // Default height
  imageHeightClass="h-32"
></project-card> */}
