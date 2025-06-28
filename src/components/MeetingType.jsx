const meetingOptions = [
  {
    id: 'free',
    title: 'Free Strategy Consultation',
    description: '30-minute discovery call to understand your SaaS challenges and explore how we can help.',
    points: [
      'Business challenge assessment',
      'Tailored recommendations',
      'Custom proposal discussion',
      'No obligation',
    ],
    duration: '30min',
    price: 'Free',
    icon: './free_consulltation.png',
    popular: true,
  },
  {
    id: 'deep-dive',
    title: 'Deep Dive Strategy Session',
    description: 'Comprehensive strategy session with actionable insights and implementation roadmap.',
    points: [
      'Detailed business analysis',
      'Strategic recommendations',
      'Implementation roadmap',
      'Follow-up materials',
    ],
    duration: '60min',
    price: '$49',
    icon: './deep_dive.png',
  },
  {
    id: 'emergency',
    title: 'Emergency Consultation',
    description: 'Urgent consultation for critical business decisions or immediate challenges.',
    points: [
      'Same-day availability',
      'Crisis management guidance',
      'Immediate action plan',
      'Priority support access',
    ],
    duration: '90min',
    price: '$79',
    icon: './emergency_consultation.png',
  },
];

const MeetingType = ({ onNext }) => {
  return (
    <div className="space-y-6 px-2 xsm:px-10 md:px-20 lg:px-30">
      <h2 className="text-2xl font-semibold">Select Meeting Type</h2>

      {meetingOptions.map((option) => (
        <div
          key={option.id}
          className="rounded-[24px] px-5 xsm:px-10 py-12 bg-gradient-to-r from-[#292A4C] to-[#212346] cursor-pointer border border-[#3D3E55] drop-shadow-[0px_8px_32px_rgba(31,38,135,0.37)] transition duration-200 hover:scale-[1.01]"
          onClick={() => onNext(option.id)}
        >
          <div className="flex items-start justify-between gap-4 relative">
            {/* Left Icon */}
            <img src={option.icon} alt={option.id} className="h-[48px] w-[48px] pointer-events-none" ></img>
            
            {option.popular && (
                <p className="absolute top-0 left-0 translate-x-[5px] xsm:translate-x-[-5px] translate-y-[-62px] text-[12px] font-semibold bg-gradient-to-r from-[#8167FE] to-[#208EEC] px-4 py-1 rounded-full text-white">
                  Most Popular
                </p>
              )}


            {/* Middle Content */}
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold">{option.title}</h3>
              </div>
              <p className="text-sm text-white mt-5 mb-4">{option.description}</p>
              
                {option.points.map((point, index) => (
                  <div className="flex flex-row gap-2 text-[14px]">
                  <p className="text-green-500 ">✓</p>
                  <p>{point}</p>
                  </div>
                ))}
              
              
            </div>

            {/* Right Price & Duration */}
            <div className="flex-shrink-0 text-right w-[50px]">
              <p className="text-lg font-semibold bg-gradient-to-r from-[#9F83FF] to-[#47A7EF] bg-clip-text text-transparent">{option.price}</p>
              <p className="text-sm text-gray-400">{option.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingType;
